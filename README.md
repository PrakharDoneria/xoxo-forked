# Tic-Tac-Toe Electron App

A stylish Tic-Tac-Toe game built with Electron, featuring a modern UI and smooth animations. This project is designed to demonstrate the use of Electron for building cross-platform desktop applications with HTML, CSS, and JavaScript.

## Features

-   **Custom Window Controls**: Includes custom minimize and close buttons.
-   **Responsive Design**: Adapts to smaller screens with media queries.
-   **Smooth Animations**: Hover effects, winning animations, and transitions.
-   **Game States**: Start screen, game screen, win screen, and fail screen.
-   **Player Turn Indicator**: Clearly shows whose turn it is during gameplay.
-   **Dynamic Game Messages**: Displays messages for wins and draws.
-   **Enhanced UI Layout**: Improved spacing and positioning of elements for a cleaner look.
-   **Larger Game Symbols**: X (heart) and O (letter) symbols are more prominent.
-   **Electron Integration**: Uses Electron for desktop application functionality.

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

## Install dependencies:

```bash
npm install
````

## Usage

Start the app in development mode:

```bash
npm start
```

Build the app for distribution:

```bash
npm run dist
```

The built app will be available in the `dist/` directory.

## Game Instructions

1.  Launch the app.
2.  Click the "Start Game" button to begin.
3.  Take turns clicking on the grid to place your symbol (X or O).
4.  The current player's turn is indicated at the top of the game board.
5.  The first player to align three symbols in a row, column, or diagonal wins.
6.  If the game ends in a draw, you can try again.

## File Descriptions

**index.html**
The main HTML file that defines the structure of the app, including the start screen, game screen, win screen, and fail screen. It now includes dedicated containers for the game logo and dynamic game information.

**style.css**
Contains all the styles for the app, including responsive design, animations, and hover effects. This file has been updated to accommodate the new UI elements, improve spacing, and enhance the visual presentation of game symbols and messages.

**script.js**
Handles the game logic, UI interactions, and transitions between screens. Key features include:

  - Game state management.
  - Event listeners for buttons and cells.
  - Winning and draw detection.
  - Updates for the player turn display and game messages.
  - Improved initialization of window control event listeners.

**main.js**
The Electron main process script that creates the app window and handles IPC communication for window controls.

**package.json**
Defines the project metadata, dependencies, and build configurations.

## Dependencies

  - **Electron**: Framework for building cross-platform desktop apps.
  - **Electron Builder**: Tool for packaging and distributing the app.

## Development Notes

  - The app uses custom window controls, so the default Electron frame is disabled.
  - The game board and symbols are styled with CSS for a modern look.
  - Media queries ensure the app is responsive on smaller screens.
  - The game now provides clear visual feedback on whose turn it is and the game outcome.

## Build Configurations

The `package.json` file includes configurations for building the app for Windows, macOS, and Linux:

  - **Windows**: Builds an NSIS installer.
  - **macOS**: Builds a DMG file.
  - **Linux**: Builds an AppImage.

## Screenshots
![Screenshot](assets/screenshots/Screenshot%20(152).png)
![Screenshot](assets/screenshots/Screenshot%20(153).png)
![Screenshot](assets/screenshots/Screenshot%20(153).png)
![Screenshot](assets/screenshots/Screenshot%20(154).png)
![Screenshot](assets/screenshots/Screenshot%20(155).png)

## Author

Developed by Abhirami Ramadas