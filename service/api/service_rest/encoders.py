from common.json import ModelEncoder
from .models import Technician, AutomobileVO, Status, Appointment
import json


class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "id",
    ]


class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
    ]


class StatusEncoder(ModelEncoder):
    model = Status
    properties = [
        "status",
    ]


class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "date_time",
        "customer",
        "reason",
        "id",
    ]

    def get_extra_data(self, o):
        status = o.status.status if o.status else None
        technician = f"{o.technician.first_name} {o.technician.last_name}"
        return {"status": status,
                "technician": technician}


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "date_time",
        "customer",
        "reason",
        "vin",
        "customer",
    ]

    def get_extra_data(self, o):
        status = o.status.status if o.status else None
        technician = f"{o.technician.first_name} {o.technician.last_name}"
        return {"status": status,
                "technician": technician}
