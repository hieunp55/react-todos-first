import React, { useState } from "react";

const carBrands = ["Mercedes", "BMW", "Maserati", "Infinity", "Audi"];

const carBrandOptions = carBrands.map(
  (carBrand, key) => (
    <option key={key} value={carBrand}>
      {carBrand}
    </option>
  )
);

const Form = () => {
  const [userInfo, setUserInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
    carBrand: "",
    isChecked: false,
    gender: "",
    price: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUserInfo({
      ...userInfo,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <>
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name: <input type="text" name="fname" value={userInfo.fname} onChange={handleChange} />
        </label>
        <label>
          Last Name: <input type="text" name="lname" value={userInfo.lname} onChange={handleChange} />
        </label>
        <label>
          Your Message: <textarea name="message" value={userInfo.message} onChange={handleChange} />
        </label>
        <label>
          Car Brand: 
          <select 
            name="carBrand" 
            value={userInfo.carBrand} 
            onChange={handleChange}>
            <option value={""} disabled>
              --Pick a car brand--
            </option>
            {carBrandOptions}

          </select>
        </label>
        <label>
          <input type="checkbox" name="isChecked" checked={userInfo.isChecked} onChange={handleChange} />
          Is Checked?
        </label>
        <label>
          Gender: <input type="radio" name="gender" value="male" checked={userInfo.gender === "male"} onChange={handleChange} />
          {" "}
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" checked={userInfo.gender === "female"} onChange={handleChange} />
          {" "}
          Female
        </label>
        <label>
          Price (between 0 and 50): <input type="range" name="price" min="0" max="50" value={userInfo.price} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h5>Name: {userInfo.fname} {userInfo.lname}</h5>
      <p>Message: { userInfo.message }</p>
      <h5>Favorite car brand: { userInfo.carBrand }</h5>
      <h5>Is it checked?: {userInfo.isChecked ? "Yes" : "No"}</h5>
      <h5>Gender: {userInfo.gender}</h5>
      <h5>Price: {userInfo.price}</h5>
    </>
  );
};

export default Form;