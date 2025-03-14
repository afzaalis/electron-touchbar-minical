# Touch Bar App (Electron)
AVAILABLE ONLY FOR MACOS WITH TOUCHBAR

## 📌 Deskripsi
Touch Bar App adalah aplikasi sederhana berbasis **Electron** yang menampilkan tombol interaktif di Touch Bar MacBook. Aplikasi ini memungkinkan pengguna untuk berinteraksi dengan tombol untuk menggunakan calculator.
<img src="touchbar-preview.jpg" alt="Tampilan Touch Bar" width="500">


## 🛠️ Fitur
- **Tombol Interaktif** di Touch Bar.
- **Emoji Pet** yang berubah saat ditekan.
- **Mini Game: Tap Counter** untuk menghitung jumlah klik.
- **Desain Simpel & Mudah Dikembangkan** dengan JavaScript, HTML, dan CSS.

## 🚀 Instalasi
### 1. Pastikan **Node.js** dan **npm** sudah terinstal
Cek versi Node.js dan npm dengan perintah berikut di terminal:
```sh
node -v
npm -v
```
Jika belum terinstal, unduh dari [Node.js](https://nodejs.org/).

### 2. Clone repositori ini dan masuk ke folder proyek
```sh
git clone https://github.com/username/touchbar-app.git
cd touchbar-app
```

### 3. Install dependency Electron
```sh
npm install
```

### 4. Jalankan aplikasi
```sh
npm start
```
Aplikasi akan terbuka, dan Touch Bar akan menampilkan tombol interaktif.

## 🎥 Demo
[![Demo Touch Bar App](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)



## 🖥️ Struktur Proyek
```
/src
│── package.json    # Konfigurasi proyek dan dependensi
│── main.js         # File utama untuk menjalankan Electron
│── README.md       # Dokumentasi proyek
```

## 📜 Contoh Kode
Berikut adalah contoh kode untuk menampilkan tombol di Touch Bar:
```javascript
const { app, BrowserWindow, TouchBar } = require('electron');
const { TouchBarButton } = TouchBar;

let mainWindow;
app.whenReady().then(() => {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    
    const button = new TouchBarButton({
        label: 'Click Me!',
        backgroundColor: '#ff5a5f',
        click: () => console.log('Button clicked!')
    });
    
    const touchBar = new TouchBar({ items: [button] });
    mainWindow.setTouchBar(touchBar);
});
```


---
Made with ❤️ using Electron 🚀

