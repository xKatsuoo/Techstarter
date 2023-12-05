print("STUNDENRECHNER")
print("==============")
while True:
    hours = input("Gib eine Stundenanzahl ein (ganze Zahl): ")

    if not hours.isdigit():
            print("Bitte eine Zahl eingeben!")
            continue
    
    minutes = float(hours) * 60
    seconds = float(minutes) * 60

    m1 = str(minutes)
    s1 = str(seconds)

    print("Das sind " + m1 + " Minuten und " + s1 + " Sekunden!" )
    print("WOW!")
    
    play_again = input("Möchtest du noch eine Zahl umrechnen (j/n)? ").lower()
    if play_again != "j":
        break

print("Danke für deine Zeit!")
input("Zum Beenden beliebige Taste drücken.")
