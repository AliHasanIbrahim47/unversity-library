<div align="center">
  <br />
    <a href="https://youtu.be/EZajJGOMWas?feature=shared" target="_blank">
      <img src="https://github.com/user-attachments/assets/4a161355-1529-4155-bcd9-226b7ef9b0db" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logoColor=white&logo=postgresql&color=4169E1" alt="postgresql" />
    <img src="https://img.shields.io/badge/-Upstash-black?style=for-the-badge&logoColor=white&logo=upstash&color=00E9A3" alt="upstash" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">A University Library Management System with Admin Panel</h3>

</div>

## 🚨 Tutorial

This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>. 

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

<a href="https://youtu.be/EZajJGOMWas?feature=shared" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

Built with Next.js, TypeScript, and Postgres, the University Library Management System is a production-grade platform featuring a public-facing app and an admin interface. It offers advanced functionalities like seamless book borrowing with reminders and receipts, robust user management, automated workflows, and a modern, optimized tech stack for real-world scalability.

If you're getting started and need assistance or face any bugs, join our active Discord community with over **50k+** members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- PostgreSQL
- Upstash
- ImageKit
- TypeScript
- Resend
- Tailwind CSS

## <a name="features">🔋 Features</a>

### Features of the University Library Management System Project

👉 **Open-source Authentication**: Personalized onboarding flow with email notifications.  

👉 **Home Page**: Highlighted books and newly added books with 3D effects.  

👉 **Library Page**: Advanced filtering, search, and pagination for book discovery.  

👉 **Book Detail Pages**: Availability tracking, book summaries, videos, and suggestions for similar books.  

👉 **Profile Page**: Manage accounts, track borrowed books, and download receipts.  

👉 **Onboarding Workflows**: Automated welcome emails when users sign up, with follow-ups based on inactivity or activity dates.  

👉 **Borrow Book Reminder**: Customized email notifications sent before, on, and after the due date, reminding users to return books or avoid charges. 

👉 **Borrow Book Receipt**: Automatically generates a customized PDF receipt when a book is successfully borrowed.  

👉 **Analytics Dashboard**: Statistics, new users, books, borrow requests, and more.  

👉 **All Users Page**: View and manage users, including approving or revoking access.  

👉 **Account Requests Page**: Admin approval for account requests, with email notifications for user verification.  

👉 **All Books Page**: List and manage all library books with advanced search, pagination, and filters. 

👉 **Book Management Forms**: Add new books and edit existing entries.  

👉 **Book Details Page**: Detailed book information for administrators.  

👉 **Borrow Records Page**: Complete borrow history with pagination and search.  

👉 **Role Management**: Change user roles to invite more admins, with email notifications sent upon role updates. 

👉 **Advanced Functionalities**: Caching, rate-limiting, DDoS protection, and custom notifications.  

👉 **Database Management**: Postgres with Neon for scalable and collaborative database handling.  

👉 **Real-time Media Processing**: ImageKit for image and video optimization and transformations. 

👉 **Efficient Caching**: Upstash Redis for caching, workflows, and triggers.  

👉 **Database ORM**: Drizzle ORM for simplified and efficient database interactions.  

👉 **Modern UI/UX**: Built with TailwindCSS, ShadCN, and other cutting-edge tools.  

👉 **Technology Stack**: Next.js with TypeScript for scalable development, and NextAuth for robust authentication.  

👉 **Seamless Email Handling**: Resend for automated email communications, including notifications and updates.  

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Cloning the Repository**

```bash
git clone https://github.com/JavaScript-Mastery-Pro/university-library.git
cd university-library
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=

NEXT_PUBLIC_API_ENDPOINT=
NEXT_PUBLIC_PROD_API_ENDPOINT=

DATABASE_URL=

UPSTASH_REDIS_URL=
UPSTASH_REDIS_TOKEN=

AUTH_SECRET=

# Required for workflow
QSTASH_URL=
QSTASH_TOKEN=

# RESEND_TOKEN=
RESEND_TOKEN=
```

Replace the placeholder values with your actual ImageKit, NeonDB, Upstash, and Resend credentials. You can obtain these credentials by signing up on the [ImageKit](https://imagekit.io/), [NeonDB](https://fyi.neon.tech/1jsm), [Upstash](https://upstash.com/?utm_source=jsmastery1), and [Resend](https://resend.com/). 

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.