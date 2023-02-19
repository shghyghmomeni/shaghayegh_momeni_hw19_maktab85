import React, { useState, useContext } from "react";
import Input from "../input";
import "./style.css";
function Form() {
  //states
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [position, setposition] = useState("");
  const [phone, setphone] = useState("");

  //Errors
  const [nameErr, setnameErr] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [positionErr, setpositionErr] = useState("");
  const [phoneErr, setphoneErr] = useState("");

  const handleChange = (e, name) => {
    const user = {};
    const emailRegEx = RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    user[name] = e.target.value;
    console.log(user[name]);
    //validations
    switch (name) {
      case "name":
        setname(user.name);
        user.name.length < 3 && "^[sa-zA-Zء-ي]*$"
          ? setnameErr("نام شما باید بیشتر از ۳ کاراکتر باشد")
          : setnameErr("");
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <h1>فرم همکاری با ما</h1>
      <form>
        <div className="form__container">
          <div>
            <Input
              label="نام"
              name="fullName"
              type="text"
              id="fullName"
              placeholder="نام خود را وارد کنید..."
              required="required"
              onChange={(e) => handleChange(e, "fullName")}
            />
          </div>
          <div>
            <Input
              label="ایمیل"
              name="email"
              type="email"
              id="email"
              placeholder="ایمیل را وارد کنید..."
              required="required"
              onChange={(e) => handleChange(e, "email")}
            />
          </div>
          <div>
            <Input
              label="موقعیت همکاری"
              name="position"
              type="text"
              id="position"
              placeholder="موقعیت همکاری مد نظر خود را وارد کنید..."
              required="required"
              onChange={(e) => handleChange(e, "position")}
            />
          </div>
          <div>
            <Input
              label="شماره تماس"
              name="phoneNum"
              type="text"
              id="phoneNum"
              placeholder="شماره تماس شما..."
              required="required"
              onChange={(e) => handleChange(e, "phoneNum")}
            />
          </div>
          <div>
            <Input
              label="فایل رزومه(با فرمت های pdf , jpg , png)"
              name="attachment"
              type="file"
              id="attachment"
              placeholder=""
              required="required"
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">ارسال درخواست</button>
      </form>
    </div>
  );
}
export default Form;
