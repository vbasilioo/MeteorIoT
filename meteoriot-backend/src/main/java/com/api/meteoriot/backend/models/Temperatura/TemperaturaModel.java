package com.api.meteoriot.backend.models.Temperatura;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

@Entity
@Table(name = "temperatura")
public class TemperaturaModel implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID ID;

    private Double valorTemperatura;
    private String tipoTemperatura;
    private LocalDate dataTemperatura;
    private LocalTime horaTemperatura;

    public UUID getID() {
        return ID;
    }

    public void setID(UUID ID) {
        this.ID = ID;
    }

    public Double getValorTemperatura() {
        return valorTemperatura;
    }

    public void setValorTemperatura(Double valorTemperatura) {
        this.valorTemperatura = valorTemperatura;
    }

    public String getTipoTemperatura() {
        return tipoTemperatura;
    }

    public void setTipoTemperatura(String tipoTemperatura) {
        this.tipoTemperatura = tipoTemperatura;
    }

    public LocalDate getDataTemperatura() {
        return dataTemperatura;
    }

    public void setDataTemperatura(LocalDate dataTemperatura) {
        this.dataTemperatura = dataTemperatura;
    }

    public LocalTime getHoraTemperatura() {
        return horaTemperatura;
    }

    public void setHoraTemperatura(LocalTime horaTemperatura) {
        this.horaTemperatura = horaTemperatura;
    }
}
