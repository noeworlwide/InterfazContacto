package com.ids.refuerzoFront;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service 
public class AlumnoImplement implements AlumnoService {

	@Autowired
	private AlumnoRepository alumnoRepository;
	
	public void setAlumnoRepository(AlumnoRepository alumnoRepository) {
		this.alumnoRepository = alumnoRepository;
	}
	@Override
	public List<Alumno> consultaAlumno() {
		// TODO Auto-generated method stub
		List<Alumno> alumno = alumnoRepository.findAll();
		return alumno;
	}

	@Override
	public Alumno consultaAlumno(Long alumnoId) {
		// TODO Auto-generated method stub
		/*
		 * Alumno alumno = alumnoRepository.getOne(alumnoId);
		return alumno;
		*/
		
		
		 Optional<Alumno> optAlumno = alumnoRepository.findById(alumnoId);
		 return optAlumno.get(); 
		 
	}

	@Override
	public void guardarAlumno(Alumno alumno) {
		// TODO Auto-generated method stub
		alumnoRepository.save(alumno);
		//return "{\"success\":1}";
	}

	@Override
	public void borraAlumno(Long alumnoId) {
		// TODO Auto-generated method stub
		alumnoRepository.deleteById(alumnoId);
		
	}

	@Override
	public void actualizaALumno(Alumno alumno) {
		// TODO Auto-generated method stub
		alumnoRepository.save(alumno);
		
	}


}
