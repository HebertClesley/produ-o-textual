const button = document.getElementById("button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  validate();
  console.log("Clicou");
});

function validate() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (email.value == "") {
    alert("O campo e-mail é obrigatório");
    email.classList.add("erroInput");
  } else {
    alert("Seu e-mail esta correto");
    email.classList.add("sucessoInput");
  }

  if (password.value == "") {
    alert("O campo password é obrigatório");
    password.classList.add("erroInput");
  } else {
    alert("Passaword correto");
    password.classList.add("sucessoInput");
  }
}
