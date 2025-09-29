# Newspaper Delivery App (MVP)

A simple backend + (later) frontend to help newspaper deliverers in Germany plan and complete their daily routes.  
**First version:** only newspapers (Tue–Sat).

## ✨ Features
- Create a daily **job** (Tue–Sat, no Sun/Mon).
- Add **stops** (street + house) quickly in bulk.
- Auto-generate an **efficient route** (streets in order, evens first, odds after).
- Delivery mode: mark stops as **delivered** or **skipped** (with reason).
- Get a **summary** at the end of the day.

## 🗂 Tech stack
- **Backend:** Node.js, Express, SQLite (easy to switch to Postgres/MySQL later).
- **Frontend:** (coming soon) React, Bootstrap.
- **Language:** JavaScript / TypeScript.

## 🚀 Getting started

### 1. Clone & install
```bash
git clone https://github.com/YOUR-USERNAME/newspaper-delivery-app.git
cd newspaper-delivery-app
npm install
