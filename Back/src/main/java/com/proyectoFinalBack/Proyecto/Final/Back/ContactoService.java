package com.proyectoFinalBack.Proyecto.Final.Back;

import java.util.List;


public interface ContactoService {
	public List<Contacto> consultaContactos();
	public Contacto consultaContacto(Long contactoId);
	public void guardarContacto(Contacto contacto);
	public void borrarContacto(Long contactoId);
	public void editarContacto(Contacto contacto);
}
