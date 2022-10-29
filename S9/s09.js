function Imprimir1al100(){
    /*Primer segmento
        Valores iniciales a las variables en ese segmento
        Segundo segmento
        Condicion o condiciones agrupadas con oepradores logicos
        Tercer segmento
        Operaciones de aumento o disminucion
        i=i+2
    */
    for (i=1;i<=100;i++){
        console.log(i);
    }

}

function multiplo3(){
    for(i=0; i<50;i=i+3){
        console.log(i);
    }
}

function multiplo3(){
    for(i=0; i<50;i=i+3){
        if (i%3===0)
        console.log(i);
    }
}

function sumapareimpar(){
    impar=0
    par=0
    for (i=1;i<=50;i+=2){
        impar+=i;
        par+=i+1;
    }
    console.log(sumaimpar);
    console.log(sumapar);
}

function SImparesParesM1(){
    par=0;
    impar=0;
    for(i=1;i<=50;i+=2){
    impar+=i;
    par+=i+1;
    }
    console.log(par);
    console.log(impar);
    }

function SImparesPareM2(){
    par=0;
    impar=0;
    for(i=1;i<=50;i++){
    if(i%2==1)impar+=i;
    else par+=i;
    }
    console.log(par);
    console.log(impar);
    }

function SImparesPareM1W(){
        par=0;
        impar=0;
        i=1;
        while(1<=50){
            impar+=i;
            par+=i+1;
            i+=2;
        }
        
        console.log(par);
        console.log(impar);
}

function write1(){
    par=0;
    impar=1;
    for(i=1;i<=8;i++){
        if(i%2==0)console.log(par);
        else console.log(impar);
        }

}

function write2(){
    par=1;
    impar=-1;
    for(i=1;i<=8;i++){
        if(i%2==0)console.log(par);
        else console.log(impar);
        }

}

function imprimirSecuenciaN() {
    var N = 8;
    var secuencia = [];
    for (var i = 0; i < N; i++) {
        secuencia.push(i);
    }
    console.log(secuencia);
    for (var i = 0; i < N; i++) {
        secuencia[i] = -secuencia[i];
    }
    console.log(secuencia);
        for (var i = 0; i < N; i++) {
            secuencia[i] = secuencia[i] * (i + 1);
        }
        console.log(secuencia);
        for (var i = 0; i < N; i++) {
            secuencia[i] = secuencia[i] + (i + 1);
        }
        console.log(secuencia);
}

function write3(){
    n1=1;
    n2=2;
    for (i=1;i<=8;i++){
        if (i%4==0)console.log(-n2);
        if (i%4==+1)console.log(n1);
        if (i%4==+2)console.log(n2);
        if (i%4==+3)console.log(-n1);
    }
    
}

function write4(){
    n1=3;
    n2=4;
    n3=5;
    i=1;
    while(i<=8){
        if (i%3==0)console.log(n3);
        if (i%3==+1)console.log(n1);
        if (i%3==+2)console.log(n2);
        i+=1;
    }
}

function write5(){
    par=1;
    impar=-1;
    for(x=-1,i=1;i<=8;i++,x*=-1){
        console.log(x)
        }

}

function Serie4(){
    N=8;
    for(x=3,i=1;i<=N;i++,x++){
    console.log(x);
    if(x==5)x=2;
    }
    }
    function Serie3(){
    N=8;
    for(x=1,s=1,i=1;i<=N;i++,x++){
    console.log(s*x);
    if(x==2){
    x=0;
    s*=-1;
    }
    }
    }
    function Serie2(){
    N=8;
    for(x=-1,i=1;i<=N;i++,x*=-1){
    console.log(x);
    }
    }
function Serie1(){
    N=8;
    for(x=1,i=1;i<=N;i++,x--){
    console.log(x);
    if(x==0){
    x=2;
    }
    }
    }
