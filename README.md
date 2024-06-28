# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Project Overview

"Design and implement a predictive maintenance system for air conditioning (AC) systems. The primary objective is to proactively monitor and analyze the performance of AC units, predict potential failures or issues, and schedule maintenance activities in advance to ensure optimal cooling, energy efficiency, and occupant comfort. The solution should leverage IoT sensors to reduce operational disruptions, increase the lifespan of AC units, and lower maintenance costs while ensuring a comfortable indoor environment."

To effectively monitor the performance and health of air conditioning units, a comprehensive system utilizing temperature, humidity, and dust sensors is employed. DHT11 sensors are strategically positioned at the evaporator and condenser coils to gather temperature and humidity data, while a dust sensor is installed at the air filters to monitor particulate matter levels. The collected sensor data is then transmitted to a centralized data repository and subsequently displayed on a user-friendly website for remote monitoring and analysis.

Implementing predictive maintenance for air conditioning (AC) systems can have several significant impacts and benefits for both residential and commercial settings. Here are some of the key advantages: Increased Reliability, Extended Equipment Lifespan, Energy Efficiency, Cost Savings, Improved Comfort and Indoor Air Quality, Customer Satisfaction and improve indoor comfort and air quality, all while enhancing the overall reliability and efficiency of their air conditioning equipment.

### Components

- **Microcontroller**: Arduino has been used for data collection, processing, and communication.
- **Temperature and Humidity Sensor**: Temperature sensors are placed near the evaporator coil to measure the temperature of the air passing through the coil. These sensors can be strategically positioned on the intake and outlet sides of the coil.
- **Particulate Matter (PM) Sensor**: Optical Dust Sensors (e.g., Sharp GP2Y1010AU0F) measure suspended particulate matter, including PM2.5 and PM10.
