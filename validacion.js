/**Validacion Nombre Completo */
const fullNameInput = document.getElementById("fullName");
const errorFullName = document.getElementById("error-fullName");

const validateFullName = () => {
  const value = fullNameInput.value.trim();

  if (value.length === 0) {
    fullNameInput.style.borderColor = "red";
    fullNameInput.style.backgroundColor = "#ffcccc";
    fullNameInput.style.color = "black";
    errorFullName.textContent = "El campo de nombre no puede estar vacio";
  } else if (value.length < 3) {
    fullNameInput.style.borderColor = "red";
    fullNameInput.style.backgroundColor = "#ffcccc";
    fullNameInput.style.color = "black";
    errorFullName.textContent =
      "Este campo no puede tener menos de 3 caracteres";
  } else {
    fullNameInput.style.borderColor = "green";
    fullNameInput.style.backgroundColor = "#333";
    fullNameInput.style.color = "white";

    errorFullName.textContent = "";
  }
};

fullNameInput.addEventListener("input", validateFullName);
fullNameInput.addEventListener("blur", validateFullName);

/**Validacion Correo Electronico */

const email = document.getElementById("email");
const errorEmail = document.getElementById("error-email");
const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateEmail = () => {
  const value = email.value.trim();

  if (value.length === 0) {
    email.style.borderColor = "red";
    email.style.backgroundColor = "#ffcccc";
    email.style.color = "black";
    errorEmail.textContent = "El campo email no puede estar vacio";
  } else if (!isValidEmail(value)) {
    email.style.borderColor = "red";
    email.style.backgroundColor = "#ffcccc";
    email.style.color = "black";
    errorEmail.textContent = "El Correro no tiene un formato valido";
  } else {
    email.style.borderColor = "green";
    email.style.backgroundColor = "#333";
    email.style.color = "white";
    errorEmail.textContent = "";
  }
};

email.addEventListener("input", validateEmail);
email.addEventListener("blur", validateEmail);

/**Validacion Contraseña */

const password = document.getElementById("password");
const errorPassword = document.getElementById("error-password");
const isValidPassword = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,}$/;
  return regex.test(password);
};

const validatePassword = () => {
  const value = password.value.trim();
  if (value.length === 0) {
    password.style.borderColor = "red";
    password.style.backgroundColor = "#ffcccc";
    password.style.color = "black";
    errorPassword.textContent = "El campo Password no puede estar vacio";
  } else if (!isValidPassword(value)) {
    password.style.borderColor = "red";
    password.style.backgroundColor = "#ffcccc";
    password.style.color = "black";
    errorPassword.textContent =
      "La contraseña debe contener al menos una mayúscula, un número,un símbolo especial y minimos 8 caracteres";
  } else {
    password.style.borderColor = "green";
    password.style.backgroundColor = "#333";
    password.style.color = "white";
    errorPassword.textContent = "";
  }
};

password.addEventListener("input", validatePassword);
password.addEventListener("blur", validatePassword);

/**Validadcion edad */
const ageInput = document.getElementById("age");
const errorAge = document.getElementById("error-age");

const validateAge = () => {
  const value = ageInput.value;

  if (value === "") {
    ageInput.style.borderColor = "red";
    ageInput.style.backgroundColor = "#ffcccc";
    ageInput.style.color = "black";
    errorAge.textContent = "Edad no puede estar vacía";
  } else {
    const age = Number(value);

    if (age < 25 || age > 50) {
      ageInput.style.borderColor = "red";
      ageInput.style.backgroundColor = "#ffcccc";
      ageInput.style.color = "black";
      errorAge.textContent = "La edad debe ser entre 25 y 50";
    } else {
      ageInput.style.borderColor = "green";
      ageInput.style.backgroundColor = "#333";
      ageInput.style.color = "white";
      errorAge.textContent = "";
    }
  }
};

ageInput.addEventListener("input", validateAge);
ageInput.addEventListener("blur", validateAge);
/**Validacion Especialidad */

const validateSpecialty = () => {
  const errorSpecialty = document.getElementById("error-specialty");

  const selected = document.querySelector('input[name="specialty"]:checked');
  if (!selected) {
    specialtyFieldset.style.borderColor = "red";
    errorSpecialty.textContent = "Debes seleccionar una especialidad";
  } else {
    specialtyFieldset.style.borderColor = "green";
    specialtyFieldset.style.background = "#333";
    errorSpecialty.textContent = "";
  }
};

const specialtyRadios = document.querySelectorAll('input[name="specialty"]');
specialtyRadios.forEach((radio) => {
  radio.addEventListener("change", validateSpecialty);
});

const specialtyFieldset = document.getElementById("specialty-fieldset");
specialtyFieldset.addEventListener("mouseleave", validateSpecialty);

/**Validacion Planeta */

const planetSelect = document.getElementById("planet");
const errorPlanet = document.getElementById("error-planet");

const validatePlanet = () => {
  const value = planetSelect.value;

  if (value === "") {
    planetSelect.style.borderColor = "red";
    planetSelect.style.backgroundColor = "#ffcccc";
    planetSelect.style.color = "black";
    errorPlanet.textContent = "Selecciona tu planeta de origen";
  } else {
    planetSelect.style.borderColor = "green";
    planetSelect.style.backgroundColor = "#333";
    planetSelect.style.color = "white";
    errorPlanet.textContent = "";
  }
};

planetSelect.addEventListener("change", validatePlanet);
planetSelect.addEventListener("blur", validatePlanet);
/**Validacion Fecha de despegue */

const departureDate = document.getElementById("departureDate");
const errorDepartureDate = document.getElementById("error-departureDate");

const validateDepartureDate = () => {
  const value = departureDate.value;

  if (value === "") {
    departureDate.style.borderColor = "red";
    departureDate.style.backgroundColor = "#ffcccc";
    departureDate.style.color = "black";
    errorDepartureDate.textContent = "Fecha de disponibilidad obligatoria";
  } else {
    const selectDate = new Date(value);
    const today = new Date();

    if (selectDate < today) {
      departureDate.style.borderColor = "red";
      departureDate.style.backgroundColor = "#ffcccc";
      departureDate.style.color = "black";
      errorDepartureDate.textContent = "La fecha debe ser futura";
    } else {
      departureDate.style.borderColor = "green";
      departureDate.style.backgroundColor = "#333";
      departureDate.style.color = "white";
      errorDepartureDate.textContent = "";
    }
  }
};

departureDate.addEventListener("input", validateDepartureDate);
departureDate.addEventListener("blur", validateDepartureDate);

/**Validacion nivel de condicion fisica */

const fitnessLevel = document.getElementById("fitnessLevel");
const errorFitnessLevel = document.getElementById("error-fitnessLevel");

const validateFitnessLevel = () => {
  const value = fitnessLevel.value;

  if (value === "1") {
    errorFitnessLevel.textContent = "Nivel de condicion fisica obligatorio";
    errorFitnessLevel.style.color = "red";
  } else {
    const level = Number(value);
    if (level < 7) {
      errorFitnessLevel.textContent =
        "La condicion fisica no puede estar por debajo de 7";
      errorFitnessLevel.style.color = "red";
    } else {
      errorFitnessLevel.textContent = "";
      errorFitnessLevel.style.color = "";
    }
  }
};

fitnessLevel.addEventListener("input", validateFitnessLevel);
fitnessLevel.addEventListener("blur", validateFitnessLevel);

/**Validadcion historial medico */

const medicalFile = document.getElementById("medicalFile");
const errorMedicalFile = document.getElementById("error-medicalFile");

const validateMedicalFile = () => {
  const file = medicalFile.files[0]; //con esto seleccionamos el primer archivo(si hay claro)

  if (!file) {
    medicalFile.style.borderColor = "red";
    medicalFile.backgroundColor = "#ffcccc";
    errorMedicalFile.textContent = "Archivo de historial medico obligatorio";
  } else {
    const fileName = file.name;
    if (!fileName.endsWith(".pdf")) {
      medicalFile.style.borderColor = "red";
      medicalFile.style.backgroundColor = "#ffcccc";
      errorMedicalFile.textContent = "El archivo debe ser PDF";
    } else {
      medicalFile.style.borderColor = "green";
      medicalFile.style.backgroundColor = "#333";
      errorMedicalFile.textContent = "";
    }
  }
};

medicalFile.addEventListener("change", validateMedicalFile);

/**Validacion comentarios */

const comments = document.getElementById("comments");
const errorComments = document.getElementById("error-comments");

const validateComments = () => {
  const value = comments.value;
  if (value === "") {
    comments.style.borderColor = "";
    comments.style.backgroundColor = "";
    errorComments.textContent = "";
  } else if (value.length < 10) {
    comments.style.borderColor = "red";
    comments.style.backgroundColor = "#ffcccc";
    comments.style.color = "black";
    errorComments.textContent = "Debe añadir al menos 10 caracteres";
  } else {
    comments.style.borderColor = "green";
    comments.style.backgroundColor = "#333";
    comments.style.color = "white";
    errorComments.textContent = "";
  }
};

comments.addEventListener("input", validateComments);
/**Validacion riesgos de mision */

const acceptRisk = document.getElementById("acceptRisk");
const errorAcceptRisk = document.getElementById("error-acceptRisk");

const validateAcceptRisk = () => {
  if (!acceptRisk.checked) {
    errorAcceptRisk.textContent = "Debe aceptar los riesgos de misión";
    errorAcceptRisk.style.color = "red";
  } else {
    errorAcceptRisk.textContent = "";
    errorAcceptRisk.style.color = "";
  }
};

acceptRisk.addEventListener("change", validateAcceptRisk);

/**Validacion todo es correcto */

const form = document.getElementById('astronautForm');
const resultMessage = document.getElementById('resultMessage');

const validateAll = () => {
  // Validamos todos los campos uno por uno
  validateFullName();
  validateEmail();
  validatePassword();
  validateAge();
  validateSpecialty();
  validatePlanet();
  validateDepartureDate();
  validateFitnessLevel();
  validateMedicalFile();
  validateComments();
  validateAcceptRisk();

  // Verificamos si hay algún mensaje de error visible
  const errorMessages = document.querySelectorAll('.error-message');
  let errors = false;
  
  errorMessages.forEach(error => {
    if (error.textContent.trim() !== '') {
      errors = true;
    }
  });

  if (errors) {
    resultMessage.textContent = 'Corrige los errores antes de enviar';
    resultMessage.style.color = 'red';
    
  } else {
    resultMessage.textContent = 'Todo ha sido correcto, nos vemos en Marte';
    resultMessage.style.color = 'green';
    
  }
};

form.addEventListener('submit', (e) => {
if (!validateAll()) {
  e.preventDefault(); // se detiene el envio si hay errores
}
});
