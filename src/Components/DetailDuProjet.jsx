import React from "react";
import { Table } from "react-bootstrap";

const DetailDuProjet = ({ name }) => {
  return (
    <div className="form-devis-container">
      <h4>DETAIL DE PROJET</h4>
      <div className="separateur">
        <div className="inner-separateur"></div>
      </div>
      <Table bordered>
        <tr>
          <td>Type De Projet</td>
          <td>{name}</td>
        </tr>
      </Table>
    </div>
  );
};

export default DetailDuProjet;
