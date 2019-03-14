package com.proyectoFinalBack.Proyecto.Final.Back;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="CONTACTO")
public class Contacto {
	
	@Id
	@GeneratedValue
	private Long id;
	@Column(name="NOMBRE_CONTACTO")
	private String nombre;
	@Column(name="TELEFONO_PERSONAL")
	private String telefono_personal;
	@Column(name="TELEFONO_OFICINA")
	private String telefono_oficina;
	@Column(name="CORREO_PERSONAL")
	private String correo_personal;
	@Column(name="CORREO_OFICINA")
	private String correo_oficina;
	@Column(name="FECHA_CUMPLEANOS")
	private String fecha_cumpleanos;
	
	

	public Contacto() {
		// TODO Auto-generated constructor stub
		super();
	}
	
	public Contacto(Long id, String nombre, String telefono_personal, String telefono_oficina, String correo_personal, String correo_oficina, String fecha_cumpleanos) {
		this.id = id;
		this.nombre = nombre;
		this.telefono_personal = telefono_personal;
		this.telefono_oficina = telefono_oficina;
		this.correo_personal = correo_personal;
		this.correo_oficina = correo_oficina;
		this.fecha_cumpleanos = fecha_cumpleanos;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getTelefono_personal() {
		return telefono_personal;
	}

	public void setTelefono_personal(String telefono_personal) {
		this.telefono_personal = telefono_personal;
	}

	public String getTelefono_oficina() {
		return telefono_oficina;
	}

	public void setTelefono_oficina(String telefono_oficina) {
		this.telefono_oficina = telefono_oficina;
	}

	public String getCorreo_personal() {
		return correo_personal;
	}

	public void setCorreo_personal(String correo_personal) {
		this.correo_personal = correo_personal;
	}

	public String getCorreo_oficina() {
		return correo_oficina;
	}

	public void setCorreo_oficina(String correo_oficina) {
		this.correo_oficina = correo_oficina;
	}

	public String getFecha_cumpleanos() {
		return fecha_cumpleanos;
	}

	public void setFecha_cumpleanos(String fecha_cumpleanos) {
		this.fecha_cumpleanos = fecha_cumpleanos;
	}


}
