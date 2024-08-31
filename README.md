# Charging Batteries Project

This project focuses on simulating and visualizing charging events for electric vehicle (EV) batteries.

TechStack: TS, React.js and styled-components plus chart.js.


### Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**

    ```bash
    git clone [repository-url]
    ```

2. **Navigate into the project directory:**

    ```bash
    cd charging-batteries-project
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Available Scripts

In the project directory, you can run:

- **`npm start`**

    Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits, and you will see any lint errors in the console.

- **`npm test`**

    Launches the test runner in interactive watch mode. For more information on running tests, see the [testing documentation](https://create-react-app.dev/docs/running-tests/).

- **`npm run build`**

    Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified, and the filenames include hashes. Your app is ready to be deployed.

    For more information on deployment, see the [deployment documentation](https://create-react-app.dev/docs/deployment/).


## Project Overview

This project simulates charging events for electric vehicles and provides visualizations of various metrics, such as:

- Total energy consumed
- Max power demand (theoretical and actual)
- Concurrency factor
- Charging events per day, month, and year
- Total charging values

## Tree of Project 

Ev-charging-simulator/ 
├── node_modules/ 
├── public/ 
├── src/ │ 
├── components/ 
│ │ ├── ChargePointChart.tsx 
│ │ ├── InputForm.tsx 
│ │ ├── OutputVisualization.tsx 
│ │ └── SimulationResult.tsx 
│ ├── pages/ 
│ ├── services/ 
│ │ └── simulationService.ts 
│ ├── styled/ 
│ │ ├── ChargePointChart.style.js 
│ │ ├── InputForm.style.js 
│ │ ├── OutputVisualization.style.js 
│ │ └── SimulationResult.style.js 
│ ├── types/ 
│ │ └── types.js 
│ └── utils/
│ │ └── simulation.ts 
