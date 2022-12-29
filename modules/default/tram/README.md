# Tram Stop Monitoring Module

This module displays the expected arrival times for trams at a specific stop point. It is designed to be used with the [MagicMirror²](https://magicmirror.builders/) platform, but it can also be used on other websites or applications that support JavaScript modules.

## Features

- Displays the expected arrival times for the next few trams at a specific stop point
- Updates the arrival times every 15 seconds
- Provides a fade-in/fade-out animation when updating the arrival times
- Allows you to customize which tram numbers to track

# THIS WILL BE REPLACED BY A DEMO ONCE NYSSE API IS BACK UP AND RUNNING AGAIN :)

## Usage

To use this module, you will need to install it on your MagicMirror² instance. Detailed instructions for installing third-party modules can be found in the [MagicMirror² documentation](https://docs.magicmirror.builders/).

Once the module is installed, you can add it to your MagicMirror² configuration file (`config/config.js`) as follows:

```JS
{
  module: "tram",
  position: "top_left"
},
```

You can customize the appearance and behavior of the module by modifying the options in the `config` object. For example, you can change the `text` option to specify a different stop point, or you can modify the `upcomingTrams` option to track a different set of tram numbers.

### Configurin monitored stop

To use this on your nearest stop find the four digit code of the stop you wish to monitor here: https://reittiopas.tampere.fi.
For example;

Hervannan Kampus A: 0835
Sorin Aukio B: 0950

Then modify <MonitoringRef> at line 6 in data.xml to the stop of your choosing.

### Using the Python fetch script

This module utilises a Python script as for now JavaScript wasn't capable of fetching from required API. The script getStopData.py is located in tram module directory and it will send the POST request to API and save the response body in a separate XML file called resp.xml. Core JS code will then fetch data from resp.xml and display it on the screen.
1. Locate getStopData.py on terminal and run it.
2. Keep terminal open and running always when MagicMirror is up.

Otherwise the data displayed on your mirror will be static and outdated.

## DISCLAIMERS

This module is a work in progress and probably should not be installed if you want to install other modules also.

## License

This module is licensed under the MIT License. It was created by Eero Tarri, and is free to use, distribute, and modify as long as the original copyright notice and license terms are included.

## Credits

- Eero Tarri - Author
- MagicMirror² - Platform
