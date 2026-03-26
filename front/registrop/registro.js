let nombrep =document.getElementById("nombrep")
let apellido =document.getElementById("apellido")
let niño =document.getElementById("nombreh")
let RATIO =document.getElementById("RATIO")
let contraseña =document.getElementById("contraseña")
let dosis=document.getElementById("dosis")
let registroBTN=document.getElementById("registroBTN")
  let cuenta = document.getElementById("cuenta")
  cuenta.addEventListener("click", function(){
    window.location.href='../main/main_html_front.html'
  })
registroBTN.addEventListener("click", () => {
fetch("https://proyecto-midosissegura.onrender.com/registrop", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },

  body: JSON.stringify({
    NOMBRE: document.getElementById("nombrep").value,
    APELLIDOniño: document.getElementById("apellidoh").value,
    APELLIDO: document.getElementById("apellido").value,
    CONTRASENA: document.getElementById("contraseña").value,
    RATIO:document.getElementById("RATIO").value,
    NOMBREniño:document.getElementById("nombreh").value,
    DOSIS:document.getElementById("dosis").value,
  })}).then(response => response.json())
 .then(data => {
    let cuentacreada=data
if (cuentacreada===true){
  localStorage.setItem ("nombreniño", document.getElementById("nombreh").value);
localStorage.setItem ("apellidoniño",  document.getElementById("apellidoh").value);
  localStorage.setItem ("ratio", RATIO.value);
  window.location.href = "../registro/registro.html";
}
else if ( cuentacreada=false){
    alert("vueva a intentar y revise si ya existe el usuario")
}
  })});