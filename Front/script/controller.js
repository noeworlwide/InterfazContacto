ContactosMVC.Controller = class Controller {
	constructor(props) {
    console.log(props);
		this.model = new props.model(props.endpoint);
		this.view = new props.view();
		this.eventosPersonalizados();
	}
  getData () {
		this.model.getContactos()
		.then(data => {
			this.view.listaOrdenada(data);
		})
		.catch(console.log);
	}
	guardaContacto(datos){
		this.model.agregarContacto(datos)
			.then(data => {
				this.view.limpiaFormulario();
				this.getData();
			})
			.catch(console.warn);
	}
	guardarContactoExistente(datos){
		this.model.editarContacto(datos)
		.then(data => {
			this.view.limpiaFormulario();
			this.getData();
		})
		.catch(console.warn);
	}
	borrarContacto(id){
		this.model.borrarContacto(id)
		.then(data => {
			//this.view.limpiaFormulario();
			console.log("confirmacion de eliminado");
			this.getData();
		})
		.catch(console.warn);
	}
	obtieneDatosFormulario(){
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
			this.guardaContacto(addContactoJson);
			M.Modal.getInstance(document.getElementById("modalNewContact")).open();
		}
		else if(tipoForm == "editar"){
			let id_contacto = document.getElementById('modalAdd').getAttribute('id-contact');
	    addContactoJson.id = parseInt(id_contacto);
			this.guardarContactoExistente(addContactoJson);
		}

	}
	busquedaContacto(palabraClave){
	  let temp;
	  var contactosBusqueda = [];
		let that = this;

	  ContactosMVC.arrayContactos.forEach(function(elemento){
	    temp = elemento.nombre.toUpperCase();
	    if(temp.includes(palabraClave.toUpperCase())){
	      contactosBusqueda.push(elemento);
	    }
	    that.view.pintaLista(contactosBusqueda);
	  })
	}
	eventosPersonalizados(){
		let that = this;

		const objFuncionalidadContacto = document.querySelector('#contactTable');
		objFuncionalidadContacto.addEventListener("click", function(e){
		   e.preventDefault();
		   let etiqueta = e.target;
		   let nuevaEtiqueta;
		   let tipoForm;
		   let datosContacto;


		   if(e.srcElement.localName == 'i'){
		     nuevaEtiqueta = etiqueta.parentNode.parentNode.parentNode;
		     tipoForm = etiqueta.parentNode.getAttribute('name');
		   }
		   else if (e.srcElement.localName == 'a'){
		     nuevaEtiqueta = etiqueta.parentNode.parentNode;
		     tipoForm = etiqueta.getAttribute('name');
		   }

		   if(e.srcElement.localName == 'a' || e.srcElement.localName == 'i'){
		     let idContacto = nuevaEtiqueta.getAttribute('id-contacto');
		     let datosContacto;
		     ContactosMVC.arrayContactos.forEach(function(element){
		        if(idContacto == element.id){
		          datosContacto = element;
		        }
		     });
		     if(tipoForm == "delete-contact"){
		       document.getElementById('deleteContactConfirm').setAttribute('idDeleteContact', datosContacto.id);
		       document.getElementById('deleteModalMensaje').innerHTML = '<b>' + datosContacto.nombre +'</b> sera borrado de tu lista de contactos';
		     }
		     else if(tipoForm == "edit-contact"){
		       that.view.editarContacto(datosContacto);
		       document.getElementById('modalAdd').setAttribute('form-type', 'editar');
		     }
		   }

		});

		const eAbrirModalAgregar= document.getElementById('buttonNewContact');
		eAbrirModalAgregar.addEventListener('click', (event) => {
			document.getElementById('modalAddTitle').innerHTML="Agregar contacto nuevo";
	    document.getElementById('buttonConfimAdd').innerHTML="Agregar Contacto";
			document.getElementById('modalAdd').setAttribute('form-type', 'agregar');
	    document.getElementById('modalAdd').removeAttribute('id-contact');
			console.warn("Se oprimio boton agregar");
			that.view.limpiaFormulario();
		});

		const eMsjConfirmarContacto = document.getElementById('buttonConfimAdd');
		eMsjConfirmarContacto.addEventListener("click", function(e){
		  //let etiqueta = e.target;
		   e.preventDefault();
		   var tipoForm = document.getElementById('modalAdd').getAttribute('form-type');

		   if(tipoForm == 'editar'){
		     document.getElementById('modal-confirm-text').innerHTML = '¿Deseas MODIFICAR a <b>' + document.getElementById('add-contact-name').value +'</b>?';
		     document.getElementById('buttonConfirmAccept').innerHTML= 'Actualizar Contacto';
		   }
		   else if(tipoForm == 'agregar') {
		     document.getElementById('modal-confirm-text').innerHTML = 'Deseas AGREGAR a <b>' + document.getElementById('add-contact-name').value +'</b>';
		     document.getElementById('buttonConfirmAccept').innerHTML= 'Agregar Nuevo Contacto';
		   }

		});

		const eConfirmacionGuardarContacto = document.getElementById('buttonConfirmAccept');
		eConfirmacionGuardarContacto.addEventListener("click", function(e){
		   //e.preventDefault();
		   M.Modal.getInstance(document.getElementById("modalAddConfirm")).close();
		   M.Modal.getInstance(document.getElementById("modalAdd")).close();
		   that.obtieneDatosFormulario();
		});

		const eConfrimarBorrarContacto= document.getElementById('deleteContactConfirm');
		eConfrimarBorrarContacto.addEventListener("click", function(e){
		   //e.preventDefault();
		   that.borrarContacto(e.target.getAttribute('idDeleteContact'));
		});

		const ePreguntaNuevoContacto = document.getElementById('buttonAddNewContact');
		ePreguntaNuevoContacto.addEventListener("click", function(e){
		   e.preventDefault();
		   M.Modal.getInstance(document.getElementById("modalAdd")).open();
		});

		const eBusquedaContactos = document.querySelector('#busqueda');
		eBusquedaContactos.addEventListener("keyup", function(e){
		   e.preventDefault();
		   var palabraClave = document.getElementById('busqueda').value;
		   if(palabraClave.length > 0){
		     that.busquedaContacto(palabraClave);
		   }else{
		     //pintaLista(arrayListaOrdenada);
				 that.view.pintaLista(ContactosMVC.arrayContactos);
		   }
		 });
	}
}
