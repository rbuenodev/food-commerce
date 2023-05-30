import { ReactNode, createContext, useState } from "react";
import { ISnackData } from "../interfaces/ISnackData";
import { toast } from "react-toastify";
import { snackEmoji } from "../helpers/snackEmoji";

interface ISnack extends ISnackData {
  quantity: number;
  subtotal: number;
}

interface IUpdateCartProps {
  id: number;
  snack: string;
  newQuantity: number;
}

interface IRemoveCartProps {
  id: number;
  snack: string;
}

interface ICartContextProps {
  cart: ISnack[];
  addSnackIntoCart: (snack: ISnackData) => void;
  // updateCart: ({ id, snack, newQuantity }: IUpdateCartProps) => void;
  // removeSnackFromCart: ({ id, snack }: IRemoveCartProps) => void;
}

interface ICartProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as ICartContextProps);

function CartProvider({ children }: ICartProviderProps) {
  const [cart, setCart] = useState<ISnack[]>([]);

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

  return (
    <CartContext.Provider value={{ cart, addSnackIntoCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
