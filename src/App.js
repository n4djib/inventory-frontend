import React from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import StockEventsTable from "./components/StockEventsTable";

import "./App.css";

class App extends React.Component {
  state = {
    fetchedProducts: null,
    fetchedStockEvents: null,
  };

  async componentDidMount() {
    const productsResp = await axios({
      method: "GET",
      url: "http://localhost:1337/products",
    });
    const stockEventResp = await axios({
      method: "GET",
      url: "http://localhost:1337/stockevents",
    });

    const fetchedProducts = productsResp.data;
    const fetchedStockEvents = stockEventResp.data;

    this.setState({
      fetchedProducts,
      fetchedStockEvents,
    });
  }

  render() {
    const { fetchedProducts, fetchedStockEvents } = this.state;
    const type = "spin";
    const color = "#aea";
    return (
      <div className="App">
        <h1>The Stock App</h1>

        {fetchedProducts ? (
          <StockEventsTable
            id={1}
            products={fetchedProducts}
            stockEvents={fetchedStockEvents}
          />
        ) : (
          <ReactLoading type={type} color={color} height={50} width={50} />
        )}
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
