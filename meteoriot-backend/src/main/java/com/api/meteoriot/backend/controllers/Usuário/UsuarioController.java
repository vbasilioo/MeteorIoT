package com.api.meteoriot.backend.controllers.Usuário;

import com.api.meteoriot.backend.dtos.Usuário.UsuarioDTO;
import com.api.meteoriot.backend.models.Usuário.UsuarioModel;
import com.api.meteoriot.backend.services.Usuário.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
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

    @GetMapping("/{usuarioId}")
    public ResponseEntity<Object> getUsuario(@PathVariable(value = "ID") UUID ID){
        Optional<UsuarioModel> usuario = service.getUsuarioPorId(ID);

        if(!usuario.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Esse usuário não existe.");

        return ResponseEntity.status(HttpStatus.OK).body(usuario.get());
    }

    @DeleteMapping("/{usuarioId}")
    public ResponseEntity<Object> deletarUsuario(@PathVariable(value = "ID") UUID ID){
        Optional<UsuarioModel> usuario = service.getUsuarioPorId(ID);

        if(!usuario.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Esse usuário não existe.");

        service.deletar(usuario.get());
        return ResponseEntity.status(HttpStatus.OK).body("Usuário deletado.");
    }

    @PutMapping("/{usuarioId}")
    public ResponseEntity<Object> alterarUsuario(@PathVariable(value = "ID") UUID ID,
                                                 @RequestBody @Valid UsuarioDTO dto){
        Optional<UsuarioModel> usuario = service.getUsuarioPorId(ID);

        if(!usuario.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Esse usuário não existe.");

        var usuarioModel = usuario.get();
        usuarioModel.setEmail(dto.getEmail());
        usuarioModel.setNome(dto.getName());
        usuarioModel.setSenha(dto.getSenha());
        usuarioModel.setTelefone(dto.getTelefone());

        return ResponseEntity.status(HttpStatus.OK).body(service.salvar(usuarioModel));
    }

    @PostMapping("/autenticar")
    public ResponseEntity<Object> autenticarUsuario(@RequestBody Map<String, String> credenciais){
        String email = credenciais.get("email");
        String senha = credenciais.get("senha");

        UsuarioModel usuarioAutenticado = service.autenticarUsuario(email, senha);

        if(usuarioAutenticado != null)
            return ResponseEntity.ok(usuarioAutenticado);
        else
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Autenticação falha.");
    }
}
