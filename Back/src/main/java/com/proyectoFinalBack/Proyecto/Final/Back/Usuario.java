package com.proyectoFinalBack.Proyecto.Final.Back;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="USUARIO")
public class Usuario {
	
	@Id
	private Long id;
	@Column(name="USUARIO")
	private String usuario;

	public Usuario() {
		// TODO Auto-generated constructor stub
		super();
	}
	public Usuario(Long id, String usuario) {
		this.id = id;
		this.usuario = usuario;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	

}
