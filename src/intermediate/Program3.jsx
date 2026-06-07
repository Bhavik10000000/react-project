import React from "react";
import "../App.css";
import { BsArrowLeft } from "react-icons/bs";
import { useForm } from "react-hook-form";

const Program3 = ({ onBack }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(`form submitted : ${JSON.stringify(data)}`);
  };
  return (
    <div>
      <span className="span1">
        <button onClick={onBack} className="backButton">
          <BsArrowLeft size={20} />
        </button>
        <h3 className="heading3">Program3</h3>
      </span>
      <div className="programs-body">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <label>UserName : </label>
              <input
                {...register("name", { required: "Username required." })}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
              <br />
              <label>Passwrod : </label>
              <input
                type="password"
                {...register("pass", { required: "Password required." })}
              />
              {errors.pass && <p className="error">{errors.pass.message}</p>}
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Program3;
