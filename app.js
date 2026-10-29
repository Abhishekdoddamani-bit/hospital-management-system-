const STORAGE_KEY = "careflow-demo-data-v1";

const seedData = {
  patients: [
    { id: "PT-2048", name: "Olivia Bennett", age: 34, gender: "Female", phone: "+1 (555) 218-0194", email: "olivia.b@example.com", blood: "A+", condition: "Migraine", status: "Active" },
    { id: "PT-2047", name: "Ethan Parker", age: 52, gender: "Male", phone: "+1 (555) 604-8821", email: "ethan.p@example.com", blood: "O+", condition: "Hypertension", status: "Active" },
    { id: "PT-2046", name: "Mia Thompson", age: 27, gender: "Female", phone: "+1 (555) 310-5467", email: "mia.t@example.com", blood: "B+", condition: "Annual checkup", status: "Active" },
    { id: "PT-2045", name: "Noah Williams", age: 46, gender: "Male", phone: "+1 (555) 799-1543", email: "noah.w@example.com", blood: "AB+", condition: "Type 2 diabetes", status: "Active" },
    { id: "PT-2044", name: "Ava Rodriguez", age: 63, gender: "Female", phone: "+1 (555) 427-3012", email: "ava.r@example.com", blood: "O-", condition: "Cardiology follow-up", status: "Active" },
    { id: "PT-2043", name: "Liam Chen", age: 19, gender: "Male", phone: "+1 (555) 923-7780", email: "liam.c@example.com", blood: "A-", condition: "Sports injury", status: "Active" },
    { id: "PT-2042", name: "Isabella Moore", age: 39, gender: "Female", phone: "+1 (555) 198-6520", email: "isabella.m@example.com", blood: "B-", condition: "Asthma", status: "Active" },
    { id: "PT-2041", name: "James Wilson", age: 71, gender: "Male", phone: "+1 (555) 812-0921", email: "james.w@example.com", blood: "O+", condition: "Arthritis", status: "Active" }
  ],
  appointments: [
    { id: "APT-8012", patient: "Olivia Bennett", doctor: "Dr. Sarah Mitchell", department: "Cardiology", date: "2026-10-28", time: "09:30 AM", status: "Scheduled" },
    { id: "APT-8011", patient: "Ethan Parker", doctor: "Dr. James Wilson", department: "Neurology", date: "2026-10-28", time: "10:00 AM", status: "Scheduled" },
    { id: "APT-8010", patient: "Mia Thompson", doctor: "Dr. Emily Chen", department: "General medicine", date: "2026-10-28", time: "10:30 AM", status: "Completed" },
    { id: "APT-8009", patient: "Noah Williams", doctor: "Dr. Sarah Mitchell", department: "Cardiology", date: "2026-10-28", time: "11:00 AM", status: "Scheduled" },
    { id: "APT-8008", patient: "Ava Rodriguez", doctor: "Dr. David Kim", department: "Orthopedics", date: "2026-10-28", time: "11:30 AM", status: "Pending" },
    { id: "APT-8007", patient: "Liam Chen", doctor: "Dr. Emily Chen", department: "General medicine", date: "2026-10-28", time: "01:00 PM", status: "Scheduled" },
    { id: "APT-8006", patient: "Isabella Moore", doctor: "Dr. James Wilson", department: "Neurology", date: "2026-10-28", time: "02:00 PM", status: "Cancelled" }
  ],
  doctors: [
    { id: "DOC-104", name: "Dr. Sarah Mitchell", specialty: "Cardiology", department: "Heart & Vascular", phone: "+1 (555) 227-4091", email: "s.mitchell@careflow.demo", status: "Available" },
    { id: "DOC-103", name: "Dr. James Wilson", specialty: "Neurology", department: "Neurosciences", phone: "+1 (555) 308-1194", email: "j.wilson@careflow.demo", status: "Available" },
    { id: "DOC-102", name: "Dr. Emily Chen", specialty: "General medicine", department: "Primary care", phone: "+1 (555) 571-6028", email: "e.chen@careflow.demo", status: "In progress" },
    { id: "DOC-101", name: "Dr. David Kim", specialty: "Orthopedics", department: "Bone & Joint", phone: "+1 (555) 682-2770", email: "d.kim@careflow.demo", status: "Available" },
    { id: "DOC-100", name: "Dr. Nina Patel", specialty: "Pediatrics", department: "Children's health", phone: "+1 (555) 742-0833", email: "n.patel@careflow.demo", status: "Unavailable" }
  ],
  records: [
    { id: "MR-5510", patient: "Olivia Bennett", doctor: "Dr. Sarah Mitchell", diagnosis: "Migraine without aura", date: "2026-10-28", department: "Neurology", status: "Review" },
    { id: "MR-5509", patient: "Ethan Parker", doctor: "Dr. James Wilson", diagnosis: "Essential hypertension", date: "2026-10-27", department: "Cardiology", status: "Completed" },
    { id: "MR-5508", patient: "Noah Williams", doctor: "Dr. Emily Chen", diagnosis: "Type 2 diabetes mellitus", date: "2026-10-26", department: "General medicine", status: "Completed" },
    { id: "MR-5507", patient: "Ava Rodriguez", doctor: "Dr. David Kim", diagnosis: "Osteoarthritis, knee", date: "2026-10-25", department: "Orthopedics", status: "Review" }
  ],
  billing: [
    { id: "INV-3812", patient: "Olivia Bennett", service: "Consultation · Cardiology", date: "2026-10-28", amount: "$185.00", status: "Paid" },
    { id: "INV-3811", patient: "Ethan Parker", service: "Lab tests · Blood panel", date: "2026-10-27", amount: "$240.00", status: "Pending" },
    { id: "INV-3810", patient: "Mia Thompson", service: "Annual wellness visit", date: "2026-10-27", amount: "$125.00", status: "Paid" },
    { id: "INV-3809", patient: "Noah Williams", service: "Consultation · Endocrinology", date: "2026-10-26", amount: "$210.00", status: "Unpaid" },
    { id: "INV-3808", patient: "Ava Rodriguez", service: "Imaging · X-ray", date: "2026-10-25", amount: "$320.00", status: "Paid" }
  ],
  pharmacy: [
    { id: "MED-214", name: "Amoxicillin", category: "Antibiotic", batch: "AMX-26-041", stock: "240 units", expiry: "2027-04-30", status: "Available" },
    { id: "MED-213", name: "Metformin 500mg", category: "Antidiabetic", batch: "MET-26-022", stock: "18 units", expiry: "2027-02-14", status: "Low stock" },
    { id: "MED-212", name: "Atorvastatin 20mg", category: "Cholesterol", batch: "ATV-26-013", stock: "95 units", expiry: "2027-01-08", status: "Available" },
    { id: "MED-211", name: "Ibuprofen 200mg", category: "Pain relief", batch: "IBU-25-088", stock: "62 units", expiry: "2026-11-18", status: "Low stock" },
    { id: "MED-210", name: "Cetirizine 10mg", category: "Antihistamine", batch: "CTZ-26-007", stock: "130 units", expiry: "2027-07-22", status: "Available" }
  ],
  laboratory: [
    { id: "LAB-9914", patient: "Ethan Parker", test: "Complete blood count", orderedBy: "Dr. James Wilson", date: "2026-10-28", status: "Processing" },
    { id: "LAB-9913", patient: "Noah Williams", test: "HbA1c", orderedBy: "Dr. Emily Chen", date: "2026-10-28", status: "Ready" },
    { id: "LAB-9912", patient: "Olivia Bennett", test: "Lipid panel", orderedBy: "Dr. Sarah Mitchell", date: "2026-10-27", status: "Completed" },
    { id: "LAB-9911", patient: "Ava Rodriguez", test: "Vitamin D", orderedBy: "Dr. David Kim", date: "2026-10-26", status: "Processing" }
  ],
  beds: [
    { id: "BED-304", ward: "North · 3rd floor", room: "304-A", patient: "James Wilson", type: "Private", status: "Occupied" },
    { id: "BED-303", ward: "North · 3rd floor", room: "303-B", patient: "—", type: "General", status: "Available" },
    { id: "BED-208", ward: "East · 2nd floor", room: "208-A", patient: "Ava Rodriguez", type: "Private", status: "Occupied" },
    { id: "BED-207", ward: "East · 2nd floor", room: "207-A", patient: "—", type: "General", status: "Available" },
    { id: "BED-105", ward: "South · 1st floor", room: "105-C", patient: "—", type: "ICU", status: "Available" }
  ]
};

const configs = {
  patients: {
    title: "Patients", singular: "patient", icon: "♙", subtitle: "Manage patient profiles and their care information.",
    columns: [["Patient", "name"], ["Patient ID", "id"], ["Age / gender", "ageGender"], ["Phone", "phone"], ["Condition", "condition"], ["Status", "status"]],
    fields: [["name", "Full name", "text", true], ["age", "Age", "number", true], ["gender", "Gender", "select", true, ["Female", "Male", "Other"]], ["phone", "Phone number", "tel", true], ["email", "Email address", "email", false], ["blood", "Blood group", "select", false, ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]], ["condition", "Primary condition", "text", false], ["status", "Patient status", "select", true, ["Active", "Discharged"]]]
  },
  appointments: {
    title: "Appointments", singular: "appointment", icon: "▦", subtitle: "Schedule visits and keep every appointment on track.",
    columns: [["Patient", "patient"], ["Appointment ID", "id"], ["Doctor", "doctor"], ["Department", "department"], ["Date & time", "dateTime"], ["Status", "status"]],
    fields: [["patient", "Patient name", "text", true], ["doctor", "Doctor", "text", true], ["department", "Department", "text", true], ["date", "Appointment date", "date", true], ["time", "Time", "time", true], ["status", "Status", "select", true, ["Scheduled", "Pending", "Completed", "Cancelled", "Missed"]]]
  },
  doctors: {
    title: "Doctors", singular: "doctor", icon: "⚕", subtitle: "View care teams, specialties, and availability.",
    columns: [["Doctor", "name"], ["Doctor ID", "id"], ["Specialty", "specialty"], ["Department", "department"], ["Phone", "phone"], ["Status", "status"]],
    fields: [["name", "Full name", "text", true], ["specialty", "Specialty", "text", true], ["department", "Department", "text", true], ["phone", "Phone number", "tel", true], ["email", "Email address", "email", false], ["status", "Availability", "select", true, ["Available", "In progress", "Unavailable"]]]
  },
  records: {
    title: "Medical records", singular: "medical record", icon: "▤", subtitle: "Clinical notes and diagnoses for the care team.",
    columns: [["Patient", "patient"], ["Record ID", "id"], ["Diagnosis", "diagnosis"], ["Doctor", "doctor"], ["Department", "department"], ["Date", "date"], ["Status", "status"]],
    fields: [["patient", "Patient name", "text", true], ["doctor", "Doctor", "text", true], ["diagnosis", "Diagnosis", "text", true], ["department", "Department", "text", true], ["date", "Date", "date", true], ["status", "Status", "select", true, ["Review", "Completed"]]]
  },
  billing: {
    title: "Billing", singular: "invoice", icon: "＄", subtitle: "Track invoices, payments, and outstanding balances.",
    columns: [["Invoice", "id"], ["Patient", "patient"], ["Service", "service"], ["Date", "date"], ["Amount", "amount"], ["Status", "status"]],
    fields: [["patient", "Patient name", "text", true], ["service", "Service description", "text", true], ["date", "Invoice date", "date", true], ["amount", "Amount", "text", true], ["status", "Payment status", "select", true, ["Paid", "Pending", "Unpaid"]]]
  },
  pharmacy: {
    title: "Pharmacy", singular: "medicine", icon: "✚", subtitle: "Monitor medicine stock, batches, and expiry dates.",
    columns: [["Medicine", "name"], ["Medicine ID", "id"], ["Category", "category"], ["Batch", "batch"], ["Stock", "stock"], ["Expiry", "expiry"], ["Status", "status"]],
    fields: [["name", "Medicine name", "text", true], ["category", "Category", "text", true], ["batch", "Batch number", "text", true], ["stock", "Stock quantity", "text", true], ["expiry", "Expiry date", "date", true], ["status", "Stock status", "select", true, ["Available", "Low stock", "Critical"]]]
  },
  laboratory: {
    title: "Laboratory", singular: "lab order", icon: "⚗", subtitle: "Follow test orders from collection through results.",
    columns: [["Order", "id"], ["Patient", "patient"], ["Test", "test"], ["Ordered by", "orderedBy"], ["Date", "date"], ["Status", "status"]],
    fields: [["patient", "Patient name", "text", true], ["test", "Test name", "text", true], ["orderedBy", "Ordered by", "text", true], ["date", "Order date", "date", true], ["status", "Test status", "select", true, ["Processing", "Ready", "Completed"]]]
  },
  beds: {
    title: "Beds & wards", singular: "bed", icon: "▱", subtitle: "Keep ward capacity and patient assignments up to date.",
    columns: [["Bed", "id"], ["Ward", "ward"], ["Room", "room"], ["Patient", "patient"], ["Bed type", "type"], ["Status", "status"]],
    fields: [["ward", "Ward", "text", true], ["room", "Room", "text", true], ["patient", "Patient (or —)", "text", true], ["type", "Bed type", "select", true, ["General", "Private", "ICU"]], ["status", "Bed status", "select", true, ["Available", "Occupied"]]]
  }
};

const state = {
  data: loadData(),
  page: "dashboard",
  query: "",
  filter: "All statuses",
  pageNumber: 1,
  editingId: null,
  activeRole: "Administrator"
};
const pageSize = 6;

function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return structuredClone(seedData);
    const parsed = JSON.parse(saved);
    return Object.fromEntries(Object.keys(seedData).map(key => [key, Array.isArray(parsed[key]) ? parsed[key] : structuredClone(seedData[key])]));
  } catch (error) {
    console.error("Could not load Careflow demo data.", error);
    return structuredClone(seedData);
  }
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
  } catch (error) {
    console.error("Could not save Careflow demo data.", error);
    showToast("Changes could not be saved in this browser.", true);
  }
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function displayDate(value) {
  if (!value) return "—";
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function badge(value) {
  const normalized = String(value || "").toLowerCase().replace(/\s+/g, "-");
  return `<span class="status status-${escapeHtml(normalized)}">${escapeHtml(value || "—")}</span>`;
}

function initials(name) {
  return String(name || "NA").replace(/^Dr\.\s*/i, "").split(/\s+/).slice(0, 2).map(part => part[0] || "").join("").toUpperCase();
}

function navTo(page) {
  state.page = page;
  state.query = "";
  state.filter = "All statuses";
  state.pageNumber = 1;
  document.querySelectorAll(".nav-link").forEach(link => link.classList.toggle("active", link.dataset.page === page));
  document.getElementById("crumb-current").textContent = page === "dashboard" ? "Overview" : (configs[page]?.title || "Reports");
  document.getElementById("sidebar").classList.remove("open");
  render();
}

function render() {
  const root = document.getElementById("app-content");
  if (state.page === "dashboard") root.innerHTML = renderDashboard();
  else if (state.page === "reports") root.innerHTML = renderReports();
  else root.innerHTML = renderModule(state.page);
}

function renderDashboard() {
  const patients = state.data.patients.length;
  const appointments = state.data.appointments.length;
  const doctors = state.data.doctors.length;
  const paid = state.data.billing.filter(item => item.status === "Paid").length;
  const roleMessages = {
    Administrator: "Here's what's happening across your hospital today.",
    Doctor: "Your clinical schedule and patient care at a glance.",
    Receptionist: "Today's visits and patient registrations at a glance.",
    Nurse: "Your patient care and ward activity at a glance.",
    Patient: "A quick overview of your care at Careflow.",
    Pharmacist: "Pharmacy stock and prescription activity at a glance.",
    Accountant: "Billing and payment activity at a glance."
  };
  const upcoming = state.data.appointments.filter(item => !["Cancelled", "Completed"].includes(item.status)).slice(0, 4);
  return `
    <section class="page-heading"><div><span class="eyebrow">WEDNESDAY, OCTOBER 28, 2026</span><h1>Good morning, Alex <span aria-hidden="true">☀️</span></h1><p>${escapeHtml(roleMessages[state.activeRole] || roleMessages.Administrator)}</p></div><button class="button button-primary" data-action="create" data-entity="appointments"><span class="button-icon">＋</span> New appointment</button></section>
    <section class="stats-grid" aria-label="Hospital statistics">
      ${statCard("Total patients", patients.toLocaleString(), `<span class="trend-up">↑ 12.8%</span> vs. last month`, "♙", "blue")}
      ${statCard("Appointments today", appointments.toLocaleString(), `<span class="trend-up">↑ 8.2%</span> vs. yesterday`, "▦", "green")}
      ${statCard("Available doctors", doctors.toLocaleString(), "Across 6 departments", "⚕", "purple")}
      ${statCard("Revenue collected", `$${(paid * 214).toLocaleString()}`, `<span class="trend-up">↑ 6.4%</span> this month`, "＄", "orange")}
    </section>
    <div class="dashboard-grid">
      <section class="panel"><div class="panel-header"><div><h2 class="panel-title">Patient overview</h2><p class="panel-subtitle">Patient visits and registrations over time</p></div><select class="period-select" aria-label="Chart period"><option>Last 7 days</option><option>Last 30 days</option><option>This year</option></select></div>${renderChart()}</section>
      <section class="panel"><div class="panel-header"><div><h2 class="panel-title">Today's appointments</h2><p class="panel-subtitle">${upcoming.length} upcoming visits</p></div><button class="text-link" data-page="appointments">View all →</button></div><div class="appointment-list">${upcoming.map(item => `<div class="appointment-row"><div class="doctor-avatar">${escapeHtml(initials(item.patient))}</div><div class="appointment-copy"><strong>${escapeHtml(item.patient)}</strong><span>${escapeHtml(item.doctor)} · ${escapeHtml(item.department)}</span></div><div class="appointment-time">${escapeHtml(item.time)}<small>${badge(item.status)}</small></div></div>`).join("") || `<div class="empty-state">No upcoming appointments.</div>`}</div><div class="panel-footer"><button class="text-link" data-page="appointments">Open appointment schedule →</button></div></section>
    </div>
    <div class="bottom-grid">
      <section class="panel"><div class="panel-header"><div><h2 class="panel-title">Recent activity</h2><p class="panel-subtitle">Latest updates from your hospital</p></div><button class="text-link" data-page="patients">View patients</button></div><div class="activity-list">
        <div class="activity-item"><span class="activity-marker"></span><p><strong>${escapeHtml(state.data.patients[0]?.name || "A patient")}</strong> was registered as a new patient.<time>Today, 9:42 AM</time></p></div>
        <div class="activity-item"><span class="activity-marker" style="background:#20b89a"></span><p>Lab results are ready for <strong>Noah Williams</strong>.<time>Today, 9:18 AM</time></p></div>
        <div class="activity-item"><span class="activity-marker" style="background:#e8a449"></span><p>Stock running low: <strong>Metformin 500mg</strong>.<time>Today, 8:55 AM</time></p></div>
      </div></section>
      <section class="panel"><div class="panel-header"><div><h2 class="panel-title">Bed occupancy</h2><p class="panel-subtitle">Current inpatient capacity</p></div><button class="text-link" data-page="beds">Details</button></div><div class="occupancy"><div class="occupancy-top"><div class="occupancy-value">${state.data.beds.filter(bed => bed.status === "Occupied").length}<small> / ${state.data.beds.length} beds</small></div><span class="status status-scheduled">76% occupied</span></div><div class="progress-track"><div class="progress-fill"></div></div><div class="occupancy-note"><span>Occupied</span><span>Available</span></div><div class="mini-wards"><div class="ward-chip"><strong>North</strong><span>18 / 24 beds</span></div><div class="ward-chip"><strong>East</strong><span>12 / 18 beds</span></div><div class="ward-chip"><strong>South</strong><span>9 / 16 beds</span></div></div></div></section>
    </div>`;
}

function statCard(label, value, foot, icon, color) {
  return `<article class="stat-card"><div class="stat-top"><span>${label}</span><span class="stat-icon ${color}">${icon}</span></div><div class="stat-value">${value}</div><div class="stat-foot">${foot}</div></article>`;
}

function renderChart() {
  const points = [68, 61, 76, 49, 56, 35, 43, 26, 38, 19, 30, 11];
  const coords = points.map((y, index) => `${48 + index * 45},${y + 10}`).join(" ");
  const areaPath = `M ${coords.replaceAll(" ", " L ")} L 543,190 L 48,190 Z`;
  return `<div class="chart-area"><svg viewBox="0 0 565 205" role="img" aria-label="Patient visits rising over the last seven days"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#4d89f3" stop-opacity=".18"/><stop offset="100%" stop-color="#4d89f3" stop-opacity="0"/></linearGradient></defs><line x1="40" y1="45" x2="550" y2="45" class="grid-line"/><line x1="40" y1="95" x2="550" y2="95" class="grid-line"/><line x1="40" y1="145" x2="550" y2="145" class="grid-line"/><text x="0" y="48" class="chart-label">80</text><text x="0" y="98" class="chart-label">60</text><text x="0" y="148" class="chart-label">40</text><path d="${areaPath}" class="chart-fill"/><polyline points="${coords}" class="chart-line"/>${points.map((y, i) => `<circle cx="${48 + i * 45}" cy="${y + 10}" r="3.5" class="chart-dot"/>`).join("")}<text x="43" y="202" class="chart-label">Mon</text><text x="125" y="202" class="chart-label">Tue</text><text x="205" y="202" class="chart-label">Wed</text><text x="285" y="202" class="chart-label">Thu</text><text x="365" y="202" class="chart-label">Fri</text><text x="445" y="202" class="chart-label">Sat</text><text x="525" y="202" class="chart-label">Sun</text></svg></div>`;
}

function getValue(item, field) {
  if (field === "ageGender") return `${item.age} yrs · ${item.gender}`;
  if (field === "dateTime") return `${displayDate(item.date)} · ${item.time}`;
  return item[field] ?? "—";
}

function renderModule(key) {
  const config = configs[key];
  const items = state.data[key] || [];
  const filtered = items.filter(item => {
    const searchText = Object.values(item).join(" ").toLowerCase();
    const queryMatch = !state.query || searchText.includes(state.query.toLowerCase());
    const filterMatch = state.filter === "All statuses" || item.status === state.filter;
    return queryMatch && filterMatch;
  });
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  if (state.pageNumber > pageCount) state.pageNumber = pageCount;
  const visible = filtered.slice((state.pageNumber - 1) * pageSize, state.pageNumber * pageSize);
  const statuses = [...new Set(items.map(item => item.status).filter(Boolean))];
  return `<section class="page-heading"><div><span class="eyebrow">HOSPITAL MANAGEMENT</span><h1>${config.title}</h1><p>${config.subtitle}</p></div><button class="button button-primary" data-action="create" data-entity="${key}"><span class="button-icon">＋</span> Add ${config.singular}</button></section>
    <section class="panel">
      <div class="table-toolbar"><div class="toolbar-left"><label class="search-box"><span>⌕</span><input id="table-search" type="search" placeholder="Search ${config.title.toLowerCase()}..." value="${escapeHtml(state.query)}" aria-label="Search ${config.title}"></label></div><div class="toolbar-right"><select class="filter-select" id="status-filter" aria-label="Filter by status"><option>All statuses</option>${statuses.map(status => `<option ${state.filter === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}</select><button class="button button-outline" id="export-button"><span class="button-icon">↓</span> Export</button></div></div>
      ${visible.length ? `<div class="table-wrap"><table><thead><tr>${config.columns.map(([, label]) => `<th>${escapeHtml(label)}</th>`).join("")}<th>Actions</th></tr></thead><tbody>${visible.map(item => `<tr>${config.columns.map(([label, field]) => `<td>${field === "name" || (key === "patients" && field === "name") || (field === "patient" && ["appointments", "records", "billing", "laboratory"].includes(key)) ? `<div class="person-cell"><span class="doctor-avatar">${escapeHtml(initials(getValue(item, field)))}</span><span><strong>${escapeHtml(getValue(item, field))}</strong>${key === "patients" && item.email ? `<small>${escapeHtml(item.email)}</small>` : ""}</span></div>` : field === "status" ? badge(getValue(item, field)) : escapeHtml(field === "date" || field === "expiry" ? displayDate(getValue(item, field)) : getValue(item, field))}</td>`).join("")}<td><div class="row-actions"><button class="action-button" data-action="edit" data-entity="${key}" data-id="${escapeHtml(item.id)}" aria-label="Edit ${escapeHtml(config.singular)}">Edit</button><button class="action-button delete" data-action="delete" data-entity="${key}" data-id="${escapeHtml(item.id)}" aria-label="Delete ${escapeHtml(config.singular)}">Delete</button></div></td></tr>`).join("")}</tbody></table></div>` : `<div class="empty-state"><strong>No ${config.title.toLowerCase()} found</strong>Try changing your search or filter.</div>`}
      <div class="table-footer"><span>Showing ${filtered.length ? (state.pageNumber - 1) * pageSize + 1 : 0}–${Math.min(state.pageNumber * pageSize, filtered.length)} of ${filtered.length} ${config.title.toLowerCase()}</span><div class="pagination"><button class="page-button" data-page-number="${Math.max(1, state.pageNumber - 1)}" aria-label="Previous page">‹</button><button class="page-button current">${state.pageNumber}</button><button class="page-button" data-page-number="${Math.min(pageCount, state.pageNumber + 1)}" aria-label="Next page">›</button></div></div>
    </section>`;
}

function renderReports() {
  return `<section class="page-heading"><div><span class="eyebrow">INSIGHTS & ANALYTICS</span><h1>Reports & analytics</h1><p>Monitor hospital performance with a quick view of key metrics.</p></div><button class="button button-outline" id="export-report"><span class="button-icon">↓</span> Export summary</button></section>
  <section class="report-grid">
    <article class="panel report-card"><div class="stat-top"><span>Patient visits</span><span class="stat-icon blue">♙</span></div><div class="stat-value">${state.data.patients.length * 38 + 120}</div><p><span class="trend-up">↑ 12.8%</span> compared to last month</p><div class="report-bars">${[34,48,42,66,54,76,61,83,70,91,76,100].map(h => `<span style="height:${h}%"></span>`).join("")}</div></article>
    <article class="panel report-card"><div class="stat-top"><span>Appointments</span><span class="stat-icon green">▦</span></div><div class="stat-value">${state.data.appointments.length * 19 + 87}</div><p><span class="trend-up">↑ 8.2%</span> compared to last month</p><div class="report-bars">${[50,62,47,74,60,85,66,74,92,81,100,88].map(h => `<span style="height:${h}%"></span>`).join("")}</div></article>
    <article class="panel report-card"><div class="stat-top"><span>Revenue collected</span><span class="stat-icon orange">＄</span></div><div class="stat-value">$${(state.data.billing.filter(i => i.status === "Paid").length * 214).toLocaleString()}</div><p><span class="trend-up">↑ 6.4%</span> compared to last month</p><div class="report-bars">${[36,51,43,61,57,79,67,86,72,93,82,100].map(h => `<span style="height:${h}%"></span>`).join("")}</div></article>
  </section>
  <section class="panel report-table"><div class="panel-header"><div><h2 class="panel-title">Department overview</h2><p class="panel-subtitle">Appointments grouped by department</p></div><select class="period-select" aria-label="Report period"><option>This month</option><option>Last month</option><option>This year</option></select></div><div class="table-wrap"><table><thead><tr><th>Department</th><th>Appointments</th><th>Doctors</th><th>Completion</th><th>Trend</th></tr></thead><tbody>${["Cardiology", "General medicine", "Neurology", "Orthopedics"].map((department, index) => `<tr><td><strong>${department}</strong></td><td>${[124, 98, 76, 53][index]}</td><td>${[8, 12, 6, 5][index]}</td><td>${[94, 88, 91, 83][index]}%</td><td><span class="trend-up">↑ ${[12, 8, 6, 4][index]}%</span></td></tr>`).join("")}</tbody></table></div></section>`;
}

function openForm(entity, id = null) {
  const config = configs[entity];
  if (!config) return;
  state.editingId = id;
  const item = id ? state.data[entity].find(entry => entry.id === id) : null;
  document.getElementById("modal-eyebrow").textContent = id ? `EDIT ${config.singular.toUpperCase()}` : `NEW ${config.singular.toUpperCase()}`;
  document.getElementById("modal-title").textContent = `${id ? "Edit" : "Add"} ${config.singular}`;
  document.getElementById("save-entry").textContent = id ? "Save changes" : "Save entry";
  document.getElementById("form-fields").innerHTML = config.fields.map(([name, label, type, required, options]) => {
    const full = ["name", "patient", "doctor", "service", "diagnosis", "test", "ward", "email", "condition"].includes(name) ? " full" : "";
    const input = type === "select" ? `<select class="form-control" id="field-${name}" name="${name}" ${required ? "required" : ""}>${options.map(option => `<option ${item?.[name] === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>` : `<input class="form-control" id="field-${name}" name="${name}" type="${type}" value="${escapeHtml(item?.[name] ?? (name === "date" ? "2026-10-28" : ""))}" ${required ? "required" : ""} ${type === "number" ? 'min="0" max="125"' : ""} placeholder="${type === "text" || type === "tel" || type === "email" ? `Enter ${label.toLowerCase()}` : ""}">`;
    return `<div class="form-field${full}"><label for="field-${name}">${escapeHtml(label)}${required ? " *" : ""}</label>${input}</div>`;
  }).join("");
  document.getElementById("modal-backdrop").hidden = false;
  document.getElementById("field-" + config.fields[0][0])?.focus();
}

function closeForm() {
  document.getElementById("modal-backdrop").hidden = true;
  document.getElementById("entry-form").reset();
  state.editingId = null;
}

function generateId(entity) {
  const prefixes = { patients: "PT", appointments: "APT", doctors: "DOC", records: "MR", billing: "INV", pharmacy: "MED", laboratory: "LAB", beds: "BED" };
  const highest = (state.data[entity] || []).reduce((value, item) => Math.max(value, Number(String(item.id).match(/\d+/)?.[0] || 0)), 0);
  return `${prefixes[entity] || "CF"}-${highest + 1}`;
}

function saveForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const entity = state.page;
  const config = configs[entity];
  if (!config) return;
  const entry = Object.fromEntries(config.fields.map(([name]) => [name, new FormData(form).get(name)?.toString().trim() || ""]));
  const isEditing = Boolean(state.editingId);
  if (isEditing) {
    const index = state.data[entity].findIndex(item => item.id === state.editingId);
    if (index >= 0) state.data[entity][index] = { ...state.data[entity][index], ...entry };
  } else {
    entry.id = generateId(entity);
    if (entity === "patients") entry.age = Number(entry.age);
    if (entity === "appointments" && state.data.appointments.some(item => item.doctor.toLowerCase() === entry.doctor.toLowerCase() && item.date === entry.date && item.time === entry.time && item.status !== "Cancelled")) {
      showToast("That doctor already has an appointment at this time.", true);
      return;
    }
    state.data[entity].unshift(entry);
  }
  saveData();
  closeForm();
  state.pageNumber = 1;
  render();
  updateCounts();
  showToast(`${config.singular[0].toUpperCase()}${config.singular.slice(1)} ${isEditing ? "updated" : "added"} successfully.`);
}

function deleteEntry(entity, id) {
  const config = configs[entity];
  const item = state.data[entity].find(entry => entry.id === id);
  if (!item || !window.confirm(`Delete ${config.singular} "${item.name || item.patient || item.id}"? This cannot be undone.`)) return;
  state.data[entity] = state.data[entity].filter(entry => entry.id !== id);
  saveData();
  render();
  updateCounts();
  showToast(`${config.singular[0].toUpperCase()}${config.singular.slice(1)} deleted.`);
}

function updateCounts() {
  document.getElementById("patient-nav-count").textContent = state.data.patients.length;
}

function showToast(message, error = false) {
  const toast = document.createElement("div");
  toast.className = `toast${error ? " error" : ""}`;
  toast.textContent = message;
  document.getElementById("toast-region").append(toast);
  setTimeout(() => toast.remove(), 3200);
}

function csvCell(value) {
  const text = String(value);
  const safe = /^[\s\u0000-\u001f\uFEFF]*[=+\-@]/.test(text) ? `'${text}` : text;
  return `"${safe.replaceAll('"', '""')}"`;
}

function exportCsv() {
  const config = configs[state.page];
  const rows = state.data[state.page];
  if (!config || !rows) return;
  const columns = [...config.columns.map(([, field]) => field)];
  const csv = [columns.join(","), ...rows.map(item => columns.map(field => csvCell(getValue(item, field))).join(","))].join("\r\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  link.download = `careflow-${state.page}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast(`${config.title} exported as CSV.`);
}

document.addEventListener("click", event => {
  const target = event.target.closest("[data-page], [data-action], [data-page-number], #cancel-form, #modal-close, #export-button, #export-report, #mobile-menu, #notification-button");
  if (!target) return;
  if (target.dataset.page) { event.preventDefault(); navTo(target.dataset.page); return; }
  if (target.dataset.action === "create") { openForm(target.dataset.entity); return; }
  if (target.dataset.action === "edit") { openForm(target.dataset.entity, target.dataset.id); return; }
  if (target.dataset.action === "delete") { deleteEntry(target.dataset.entity, target.dataset.id); return; }
  if (target.dataset.pageNumber) { state.pageNumber = Number(target.dataset.pageNumber); render(); return; }
  if (target.id === "cancel-form" || target.id === "modal-close") { closeForm(); return; }
  if (target.id === "export-button") { exportCsv(); return; }
  if (target.id === "export-report") { showToast("Your report summary is ready to print."); window.print(); return; }
  if (target.id === "mobile-menu") { document.getElementById("sidebar").classList.toggle("open"); return; }
  if (target.id === "notification-button") showToast("You're all caught up on notifications.");
});

document.getElementById("entry-form").addEventListener("submit", saveForm);
document.getElementById("app-content").addEventListener("input", event => {
  if (event.target.id === "table-search") {
    state.query = event.target.value;
    state.pageNumber = 1;
    const selectionStart = event.target.selectionStart;
    render();
    const input = document.getElementById("table-search");
    input?.focus();
    input?.setSelectionRange(selectionStart, selectionStart);
  }
});
document.getElementById("app-content").addEventListener("change", event => {
  if (event.target.id === "status-filter") {
    state.filter = event.target.value;
    state.pageNumber = 1;
    render();
  }
});
document.getElementById("role-select").addEventListener("change", event => {
  state.activeRole = event.target.value;
  if (state.page === "dashboard") render();
  showToast(`Demo view switched to ${state.activeRole}.`);
});
document.getElementById("modal-backdrop").addEventListener("click", event => {
  if (event.target.id === "modal-backdrop") closeForm();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !document.getElementById("modal-backdrop").hidden) closeForm();
});

updateCounts();
render();
