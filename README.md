# 🍽️ FoodieVerse - A Community Food Blog

**FoodieVerse** is a full-stack food blog platform where users can **browse** and **share** delicious meal recipes. It showcases a dynamic collection of user-submitted meals, complete with images, summaries, and detailed instructions.

This responsive web application is built using **Next.js**, **HTML**, **CSS**, **JavaScript**, and **SQLite3** for persistent storage.  

---

## 📸 Screenshots

### 🏠 Homepage
![Screenshot 2025-05-19 233811](https://github.com/user-attachments/assets/ca94b289-0da6-4584-86a5-cb568c32e52d)


### 🍲 Browse Meals
![Screenshot 2025-05-19 233713](https://github.com/user-attachments/assets/f25b20bc-0ba7-426f-b8b9-e26a079cb72f)


### 📝 Share Recipe Form
![Screenshot 2025-05-19 233729](https://github.com/user-attachments/assets/d6be547f-7bce-434c-b430-35d828f8a8a6)


### 👥 Foodies Community
![Screenshot 2025-05-19 233752](https://github.com/user-attachments/assets/8064c6b5-ec7b-4ef1-b425-33de8858491a)


### 🧾View Details
![Screenshot 2025-05-20 001303](https://github.com/user-attachments/assets/6f09505a-c145-4f4a-b69f-d094a5e5041f)


## 🎥 Demo (Screen Recording)

📽️ Click here to watch a short demo of the application-> 
*(https://youtu.be/NfDUZBJwdBI)*


---


## 🚀 Features

- 🔍 **Browse Meals**: View all community-shared meals with images, short summaries, and contributor details.
- 👥 **Foodies Community**: Join our friendly community of food lovers!
- 🍲 **View Details**: Click on any meal to explore full instructions and content.
- 📝 **Share Your Own**: Use the intuitive form to submit your own recipe — all fields are validated and required.
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile viewing.
- ⚙️ **Secure Input Handling**: XSS protection is applied to user-submitted content.
- 💾 **Built with Better SQLite3**: Lightweight and fast database for local and small-scale deployments.


---

## 🧪 Tech Stack

- **Frontend**: HTML, CSS, JavaScript, React (via Next.js)
- **Backend**: Node.js with Next.js App Router (server components and API routes)
- **Database**: SQLite3 (via `better-sqlite3` library)

---



## ⚠️ Known Issues in Production

> These issues are rare and do not affect core functionality.

- **Preload Warnings**: Assets are preloaded but not immediately used, triggered by automatic Next.js optimization.
- **400/500 Errors**: Can occur due to malformed image uploads or misconfigured paths, especially in production deployments.
- **ChunkLoadError**: May happen if the deployment cache is stale or the dynamic routes (like `[mealslug]`) fail to resolve correctly.
- **Favicon Not Found (404)**: The favicon file is missing or not linked in the HTML; this will be fixed in the next update.
- **Dynamic Route Failures on Vercel**: SQLite3 is a local file-based DB and does not persist on Vercel’s serverless environment unless configured carefully with workarounds (e.g., remote DB or edge-compatible storage).

---

## 🛠️ Development & Local Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/foodies-blog.git
   
2. Install dependencies:
npm install

3. Run the development server:
npm run dev

4. Open http://localhost:3000

Meals are stored locally in meals.db inside your project directory.

## 🌐 Development Notes
⚠️ SQLite3 is file-based and not recommended for serverless environments like Vercel unless read-only or paired with persistent storage. You can still deploy the frontend and switch to a remote DB (e.g., Supabase, PlanetScale) for full functionality.


