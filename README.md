# WageChaser - Chrome Extension for Job Applications

## 📌 Overview
WageChaser is a **local-first Chrome extension** designed to store, manage, and autofill job application details seamlessly. No more repetitive form-filling—your data is just a click away!

## 🚀 Features
- **Local Storage**: Securely store job application data within your browser.
- **Form Autofill**: Automatically populate job application fields on LinkedIn, Greenhouse, Lever, and Workday.
- **Quick Copy & Keyboard Shortcuts**: Access saved information instantly.
- **Tagging System**: Organize applications with tags like “FAANG,” “Startup,” or “Internship.”
- **Drag & Drop Uploads**: Easily attach resumes and cover letters.
- **Auto-Submit Option**: Apply faster by enabling one-click submission.

## ✅ What’s Done So Far
- **Manifest File (`manifest.json`)**: Configured permissions, background scripts, and content scripts.
- **Popup UI (`popup.html` & `popup.js`)**: Created a basic interface to add, view, and manage job data.
- **Local Storage (`storage.js`)**: Implemented functions to save, retrieve, and delete job applications.

##  Next Steps
- **Form Autofill Logic (`content.js`)**: Detect and autofill job applications dynamically.
- **Keyboard Shortcuts (`background.js`)**: Implement `Ctrl+Shift+F` for quick autofill.
- **UI Styling (`popup.css`)**: Improve interface aesthetics and responsiveness.
- **Field Mapping**: Allow users to map stored data to different job portal fields.

## 🛠 Installation & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/WageChaser.git
   ```
2. Load as an unpacked extension in Chrome:
   - Go to `chrome://extensions/`
   - Enable Developer Mode
   - Click “Load unpacked” and select the project folder
3. Click the extension icon and start managing job applications!

## Contributing
Feel free to submit issues or PRs to improve WageChaser.

