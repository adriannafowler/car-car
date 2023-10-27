# CarCar

Team:

* Adrianna Fowler - Service microservice
* Taylor Pearce - Sales microservice

## Design

## Service microservice

Models:

Technician
AutomobileVO - added this to meet requirements, I accessed inventory info via the front end
Status - made status it's own model, so it could act as a value object
Appointment

Integration with Inventory MS:
I did this on the front end where I used it's api to pull automobiles data and then used a useEffect function to go over each auto and if the auto was sold by us, then put that vin number into an array of vip vins, which I then use to determine if a service customer is a vip.

Extras:
    - more update status functionality
    - used moment.js library to help format dates and times
    - use of mdb-react-ui-kit for modal to update status
    - appointment items sorted by date_time
    - Navbar dropdowns
    - designed a logo

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
