# Tic-Tac-Toe Electron App

A stylish Tic-Tac-Toe game built with Electron, featuring a modern UI and smooth animations. This project is designed to demonstrate the use of Electron for building cross-platform desktop applications with HTML, CSS, and JavaScript.

## Features

- **Custom Window Controls**: Includes custom minimize and close buttons.
- **Responsive Design**: Adapts to smaller screens with media queries.
- **Smooth Animations**: Hover effects, winning animations, and transitions.
- **Game States**: Start screen, game screen, win screen, and fail screen.
- **Electron Integration**: Uses Electron for desktop application functionality.

## Project Structure
tic-tac-toe-electron/<br>
├── assets/ # Images and icons used in the app <br>
├── dist/ # Output directory for built app (after packaging) <br>
├── index.html # Main HTML file <br>
├── main.js # Electron main process script <br>
├── preload.js # Preload script for secure IPC communication <br>
├── script.js # Game logic and UI interactions <br>
├── style.css # Styling for the app <br>
├── package.json # Project metadata and dependencies <br>
└── README.md # Project documentation<br>
<br>
Install dependencies:
Usage<br>
Start the app in development mode:<br>
<br>
Build the app for distribution:<br>
The built app will be available in the dist/ directory.<br>

Game Instructions<br>
Launch the app.<br>
Click the Start Game button to begin.<br>
Take turns clicking on the grid to place your symbol (X or O).<br>
The first player to align three symbols in a row, column, or diagonal wins.<br>
If the game ends in a draw, you can try again.<br>
<br>
File Descriptions<br>
index.html<br>
The main HTML file that defines the structure of the app, including the start screen, game screen, win screen, and fail screen.<br>

style.css<br>
Contains all the styles for the app, including responsive design, animations, and hover effects.<br>

script.js<br>
Handles the game logic, UI interactions, and transitions between screens. Key features include:<br>

Game state management.<br>
Event listeners for buttons and cells.<br>
Winning and draw detection.<br>
main.js<br>
The Electron main process script that creates the app window and handles IPC communication for window controls.<br>

package.json<br>
Defines the project metadata, dependencies, and build configurations.<br>

Dependencies<br>
Electron: Framework for building cross-platform desktop apps.<br>
Electron Builder: Tool for packaging and distributing the app.<br>
Development Notes<br>
The app uses custom window controls, so the default Electron frame is disabled.<br>
The game board and symbols are styled with CSS for a modern look.<br>
Media queries ensure the app is responsive on smaller screens.<br>
Build Configurations<br>
The package.json file includes configurations for building the app for Windows, macOS, and Linux:<br>

Windows: Builds an NSIS installer.<br>
macOS: Builds a DMG file.<br>
Linux: Builds an AppImage.<br>
Screenshots
Start Screen<br>
Start Screen<br>

Game Screen<br>
Game Screen<br>

Win Screen<br>
Win Screen
<br>
Fail Screen<br>
Fail Screen<br>

License<br>
This project is licensed under the MIT License. See the LICENSE file for details.<br>

Author<br>
Developed by Your Name. Feel free to reach out for any questions or suggestions!<br>
