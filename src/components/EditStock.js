import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const EditStock = (props) => {
  const { editStock, stocks } = useContext(GlobalContext);
  const [selectedStock, setSelectedStock] = useState({
    id: "",
    name: "",
  });
  const history = useHistory();
  const currentStockId = props.match.params.id;

  useEffect(() => {
    const stockId = currentStockId;
    const selectedStock = stocks.find((stock) => stock.id === stockId);
    setSelectedStock(selectedStock);
  }, [currentStockId, stocks]);

  const onChange = (e) => {
    setSelectedStock({ ...selectedStock, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editStock(selectedStock);
    history.push("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Ticker/Symbol</Label>
        <Input
          type="text"
          value={selectedStock.name}
          onChange={onChange}
          name="name"
          placeholder="Enter ticker/symbol"
          required
        ></Input>
      </FormGroup>
      <Button type="submit">Edit Stock</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
