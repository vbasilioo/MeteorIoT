package com.api.meteoriot.backend.dtos.Temperatura;

import java.time.LocalDate;
import java.time.LocalTime;

public class TemperaturaDTO {
    private Double valorTemperatura;
    private String tipoTemperatura;
    private LocalDate dataTemperatura;
    private LocalTime horaTemperatura;

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
