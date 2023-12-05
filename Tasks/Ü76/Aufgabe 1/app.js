class Buch {
  constructor(titel, autor, isbn, preis) {
    this.titel = titel;
    this.autor = autor;
    this.isbn = isbn;
    this.preis = preis;
  }

  // Getter-Methoden
  getTitel() {
    return this.titel;
  }

  getAutor() {
    return this.autor;
  }

  getISBN() {
    return this.isbn;
  }

  getPreis() {
    return this.preis;
  }

  // Setter-Methoden
  setTitel(neuerTitel) {
    this.titel = neuerTitel;
  }

  setAutor(neuerAutor) {
    this.autor = neuerAutor;
  }

  setISBN(neueISBN) {
    this.isbn = neueISBN;
  }

  setPreis(neuerPreis) {
    this.preis = neuerPreis;
  }
}

// Bücher erstellen und im Array speichern
const buch1 = new Buch("Der Alchimist", "Paulo Coelho", "9783257261053", 9.99);
const buch2 = new Buch("Harry Potter und der Stein der Weisen", "J.K. Rowling", "9783551557414", 12.99);
const buch3 = new Buch("To Kill a Mockingbird", "Harper Lee", "9780446310789", 7.99);

const buchArray = [buch1, buch2, buch3];

// Ausgabe für alle Bücher
buchArray.forEach((buch) => {
  console.log(`${buch.getTitel()} (${buch.getAutor()}): ${buch.getPreis()}`);
});
