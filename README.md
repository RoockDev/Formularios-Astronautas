# Formularios: Astronautas

## Ejercicio: Formulario de Selección de Astronautas

### Contexto

La **Agencia Espacial Internacional** está en plena búsqueda de candidatos para la **Misión Marte 2030**.

Como desarrollador web, tu tarea es construir un **formulario de postulación** que valide los datos de los aspirantes de manera estricta, mostrando errores cuando sea necesario y confirmando la postulación sólo si todo es correcto.

Además de los mensajes de error, cada campo deberá **cambiar de estilo visual**:

- ✅ Verde cuando el dato sea válido.  
- ❌ Rojo cuando no cumpla los requisitos.

---

## Requisitos

El formulario debe incluir los siguientes campos y validaciones:

1. **Nombre completo** (`text`)  
   - Obligatorio.  
   - Mínimo 3 caracteres.

2. **Correo de contacto** (`email`)  
   - Obligatorio.  
   - Formato de correo válido.

3. **Código de seguridad** (`password`)  
   - Obligatorio.  
   - Mínimo 8 caracteres.  
   - Debe contener:  
     - Al menos una **letra mayúscula**  
     - Al menos un **número**  
     - Al menos un **símbolo especial** (`!@#$%&*`)

4. **Edad** (`number`)  
   - Obligatorio.  
   - Entre **25 y 50 años** (inclusive).

5. **Especialidad** (`radio`)  
   - Opciones: `Piloto`, `Ingeniero`, `Médico`, `Científico`  
   - Seleccionar **una opción obligatoria**.

6. **Planeta de origen** (`select`)  
   - Obligatorio.  
   - No se acepta la opción vacía por defecto.

7. **Fecha de disponibilidad para despegar** (`date`)  
   - Obligatoria.  
   - Debe ser una **fecha futura** (posterior a hoy).

8. **Nivel de condición física** (`range`, 1–10)  
   - Obligatorio.  
   - Valor mínimo: **7**.

9. **Expediente médico** (`file`)  
   - Obligatorio.  
   - Solo se aceptan archivos en formato **PDF**.

10. **Comentarios adicionales** (`textarea`)  
    - Opcional.  
    - Si se completa, debe tener **mínimo 10 caracteres**.

11. **Acepto los riesgos de la misión** (`checkbox`)  
    - Obligatorio marcarlo.

---

### Comportamiento esperado

- 🟥 **Campos inválidos**: borde y fondo **rojos**.  
- 🟩 **Campos válidos**: borde y fondo **verdes**.  
- Los mensajes de error deben ser **temáticos y descriptivos**, por ejemplo:  
  - `"Acceso denegado"`  
  - `"Selecciona tu planeta de origen"`  
  - `"Tu expediente debe ser un PDF"`  
- Si **todos los campos son válidos**, mostrar el mensaje:  
  > **Todo ha sido correcto.**
