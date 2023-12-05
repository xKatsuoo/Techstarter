const zahl1 = parseFloat(process.argv[2]);
const zahl2 = parseFloat(process.argv[3]);
const zahl3 = parseFloat(process.argv[4]);

// Größte Zahl bestimmen
const maxZahl = Math.max(zahl1, zahl2, zahl3);

// Kleinste Zahl bestimmen
const minZahl = Math.min(zahl1, zahl2, zahl3);

// Ausgabe
console.log(`Die größte Zahl ist: ${maxZahl}`);
console.log(`Die kleinste Zahl ist: ${minZahl}`);
