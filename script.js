const calculateButton = document.getElementById("button-send");

calculateButton.addEventListener("click", function (event) {
  event.preventDefault();

  let formulario = {
    name: " ",
    email: " ",
    mensaje: " ",
    imagen: " ",
  };

  for (let datos in formulario) {
    let respuestas = document.querySelector(`input[name="dato${datos}"]`).value;
    formulario[datos] = respuestas;
  }

  localStorage.setItem("datosForm", JSON.stringify(formulario));

  let arrayStorage = JSON.parse(localStorage.getItem("datosForm"));
  console.log(arrayStorage);
});
