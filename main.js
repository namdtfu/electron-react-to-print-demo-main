'use strict';

const { app, ipcMain, BrowserWindow, Menu, MenuItem } = require('electron');
const path = require('path');

let mainWindow;
let dev = false;
if (
  process.defaultApp ||
  /[\\/]electron-prebuilt[\\/]/.test(process.execPath) ||
  /[\\/]electron[\\/]/.test(process.execPath)
) {
  dev = true;
}

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });

  // load the index.html of the app
  let indexPath;
  if (dev && process.argv.indexOf('--noDevServer') === -1) {
    indexPath = new URL('http://localhost:4000/index.html');
  } else {
    indexPath = new URL(path.join(__dirname, 'dist', 'index.html'), 'file:');
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    if (dev) {
      mainWindow.webContents.openDevTools();
    }
  });

  mainWindow.on('closed', function () {
    mainWindow = null;

    // terminate the app when main window is closed
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  await mainWindow.loadURL(indexPath.toString());
}

const menu = new Menu();
menu.append(
  new MenuItem(
    {
      label: 'Hệ thống',
      submenu: [
        {
          label: 'Đăng nhập',
          accelerator:
            process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
          click: () => {
            console.log('Electron rocks!');
          },
        },
        {
          label: 'Đăng xuất',
          accelerator:
            process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
          click: () => {
            console.log('Electron rocks!');
          },
        },
        {
          label: 'Cấu hình CSDL',
          accelerator:
            process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
          click: () => {
            console.log('Electron rocks!');
          },
        },
        {
          label: 'Đổi mật khẩu',
          accelerator:
            process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
          click: () => {
            console.log('Electron rocks!');
          },
        },
        {
          label: 'Tỷ giá',
          accelerator:
            process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
          click: () => {
            console.log('Electron rocks!');
          },
        },
        {
          label: 'Thiết lập đường thư',
          accelerator:
            process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
          click: () => {
            console.log('Electron rocks!');
          },
        },
        {
          label: 'Định nghĩa nhóm đường thư',
          accelerator:
            process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
          click: () => {
            console.log('Electron rocks!');
          },
        },
        {
          label: 'Định nghĩa đường thư chuyển tiếp',
          accelerator:
            process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
          click: () => {
            console.log('Electron rocks!');
          },
        },
        {
          label: 'Cấu hình máy in',
          accelerator:
            process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
          click: () => {
            console.log('Electron rocks!');
          },
        },
        {
          label: 'Thoát',
          accelerator:
            process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
          click: () => {
            console.log('Electron rocks!');
          },
        },
      ],
    },
    {
      label: 'Nhận chuyển thư',
      submenu: [
        {
          label: 'Bưu phẩm quốc tế đến',
          accelerator:
            process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
          click: () => {
            console.log('Electron rocks!');
          },
        },
      ],
    }
  )
);

menu.append(
  new MenuItem({
    label: 'Nhận chuyển thư',
    submenu: [
      {
        label: 'Bưu phẩm Quốc tế đến',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
      {
        label: 'Bưu kiên Quốc tế đến',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
      {
        label: 'Import dữ liệu QT đến từ IPS',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
      {
        label: 'Bưu phẩm Trong nước đến',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
      {
        label: 'Bưu kiện Trong nước đến',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
      {
        label: 'Chuyển tiếp',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
    ],
  })
);

menu.append(
  new MenuItem({
    label: 'Kiểm hóa',
    submenu: [
      {
        label: 'Tiếp nhận',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
      {
        label: 'Kê khai',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
      {
        label: 'Báo cáo thuế và lệ phí',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
      {
        label: 'Bưu gửi lưu kho',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
    ],
  })
);

menu.append(
  new MenuItem({
    label: 'Đóng chuyển thư',
    submenu: [
      {
        label: 'Bưu phẩm đi Quốc tế',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
      {
        label: 'Bưu kiện đi Quốc tế',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
      {
        label: 'Bưu phẩm đi Trong nước',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
      {
        label: 'Bưu kiện đi Trong nước',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
      {
        label: 'Lập phiếu chuyển BC37, CN37, CN38',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
    ],
  })
);

menu.append(
  new MenuItem({
    label: 'Quản lý cước',
    submenu: [
      {
        label: 'Lập CP77',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
      {
        label: 'Bảng cước BK, BP quốc tế',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
      {
        label: 'Bảng phí xuất trình kiểm hóa HQ',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
      {
        label: 'Bảng các khoản phí khác',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
    ],
  })
);

menu.append(
  new MenuItem({
    label: 'Báo cáo thống kê',
    submenu: [
      {
        label: 'Thống kê',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
      {
        label: 'Báo cáo Thanh toán QT Bưu kiện',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
      {
        label: 'Báo cáo Thanh toán QT Bưu phẩm',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
    ],
  })
);

menu.append(
  new MenuItem({
    label: 'Truyền nhận dữ liệu',
    submenu: [
      {
        label: 'Quản lý',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
    ],
  })
);

menu.append(
  new MenuItem({
    label: 'Phát bưu phẩm',
    submenu: [
      {
        label: 'Nhập thông tin phát',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
    ],
  })
);

Menu.setApplicationMenu(menu);

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', async () => {
  if (mainWindow === null) {
    await createWindow();
  }
});

//-------------------- print function -----------------

// List of all options at -
// https://www.electronjs.org/docs/latest/api/web-contents#contentsprintoptions-callback
const printOptions = {
  silent: false,
  printBackground: true,
  color: true,
  margin: {
    marginType: 'printableArea',
  },
  landscape: false,
  pagesPerSheet: 1,
  collate: false,
  copies: 1,
  header: 'Page header',
  footer: 'Page footer',
};

//handle print
ipcMain.handle('printComponent', async (event, url) => {
  const win = new BrowserWindow({ show: false });

  win.webContents.on('did-finish-load', () => {
    win.webContents.print(printOptions, (success, failureReason) => {
      console.log('Print Initiated in Main...');
      if (!success) console.log(failureReason);
    });
  });

  await win.loadURL(url);
  return 'shown print dialog';
});

//handle preview
ipcMain.handle('previewComponent', async (event, url) => {
  let win = new BrowserWindow({
    title: 'Print Preview',
    show: false,
    autoHideMenuBar: true,
  });

  win.webContents.once('did-finish-load', () => {
    win.webContents
      .printToPDF(printOptions)
      .then((data) => {
        const buf = Buffer.from(data);
        data = buf.toString('base64');
        const url = 'data:application/pdf;base64,' + data;

        win.webContents.on('ready-to-show', () => {
          win.once('page-title-updated', (e) => e.preventDefault());
          win.show();
        });

        win.webContents.on('closed', () => (win = null));
        win.loadURL(url);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  await win.loadURL(url);
  return 'shown preview window';
});
