// Neu geschrieben (zum eigen Verständnis!)
function sumNew(a, b, callback) {
    const summe = a + b;
    callback(summe);
    
  }
  
  // Vordefinierte Funktion als Callback
  function myCallback(ergebnis) {
    console.log('Das Ergebnis ist: ', ergebnis);
  }
  
  // Aufruf der Funktion mit vordefinierter Funktion als Callback
  sumNew(10, 20, myCallback);
  // Das Ergebnis ist: 30

function waitForFive(backCall) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("5");
      }, 5000);
    });
  }
  
  async function asyncCaller() {
    const result = await waitForFive();
    myCallback(result);

  }
  
   asyncCaller();


function sleep(duration) {
      return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  }
  
  // Die folgende Async-Funktion wird direkt aufgerufen
  (async function() {
    await sleep(500); // 500ms warten
    console.log("Wartezeit abgelaufen!");
  })();
  

  