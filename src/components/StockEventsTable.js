import React from "react";
import StockDetail from "./StockDetail";
import "./StockEventsTable.css";

export default function StockEventsTable(props) {
  const { products, stockEvents } = props;

  return (
    <div className="StockEventTable">
      {products.map((product) => {
        const { id } = product;

        const relevantStockEvents = stockEvents.filter(
          (se) => se.product.id === id
        );

        const stockTotal = relevantStockEvents.reduce(
          (accumulator, currentElement) => {
            return accumulator + currentElement.qty;
          },
          0
        );

        return (
          <div key={`product_${id}`} className="ProductTable_card">
            <StockDetail
              name={product.name}
              total={stockTotal}
              thumbnail={product.thumbnail}
              stockEvents={relevantStockEvents}
            />
          </div>
        );
      })}
    </div>
  );
}
