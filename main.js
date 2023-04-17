let uno = 30000;
let dos = 50000;
let tres = 80000;

let producto = prompt ("Ingrese el codigo del producto a elegir ('1: Shampoo','2: Acondicionador','3: Tratamiento Capilar') o 'ESC' para salir");

while (producto != "ESC"){

    let cantidadProducto = Number(prompt("Ingrese la cantidad de productos "));

    function calcularIva (producto, iva){
    
    
switch(producto){

    case "1":
        alert("Usted eligio: Shampoo y su valor es : " + uno + ", con iva incluido el valor es de " + (uno * iva));
        alert("total final es de " + ((uno * iva)* cantidadProducto))
    break;

    case "2":
        alert("Usted eligio: Acondicionador y su valor es : " + dos + ", con iva incluido el valor es de " + (dos * iva));
        alert("total final es de " + ((dos * iva) * cantidadProducto))
    break;

    case "3":
        alert("Usted eligio: Tratamiento y su valor es : " + tres + ", con iva incluido el valor es de " + (tres * iva));
        alert("total final es de " + ((tres * iva) * cantidadProducto))
    break;

    default:
        alert("Ingrese un dato correcto");
        break;
}
}
console.log(calcularIva(producto,1.19));

producto = prompt ("Ingrese el codigo del producto a elegir ('1: Shampoo','2: Acondicionador','3: Tratamiento Capilar') o 'ESC' para salir");
}

