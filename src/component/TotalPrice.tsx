import { BasketContext } from "../context/BasketContext";
import { useContext } from "react";

const TotalPrice = () => {
  const { items, totalPrice } = useContext(BasketContext);

  return (
    <div id="total-price">
      <div className="conatiner">
        <div className="total-price">
          <div className="card align-items-center flex-row p-3">
            <p>
              item:
              <span>{items.reduce((acc, curr) => (acc += curr.count), 0)}</span>
            </p>
            <p>
              Total: <span>{totalPrice}$</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
