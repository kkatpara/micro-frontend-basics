import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV.trim() === "development") {
  const el = document.querySelector("#myproducts");

  if (el) {
    mount(el);
  }
}

export { mount };
