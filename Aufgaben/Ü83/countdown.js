function countdownTimer(duration) {
  let timer = duration;

  const intervalId = setInterval(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    console.log(`Verbleibende Zeit: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);

    timer--;

    if (timer < 0) {
      clearInterval(intervalId);
      console.log('Countdown abgelaufen!');
    }
  }, 1000);
}

// Beispielaufruf mit einer Dauer von 5 Minuten (300 Sekunden)
countdownTimer(300);
