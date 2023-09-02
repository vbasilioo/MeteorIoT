import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

export default function Dashboard(){
    const location = useLocation();
    const usuarioData = location.state.usuarioData;

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 col-sm-12">
                    <Sidebar usuario={usuarioData} />
                </div>
                <div className="col-md-10 col-sm-12 p-3">
                    <div>
                        Informações
                    </div>
                </div>
            </div>
        </div>
    );
}