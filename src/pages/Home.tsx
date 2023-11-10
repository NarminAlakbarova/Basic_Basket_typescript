import { useContext } from "react";
import AllItems from "../data/data";
import itemImg from "../img/img1.png";
import { BiBasket } from "react-icons/bi";
import { BasketContext } from "../context/BasketContext";

const Home = () => {
  const { addBasket } = useContext(BasketContext);
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="row">
            {AllItems.map((item) => (
              <div className="col-xl-4 col-md-4 col-sm-6  my-2" key={item.id}>
                <div className="card">
                  <div className="img">
                    <img src={itemImg} alt="" />
                  </div>
                  <div className="content">
                    <div className="title">
                      <p>{item.title}</p>
                      <p>Price: {item.price} $</p>
                    </div>
                    <button className="icon" onClick={() => addBasket(item)}>
                      <BiBasket />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
