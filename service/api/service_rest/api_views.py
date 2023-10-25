from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Technician, AutomobileVO, Status, Appointment
from .encoders import TechnicianListEncoder, TechnicianDetailEncoder, Status, AppointmentListEncoder, AppointmentDetailEncoder
import json


@require_http_methods(["GET", "POST"])
def appointment_list(request):
    if request.method == "GET":
        try:
            appointments = Appointment.objects.all()
            return JsonResponse(
                {"appointments": appointments},
                encoder=AppointmentListEncoder
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Failed to fetch appointments"},
                status = 400
            )
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.get(id=content["technician"])
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician id"},
                status = 400,
            )
        try:
            status_value = content.get("status", "scheduled")
            status, created = Status.objects.get_or_create(status=status_value)
        except Status.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid status"},
                status = 400,
            )
        appointment = Appointment.objects.create(
            date_time = content["date_time"],
            reason = content["reason"],
            vin = content["vin"],
            customer = content["customer"],
            status = status,
            technician = technician
        )
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def appointment_detail(request, id):
    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(id=id)
            return JsonResponse(
                {"appointment": appointment},
                encoder=AppointmentDetailEncoder
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid appointment id"},
                status = 400
            )
    elif request.method == "DELETE":
        try:
            count, _ = Appointment.objects.get(id=id).delete()
            if count > 0:
                return JsonResponse({"deleted": count > 0})
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid appointment id"},
                status=400
            )
    else:
        content = json.loads(request.body)
        try:
            status = Status.objects.get(id=content["status"])
            content["status"] = status
        except Status.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid status"},
                status = 400,
            )
        if "technician" in content:
            try:
                technician = Technician.objects.get(id=content["technician"])
                content["technician"] = technician
            except Technician.DoesNotExist:
                return JsonResponse(
                    {"message": "Invalid technician id"},
                    status = 400,
                )
        else:
            pass
        try:
            appointment = Appointment.objects.filter(id=id).update(**content)
            appointment = Appointment.objects.get(id=id)
            return JsonResponse(
                appointment,
                encoder=AppointmentDetailEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid appointment id"},
                status = 400
            )


@require_http_methods(["PUT"])
def appointment_cancel(request, id):
        content = json.loads(request.body) if request.body else {}
        if "technician" not in content:
            pass
        try:
            status_value = content.get("status", "canceled")
            status, created = Status.objects.get_or_create(status=status_value)
            content["status"] = status
        except Status.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid status"},
                status = 400,
            )
        try:
            Appointment.objects.filter(id=id).update(**content)
            appointment = Appointment.objects.get(id=id)
            return JsonResponse(
                appointment,
                encoder=AppointmentDetailEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid appointment id"},
                status = 400
            )


@require_http_methods(["PUT"])
def appointment_finish(request, id):
        content = json.loads(request.body) if request.body else {}
        if "technician" not in content:
            pass
        try:
            status_value = content.get("status", "finished")
            status, created = Status.objects.get_or_create(status=status_value)
            content["status"] = status
        except Status.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid status"},
                status = 400,
            )
        try:
            Appointment.objects.filter(id=id).update(**content)
            appointment = Appointment.objects.get(id=id)
            return JsonResponse(
                appointment,
                encoder=AppointmentDetailEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid appointment id"},
                status = 400
            )


@require_http_methods(["GET", "POST"])
def technician_list(request):
    if request.method == "GET":
        try:
            technicians = Technician.objects.all()
            return JsonResponse(
                {"technicians": technicians},
                encoder=TechnicianListEncoder
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Failed to fetch technicians"},
                status = 400
            )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianListEncoder,
            safe=False
        )


@require_http_methods(["GET", "DELETE"])
def technician_detail(request, id):
    if request.method == "GET":
        try:
            technician = Technician.objects.get(id=id)
            return JsonResponse(
                {"technician": technician},
                encoder=TechnicianDetailEncoder
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician id"},
                status = 404
            )
    else:
        try:
            count, _ = Technician.objects.get(id=id).delete()
            if count > 0:
                return JsonResponse({"deleted": count > 0})
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician id"},
                status = 404
            )
