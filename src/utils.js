export const showConfirmationMessage = (className, response, message) => {
  const messageContainer = document.querySelector("." + className);
  if (!response.ok) {
    messageContainer.innerHTML = "Something went wrong!";
  } else {
    messageContainer.innerHTML = message;
  }
};
