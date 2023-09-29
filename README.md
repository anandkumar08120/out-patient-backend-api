# out-patient-backend-api

### API : https://out-patient-07.onrender.com

```markdown
# Out-Patient Appointment System API

This is the documentation for the Out-Patient Appointment System API. The API provides endpoints to manage doctors and appointments in a healthcare system.

## Table of Contents

- [API Endpoints](#api-endpoints)
  - [List Doctors](#list-doctors)
  - [Get Doctor Details](#get-doctor-details)
  - [Book an Appointment](#book-an-appointment)

## API Endpoints

### List Doctors

- **Endpoint**: `/api/doctors`
- **Method**: GET
- **Description**: Get a list of all doctors available in the system.
- **Example Response**:

  ```json
  [
    {
      "_id": "doctor_id_1",
      "name": "Dr. Smith",
      "schedule": "1111100"
    },
    {
      "_id": "doctor_id_2",
      "name": "Dr. Johnson",
      "schedule": "1111100"
    }
  ]
  ```

### Get Doctor Details

- **Endpoint**: `/api/doctors/:id`
- **Method**: GET
- **Description**: Get detailed information about a specific doctor.
- **Parameters**:
  - `id` (Doctor ID) - The unique identifier of the doctor.
- **Example Response**:

  ```json
  {
    "_id": "doctor_id_1",
    "name": "Dr. Smith",
    "schedule": "1111100"
  }
  ```

### Book an Appointment

- **Endpoint**: `/api/appointments`
- **Method**: POST
- **Description**: Book an appointment with a doctor.
- **Request Body**:

  ```json
  {
    "doctor_id": "doctor_id_1",
    "patient_name": "John Doe",
    "appointment_date": "2023-10-15"
  }
  ```
- **Example Response**:

  ```json
  {
    "_id": "appointment_id_1",
    "doctor_id": "doctor_id_1",
    "patient_name": "John Doe",
    "appointment_date": "2023-10-15"
  }
  ```

## How to Use

- Replace `:id` in the endpoint with the actual Doctor ID when making GET requests to retrieve specific doctor details.
- When booking an appointment, send a POST request to `/api/appointments` with the doctor's ID and appointment details in the request body.

## Installation and Setup

- Clone the repository.
- Install dependencies using `npm install`.
- Start the server using `npm start`.


## License

This project is licensed under the [MIT License](LICENSE).
```
