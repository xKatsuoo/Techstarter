print()
print("Willkommen zum Vokabelzähler!")
print()
print("=============================")
print()
eingabe = input("Gib einen Text ein: ")
vokale = "aeiouäöü"
anzahl_vokale = 0
for buchstabe in eingabe:
    if buchstabe.lower() in vokale:
        anzahl_vokale += 1
print()
print("Die Eingabe enthaelt", anzahl_vokale, "Vokale. Es wurde eine Datei 'Anzahl_Vokale.txt' erstellt, die dieses Ergebnis enthält.")
with open("Anzahl_Vokale.txt", "w") as datei:
    datei.write("Die Eingabe enthaelt " + str(anzahl_vokale) + " Vokale.")
print()
print("Das Programm wurde beendet. Zum erneuten Ausführen bitte neu starten!")
print()