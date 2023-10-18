package com.api.meteoriot.backend.models.Temperatura;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

@Entity
@Table(name = "umidade")
public class UmidadeModel implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID ID;
    private Double valorUmidade;
    private LocalDate dataUmidade;
    private LocalTime horaUmidade;

    public UUID getID() {
        return ID;
    }

    public void setID(UUID ID) {
        this.ID = ID;
    }

    public Double getValorUmidade() {
        return valorUmidade;
    }

    public void setValorUmidade(Double valorUmidade) {
        this.valorUmidade = valorUmidade;
    }

    public LocalDate getDataUmidade() {
        return dataUmidade;
    }

    public void setDataUmidade(LocalDate dataUmidade) {
        this.dataUmidade = dataUmidade;
    }

    public LocalTime getHoraUmidade() {
        return horaUmidade;
    }

    public void setHoraUmidade(LocalTime horaUmidade) {
        this.horaUmidade = horaUmidade;
    }
}
