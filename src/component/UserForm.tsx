import { BasketContext } from "../context/BasketContext";
import { formValue } from "../types/type";
import { useState, useContext } from "react";

const UserFrom = () => {
  const { handleFormSubmit, setBasketItem } = useContext(BasketContext);
  const [inputChanges, setInputChanges] = useState<formValue>({
    email: "",
    kardNumber: "",
    date: "",
    cvv: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      inputChanges.email &&
      inputChanges.kardNumber &&
      inputChanges.date &&
      inputChanges.cvv
    ) {
      handleFormSubmit(inputChanges);
      setInputChanges({ email: "", kardNumber: "", date: "", cvv: "" });
      setBasketItem([]);
      alert("The order has been received ");
    } else {
      alert("please fill all inputs");
    }
  };

  const FormGroup = ({
    label,
    inputType,
    placeholder,
    value,
    maxLength,
    minLength,
    onChange,
  }: {
    label: string;
    inputType: string;
    placeholder: string;
    value: any;
    maxLength?: number;
    minLength?: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => {
    return (
      <div className="mb-3">
        <label htmlFor={label} className="form-label">
          {label}
        </label>
        <input
          type={inputType}
          className="form-control"
          id={label}
          aria-describedby={`${label}Help`}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };

  return (
    <>
      <div id="htmlForm">
        <div className="container">
          <form onSubmit={handleSubmit}>
            {FormGroup({
              label: "Email Address",
              inputType: "email",
              placeholder: "Enter your email...",
              value: inputChanges.email,
              maxLength: 15,
              minLength: 6,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setInputChanges({ ...inputChanges, email: e.target.value }),
            })}{" "}
            {FormGroup({
              label: "Kard Number",
              inputType: "text",
              placeholder: "**** **** ****",
              value: inputChanges.kardNumber,
              maxLength: 12,
              minLength: 12,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setInputChanges({
                  ...inputChanges,
                  kardNumber: e.target.value,
                }),
            })}
            {FormGroup({
              label: "MM/YY",
              inputType: "date",
              placeholder: "",
              value: inputChanges.date,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setInputChanges({ ...inputChanges, date: e.target.value }),
            })}
            {FormGroup({
              label: "CVV",
              inputType: "text",
              placeholder: "***",

              value: inputChanges.cvv,
              maxLength: 3,
              minLength: 3,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setInputChanges({ ...inputChanges, cvv: e.target.value }),
            })}
            <button type="submit" className="btn" style={{backgroundColor:'#B4D193', color:'white'}}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserFrom;
