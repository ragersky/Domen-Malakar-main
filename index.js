const fs = require("fs");
const path = require("path");

// Use the same folder where the script is located
const folderPath = __dirname; // This will point to 'Promocijska_fotografija' directory

// Get all files from the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading the directory:", err);
    return;
  }

  // Filter the files to only include images (e.g., jpg, jpeg, png)
  const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

  // Check if image files are found
  if (imageFiles.length === 0) {
    console.error("No image files found in the directory.");
    return;
  }

  // Sort the files (optional, to ensure a certain order)
  imageFiles.sort();

  // Loop through the image files and rename them sequentially
  imageFiles.forEach((file, index) => {
    const fileExtension = path.extname(file); // Get the file extension (e.g., .jpg, .png)
    const newFileName = `${index + 1}${fileExtension}`; // Generate the new name (e.g., 1.jpg, 2.png)

    const oldFilePath = path.join(folderPath, file);
    const newFilePath = path.join(folderPath, newFileName);

    // Rename the file
    fs.rename(oldFilePath, newFilePath, (err) => {
      if (err) {
        console.error(`Error renaming file ${file}:`, err);
      } else {
        console.log(`${file} renamed to ${newFileName}`);
      }
      serviceWorker.unregister();

    });
  });
});
