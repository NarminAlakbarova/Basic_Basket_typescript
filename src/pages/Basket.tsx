import { useContext, useEffect } from "react";
import { BasketContext } from "../context/BasketContext";
import basketImg from "../img/img1.png";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { BsFillTrashFill } from "react-icons/bs";
import UserForm from "../component/UserForm";
import TotalPrice from "../component/TotalPrice";

const Basket = () => {
  const {
    items,
    handledeleteBasket,
    decrementItemCount,
    incrementItemCount,
    handleTotalPrice,
  } = useContext(BasketContext);

  useEffect(() => {
    handleTotalPrice();
  }, [items]);
  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <div className="row justify-content-between">
            <div className="col-xl-8 col-md-12 all-cards">
              <div className="row">
                {items.map((item) => (
                  <div className="col-12 my-2" key={item.id}>
                    <div className="card">
                      <div className="content">
                        <img src={basketImg} alt="" />
                        <p>{item.title}</p>
                        <p>{item.price} $</p>
                      </div>
                      <div className="actions">
                        <div className="counter">
                          <button onClick={() => decrementItemCount(item.id)}>
                            <GrFormPrevious />
                          </button>{" "}
                          <span>{item.count}</span>
                          <button onClick={() => incrementItemCount(item.id)}>
                            <GrFormNext />
                          </button>
                        </div>
                        <button onClick={() => handledeleteBasket(item.id)}>
                          <BsFillTrashFill />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-4 col-md-12">
              <UserForm />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-xl-8 col-md-12">
              <TotalPrice />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
