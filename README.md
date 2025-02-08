# HEIC to JPG Converter

A simple tool to convert HEIC images files to JPG format and optionally deletes the original HEIC files after conversion.

## Why Use This?

Got HEIC photos from your iPhone or Android that won't open on your computer or some websites? This tool fixes that by turning them into JPGs everyone can see. It's fast, easy, and keeps your photos looking good.

## How to Use

1. Place your HEIC files in `heic-images`.
2. Open a terminal and navigate to the project directory.
3. Run the script using the command: `node converter.js`
4. The converted JPG files will be saved in `converted-images`.
5. The original HEIC files will be deleted after successful conversion.

- To keep the original HEIC files, comment out or remove the `await fs.unlink(inputPath);` line in the script.

## Dependencies

This project uses the following npm packages:

- `heic-convert`: For converting HEIC files to JPEG format
- `sharp`: For additional image processing and saving

These dependencies will be automatically installed when you run `npm install`.
