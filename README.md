# Wheelbarrow Construction Limited

A modern, responsive website for Wheelbarrow Construction Limited - a Nigerian-based architectural engineering and construction company.

## Features

- Modern, responsive design with Tailwind CSS
- Interactive project portfolio
- Contact form with validation
- Smooth scrolling navigation
- Mobile-optimized interface
- Professional testimonials section

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: Netlify ready

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Admin Dashboard

The website includes a comprehensive admin dashboard for content management:

### Accessing the Admin Dashboard

1. Navigate to `/admin` in your browser
2. Use the demo credentials:
   - **Username**: `admin`
   - **Password**: `wheelbarrow2024`

### Admin Features

- **Gallery Management**: Upload, edit, and delete gallery images
- **Project Management**: Add, edit, and remove portfolio projects
- **Content Organization**: Categorize content by type (Residential, Commercial, Industrial, Educational)
- **Analytics Dashboard**: View website statistics and engagement metrics
- **User Management**: Control admin access and permissions

### Production Setup

For production deployment, you'll need to:

1. **Set up proper authentication**:
   - Replace the demo authentication with a secure backend API
   - Implement JWT tokens or session-based authentication
   - Add password hashing and secure storage

2. **Configure file upload**:
   - Set up cloud storage (AWS S3, Cloudinary, etc.)
   - Implement proper file validation and security
   - Add image optimization and resizing

3. **Database integration**:
   - Connect to a database (PostgreSQL, MongoDB, etc.)
   - Implement proper data persistence
   - Add backup and recovery procedures

4. **Security measures**:
   - Add CSRF protection
   - Implement rate limiting
   - Set up proper CORS policies
   - Add input validation and sanitization

## Deployment to Netlify

### Method 1: Drag & Drop (Quickest)
1. Run `npm run build` to create the `dist` folder
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Drag the `dist` folder to the Netlify deploy area

### Method 2: Git Integration (Recommended)
1. Push this code to a GitHub/GitLab repository
2. Connect your repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`

### Method 3: Netlify CLI
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Build the project: `npm run build`
3. Deploy: `netlify deploy --prod --dir=dist`

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Services.tsx    # Services section
│   ├── Projects.tsx    # Portfolio section
│   ├── Testimonials.tsx # Client testimonials
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles

public/                 # Static assets
├── *.jpg              # Project images
└── *.png              # Project images
```

## Contact

For questions about this website, contact Wheelbarrow Construction Limited:
- Email: info@wheelbarrowconstruction.com
- Phone: +234 (0) 1 234 5678
- Address: 289A Corporation Drive, Dolphin Estate, Ikoyi, Lagos, Nigeria
