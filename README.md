# Currency Converter

A simple currency converter web app built with HTML, CSS, and JavaScript.

## Live Demo

https://currencyconverter79.netlify.app

## Overview

This project lets users convert an amount from one currency to another using live exchange rates. It includes:

- A numeric input for entering the amount
- Dropdowns for selecting source and target currencies
- Country flag icons for each currency
- A button to fetch and display the converted value

## Features

- Responsive, straightforward interface
- Automatically populates currency options from a currency list
- Displays corresponding country flags for selected currencies
- Uses a remote currency API to fetch exchange rates

## How to Use

1. Open `index.html` in a browser.
2. Enter the amount you want to convert.
3. Choose the source currency in the `From` dropdown.
4. Choose the target currency in the `To` dropdown.
5. Click `Get Exchange Rate` to see the converted value.

## Files

- `index.html` — app markup
- `style.css` — styling for the converter UI
- `script.js` — main app logic and API handling
- `codes.js` — currency code to country code mapping used for flag icons

## Notes

- The app uses the `flagsapi.com` service for currency flag images.
- Exchange rates are fetched from an external currency API.

## License

This project is provided as-is for learning and demonstration purposes.
