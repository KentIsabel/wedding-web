# Images Folder

This folder is for storing image resources for the wedding website.

## 📁 Folder Structure

```
images/
├── README.md           # Documentation
├── couple-photo.jpg    # Couple photo (will be divided into three parts)
├── isabel-photo.jpg    # Isabel individual photo
├── kent-photo.jpg      # Kent individual photo
└── wedding-bg.jpg      # Wedding background image
```

## 🖼️ Image Requirements

### Main Image (couple-photo.jpg)
- Recommended size: 900x400 pixels
- Format: JPG or PNG
- Content: Couple photo, suitable for dividing into three parts

### Individual Photos
- Isabel photo: Recommended size 300x400 pixels
- Kent photo: Recommended size 300x400 pixels
- Format: JPG or PNG

### Background Image
- Recommended size: 1920x1080 pixels
- Format: JPG
- Content: Elegant wedding background

## 🎨 Image Optimization Tips

1. **Compress Images**: Use online tools to compress images to reduce file size
2. **WebP Format**: Consider using WebP format for better compression
3. **Responsive Images**: Prepare different sized images for different screen sizes

## 📱 Mobile Optimization

- Ensure images display clearly on mobile devices
- Consider using `srcset` attribute to provide multiple sizes
- Test image loading speed on different devices

## 🔧 Usage Instructions

1. Place image files in this folder
2. Reference images in HTML:
   ```html
   <img src="images/couple-photo.jpg" alt="Couple Photo">
   ```
3. Set background images in CSS:
   ```css
   background-image: url('images/isabel-photo.jpg');
   background-image: url('images/kent-photo.jpg');
   background-image: url('images/couple-photo.jpg');
   ```

## 📝 Important Notes

- Ensure you have permission to use the images
- Backup original image files
- Regularly check if image links are valid 