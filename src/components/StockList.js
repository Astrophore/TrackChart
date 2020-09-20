import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const StockList = () => {
  const { stocks, removeStock } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
      {stocks.length > 0 ? (
        <>
          {stocks.map((stock) => (
            <ListGroupItem className="d-flex" key={stock.id}>
              <strong>{stock.name}</strong>
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
          ))}
        </>
      ) : (
        <h4 className="text-center">No Stocks</h4>
      )}
    </ListGroup>
  );
};
