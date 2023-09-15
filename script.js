//prompt("hola mundo");


let bd = document.getElementById("body");
Window.onclick= bd.style.color = "blue";
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