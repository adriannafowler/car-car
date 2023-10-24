from django.urls import path
from .api_views import list_appointments, appointment_detail, technician_list


urlpatterns = [
    path("appointments/", list_appointments, name="list_appointments"),
    path("appointments/<int:id>/", appointment_detail, name="appointment_detail"),
    path("technicians/", technician_list, name="technician_list")
]
