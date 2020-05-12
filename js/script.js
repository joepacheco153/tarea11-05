
var x,y,res;
var op= parseInt(prompt("Ingrese la opcion:  "));
/*operacion:
1.Suma
2.Resta
3.Multiplicacion
4.Division
5.Raiz cubica
6.Factorial
7.Potencia
*/  
function datos1() {
    x = parseInt(prompt("Ingrese un numero: "));
}
function datos2() {
    x = parseInt(prompt("Ingrese el primero numero: "));
    y = parseInt(prompt("Ingrese el segundo numero: "));
}

switch (op) {
    
    case 1:
        datos2();
        res=x+y;
        alert("El resultado es: "+res);
        break;
    case 2:
        datos2();
        res=x-y;
        alert("El resultado es: "+res);
        break;
    case 3:
        datos2();
        res=x*y;
        alert("El resultado es: "+res);
        break;    
    case 4:
        datos2(); 
        res=x/y;
        alert("El resultado es: "+res);
        break; 
    case 5:
        datos1();       
        res=Math.pow(x,1/3);
        alert("El resultado es: "+res);
        break;      
    case 6:  
        datos1(); 
        var total = 1;
        for (i=1; i<=x; i++) {
            total = total * i; 
        }
        alert("El resultado es: "+res);        
        break; 
    case 7:
        datos2(); 
        res=Math.pow(x,y)    
        alert("El resultado es: "+res);       
        break;  
        
    default:
        break;
}

