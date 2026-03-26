let listacomentarios =[]
let mensajes =[]
let nombre=""
const inputcomentario=document.getElementById("comentarioinput")
const agregarcomentario =document.getElementById("agregarcomentario")
const ulcomentarios=document.getElementById("comentariosresto")
const ulcomentariosusuario=document.getElementById("comentariostuyos")
agregarcomentario.addEventListener("click", function() {
    const comentario = inputcomentario.value;
    listacomentarios.push(comentario);
        inputcomentario.value=""
    for (let i = 0; i < listacomentarios.length; i++) {
    const li = document.createElement("div");
    li.textContent = listacomentarios[i];
    li.className="tipocomentario"
    ulcomentarios.appendChild(li);
 listacomentarios.innerHTML=""
 listacomentarios=[]
fetch("https://proyecto-midosissegura.onrender.com/Guardarmensajesdelforo", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },

  body: JSON.stringify({
    NOMBRE: localStorage.getItem("nombreusuario"),
    APELLIDO: localStorage.getItem("apellidousuario"),
    Mensajenuevo:comentario
  })}).then(response => response.json())
    .then(data => {mensajes = data.Mensaje;
   nombre = data.Autor;
   if(nombre==localStorage.getItem("nombreusuario") + localStorage.getItem("apellidousuario")){
    const li = document.createElement("p");
    li.textContent = mensajes;
    li.className="tipocomentario"
    ulcomentariosusuario.appendChild(li);
    const li2 = document.createElement("p");
    li2.textContent = mensajes;
    li2.className="tipocomentarioblanco"
    ulcomentarios.appendChild(li2);
   }
   else{
    const li = document.createElement("p");
    li.textContent = mensajes;
    li.className="tipocomentariootro"
    ulcomentarios.appendChild(li);
    const li2 = document.createElement("p");
    li2.textContent = mensajes;
    li2.className="tipocomentarioblanco"
    ulcomentariosusuario.appendChild(li2);
   }
})

}});
fetch("http://localhost:3000/darmensajesalforo")
  .then(res => res.json())
  .then(data => {
       for (let i = 0; i < data.length; i++) {
   mensajes = data[i].Mensaje;
   nombre = data[i].Autor;
   if(nombre==localStorage.getItem("nombreusuario") + localStorage.getItem("apellidousuario")){
    const li = document.createElement("p");
    li.textContent = mensajes;
    li.className="tipocomentario"
    ulcomentariosusuario.appendChild(li);
    const li2 = document.createElement("p");
    li2.textContent = mensajes;
    li2.className="tipocomentarioblanco"
    ulcomentarios.appendChild(li2);
   }
   else{
    const li = document.createElement("p");
    li.textContent = mensajes;
    li.className="tipocomentariootro"
    ulcomentarios.appendChild(li);
    const li2 = document.createElement("p");
    li2.textContent = mensajes;
    li2.className="tipocomentarioblanco"
    ulcomentariosusuario.appendChild(li2);
   }}
  });
let btnatras = document.getElementById("btnatras");
btnatras.addEventListener("click", function () {
  window.location.href = "../paginageneralp/paginageneralp.html";
});



