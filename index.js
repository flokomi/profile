gameItems = document.querySelectorAll(".game-item");
// console.log(gameItems);

gameItems.forEach((element) => {
  element.addEventListener("click", () => {
    if (
      // Check ob ein angrenzendes Feld "empty" ist
      checkRight(element) ||
      checkLeft(element) ||
      checkTop(element) ||
      checkBottom(element)
    ) {
      elementImage = element.querySelector(".game-field-img");
      // console.log(elementImage);
      moveItem(element, elementImage);
    }
  });
});

const checkRight = (element) => {
  // Ermittle die ID des gecklickten Elements
  let id = element.getAttribute("id");
  // console.log(id);
  // Schaue mit ID + 1 auf das rechts liegende Feld
  let neighbourId = (parseInt(id) + 1).toString();
  let checkField = document.getElementById(neighbourId);
  // Rechten Rand des Spielfelds definieren (wo kann es nicht nach rechts weitergehen?)
  if (id == 4 || id == 8 || id == 12 || id == 16) {
    return false;
    // Wenn rechter Rand nicht angeklickt, schau ob das rechts liegende Feld "empty" ist und falls ja, gib true zurück.
  } else if (checkField.getAttribute("class").includes("empty")) {
    // console.log("empty nebenan");
    return true;
  }
};

const checkLeft = (element) => {
  let id = element.getAttribute("id");
  // console.log(id);
  let neighbourId = (parseInt(id) - 1).toString();
  let checkField = document.getElementById(neighbourId);
  if (id == 1 || id == 5 || id == 9 || id == 13) {
    return false;
  } else if (checkField.getAttribute("class").includes("empty")) {
    // console.log("empty nebenan");
    return true;
  }
};

const checkBottom = (element) => {
  let id = element.getAttribute("id");
  // console.log(id);
  let neighbourId = (parseInt(id) + 4).toString();
  let checkField = document.getElementById(neighbourId);
  if (id > 12) {
    return false;
  } else if (checkField.getAttribute("class").includes("empty")) {
    // console.log("empty nebenan");
    return true;
  }
};

const checkTop = (element) => {
  let id = element.getAttribute("id");
  // console.log(id);
  let neighbourId = (parseInt(id) - 4).toString();
  let checkField = document.getElementById(neighbourId);
  if (id < 5) {
    return false;
  } else if (checkField.getAttribute("class").includes("empty")) {
    // console.log("empty nebenan");
    return true;
  }
};

const moveItem = (element, elementImage) => {
  emptyItem = document.querySelector(".empty");
  emptyItem.insertAdjacentElement("afterbegin", elementImage);
  emptyItem.classList.remove("empty");
  element.classList.add("empty");
};
