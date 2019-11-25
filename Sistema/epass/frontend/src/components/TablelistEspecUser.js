import React, { useEffect } from "react";
import {Link} from 'react-router-dom';

import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";



import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";



import api from "../services/api";


export default function TablelistEspecUser({ history, match }) {
  const [pecas, setPecas] = React.useState([]);




  useEffect(() => {
    async function loadPecas() {
      const response = await api.get("/espetaculo/all");

      setPecas(response.data);
    }
    loadPecas();
  }, []);









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
              <Link to={`/show/${peca.id}`}>

                <MDBBtn
                  color="yellow"
                  size="sm"

                  value={peca.id}

                >
                  Visualizar
                </MDBBtn>
                </Link>




              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>

    </div>
  );
}
