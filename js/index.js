document.querySelector("#registrar-btn").addEventListener("click",()=>{
    let nombre=document.querySelector("#nombre-txt").value;

    //console.log("HOLA MUNDO", nombre);
    alert("Hola Mundo" + nombre); //Ventana emergente, no recomendable, jode mucho
} );