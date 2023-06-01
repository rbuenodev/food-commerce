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
  snack: ISnack;
}

interface ICartContextProps {
  cart: ISnack[];
  addSnackIntoCart: (snack: ISnackData) => void;
  removeSnackFromCart: (id: number, snack: ISnack) => void;
  incrementSnackFromCart: (id: number, snack: ISnack) => void;
  decrementSnackFromCart: (id: number, snack: ISnack) => void;
  confirmOrder: () => void;
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

  function updateSnackQuantity(
    id: number,
    snack: ISnack,
    newQuantity: number
  ) {}

  function removeSnackFromCart(id: number, snack: ISnack) {}
  function incrementSnackFromCart(id: number, snack: ISnack) {
    updateSnackQuantity(id, snack, snack.quantity + 1);
  }
  function decrementSnackFromCart(id: number, snack: ISnack) {
    updateSnackQuantity(id, snack, snack.quantity - 1);
  }

  function confirmOrder() {}

  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        incrementSnackFromCart,
        decrementSnackFromCart,
        confirmOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
