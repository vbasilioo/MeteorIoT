package com.api.meteoriot.backend.controllers.Temperatura;

import com.api.meteoriot.backend.dtos.Temperatura.TemperaturaDTO;
import com.api.meteoriot.backend.models.Temperatura.TemperaturaModel;
import com.api.meteoriot.backend.services.Temperatura.TemperaturaService;
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
@RequestMapping(value = "/temperatura")
public class TemperaturaController {
    final TemperaturaService service;

    public TemperaturaController(TemperaturaService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Object> salvarTemperatura(@RequestBody @Valid TemperaturaModel dto){
        var model = new TemperaturaModel();
        BeanUtils.copyProperties(dto, model);
        return ResponseEntity.status(HttpStatus.CREATED).body(service.salvarTemperatura(model));
    }

    @GetMapping
    public ResponseEntity<List<TemperaturaModel>> getTodasTemperaturas(){
        return ResponseEntity.status(HttpStatus.OK).body(service.getTemperaturas());
    }

    @GetMapping(value = "/ultimaTemperatura")
    public ResponseEntity<TemperaturaModel> getUltimaTemperatura(){
        Optional<TemperaturaModel> ultimaTemperatura = service.getUltimaTemperatura();
        return ultimaTemperatura.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping(value = "/{ID}")
    public ResponseEntity<Object> getTemperatura(@PathVariable(value = "ID")UUID ID){
        Optional<TemperaturaModel> temperatura = service.getTemperatura(ID);

        if(!temperatura.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Essa temperatura não existe.");

        return ResponseEntity.status(HttpStatus.OK).body(temperatura.get());
    }

    @PutMapping(value = "/{ID}")
    public ResponseEntity<Object> alterarTemperatura(@PathVariable(value = "ID") UUID ID,
                                                     @RequestBody @Valid TemperaturaDTO dto){
        Optional<TemperaturaModel> temperatura = service.getTemperatura(ID);

        if(!temperatura.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Essa temperatura não existe.");

        var model = temperatura.get();
        model.setValorTemperatura(dto.getValorTemperatura());
        model.setTipoTemperatura(dto.getTipoTemperatura());
        model.setDataTemperatura(dto.getDataTemperatura());
        model.setHoraTemperatura(dto.getHoraTemperatura());

        return ResponseEntity.status(HttpStatus.OK).body(service.salvarTemperatura(model));
    }

    @DeleteMapping(value = "/{ID}")
    public ResponseEntity<Object> deletarTemperatura(@PathVariable(value = "ID") UUID ID){
        Optional<TemperaturaModel> temperatura = service.getTemperatura(ID);

        if(!temperatura.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Essa temperatura não existe.");

        service.deletarTemperatura(temperatura.get());
        return ResponseEntity.status(HttpStatus.OK).body("Temperatura deletada.");
    }
}
