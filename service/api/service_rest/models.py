from django.db import models


class Technician(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=150)
    employee_id = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)


class Status(models.Model):
    status = models.CharField(max_length=100, default="SCHEDULED")

    def __str__(self):
        return self.status


class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=250)
    status = models.ForeignKey(
        Status, related_name="statuses", on_delete=models.SET_NULL, null=True
    )
    vin = models.CharField(max_length=17)
    customer = models.CharField(max_length=200)
    technician = models.ForeignKey(
        Technician,
        related_name="technicians",
        on_delete=models.CASCADE,
    )
