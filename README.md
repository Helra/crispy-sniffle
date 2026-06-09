# Crispy-sniffle

## What is Crispy Sniffle Calendar ? 
Just a cute app with the date and the hour, updated seconds by seconds. 
Created as a mean to test Electron and the creation of an app, up to the packaging. 

### Why Crispy sniffle ? 
It was the first name generated and it is cute.

## Technicalities

### How to run Crispy sniffle calendar ? 

Be assured that you have all the node module necessary fo the project to work. 

For that you need to have Nodejs and run a 'npm init'. 
Electron and @electron/packager will install itself. 

* Electron : https://github.com/electron/electron
* @electron/packager : https://github.com/electron/packager#building-windows-apps-from-non-windows-platforms

You will also need two font for this app : 
* Pixeboy (personnal use only) : https://www.dafont.com/pixeboy.font
* Pixelify Sans : https://fonts.google.com/specimen/Pixelify+Sans

### How to package Crispy sniffle calendar ? 

For windows : npx @electron/packager . Crispy-Sniffle --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icone_win.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\"Crispy Sniffle Calendar\"

For linux (not tested, icon not yet created) : npx electron-packager . Crispy-Sniffle --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=true --out=release-builds

For Mac (not tested, icon not yet created) : npx electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds
  

### Debugging the installation

Electron sometimes doesn't install itself well with Nodejs 24 or 26. 
If you are in this case with the error "electron doesn't find path.txt", you need to downgrade Nodejs to the 22 version, as it is intended in this project.

## Other noteworthy stuff

Crispy snuffle was created without the help of IA, as a mean of expression and creativity, only for fun. 

The  original design was created in figma. 

This is an open-source feel-free-to-use application. 