const fs = require('fs');

const fileNames = process.argv.slice(2);

if (fileNames.length === 0) {
  console.error('Es wurden keine Dateinamen angegeben.');
  process.exit(1);
}

fileNames.forEach((fileName) => {
  if (!fs.existsSync(fileName)) {
    console.error(`Die Datei ${fileName} existiert nicht.`);
    return; // Springe zur nächsten Datei, falls die aktuelle Datei nicht existiert
  }

  try {
    const fileContent = fs.readFileSync(fileName, 'utf8');
    process.stdout.write(fileContent); // Ausgabe in die Konsole, ohne Zeilenumbruch
    process.stdout.write('\n'); // Neue Zeile als Trennsymbol zwischen den Dateien
  } catch (error) {
    console.error(`Fehler beim Lesen der Datei ${fileName}:`, error);
    process.exit(1);
  }
});
