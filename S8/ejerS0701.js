
function sumaimpares(a,b,c,d,f,suma){
    var n1=prompt("Ingrese numero entre 1000 y 9999");
    if (n1<1000 || n1>9999){
        window.alert("Vuelva a ingresar numero");
    }
        d1=Math.trunc(n1/1000);
        d2=Math.trunc((n1-d1*1000)/100);
        d3=Math.trunc((n1-d1*1000-d2*100)/10);
        d4=Math.trunc((n1-d1*1000-d2*100-d3*10));

        suma=0;
    if (d1%2 != 0){
        suma=suma+d1;
    }
    if (d2%2 != 0){
        suma=suma+d2;
    }
    if (d3%2 != 0){
        suma=suma+d3;
    }
    if (d4%2 != 0){
        suma=suma+d4;
    }
    
    document.getElementById("impares").innerHTML="la sumar de cifras impares es "+suma;
  
}

function operador(n1,n2,d1,d2,d3,d4,d5,suma){
    n1=prompt("Ingresar numero de 5 digitos distintos");
    n2=n1.tostringlenght;
    if (n2<=5 ){
        window.alert("Vuelva a ingresar numero ");
    }
        d1=Math.trunc(n1/10000);
        d2=Math.trunc((n1-d1*10000)/1000);
        d3=Math.trunc((n1-d1*10000-d2*1000)/100);
        d4=Math.trunc((n1-d1*10000-d2*1000-d3*100)/10);
        d5=Math.trunc((n1-d1*10000-d2*1000-d3*100-d4*10));
    suma=0;    
   
        if (d1%2===0 ||d1%3===0 || d1%5===0 ||d1%7===0 || d1%2!=0 ){
            suma=suma+d1;      
        } 
        if (d2%2===0 ||d2%3===0 || d2%5===0 ||d2%7===0 || d2%2!=0 ){
            suma=suma+d2;      
        } 
        if (d3%2===0 ||d3%3===0 || d3%5===0 ||d3%7===0 || d3%2!=0 ){
            suma=suma+d3;      
        } 
        if (d4%2===0 ||d4%3===0 || d4%5===0 ||d4%7===0 || d4%2!=0 ){
            suma=suma+d4;      
        } 
        if (d5%2===0 ||d5%3===0 || d5%5===0 ||d5%7===0 || d5%2!=0 ){
            suma=suma+d5;      
        } 
    document.getElementById("operador").innerHTML="la sumar de cifras impares es "+suma;
}

function operadores(n1,n2,n3,n4,n5,mayor,menor,tercermenor,matriz,matrizordenada){
    n1=prompt("Ingrese numero");
    n2=prompt("Ingrese numero");
    n3=prompt("Ingrese numero");
    n4=prompt("Ingrese numero");
    n5=prompt("Ingrese numero");
    matriz=[n1,n2,n3,n4,n5];
    matrizordenada=matriz.sort();
    document.getElementById("menor").innerHTML="El menor es"+matrizordenada[0];
    document.getElementById("mayor").innerHTML="El mayor es"+matrizordenada[4];
    document.getElementById("tercermenor").innerHTML="El tercer menor es "+matrizordenada[2];
}

function cambiosd(ns,nd,ne){
    ns=prompt("ingrese monto en soles");
    nd=ns/4;
    ne=ns/4.10;
    document.getElementById("soles").innerHTML=ns;
    document.getElementById("dolares").innerHTML=nd;
    document.getElementById("euros").innerHTML=ne;
}

function cambiode(ns,nd,ne){
    nd=prompt("ingrese monto en dolares");
    ns=nd/4;
    ne=ns*4.10;
    document.getElementById("soles").innerHTML=ns;
    document.getElementById("dolares").innerHTML=nd;
    document.getElementById("euros").innerHTML=ne;
}

