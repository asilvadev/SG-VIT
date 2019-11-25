import React, { useEffect, useState } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import api from "../services/api";

import "./DashboardAdmin.css";

import ShowCreate from "./ShowCreate";
import EspecCreate from "./EspecCreate";
import TablelistShow from "../components/TablelistShow";
import TablelistEspec from "../components/TablelistEspec";

export default function DashboardAdmin({ history }) {
  const id = localStorage.getItem("id");
  const expireTime = localStorage.getItem("expiresIn");

  const [user, setUser] = useState({

  });

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/user/${id}`);

      setUser(response.data);
    }
    loadUser();

  }, []);


  useEffect(() => {
    function times() {
      const time = new Date().getTime();
      if (time > expireTime) {
        localStorage.removeItem("app-token");
        localStorage.removeItem("admin");
        localStorage.removeItem("id");
        localStorage.removeItem("expiresIn");
        localStorage.removeItem("currentDate");
      }
    }

    times();
  });




  return (
    <div className="externa">

      <body>
        <Tabs
          className="tabs"

          onChange={tabId => {
          }}
        >
          <TabList className="tablist">
            <Tab className="tablink" tabFor="one">
              ESPETACULOS
            </Tab>
            <Tab className="tablink" tabFor="two">
              CADASTRAR ESPETACULO
            </Tab>
            <Tab className="tablink" tabFor="three">
              PEÇAS
            </Tab>
            <Tab className="tablink" tabFor="four">
              ADICIONAR PEÇA
            </Tab>
          </TabList>
          <TabPanel tabId="one">

            Olá {user.name}, Você está visualizando os ESPETACULO
            <TablelistEspec />
          </TabPanel>
          <TabPanel tabId="two">
            Olá {user.name}, Você está cadastrando um espetaculo

            <EspecCreate />
          </TabPanel>
          <TabPanel tabId="three">
            Olá {user.name}, Você está visualizando as PEÇAS
            <TablelistShow />
          </TabPanel>
          <TabPanel tabId="four">
            Olá {user.name}, Você está cadastrando uma peça
            <ShowCreate />
          </TabPanel>
        </Tabs>
      </body>
    </div>
  );
}
