export type Item = {
  id: string;
  img: string;
  price: number;
  title: string;
  count: number;
};
export type formValue= {
  email: string;
  kardNumber: string;
  date: any;
  cvv: string;
}
export type ContextState = {
  items: Item[];
  addBasket: (value: Item) => void;
  handledeleteBasket: (value: string) => void;
  decrementItemCount: (value: string) => void;
  incrementItemCount: (value: string) => void;
  handleTotalPrice: () => void;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  totalPrice: number;
  handleFormSubmit:(value:formValue)=>void
  setBasketItem:React.Dispatch<React.SetStateAction<Item[]>>
};
