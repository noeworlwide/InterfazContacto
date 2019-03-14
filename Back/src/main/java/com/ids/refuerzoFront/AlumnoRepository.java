package com.ids.refuerzoFront;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ids.refuerzoFront.Alumno;


@Repository
public interface AlumnoRepository extends JpaRepository<Alumno, Long> {
	
}
