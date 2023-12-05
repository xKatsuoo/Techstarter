# Aufgabe 1: Inhaltsfragen

1. Welche Vorteile bietet das Verwenden von nodemon während der Entwicklung Deines Node.js-Servers, und wie wird es installiert und konfiguriert?

    - Nodemon erleichtert die Node.js-Entwicklung, da es den Server bei Code-Änderungen automatisch neu startet. Installation: npm install -g nodemon. Konfiguration: Keine spezielle Konfig nötig, einfach "nodemon" statt "node" zum Starten verwenden.

2. Wie kann man CORS (Cross-Origin Resource Sharing) in einer Full-Stack-App beeinflussen und welche Probleme können auftreten, wenn dies nicht richtig konfiguriert ist?

    - CORS steuert Datenfreigabe zwischen Domains. Fehlende Konfig kann Cross-Origin-Probleme verursachen. Lösung: Backend definiert erlaubte Domains mittels Header. Probleme: Sicherheitsrisiken, blockierte Anfragen.

3. Welche Vorteile hat die Auslagerung von API-Routen in separate Dateien und Ordner in einer Node.js Express-Anwendung?

    - Bessere Organisation und Wartbarkeit. Vorteile: Klarheit, Trennung von Verantwortlichkeiten. Beispiel: Routen in separate Dateien mit "express.Router()".

4. Warum könnte es sinnvoll sein, React-Komponenten in separate Ordner zu organisieren, wenn Dein Frontend-Projekt wächst? Wie kannst Du Komponenten in React wiederverwenden?

    - Ordnerstruktur verhindert Chaos. Vorteil: Leichtere Navigation, Teamarbeit. Wiederverwendung: Komponenten in anderen Teilen des Projekts nutzen, Importieren.

5. Was ist der Zweck des useEffect-Hooks in React, und wie wird er verwendet, um Daten zwischen Frontend und Backend in einer Full-Stack-App abzurufen und anzuzeigen?

    - Verwaltung von Nebeneffekten in Komponenten (z.B. Daten holen). Verwendung: Import, Aufruf im Funktionskörper. Datenabruf: z.B. Fetch-API im useEffect nutzen.

6. Was macht der useState-Hook und wiese wurde er in diesem Projekt verwendet?

    -  Verwaltung von Zustand in React. Nutzung: Import, Aufruf im Funktionskörper. Beispiel: const [state, setState] = useState(initialValue); – Zustand speichern und aktualisieren.