import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./App.css";

const initialState = {
  totalInterest: 0,
  totalInterestPercentage: 0,
  totalInterestPerYear: 0,
  totalInterestPercentagePerYear: 0,
};
const App = () => {
  const [data, setData] = useState({});
  const [calculation, setCalculation] = useState(initialState);
  useState(0);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { initialAmount, totalValue, time } = data;
    const principal = parseInt(initialAmount);
    const Amount = parseInt(totalValue);
    const timeCount = parseInt(time);
    setCalculation({
      ...calculation,
      totalInterest: Amount - principal,
      totalInterestPercentage: ((Amount - principal) / principal) * 100,
      totalInterestPerYear: (Amount - principal) / timeCount,
      totalInterestPercentagePerYear:
        (((Amount - principal) / principal) * 100) / timeCount,
    });
  };

  const handleOnReset = () => {
    setData({});
    setCalculation(initialState);
  };

  return (
    <Form className="container" onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Total Investment at Begining</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          name="initialAmount"
          type="text"
          placeholder="initial investment"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Total Current Investment Value</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          name="totalValue"
          type="text"
          placeholder="Total Value of Investtment at the momemt"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Time</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          name="time"
          type="text"
          placeholder="Total time for property to get to that price"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button
        variant="primary"
        className="mx-5"
        type="reset"
        onClick={handleOnReset}
      >
        Reset
      </Button>
      <br />
      <br />
      <h2>Total interest = {calculation.totalInterest}</h2>
      <br />
      <h2>
        Total Interest = {Math.round(calculation.totalInterestPercentage)}%
      </h2>
      <br />
      <h2>
        Total Interest per year = {Math.round(calculation.totalInterestPerYear)}
      </h2>
      <br />
      <h2>
        Total Interest % per year={" "}
        {Math.round(calculation.totalInterestPercentagePerYear)}
      </h2>
    </Form>
  );
};

export default App;
