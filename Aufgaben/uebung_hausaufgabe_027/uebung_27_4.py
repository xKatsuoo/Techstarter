print("Zahlensortierer")
print("===============")

numbers = [] 

while True:
    user_input = input("Gib eine Zahl ein (zum Beenden q drücken): ")
    if user_input == "q":
        break
    try:
        number = int(user_input)  
        numbers.append(number)
    except ValueError:
        print("Ungültige Eingabe. Bitte gib eine ganze Zahl ein.")

numbers.sort()
print("Sortierte Liste: ", numbers)
