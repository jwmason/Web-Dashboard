# Chart Dashboard

## Overview

The Chart Dashboard is a web application designed to:
- Visualize various types of data using interactive charts.
- Display candlestick, line, bar, and pie charts to provide comprehensive insights.
- Offer a user-friendly interface to easily navigate and interpret different data sets.

## Tech Stack

- **Frontend**: 
  - **React**: JavaScript library for building user interfaces.
  - **Next.js**: React framework for server-side rendering and static site generation.
  - **TypeScript**: Superset of JavaScript that adds static types.
  - **Chart.js**: Library for creating interactive charts.

- **Backend**:
  - **Django**: High-level Python web framework for rapid development.
  - **Django REST Framework**: Toolkit for building Web APIs.

## Setup

### Prerequisites

- Node.js and npm (or Yarn) installed.
- A backend server providing API endpoints for chart data.

### Backend Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/jwmason/Web-Dashboard.git
    ```

2. **Navigate to the backend directory**:

    ```bash
    cd Web-Dashboard
    cd backend
    ```

3. **Install Dependencies**:

    ```bash
    pip install django djangorestframework
    ```

4. **Apply Migrations**:

    ```bash
    python manage.py migrate
    ```

5. **Run the Development Server**:

    ```bash
    python manage.py runserver
    ```

The backend will be running at [http://127.0.0.1:8000/] (http://127.0.0.1:8000/).

### Frontend Setup

1. **Navigate to the React App**:

    ```bash
    cd frontend
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Run the frontend application**:

    ```bash
    npm run dev
    ```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

- **Candlestick Chart**: Visualizes financial data with open, high, low, and close values.
- **Line Chart**: Displays data points connected by a line to show trends over time.
- **Bar Chart**: Represents data with vertical bars, useful for comparing quantities.
- **Pie Chart**: Shows data proportions as slices of a pie, ideal for percentage-based comparisons.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Chart.js for the charting library.
- React and Next.js communities for their tools and support.
- Axios for handling HTTP requests.
