# Here's my [Home Assistant (HA)](https://home-assistant.io/) configuration. 

Equipment:
- [Raspberry Pi 3 B+](http://a.co/d/c4m30oN)
- [64GB SD Card](http://a.co/d/iygZSba)

Installation:
- [Hass.io](https://www.home-assistant.io/hassio/installation/) 
- [Node-Red](https://nodered.org/) (using Hassio addins)
- [Log Viewer](https://github.com/hassio-addons/addon-log-viewer) (using Hassio addins)
- [SSH server](https://github.com/hassio-addons/addon-ssh) (using Hassio addins) to utilize I use [PuTTY](https://www.putty.org/) for Windows
- [Samba Share](https://github.com/home-assistant/hassio-addons/tree/master/samba) (using Hassio addins)

## Some of the devices and services that I use with HA
* Lighting and Switches
  * [Philips Hue](https://www2.meethue.com/en-us)
  * [WeMo Plugs](http://a.co/d/4Z3Zl8v)
  * [Aeotec Z-Stick Gen5](https://www.amazon.com/dp/B00X0AWA6E/) for Z-Wave control
  * [Z-Wave Door Sensor](https://www.monoprice.com/product?p_id=24259)
* Automatic Blinds
  * [Hunter Douglas Shades](https://www.hunterdouglas.com/operating-systems/motorized/powerview-motorization) with [IFTTT](https://ifttt.com) to Activate Scenes
* Weather and Climate related
  * [Ecobee 3 - Gen2](https://www.ecobee.com/) (HVAC)
  * [Nest Smoke & Carbon Monoxide Alarm - Gen2](http://a.co/d/cM1LTUv)
  * [Windy](https://www.windy.com/)
  * [Open Weather Map](https://www.home-assistant.io/components/sensor.openweathermap/)
* Presence:
  * [OwnTracks](https://home-assistant.io/components/device_tracker.owntracks/)
  * MQTT
  * [iOS app](https://itunes.apple.com/us/app/home-assistant-companion/id1099568401?mt=8)
  * [Waze](https://www.home-assistant.io/components/sensor.waze_travel_time/) (for commute times)
* Media
  * [Sonos](https://www.sonos.com/) speakers and [component](https://home-assistant.io/components/media_player.sonos/)
  * [Apple TV](https://www.apple.com/tv/) and [component](https://www.home-assistant.io/components/apple_tv/)
  * LG WebOS Smart TV and [component](https://www.home-assistant.io/components/media_player.webostv/)
* [iOS](https://home-assistant.io/docs/ecosystem/ios/notifications/basic/) Notifications

Below are some lovelace screen shots taken of my dashboard:
<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/Home-Assistant-Lovelace-1.PNG" alt="Home Assistant dashboard 1" />

<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/Home-Assistant-Lovelace-2.PNG" alt="Home Assistant dashboard 2" />

<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/Home-Assistant-Lovelace-3.PNG" alt="Home Assistant dashboard 3" />

-ZinkNotTheMetal