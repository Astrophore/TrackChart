import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const AddStock = () => {
  const [name, setName] = useState("");
  const { addStock } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newStock = {
      id: uuid(),
      name,
    };
    addStock(newStock);
    history.push("/");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Stock Name</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          name="name"
          placeholder="Enter Ticker/Symbol"
          required
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
