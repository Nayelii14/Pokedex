//plugin
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
const listapokemon = [];

const cargartabla = ()=>{
  //1. Obtener una referencia de la tabla.
  let tbody = document.querySelector("#tabla-tbody");
  //limpiar la lista para que no se guarden repetidamente.
  tbody.innerHTML = "";
  //2. Recorrer la lista
  for(let i=0; i < listapokemon.length; ++i){
    let p = listapokemon[i];
    //3. Generar un pokemon por cada fila(tr).
    let tr = document.createElement("tr");
    //4. Por cada atributo generar celdas(td).
    let tdNumero = document.createElement("td");
    tdNumero.innerText = (i+1);
    let tdNombre = document.createElement("td");
    tdNombre.innerText = p.nombre;
    //COLOCAR ICONOS
    let tdTipo = document.createElement("td");
    let icono = document.createElement("i");
    if (p.tipo == "fuego"){
      //<i class="fas fa-fire-alt"></i>
      icono.classList.add("fas","fa-fire-alt", "text-danger", "fa-3x");
    }else if (p.tipo == "planta"){
      //<i class="fal fa-leaf"></i>
      icono.classList.add("fas","fa-leaf","text-success", "fa-3x");
    }else if (p.tipo == "agua"){
      //<i class="fas fa-tint"></i>
      icono.classList.add("fas", "fa-tint","text-info", "fa-3x")
    }else if (p.tipo == "normal"){
      //<i class="fas fa-bullseye"></i>
      icono.classList.add("fas", "fa-bullseye", "text-secondary", "fa-3x")
    }else{
      //<i class="fas fa-bolt"></i>
      icono.classList.add("fas", "fa-bolt","text-warning", "fa-3x");
    }
    tdTipo.appendChild(icono)//agregar icono a la tabla
    let tdDescripcion = document.createElement("td");
    tdDescripcion.innerHTML = p.descripcion;
    let tdAcciones = document.createElement("td");

    //5. Agregar celdas al tr.
    tr.appendChild(tdNumero);
    tr.appendChild(tdNombre);
    tr.appendChild(tdTipo);
    tr.appendChild(tdDescripcion);
    //5. Agregar el tr a la tabla.
    tbody.appendChild(tr);
    //Swal.fire("Bien!","El pokemon ha sido registrado.", "success");
  }
};
//console.log(tbody);
document.querySelector("#registrar-btn").addEventListener("click",()=>{
    //value es para obtener el valor de los input de texto.
    let nombre = document.querySelector("#nombre-txt").value;
    //Tinymce para sacar la descripcion del pokemon.
    let descripcion = tinymce.get("descripcion-txt").getContent();
    //para verificar que el radiobutton este seleccionado.
    let legendario  = document.querySelector("#legendario-si").checked;
    //el tipo se obtiene igual que un input
    let tipo = document.querySelector("#tipo-select").value;

    //Como crear un objeto
    let pokemon = {};
    //Características del objeto
    pokemon.nombre = nombre;
    pokemon.descripcion = descripcion;
    pokemon.legendario = legendario;
    pokemon.tipo = tipo;
    
    //Como guardar en una lista de elemento.
    listapokemon.push(pokemon); //append. Para agregar cosas a la lista.
    cargartabla();
    Swal.fire("Bien!","El pokemon ha sido registrado.", "success");

    //alert("Hola Mundo" + nombre); //Ventana emergente, no recomendable, jode mucho
} );  