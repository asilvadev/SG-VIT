import React, { useEffect, useState } from "react";
import { Table } from 'semantic-ui-react'

import api from "../services/api";

export default function TableExampleColors(){
  const [pecas, setPecas] = useState([]);
  useEffect(() => {
    async function loadPecas() {
      const response = await api.get("/show/all");

      setPecas(response.data);
      console.log(response.data);
    }
    loadPecas();
  }, []);

 return (
<div>
    {pecas.map(peca => (
      <Table color="yellow" key={peca.id}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nome Peça</Table.HeaderCell>
            <Table.HeaderCell>Diretor</Table.HeaderCell>
            <Table.HeaderCell>Classificação</Table.HeaderCell>
            <Table.HeaderCell>Opções</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>{peca.name}</Table.Cell>
            <Table.Cell>{peca.director}</Table.Cell>
            <Table.Cell>{peca.classificacao}</Table.Cell>
            <Table.Cell>
              <div className="opition">
              <div className="edit">E</div>
              <div className="delete">D</div>
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    ))}
    </div>
 );



}
