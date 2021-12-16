import React from "react";
import { useForm } from "react-hook-form";

import styles from "../styles/Form.module.scss";


const Form = ( { setTimerValue, timerStatus} ) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  function onSubmit(data) {
        console.log(data.minutes*60, "minutes");
        setTimerValue(Math.abs(parseInt(data.minutes*60)))
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      {/* register your input into the hook by invoking the "register" function */}
      <div>
        <label className="visually-hidden" htmlFor="minutes">
          Number of minutes
        </label>
        <input
          defaultValue="10"
          type="Number"
          {...register("minutes")}
          id="minutes"
        />
      </div>
      {timerStatus === true ? (
        <input type="submit" disabled />
      ) : (
        <input type="submit" />
      )}
    </form>
  );
}

export default Form