import React from "react";
import "./StockDetail.css";

class StockDetail extends React.Component {
  state = {
    show: true,
  };
  render() {
    const { name, total, thumbnail, stockEvents } = this.props;
    const { show } = this.state;
    return (
      <div className="StockDetail">
        <div
          onClick={() => {
            console.log("clicked ", name);
            this.setState({ show: !show });
          }}
        >
          <h3>
            Product: {name}  |  Total: {total}
          </h3>
          {show ? "Expanded" : "Collapssed"}
          <img src={thumbnail} className="Product_img" />
        </div>
        {show && (
          <div>
            {stockEvents.map((e) => (
              <div key={`event_${e.id}`} className="StockEventTable_card">
                <p>
                  <b>Type:</b> {e.type}      <b>Quantity:</b> {e.qty}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default StockDetail;

// import React from "react";

// export default function StockDetail(props) {
//   const { name, total, thumbnail, stockEvents } = props;
//   return (
//     <div className="StockDetail">
//       <h3>
//         Product: {name}  |  Total: {total}
//       </h3>
//       <img src={thumbnail} className="Product_img" />
//       {stockEvents.map((e) => (
//         <div className="StockEventTable_card">
//           <p>
//             <b>Type:</b> {e.type}      <b>Quantity:</b> {e.qty}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }
