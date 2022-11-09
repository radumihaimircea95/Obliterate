import { addNewProduct } from "./products.js";
import { showConfirmationMessage } from "./utils.js";
const nameInputElement = document.querySelector(".add-product-form #name");
const imageInputElement = document.querySelector(".add-product-form #image");
const descriptionInputElement = document.querySelector(
  ".add-product-form #description"
);
const priceInputElement = document.querySelector(".add-product-form #price");
const sizeInputElement = document.querySelector(".add-product-form #size");
const genderInputElement = document.querySelector(".add-product-form #gender");
const quantityInputElement = document.querySelector(".add-product-form #qty");

const addProduct = async () => {
  const product = {
    name: nameInputElement.value,
    image: imageInputElement.value,
    description: descriptionInputElement.value,
    price: priceInputElement.value,
    size: sizeInputElement.value,
    gender: genderInputElement.value,
    stock: quantityInputElement.value,
  };
  await addNewProduct(product);

  // const addProduct = async () => {
  //   let response = await fetch(
  //     "https://633028d1591935f3c88ad2bb.mockapi.io/products",
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         name: nameInputElement.value,
  //         imgURL: imageInputElement.value,
  //         description: descriptionInputElement.value,
  //         price: priceInputElement.value,
  //         size: sizeInputElement.value,
  //         gender: genderInputElement.value,
  //         stock: quantityInputElement.value,
  //       }),
  //     }
  //   );
  //   let data = await response.json();
  //   console.log(data);

  const response = await addNewProduct(product);
  showConfirmationMessage(
    "add-product-message",
    response,
    "Product succesfully added."
  );
};

document.getElementById("add-item").addEventListener("click", addProduct);

document.getElementById("add-new-product").addEventListener("click", () => {
  document.querySelector(".add-product-container").classList.toggle("hidden");
});
