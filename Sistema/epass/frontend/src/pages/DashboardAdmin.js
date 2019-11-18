import React, { useEffect, useState } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Link from "react-router-dom";
import api from "../services/api";
import logo from "../assets/epass.png";

import "./DashboardAdmin.css";

export default function DashboardAdmin({ history }) {
  const id = localStorage.getItem("id");
  const expireTime = localStorage.getItem("expiresIn");
  const curretTime = localStorage.getItem("currentDate");

  const [user, setUser] = useState({
    // image: {}
  });

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/user/${id}`);
      console.log(response.data);

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
      console.log("TN: " + time);
    }
    console.log("CT: " + curretTime);
    console.log("ET: " + expireTime);
    times();
  });

  function handlesSubmit(e) {
    e.preventDefault();
    localStorage.removeItem("app-token");
    localStorage.removeItem("admin");
    localStorage.removeItem("id");
    localStorage.removeItem("expiresIn");
    localStorage.removeItem("currentDate");

    history.push("/");
  }

  return (
    <div className="externa">
      <header id="main-header">
        <div className="header-content">
          <a href="/" className="">
            <img right src={logo} alt="ePass" />
          </a>
          <ul>
            <li>
              <strong>Admin</strong>
            </li>
            <li>
              <a href="" className="sair" onClick={handlesSubmit}>
                Sair
              </a>
            </li>
          </ul>
        </div>
      </header>
      <body>
        <Tabs
          className="tabs"
          defaultTab="one"
          onChange={tabId => {
            console.log(tabId);
          }}
        >
          <TabList className="tablist">
            <Tab className="tablink" tabFor="one">
              CADASTRAR PEÇAS
            </Tab>
            <Tab className="tablink" tabFor="two">
              EDITAR PEÇAS
            </Tab>
            <Tab className="tablink" tabFor="three">
              REMOVER PEÇAS
            </Tab>
            <Tab className="tablink" tabFor="four">
              Configurações
            </Tab>
          </TabList>
          <TabPanel tabId="one">Admin panel</TabPanel>
          <TabPanel tabId="two"></TabPanel>
          <TabPanel tabId="three">
            <p>Tab 3 content</p>
          </TabPanel>
          <TabPanel tabId="four">
            <p>Tab 4 content</p>
          </TabPanel>
        </Tabs>
      </body>
    </div>
  );
}
