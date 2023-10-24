from django.urls import path
from .api_views import list_appointments, appointment_detail, technician_list, technician_detail, cancel_appt, finish_appt


urlpatterns = [
    path("appointments/", list_appointments, name="list_appointments"),
    path("appointments/<int:id>/", appointment_detail, name="appointment_detail"),
    path("technicians/", technician_list, name="technician_list"),
    path("appointments/<int:id>/", technician_detail, name="technician_detail"),
    path("appointments/<int:id>/cancel/", cancel_appt, name="cancel_appt"),
    path("appointments/<int:id>/finish/", finish_appt, name="finish_appt")
]
