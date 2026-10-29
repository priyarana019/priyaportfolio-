# Priya's Personal Portfolio Website
> **First-Year B.Tech Computer Science & Engineering Undergraduate**  
> *Rishikesh, Uttarakhand, India 🏔️*

A modern, responsive, and aesthetic developer portfolio crafted with a **dark navy and purple Nocturne Lumina theme**, subtle cyber-glassmorphism, interactive components, and authentic first-year academic milestones.

---

## 🌟 Key Features

1. **Hero / Home Page**:
   - Welcome message and dynamic typewriter role switcher.
   - Interactive C program simulator (`priya_bio.c`) with compile-and-run terminal output.
   - Quick statistics and immediate calls to action (Explore Projects, Download Resume, Contact).
2. **About Me**:
   - Background narrative blending roots in Rishikesh (discipline, quiet focus, patience) with computer science exploration.
   - 4 Pillars of curiosity: Technology & Systems, Coding & Problem Solving, Photography & Aesthetics, and Continuous Learning.
   - Academic profile snapshot.
3. **Skills Section**:
   - Focused specifically on **C Programming, Python, HTML5, and CSS3**.
   - Transparent, authentic student competency with detailed lists of mastered concepts (Pointers, Structs, File Streams, Flexbox/Grid, etc.).
   - First-Year Developer Toolkit (Git, GitHub, VS Code, Linux/Bash, GCC).
4. **Projects Section**:
   - Filterable project grid (`All`, `C Coursework`, `Hackathon`, `Web Design`, `Python`).
   - Detailed project cards with metrics, tags, and GitHub buttons.
   - Interactive **Project Deep-Dive Modal** detailing problem statements, architecture, and learnings.
5. **Achievements Section**:
   - **IEEE Student Branch Activities**: Active member, IEEE Tech Week, mentorship.
   - **Workshops Attended**: Hands-on Git & GitHub Workshop, C Programming & Memory Architecture, Web Dev Bootcamp.
   - **Certificates**: Programming Essentials in C, Python for Beginners, Freshman Hackathon Finalist Certificate.
6. **Photography & Creative Gallery**:
   - Captures of Rishikesh, the Ganges, and Himalayan foothills showing how visual observation informs UI attention to detail.
   - Interactive modal lightbox with captions and stories.
7. **Contact Section**:
   - One-click "Copy Email" button (`priya.cse.rishikesh@example.com`).
   - LinkedIn and GitHub profile links.
   - Interactive working contact form with client-side validation and feedback.
8. **Downloadable Resume**:
   - Included PDF resume (`assets/Priya_Resume.pdf`).
   - Interactive in-browser resume preview modal.
   - Dedicated printable resume web page (`resume.html`).

---

## 📂 File Architecture

```text
priya portfolio/
├── index.html                 # Main portfolio single-page application
├── styles.css                 # Custom Nocturne Lumina design system & animations
├── script.js                  # Dynamic interactions, terminal, modals & filters
├── resume.html                # Standalone print-friendly resume sheet
├── generate_resume.py         # Python ReportLab script that creates Priya_Resume.pdf
├── assets/
│   └── Priya_Resume.pdf       # Compiled 1-page PDF student resume
└── README.md                  # Documentation and publishing guide
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Launch
Simply double-click `index.html` in your file explorer. It will open directly in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Option 2: Using Python HTTP Server (Recommended)
1. Open PowerShell or Terminal in this folder (`c:\Users\animation_lab\Desktop\priya portfolio`).
2. Run:
   ```bash
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your web browser.

---

## 🌐 How to Publish Online for Free

### Method 1: GitHub Pages (Best for Computer Science Students)
1. Create a free account at [github.com](https://github.com) if you haven't already.
2. Create a new repository named `priya-portfolio` (or `<your-username>.github.io`).
3. In your local project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/priya-portfolio.git
   git push -u origin main
   ```
4. On GitHub, navigate to **Settings** > **Pages**.
5. Under **Branch**, select `main` and root `/`, then click **Save**.
6. Your portfolio will be live at: `https://<your-username>.github.io/priya-portfolio/`!

### Method 2: Netlify (Fastest Drag-and-Drop)
1. Visit [netlify.com](https://www.netlify.com/) and sign up for a free account.
2. Go to the **Sites** tab.
3. Drag and drop the `priya portfolio` folder directly onto the Netlify deploy dropzone.
4. Within 10 seconds, Netlify generates a live, secure HTTPS URL (e.g. `https://priya-portfolio.netlify.app`).

### Method 3: Vercel
1. Visit [vercel.com](https://vercel.com/) and log in with GitHub.
2. Click **Add New Project** and select your GitHub repository.
3. Keep default settings and click **Deploy**.
4. Vercel will deploy your website with automatic continuous deployment on every git push.

---

## ✏️ Customization & Updating

- **Contact Details**: Open `index.html` and search for `priya.cse.rishikesh@example.com` and `linkedin.com/in/priya-cse` to replace them with your real email and LinkedIn link.
- **Update Resume**: Modify `generate_resume.py` and run `python generate_resume.py` to re-generate `assets/Priya_Resume.pdf`, or edit `resume.html`.
- **Add Future Projects**: Duplicate any `<article class="project-card-item">` block in `index.html` and add corresponding entry in `script.js`'s `projectDataStore`.

