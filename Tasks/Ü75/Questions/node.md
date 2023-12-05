//  - Wissenfragen -
// NUR ANTWORTEN HIER! 
// Beispiele in den Dateien des jeweiligen Ordnerns 


// Aufgabe 1 

Ein Modul in Node.js ist eine eigenständige Codeeinheit, die Funktionen, Variablen und Objekte enthält. Es stellt eine Möglichkeit dar, den Code in logisch zusammengehörige Teile aufzuteilen und organisiert zu halten. Module ermöglichen die Wiederverwendbarkeit von Code und fördern eine modulare und skalierbare Entwicklung.
Module sind nützlich, um komplexe Projekte in überschaubare Teile zu zerlegen, was die Wartbarkeit und Lesbarkeit des Codes verbessert.

In diesem Beispiel wird das squareRoot-Modul importiert und die Funktion calculateSquareRoot aufgerufen, um die Quadratwurzel der Zahl 16 zu berechnen. Das Ergebnis wird dann auf der Konsole ausgegeben. Durch die Verwendung von Modulen kann der Code sauber strukturiert und Funktionen können in verschiedenen Teilen des Programms wiederverwendet werden.


// Aufgabe 2

Um ein Modul in Node.js zu exportieren, verwenden Sie das 'module.exports' Objekt. Dieses Objekt wird verwendet, um Funktionen, Variablen oder Objekte zu exportieren, sodass sie in anderen Dateien oder Modulen verwendet werden können.

In diesem Beispiel wird die Funktion 'greet' definiert und anschließend über module.exports exportiert.

Um dieses Modul in einer anderen Datei zu importieren, verwenden Sie die 'require' Funktion und geben den Pfad zur Moduldatei an.

In der Datei main.js importieren wir das greet-Modul mit der require-Funktion und können dann die exportierte Funktion greet verwenden, um eine Begrüßung auszugeben.


// Aufgabe 3

Eingebaute (built-in/core) Module sind in Node.js bereits enthalten und müssen nicht installiert werden. Sie bieten grundlegende Funktionen und Dienste wie das Arbeiten mit dem Dateisystem (fs), das Erstellen von HTTP-Servern (http), das Arbeiten mit Pfaden (path) usw.

Externe Module sind von der Node.js-Kernbibliothek unabhängige Module, die über npm installiert werden. Sie bieten zusätzliche Funktionalitäten, die von der Community entwickelt wurden.

Zum Installieren eines externen Moduls verwenden Sie den Befehl 'npm install'


// Aufgabe 4

Durch das Ausführen von npm init und Erstellen der package.json-Datei erhalten Sie eine zentrale Konfigurationsdatei für Ihr Node.js-Projekt, in der Sie wichtige Informationen festlegen und Abhängigkeiten verwalten können. Dies fördert eine bessere Zusammenarbeit und erleichtert anderen Entwicklern den Einstieg in Ihr Projekt.


// Aufgabe 5

Die package.json-Datei ist eine Konfigurationsdatei in einem Node.js-Projekt, die Informationen über das Projekt enthält. Hier sind einige Schlüssel und ihre Bedeutung:

name: Der Name des Projekts.
version: Die Versionsnummer des Projekts.
description: Eine kurze Beschreibung des Projekts.
main: Die Hauptdatei des Projekts.
scripts: Benutzerdefinierte Skripte, z.B. zum Starten oder Testen des Projekts.
dependencies: Externe Module, die das Projekt benötigt.
devDependencies: Entwicklungsabhängigkeiten, die nur für die Entwicklung des Projekts benötigt werden.
Die package.json-Datei ermöglicht es, das Projekt zu verwalten, Abhängigkeiten zu installieren und benutzerdefinierte Skripte auszuführen.


// Aufgabe 6 

'npm init' ist eine interaktive Abfrage, bei der Sie Informationen für die package.json-Datei eingeben müssen, während 'npm init -y' automatisch Standardwerte verwendet, ohne Fragen zu stellen. 'npm init -y' ist praktisch, wenn Sie schnell ein neues Projekt erstellen möchten, ohne individuelle Eingaben zu machen.

