function cargarPersona() { // Función para cargar personas
    let nombre = prompt("Ingrese el nombre:"); // Se usa prompt para que el usuario ingrese los datos
    let apellido = prompt("Ingrese el apellido:");
    let dni = prompt("Ingrese el DNI:");

    let telefonos = []; // Creamos una lista para almacenar los telefonos
    while (true) { // Usamos while para que el usuario ingrese varios telefonos
        let telefono = prompt("Ingrese un número de teléfono (o presione 'Enter' para finalizar):"); 
        if (telefono) { 
            telefonos.push(telefono); // Se agrega el telefono a la lista
        } else { 
            break; // Se sale del bucle si presiona enter
        }
    }

    return [nombre, apellido, dni, telefonos]; // Retorna un array con los datos
}

function main() { // Función principal
    let personas = []; // Creamos una lista para almacenar las personas

    while (true) { // Usamos while para que el usuario ingrese varias personas
        personas.push(cargarPersona()); // Se agrega la persona a la lista

        let continuar = prompt("¿Desea agregar otra persona? (s/n):").trim().toLowerCase(); // Se usa prompt para que el usuario ingrese si desea agregar otra persona se ua trim() para eliminar los espacios en blanco y se usa toLowerCase() para convertir la respuesta a minúsculas
        if (continuar !== "s") { // Si no desea agregar otra persona, se sale del bucle
            break;
        }
    }

    console.log("\nLista de personas registradas:"); // Se imprime la lista de personas
    console.log(personas);
}

// Ejecutar el programa en la consola del navegador
main();
