package com.proyectoFinalBack.Proyecto.Final.Back;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
class ContactoController {
	@Autowired
	private ContactoService contactoService;
	
	public void setContactoService(ContactoService contactoService) {
		this.contactoService = contactoService;
	}
	
	@GetMapping("/api/contactos")
	public List<Contacto> consultaContactos(){
		List<Contacto> contactos = contactoService.consultaContactos();
		return contactos;
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/api/contactos/{contactoId}")
	public Contacto consultaContacto (@PathVariable(name="contactoId")Long contactoId) {
	return contactoService.consultaContacto(contactoId);	
	}
	
	@CrossOrigin(origins = "*")
	@PostMapping("/api/contactos")
	public String  guardarContacto(@RequestBody Contacto contacto) {
		contactoService.guardarContacto(contacto);
		System.out.println("Contacto guardado con éxito");
		return "{\"success\":1}";
	}
	@CrossOrigin(origins = "*")
	@DeleteMapping("/api/contactos/{contactoId}")
	public String borrarContacto(@PathVariable(name="contactoId")Long contactoId) {
		contactoService.borrarContacto(contactoId);
		System.out.println("Contacto Eliminado con éxito");
		return "{\"success\":1}";
	}
	
	@CrossOrigin(origins = "*")
	@PutMapping("/api/contactos/{contactoId}")
	public String editarContacto(@RequestBody Contacto contacto, @PathVariable(name="contactoId")Long contactoId) {
		Contacto emp = contactoService.consultaContacto(contactoId);
		String mensaje = null;
		
		if(emp != null) {
			contactoService.editarContacto(contacto);
			System.out.println("Contacto EDITADO con éxito");
			mensaje =  "{\"success\":1}";
		}
		
		return mensaje;
	}
	

}
