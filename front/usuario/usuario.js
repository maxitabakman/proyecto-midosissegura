let pusuario = document.getElementById("pusuario");
let pclave = document.getElementById("pclave");
let iclave = document.getElementById("cclave");
let ptrofeos = document.getElementById("ptrofeos");

let pratio= document.getElementById("pratio");
let inpuratio= document.getElementById("inpuratio");
let inputdosis= document.getElementById("inputdosis");

fetch("https://proyecto-midosissegura.onrender.com/UsuarioRegistrado", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },

  body: JSON.stringify({
           NOMBRE: localStorage.getItem("nombreusuario"),
APELLIDO: localStorage.getItem("apellidousuario")
    })}).then(response => response.json())
    .then(data => 
            
     definicion(data))
function definicion(data){
    console.log("Datos recibidos:", data);
    pusuario.textContent = data.NOMBRE + " " + data.APELLIDO;
 document.getElementById("inputdosis").placeholder= data.DOSIS ;
 document.getElementById("inpuratio").placeholder = data.RATIO ;
  pclave.textContent =data.CONTRASENA;
  ptrofeos.textContent = data.NOMBREniño + " " + data.APELLIDOniño;
}
inputdosis.addEventListener("keydown", (event) => {
   if (event.key === "Enter") {
        fetch("https://proyecto-midosissegura.onrender.com/ActualizarDosis", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },

  body: JSON.stringify({
           NOMBRE: localStorage.getItem("nombreusuario"),
      APELLIDO: localStorage.getItem("apellidousuario"),
      DOSIS: inputdosis.value
    })}).then(response => response.json())
    .then(data => { inputdosis.placeholder = data.DOSIS;
            
    })
   }
});

inpuratio.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      fetch("https://proyecto-midosissegura.onrender.com/ActualizarRatio", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },

  body: JSON.stringify({
           NOMBRE: localStorage.getItem("nombreusuario"),
      APELLIDO: localStorage.getItem("apellidousuario"),
      RATIO: inpuratio.value
    })}).then(response => response.json())
    .then(data => { inpuratio.placeholder = data.RATIO;
            
    })
    }
});
let volveratras = document.getElementById("volveratras");
function volveratra (){
    window.location.href='../paginageneralp/paginageneralp.html'
}
volveratras.addEventListener("click", (volveratra));
