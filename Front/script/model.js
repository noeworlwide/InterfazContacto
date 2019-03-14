ContactosMVC.Model = class Persona {
	constructor(endpoint) {
		this.endpoint = endpoint;
		//this.modelData = {};
	}
  getContactos(){
    return fetch(`${this.endpoint}/api/contactos/`,{
            method : 'GET'
    })
		.then(resp => {
			if (resp.ok) {
				return resp.json();
			}
			return Error("No se pudieron obtener los datos");
		})
		.then(data => {
			return data;
		})
  }
	agregarContacto(datos){
		let datosEnviar = JSON.stringify(datos);
		return fetch(`${this.endpoint}/api/contactos/`,{
			method : 'POST',
			body: datosEnviar,
			headers: {"Content-Type": "application/json"}
		})
		.then(resp => {
			if (resp.ok) {
				return resp.json();
			}
			return Error("No se obtuvo respuesta");
		})
		.then(data => {
			return data;
		})
		.catch()
	}
	editarContacto(datos){
		let datosEnviar = JSON.stringify(datos);
		return fetch(`${this.endpoint}/api/contactos/${datos.id}`,{
			method : 'PUT',
			body: datosEnviar,
			headers: {"Content-Type": "application/json"}
		})
		.then(resp => {
			if (resp.ok) {
				return resp.json();
			}
			return Error("No se obtuvo respuesta");
		})
		.then(data => {
			console.warn("**** guardo contacto ****");
			return data;
		})
		.catch()
	}
	borrarContacto(id){
		return fetch(`${this.endpoint}/api/contactos/${id}`,{
			method : 'DELETE',
			headers: {"Content-Type": "application/json"}
		})
		.then(resp => {
			if (resp.ok) {
				return resp.json();
			}
			return Error("No se obtuvo respuesta");
		})
		.then(data => {
			console.warn("**** guardo contacto ****");
			return data;
		})
		.catch()

	}
  setModelo(data) {
		console.warn(data);
	}
}
