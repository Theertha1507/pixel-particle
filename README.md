# Pixel Particle

An interactive ASCII particle portrait built using JavaScript and HTML5 Canvas.<img width="928" height="818" alt="Screenshot 2026-06-10 203628" src="https://github.com/user-attachments/assets/c58b5d5d-39bd-4d3c-9606-e87b0b272c94" />
<img width="1038" height="747" alt="Screenshot 2026-06-10 203402" src="https://github.com/user-attachments/assets/0149bf07-d1d2-49d4-929a-b83ee364d7cf" />


Live Demo: https://theertha1507.github.io/pixel-particle/



## Overview

Pixel Particle converts an image into ASCII characters and renders it as a particle-based visualization. The portrait responds to mouse interaction with smooth distortion effects, creating an engaging and dynamic visual experience.

## Features

* Image-to-ASCII conversion
* Particle-based rendering
* Interactive mouse effects
* HTML5 Canvas animations
* Procedural noise-based motion

## Tech Stack

* JavaScript
* HTML5 Canvas
* Node.js
* node-canvas
* Simplex Noise

## Project Structure

```
pixel-particle/
├── images/
│   └── myphoto.png
├── output/
│   └── asciiData.js
├── generate.js
├── index.html
└── README.md
```

## How It Works

1. An image is loaded using node-canvas.
2. Pixel brightness values are analyzed.
3. Each sampled pixel is converted into an ASCII character.
4. The generated data is stored in `asciiData.js`.
5. The browser renders the ASCII particles on a canvas and applies interactive effects.

## Run Locally

Install dependencies:

```bash
npm install
```

Generate ASCII data:

```bash
node generate.js
```

Open the project using a local server and view it in the browser.



