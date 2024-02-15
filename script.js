let formData = [
  {
    id: "1",
    type: "input",
    label: "Sample Label",
    placeholder: "Sample placeholder",
  },
  {
    id: "2",
    type: "select",
    label: "Select",
    options: ["Sample Option","Option 1", "Option 2", "Option 3"],
  },
  {
    id: "3",
    type: "textarea",
    label: "Textarea",
    placeholder: "Sample Placeholder",
  },
];

const formContainer = document.getElementById("form-container");
const addButton = document.getElementById("add-input");
const addSelectButton = document.getElementById("add-select");
const addTextareaButton = document.getElementById("add-textarea");
const saveButton = document.getElementById("save");

let nextId = 4;

// Function to render form elements
function renderForm() {
  formContainer.innerHTML = "";
  formData.forEach((item) => {
    let element;
    switch (item.type) {
      case "input":
        element = document.createElement("input");
        element.classList.add("border-input");
        element.type = "text";
        element.placeholder = item.placeholder;
        break;
      case "select":
        element = document.createElement("select");
        element.classList.add("border-input");
        item.options.forEach((option) => {
          let optionElement = document.createElement("option");
          optionElement.text = option;
          optionElement.classList.add("option");
          element.add(optionElement);
        });
        break;
      case "textarea":
        element = document.createElement("textarea");
        element.classList.add("border-input");
        element.placeholder = item.placeholder;
        break;
      default:
        break;
    }

    let labelDiv = document.createElement("div");
    labelDiv.classList.add("label-div");

    let label = document.createElement("label");
    label.classList.add("label");
    label.setAttribute("for", `input-${item.id}`);
    label.innerHTML = `
          <div>${item.label}</div>
          <div><i class="fa-solid fa-trash" onclick="deleteElement('${item.id}')"></i></div>
        `;

    element.id = `input-${item.id}`;
    labelDiv.appendChild(label);
    labelDiv.appendChild(element);
    formContainer.appendChild(labelDiv);
  });
}

// Initial form rendering
renderForm();

// Event listener for adding input
addButton.addEventListener("click", () => {
  formData.push({
    id: nextId.toString(),
    type: "input",
    label: "Sample Label",
    placeholder: "Sample Placeholder",
  });
  nextId++;
  renderForm();
});

// Event listener for adding select
addSelectButton.addEventListener("click", () => {
  formData.push({
    id: nextId.toString(),
    type: "select",
    label: "Select",
    options: ["Option 1", "Option 2", "Option 3"],
  });
  nextId++;
  renderForm();
});

// Event listener for adding textarea
addTextareaButton.addEventListener("click", () => {
  formData.push({
    id: nextId.toString(),
    type: "textarea",
    label: "Textarea",
    placeholder: "Sample Placeholder",
  });
  nextId++;
  renderForm();
});

// Event listener for save button
saveButton.addEventListener("click", () => {
  console.log(JSON.stringify(formData, null, 2));
});

// Function to delete form element
function deleteElement(id) {
  formData = formData.filter((item) => item.id !== id);
  renderForm();
}
