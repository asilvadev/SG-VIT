# SG-VIT

![GitHub](https://img.shields.io/github/license/asilvadev/SG-VIT)
![GitHub last commit](https://img.shields.io/github/last-commit/asilvadev/SG-VIT)
![Made](https://img.shields.io/badge/Made_with-Coffee-red?logo=coffeescript&style=flat)
<br>
#
![GitHub issues](https://img.shields.io/github/issues-raw/asilvadev/SG-VIT)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/asilvadev/SG-VIT)
<br><br>
## Sistema de Gerenciamento de Venda de Ingressos de Teatro
<br>

## Screenshots

![](Sistema/prints/sign.jpg)<br>
.
![](Sistema/prints/vert01.jpg)<br>

## Video
https://www.youtube.com/watch?v=RriuMzmcRm0&feature=youtu.be
## Requerimentos
O Sistema é dividido em duas partes **Backend** e **Frontend**
> node.js<br>yarn<br>postgresSQL

src/backend
> yarn add bcryptjs cors express fs jsonwebtoken multer passport-local pg pg-hstore sequelize sequelize-cli sharp socket.io

src/frontend
> yarn add axios react react-router-dom

## Iniciando a aplicação
src/backend
> yarn sequelize db:migrate<br>
> yarn dev

src/fronted
> yarn start



## Documento de Requisitos
|Versão|Data|Download|
|-|-|-|
|0.0.1|14/08/2019|[LINK](https://github.com/asilvadev/SG-VIT/blob/master/Docs/Documento%20de%20EOR%20-%20SG-VIT.pdf)|

## Documento de Viabilidade
|Versão|Data|Download|
|-|-|-|
|0.0.1|14/08/2019|[LINK](https://docs.google.com/document/d/1WcJmFmbdfi0pUfzN5idmCA_Hn8Ov2O_7X2nNpX1f1Jo/edit)|

## DIAGRAMAS
##### Classe
![](Diagramas/SG-VIT-Classes.png)
##### Casos de Uso
![](Diagramas/CDU-SG-VIT.png)
##### Diagrama ER
![](Diagramas/diagrama_ER.png)
##### Diagrama MR
![](Diagramas/diagrama_MR.png)
##### Diagrama Componente
![](Diagramas/componente.jpg)
##### Diagrama de Atividades
![](Diagramas/at_admin.jpg)
##### 
![](Diagramas/at_func.jpg)
##### 
![](Diagramas/at_cliente.jpg)
##### Driagrama de Sequencia
![](Diagramas/Criar&#32;conta.png)
##### 
![](Diagramas/EditarPeça.png)
##### 
![](Diagramas/Excluir&#32;Peça.png)
##### 
![](Diagramas/Vizualizar&#32;peça.png)
##### 
![](Diagramas/Comprar&#32;ingresso.png)
##### 
![](Diagramas/CancelarCompra&#32.png)
##### 
![](Diagramas/Cadastrar&#32;peça.png)

> A versão atual não suporta o modulo Funcionario. Atualizações futuras englobarão o modulo FUNCIONARIO.

## ATA
| Nº |Descrição | Data | Download |
|-|-|-|-|
|01|Levantamento de ferramentas para desenvolvimendo|12/08/2019|[LINK](https://github.com/asilvadev/SG-VIT/blob/master/ATA/ATA%2001%20-%20Levantamento%20de%20ferramentas%20para%20desenvolvimento%20-%2012.08.2019.pdf)|

## Componentes
Alan Silva<br>
Felipe Lima<br>
Thuize Thainá<br>
Victor Araujo<br>

## Contributors
<a href="https://github.com/asilvadev/SG-VIT/graphs/contributors">
  <img src="https://contributors-img.firebaseapp.com/image?repo=asilvadev/SG-VIT" />
</a>

Made with [contributors-img](https://contributors-img.firebaseapp.com).

