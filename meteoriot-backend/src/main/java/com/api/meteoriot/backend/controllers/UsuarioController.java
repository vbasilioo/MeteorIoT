package com.api.meteoriot.backend.controllers;

import com.api.meteoriot.backend.dtos.UsuarioDTO;
import com.api.meteoriot.backend.models.UsuarioModel;
import com.api.meteoriot.backend.services.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    final UsuarioService service;

    public UsuarioController(UsuarioService service){
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Object> salvarUsuario(@RequestBody @Valid UsuarioDTO dto){

        if(service.emailExistente(dto.getEmail()))
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Conflito: Esse e-mail já está em uso.");

        var model = new UsuarioModel();
        BeanUtils.copyProperties(dto, model);
        return ResponseEntity.status(HttpStatus.OK).body(service.salvar(model));
    }

    @GetMapping
    public ResponseEntity<List<UsuarioModel>> getTodosUsuarios(){
        return ResponseEntity.status(HttpStatus.OK).body(service.getUsuarios());
    }
}
