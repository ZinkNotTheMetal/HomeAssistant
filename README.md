# Here's my [Home Assistant (HA)](https://home-assistant.io/) configuration. 

| ![](https://img.shields.io/badge/Home%20Assistant-0.116.4-blue.svg) | ![](https://img.shields.io/github/stars/zinknotthemetal/homeassistant.svg?label=Stars)|
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

<div align="center"><a name="menu"></a>
  <h4>
    <a href="#devices">
      Devices
    </a>
    <span> | </span>
    <a href="#services">
      Services
    </a>
    <span> | </span>
    <a href="#automations">
      Automations
    </a>
    <span> | </span>
    <a href="#dashboard">
      Dashboard
    </a>
    <span> | </span>
    <a href="https://github.com/ZinkNotTheMetal/HomeAssistant/issues">
      Todo List
    </a>
  </h4>
</div>


### Equipment running Home Assistant:
- [NUC 8-i3 Short](https://www.amazon.com/gp/product/B07GX54W33/ref=ppx_yo_dt_b_asin_title_o00__o00_s00?ie=UTF8&psc=1)
- [8GB RAM](https://www.amazon.com/gp/product/B019FRD3SE/ref=ppx_yo_dt_b_asin_title_o00__o00_s00?ie=UTF8&psc=1)
- [128GB NVME Drive](https://www.amazon.com/Crucial-500GB-NAND-NVMe-PCIe/dp/B07J2WBKXF/ref=sr_1_2_sspa?s=electronics&ie=UTF8&qid=1548438559&sr=1-2-spons&keywords=128+gb+nvme+m.2+ssd&psc=1)
- [Raspberry Pi Zero W (PiHole)](https://www.raspberrypi.org/products/raspberry-pi-zero-w/)

### Installation:
* NUC 8 -i3 Short
  * Standard Debian Installation with Docker (lightweight and reliable)
  * [Home Assistant via Docker](https://hub.docker.com/r/homeassistant/home-assistant)
  * [Portainer](https://hub.docker.com/u/portainer/#!)
  * [Node-Red via Docker](https://hub.docker.com/r/nodered/node-red)
  * [Duck DNS via Docker](https://hub.docker.com/r/linuxserver/duckdns/)
  * [Let's Encrypt via Docker](https://hub.docker.com/r/linuxserver/letsencrypt/)
  * [HACS for Plugins](https://hacs.xyz/docs/installation/manual)

* Software used
  * WSL for windows to SSH into NUC (PuTTY is another option)
  * [PuTTY](https://www.putty.org/) to SSH into NUC
  * [Visual Studio Code](https://code.visualstudio.com/) code editor of choice

Migrated to individual docker images as Supervised installations of hass.io become obsolete.

### Useful Documentation:
- [Home Assistant Releases](https://github.com/home-assistant/home-assistant/releases)
- [Awesome Home Assistant](https://www.awesome-ha.com/)

## [Devices](#devices)

### Hubs
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="https://amzn.to/2Bu9BLz"><img src="https://brain-images-ssl.cdn.dixons.com/2/2/10138722/u_10138722.jpg" width="190px" height="150px" /></a> [Phillips Hue Hub v2](https://amzn.to/2Bu9BLz) | 1 | Ethernet | [Philips Hue](https://www.home-assistant.io/components/hue/) | Used to control Phillips Hue Bulbs. The Philips hue bridge 2.0 can control up to 50 light bulbs and 12 accessories at a time, provided that they are connected in range. |
| <a href="http://a.co/d/fbZaxf7"><img src="https://images-na.ssl-images-amazon.com/images/I/61-zByP2fTL._SL1500_.jpg" width="190px" height="150px" /></a> [Aeotec Z-Stick Gen5](http://a.co/d/fbZaxf7) | 1 | USB | [Z-Wave](https://www.home-assistant.io/components/zwave/) | Used to control all Z-Wave devices in Home Assistant. This is a USB stick that is plugged directly into the Raspberry Pi. Using secure Z-Wave that is configured in the configuration.yaml |

### Lighting
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="http://a.co/d/a54cHvp"><img src="https://images.homedepot-static.com/productImages/7d8edcf4-11b5-4cf1-8747-7ba637f618d1/svn/philips-led-bulbs-530210-64_1000.jpg" width="185px" height="180px" /></a><br> [Philips Hue A19 Bulb](http://a.co/d/a54cHvp) | 26 | Hue Bridge | [Philips Hue](https://www.home-assistant.io/components/hue/) | Color changing smart bulbs developed by Philips ($40-$50) |
| <a href="http://a.co/d/a54cHvp"><img src="https://images-na.ssl-images-amazon.com/images/I/41LOPIeIkBL.jpg" width="185px" height="180px" /></a><br> [Philips Hue Bloom](https://amzn.to/2lPkEY8) | 2 | Hue Bridge | [Philips Hue](https://www.home-assistant.io/components/hue/) | Color changing smart lamps developed by Philips ($60) |
| <a href="http://a.co/d/6OUFPsd"><img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4373/4373913_sd.jpg;maxHeight=640;maxWidth=550" width="185px" height="180px" /></a><br> [Philips Hue Indoor Light Strip](http://a.co/d/6OUFPsd) | 2 | Hue Bridge | [Philips Hue](https://www.home-assistant.io/components/hue/) | Color changing LED indoor light Strips ($60-$80) I have one over the kitchen cabinet with an extension |
| <a href="http://a.co/d/7N361Gx"><img  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6284/6284603_sd.jpg;maxHeight=640;maxWidth=550" width="185px" height="180px" /></a><br> [Philips Hue Outdoor Light Strip](http://a.co/d/7N361Gx) | 4 | Hue Bridge | [Philips Hue](https://www.home-assistant.io/components/hue/) | Color changing LED outdoor light Strips ($160) |

### Hue Devices
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="http://a.co/d/fv4wwLC"><img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/7863/7863116_sa.jpg;maxHeight=1000;maxWidth=1000" width="185px" height="130px" /></a><br> [Tap Switch](http://a.co/d/fv4wwLC) | 1 | Hue Bridge | [Philips Hue](https://www.home-assistant.io/components/hue/) | Switch that requires no batteries developed by Philips ($40-$50). Useful since it has 4 total buttons |
| <a href="http://a.co/d/6DmlQdy"><img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4373/4373904_sd.jpg;maxHeight=1000;maxWidth=1000" width="185px" height="150px" /></a><br> [Dimmer Switch](http://a.co/d/6DmlQdy) | 5 | Hue Bridge | [Philips Hue](https://www.home-assistant.io/components/hue/) | Dimmer switch that requires batteries developed by Philips ($25) |
| <a href="https://amzn.to/2m4XRHY"><img src="https://images-na.ssl-images-amazon.com/images/I/81agAEV1VVL._SL1500_.jpg" width="185px" height="150px" /></a><br> [Motion Sensor](http://a.co/d/6DmlQdy) | 3 | Hue Bridge | [Philips Hue](https://www.home-assistant.io/components/hue/) | Motion Sensor that has temperature sensor built in ($40) |

### Blinds
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="https://www.hunterdouglas.com/operating-systems/motorized/powerview-motorization"><img src="http://www.hunterdouglascomponents.com/media/cache/84/f5/84f500691371a792be660994e9b0b01a.jpg" width="260px" height="120px" /></a><br> [Hunter Douglas Blinds](https://www.hunterdouglas.com/operating-systems/motorized/powerview-motorization) | 2 | Proprietary Bridge | [Direct Hub API](https://github.com/drbrain/indigo-powerview/blob/master/PowerView%20API.md) | Using multiple 'scenes' in PowerView app that sets the blinds to the appropriate height. I have the dimmer switches set to activate scenes using Node-Red |

### Lock
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="http://a.co/d/9L8AI94"><img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6085/6085415_sd.jpg;maxHeight=1000;maxWidth=1000" width="210px" height="80px" /></a><br> [August Smart Lock Pro - Gen 3](http://a.co/d/9L8AI94) | 1 | Z-Wave / Wi-Fi | [Wi-Fi](https://www.home-assistant.io/integrations/august/) | The new August Lock component in Home Assistant is fast and reliable. Z-Wave has been hit or miss for some devices.  $200 |

### Indoor Climate 
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="http://a.co/d/9YIbOpm"><img src="https://images-na.ssl-images-amazon.com/images/I/71wlZSurPPL._SL1500_.jpg" width="300px" height="160px" /></a><br> [ecobee - Gen 2](http://a.co/d/9YIbOpm) | 1 | Wi-Fi | [ecobee](https://www.home-assistant.io/components/ecobee/) | Component works great, I use this for my entire HVAC system. I have multiple modes, AWAY, SLEEP, HOME. I also configured it to only be within 3 degrees rather than the typical 5 |
| <a href="http://a.co/d/cM1LTUv"><img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/8077/8077101_rd.jpg;maxHeight=1000;maxWidth=1000" width="140px" height="140px" /></a><br> [Nest Smoke & Carbon Monoxide Alarm - Gen2](http://a.co/d/cM1LTUv) | 1 | Wi-Fi | [NEST](https://www.home-assistant.io/components/nest/) | NEST Smoke & Carbon Monoxide Alarm works great and doesn't have the annoying alarm when the batteries are dead - $119 |
| <a href="https://amzn.to/2SnoFAi"><img src="https://images-na.ssl-images-amazon.com/images/I/61T5C%2B93PjL._AC_SL1500_.jpg" width="140px" height="140px" /></a><br> [Fanimation Fan - 72"](https://amzn.to/2SnoFAi) | 2 | [Google Assistant Relay](https://github.com/greghesp/assistant-relay) | [Google Assistant Relay (ReST commands)](https://www.home-assistant.io/integrations/rest_command/) | Fanimation Wi-Fi Module to connect fans to Wi-Fi. There is currently no local API to set the fan speed or light so using google assistant to set these values |

### Media
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="http://a.co/d/0uRLeYF"><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/H/KK/HKKZ2/HKKZ2_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1475452852873" width="270px" height="160px" /></a><br> [Sonos Play:1](http://a.co/d/0uRLeYF) | 3 | Wi-Fi | [SONOS](https://www.home-assistant.io/components/sonos/) | I currently do not have any Alexa or Google Assistant devices $150 |
| <a href="http://a.co/d/6aAYt6w"><img src="https://assets.pcmag.com/media/images/316505-sonos-playbar.jpg?width=1000&height=542" width="270px" height="160px" /></a><br> [Sonos Playbar](http://a.co/d/6aAYt6w) | 1 | Wi-Fi | [SONOS](https://www.home-assistant.io/components/sonos/) | Good soundbar and integrates well with SONOS system |
| <a href="https://amzn.to/2M4m3nD"><img src="https://cdn.shopify.com/s/files/1/1698/5279/products/move-dock-hover.jpg?v=1574712653" width="270px" height="160px" /></a><br> [Sonos Move](http://a.co/d/6aAYt6w) | 1 | Wi-Fi | [SONOS](https://www.home-assistant.io/components/sonos/) | Expensive at $399 but it is 'portable' |
| <a href="http://a.co/d/dxfiS79"><img src="https://images-na.ssl-images-amazon.com/images/I/817C2spZZDL._SL1500_.jpg" width="210px" height="180px" /></a><br> [LG Web OS Smart TV](http://a.co/d/dxfiS79) | 1 | Wi-Fi | [LG WebOS](https://www.home-assistant.io/components/media_player.webostv/) | This is my main main TV. Highly recommend OLED and this is the 4K model |

### Sensors
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="https://www.monoprice.com/product?p_id=24259"><img src="https://images.monoprice.com/productlargeimages/242591.jpg" width="270px" height="160px" /></a><br> [Monoprice Z-Wave Plus Door Sensor](https://www.monoprice.com/product?p_id=24259) | 2 | Z-Wave | [Z-Wave](https://www.home-assistant.io/components/zwave/) | Locations: Washer door / Back door |
| <a href="https://www.monoprice.com/product?p_id=15269"><img src="https://images-na.ssl-images-amazon.com/images/I/41QK0%2BdoHvL._SL1200_.jpg" width="270px" height="160px" /></a><br> [Monoprice Z-Wave Vibration Sensor](https://www.monoprice.com/product?p_id=24259) | 1 | Z-Wave | [Z-Wave](https://www.home-assistant.io/components/zwave/) | Locations: Dryer Motor (to determine when dryer is finished) |

### Plugs
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="http://a.co/d/4Z3Zl8v9"><img src="https://images-na.ssl-images-amazon.com/images/I/61HqxIYsqPL._SL1000_.jpg" width="200px" height="160px" /></a><br> [WeMo Mini Smart Plugs](http://a.co/d/4Z3Zl8v) | 1 | Wi-Fi | [WeMo](https://www.home-assistant.io/components/wemo/) | Useful plugs that you can automate, I like that you can use 2 per outlet  |

### Vacuum
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="https://amzn.to/2ZYBrd4"><img src="https://sg-test-11.slatic.net/p/6ae07c5e299ed81d081faee9b7d9b447.jpg" width="250px" height="160px" /></a><br> [Roborock S55](https://amzn.to/2ZYBrd4) | 1 | Wi-Fi | [Xiaomi](https://www.home-assistant.io/integrations/vacuum.xiaomi_miio/) | Attempted to load Valetudo, but it did not work. I might attempt again later but for now just using the regular Xiaomi Integration  |

### Shower
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="https://amzn.to/2khdhIO"><img src="https://images-na.ssl-images-amazon.com/images/I/61aNUTvrUhL._SL1500_.jpg" width="200px" height="160px" /></a><br> [U by Moen](http://a.co/d/4Z3Zl8v) | 1 | Wi-Fi | N/A Yet (Hoping to use Wi-fi & API) | Amazing Shower Controller, but expensive and requires 3 different parts  |

## [Services](#services)
* Weather and Climate related
  * [Windy](https://www.windy.com/)
  * [Open Weather Map](https://www.home-assistant.io/components/sensor.openweathermap/)
  * [Open Weather Map Api for Node-Red](https://openweathermap.org/api)
  * [Pollen](https://www.home-assistant.io/components/sensor.pollen/) sensor for allergy related information
  * [Github](https://www.home-assistant.io/components/github/)
* Presence:
  * [Life360](https://github.com/pnbruckner/homeassistant-config/blob/master/docs/life360.md)
  * [iOS app](https://itunes.apple.com/us/app/home-assistant-companion/id1099568401?mt=8)
  * [Waze](https://www.home-assistant.io/components/sensor.waze_travel_time/) (for commute times)
* [iOS](https://home-assistant.io/docs/ecosystem/ios/notifications/basic/) Notifications
  
  
  
## [Automations](#automations)
All Automations are using Node-Red (via Docker)

Automations:
1) In the middle of the night raise the blinds, turn down the fan, and turn the AC to normal (not sleep mode). This allows me to wake up warmer and wanting to get out of bed

2) Intelligent blinds. Check the elevation and azimuth of the sun using the sun sensor, bringing them down to the appropriate height as the sun sets in my windows. Also checks to see if there is cloud cover and not to lower them if there is cloud coverage greater than 75%

3) When the Hue Tap is pressed for good night, Set the AC to sleep mode, turn off TV, turn off SONOS, lock the door, turn on the fan to high.

4) When any of the Hue Dimmer switches are held on, raise the blinds

5) When any of the Hue Dimmer switches are held off, lower the blinds

6) When leaving the house, lock the door, turn off AC, lower the blinds, turn off all the lights.

7) When coming home, unlock the door, turn off AC, raise blinds following automation in step 2)

### Useful Notification Automations
1) Notify when the windspeed is over 20 miles per hour
2) Notify airport travel and TSA wait time when vacation mode is set
3) Notify when Humidity is too high or too low
4) Notify if the low tonight is below freezing
5) Plus many more....


## [Dashboard](#dashboard)
<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/www/dashboard_pictures/overview.png" alt="Home Assistant dashboard 1" />

<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/www/dashboard_pictures/status-page.png" alt="Home Assistant dashboard 2" />

-ZinkNotTheMetal
