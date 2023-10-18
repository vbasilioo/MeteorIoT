package com.api.meteoriot.backend.dtos.Temperatura;

import java.time.LocalDate;
import java.time.LocalTime;

public class UmidadeDTO {
    private Double valorUmidade;
    private LocalDate dataUmidade;
    private LocalTime horaUmidade;

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
