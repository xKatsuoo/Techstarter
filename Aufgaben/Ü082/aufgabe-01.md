# Aufgabe 1: Verständnis

**Beschreibe die Antwort zu folgenden Fragen (kurz) mit eigenen Worten**

## Callbacks

1. Was sind Callback-Funktionen in JavaScript?

 - Funktionen, die als Parameter an eine andere Funktion übergeben werden
 - Später von der aufrufenden Funktion aufgerufen
 - Handhabung von asynchronen Operationen

2. Wozu werden Callback-Funktionen verwendet?

 - Reaktion auf abgeschlossene Aufgaben oder Ereignisse
 - Handhabung von asynchronem Code
 - AJAX-Anfragen, Timer-Funktionen usw.

3. Wie werden Callback-Funktionen in JavaScript übergeben?

 - Direkte Verwendung einer benannten Funktion als Argument
 - Verwendung anonymer Funktionen als Argument

4. Wie kann man eine anonyme Funktion als Callback übergeben und welche andere Möglichkeit gibt es?

 - Direkte Verwendung einer Funktion ohne Funktionsnamen
 - Beispiel: 
```javascript
function doSomething(callback) {
  // Code, der etwas erledigt

  // Aufruf der Callback-Funktion
  callback();
}

// Vordefinierte Funktion als Callback
function myCallback() {
  console.log('Callback wurde aufgerufen!');
}

// Aufruf der Funktion mit vordefinierter Funktion als Callback
doSomething(myCallback);
```

5. Was sind mögliche Alternativen zu Callback-Funktionen in JavaScript?

 - Promises: Elegante Methode zur asynchronen Programmierung
 - Async/await: Vereinfachte Behandlung asynchroner Operationen
 - Event Listener: Reaktion auf Ereignisse wie Klicks, Tastendrücke

## Promises

6. Was sind Promises in JavaScript?

- Promises sind ein Konzept in JavaScript, das verwendet wird, um asynchronen Code einfacher zu handhaben. Sie ermöglichen die Kontrolle über den Ablauf und das Ergebnis von asynchronen Operationen. Promises helfen dabei, den Code übersichtlicher zu gestalten und Callback-Hell zu vermeiden. Sie haben drei Zustände (ausstehend, erfüllt, abgelehnt) und bieten Methoden wie then, catch und finally, um auf den Erfolg oder Misserfolg zu reagieren. Insgesamt erleichtern Promises die Arbeit mit asynchronem Code und verbessern die Lesbarkeit und Wartbarkeit des Codes. 

7. Wozu wurden Promises entwickelt?

- Promises wurden entwickelt, um die Handhabung von asynchronem Code in JavaScript zu verbessern. Sie bieten eine elegante Möglichkeit, asynchrone Operationen zu steuern, sequentielle oder parallele Ausführung zu ermöglichen und eine einfachere Fehlerbehandlung zu ermöglichen.

8. Welche Zustände können Promises haben und was bedeuten sie?

 - "Pending": Der initielle Zustand, wenn das Promise erstellt wird.
 - "Fulfilled": Der Zustand, wenn das Promise erfolgreich erfüllt wurde.
 - "Rejected": Der Zustand, wenn das Promise fehlerhaft abgeschlossen wurde.

9. Wie erstellt man ein Promise in JavaScript? (Kurzes Code Beispiel)
 
 ```javascript
 const myPromise = new Promise((resolve, reject) => {
  // Asynchrone Operation
  // Wenn erfolgreich:
  resolve('Erfolg');
  // Bei Fehler:
  reject('Fehler');
});
```

10. Wie reagiert man auf den Erfolg oder Misserfolg eines Promises?

 - Die then-Methode wird aufgerufen, wenn das Promise erfolgreich erfüllt wurde. Sie nimmt eine Funktion entgegen, die den Erfolg behandelt.

 - Die catch-Methode wird aufgerufen, wenn das Promise abgelehnt wurde. Sie nimmt   eine Funktion entgegen, die den Fehler behandelt.

11. Wie behandelt man Fehler in Promises?

 - Fehler in Promises können mit der 'catch'-Methode behandelt werden. Sie ermöglicht die Angabe einer Funktion, die den Fehler behandelt. Alternativ kann auch die Methode 'then' verwendet werden und als zweiter Parameter eine Funktion übergeben werden, die Fehler behandelt.


12. Welche Vorteile bieten Promises im Vergleich zu Callback-Funktionen?

 - Bessere Lesbarkeit und Verständlichkeit des Codes durch Vermeidung von verschachtelten Callbacks ("Callback Hell").
 - Einfachere Fehlerbehandlung durch die Verwendung der catch-Methode.
 - Unterstützung für sequentielle oder parallele Ausführung von asynchronem Code.
 - Fähigkeit, Rückgabewerte zwischen verschiedenen Promise-Verknüpfungen  weiterzugeben.
 - Integration mit anderen Funktionen wie async/await, um asynchronen Code noch lesbarer zu gestalten.

##  Async Await

13. Warum wurde Async Await entwickelt?

 - Async Await wurde entwickelt, um die asynchrone Programmierung in JavaScript zu vereinfachen und den Code lesbarer zu machen. Es wurde als Ergänzung zu Promises eingeführt, um die Verwendung von asynchronem Code zu erleichtern.

14. Was ist der Unterschied zwischen synchronem Code und Async Await?

 - Synchroner Code wird in einer sequentiellen Reihenfolge ausgeführt, wobei jede Anweisung auf die Beendigung der vorherigen wartet, bevor sie ausgeführt wird.
 
 - Async Await ermöglicht es, asynchronen Code in einer Art und Weise zu schreiben, die dem synchronen Code ähnelt, während er dennoch die Vorteile der asynchronen Ausführung beibehält. Es ermöglicht die Verwendung von Schlüsselwörtern wie await, um auf das Ergebnis einer asynchronen Operation zu warten, ohne den Thread zu blockieren.

15. Wie funktioniert Async Await in JavaScript? (Kurzes Code Beispiel)

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Fehler beim Abrufen der Daten:', error);
  }
}

fetchData();
```

16. Welche Schlüsselwörter werden verwendet, um in einer Funktion das await Keyword zu nutzen?

 - Das await-Schlüsselwort wird nur innerhalb einer Funktion verwendet, die mit dem async-Schlüsselwort gekennzeichnet ist. Dieses Schlüsselwort wird vor einer asynchronen Operation platziert, auf deren Abschluss gewartet werden soll.

17. Wie funktioniert die sequenzielle Ausführung mehrerer asynchroner Operationen mit Async Await?

 - Mit Async Await kann die sequenzielle Ausführung mehrerer asynchroner Operationen erreicht werden, indem await verwendet wird, um auf das Ergebnis jeder Operation zu warten, bevor die nächste gestartet wird. Dadurch wird sichergestellt, dass die Operationen in der gewünschten Reihenfolge ablaufen.

18. Welche Vorteile bietet Async Await im Vergleich zu Callback-Funktionen und Promises?

 - Lesbarkeit und Verständlichkeit des Codes werden verbessert, da der Code sequentiell geschrieben werden kann, ähnlich wie bei synchronem Code.
 - Fehlerbehandlung wird vereinfacht, da try/catch-Blöcke verwendet werden können, um Fehler abzufangen.
 - Bessere Integration mit bestehendem synchronem Code, da asynchroner Code leichter in synchronen Kontexten verwendet werden kann.
 - Ermöglicht das Verketten von asynchronen Operationen in einer einfachen und intuitiven Art und Weise.
 - Unterstützt die Verwendung von synchronen Steuerungsstrukturen wie Schleifen in asynchronem Code.