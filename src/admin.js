import { addNewProduct } from "./products.js";

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
  console.log(product);
};

document.getElementById("add-item").addEventListener("click", addProduct);
