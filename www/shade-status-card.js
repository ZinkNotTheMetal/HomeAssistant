//https://developers.home-assistant.io/docs/en/lovelace_custom_card.html

//You can use Polymer, Angular, Preact or any other popular framework

import { LitElement, html, css } from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

class ShadeStatusCard extends LitElement {
  static get properties() {
    return {
      _hass: {},
      config: {},
      entity: {},
      stateString: String,
      name: String,
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
      <ha-card style="padding: 15px;">
        <div style="text-align: center;">
          ${this.renderShadeIcon()}
        </div>
        <div style="text-align: center;">
          ${this.stateString}
        </div>
        <br>
        <div style="text-align: center;">
          ${this.name}
        </div>
        <br>
        <div style="text-align: center;">
          <ha-icon id="down-arrow" 
                   icon="mdi:arrow-down-bold" 
                   @ha-click="${this._shadesDown(entity)}" 
                   @ha-hold="${this._allShadesDown()}">
          </ha-icon>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ha-icon id="up-arrow" 
                   icon="mdi:arrow-up-bold" 
                   @ha-click="${this._singleShadeUp(entity)}"
                   @ha-hold="${this._allShadesDown()}">
          </ha-icon>
        </div>
      </ha-card>
    `;
  }

  _singleShadeUp(entityId) {
    let eventCall = "";
    if (entityId === "sensor.kitchen_shade_position"){
      eventCall = "kitchen_blind_up_request";
    } else {
      eventCall = "main_blind_up_request";
    }

    this.hass.callService("ifttt", "trigger", {
      event: eventCall
    });
    this.hass.callService("input_boolean", "turn_on", {
      entity_id: input_boolean.blind_override
    });
  }

  _singleSHadeDown(entityId) {
    let eventCall = "";
    if (entityId === "sensor.kitchen_shade_position"){
      eventCall = "kitchen_blind_down_request";
    } else {
      eventCall = "main_blind_down_request";
    }

    this.hass.callService("ifttt", "trigger", {
      event: eventCall
    });
    this.hass.callService("input_boolean", "turn_on", {
      entity_id: input_boolean.blind_override
    });
  }

  _allShadesUp() {
    this.hass.callService("ifttt", "trigger", {
      event: all_blinds_up_request
    });
    this.hass.callService("input_boolean", "turn_on", {
      entity_id: input_boolean.blind_override
    });
  }

  _allShadesDown() {
    this.hass.callService("ifttt", "trigger", {
      event: all_blinds_down_request
    });
    this.hass.callService("input_boolean", "turn_on", {
      entity_id: input_boolean.blind_override
    });
  }

  // Not currently used
  renderUpArrow() {
    return html`
      <div>
        <ha-icon data-domain="arrow-up-bold" id="up-arrow" icon="mdi:arrow-up-bold"></ha-icon>
      </div>
      `;
  }

  // Not currently used
  renderDownArrow() {
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