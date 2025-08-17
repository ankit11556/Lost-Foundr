# LostFoundr  

*A MERN-based web app to post, search, and manage Lost & Found items with secure authentication.*  

---

## 🚀 Features  

- Add posts for **Lost** or **Found** items (title, item name, tag, date, posted by, contact, image).  
- Search posts by **tag** or **item name**.  
- **Authentication & Authorization**:  
  - Email verification via link.  
  - Google Sign in.  
  - Only logged-in users can add, edit, or delete posts.  
- **Protected Routes** → redirect to login if not authenticated.  
- **JWT Authentication**: Access & Refresh Tokens (auto regeneration after expiry).  
- **Responsive Design** with Tailwind CSS.  
- **Deployment**: Frontend on Vercel, Backend on Render.  

---

## 🛠️ Tech Stack  

- **Frontend:** React, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (Access & Refresh Tokens), Google Auth, Email Verification  
- **Deployment:** Vercel (Frontend), Render (Backend)  

---

## ⚙️ Installation  

Clone the repository and install dependencies:  

```bash
# Clone repo
git clone https://github.com/ankit11556/Lost-Foundr.git

# Frontend setup
cd client
npm install
npm run dev

# Backend setup
cd server
npm install
npm start

---

📖 Usage

1. Sign up with Email or Google.

2. Verify your email via link.

3. Log in and create new Lost/Found posts.

4. Search posts by tag or item name.

5. Manage your posts (edit/delete) from My Posts

---

🌍 Live Demo

- **Live Website (Vercel):** [https://lost-foundr.vercel.app/](https://lost-foundr.vercel.app/)

---

🔮 Future Enhancements

-Location-based search & filter.

-Notification system when a similar item is posted.

-Chat between finder and owner.

-Dark mode support.

---

🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

📜 License

This project is licensed under the MIT License.
