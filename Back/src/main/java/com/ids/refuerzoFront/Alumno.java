package com.ids.refuerzoFront;

//import org.hibernate.annotations.Entity;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;


//Modelo
@Entity
@Table(name="ALUMNO")
public class Alumno {
	@Id
	private Long id;
	@Column(name="NOMBRE_ALUMNO")
	private String nombre;
	@Column(name="EDAD")
	private String edad;
	@Column(name="EMAIL")
	private String email;
	@Column(name="TELEFONO")
	private String telefono;
	@Column(name="SEXO")
	private char sexo;
	@Column(name="COLOR")
	private String color;
	
	public Alumno() {
		super();
	}
	
	public Alumno(Long id, String nombre, String edad, String email, String telefono, char sexo, String color) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
        this.sexo = sexo;
        this.color = color;
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

	public String getEdad() {
		return edad;
	}

	public void setEdad(String edad) {
		this.edad = edad;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public char getSexo() {
		return sexo;
	}

	public void setSexo(char sexo) {
		this.sexo = sexo;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}


}
