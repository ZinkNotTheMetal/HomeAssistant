# Here's my [Home Assistant (HA)](https://home-assistant.io/) configuration. 

| ![](https://img.shields.io/badge/Home%20Assistant-0.83.3-blue.svg) | ![](https://img.shields.io/github/stars/zinknotthemetal/homeassistant.svg?label=Stars)|
|:---:|:---:|
| Configuration for Home Assistant version | Please :star: this repo if you found it useful! (Click Star in the top right) |
| [![](https://img.shields.io/github/issues-raw/zinknotthemetal/homeassistant.svg)](https://github.com/ZinkNotTheMetal/HomeAssistant/issues) | ![](https://img.shields.io/github/last-commit/zinknotthemetal/homeassistant.svg) |
| Currently using issues as TODO | This is the last time I was active in this repository |
| ![](https://img.shields.io/github/languages/code-size/zinknotthemetal/homeassistant.svg) | ![](https://img.shields.io/github/commit-activity/y/zinknotthemetal/homeassistant.svg) |
| Current code size of the repository | The average amount of commits per year |

If you found this extremely helpful, feel free to reach out

![](https://img.shields.io/badge/Venmo-@ZinkNotTheMetal-blue.svg)

[![](https://img.shields.io/badge/PayPal.me-Caffeine-blue.svg)](https://paypal.me/wdzink)


### Equipment:
- [Raspberry Pi 3 B+](http://a.co/d/c4m30oN)
- [64GB SD Card](http://a.co/d/iygZSba)

### Installation:
* Computer
  * [Etcher](https://etcher.io/) for burning an image to Micro SD (installation following Hass.io documenation)
  * [Sweeet Home 3D](http://www.sweethome3d.com/) for Floor plan picture
  * [PuTTY](https://www.putty.org/) to SSH into RPi when Home Assistant doesn't respond or to check configs
  * [Visual Studio Code](https://code.visualstudio.com/) text editor of choice
* Raspberry Pi
  * [Hass.io](https://www.home-assistant.io/hassio/installation/) 
  * [Node-Red](https://nodered.org/) (using Hassio addins)
  * [Log Viewer](https://github.com/hassio-addons/addon-log-viewer) (using Hassio addins)
  * [SSH server](https://github.com/hassio-addons/addon-ssh) (using Hassio addins) to utilize I use [PuTTY](https://www.putty.org/) for Windows
  * [Samba Share](https://github.com/home-assistant/hassio-addons/tree/master/samba) (using Hassio addins)

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
