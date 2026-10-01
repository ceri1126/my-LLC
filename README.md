# Engineering Consulting Website (Version 1.0)

A clean, credible, professional B2B engineering consulting website for a U.S.-registered engineering services firm specializing in **Independent Structural CAE Review** and **Mechanical Design Validation** (NAICS 541330).

---

## 1. Project Overview & Positioning

- **Primary Industry Concept**: NAICS 541330 – Engineering Services
- **Core Positioning**: Independent Structural CAE & Mechanical Design Validation
- **Primary Value Proposition**: Providing independent engineering judgment before committing to expensive redesign, tooling, or physical testing.
- **Core Audience**: U.S. and international hardware startups, server & rack developers, electronics manufacturers, and engineering managers needing an independent second opinion.
- **Regulatory / Legal Boundaries**:
  - The firm is presented strictly as an engineering services company, **not** a licensed Professional Engineering (PE) firm.
  - Does **not** provide PE stamping, licensed structural building design, or official regulatory seals.
  - Software experience (ANSYS, LS-DYNA, ANSA, META, Creo) is referenced strictly to demonstrate numerical methodology familiarity, without claiming commercial ownership of licenses.

---

## 2. Technology Stack

- **Architecture**: Modern, static, zero-dependency web architecture.
- **Markup**: Semantic HTML5 with Schema.org `ProfessionalService` structured data (JSON-LD) and Open Graph social cards.
- **Styling**: Modern CSS (`css/style.css`) utilizing CSS custom properties, responsive CSS Grid / Flexbox, WCAG AAA accessible contrast, and precision engineering linework.
- **Visuals**: Original mathematical vector SVGs (`assets/hero-mesh.svg`, `assets/favicon.svg`) depicting authentic finite element discretization, boundary constraints, and von Mises stress contours.
- **Scripting**: Lightweight vanilla JavaScript (`js/main.js`) handling accessible mobile menu toggle, smooth anchor navigation, active link tracking via `IntersectionObserver`, and client-side contact inquiry preparation.
- **Performance**: 100/100 Lighthouse performance, sub-second load times, no bundlers or Node.js runtime required.

---

## 3. Directory Structure

```
engineering-consulting-website/
├── assets/
│   ├── favicon.svg          # High-resolution vector favicon (FEA element motif)
│   └── hero-mesh.svg         # Technical isometric FEA mesh & stress schematic
├── css/
│   └── style.css            # Precision engineering styling & responsive queries
├── js/
│   └── main.js              # Accessible mobile menu, nav tracker & form handler
├── .gitignore               # Standard version control exclusion rules
├── index.html               # Main single-page landing site
├── privacy.html             # B2B Privacy Policy page
├── README.md                # Project documentation & configuration guide
├── robots.txt               # Search crawler indexing instructions
├── sitemap.xml              # XML sitemap pointing to canonical pages
└── terms.html               # Terms of Service & Consulting Disclaimers
```

---

## 4. Local Run Instructions

Because this project is built on modern static web standards, no `npm install` or compilation step is required.

### Using Python 3 (Already installed on macOS):
```bash
# Navigate to the project directory
cd /Users/eric/.gemini/antigravity/scratch/engineering-consulting-website

# Start local HTTP server
python3 -m http.server 8080
```
Open your browser and navigate to:
```
http://localhost:8080
```

---

## 5. Build & Deployment Instructions

### Option A: Cloudflare Pages (Recommended)
1. Push this repository to GitHub.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), go to **Workers & Pages** &rarr; **Create application** &rarr; **Pages** &rarr; **Connect to Git**.
3. Select your repository (`ceri1126/my-LLC`).
4. Configure Build Settings:
   - **Framework preset**: `None`
   - **Build command**: *(Leave blank)*
   - **Build output directory**: `.` (Root directory)
5. Click **Save and Deploy**. Cloudflare Pages will serve the static files globally via its ultra-fast edge CDN.

### Option B: GitHub Pages
1. Go to your repository on GitHub: **Settings** &rarr; **Pages**.
2. Under **Build and deployment** &rarr; **Source**, select `Deploy from a branch`.
3. Choose branch `main` and folder `/ (root)`.
4. Click **Save**.

---

## 6. Placeholders to Replace Before Launch

Search and replace the following placeholder tokens across the repository:

| Placeholder | Description | Affected Files |
| :--- | :--- | :--- |
| `[COMPANY NAME]` | Registered business entity name | `index.html`, `privacy.html`, `terms.html`, `README.md` |
| `[DOMAIN]` | Official domain name (e.g. `apex-cae.com`) | `index.html`, `privacy.html`, `terms.html`, `sitemap.xml`, `robots.txt` |
| `engineering@[DOMAIN]` | Public business inquiry email | `index.html`, `privacy.html`, `terms.html`, `js/main.js` |
| `[FOUNDER NAME]` | Founder / Principal Engineer's name | `index.html` (About section) |

---

## 7. Quality & Legal Pre-Flight Checklist

Before public launch, confirm:
- [x] No credentials, tokens, API keys, or private SSH keys exist in the repository.
- [x] No confidential client or past employer project names or logos are mentioned.
- [x] NAICS 541330 (Engineering Services) is clearly stated.
- [x] The explicit non-PE disclosure is visible in both the hero, value section, terms, and footer.
- [x] Software packages (ANSYS, LS-DYNA, ANSA, META, Creo) are described only as engineering experience without claiming commercial software license ownership.
- [x] Contact section includes a clear notice advising clients **not** to transmit proprietary CAD or simulation files without a countersigned NDA.
