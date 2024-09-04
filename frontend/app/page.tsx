'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement, BarElement, ArcElement } from 'chart.js';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';

// Register all required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  CandlestickController,
  CandlestickElement
);

// Define types for each chart data format
interface CandlestickData {
  labels: string[];
  data: {
    x: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }[];
}

interface LineChartData {
  labels: string[];
  data: number[];
}

interface BarChartData {
  labels: string[];
  data: number[];
}

interface PieChartData {
  labels: string[];
  data: number[];
}

// Main Dashboard component
const Dashboard = () => {
  // State variables to hold chart data
  const [candlestickData, setCandlestickData] = useState<CandlestickData | null>(null);
  const [lineData, setLineData] = useState<LineChartData | null>(null);
  const [barData, setBarData] = useState<BarChartData | null>(null);
  const [pieData, setPieData] = useState<PieChartData | null>(null);
  
  // State for loading and error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch chart data from API on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      // Define a timeout duration in milliseconds
      const timeoutDuration = 5000; // 10 seconds

      // Function to fetch data with timeout
      const fetchWithTimeout = (url: string) => {
        return Promise.race([
          axios.get(url),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Request timed out')), timeoutDuration)
          )
        ]);
      };

      try {
        // Fetch data with timeout handling
        const candlestickRes = await fetchWithTimeout('http://localhost:8000/api/candlestick-data/');
        setCandlestickData(candlestickRes.data);

        const lineRes = await fetchWithTimeout('http://localhost:8000/api/line-chart-data/');
        setLineData(lineRes.data);

        const barRes = await fetchWithTimeout('http://localhost:8000/api/bar-chart-data/');
        setBarData(barRes.data);

        const pieRes = await fetchWithTimeout('http://localhost:8000/api/pie-chart-data/');
        setPieData(pieRes.data);

      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Transform candlestick data for Chart.js
  const transformCandlestickData = (data: CandlestickData | null) => {
    if (!data) {
      console.log('Invalid candlestick data:', data);
      return { labels: [], datasets: [] };
    }

    return {
      labels: data.labels,
      datasets: [{
        label: 'Candlestick Data',
        data: data.data.map(entry => ({
          x: entry.x,
          o: entry.open,
          h: entry.high,
          l: entry.low,
          c: entry.close
        })),
        borderColor: 'rgba(0, 0, 0, 0.1)',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      }]
    };
  };

  // Transform line chart data for Chart.js
  const transformLineData = (data: LineChartData | null) => {
    if (!data) {
      console.log('Invalid line chart data:', data);
      return { labels: [], datasets: [] };
    }

    return {
      labels: data.labels,
      datasets: [{
        label: 'Line Data',
        data: data.data,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      }]
    };
  };

  // Transform bar chart data for Chart.js
  const transformBarData = (data: BarChartData | null) => {
    if (!data) {
      console.log('Invalid bar chart data:', data);
      return { labels: [], datasets: [] };
    }

    return {
      labels: data.labels,
      datasets: [{
        label: 'Bar Data',
        data: data.data,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      }]
    };
  };

  // Transform pie chart data for Chart.js
  const transformPieData = (data: PieChartData | null) => {
    if (!data) {
      console.log('Invalid pie chart data:', data);
      return { labels: [], datasets: [] };
    }

    return {
      labels: data.labels,
      datasets: [{
        label: 'Pie Data',
        data: data.data,
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
      }]
    };
  };

  return (
    <div>
      {/* Error Message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {/* Candlestick Chart */}
      <div>
        <h2>Candlestick Chart</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          candlestickData ? (
            <Line
              data={transformCandlestickData(candlestickData)}
              options={{ responsive: true, plugins: { legend: { position: 'top' } } }}
            />
          ) : (
            <p>No candlestick data available</p>
          )
        )}
      </div>
      
      {/* Line Chart */}
      <div>
        <h2>Line Chart</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          lineData ? (
            <Line
              data={transformLineData(lineData)}
              options={{ responsive: true, plugins: { legend: { position: 'top' } } }}
            />
          ) : (
            <p>No line chart data available</p>
          )
        )}
      </div>
      
      {/* Bar Chart */}
      <div>
        <h2>Bar Chart</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          barData ? (
            <Bar
              data={transformBarData(barData)}
              options={{ responsive: true, plugins: { legend: { position: 'top' } } }}
            />
          ) : (
            <p>No bar chart data available</p>
          )
        )}
      </div>
      
      {/* Pie Chart */}
      <div>
        <h2>Pie Chart</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          pieData ? (
            <Pie
              data={transformPieData(pieData)}
              options={{ responsive: true, plugins: { legend: { position: 'top' } } }}
            />
          ) : (
            <p>No pie chart data available</p>
          )
        )}
      </div>
    </div>
  );
};

export default Dashboard;
