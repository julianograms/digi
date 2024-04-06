import { fireEvent, render } from "@testing-library/react";
import Page from "../app/page";
import { CartContext, CartProvider } from "@/app/context/CartContext";
import CartIcon from "@/app/components/CartIcon";
import ListItem from "@/app/components/ListItem";
import Cart from "@/app/components/Cart";

it("Show cart count from context", () => {
  const a = [
    { count: 34, item: { name: "", _id: 0, image: "", price: 0, detail: "" } },
  ];

  const element = render(
    <CartContext.Provider
      value={{ addToCart: () => {}, products: a, toggleCart: () => {} }}
    >
      <CartIcon />
    </CartContext.Provider>
  );

  expect(element.baseElement).toMatchSnapshot();
});

it("Should show the count number on the navbar icon", async () => {
  const element = render(
    <CartProvider>
      <ListItem
        item={{
          name: "",
          _id: 0,
          image: "http://placehold.it/300x300/999/CCC",
          price: 0,
          detail: "",
        }}
      />
      <CartIcon />
    </CartProvider>
  );

  const button = await element.findByText("Add to cart");
  fireEvent.click(button);
  const cartCounter = await element.findByTestId("cart-counter");

  expect(cartCounter.textContent).toBe("1");
});

it("Should show the cart products after click", async () => {
  const element = render(
    <CartProvider>
      <ListItem
        item={{
          name: "",
          _id: 0,
          image: "http://placehold.it/300x300/999/CCC",
          price: 0,
          detail: "",
        }}
      />
      <ListItem
        item={{
          name: "",
          _id: 1,
          image: "http://placehold.it/300x300/999/CCC",
          price: 0,
          detail: "",
        }}
      />
      <Cart />
    </CartProvider>
  );

  const [button1, button2] = await element.findAllByText("Add to cart");
  fireEvent.click(button1);
  fireEvent.click(button2);
  const cartCounter = await element.findByTestId("cart-modal");

  expect(cartCounter).toMatchSnapshot();
});
