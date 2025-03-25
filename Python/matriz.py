def cargar_persona(): #Función para cargar personas
    nombre = input("Ingrese el nombre: ")#Se usa input para que el usuario ingrese los datos
    apellido = input("Ingrese el apellido: ")
    dni = input("Ingrese el DNI: ")
    
    telefonos = [] #Creamos una lista para almacenar los telefonos
    while True: #Usamos while para que el usuario ingrese varios telefonos
        telefono = input("Ingrese un número de teléfono (o ENTER para finalizar): ")
        if telefono:
            telefonos.append(telefono) #Se agrega el telefono a la lista
        else:
            break #Se sale del bucle si presiona enter

    return [nombre, apellido, dni, telefonos] # devuelve una lista con los datos

def main(): #Función principal
    personas = [] #Creamos una lista para almacenar las personas
    
    while True: #Usamos while para que el usuario ingrese varias personas
        personas.append(cargar_persona()) #Se agrega la persona a la lista
        continuar = input("¿Desea agregar otra persona? (s/n): ").strip().lower()#Se usa input para que el usuario ingrese si desea agregar otra persona
        if continuar != "s": #Si no desea agregar otra persona, se sale del bucle
            break

    print("\nLista de personas registradas:")
    for p in personas: #Recorremos la lista de personas
        print(p) #Imprimimos la persona

if __name__ == "__main__": #Si el archivo se ejecuta directamente
    main()  #Se llama a la función principal
