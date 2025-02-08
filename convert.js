const fs = require('fs').promises;
const path = require('path');
const heicConvert = require('heic-convert');
const sharp = require('sharp');

const inputDirectory = path.join(__dirname, 'heic-images');
const outputDirectory = path.join(__dirname, 'converted-images');

async function convertHeicToJpg(inputDir, outputDir) {
  try {
    await fs.mkdir(outputDir, { recursive: true });

    const files = await fs.readdir(inputDir);
    const heicFiles = files.filter(file => path.extname(file).toLowerCase() === '.heic');

    console.log(`Found ${heicFiles.length} HEIC files to convert.`);

    for (const file of heicFiles) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, `${path.parse(file).name}.jpg`);

      console.log(`Converting ${file}...`);

      try {
        const inputBuffer = await fs.readFile(inputPath);

        const jpegBuffer = await heicConvert({
          buffer: inputBuffer,
          format: 'JPEG',
          quality: 90
        });

        await sharp(jpegBuffer)
          .jpeg({ quality: 90 })
          .toFile(outputPath);

        console.log(`Converted ${file} to JPG successfully.`);

        await fs.unlink(inputPath);
        console.log(`Deleted original file: ${file}`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }

    console.log('Converted files successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

convertHeicToJpg(inputDirectory, outputDirectory);