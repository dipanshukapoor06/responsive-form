import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

type PersonDetails = {
  name: string;
  email: string;
  employmentType: string;
  img: FileList;
};

function App() {
  const { register, handleSubmit, errors } = useForm<PersonDetails>();

  const onSubmit = (data: PersonDetails) => {
    console.log("data: ", data);
    alert("Successfully Submitted");
  };

  console.log('errors: ', errors);

  return (
    <div className="App">
      <div className="headerContainer">
        <h2>Loan Application Form</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <div className="formField">
            <label htmlFor="name">Name:</label>
            <br />
            <input
              ref={register({ required: true })}
              className="inputFieldStyle"
              type="text"
              id="name"
              name="name"
              style={errors.name && errors.name.type === "required" ? { border: '1px solid red'} : {}}
            />
            {errors.name && errors.name.type === "required" && (
              <div className="error">Your must enter your name.</div>
            )}
          </div>
          <div className="formField">
            <label htmlFor="email">Email:</label>
            <br />
            <input
              ref={register({ required: true })}
              className="inputFieldStyle"
              type="text"
              id="email"
              name="email"
              style={errors.email && errors.email.type === "required" ? { border: '1px solid red'} : {}}
            />
            {errors.email && errors.email.type === "required" && (
              <div className="error">Your must enter your email.</div>
            )}
          </div>
          <div className="formField">
            <label htmlFor="employmentType">EmploymentType:</label>
            <br />
            <select
              className="inputFieldStyle"
              ref={register({ required: true })}
              name="employmentType"
              id="employmentType"
            >
              <option value="salaried">Salaried</option>
              <option value="selfEmployed">Self Employed</option>
            </select>
          </div>
          <div className="formField">
            <label htmlFor="uploadImage">Upload ID Proof:</label>
            <br />
            <input
              ref={register({ required: true })}
              className="inputFieldStyle"
              type="file"
              id="img"
              name="img"
              accept="image/*"
            />
            {errors.img && errors.img.type === "required" && (
              <div className="error">Your must upload ID.</div>
            )}
          </div>
        </div>
        <button className="buttonStyle" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
