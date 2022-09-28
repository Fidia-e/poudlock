let app = {
  elements: {},
  houses: ["anthorvus", "darioptera", "lustrix", "maxopus"],
  images: [
    "./images/anthorvus.png",
    "./images/darioptera.png",
    "./images/lustrix.png",
    "./images/maxopus.png",
  ],

  init: function () {
    app.elements.wrapper = document.querySelector(".wrapper");
    app.elements.form = app.elements.wrapper.lastElementChild;
    app.elements.form.addEventListener("submit", app.handleFormSubmit);
    app.elements.bubble = document.querySelector(".speech");
    app.elements.randomImage = Math.floor(Math.random() * app.images.length);
    app.elements.newImage = new Image();
  },

  getInputValue: function () {
    let input = document.querySelector(".name");
    return input.value;
  },

  handleFormSubmit: function (e) {
    e.preventDefault();
    let name = app.getInputValue();
    let msg = "Ça ne fonctionne qu'avec un nom, pardi !";

    if (name.length === 0 || name === " ") {
      console.error("Comment tu t'appeeeeeelles ??");
      app.elements.bubble.replaceChildren(msg);
    } else if (name.length > 0) {
      app.elements.bubble.replaceChildren("");
      app.elements.bubble.appendChild(app.elements.newImage);

      if (name.length === 8) {
        app.elements.newImage.src = app.images[3];
      } else if (
        name.charAt(0) === "L" ||
        name.charAt(name.length - 1) === "x"
      ) {
        app.elements.newImage.src = app.images[2];
      } else if (name.length % 5 === 0 || name.length % 3 === 0) {
        app.elements.newImage.src = app.images[0];
      } else {
        app.elements.newImage.src = app.images[1];
      }
    } else {
      app.elements.bubble.innerHTML = "";
      app.elements.bubble.appendChild(app.elements.newImage);
      app.elements.newImage.src = app.images[app.elements.randomImage];
    }
  },
};

document.addEventListener("DOMContentLoaded", app.init);
