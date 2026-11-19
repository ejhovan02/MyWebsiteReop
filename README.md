# Eric Hovan — Developer Portfolio

A responsive personal portfolio website built with **HTML5**, **CSS3**, and **vanilla JavaScript**, featuring a maroon theme, hover/focus project cards, a skills showcase, certifications, and a client-side validated contact form.

## Features

- **Summary, Education & Certifications**: Highlights full-stack, art, and game development background, a B.S. in Game Development and Programming from Southern New Hampshire University (2022–2026), and linked Coursera full-stack/.NET certifications.
- **Skills Showcase**: Displays technical skills across C#, .NET / ASP.NET Core, Blazor, Entity Framework Core, SQL, authentication/RBAC, DevOps, and game/3D tooling (C++, Unreal Engine, 3D modeling).
- **Interactive Project Cards**: Six project cards (*Project One* through *Project Six*) with screenshots, GitHub links, CSS hover transitions that scale/fade the preview image and slide up project details, and keyboard `tabindex` + `aria-label` accessibility support.
- **Hobbies Section**: Lists personal interests including video games, game development, art and animation, manga/anime, Magic: The Gathering, and guitar.
- **Simulated Contact Form (`script.js`)**: Validates name length, email format, and message length on submit, displays inline error messages, simulates sending with a brief delay, shows a personalized confirmation state, and supports resetting the form.

## Project Structure

```text
portfolio/
├── index.html                   # Page layout, sections, project grid, and contact form markup
├── style.css                    # Maroon CSS variables, Flexbox/Grid layout, hover animations, and responsive rules
├── script.js                    # Keyboard focus setup on project cards and client-side contact form validation
└── Images/
    ├── PortfolioWebsite.png
    ├── EventApp.png
    ├── FirstAPI.png
    ├── FullStackApp.png
    ├── SafeVault.png
    └── LinuxBuilder.png
