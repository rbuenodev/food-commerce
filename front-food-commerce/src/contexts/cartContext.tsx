import { ReactNode, createContext, useState } from "react";
import { ISnackData } from "../interfaces/ISnackData";
import { toast } from "react-toastify";
import { snackEmoji } from "../helpers/snackEmoji";
import { useNavigate } from "react-router-dom";
import { ICustomerData } from "../interfaces/ICustomerData";

interface ISnack extends ISnackData {
  quantity: number;
  subtotal: number;
}

interface ICartContextProps {
  cart: ISnack[];
  addSnackIntoCart: (snack: ISnackData) => void;
  removeSnackFromCart: (snack: ISnack) => void;
  incrementSnackFromCart: (snack: ISnack) => void;
  decrementSnackFromCart: (snack: ISnack) => void;
  confirmOrder: () => void;
  payOrder: (customer: ICustomerData) => void;
}

interface ICartProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as ICartContextProps);

function CartProvider({ children }: ICartProviderProps) {
  const [cart, setCart] = useState<ISnack[]>([]);
  const navigate = useNavigate();

  function addSnackIntoCart(snack: ISnackData): void {
    const snackExistentInCart = cart.find(
      (item) => item.snack === snack.snack && item.id === snack.id
    );

    if (snackExistentInCart) {
      const newCart = cart.map((item) => {
        if (item.id === snack.id && item.snack === snack.snack) {
          const quantity = item.quantity + 1;
          const subtotal = item.price * quantity;

          return { ...item, quantity, subtotal };
        }
        return item;
      });

      setCart(newCart);
      toast.success(
        `${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`
      );
      return;
    }

    const newSnack = { ...snack, quantity: 1, subtotal: snack.price };
    const newCart = [...cart, newSnack];
    setCart(newCart);
    `${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`;
    return;
  }

  function updateSnackQuantity(snack: ISnack, newQuantity: number) {
    if (newQuantity <= 0) return;

    const snackExistent = cart.find(
      (item) => item.id === snack.id && item.snack === snack.snack
    );

    if (!snackExistent) return;

    const newCart = cart.map((item) => {
      if (item.id === snackExistent.id && item.snack === snackExistent.snack) {
        return {
          ...item,
          quantity: newQuantity,
          subtotal: item.price * newQuantity,
        };
      }
      return item;
    });
    setCart(newCart);
  }

  function removeSnackFromCart(snack: ISnack) {
    const newCart = cart.filter(
      (item) => !(item.id === snack.id && item.snack === snack.snack)
    );
    setCart(newCart);
  }
  function incrementSnackFromCart(snack: ISnack) {
    updateSnackQuantity(snack, snack.quantity + 1);
  }
  function decrementSnackFromCart(snack: ISnack) {
    updateSnackQuantity(snack, snack.quantity - 1);
  }

  function confirmOrder() {
    navigate("/payment");
  }

  function payOrder(customer: ICustomerData) {
    console.log("payorder", customer);
    navigate("/");
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        incrementSnackFromCart,
        decrementSnackFromCart,
        confirmOrder,
        payOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
