# fractal-starterkit
A base fractal folder structure with example project

## Requirements

1. Install Nodejs & npm  
Get it from https://nodejs.org/en/

2. Installing the Fractal CLI tool globally via NPM
```
npm i -g @frctl/fractal
```
3. Install Gulp CLI
```
sudo npm install --global gulp-cli
```

## How to use
1. Clone the repo locally  
2. Open the local Folder with the Terminal
3. Install Dependencies with npm
```
npm install
```
4. After the Dependencies have been installed, start fractal by typing the following command in terminal
```
gulp
```

## Re-create parsys-file when a new element/component was added

enter the following in the terminal

```
gulp build-parsys
```

## Javascript-files in elements/components/…

You don't need to add `$(document).ready(function(){…});` to the javascript files. They will be wrapped into this when the js-files are concatenated.
