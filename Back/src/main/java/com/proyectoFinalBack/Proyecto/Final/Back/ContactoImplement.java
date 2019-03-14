package com.proyectoFinalBack.Proyecto.Final.Back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ContactoImplement implements ContactoService {
	
	@Autowired
	private ContactoRepository contactoRepository;
	
	public void setContactoRepository(ContactoRepository contactoRepository) {
		this.contactoRepository = contactoRepository;
	}

	@Override
	public List<Contacto> consultaContactos() {
		// TODO Auto-generated method stub
		List<Contacto> contacto = contactoRepository.findAll();
		return contacto;
	}

	@Override
	public Contacto consultaContacto(Long contactoId) {
		// TODO Auto-generated method stub
		Optional<Contacto> optContacto = contactoRepository.findById(contactoId);
		return optContacto.get();
		
	}

	@Override
	public void guardarContacto(Contacto contacto) {
		contactoRepository.save(contacto);
		System.out.println("Contacto guardado con éxito");
		
	}
	
	@Override
	public void borrarContacto(Long contactoId) {
		contactoRepository.deleteById(contactoId);
		System.out.println("Contacto eliminado con éxito");
	}
	
	@Override
	public void editarContacto(Contacto contacto) {
		contactoRepository.save(contacto);
		System.out.println("Contacto eliminado con éxito");
	}

}
