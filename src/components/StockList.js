import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Stock from "./Stock";
import { ListGroup } from "reactstrap";

export const StockList = () => {
  const { stocks } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
      {stocks.length ? (
        <>
          {stocks.map((stock) => {
            return <Stock stock={stock} key={stock.id} />;
          })}
        </>
      ) : (
        <h4 className="text-center">No Stocks</h4>
      )}
    </ListGroup>
  );
};
