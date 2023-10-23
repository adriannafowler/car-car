from django.urls import path
from .api_views import list_appointments, appointment_detail


urlpatterns = [
    path("appointments/", list_appointments, name="list_appointments"),
    path("appointments/<int:id>/", appointment_detail, name="appointment_detail")
]
