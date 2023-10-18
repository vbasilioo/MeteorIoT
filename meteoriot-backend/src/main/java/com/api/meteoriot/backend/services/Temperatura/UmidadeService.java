package com.api.meteoriot.backend.services.Temperatura;

import com.api.meteoriot.backend.models.Temperatura.TemperaturaModel;
import com.api.meteoriot.backend.models.Temperatura.UmidadeModel;
import com.api.meteoriot.backend.repositories.Temperatura.UmidadeRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UmidadeService {
    final UmidadeRepository repository;

    public UmidadeService(UmidadeRepository repository){
        this.repository = repository;
    }

    @Transactional
    public UmidadeModel salvarUmidade(UmidadeModel model){
        return repository.save(model);
    }

    public List<UmidadeModel> getUmidades(){
        return repository.findAll();
    }

    public Optional<UmidadeModel> getUmidade(UUID ID){
        return repository.findById(ID);
    }

    @Transactional
    public void deletarUmidade(UmidadeModel model){
        repository.delete(model);
    }

    public Optional<UmidadeModel> getUltimaUmidade(){
        return repository.findTopByOrderByDataUmidadeDesc();
    }
}
