import React, { Component } from "react";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

 class StockForm extends Component {

  constructor(props){
    super(props);
    this.state={
      title:'My Stocks List',
      index: '',
      stocks:[]
    }
  }

  componentDidMount(){
    this.refs.ticker.focus();
  }

  fSubmit = (e) => {
    e.preventDefault();
    console.log("suceed");
    
    let stocks = this.state.stocks;
    let ticker = this.refs.ticker.value;
    let pprice = this.refs.pprice.value;

    let stock = {
      ticker,pprice
    }
    
    stocks.push(stock);

    this.setState({
      stocks:stocks
    });
    this.refs.ticker.focus();
  }

  render() {
    let stocks = this.state.stocks;
        {stocks.map((stock,i)=>
          <tr key={i}>
          <td>{i+1}</td>
          <td>{stock.ticker}</td>
          <td>Stock Price</td>
          <td>{stock.pprice}</td>
          <td>
            <Button color="success" size="sm" className="mr-2">
              View Chart
            </Button>
            <Button color="danger" size="sm">
              Delete
            </Button>
          </td>
        </tr>
      );
    return (
      <div className="App container">
        <h1>Stock Tracker</h1>

        <Button
          className="my-3"
          color="primary"
          onClick={this.toggleNewStockModal.bind(this)}
        >
          Add Stock
        </Button>
        <Modal
          isOpen={this.state.newStockModal}
          toggle={this.toggleNewStockModal.bind(this)}
        >
          <ModalHeader toggle={this.toggleNewStockModal.bind(this)}>
            Add new stock
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Stock Ticker/Symbol</Label>
              <Input
                id="name"
                value={this.state.newStockData.name}
                onChange={(e) => {
                  let { newStockData } = this.state;

                  newStockData.name = e.target.value;
                  this.setState({ newStockData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="pprice">Purchase Price</Label>
              <Input
                id="pprice"
                value={this.state.newStockData.pprice}
                onChange={(e) => {
                  let { newStockData } = this.state;

                  newStockData.pprice = e.target.value;
                  this.setState({ newStockData });
                }}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addStock.bind(this)}>
              Add to watchlist
            </Button>
            <Button
              color="danger"
              onClick={this.toggleNewStockModal.bind(this)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Ticker/Symbol</th>
              <th>Last Price</th>
              <th>Purchased Price</th>
            </tr>
          </thead>

          <tbody>{stocks}</tbody>
        </Table>
      </div>
    );
  }
}
  /* state = {
    stocks: [],
    newStockData: {
      name: "",
      pprice: "",
    },
    newStockModal: false,
  };

  componentWillMount() {
    axios.get("http://localhost:3000/stocks/").then((response) => {
      this.setState({
        stocks: response.data,
      });
    });
  }
  toggleNewStockModal() {
    this.setState({
      newStockModal: !this.state.newStockModal,
    });
  }
  addStock() {
    axios
      .post("http://localhost:3000/stocks/", this.state.newStockData)
      .then((response) => {
        let { stocks } = this.state;
        stocks.push(response.data);

        this.setState({ stocks, newStockModal: false });
      });
  }

  render() {
    let stocks = this.state.stocks.map((stock) => {
      return (
        <tr key={stock.id}>
          <td>{stock.id}</td>
          <td>{stock.name}</td>
          <td>{stock.lastprice}</td>
          <td>{stock.pprice}</td>
          <td>
            <Button color="success" size="sm" className="mr-2">
              View Chart
            </Button>
            <Button color="danger" size="sm">
              Delete
            </Button>
          </td>
        </tr>
      );
    });
    return (
      <div className="App container">
        <h1>Stock Tracker</h1>

        <Button
          className="my-3"
          color="primary"
          onClick={this.toggleNewStockModal.bind(this)}
        >
          Add Stock
        </Button>
        <Modal
          isOpen={this.state.newStockModal}
          toggle={this.toggleNewStockModal.bind(this)}
        >
          <ModalHeader toggle={this.toggleNewStockModal.bind(this)}>
            Add new stock
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Stock Ticker/Symbol</Label>
              <Input
                id="name"
                value={this.state.newStockData.name}
                onChange={(e) => {
                  let { newStockData } = this.state;

                  newStockData.name = e.target.value;
                  this.setState({ newStockData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="pprice">Purchase Price</Label>
              <Input
                id="pprice"
                value={this.state.newStockData.pprice}
                onChange={(e) => {
                  let { newStockData } = this.state;

                  newStockData.pprice = e.target.value;
                  this.setState({ newStockData });
                }}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addStock.bind(this)}>
              Add to watchlist
            </Button>
            <Button
              color="danger"
              onClick={this.toggleNewStockModal.bind(this)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Ticker/Symbol</th>
              <th>Last Price</th>
              <th>Purchased Price</th>
            </tr>
          </thead>

          <tbody>{stocks}</tbody>
        </Table>
      </div>
    );
  }
}
export default StockForm;  */
