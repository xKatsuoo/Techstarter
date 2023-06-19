import random
print("Zahlenraten")
print("===========")
durchgang = 0
aktiv = True
ratezahl = random.randint(0,9)

while aktiv:
    durchgang = durchgang + 1
    print()   # für Abstand (nur Optik)
    print(durchgang, ". Durchgang:")
    benutzereingabe = int(input("Bitte Zahl eingeben: "))
    
    if benutzereingabe == ratezahl:
        print("Richtig! Du hast die Zahl erraten :)")
        print()
        print("Du hast " + str(durchgang) + " Versuche benötigt.")
        print()
        play_again = input("Möchtest du noch einmal spielen (j/n)? ").lower()
        if play_again == "j":
            durchgang = 0  # setze Durchgänge auf 0 zurück
            ratezahl = random.randint(0,9)  # wähle eine neue Zufallszahl
        else:
            break
    elif benutzereingabe > ratezahl:
        print("Das war wohl nix... zu hoch!")
    else:
        print("Das war wohl nix... zu niedrig!")

print()
print("Du hast " + str(durchgang) + " Versuche benötigt.")
print("===========")
print("Ende des Spiels.")
print()