ContactosMVC.View = class View {
	constructor(elem) {
		this.eventHandler();
		this.elem = elem;
	}
	eventHandler () {
		//Inicializacion de elementos de Materialize
		document.addEventListener('DOMContentLoaded', function() {
		  var elems = document.querySelectorAll('.modal');
		  var instances = M.Modal.init(elems);
		});
		document.addEventListener('DOMContentLoaded', function() {
		    var elems = document.querySelectorAll('.datepicker');
		    var instances = M.Datepicker.init(elems);
		});
		document.addEventListener('DOMContentLoaded', function() {
		   var elems = document.querySelectorAll('.fixed-action-btn');
		   var instances = M.FloatingActionButton.init(elems, {
		     direction: 'left',
		     hoverEnabled: false
		   });

		 });
	 document.addEventListener('DOMContentLoaded', function() {
   		var elems = document.querySelectorAll('.pushpin');
   		var instances = M.Pushpin.init(elems);
   });
	 // document.addEventListener('DOMContentLoaded', function() {
   //  var elems = document.querySelectorAll('.sidenav');
   //  var instances = M.Sidenav.init(elems);
  	// });

	}
  pintaLista(datos){
    document.getElementById('contactTable').innerHTML = "";
    datos.forEach(function(element) {
      let node = document.createElement("div");
      let nodeColumName = document.createElement("div");
      let nodeColumTelephone = document.createElement("div");
      let nodeColumEdit = document.createElement("div");
      let nodeColumDelete = document.createElement("div");

      node.setAttribute("class", "row");
      node.setAttribute("id-contacto", element.id);
      node.setAttribute("id", 'lista-contacto-'+element.id);
      nodeColumName.setAttribute("class", "col s5");
      nodeColumName.innerHTML = `<a class="modal-trigger" name="edit-contact" href="#modalAdd" > ${element.nombre}</a>` ;
      nodeColumTelephone.setAttribute("class", "col s5");
      nodeColumTelephone.innerHTML = element.telefono_personal;
      nodeColumEdit.setAttribute("class", "col s1");
      nodeColumEdit.innerHTML = '<a class="modal-trigger" name="edit-contact" href="#modalAdd" >'+  //name-contacto="'+element.nombre+'"  id-contacto="'+element.id+'"
       '<i class="material-icons">border_color</i></a>';
      nodeColumDelete.setAttribute("class", "col s1");
      nodeColumDelete.innerHTML = '<a class="classname modal-trigger" name="delete-contact" href="#modalDelete">'+   //name-contacto="'+element.nombre+'"  id-contacto="'+element.id+'"
        '<i class="material-icons">delete</i></a>';


      node.appendChild(nodeColumName);
      node.appendChild(nodeColumTelephone);
      node.appendChild(nodeColumEdit);
      node.appendChild(nodeColumDelete);

      document.getElementById('contactTable').appendChild(node);
    });

  }
	listaOrdenada(datos){
	  var arrayListaOrdenada = [];
	  var nodeOption;
	  let arrayNombres = [], arrayNombresOrdenada = [];
		let nombreTemporal;
	  datos.forEach(function(element){
			nombreTemporal = element.nombre.toUpperCase();
	    arrayNombres.push(nombreTemporal);
	  });

	  arrayNombresOrdenada = arrayNombres.sort();
		console.warn(arrayNombresOrdenada);
	  arrayNombresOrdenada.forEach(function(elementOrder){
	    datos.forEach(function(elementArray){
	      if(elementOrder == elementArray.nombre.toUpperCase()){
	        arrayListaOrdenada.push(elementArray);
	      }
	    });
	  });
		ContactosMVC.arrayContactos = arrayListaOrdenada;
	  this.pintaLista(arrayListaOrdenada)

	}
	limpiaFormulario(){
	  document.getElementById('add-contact-name').value = "";
	  document.getElementById('add-contact-tel-per').value = "";
	  document.getElementById('add-contact-tel-ofi').value = "";
	  document.getElementById('add-contact-email-per').value = "";
	  document.getElementById('add-contact-email-ofi').value = "";
	  document.getElementById('add-contact-birthday').value = "";
	}
	guardarContacto(){
	  //event.preventDefault();
	  //let datos = document.querySelectorAll(".add-new-form");
	  let addContactoJson = {};
	  let nombre, telefono_oficina, telefono_personal, correo_personal, correo_oficina, fecha_cumpleanos;
	  let tipoForm = document.getElementById('modalAdd').getAttribute('form-type');

	  nombre            = document.getElementById('add-contact-name').value;
	  telefono_personal = document.getElementById('add-contact-tel-per').value;
	  telefono_oficina  = document.getElementById('add-contact-tel-ofi').value;
	  correo_personal   = document.getElementById('add-contact-email-per').value;
	  correo_oficina    = document.getElementById('add-contact-email-ofi').value;
	  fecha_cumpleanos  = document.getElementById('add-contact-birthday').value;

	  addContactoJson = {
	    "nombre"            : nombre,
	    "telefono_personal" : telefono_personal,
	    "telefono_oficina"  : telefono_oficina,
	    "correo_personal" : correo_personal,
	    "correo_oficina" : correo_oficina,
	    "fecha_cumpleanos" : fecha_cumpleanos
	  };

	  if(tipoForm == "agregar"){
			console.warn("llego por acaaaa");
			console.warn(addContactoJson);
	    // const request = new XMLHttpRequest();
	    // request.open('POST', 'http://localhost:8080/api/contactos/', true);
			//
	    // request.addEventListener('load', () => {
	    //   if(request.status === 200){
			//
	    //     let data = JSON.parse(request.response);
	    //     datos = data;
	    //     consultaContactos();
	    //     clearForm();
	    //     M.Modal.getInstance(document.getElementById("modalNewContact")).open();
			//
	    //   }
	    //   else {
	    //     console.warn(request.status, request.statusText);
	    //   }
	    // });
			//
	    // request.addEventListener('error', (error) => {
	    //   console.warn(error);
	    // });
			//
	    // request.setRequestHeader("Content-Type", "application/json");
	    // request.send(JSON.stringify(addContactoJson));

	    //request.send(addContactoJson);

	  }
	  else if(tipoForm == "editar"){
	    let id_contacto = document.getElementById('modalAdd').getAttribute('id-contact', datos.id);
	    addContactoJson.id = parseInt(id_contacto);
	    var jsontext = JSON.stringify(addContactoJson);

	    fetch('http://127.0.0.1:8080/api/contactos/'+addContactoJson.id, {
	          method : 'PUT',
	          body: jsontext,
	          headers: {"Content-Type": "application/json"}
	      })
	      .then(res => {
	        consultaContactos();
	      })
	      .catch()


	  }

	}
	editarContacto(datos){
	  document.getElementById('add-contact-name').value = datos.nombre;
	  document.getElementById('add-contact-tel-per').value = datos.telefono_personal;
	  document.getElementById('add-contact-tel-ofi').value = datos.telefono_oficina;
	  document.getElementById('add-contact-email-per').value = datos.correo_personal;
	  document.getElementById('add-contact-email-ofi').value = datos.correo_oficina;
	  document.getElementById('add-contact-birthday').value = datos.fecha_cumpleanos;

	  document.getElementById('modalAdd').setAttribute('id-contact', datos.id);
	  document.getElementById('modalAddTitle').innerHTML="";
	  document.getElementById('buttonConfimAdd').innerHTML="Editar Contacto";

	}
}
