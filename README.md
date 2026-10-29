# Careflow 

A responsive, frontend-only hospital management dashboard built with plain HTML, CSS, and JavaScript. It uses synthetic demonstration data and saves changes in the browser's `localStorage`; it does not connect to a backend, database, or authentication service.

## Run locally

1. Open `index.html` in a current desktop or mobile browser.
2. For a local web server, run `python -m http.server 8000` from this folder, then visit `http://localhost:8000`.

No package installation or build step is required.

## Included screens

- Overview dashboard with sample KPIs, chart, upcoming appointments, activity, and bed occupancy.
- Patients, appointments, doctors, medical records, billing, pharmacy, laboratory, and beds/wards tables.
- Search, status filters, pagination, CSV export, and add/edit/delete forms on each management screen.
- Responsive sidebar, mobile navigation, role-view selector, notifications, validation, and confirmation prompts.
- Synthetic data is preloaded automatically. Changes persist in the current browser profile under `careflow-demo-data-v1`.
- The app displays a demo-only warning: never enter real patient, personal, or other sensitive data.

## Reset demonstration data

In the browser's developer console, run:

```js
localStorage.removeItem("careflow-demo-data-v1");
location.reload();
```

## Important limitations

This is a user-interface demonstration, not a production hospital information system. The role selector only changes the dashboard's displayed persona; it is not access control. Browser storage is not a secure location for real medical data, and this app does not encrypt data or enforce who can access it in a browser profile. There is no server-side authentication, authorization, audit trail, data backup, or database. Use synthetic data only. Do not deploy this frontend for real patient records; a production system needs authenticated and authorized server-side storage with appropriate privacy and security controls.
