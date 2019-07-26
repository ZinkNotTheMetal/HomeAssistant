# Here's my [Home Assistant (HA)](https://home-assistant.io/) configuration. 

| ![](https://img.shields.io/badge/Home%20Assistant-0.96.5-blue.svg) | ![](https://img.shields.io/github/stars/zinknotthemetal/homeassistant.svg?label=Stars)|
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
* Computer
  * [Etcher](https://etcher.io/) for burning an image to Micro SD (installation following Hass.io documenation)
  * [Sweeet Home 3D](http://www.sweethome3d.com/) for Floor plan picture
  * [PuTTY](https://www.putty.org/) to SSH into NUC
  * [Visual Studio Code](https://code.visualstudio.com/) text editor of choice
* NUC 8 - i3 Short
  * [Migration from Raspberry Pi to NUC](https://github.com/ZinkNotTheMetal/HomeAssistant/wiki/Moving-from-Raspberry-Pi-to-NUC-(Docker)-for-HomeAssistant---Hass.io-with-Z-Wave)

* Additional Hass.io Addons
  * [Samba Share](https://github.com/home-assistant/hassio-addons/tree/master/samba) (using Hassio addins)
  * [Duck DNS & Let's Encrypt](https://www.home-assistant.io/addons/duckdns/) (using Hassio addins)  
* Lovelace (Custom Components)
  * [Custom Mini Media Player](https://github.com/kalkih/mini-media-player) for SONOS speakers
* [Pi-hole](https://pi-hole.net/) installed on the Raspberry Pi Zero W [instructions](https://learn.adafruit.com/pi-hole-ad-blocker-with-pi-zero-w/overview-adafruit2)

### Useful Documentation:
- [Raspberry Pi 3 B+ Migration to NUC 8-i3](https://github.com/ZinkNotTheMetal/HomeAssistant/wiki/Moving-from-Raspberry-Pi-to-NUC-(Docker)-for-HomeAssistant---Hass.io-with-Z-Wave)
- [Raspberry Pi 3 B+ Hass.io WIFI setup](https://github.com/ZinkNotTheMetal/HomeAssistant/wiki/Hass.io-RPi-3-B--Wifi-Connection)
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
| <a href="http://a.co/d/6OUFPsd"><img  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4373/4373913_sd.jpg;maxHeight=640;maxWidth=550" width="185px" height="180px" /></a><br> [Philips Hue Indoor Light Strip](http://a.co/d/6OUFPsd) | 2 | Hue Bridge | [Philips Hue](https://www.home-assistant.io/components/hue/) | Color changing LED indoor light Strips ($60-$80) I have one over the kitchen cabinet with an extension |
| <a href="http://a.co/d/7N361Gx"><img  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6284/6284603_sd.jpg;maxHeight=640;maxWidth=550" width="185px" height="180px" /></a><br> [Philips Hue Outdoor Light Strip](http://a.co/d/7N361Gx) | 4 | Hue Bridge | [Philips Hue](https://www.home-assistant.io/components/hue/) | Color changing LED outdoor light Strips ($160) |

### Switches
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="http://a.co/d/fv4wwLC"><img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/7863/7863116_sa.jpg;maxHeight=1000;maxWidth=1000" width="185px" height="130px" /></a><br> [Philips Tap Switch](http://a.co/d/fv4wwLC) | 1 | Hue Bridge | [Philips Hue](https://www.home-assistant.io/components/hue/) | Switch that requires no batteries developed by Philips ($40-$50). Useful since it has 4 total buttons |
| <a href="http://a.co/d/6DmlQdy"><img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4373/4373904_sd.jpg;maxHeight=1000;maxWidth=1000" width="185px" height="150px" /></a><br> [Philips Dimmer Switch](http://a.co/d/6DmlQdy) | 3 | Hue Bridge | [Philips Hue](https://www.home-assistant.io/components/hue/) | Dimmer switch that requires batteries developed by Philips ($25) |

### Blinds
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="https://www.hunterdouglas.com/operating-systems/motorized/powerview-motorization"><img src="http://www.hunterdouglascomponents.com/media/cache/84/f5/84f500691371a792be660994e9b0b01a.jpg" width="260px" height="120px" /></a><br> [Hunter Douglas Blinds](https://www.hunterdouglas.com/operating-systems/motorized/powerview-motorization) | 2 | Proprietary Bridge | [IFTTT](https://ifttt.com) | Using multiple 'scenes' in PowerView app that sets the blinds to the appropriate height. I have the dimmer switches set to activate scenes using Node-Red |

### Lock
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="http://a.co/d/9L8AI94"><img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6085/6085415_sd.jpg;maxHeight=1000;maxWidth=1000" width="210px" height="80px" /></a><br> [August Smart Lock Pro](http://a.co/d/9L8AI94) | 1 | Z-Wave / Wi-Fi | [Z-Wave](https://www.home-assistant.io/components/zwave/) | I found using Z-Wave worked better than using the actual component. Luckily this lock supports both $200 |


### Indoor Climate 
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="http://a.co/d/9YIbOpm"><img src="https://images-na.ssl-images-amazon.com/images/I/71wlZSurPPL._SL1500_.jpg" width="300px" height="160px" /></a><br> [ecobee - Gen 2](http://a.co/d/9YIbOpm) | 1 | Wi-Fi | [ecobee](https://www.home-assistant.io/components/ecobee/) | Component works great, I use this for my entire HVAC system. I have multiple modes, AWAY, SLEEP, HOME. I also configured it to only be within 3 degrees rather than the typical 5 |
| <a href="http://a.co/d/cM1LTUv"><img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/8077/8077101_rd.jpg;maxHeight=1000;maxWidth=1000" width="140px" height="140px" /></a><br> [Nest Smoke & Carbon Monoxide Alarm - Gen2](http://a.co/d/cM1LTUv) | 1 | Wi-Fi | [NEST](https://www.home-assistant.io/components/nest/) | NEST Smoke & Carbon Monoxide Alarm works great and doesn't have the annoying alarm when the batteries are dead - $119 |
| <a href="http://a.co/d/evtvD9V"><img src="https://images-na.ssl-images-amazon.com/images/I/51Gmx6KCbVL._SL1000_.jpg" width="140px" height="140px" /></a><br> [MiFlora Flower Sensors](http://a.co/d/evtvD9V) | 3 | Bluetooth | [MiFlora](https://www.home-assistant.io/components/sensor.miflora/) | Very useful to check on indoor plant health. $25 |

### Media
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="http://a.co/d/0uRLeYF"><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/H/KK/HKKZ2/HKKZ2_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1475452852873" width="270px" height="160px" /></a><br> [Sonos Play:1](http://a.co/d/0uRLeYF) | 3 | Wi-Fi | [SONOS](https://www.home-assistant.io/components/sonos/) | I currently do not have any Alexa or Google Assistant devices $150 |
| <a href="http://a.co/d/6aAYt6w"><img src="https://assets.pcmag.com/media/images/316505-sonos-playbar.jpg?width=1000&height=542" width="270px" height="160px" /></a><br> [Sonos Playbar](http://a.co/d/6aAYt6w) | 1 | Wi-Fi | [SONOS](https://www.home-assistant.io/components/sonos/) | Very good sound, it's not completely sold me yet though $699 |
| <a href="http://a.co/d/cbajxaQ"><img src="https://images-na.ssl-images-amazon.com/images/I/51Y-Dulc3bL._SL1024_.jpg" width="200px" height="160px" /></a><br> [Apple TV](http://a.co/d/cbajxaQ) | 1 | Wi-Fi | [Apple TV](https://www.home-assistant.io/components/apple_tv/) | This is my main media player, althought this is not the 4K model, $150 |
| <a href="http://a.co/d/dxfiS79"><img src="https://images-na.ssl-images-amazon.com/images/I/817C2spZZDL._SL1500_.jpg" width="210px" height="180px" /></a><br> [LG Web OS Smart TV](http://a.co/d/dxfiS79) | 1 | Wi-Fi | [LG WebOS](https://www.home-assistant.io/components/media_player.webostv/) | This is my main main TV. Highly recommend OLED and this is the 4K model |
| <a href="http://a.co/d/bzj6UVi"><img src="https://images-na.ssl-images-amazon.com/images/I/91FXcrjI-3L._SL1500_.jpg" width="210px" height="180px" /></a><br> [NAS Synology 218+](http://a.co/d/bzj6UVi) | 1 | Ethernet | [Synology](https://www.home-assistant.io/components/sensor.synologydsm/) | Loaded with 2x [4TB NAS Drives](http://a.co/d/67f2Rza) |
  
### Sensors
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="https://www.monoprice.com/product?p_id=24259"><img src="https://images.monoprice.com/productlargeimages/242591.jpg" width="270px" height="160px" /></a><br> [Monoprice Z-Wave Plus Door Sensor](https://www.monoprice.com/product?p_id=24259) | 2 | Z-Wave | [Z-Wave](https://www.home-assistant.io/components/zwave/) | Locations: Washer door / Back door |

### Plugs and Misc
| Device  | Quantity | Connection | Component | Notes |
| ------------- | :---: | ------------- | ------------- | ------------- |
| <a href="http://a.co/d/4Z3Zl8v9"><img src="https://images-na.ssl-images-amazon.com/images/I/61HqxIYsqPL._SL1000_.jpg" width="200px" height="160px" /></a><br> [WeMo Mini Smart Plugs](http://a.co/d/4Z3Zl8v) | 1 | Wi-Fi | [WeMo](https://www.home-assistant.io/components/wemo/) | Useful plugs that you can automate, I like that you can use 2 per outlet  |



## [Services](#services)
* Weather and Climate related
  * [Windy](https://www.windy.com/)
  * [Open Weather Map](https://www.home-assistant.io/components/sensor.openweathermap/)
  * [Open Weather Map Api for Node-Red](https://openweathermap.org/api)
  * [Pollen](https://www.home-assistant.io/components/sensor.pollen/) sensor for allergy related information
* Presence:
  * [Life360](https://github.com/pnbruckner/homeassistant-config/blob/master/docs/life360.md)
  * [iOS app](https://itunes.apple.com/us/app/home-assistant-companion/id1099568401?mt=8)
  * [Waze](https://www.home-assistant.io/components/sensor.waze_travel_time/) (for commute times)
* [iOS](https://home-assistant.io/docs/ecosystem/ios/notifications/basic/) Notifications
  
  
  
## [Automations](#automations)
All Automations are using Node-Red (using Hassio Addins). This can be downloaded from my [scrubbed file](https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/Node-Red-Scrubbed-Automations.js)
### Time Automations
1) At 4AM (when everyone is sleeping) raise the shades (blinds) to allow more light in, in the morning.

<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/misc/pictures/NR-Timed-Shade-Raise.PNG" alt="Timed Shade Raise">

### The most intelligent blinds
* When the proper elevation and azimuth is set to a blinding sun. Shut the blinds (with some follow the sun features), once the sun is not a factor open the shades again.

<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/misc/pictures/NR-SmartShades-1.PNG" alt="Smart Shades pt.1">

<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/misc/pictures/NR-SmartShades-2.PNG" alt="Smart Shades pt.2">

<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/misc/pictures/NR-SmartShades-3.PNG" alt="Smart Shades pt.3">

### Hue Switch Automations
1) When the Tap is pressed, turn off all lights, Set AC to sleep mode, turn off TV, turn off Sonos, lock the door...
2) When any of the Dimmer switches are held on, raise the blinds
3) When any of the Dimmer switches are held off, lower the blinds

<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/misc/pictures/NR-Switches.PNG" alt="Switch Node-Red Screenshot">


### Device Change automations
1) If the back door opens, turn on the Hue Outdoor lights
2) If no one is home, set AC to away

<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/misc/pictures/NR-Away.PNG" alt="Away Node-Red Screenshot">


### Useful Notification Automations
1) Notify when the windspeed is over 20 miles per hour
2) Notify airport travel and TSA wait time when vacation mode is set
3) Notify when Humidity is too high or too low
4) Notify if the low tonight is below freezing
5) Plus many more....


<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/misc/pictures/NR-Windspeed-Notification.PNG" alt="Windspeed Node-Red Screenshot">


<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/misc/pictures/NR-Vacation-Notification.PNG" alt="Vacation Node-Red Screenshot">


<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/misc/pictures/NR-Humidity-Notification.PNG" alt="Humidity Node-Red Screenshot">


### Weather Automations
1) Do not lower the blinds if the cloud cover is more than 60% (using open weather map api)

<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/misc/pictures/NR-Home.PNG" alt="Home Node-Red Screenshot">


<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/misc/pictures/NR-Links.PNG" alt="Links Node-Red Screenshot">



## [Dashboard](#dashboard)
<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/misc/pictures/Home-Assistant-Lovelace-1.PNG" alt="Home Assistant dashboard 1" />

<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/misc/pictures/Home-Assistant-Lovelace-2.PNG" alt="Home Assistant dashboard 2" />

<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/misc/pictures/Home-Assistant-Lovelace-3.PNG" alt="Home Assistant dashboard 3" />

<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/misc/pictures/Home-Assistant-Lovelace-4.PNG" alt="Home Assistant dashboard 4" />

<img src="https://github.com/ZinkNotTheMetal/HomeAssistant/blob/master/misc/pictures/Home-Assistant-Lovelace-5.PNG" alt="Home Assistant dashboard 5" />

-ZinkNotTheMetal
