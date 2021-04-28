import React from "react";
import Progress from "./Progress";

const Avancement = () => {
  return (
    <div className="form-devis-container">
      <h4>AVANCEMENT</h4>
      <div className="separateur">
        <div className="inner-separateur"></div>
      </div>
      <Progress title="Avancement" done="100" />
    </div>
  );
};

export default Avancement;
