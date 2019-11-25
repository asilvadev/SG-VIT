import React, { useEffect, useState } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import api from "../services/api";

import "./Dashboard.css";
import TablelistEspecUser from "../components/TablelistEspecUser";
import TablelistIngressosUser from "../components/TablelistIngressosUser";

export default function Dashboard({ history }) {
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
        localStorage.removeItem("id");
        localStorage.removeItem("admin");
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
              INGRESSOS
            </Tab>
            <Tab className="tablink" tabFor="three">
              SUPPORT
            </Tab>
            <Tab className="tablink" tabFor="four">
              CONFIGURAÇÕES
            </Tab>
          </TabList>
          <TabPanel tabId="one">
            Olá {user.name}, Essa são os espetaculos disponiveis no momento.

          <TablelistEspecUser />
          </TabPanel>
          <TabPanel tabId="two">
        Olá {user.name}, Você está visualizando os seus Ingressos
        <TablelistIngressosUser />


          </TabPanel>
          <TabPanel tabId="three">
            Olá {user.name}, Ainda não contamos com essa funcionalidade. Logo, logo estaremos aqui.
          </TabPanel>
          <TabPanel tabId="four">
            Olá {user.name}, Você está em configurações. Ainda não contamos com essa funcionalidade. Logo, logo estaremos aqui.

          </TabPanel>
        </Tabs>
      </body>
    </div>
  );
}
