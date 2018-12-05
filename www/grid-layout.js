import {
    LitElement, html
  } from 'https://unpkg.com/@polymer/lit-element@^0.5.2/lit-element.js?module';
  
  class GridLayout extends LitElement {
    _render() {
      const template = html`
        <style>
          #grid {
            display: grid;
          }
        </style>
          
        <div id="grid"></div>
      `;
  
      return template;
    }
  
    static get properties() {
      return {
        _hass: Object,
        _config: Object,
        _elements: Array,
      }
    }
  
    constructor() {
      super();
      this._elements = [];
    }
  
    _firstRendered() {
      this._setup();
    }
  
    setConfig(config) {
      this._config = config;
      if (this._hass && this._root) this._setup();
    }
  
    set hass(hass) {
      this._hass = hass;
      this._elements.forEach(el => el.hass = hass);
    }
  
    _setup() {
      const grid = this._root.querySelector('#grid');
      const conf = this._config;
      grid.style.gridTemplateColumns = conf.column_definitions;
      grid.style.gridTemplateRows = conf.row_definitions;
      while (grid.lastChild) {
        grid.removeChild(grid.lastChild);
      }
  
      conf.cards.forEach((card) => {
        let el;
        if (card.type.startsWith('custom:')) {
          el = document.createElement(card.type.split(':')[1])
        } else {
          el = document.createElement(`hui-${card.type}-card`);
        }
        if (card.column) {
          el.style.gridColumn = `${card.column.start || 1} / span ${card.column.width || 1}`;
        }
        if (card.row) {
          el.style.gridRow = `${card.row.start || 1} / span ${card.row.height || 1}`;
        }
        el.setConfig(card.config);
        el.hass = this._hass;
        grid.appendChild(el);
        const haCard = el.shadowRoot.querySelector('ha-card');
        if (haCard) {
          haCard.style.position = 'relative';
          haCard.style.overflow = 'hidden';
          haCard.style.padding = '16px';
          let paddingMargin = 16;
          if (conf.card_margin) {
            haCard.style.margin = `${conf.card_margin}px`;
            paddingMargin += conf.card_margin;
          }
          haCard.style.height = `calc(100% - ${paddingMargin * 2 + 2}px)`;
  
          const image = this._findImage(el);
          if (image) {
            image.style.position = 'absolute';
            image.style.top = '0';
            image.style.left = '0';
          }
        }
        this._elements.push(el);
      });
    }
  
    _findImage(el) {
      let image = el.shadowRoot.querySelector('img');
      if (!image) {
        const huiImage = el.shadowRoot.querySelector('hui-image');
        image = huiImage && huiImage.shadowRoot.querySelector('img');
      }
  
      return image;
    }
  }
  
  customElements.define('grid-layout', GridLayout);  