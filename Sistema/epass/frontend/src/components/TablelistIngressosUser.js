import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";


import Footer from "./Footer";

import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// import { Table } from "semantic-ui-react";

import api from "../services/api";


export default function TablelistIngressosUser({ history, match }) {

const  [ingressos, setIngressos] = React.useState([]);
  const [seat, setSeats] = useState([]);

 const id = localStorage.getItem("id");
 console.log("User ID: " + id)




  useEffect(() => {
    async function loadPecas() {
      const response = await api.get(`/dashboard/${id}/ingressos`);

      setIngressos(response.data);
      console.log("teste: " + ingressos.id);
    }
    loadPecas();
  }, []);

  async function handlesDelete(e) {
    await api.post(`/dashboard/cancel/${e.target.value}`);

    window.location.reload();
  }








  const columns = [
    {
      label: "#"
    },
    {
      label: "Nome da Peça"
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
          {ingressos.map(ticket => (
            <tr>
              <td>{ticket.id}</td>
              <td>{ticket.seats.espetaculos.pecas.name}</td>
                <td>
                  <p><strong>Data: </strong>{ticket.seats.espetaculos.dia}/{ticket.seats.espetaculos.mes} <strong>Local: </strong>ePass Hall - Natal/RN</p>
                  <p>
                    <strong>Duração: </strong>{ticket.seats.espetaculos.pecas.duration} <strong>Classificação: </strong>{ticket.seats.espetaculos.pecas.classificacao}
                    </p>
                  <p>
                    <strong>Hora: </strong>{ticket.seats.espetaculos.hora}:00h <strong>Assento: </strong>{ticket.seats.fila}{ticket.seats.cadeira}
                    </p>
                </td>



                <td>


              <Link to={`/show/${ticket.espetaculo_id}`}>

                <MDBBtn
                  color="yellow"
                  size="sm"

                  value={ticket.espetaculo_id}

                >
                  Visualizar
                </MDBBtn>
                </Link>
                <MDBBtn
                  color="red"
                  size="sm"
                  value={ticket.id}
                  onClick={handlesDelete}
                >
                  Cancelar
                </MDBBtn>




              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>

    </div>
  );
}
