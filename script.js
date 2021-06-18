const handleFormSubmit = (event) => {
  event.preventDefault();

  const data = new FormData(event.target);
  const formJSON = Object.fromEntries(data.entries());
  formJSON.snacks = data.getAll('snacks');

  const dataContainer = document.getElementsByClassName("results_display")[0];

  dataContainer.textContent = JSON.stringify(formJSON, null, 4);
};

const form = document.getElementsByClassName("contact-form")[0];
form.addEventListener("submit", handleFormSubmit);
