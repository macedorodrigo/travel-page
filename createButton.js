const creadButton = (id, href, text) => {
  const button = document.createElement("a");
  button.setAttribute("id", id);
  button.setAttribute("href", href);
  button.innerHTML = text;
  document.body.appendChild(button)
}

export { creadButton }