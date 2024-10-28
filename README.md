# IIIT Kottayam Placement Cell Website

This repository hosts the website for the Training and Placement Cell of IIIT Kottayam.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Building and Running](#building-and-running)
- [Hosting with PM2 and Auto-Deployment](#hosting-with-pm2-and-auto-deployment)


## Requirements
To host this website, you’ll need:
- **Node.js** (version 18 or above)
- **NPM**
- **Git**
- **PM2** (for process management)
- **GitHub Webhook** (for automated deployment on code changes)

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Aroson1/IIITK-Placement-Website.git
cd IIITK-Placement-Website
```

### 2. Install Dependencies
```bash
npm install
```

## Building and Running

### 1. Build the Project
To build the project for production, run:
```bash
npm run build
```

## Hosting with PM2 and Auto-Deployment

To host the application using **PM2** and enable auto-deployment on changes to the `main` branch:

### Step 1: Install PM2 Globally
```bash
sudo npm install -g pm2
```

### Step 2: Start the Application with PM2
```bash
pm2 start npm --name "placement-site" -- start
```

### Step 3: Set Up GitHub Webhook for Auto-Deployment
1. Go to your GitHub repository’s **Settings > Webhooks**.
2. Click **Add webhook**.
3. Set **Payload URL** to `http://<server-ip>:9000/webhook` (replace `<server-ip>` with your server’s IP).
4. Set **Content type** to `application/json`.
5. Select **Just the push event**.
6. Click **Add webhook**.

### Step 4: Start Webhook Listener with PM2
Run the webhook listener using PM2 to keep it running in the background:
```bash
pm2 start webhook.js --name "webhook-listener"
```
