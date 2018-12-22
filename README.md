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

![](https://img.shields.io/badge/email-ZinkNotTheMetal@gmail.com-red.svg)


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
  * [Hass.io](https://www.home-assistant.io/hassio/installation/) I used ethernet for speed, but if you need Wifi [check my instructions here](https://github.com/ZinkNotTheMetal/HomeAssistant/wiki/Hass.io-RPi-3-B--Wifi-Connection)
  * [Node-Red](https://nodered.org/) (using Hassio addins)
  * [Log Viewer](https://github.com/hassio-addons/addon-log-viewer) (using Hassio addins)
  * [SSH server](https://github.com/hassio-addons/addon-ssh) (using Hassio addins) to utilize I use [PuTTY](https://www.putty.org/) for Windows
  * [Samba Share](https://github.com/home-assistant/hassio-addons/tree/master/samba) (using Hassio addins)

## Some of the devices and services that I use with HA
* Lighting and Switches
  * [Philips Hue A19 Bulb (x25)](http://a.co/d/a54cHvp)
  * [Philips Hue Indoor Light Strip (x2)](http://a.co/d/6OUFPsd)
  * [Philips Hue Outdoor Light Strip (x4)](http://a.co/d/7N361Gx)
  * [Philips Hue Tap Switch (x1)](http://a.co/d/fv4wwLC)
  * [Philips Hue Dimmer Switch (x3)](http://a.co/d/6DmlQdy)
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
  * [Open Weather Map Api for Node-Red](https://openweathermap.org/api)
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
* Other
  * [NAS Synology 218+](http://a.co/d/bzj6UVi)
  * [MiFlora Flower Sensors (x3)](http://a.co/d/evtvD9V)
  * Ecobee 3 sensors (x2)
  
## Automations
All Automations are using Node-Red (using Hassio Addins). This can be downloaded from my [scrubbed file](https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/Node-Red-Scrubbed-Automations.js)
### Time Automations
1) At 4AM (when everyone is sleeping) raise the bilnds to allow more light in, in the morning.
2) When light comes through the living room time (around 1:30) lower the blinds to 50%
3) At sunset raise the blinds
4) Notify if the low tonight is below freezing
### Hue Switch Automations
1) When the Tap is pressed, turn off all lights, Set AC to sleep mode, turn off TV, turn off Sonos, lock the door (this is using hue-magic)
2) When any of the Dimmer switches are held on, raise the blinds
3) When any of the Dimmer switches are held off, lower the blinds
### Device Change automations
1) If the back door opens, turn on the Hue Outdoor lights
2) Notify if any device on the network fails to connect
3) Notify if the humidity is above or below a certain amount
4) Notify if the back door opened when no one is home
5) If no one is home, set AC to away
### Weather Automations
1) Do not lower the blinds if the cloud cover is more than 60% (using open weather map api)
2) Notify if it begins to rain and back door is open

Below are some lovelace screen shots taken of my dashboard:
<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/Home-Assistant-Lovelace-1.PNG" alt="Home Assistant dashboard 1" />

<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/Home-Assistant-Lovelace-2.PNG" alt="Home Assistant dashboard 2" />

<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/Home-Assistant-Lovelace-3.PNG" alt="Home Assistant dashboard 3" />

-ZinkNotTheMetal
