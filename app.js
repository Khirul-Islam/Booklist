// Dom Selaction
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const isbn = document.querySelector("#isbn");
const btn = document.querySelector(".btn");
const booklist = document.querySelector("#booklist");

//Add Event Listner For Submitting

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value == "" || author.value == "" || isbn.value == "") {
    alert("Please Input The Field");
  } else {
    //Creating Row
    const newRow = document.createElement("tr");

    // Creating Title

    const newTitle = document.createElement("th");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // Creating Author

    const newAuthor = document.createElement("th");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    // Creating Isbn

    const newIsbn = document.createElement("th");
    newIsbn.innerHTML = isbn.value;
    newRow.appendChild(newIsbn);

    //Create Delete Button

    const newBtn = document.createElement("Button");
    newBtn.innerHTML = `<i class="fa-solid fa-square-xmark btn_font"></i>`;
    newBtn.classList.add("btn");
    newBtn.classList.add("btn-danger");

    const button = document.createElement("th");
    newRow.appendChild(button);

    button.appendChild(newBtn);

    // Add Row in TBody

    booklist.appendChild(newRow);

    //Clear The Fild

    title.value = "";
    author.value = "";
    isbn.value = "";

    // Delete Button Event

    newBtn.addEventListener("click", () => {
      newRow.innerHTML = " ";
    });
  }
});
