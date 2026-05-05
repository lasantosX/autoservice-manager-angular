# AutoService Manager - Angular Frontend

Angular + TypeScript frontend for an automotive service management system, connected to a real ASP.NET Core Web API.

## Tech Stack

- Angular
- TypeScript
- Angular Router
- HttpClient
- RxJS
- Custom CSS
- ASP.NET Core Web API integration

## Features

- Dashboard layout
- Sidebar navigation
- Customers API integration
- Vehicles by customer API integration
- Technicians API integration
- Service Orders API integration
- Typed API models
- Paginated API response handling
- Clean service-based architecture

## API Endpoints Used

- GET `/api/Customers`
- GET `/api/customers/{customerId}/vehicles`
- GET `/api/Technicians`
- GET `/api/ServiceOrders`

## Project Structure

```text
src/app/
  api/
  layouts/
  pages/
  types/
Run Locally
npm install
ng serve
Backend URL

The API base URL is currently configured inside the Angular services:

https://localhost:44323/api
Author

Luis Santos
Senior Software Developer - .NET / Angular / React / Vue / SQL Server
