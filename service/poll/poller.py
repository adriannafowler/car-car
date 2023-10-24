import django
import os
import sys
import time
import json
import requests
import logging

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

from service_rest.models import AutomobileVO


def get_automobiles():
    url = "http://project-beta-inventory-api-1:8000/api/automobiles/"
    response = requests.get(url)

    if response.status_code == 200:
        content = json.loads(response.content)

        for automobile in content["autos"]:
            AutomobileVO.objects.update_or_create(
                vin=automobile["vin"],
                sold=automobile["sold"],
            )
    else:
        logging.error(f"Failed to fetch data from {url}. Status code: {response.status_code}")


def poll(repeat=True):
    while True:
        print('Service poller polling for data')
        try:
            get_automobiles()

        except Exception as e:
            print(e, file=sys.stderr)

        if (not repeat):
            break

        time.sleep(10)

if __name__ == "__main__":
    poll()
