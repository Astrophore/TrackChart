import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroupItem, Button } from "reactstrap";

const Stock = ({ stock }) => {
  const { removeStock } = useContext(GlobalContext);
  return (
    <ListGroupItem className="d-flex" key={stock.id}>
      <span>{stock.name}</span>
      <div className="ml-auto">
        <Link
          to={`/edit/${stock.id}`}
          color="warning"
          className="btn btn-warning mr-1"
        >
          Edit
        </Link>
        <Button onClick={() => removeStock(stock.id)} color="danger">
          Delete
        </Button>
      </div>
    </ListGroupItem>
  );
};
export default Stock;
