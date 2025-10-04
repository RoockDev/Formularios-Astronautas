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

validateFullName();
validateEmail();
validatePassword();
validateAge();
