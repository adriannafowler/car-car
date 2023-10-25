from re import T
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import AutomobileVOEncoder, SalespersonEncoder, CustomerEncoder, SaleEncoder
from .models import AutomobileVO, Salesperson, Customer, Sale


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespersonEncoder,
        )
    else:
        content = json.loads(request.body)
        salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_show_salesperson(request, pk):
    try:
        if request.method == "GET":
            salesperson = Salesperson.objects.get(id=pk)
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False,
            )
    except Salesperson.DoesNotExist:
        return JsonResponse(
                {"message": "Salesperson id does not exist"},
                status=404
            )
    else:
        try:
            salesperson = Salesperson.objects.get(id=pk)
            count, _ = salesperson.delete()
            return JsonResponse({"Deleted": count > 0})

        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Salesperson id does not exist"},
                status=400
            )


@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_show_customer(request, pk):
    try:
        if request.method == "GET":
            customer = Customer.objects.get(id=pk)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
    except Customer.DoesNotExist:
        return JsonResponse(
                {"message": "Customer id does not exist"},
                status=404
            )
    else:
        try:
            customer = Customer.objects.get(id=pk)
            count, _ = customer.delete()
            return JsonResponse({"Deleted": count > 0})

        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer id does not exist"},
                status=404
            )





@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            if "automobile" in content:
                automobile = AutomobileVO.objects.get(vin=content["automobile"])
                content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile vin number"},
                status=400
            )

        try:
            if "salesperson" in content:
                salesperson = Salesperson.objects.get(employee_id=content["salesperson"])
                content["salesperson"] = salesperson
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid employee ID number"},
                status=400
            )

        try:
            if "customer" in content:
                customer = Customer.objects.get(id=content["customer"])
                content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer ID number"},
                status=400
            )

        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False
        )


@require_http_methods(["GET", "DELETE"])
def api_show_sale(request, pk):
    if request.method == "GET":
        try:
            sale = Sale.objects.get(id=pk)
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False,

            )
        except Sale.DoesNotExist:
            return JsonResponse(
                {"message": "Sale id does not exist"},
                status=404
            )

    else:
        try:
            sale = Sale.objects.get(id=pk)
            count, _ = sale.delete()
            return JsonResponse({"Deleted": count > 0})

        except Sale.DoesNotExist:
            return JsonResponse(
                {"message": "Sale id does not exist"},
                status=400
            )
