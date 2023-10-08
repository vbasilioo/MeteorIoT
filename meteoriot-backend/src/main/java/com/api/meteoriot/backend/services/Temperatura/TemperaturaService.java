package com.api.meteoriot.backend.services.Temperatura;

import com.api.meteoriot.backend.models.Temperatura.TemperaturaModel;
import com.api.meteoriot.backend.repositories.Temperatura.TemperaturaRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TemperaturaService {
    final TemperaturaRepository repository;

    public TemperaturaService(TemperaturaRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public TemperaturaModel salvarTemperatura(TemperaturaModel model){
        return repository.save(model);
    }

    public List<TemperaturaModel> getTemperaturas(){
        return repository.findAll();
    }

    public Optional<TemperaturaModel> getTemperatura(UUID ID){
        return repository.findById(ID);
    }

    @Transactional
    public void deletarTemperatura(TemperaturaModel model){
        repository.delete(model);
    }
}
