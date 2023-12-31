package com.api.meteoriot.backend.repositories.Temperatura;

import com.api.meteoriot.backend.models.Temperatura.TemperaturaModel;
import com.api.meteoriot.backend.models.Temperatura.UmidadeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UmidadeRepository extends JpaRepository<UmidadeModel, UUID> {
    Optional<UmidadeModel> findTopByOrderByDataUmidadeDesc();
}
