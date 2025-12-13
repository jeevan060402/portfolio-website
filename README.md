# Portfolio Website - Maddur Jeevan Kumar Reddy

A modern, responsive portfolio website showcasing professional experience, skills, and projects.

## 🌐 Live Demo

Visit the live website at: `https://jeevan060402.github.io/portfolio-website/`

## 📋 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes
- **Interactive Timeline**: Visual representation of professional experience
- **Skills Showcase**: Organized display of technical skills
- **Projects Gallery**: Featured projects with descriptions
- **Contact Section**: Easy ways to get in touch

## 🚀 How to Publish

This portfolio website is automatically published using **GitHub Pages**. Here are the steps:

### Option 1: Automatic Deployment (Recommended)

The website is automatically deployed whenever you push changes to the `main` branch.

1. Make your changes to the website files
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   ```
3. Push to GitHub:
   ```bash
   git push origin main
   ```
4. GitHub Pages will automatically deploy your changes within a few minutes
5. Visit your website at: `https://jeevan060402.github.io/portfolio-website/`

### Option 2: Manual GitHub Pages Setup

If GitHub Pages is not enabled yet, follow these steps:

1. Go to your repository on GitHub: `https://github.com/jeevan060402/portfolio-website`
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under "Source", select:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**
6. Wait a few minutes for the deployment to complete
7. Your website will be available at: `https://jeevan060402.github.io/portfolio-website/`

### Option 3: Using GitHub Actions (Included)

This repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages:

- The workflow is triggered on every push to `main` branch
- It builds and deploys the static site automatically
- Check deployment status in the **Actions** tab

## 🛠️ Local Development

To run the website locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/jeevan060402/portfolio-website.git
   cd portfolio-website
   ```

2. Open `index.html` in your browser, or use a local server:
   
   **Using Python:**
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```
   
   **Using Node.js (if you have npx):**
   ```bash
   npx serve
   # Then visit http://localhost:3000
   ```
   
   **Using VS Code:**
   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── timeline.css   # Styles
│   └── js/
│       ├── data.js        # Portfolio data
│       └── timeline.js    # Interactive functionality
├── Jeevan_Resume_2112025.pdf  # Resume file
└── README.md              # This file
```

## ✏️ Customization

To update your portfolio:

1. **Update Content**: Edit `assets/js/data.js` to modify:
   - Work experience
   - Skills
   - Projects
   - Other dynamic content

2. **Update Styles**: Edit `assets/css/timeline.css` to change:
   - Colors
   - Fonts
   - Layout
   - Animations

3. **Update Resume**: Replace `Jeevan_Resume_2112025.pdf` with your latest resume

4. **Update Contact Info**: Edit `index.html` to update contact information

## 🔧 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- GitHub Pages (Hosting)
- GitHub Actions (CI/CD)

## 📞 Contact

- **Email**: reddyjeevan936@gmail.com
- **Phone**: +91-9390643938
- **Location**: Hyderabad, India

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

---

**Note**: After making changes, remember to push to the `main` branch to see updates live on GitHub Pages.
