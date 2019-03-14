package com.ids.refuerzoFront;

import java.util.List;

public interface AlumnoService {
	public List<Alumno> consultaAlumno();
	public Alumno consultaAlumno(Long alumnoId);
	public void guardarAlumno(Alumno alumno);
	public void borraAlumno(Long alumnoId);
	public void actualizaALumno(Alumno alumno);
}
