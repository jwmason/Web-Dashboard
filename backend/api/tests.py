from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from django.urls import reverse

class ChartsAPITestCase(TestCase):
    """
    Test case for validating the API endpoints that provide chart data.
    """
    
    def setUp(self):
        """
        Set up the test client for making requests to the API.
        """
        self.client = APIClient()  # Instantiate the APIClient for making requests

    def test_candlestick_data(self):
        """
        Test the API endpoint for retrieving Candlestick chart data.
        """
        url = reverse('candlestick-data')  # Resolve the URL for the candlestick data endpoint
        response = self.client.get(url)  # Make a GET request to the API endpoint
        
        # Expected hardcoded data for the Candlestick chart
        expected_data = {
            "data": [
                {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
                {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
            ]
        }
        
        # Verify that the response status code is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # Verify that the response data matches the expected data
        self.assertEqual(response.json(), expected_data)

    def test_line_chart_data(self):
        """
        Test the API endpoint for retrieving Line Chart data.
        """
        url = reverse('line-chart-data')  # Resolve the URL for the line chart data endpoint
        response = self.client.get(url)  # Make a GET request to the API endpoint
        
        # Expected hardcoded data for the Line Chart
        expected_data = {
            "labels": ["Jan", "Feb", "Mar", "Apr"],
            "data": [10, 20, 30, 40]
        }
        
        # Verify that the response status code is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # Verify that the response data matches the expected data
        self.assertEqual(response.json(), expected_data)

    def test_bar_chart_data(self):
        """
        Test the API endpoint for retrieving Bar Chart data.
        """
        url = reverse('bar-chart-data')  # Resolve the URL for the bar chart data endpoint
        response = self.client.get(url)  # Make a GET request to the API endpoint
        
        # Expected hardcoded data for the Bar Chart
        expected_data = {
            "labels": ["Product A", "Product B", "Product C"],
            "data": [100, 150, 200]
        }
        
        # Verify that the response status code is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # Verify that the response data matches the expected data
        self.assertEqual(response.json(), expected_data)

    def test_pie_chart_data(self):
        """
        Test the API endpoint for retrieving Pie Chart data.
        """
        url = reverse('pie-chart-data')  # Resolve the URL for the pie chart data endpoint
        response = self.client.get(url)  # Make a GET request to the API endpoint
        
        # Expected hardcoded data for the Pie Chart
        expected_data = {
            "labels": ["Red", "Blue", "Yellow"],
            "data": [300, 50, 100]
        }
        
        # Verify that the response status code is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # Verify that the response data matches the expected data
        self.assertEqual(response.json(), expected_data)