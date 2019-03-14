console.warn("entro al script");
let datos = {};
const miPromesa = new Promise(function(resolve, reject){

});

function sendRequest(metodo, url){
  const request = new XMLHttpRequest();
  //request.open('GET', 'http://127.0.0.1:8080/api/contactos/', true);
  request.open(metodo, url, true);

  request.addEventListener('load', () => {
    if(request.status === 200){

      let data = JSON.parse(request.response);
      datos = data;
      console.warn(datos);

      data.forEach(function(element) {
        var node = document.createElement("div");
        node.innerHTML = element.nombre + ' -- ' + element.telefono_personal +' -- ELIMINAR' ;
        //onsole.error(element.nombre element.telefono_personal`);
        document.getElementById('contact_table').appendChild(node);
      });
      //document.getElementById('contact_table').innerHTML = data[0].nombre;

    }
    else {
      console.warn(request.status, request.statusText);
    }
  });

  request.addEventListener('error', (error) => {
    console.warn(error);
  });

  request.send(null);

}

var algo = sendRequest('GET', 'http://127.0.0.1:8080/api/contactos/');









const objBotonAdd = document.getElementById("show-add-contacts");
objBotonAdd.addEventListener("click", function(e){
  e.preventDefault();
  document.getElementById("agregar-contactos").classList.replace('elemento-oculto', 'elemento-visible');
  document.getElementById("consulta-contactos").classList.replace('elemento-visible', 'elemento-oculto');

  console.log();

  console.log("Vista de Agregar Contacto");
});

const objBotonList = document.getElementById("show-list-contacts");
objBotonList.addEventListener("click", function(e){
  e.preventDefault();
  document.getElementById("consulta-contactos").classList.replace('elemento-oculto', 'elemento-visible');
  //document.getElementById("agregar-contactos").classList.replace('elemento-visible', 'elemento-oculto');
  //document.getElementById("consulta-contactos").classList.add('elemento-visible');

  console.log("Lista de Contactos");
  consultaContactos();
});
