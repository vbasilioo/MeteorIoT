package com.api.meteoriot.backend.services;

import com.api.meteoriot.backend.models.UsuarioModel;
import com.api.meteoriot.backend.repositories.UsuarioRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {
    final UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository){
        this.repository = repository;
    }

    @Transactional
    public UsuarioModel salvar(UsuarioModel model){
        return repository.save(model);
    }

    public boolean emailExistente(String email){
        return repository.existsByEmail(email);
    }

    public List<UsuarioModel> getUsuarios(){
        return repository.findAll();
    }
}
