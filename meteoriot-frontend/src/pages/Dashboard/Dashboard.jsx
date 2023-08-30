import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Dashboard(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 col-sm-12">
                    <Sidebar />
                </div>
                <div className="col-md-10 col-sm-12 p-3">
                    <div>Conteúdo aqui</div>
                </div>
            </div>
        </div>
    );
}