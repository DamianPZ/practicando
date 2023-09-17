//prompt("hola mundo");


let bd = document.getElementById("body");
Window.onclick= bd.style.color = "black";
let suma = ( a , b ) => a + b;

console.log(suma( 456, 485));

let division = num => num / 2;
console.log(division(50));

let saludar = () => console.log("Hola!");
saludar();
let persona={
    nombre:"damian",
    sexo: "macho alfa",
    dni: "398480035",
    anios: 30
}

function Auto (marca , modelo , anio,propietario){
    this.marca=marca;
    this.modelo = modelo;
    this.anio= anio;
    this.propietario= propietario;
}
let ferrari = new Auto("toyota", "RX470", 1999, persona);
console.log(ferrari);

let Vehiculo = {
    nombre: "auto",
    color: "negro",
    estado: "nuevo",
    arrancar: function(llave){
        if(llave == true){
            console.log(" RAAM RAAAM RAAM");
        }else{
            console.log("CHI...CHII...NO ARRANCA");
        }  
     }
};

Vehiculo.arrancar(true);
let pes = document.getElementById("p");
let opt = document.getElementsByClassName("opcion");
let boton = document.getElementById("btn");


boton.onclick = function(){
    bd.style.color = "red";
    bd.style.background="black";
    bd.style.transition= "0.5s";
   boton.style.background="red";
   boton.style.color="white";
    
    };
    pes.onmouseover = function(){
       
       if(pes == ""){
        pes.innerHTML = "hola a todos";
       }
      
    };
   
    let texto= "hola mundo";
    
    
    console.log(texto.substring(0,3));

    let numero;
    numero= Math.PI;
    console.log(numero);
    
     console.log(Math.abs(numero));
    
     console.log(Math.ceil(numero));

     console.log(Math.exp(2));

     console.log(Math.pow(2,5));

     console.log(Math.random());

    let frutas = ["pera","manzana","sandia"];

    frutas [3] = "uva";
    console.log(frutas);
    frutas.push("durazno","melon","anana");
    for (const fruta of frutas) {
        console.log(fruta);
    }
    
    let frase = "pepe junior mariela paja puta pedra pirulo";

    nombres = frase.split(null);

    for (let name of nombres) {
        console.log(`hola mi nombre es ${name}`);
    }
    function ordenar(a , b){
        if(a > b) return 1 ;
        if(a == b) return 0;
        if(a < b ) return -1;
    }

    let arr = [1, 15 , 3 , 4 , 3 , 2 , 8 , 7 , 9 , 45 , 25 , 36 , 14];
    console.log(arr.sort(ordenar));

    let duplicados = arr.map(function(elemento){
        return elemento * 2;
    })

    console.log(duplicados);
    let mitad = arr.map(function(elemento){
        return elemento/2;
    })
    console.log(mitad);