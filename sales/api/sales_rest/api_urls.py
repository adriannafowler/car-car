from django.urls import path

from .views import (
    api_list_salespeople, api_list_customers, api_list_sales
)

urlpatterns = [
    path("salespeople/", api_list_salespeople, name="api_list_salespeople"),
    path("customers/", api_list_customers, name="api_list_customers"),
    path("sales/", api_list_sales, name="api_list_sales"),
]
