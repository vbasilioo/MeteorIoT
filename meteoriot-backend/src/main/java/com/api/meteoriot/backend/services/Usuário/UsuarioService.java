package com.api.meteoriot.backend.services.Usuário;

import com.api.meteoriot.backend.models.Usuário.UsuarioModel;
import com.api.meteoriot.backend.repositories.Usuário.UsuarioRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

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

    public Optional<UsuarioModel> getUsuarioPorId(UUID ID){
        return repository.findById(ID);
    }

    @Transactional
    public void deletar(UsuarioModel model){ repository.delete(model); }

    public UsuarioModel autenticarUsuario(String email, String senha){
        UsuarioModel model = repository.findByEmail(email);

        if(model != null && model.getSenha().equals(senha))
            return model;

        return null;
    }
}
