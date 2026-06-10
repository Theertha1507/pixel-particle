const fs = require("fs");
const path = require("path");
const { createCanvas, loadImage } = require("canvas");
const chars = " .:-=+*#%@";
(async () => {
    console.log("Script has started");
    const imgPath = path.join(__dirname, "images/myphoto.png");
    console.log("image is loading");
    const img = await loadImage(imgPath);
    console.log("Image loaded");
    const size = 400;
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, size, size);
    const imageData = ctx.getImageData(0, 0, size, size).data;
    const gap = 6;
    const particles = [];
    for (let y = 0; y < size; y += gap) {
        for (let x = 0; x < size; x += gap) {
            const i = (y * size + x) * 4;
            const r = imageData[i];
            const g = imageData[i + 1];
            const b = imageData[i + 2];
            const a = imageData[i + 3];
            if (a > 128) {
                const brightness = (r + g + b) / (3 * 255);
                const charIndex = Math.floor(brightness * (chars.length - 1));
                particles.push({
                    x,
                    y,
                    char: chars[charIndex],
                    alpha: brightness
                });
            }
        }
    }
    const outputPath = path.join(__dirname, "output/asciiData.js");
    fs.writeFileSync(
        outputPath,
        `export const asciiData=${JSON.stringify(particles, null, 2)};`
    );
    console.log("ascii has been generated");

})();