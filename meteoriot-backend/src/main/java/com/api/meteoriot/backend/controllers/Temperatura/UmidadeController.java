package com.api.meteoriot.backend.controllers.Temperatura;

import com.api.meteoriot.backend.dtos.Temperatura.TemperaturaDTO;
import com.api.meteoriot.backend.dtos.Temperatura.UmidadeDTO;
import com.api.meteoriot.backend.models.Temperatura.TemperaturaModel;
import com.api.meteoriot.backend.models.Temperatura.UmidadeModel;
import com.api.meteoriot.backend.services.Temperatura.UmidadeService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/umidade")
public class UmidadeController {
    final UmidadeService service;

    public UmidadeController(UmidadeService service){
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Object> salvarUmidade(@RequestBody @Valid UmidadeModel dto){
        var model = new UmidadeModel();
        BeanUtils.copyProperties(dto, model);
        return ResponseEntity.status(HttpStatus.CREATED).body(service.salvarUmidade(model));
    }

    @GetMapping
    public ResponseEntity<List<UmidadeModel>> getTodasUmidades(){
        return ResponseEntity.status(HttpStatus.OK).body(service.getUmidades());
    }

    @GetMapping(value = "/ultimaUmidade")
    public ResponseEntity<UmidadeModel> getUltimaUmidade(){
        Optional<UmidadeModel> ultimaUmidade = service.getUltimaUmidade();
        return ultimaUmidade.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping(value = "/{ID}")
    public ResponseEntity<Object> getUmidade(@PathVariable(value = "ID") UUID ID){
        Optional<UmidadeModel> umidade = service.getUmidade(ID);

        if(!umidade.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Essa umidade não existe.");

        return ResponseEntity.status(HttpStatus.OK).body(umidade.get());
    }

    @PutMapping(value = "/{ID}")
    public ResponseEntity<Object> alterarUmidade(@PathVariable(value = "ID") UUID ID,
                                                     @RequestBody @Valid UmidadeDTO dto){
        Optional<UmidadeModel> umidade = service.getUmidade(ID);

        if(!umidade.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Essa umidade não existe.");

        var model = umidade.get();
        model.setValorUmidade(dto.getValorUmidade());
        model.setDataUmidade(dto.getDataUmidade());
        model.setHoraUmidade(dto.getHoraUmidade());

        return ResponseEntity.status(HttpStatus.OK).body(service.salvarUmidade(model));
    }

    @DeleteMapping(value = "/{ID}")
    public ResponseEntity<Object> deletarUmidade(@PathVariable(value = "ID") UUID ID){
        Optional<UmidadeModel> umidade = service.getUmidade(ID);

        if(!umidade.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Essa umidade não existe.");

        service.deletarUmidade(umidade.get());
        return ResponseEntity.status(HttpStatus.OK).body("Umidade deletada.");
    }
}
