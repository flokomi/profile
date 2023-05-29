// emptyItem = document.querySelector(".empty");
emptyItem = document.querySelector(".empty");
gameItems = document.querySelectorAll(".game-item");

gameItems.forEach((element) => {
  element.addEventListener("click", () => {
    if (
      checkRight(element) ||
      checkLeft(element) ||
      checkTop(element) ||
      checkBottom(element)
    ) {
      moveItem(element);
    }
  });
});

const checkRight = (element) => {
  let id = element.getAttribute("id");
  console.log(id);
  let neighbourId = (parseInt(id) + 1).toString();
  let checkField = document.getElementById(neighbourId);
  if (id == 3 || id == 6 || id == 9) {
    return false;
  } else if (checkField.getAttribute("class").includes("empty")) {
    console.log("empty nebenan");
    return true;
  }
};

const checkLeft = (element) => {
  let id = element.getAttribute("id");
  console.log(id);
  let neighbourId = (parseInt(id) - 1).toString();
  let checkField = document.getElementById(neighbourId);
  if (id == 1 || id == 4 || id == 7) {
    return false;
  } else if (checkField.getAttribute("class").includes("empty")) {
    console.log("empty nebenan");
    return true;
  }
};

const checkTop = (element) => {
  let id = element.getAttribute("id");
  console.log(id);
  let neighbourId = (parseInt(id) + 3).toString();
  let checkField = document.getElementById(neighbourId);
  if (id > 6) {
    return false;
  } else if (checkField.getAttribute("class").includes("empty")) {
    console.log("empty nebenan");
    return true;
  }
};

const checkBottom = (element) => {
  let id = element.getAttribute("id");
  console.log(id);
  let neighbourId = (parseInt(id) - 3).toString();
  let checkField = document.getElementById(neighbourId);
  if (id < 4) {
    return false;
  } else if (checkField.getAttribute("class").includes("empty")) {
    console.log("empty nebenan");
    return true;
  }
};

const moveItem = (element) => {
  emptyItem = document.querySelector(".empty");
  emptyItem.textContent = element.textContent;
  emptyItem.classList.remove("empty");
  element.textContent = "";
  element.classList.add("empty");
};
