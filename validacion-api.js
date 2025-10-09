document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("astronautForm");

  // Funciones de estilo (deben declararse antes de usarse)
  const setValidStyle = (element) => {
    element.style.borderColor = "green";
    element.style.backgroundColor = "#333";
    element.style.color = "white";
  };

  const setInvalidStyle = (element) => {
    element.style.borderColor = "red";
    element.style.backgroundColor = "#ffcccc";
    element.style.color = "black";
  };

  const getErrorMessage = (field) => {
    //asi podemos acceder a todas las propiedades de field sin escribir muchas constantes
    const { validity, type, minLength, min, max, id, value } = field;

    
    //todo esto de la api
    //devuelve true si el campo del html tiene requiered y esta vacio
    if (validity.valueMissing) {
      return "este campo es obligatorio.";
    }

    //devuelve true si el contenido no coincide con el typo del imput normalmente suele ser email
    if (validity.typeMismatch) {
      return type === "email"
        ? "Formato de correo incorrecto"
        : "El tipo de dato es incorrecto.";
    }

    //devuelve true si el campo tiene menos minlength que el que hay en el html
    if (validity.tooShort) {
      return `Demasiado corto. Se requieren al menos ${minLength} caracteres.`;
    }

    /**
     * validity.rangeUnderflow / rangeOverflow son true si el campo es de tipo number
     *  y el valor es menor que  min o mayor que max son de la API.
     */
    if (validity.rangeUnderflow) {
      return `El valor debe ser como mínimo ${min}.`;
    }
    if (validity.rangeOverflow) {
      return `El valor no puede superar ${max}.`;
    }
    /**
     * validity.patternMismatch es true si el campo tiene un atributo pattern (con una expresion regular)
     *  y el contenido no coincide. se usamos para la contraseña. Es de la API.
     */
    if (validity.patternMismatch) {
      return "Código de seguridad inválido. Revisa los requisitos.";
    }
    
    // Aqui pongo validaciones que no se pueden poner arribaL
    if (id === "departureDate") {
        const selectedDate = new Date(value);
        const today = new Date();
        if (selectedDate < today) {
            return "La fecha debe ser futura. ¡No puedes despegar ayer!";
        }
    }

    // Un mensaje por defecto si ocurre otro error no especificado
    return "El valor introducido no es válido.";
  };

  //esto revisa un campo y actualiza su estilo y mensaje de error.
  const validateField = (field) => {
    const errorSpan = document.getElementById(
      `error-${field.id || field.name}`
    );
    const validity = field.validity; //de la API

    //Si el campo es valido, lo ponemos en verde y limpiamos errorse
    if (validity.valid) {
      setValidStyle(field);
      errorSpan.textContent = "";
      return true;
    }

    // si el campo no es valido, lo ponemos en rojo y se muestra mensaje
    setInvalidStyle(field);
    errorSpan.textContent = getErrorMessage(field);
    return false;
  };

  //envio de formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isFormValid = true;
    const fieldsToValidate = form.querySelectorAll("input,select,textarea");

    //validamos cada campo solo
    fieldsToValidate.forEach((field) => {
      // si por lo que sea solo un campo es invalido, ya todo el formulario lo es
      if (!validateField(field)) {
        isFormValid = false;
      }
    });

    const resultMessage = document.getElementById("resultMessage");
    if (isFormValid) {
      resultMessage.textContent =
        "Todo correcto, nos vemos en Marte!!!!!!!!!!!!!!!!";
      resultMessage.style.color = "green";
    } else {
      resultMessage.textContent = "Corrige todos los errores antes de enviar";
     
      resultMessage.style.color = "red";
    }
  });

  //ahora validamos mientras el usuario escribe, para saber si deja el foco en algun campo
  const fields = form.querySelectorAll("input,select,textarea");
  fields.forEach((field) => {
    field.addEventListener("blur", () => {
      validateField(field);
    });
  });
});