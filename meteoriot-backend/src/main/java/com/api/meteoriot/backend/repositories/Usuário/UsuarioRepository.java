package com.api.meteoriot.backend.repositories.Usuário;

import com.api.meteoriot.backend.models.Usuário.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioModel, UUID> {
    boolean existsByEmail(String email);
    UsuarioModel findByEmail(String email);
}
