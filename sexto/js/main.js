const usuario=Number(prompt("ingrese la edad del usuario"))

const verificarMayor=(edad)=>{
    if(edad>=18){
        return "mayor"
    }
    return "menor"
}

alert(verificarMayor(usuario))

const edad1=Number(prompt("Ingrese la edad del usuario 1"));
const edad2=Number(prompt("Ingrese la edad del usuario 2"));
const edad3=Number(prompt("Ingrese la edad del usuario 3"));

const usuarioMayor=(e1,e2,e3)=>{
    if(e1>e2 && e1>e3){
        return "el usuario 1 es mayor";
    }
    if(e2>e1 && e2>e3){
        return "el usuario 2 es mayor";
    }
    if(e3>e2 && e3>e1){
        return "el usuario 3 es mayor";
    }
}

alert(usuarioMayor(edad1, edad2,edad3))


