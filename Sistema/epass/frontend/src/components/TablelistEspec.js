import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";


import Footer from "./Footer";

import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// import { Table } from "semantic-ui-react";

import api from "../services/api";


export default function TableExampleColors({ history, match }) {
  const [pecas, setPecas] = React.useState([]);




  useEffect(() => {
    async function loadPecas() {
      const response = await api.get("/espetaculo/all");

      setPecas(response.data);
      console.log(response.data);
    }
    loadPecas();
  }, []);
  async function handlesDelete(e) {
    await api.post(`/espetaculo/delete/${e.target.value}`);

    window.location.reload();
  }








  const columns = [
    {
      label: "#"
    },
    {
      label: "Nome"
    },
    {
      label: "Informações"
    },

    {
      label: "Opções"
    }
  ];

  return (
    <div>
      <MDBTable btn>
        <MDBTableHead columns={columns} />
        <MDBTableBody>
          {pecas.map(peca => (
            <tr>
              <td>{peca.id}</td>
              <td>{peca.pecas.name}</td>
              <td>Dia {peca.dia}/{peca.mes} às {peca.hora}:00 hr</td>
              <td>
              <Link to={`/espetaculo/update/${peca.id}`}>

                <MDBBtn
                  color="yellow"
                  size="sm"

                  value={peca.id}

                >
                  Editar
                </MDBBtn>
                </Link>


                <MDBBtn
                  color="red"
                  size="sm"
                  value={peca.id}
                  onClick={handlesDelete}
                >
                  Excluir
                </MDBBtn>

              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>

    </div>
  );
}
