# Profile Picture Placement Guide

## 📍 Where to Place Your Profile Picture

### 1. Main Contact Profile Picture
**File:** `/public/images/profile.jpg`
- Used in: Contact section (circular profile)
- Component: `app/_layout/contact/components/user-details/index.jsx`
- Size: Should be square/circular-friendly
- Current: 12-byte placeholder

### 2. Hero Background Image  
**File:** `/public/images/hero.jpg`
- Used in: Header section (full-screen background)
- Component: `app/_layout/header/index.jsx`
- Size: Should be high-resolution for full screen
- Current: 12-byte placeholder

## 🔄 To Update:
1. Copy your profile picture to: `/public/images/profile.jpg`
2. Copy a wider version to: `/public/images/hero.jpg`
3. Run: `npm run build`
4. Restart server: `cd out && python3 -m http.server 8080`

## 📐 Current Image References:
- Contact: `src='/images/profile.jpg'` (line 23 in user-details/index.jsx)
- Hero: `src='/images/hero.jpg'` (line 20 in header/index.jsx)
