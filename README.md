🚀 Portfolio Website Deployment using AWS S3 & GitHub Actions

This project demonstrates how to deploy a static portfolio website using AWS S3 and automate the deployment process using GitHub Actions (CI/CD pipeline).

The portfolio website code is stored in a GitHub repository. Whenever changes are pushed to the repository, the GitHub Actions workflow automatically syncs the updated files to an AWS S3 bucket. The website is then served using the S3 static website hosting feature.

🏗️ Architecture / Workflow
    Code is stored in GitHub repository
    GitHub Actions workflow is triggered on push
    Workflow authenticates with AWS using IAM credentials
    Files are synced to S3 bucket
    S3 static hosting serves the website
    Website is accessible via S3 endpoint

⚙️ Technologies Used
    AWS S3 (Static Website Hosting)
    AWS IAM (Access Management)
    GitHub Actions (CI/CD)
    HTML, CSS, JavaScript

🔄 CI/CD Workflow
    Trigger: push to main branch
    Actions Performed:
    Checkout code
    Authenticate with AWS
    Sync files to S3 bucket
    Deploy updated website
    🔐 Secure Configuration
    ✅ GitHub Secrets Used
    Secret Name	Description
    AWS_ACCESS_KEY_ID	IAM Access Key
    AWS_SECRET_ACCESS_KEY	IAM Secret Key

Stored securely in:
Repo → Settings → Secrets → Actions

✅ AWS Setup

✔️ Created IAM user with S3 permissions
✔️ Generated Access Key & Secret Key
✔️ Created S3 bucket manually
✔️ Enabled static website hosting
✔️ Configured public access via bucket policy

📂 Deployment Steps:
    1️⃣ Clone Repository
    git clone <your-repo-url>
    cd <repo-folder>
    2️⃣ Create S3 Bucket
    Use a unique name (e.g., adnan-portfolio-cicd)
    Enable static hosting
    Set:
    index.html as entry point
    3️⃣ Configure IAM
    Create IAM user
    Assign S3 permissions
    Generate access keys
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
    
          - name: Deploy to S3
            run: |
              aws s3 sync . s3://<your-bucket-name> --delete
          
🌐 Live Website
  http://<your-bucket-name>.s3-website-<region>.amazonaws.com

📸 Output
  ✔️ Portfolio hosted on AWS
  ✔️ Automatic deployment enabled
  ✔️ Real-time updates on code push

💡 Key Learnings
  ✅ Built CI/CD pipeline using GitHub Actions
  ✅ Automated AWS S3 deployment
  ✅ Managed credentials securely using secrets
  ✅ Learned static website hosting in AWS
  🚀 Future Enhancements
  🌍 Add CloudFront (CDN)
  🔒 Enable HTTPS using ACM
  🌐 Attach custom domain (Route 53)
  📊 Add monitoring & logging
  👨‍💻 Author

Adnan Shaikh
  🚀 DevOps & Cloud Enthusiast

⭐ Support
  If you like this project, consider giving it a ⭐ on GitHub!
