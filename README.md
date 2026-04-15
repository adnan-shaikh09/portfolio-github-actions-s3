🚀 Portfolio Website Deployment using AWS S3 & GitHub Actions
📌 Project Overview

The portfolio website code is stored in a GitHub repository. Whenever changes are pushed to the repository, a GitHub Actions CI/CD workflow is triggered automatically, which syncs the updated files to an AWS S3 bucket.

The website is then served using AWS S3 Static Website Hosting, making it publicly accessible via an S3 endpoint.

🏗️ Architecture / Workflow
🔄 Flow of the System
Code is stored in GitHub repository
GitHub Actions workflow is triggered on push (main branch)
Workflow authenticates with AWS using IAM credentials
Files are synced to AWS S3 bucket
S3 hosts the static website
Website is accessible via S3 endpoint
⚙️ Technologies Used
☁️ AWS S3 (Static Website Hosting)
🔐 AWS IAM (Access Management)
🔄 GitHub Actions (CI/CD Pipeline)
💻 HTML, CSS, JavaScript
🔄 CI/CD Workflow
Trigger
Push to main branch
Actions Performed
Checkout repository code
Authenticate with AWS using IAM credentials
Sync project files to S3 bucket
Deploy updated website automatically
🔐 Secure Configuration
✅ GitHub Secrets Used
Secret Name	Description
AWS_ACCESS_KEY_ID	IAM Access Key
AWS_SECRET_ACCESS_KEY	IAM Secret Key

📌 Stored securely in:
Repository → Settings → Secrets → Actions

☁️ AWS Setup

✔️ Created IAM user with S3 permissions
✔️ Generated Access Key & Secret Key
✔️ Created S3 bucket manually
✔️ Enabled static website hosting
✔️ Configured public access via bucket policy

📂 Deployment Steps
1️⃣ Clone Repository
git clone <your-repo-url>
cd <repo-folder>
2️⃣ Create S3 Bucket
Choose a unique bucket name (e.g., adnan-portfolio-cicd)
Enable Static Website Hosting

Set entry point:

index.html
3️⃣ Configure IAM
Create IAM user
Attach S3 permissions
Generate Access Key & Secret Key
4️⃣ Add GitHub Secrets

Go to:

Settings → Secrets → Actions

Add:

AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
5️⃣ GitHub Actions Workflow
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

      - name: Sync files to S3
        run: |
          aws s3 sync . s3://<your-bucket-name> --delete
🌐 Live Website
http://<your-bucket-name>.s3-website-<region>.amazonaws.com
📸 Output

✔ Portfolio hosted on AWS S3
✔ CI/CD pipeline fully automated
✔ Real-time updates on every push

💡 Key Learnings
CI/CD pipeline using GitHub Actions
AWS S3 static website hosting
Secure credential management using GitHub Secrets
Automation of deployment workflow
🚀 Future Enhancements
🌍 Add CloudFront CDN for performance
🔒 Enable HTTPS using AWS ACM
🌐 Attach custom domain using Route 53
📊 Add monitoring and logging
👨‍💻 Author

Adnan Shaikh
🚀 DevOps & Cloud Enthusiast

⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub!
