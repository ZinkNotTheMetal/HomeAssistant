//https://developers.home-assistant.io/docs/en/lovelace_custom_card.html

//You can use Polymer, Angular, Preact or any other popular framework


//    const entityId = this.config.entity;
//    const entityName = this.config.name;
//    const state = hass.states[entityId];
//    const stateStr = state ? state.state : 'unavailable';

//    const blindClosedIcon = "mdi:blinds"
//    const blindOpenIcon = "mdi:blinds-open";
//    const arrowUpIcon = "mdi:arrow-up-bold";
//    const arrowDownIcon = "mdi:arrow-down-bold";
import { LitElement, html, css } from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

class ShadeStatusCard extends LitElement {
  static get properties() {
    return {
      _hass: {},
      config: {},
      entity: {},
      stateString: String,
      name: String
    };
  }

  set hass(hass) {
    if (!hass) return;
    const entity = this.config.entity;
    const name = this.config.name;
    const entityState = hass.states[entity];
    const stateString = entityState ? entityState.state : 'unavailable';
    this._hass = hass;
    if (stateString && this.stateString !== stateString) {
      this.stateString = stateString;
    }
    if (entity && this.entity !== entity) {
      this.entity = entity;
    }
    if (name && this.name !== name) {
      this.name = name;
    }
  }

  get hass() {
    return this._hass;
  }

  render() {
    return html`
      <ha-card>
        <div>
          Hi Mom
        </div>
        ${this.entity}
        <br>
        ${this.stateString}
        <br>
        ${this.name}
        <br>
        <ha-icon id="down-arrow" icon="mdi:arrow-down-bold"></ha-icon> | <ha-icon id="down-arrow" icon="mdi:arrow-down-bold"></ha-icon>
      </ha-card>
    `;
  }

  renderUpArrow() {
    const arrowUpIcon = "mdi:arrow-up-bold";

    return html`
      <div>
        <ha-icon data-domain="arrow-up-bold" id="up-arrow" icon="mdi:arrow-up-bold"></ha-icon>
      </div>
      `;
  }

  renderDownArrow() {
    const arrowDownIcon = "mdi:arrow-down-bold";

    return html`<ha-icon id="down-arrow" icon="mdi:arrow-down-bold"></ha-icon>`;
  }

  renderShadeIcon() {
     const blindClosedIcon = "mdi:blinds"
     const blindOpenIcon = "mdi:blinds-open";
     let icon = "";
     if(this.stateString === "Closed") {
       icon = blindClosedIcon;
     } else {
       icon = blindOpenIcon;
     }  

     return html`<ha-icon .icon=${icon}></ha-icon>`
  }

  getCardSize() {
    return 2;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this.config = config;
  }
}

customElements.define('shade-status-card', ShadeStatusCard);