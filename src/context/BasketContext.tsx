import { ReactNode, createContext, useState } from "react";
import { ContextState, Item, formValue } from "../types/type";
const initialValue: ContextState = {
  items: [],
  totalPrice: 0,
  addBasket: () => {},
  handledeleteBasket: () => {},
  decrementItemCount: () => {},
  incrementItemCount: () => {},
  handleTotalPrice: () => {},
  setTotalPrice: () => {},
  handleFormSubmit: () => {},
  setBasketItem: () => {},
};
export const BasketContext = createContext<ContextState>(initialValue);
const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basketItem, setBasketItem] = useState<Item[]>(initialValue.items);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [inputsValue, setInputsValue] = useState<object[]>([]);
console.log(inputsValue);

  const addBasket = (obj: Item) => {
    const existingItem = basketItem.find((item) => item.id === obj.id);
    if (existingItem) {
      setBasketItem((prevItems) =>
        prevItems.map((basketItem) =>
          basketItem.id === obj.id
            ? { ...basketItem, count: basketItem.count + 1 }
            : basketItem
        )
      );
    } else {
      setBasketItem((prevItems) => [...prevItems, { ...obj, count: 1 }]);
    }
    handleTotalPrice();
  };


  const handledeleteBasket = (id: string) => {
    let filteredArr = basketItem.filter((item) => item.id != id);
    setBasketItem(filteredArr);
    handleTotalPrice();
  };


  const incrementItemCount = (itemId: string) => {
      setBasketItem((prevItems) =>
        prevItems.map((basketItem) =>
          basketItem.id === itemId
            ? { ...basketItem, count: basketItem.count + 1 }
            : basketItem
        )
      );
      handleTotalPrice();
    
  };


  const decrementItemCount = (itemId: string) => {
    const existingItem = basketItem.find((item) => item.id === itemId);
    if (existingItem?.count === 0) {
      return;
    }
    if (existingItem) {
      setBasketItem((prevItems) =>
        prevItems.map((basketItem) =>
          basketItem.id === itemId
            ? { ...basketItem, count: basketItem.count - 1 }
            : basketItem
        )
      );
      handleTotalPrice();
    }
  };



  const handleTotalPrice = () => {
    let resultTotalPrice = basketItem.reduce(
      (acc, curr) => (acc += curr.count * curr.price),
      0
    );

    setTotalPrice(resultTotalPrice);
  };


  const handleFormSubmit = (obj: formValue) => {
    setInputsValue([obj]);
  };

  return (
    <BasketContext.Provider
      value={{
        items: basketItem,
        totalPrice,
        addBasket,
        handledeleteBasket,
        decrementItemCount,
        incrementItemCount,
        handleTotalPrice,
        setTotalPrice,
        handleFormSubmit,
        setBasketItem,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
