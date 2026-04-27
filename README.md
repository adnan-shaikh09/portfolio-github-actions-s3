# 🚀 Portfolio Website Deployment using AWS S3 & GitHub Actions

<p align="center">
  <img src="https://img.shields.io/badge/AWS-S3-orange?logo=amazon-aws" />
  <img src="https://img.shields.io/badge/CI/CD-GitHub_Actions-blue?logo=githubactions" />
  <img src="https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-yellow" />
  <img src="https://img.shields.io/badge/Status-Live-success" />
</p>

---

## 🏗️ Architecture & Workflow

<p align="center">
<img width="1536" height="1024" alt="Portfolio website deploy" src="https://github.com/user-attachments/assets/489968e8-ca59-4f31-b114-571930f778ba" />

</p>

<p align="center">
  <i>Automated CI/CD pipeline deploying portfolio website to AWS S3</i>
</p>

---

## 📌 Project Overview

This project demonstrates a fully automated CI/CD pipeline that deploys a static portfolio website to AWS.

- Code is stored in GitHub  
- GitHub Actions automates deployment  
- AWS S3 hosts the website  
- Updates are reflected instantly on every push  

---

## 🔄 Workflow

Developer → GitHub → GitHub Actions → AWS S3 → Website Live

- Push code to GitHub  
- Workflow is triggered  
- Authenticate with AWS (IAM)  
- Sync files to S3  
- Website updated automatically  

---

## ⚙️ Tech Stack

| Category | Tools |
|--------|------|
| Cloud | AWS S3, IAM |
| CI/CD | GitHub Actions |
| Frontend | HTML, CSS, JavaScript |
| Version Control | Git, GitHub |

---

## 🔄 CI/CD Pipeline

### Trigger
- Push to main branch  

### Steps
- Checkout code  
- Configure AWS credentials  
- Sync files to S3  
- Deploy website automatically  

---

## 🔐 Security

- Credentials stored securely using GitHub Secrets  
- No hardcoding of sensitive data  

| Secret | Purpose |
|------|--------|
| AWS_ACCESS_KEY_ID | Access Key |
| AWS_SECRET_ACCESS_KEY | Secret Key |

---

## ☁️ AWS Configuration

- Created IAM user with S3 access  
- Generated access keys  
- Created S3 bucket  
- Enabled static hosting  
- Configured public access  

---

## 📂 Deployment Steps

### 1️⃣ Clone Repository
```bash
git clone <your-repo-url>
cd <repo-folder>
```

### 2️⃣ Setup S3
- Create bucket  
- Enable static hosting  
- Set index.html  

### 3️⃣ Configure IAM
- Create user  
- Attach S3 permissions  
- Generate keys  

### 4️⃣ Add GitHub Secrets
Settings → Secrets → Actions

Add:
AWS_ACCESS_KEY_ID  
AWS_SECRET_ACCESS_KEY  

---

## ⚙️ GitHub Actions Workflow

```yaml
name: Deploy to S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ap-south-1

      - name: Deploy to S3
        run: aws s3 sync . s3://<your-bucket-name> --delete
```

---

## 🌐 Live Website

http://<your-bucket-name>.s3-website-<region>.amazonaws.com

---

## 📸 Output

✔ Website hosted on AWS  
✔ Fully automated deployment  
✔ Real-time updates  

---

## 💡 Key Learnings

- CI/CD with GitHub Actions  
- AWS S3 static hosting  
- Secure credential handling  
- Deployment automation  

---

## 🚀 Future Enhancements

- Add CloudFront CDN  
- Enable HTTPS (ACM)  
- Custom domain (Route 53)  
- Monitoring & logging  

---

## 👨‍💻 Author

Adnan Shaikh  
DevOps & Cloud Enthusiast  

---

## ⭐ Support

If you found this useful, give it a star on GitHub!
