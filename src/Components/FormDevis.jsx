import React from "react";
import { useForm } from "react-hook-form";
import "./FormDevis.css";

const FormDevis = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="form-devis-container">
      <h2>OBTENIR UN DEVIS</h2>
      <div className="separateur">
        <div className="inner-separateur"></div>
      </div>
      <p>Envoyez nous votre demande, on vous fait L'étude GRATUITEMENT</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control input-devis-form"
          name="nom"
          placeholder="Nom"
          type="text"
          ref={register({
            required: "Champ Obligatoire",
          })}
        />
        <div className="text-danger ">{errors.nom && errors.nom.message}</div>

        <input
          className="form-control input-devis-form"
          name="email"
          placeholder="Email"
          type="email"
          ref={register({
            required: "Champ Obligatoire",
          })}
        />
        <div className="text-danger ">
          {errors.email && errors.email.message}
        </div>
        <textarea
          className="form-control input-devis-form"
          name="message"
          placeholder="Votre Message"
          ref={register({
            required: "Champ Obligatoire",
          })}
          rows="10"
          cols="52"
        />
        <div className="text-danger ">
          {errors.email && errors.email.message}
        </div>

        <div className="button-form-wrapper">
          <button type="submit" className="button-form-devis">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormDevis;
