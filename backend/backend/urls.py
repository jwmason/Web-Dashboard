"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api import views as api_views # Import views from the api app

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/candlestick-data/', api_views.candlestick_data, name='candlestick-data'),  # Endpoint for Candlestick data
    path('api/line-chart-data/', api_views.line_chart_data, name='line-chart-data'),  # Endpoint for Line Chart data
    path('api/bar-chart-data/', api_views.bar_chart_data, name='bar-chart-data'),  # Endpoint for Bar Chart data
    path('api/pie-chart-data/', api_views.pie_chart_data, name='pie-chart-data'),  # Endpoint for Pie Chart data
]
