# Portfolio Frontend

Personal portfolio website with a built-in admin dashboard, built with **Angular 21** (standalone components). The public site displays profile, skills, services, projects, and contact info fetched from a REST API — and the dashboard manages all of that content with full CRUD (no Postman needed).

## Tech Stack

- Angular 21 — standalone components, `@if`/`@for` control flow, reactive forms
- TypeScript
- Bootstrap 5 + custom CSS (purple gradient design system)
- Vitest (via Angular test runner)
- Backend: separate Express + MongoDB API (expected at `http://localhost:3000/api`)

## Features

### Public Site (`/`)
- **Home** — profile hero section, featured skills/services/projects sections
- **About** — bio + experience timeline in one shared card
- **Services** — services list + technical skills
- **Projects** — project cards with images, tags, live/GitHub links
- **Contact** — contact info + form
- **Not Found** — styled 404 page matching the site design

### Admin Dashboard (`/dashboard`)
Full CRUD for every section — each resource is split into `list / form / add / update / delete` components:

| Page      | Route                | Operations                                    |
| --------- | -------------------- | --------------------------------------------- |
| Home      | `/dashboard/home`    | Update profile info                           |
| Services  | `/dashboard/service` | Add / Edit / Delete services (icon upload)    |
| Projects  | `/dashboard/project` | Add / Edit / Delete projects (image, tags)    |
| Skills    | `/dashboard/skill`   | Add / Edit / Delete skills (icon upload)      |
| About     | `/dashboard/about`   | Update about section                          |
| Contact   | `/dashboard/contact` | Update contact section                        |

Image uploads use `multipart/form-data` (field name: `image`), served back from `http://localhost:3000/api/imgs/`.

## Getting Started

### Prerequisites

- Node.js 18+
- The backend API running at `http://localhost:3000` (the site fetches all content from it — see the API endpoints below)

### Install & run

```bash
npm install
npm start          # dev server -> http://localhost:4200
```

### Build

```bash
npm run build      # output -> dist/
```

### Test

```bash
npm test
```

## API Endpoints Used

| Resource   | Endpoints                                                             |
| ---------- | --------------------------------------------------------------------- |
| Profile    | `GET /api/profile` · `POST /api/profile/admin` · `PUT /api/profile/admin/:id` |
| Experience | `GET /api/experience` · `POST /api/experience` · `PUT|DELETE /api/experience/:id` |
| Skills     | `GET /api/skill` · `POST|PUT|DELETE /api/skill/admin(/:id)`            |
| Services   | `GET /api/service` · `POST|PUT|DELETE /api/service/admin(/:id)`        |
| Projects   | `GET /api/project` · `POST|PUT|DELETE /api/project/admin(/:id)`        |
| Images     | `GET /api/imgs/:filename` (static uploads)                            |

## Project Structure

```
src/app/
├── core/
│   ├── models/          # ISkill, IProject, IServices, IProfile, ...
│   └── services/        # API services (project.service, services, skill.service, ...)
├── layout/              # Public site
│   ├── home/            # section-profile, section-skills, section-services, section-projects
│   ├── about/           # about-api + exprience-api
│   ├── services/        # service list + skills
│   ├── project/         # project-api + details card
│   ├── contact/         # contact form
│   └── shared/header/
├── dashboard/           # Admin panel
│   ├── project/         # parent + list/form/add/update/delete
│   ├── service/         # parent + list/form/add/update/delete
│   ├── skill/           # parent + list/form/add/update/delete
│   ├── home/  about/  contact/
│   └── shared/side-bar/
├── shared/
│   ├── footer/
│   └── notfound/
└── app.routes.ts        # Public + dashboard routes
```
