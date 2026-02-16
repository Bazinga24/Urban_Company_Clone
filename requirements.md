Problem Statement :

Build a "Local Services Booking App" — a simple web application where users can browse local 
service providers (like plumbers, electricians, tutors, photographers), view their details, and book appointments. Think of it as a simplified version of apps like UrbanClap / Urban Company.


Functional Requirements :

1 Service Provider Listing 
• Display a list of service providers fetched from a database (not hardcoded in the 
frontend) 
• Each provider card should show: Name, Service Category (e.g., Plumber, Electrician), 
Hourly Rate, Rating (1–5), and Availability Status (Available / Busy) 
• Users should be able to filter providers by Service Category 

2 Booking an Appointment 
• Clicking on a provider should open a booking form. 
• The form should collect: Customer Name, Customer Phone/Email, Preferred Date and 
Time, and a brief description of the service needed.
• On submission, the booking should be saved to the database with a unique Booking ID 
• The provider’s availability should update to “Busy” after a booking is made.

3 Booking History (Admin View) 
• A separate page or section that lists all bookings. 
• Each booking should display: Booking ID, Customer Name, Provider Name, Service 
Category, Date/Time, and Status (Confirmed / Completed / Cancelled) 
• Admin should be able to mark a booking as Completed or Cancelled, which should also 
update the provider’s availability back to “Available.” 

Technical Requirements (MVC Architecture):

Frontend- React.js
Backend- Node.js with Express.js
Database- Amazon RDS  (PostgreSQL) 


Expected API Endpoints :

Method  Endpoint                    Description 

GET    /api/providers             List all providers (optional: ?category=Plumber) 
GET    /api/providers/:id         Get single provider details 
POST   /api/bookings              Create a new booking 
GET    /api/bookings              List all bookings (admin view) 
PATCH  /api/bookings/:id/status   Update booking status (Completed / Cancelled) 