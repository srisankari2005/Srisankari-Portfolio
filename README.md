# Srisankari Portfolio

## Folder structure

```text
srisankari_portfolio/
├── index.html
├── about.html
├── skills.html
├── projects.html
├── contact.html
├── style.css
├── script.js
├── resume.pdf              <-- add your actual resume here
└── README.md
```

## How to run

1. Extract the ZIP.
2. Put your resume file inside the folder and rename it to `resume.pdf`.
3. Open `index.html` in Chrome/Edge.
4. For best development workflow, use VS Code + Live Server.

## Important customization

### Social links
Open `index.html` and replace:
- Instagram URL
- GitHub URL
- LinkedIn URL

### Resume
The Download My Resume button expects:

`resume.pdf`

inside the same portfolio folder. A browser cannot safely use an absolute Windows path such as `C:\Users\acer\Downloads\resume.pdf` when the portfolio is deployed online.

### Contact
The contact form opens the visitor's email application with:
`srisankari884@gmail.com`

For a true website-hosted form that sends without opening an email application, connect a form service or backend later.

## Design

Theme: yellow + white + black  
Fonts: Poppins + Inter  
Includes:
- Entry/loading screen
- Dark/light mode
- Responsive layout
- 5 HTML pages
- Typing animation
- Floating animations
- Hover effects
- Resume download
- Social links
- Contact mailto flow
- Mobile navigation


## v2 notes
- 5-second opening screen with running bird; dark mode is the default.
- Uploaded resume is included as `resume.pdf` and the download button points to it.
- GitHub and LinkedIn URLs are taken from the resume. Instagram is not listed in the resume, so its icon currently opens Instagram home; replace that URL with your profile.
- Achievements/contact details are based on the resume.
- Project 2 has Leadership, Problem Solving and Critical Thinking chips.
- Contact form shows “Message Sent ✓”, opens a prefilled mailto to srisankari884@gmail.com, then refreshes. Direct silent delivery requires a backend/form service.


## Latest cleanup
- Loader displays once per browser session; returning to Home does not replay it.
- Home logo is a clean circular mark inspired by the supplied social-icon reference.
- About stats: 5+ Core Areas, 2+ Projects, 2+ Internships.
- Duplicate achievements removed and achievement plus markers removed.
- Project technology black pills removed; Project 2 focus chips appear once.
- Duplicate contact details removed.

## v5 additions
- Added Education, Internships, and Services pages.
- Navigation updated across all pages.
- Education and internship content follows the attached resume.
- Services are presented as portfolio capabilities derived from resume-listed skills/projects, not as claims of existing commercial clients.
- Project 1 and Project 3 now have technology pills matching Project 2.
- Project 2 uses a consistent portfolio theme with a yellow-accent border rather than a separate dark card style.
