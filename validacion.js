const validateFullName = () => {
  let fullNameInput = document.getElementById("fullName");
  let errorFullName = document.getElementById("error-fullName");

  fullNameInput.addEventListener("input", () => {
    const value = fullNameInput.value.trim(); //quitamos los espacios del inicio y del final

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
  });
};

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const validateEmail = () =>{
    let email = document.getElementById('email');
    let errorEmail = document.getElementById('error-email');

    email.addEventListener('input', () => {
        const value = email.value.trim(); 

        if (value.length === 0) {
            email.style.borderColor = 'red';
            email.style.backgroundColor = "#ffcccc";
            email.style.color = 'black';
            errorEmail.textContent = 'El campo email no puede estar vacio';
        }else if(!isValidEmail(value)){
          email.style.borderColor = 'red';
          email.style.backgroundColor = "#ffcccc";
          email.style.color = 'black';
          errorEmail.textContent = 'El Correro no tiene un formato valido';
        }else{
          email.style.borderColor = 'green';
          email.style.backgroundColor = "#333";
          email.style.color = 'white';
          errorEmail.textContent = "";
        }
    });
}

const isValidPassword = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,}$/;
  return regex.test(password);
}

const validatePassword = () =>{
  let  password = document.getElementById('password');
  let errorPassword = document.getElementById('error-password');

  password.addEventListener('input', () =>{
    const value = password.value.trim();
    if (value.length === 0){
      password.style.borderColor = 'red';
      password.style.backgroundColor = '#ffcccc';
      password.style.color = 'black';
      errorPassword.textContent = 'El campo Password no puede estar vacio';     
    }else if (!isValidPassword(value)) {
      password.style.borderColor = 'red';
      password.style.backgroundColor = '#ffcccc';
      password.style.color = 'black';
      errorPassword.textContent = 'La contraseña debe contener al menos una mayúscula, un número,un símbolo especial y minimos 8 caracteres';    
    } else {
      password.style.borderColor = 'green';
      password.style.backgroundColor = '#333';
      errorPassword.textContent = '';
    }
  });
}
const validateAge = () => {
  let ageInput = document.getElementById('age');
  let errorAge = document.getElementById('error-age');

  ageInput.addEventListener('input', () => {
    const value = ageInput.value; 

    if (value === "") {
      ageInput.style.borderColor = 'red';
      ageInput.style.backgroundColor = '#ffcccc';
      errorAge.textContent = 'Edad no puede estar vacía';
    } else {
      const age = Number(value); 

      if (age < 25 || age > 50) {
        ageInput.style.borderColor = 'red';
        ageInput.style.backgroundColor = '#ffcccc';
        ageInput.style.color = 'black'
        errorAge.textContent = 'La edad debe ser entre 25 y 50';
      } else {
        ageInput.style.borderColor = 'green';
        ageInput.style.backgroundColor = '#333';
        ageInput.style.color = 'white'
        errorAge.textContent = '';
      }
    }
  });
};


  const validateSpecialty = () =>{
 
  const errorSpecialty = document.getElementById('error-specialty');

  const selected = document.querySelector('input[name="specialty"]:checked');
  if (!selected) {
    specialtyFieldset.style.borderColor = 'red';
    errorSpecialty.textContent = 'Debes seleccionar una especialidad';
  }else{
    specialtyFieldset.style.borderColor = 'green';
    specialtyFieldset.style.background = '#333';
    errorSpecialty.textContent = '';
  }
  
};

 const specialtyRadios = document.querySelectorAll('input[name="specialty"]');
specialtyRadios.forEach(radio => {
  radio.addEventListener('change',validateSpecialty);
});

const specialtyFieldset = document.getElementById('specialty-fieldset');
specialtyFieldset.addEventListener('mouseleave', validateSpecialty);

const planetSelect = document.getElementById('planet');
const errorPlanet = document.getElementById('error-planet');

const validatePlanet = () => {
  const value = planetSelect.value;

  if (value === "") {
    planetSelect.style.borderColor = 'red';
    planetSelect.style.backgroundColor = '#ffcccc';
    planetSelect.style.color = 'black';
    errorPlanet.textContent = 'Selecciona tu planeta de origen';
  }else{
    planetSelect.style.borderColor = 'green';
    planetSelect.style.backgroundColor = '#333';
    planetSelect.style.color = 'white';
    errorPlanet.textContent = '';
  }
}

planetSelect.addEventListener('change',validatePlanet);
planetSelect.addEventListener('blur',validatePlanet);

const departureDate = document.getElementById('departureDate');
const errorDepartureDate = document.getElementById('error-departureDate');

const validateDepartureDate = () => {
  const value = departureDate.value;

  if (value === "") {
    departureDate.style.borderColor = 'red';
    departureDate.style.backgroundColor =  '#ffcccc';
    departureDate.style.color = 'black';
    errorDepartureDate.textContent = 'Fecha de disponibilidad obligatoria'
  }else{
    const selectDate = new Date(value);
    const today = new Date();

    if (selectDate < today) {
      departureDate.style.borderColor = 'red';
      departureDate.style.backgroundColor =  '#ffcccc';
      departureDate.style.color = 'black';
      errorDepartureDate.textContent = 'La fecha debe ser futura';

    }else{
       departureDate.style.borderColor = 'green';
      departureDate.style.backgroundColor = '#333';
      departureDate.style.color = 'white';
      errorDepartureDate.textContent = '';
    }
  }
}

departureDate.addEventListener('input',validateDepartureDate);
departureDate.addEventListener('blur',validateDepartureDate);

const fitnessLevel = document.getElementById('fitnessLevel');
const errorFitnessLevel = document.getElementById('error-fitnessLevel');

const validateFitnessLEvel = () =>{
  const value = fitnessLevel.value;

  if (value === "1") {
      errorFitnessLevel.textContent = 'Nivel de condicion fisica obligatorio';
      errorFitnessLevel.style.color = 'red';
  }else{
    const level = Number(value);
    if (level < 7) {
      
      errorFitnessLevel.textContent = 'La condicion fisica no puede estar por debajo de 7';
      errorFitnessLevel.style.color = 'red';
    }else{

      errorFitnessLevel.textContent = "Nivel de condicion fisica correcta";
      errorFitnessLevel.style.color = 'green';

    }
  }
}

fitnessLevel.addEventListener('input',validateFitnessLEvel);
fitnessLevel.addEventListener('blur',validateFitnessLEvel);


validateFullName();
validateEmail();
validatePassword();
validateAge();
