const createTitle = (text) => {
  const title = document.createElement("h1");
  title.innerHTML = text;
  document.body.appendChild(title)
}

const createParaphase = (text) => {
  const title = document.createElement("p");
  title.innerHTML = text;
  document.body.appendChild(title)
}

export {
  createTitle,
  createParaphase,
}
