package com.proyectoFinalBack.Proyecto.Final.Back;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository; 

@Repository
public interface ContactoRepository extends JpaRepository<Contacto, Long> {

}
