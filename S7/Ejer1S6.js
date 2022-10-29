//el mayor de los numeros

function invertir(){
    var valor=document.getElementById("invertir")
    var numero=valor.value;
    valor.value = numero.split("").reverse().join("");
    document.getElementById("invertir").innerHTML=numero;
}
function mayorde3(n1,n2,n3,mayor,medio){
    n1=prompt("Ingrese numero 1");
    n2=prompt("Ingrese numero 2");
    n3=prompt("Ingrese numero 3");
    if (n1>n2){
        medio=n1;
    }
    else{
        medio=n2;
    }
    if (medio>n3){
        mayor=medio;
    }
    else{mayor=n3}
    
    document.getElementById("mayorde3").innerHTML="el numero mayor es "+mayor;
}

function segundomayor(n1,n2,n3,mayor,medio){
    n1=prompt("Ingrese numero 1");
    n2=prompt("Ingrese numero 2");
    n3=prompt("Ingrese numero 3");
    if (n1>n2){
        medio=n1;
    }
    else{
        medio=n2;
    }
    if (medio>n3){
        mayor=medio;
    }
    else{mayor=n3}
    document.getElementById("segundomayor").innerHTML="el segundo numero mayor es "+medio;
    
}
function convertirgrados(n1,valor,entero,decimal){
    n1=prompt("Ingrese numero en grados sexagesimales");
    valor.value = n1.split("");
    entero = Math.floor(n1);
    decimal = n1-entero;
    
  
    
}
