from django.urls import path
from .api_views import (
    appointment_list,
    appointment_detail,
    technician_list,
    technician_detail,
    appointment_cancel,
    appointment_finish,
    statuses_list,
)


urlpatterns = [
    path("appointments/", appointment_list, name="appointment_list"),
    path("appointments/<int:id>/", appointment_detail, name="appointment_detail"),
    path("technicians/", technician_list, name="technician_list"),
    path("technicians/<int:id>/", technician_detail, name="technician_detail"),
    path("appointments/<int:id>/cancel/", appointment_cancel, name="appointment_cancel"),
    path("appointments/<int:id>/finish/", appointment_finish, name="appointment_finish"),
    path("statuses/", statuses_list, name="statuses_list"),
]
