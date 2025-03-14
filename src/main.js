const { app, BrowserWindow, TouchBar, ipcMain } = require('electron');
const { TouchBarButton, TouchBarLabel, TouchBarSegmentedControl } = TouchBar;

let mainWindow;
let expression = ''; // Menyimpan input kalkulator
const resultLabel = new TouchBarLabel({ label: '0' });

// Fungsi untuk update hasil kalkulasi dan mengirim ke tampilan HTML
const updateExpression = (value) => {
    if (value === '=') {
        try {
            expression = eval(expression).toString();
        } catch (error) {
            expression = 'Error';
        }
    } else if (value === 'C') {
        expression = '';
    } else {
        expression += value;
    }

    resultLabel.label = expression || '0';

    // Kirim hasil ke renderer (HTML)
    if (mainWindow) {
        mainWindow.webContents.send('update-display', resultLabel.label);
    }
};

// Fungsi untuk membuat tombol angka dan operasi
const createButton = (label) => {
    return new TouchBarButton({
        label,
        backgroundColor: ['+', '-', '*', '/', '='].includes(label) ? '#ff9500' : '#505050',
        click: () => updateExpression(label),
    });
};

// Membagi tombol ke dalam grup untuk navigasi
const groups = [
    [createButton('1'), createButton('2'), createButton('3'), createButton('+')],
    [createButton('4'), createButton('5'), createButton('6'), createButton('-')],
    [createButton('7'), createButton('8'), createButton('9'), createButton('*')],
    [createButton('0'), createButton('C'), createButton('='), createButton('/')],
];

let activeGroupIndex = 0;

// Membuat segmented control untuk berpindah grup
const segmentedControl = new TouchBarSegmentedControl({
    segments: [
        { label: '1-3' },
        { label: '4-6' },
        { label: '7-9' },
        { label: '0, C, =' },
    ],
    selectedIndex: 0,
    change: (index) => {
        activeGroupIndex = index;
        updateTouchBar();
    },
});

// Fungsi untuk memperbarui Touch Bar
const updateTouchBar = () => {
    const touchBar = new TouchBar({
        items: [resultLabel, segmentedControl, ...groups[activeGroupIndex]],
    });
    mainWindow.setTouchBar(touchBar);
};

// Inisialisasi aplikasi Electron
app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 300,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    updateTouchBar();
    mainWindow.loadFile('index.html');
});