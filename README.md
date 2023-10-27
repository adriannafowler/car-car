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

Models:

AutomobileVO - this a value object that is pulling the vin number and sold status information from the Automobile model in Inventory.

Salesperson - this model is to handle the sales staff. The information that it stores is their first name, last name, employee number, and a profile picture.

Customer - this model handles the customers involved in the sale of the automobiles. The information that it stores is their first name, last name, address, and phone number.

Sale - this model handles the sale of the Automobiles. It references the AutomobileVO which is pulling information from the Automobile model in Inventory. It also records the price of the sale and references the Customer and Salesperson models for the customer and salesperson associated with the sale. When a sale is filled out in the frontend in SaleForm.js, a PUT request is sent to the Automobile model in Inventory to update its sold status to True. This vehicle is then filtered out of the list of automobiles for the sale form.

Extras:
-Added a URLField to capture a picture url in order to add a profile picture for each salesperson.
-Updated the salesperson page using bootstrap to make the page more visually appealing. Utilize rows, columns, and cards from bootstrap.
