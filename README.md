# Grant Dashboard App

Welcome to the **Grant Dashboard App** — a modern web application for tracking, updating, and managing grant records, designed and maintained by Daniel Saenz.

---

## 🚀 Project Overview

This repository powers the **grantmaking dashboard**, allowing users to:

* **View**: List existing grants
* **Create & edit**: Add new grant records or update existing ones
* **API integration**: Seamlessly interacts with a FastAPI backend (`api.daniel-saenz.com`)
* **Responsive UI**: Built for desktop and mobile users

The app is built with React and Bootstrap, continuously deployed to AWS S3 + CloudFront using GitHub Actions.

---

## 🛠 Technologies

* **Frontend**: React, Bootstrap, Date-fns
* **CI/CD**: GitHub Actions
* **Hosting**: AWS S3 (static site), CloudFront (CDN)
* **Quality**: ESLint, automated CloudFront invalidations
* **Infrastructure as Code**: Terraform (for S3, Cloudfront)

---

## 💻 Local Development

1. **Clone the repository**

    ```bash
    git clone https://github.com/disaenz/grant-app.git
    cd grant-app
    ```

2. **Install dependencies**

    ```bash
    npm ci
    ```

3. **Set environment variables**

    Create a .env file at the project root:
    ```bash
    REACT_APP_GRANT_API_URL=[API_DOMAIN]
    ```

4. **Run in development mode**

    ```bash
    npm start
    ```

5. **Open in browser**

    Visit http://localhost:3000 to view and test the app.

---

## 🔧 Build & Test

* Run ESLint

    ```bash
    npm run lint
    ```

* Build for production
    
    ```bash
    npm run build
    ```

_After build, static assets are generated in the build/ directory._

---

## 🚀 Deployment

Deployment is fully automated via CI/CD:

1. **Build & Lint**: Runs on GitHub Actions for every commit to main and on pull request
2. **Deploy to S3**: Syncs build/ to the S3 bucket
3. **Invalidate CloudFront**: Refreshes the CDN to serve the latest

---

## 📜 Fork & Attribution

This repository is a personal portfolio maintained by Daniel Saenz. Feel free to fork and adapt it for your own use. If you do, please credit the original author in your project documentation or README.
This project is open source under the [MIT License](./license.md). 

---

© 2025 Daniel Saenz