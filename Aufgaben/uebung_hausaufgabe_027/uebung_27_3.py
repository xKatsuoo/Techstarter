print("KOSTENRECHNER WEIN")
print("==================")
print("Die Preise sind die folgenden:")
print("Aktuell in unserem Sortiment Rotwein für 12,99€")
print("Für die Damen emofehlen wir unseren Rosewein zu 9,98€ die Flasche.")
print("Alternativ unsere beliebte Weißweinsorte zu 11,99€ pro Flasche")


preis_rot = 12.99
preis_rose = 9.98
preis_weiß = 11.99

rot = input("Wie viele Flaschen Rotwein? ")
rose = input("Wie viele Flaschen Rosewein? ")
weiß = input("Wie viele Flaschen Weißwein? ")

preis_rot2 = float(rot) * float(preis_rot)
preis_rose2 = float(rose) * float(preis_rose)
preis_weiß2 = float(weiß) * float(preis_weiß)

preis_g = preis_weiß2 + preis_rose2 + preis_rot2
print("Die Gesamtkosten betragen " + str(preis_g) + " Euro.")