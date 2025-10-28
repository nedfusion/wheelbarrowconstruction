# cPanel Deployment Guide - Wheelbarrow Construction Limited

## Overview
This guide will help you deploy your React website to a cPanel hosting environment.

## Prerequisites
- Access to your cPanel account
- FTP/File Manager access
- Domain name configured in cPanel

## Files to Deploy
All files needed for deployment are in the **`dist`** folder. This contains:
- `index.html` - Main HTML file
- `assets/` - CSS and JavaScript files
- `.htaccess` - Server configuration
- All images and video files from the public folder

## Deployment Steps

### Option 1: Using File Manager (Recommended for Beginners)

1. **Login to cPanel**
   - Go to your hosting provider's cPanel URL
   - Enter your username and password

2. **Access File Manager**
   - In cPanel, find and click "File Manager"
   - Navigate to `public_html` (or your domain's root directory)

3. **Clear Existing Files (if updating)**
   - Select all files in `public_html`
   - Delete them (backup first if needed)

4. **Upload Files**
   - Click "Upload" button
   - Select all files from the `dist` folder
   - Upload them to `public_html`
   - Make sure to maintain the folder structure (assets folder should be inside public_html)

5. **Extract if Zipped**
   - If you uploaded as a ZIP file, right-click and select "Extract"

### Option 2: Using FTP Client (FileZilla, Cyberduck, etc.)

1. **Get FTP Credentials**
   - In cPanel, go to "FTP Accounts"
   - Note your FTP server, username, and password

2. **Connect via FTP**
   - Open your FTP client
   - Enter your FTP server, username, and password
   - Connect to the server

3. **Navigate to Root Directory**
   - Go to `public_html` or your domain's document root

4. **Upload Files**
   - Select all files from the `dist` folder
   - Drag and drop them to `public_html`
   - Ensure the `.htaccess` file is uploaded

### Option 3: Using cPanel Terminal (if available)

```bash
# Navigate to public_html
cd public_html

# If you uploaded a zip file
unzip dist.zip

# Or if you're using Git
git clone your-repository-url .
npm install
npm run build
mv dist/* .
```

## Important Configuration

### 1. Verify .htaccess File
The `.htaccess` file is crucial for:
- React Router to work properly
- GZIP compression
- Cache control
- Security headers

Make sure it's in the root of `public_html` alongside `index.html`.

### 2. File Permissions
Set correct permissions:
- Folders: 755
- Files: 644
- `.htaccess`: 644

### 3. Check Video File Upload
The video file "Wheelbarrow 50 storey .mp4" is large. Ensure:
- Your hosting plan supports large file uploads
- The file uploaded completely (check file size)

## Post-Deployment Checklist

✅ Visit your website URL
✅ Check that the homepage loads with video background
✅ Test navigation between pages (About, Projects, Services, etc.)
✅ Verify all images load correctly
✅ Test the contact form
✅ Check mobile responsiveness
✅ Test the admin login functionality

## Troubleshooting

### Issue: 404 Errors on Page Refresh
**Solution**: Ensure `.htaccess` file is uploaded and mod_rewrite is enabled in your hosting.

### Issue: Video Not Playing
**Solutions**:
- Check video file size - it may be too large for some hosting plans
- Verify the video file uploaded completely
- Check browser console for errors
- Consider compressing the video if it's very large

### Issue: Images Not Loading
**Solutions**:
- Verify all files from `dist` folder are uploaded
- Check file paths are correct (case-sensitive on Linux servers)
- Ensure proper file permissions (644 for files)

### Issue: White Screen / Blank Page
**Solutions**:
- Check browser console for JavaScript errors
- Verify all files in `assets` folder uploaded correctly
- Clear browser cache and try again

### Issue: Styles Not Applied
**Solutions**:
- Check that CSS file in `assets` folder uploaded
- Clear browser cache
- Verify file paths in `index.html`

## Environment Variables

If your site uses environment variables (Supabase, etc.):
1. They are already compiled into the JavaScript during build
2. No additional configuration needed on the server
3. For security, never commit `.env` file to version control

## SSL Certificate (HTTPS)

For secure connections:
1. In cPanel, go to "SSL/TLS Status"
2. Install a free Let's Encrypt certificate
3. Uncomment the HTTPS redirect lines in `.htaccess`:
   ```apache
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

## Performance Optimization

Your site includes:
- ✅ GZIP compression enabled
- ✅ Browser caching configured
- ✅ Optimized asset loading
- ✅ Responsive images

## Support

If you encounter issues:
1. Check your hosting provider's documentation
2. Contact their support team for server-specific issues
3. Verify all files uploaded correctly from the `dist` folder

## Quick Deployment Checklist

- [ ] Build project (`npm run build`)
- [ ] Backup existing site (if updating)
- [ ] Upload all files from `dist` folder to `public_html`
- [ ] Verify `.htaccess` file is present
- [ ] Set correct file permissions
- [ ] Test website functionality
- [ ] Enable SSL certificate
- [ ] Update DNS if needed

---

**Note**: The `dist` folder contains your entire production-ready website. You only need to upload the contents of this folder to your web hosting.
