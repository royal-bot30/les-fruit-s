# 🍓 Fruits Academy – Les Fruités

Welcome to **Fruits Academy – Les Fruités**, a modern and responsive web platform designed to promote and manage an intensive training program focused on fruit‑based drinks and desserts.  
This project is both a professional showcase and a functional registration tool, featuring elegant design, smooth animations, and EmailJS integration for handling registrations.

---

## 🌟 Project Goals

- Build a **professional landing page** to promote a specialized training program.
- Deliver a **smooth user experience** with a modern, mobile‑friendly design.
- Integrate a **dynamic registration form** connected to EmailJS for email handling.
- Highlight **training modules, pricing, modalities, and clear CTAs**.
- Demonstrate skills in **HTML, CSS, JavaScript, UI/UX design, and third‑party API integration**.

---

## 🎨 Design & UI

The site uses a fresh, fruit‑inspired color palette:

- **Green** (`#2d7a1f`, `#4caf2a`) for energy and nature.  
- **Red** (`#c0392b`) for passion and intensity.  
- **Yellow** (`#f9c923`) for vitality and freshness.  
- **Cream & White** for clarity and readability.  

### Design highlights:
- **Hero section** with immersive gradients and animated circular shapes.  
- **Elegant badges and titles** using *Playfair Display*.  
- **Modular cards** for key information and training modalities.  
- **CSS animations** (`fadeDown`, hover effects) for dynamic interaction.  
- **Responsive design** optimized for mobile devices.  

---

## 🧩 Core Features

### 1. Homepage
- Hero section introducing the training program.  
- Key information: date, format, type, certification, follow‑up, contact.  
- Training modules displayed as interactive cards.  
- Pricing section with payment methods and WhatsApp instructions.  
- Clear modalities (green, red, yellow cards).  
- Final CTA with registration button.  

### 2. Registration Form
- Fields: Full Name, Country, City, WhatsApp number.  
- Validation with error messages for incomplete fields.  
- Animated button with **spinner** during submission.  
- Success message with dismiss option.  
- Error handling with conditional display.  

### 3. EmailJS Integration
- Sends form data directly via email.  
- Configurable variables: `EMAILJS_PUBLIC_KEY`, `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`.  
- Data sent: fullname, country, city, WhatsApp, to_email.  
- Promise handling with `.then()` and `.catch()` for success/error states.  

---

## 📚 Training Modules

- Fruit dessert production 🍨  
- Juice / smoothie menu creation 🥤  
- Sales and marketing techniques 📈  
- Knowledge of basic equipment ⚙️  
- One‑month personalized follow‑up 🤝  

---

## 💰 Fees & Payment

- **50,000 FCFA** (West African CFA francs).  
- Payment methods:
  - 💸 Western Union — recipient: **SIMLIWA POUWEDEOU**  
  - 📱 Mixx by Yas — number: **+228 90 27 00 80**  
- Confirmation via screenshot sent on WhatsApp.  

---

## ⚙️ Technologies Used

- **HTML5**: semantic structure.  
- **CSS3**: modern design, animations, responsive layout.  
- **Vanilla JavaScript**: form logic, view navigation.  
- **EmailJS**: integration for email‑based registration.  
- **Google Meet & WhatsApp**: external tools for training and communication.  

---

## 📱 Mobile Adaptation

- Responsive design using `clamp()` for font sizes.  
- Media queries for padding and card adjustments.  
- Buttons and forms optimized for touch interaction.  

---

## 🚀 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fruits-academy.git
