export default (state, action) => {
  switch (action.type) {
    case "REMOVE_STOCK":
      return {
        ...state,
        stocks: state.stocks.filter((stock) => {
          return stock.id !== action.payload;
        }),
      };
    case "ADD_STOCK":
      return {
        ...state,
        stocks: [action.payload, ...state.stocks],
      };
    case "EDIT_STOCK":
      const updateStock = action.payload;

      const updateStocks = state.stocks.map((stock) => {
        if (stock.id === updateStock.id) {
          return updateStock;
        }
        return stock;
      });
      return {
        ...state,
        stocks: updateStocks,
      };
    default:
      return state;
  }
};
