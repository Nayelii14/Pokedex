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
  

document.querySelector("#registrar-btn").addEventListener("click",()=>{
    //value es para obtener el valor de los input de texto.
    let nombre = document.querySelector("#nombre-txt").value;
    //Tinymce para sacar la descripcion del pokemon.
    let descripcion = tinymce.get("descripcion-txt").getContent();
    //para verificar que el radiobutton este seleccionado.
    let legendario  = document.querySelector("#legendario-si").checked;
    //el tipo se obtiene igual que un input
    let tipo = document.querySelector("#tipo-select").value;

    console.log(nombre, descripcion, legendario, tipo);
    //alert("Hola Mundo" + nombre); //Ventana emergente, no recomendable, jode mucho
} );  