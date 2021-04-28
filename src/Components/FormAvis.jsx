import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./FormAvis.css";
import Ratings from "react-ratings-declarative";
const FormAvis = () => {
  const [rating, setrating] = useState();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="form-avis-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="rating"
          type="number"
          value={rating}
          ref={register({
            required: "Note Obligatoire",
          })}
          hidden
          readOnly
        />
        <h3>Votre note *</h3>
        <Ratings
          rating={rating}
          widgetRatedColors="gold"
          changeRating={(rating) => setrating(rating)}
          widgetDimensions="25px"
          widgetSpacings="1px"
        >
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
        </Ratings>
        <div className="text-danger ">
          {errors.rating && errors.rating.message}
        </div>
        <textarea
          className="form-control input-devis-form"
          name="avis"
          placeholder="Votre Avis"
          ref={register({
            required: "Champ Obligatoire",
          })}
          rows="10"
          cols="52"
        />
        <div className="text-danger ">{errors.avis && errors.avis.message}</div>
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

        <div className="button-form-wrapper">
          <button type="submit" className="button-form-devis">
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAvis;
