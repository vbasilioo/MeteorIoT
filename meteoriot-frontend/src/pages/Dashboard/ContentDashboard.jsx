import { Fragment } from "react";
import GraficoTemperatura from "./Temperatura/GraficoTemperatura";

export default function ContentDashboard(){
    return(
        <Fragment>
            <GraficoTemperatura />
        </Fragment>
    );
}