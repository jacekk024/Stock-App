# Stock-App
   https://github.com/jacekk024/Stock-App/assets/45696277/d49dc2a1-3c3a-42ff-8818-06f179f95535
## Table of Contents
* [General info](#general-info)
* [Tools](#tools)
* [Technologies](#technologies)
* [Installation](#installation)
* [Useful Resources](#useful-resources)
* [Results](#results)

## General Info
This is a mobile currency app, which track the current value of currencies and gold. It provides many functions
such as currency calculator and plotting charts of for currencies and gold. It allows you to simulate trading with currencies.
## Tools
* Visual Studio Code
* Expo Go
## Technologies
* React Native
* JavaScript
* Node.js

## Installation
To install and run the app on your mobile device, follow these steps:
1. Clone the repository to your local machine
2. Run Expo Go 
3. Enter the project folder
4. Start the app using `npx expo start`
Scan the QR code and app will istall automaticlly.

## Useful Resources
In project was used many external libraries such as:
* react-native-wagmi-charts
(https://www.npmjs.com/package/react-native-wagmi-charts#interactive-cursors)
* react-native-country-flag
(https://www.npmjs.com/package/react-native-country-flag)
* react-native-picker
(https://github.com/react-native-picker/picker)
* Source of data for my aplication - NBP API
(http://api.nbp.pl)
## Results

### Gold View
   Screenshot of the gold price chart in my app, displaying historical gold values over the past 255 days and today's current price. The current gold price is shown in bold text at the top of the chart. Information about gold prices is fetch from NBP API.
   
<img src="https://user-images.githubusercontent.com/45696277/230684404-97a23774-4aff-4423-8445-5fb4a738e148.jpg" alt="Gold" width="400" height = "700"/>

### Currency

The screenshot shows a view in my currency app where users can convert an amount of cash from złoty to a selected currency. The user enters the amount of cash they want to convert into a text input field. Once the user has selected a currency, the app will convert the amount of cash they entered into the selected currency and display the result on the screen.

In addition to the currency conversion, the app also displays a chart of the currency prices over the past 30 days. This chart provides users with a visual representation of the currency's recent performance, which can help them make informed decisions about their transactions.

Overall, this view provides users with a convenient and informative way to convert currencies and track their performance over time.

<img src="https://user-images.githubusercontent.com/45696277/230687019-e4ac0d68-f821-48cf-a57d-47a85e057bcc.jpg" alt="Currency" width="400" height = "700"/>


### Currency Calculator
Screenshot of the currency calculator feature in my app, allowing users to quickly convert cash between different currencies. The calculator has two picker fields, one for selecting the initial currency and another for selecting the target currency. The user can then enter the desired amount of cash to convert in the input field below. The app instantly calculates the converted amount and displays it on the screen. This feature is ideal for users who frequently travel abroad or engage in international transactions.

<img src="https://user-images.githubusercontent.com/45696277/230687142-cd2719bf-bf05-40ac-a2bf-a6e8750cdf56.jpg" alt="Exchange" width="400" height = "700"/>

### Currency List
Screenshot of the currency list feature in my app, displaying a flatlist of currencies with their respective codes, prices, and flags of the countries they represent. The data for the prices is fetched in real-time from the NBP API, ensuring that users always have access to the most up-to-date information. Users can tap on any of the currencies in the list to view a detailed description of that currency. This feature is useful for anyone looking to stay up-to-date on the latest currency exchange rates or make international transactions.

<img src="https://user-images.githubusercontent.com/45696277/230687164-858d4f4e-555e-47c8-ade9-6fbe0d5ee94a.jpg" alt="List" width="400" height = "700"/>

### Drawer Navigation

The screenshot shows the drawer navigation feature in my app, which provides easy access to three different pages: the currency list, the currency calculator, and the gold view. The drawer navigation menu is accessible by swiping right from the left edge of the screen. Each page can be selected by tapping its corresponding icon in the drawer navigation menu, making it easy for users to switch between different features and functionalities in the app.
<img src="https://user-images.githubusercontent.com/45696277/230687185-099f02bc-e128-4f0e-8d16-edea015bd210.jpg" alt="Drawer" width="400" height = "700"/>



