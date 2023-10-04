function editarRegistro(button) {
    var fila = button.parentNode.parentNode;
    var tipoDocumento = fila.getElementsByTagName("td")[0].innerText;
    var cedula = fila.getElementsByTagName("td")[1].innerText;
    var nombres = fila.getElementsByTagName("td")[2].innerText;
    var apellidos = fila.getElementsByTagName("td")[3].innerText;
    var correo = fila.getElementsByTagName("td")[4].innerText;
    var telefono = fila.getElementsByTagName("td")[5].innerText;
    var ciudad = fila.getElementsByTagName("td")[6].innerText;
    var direccion = fila.getElementsByTagName("td")[7].innerText;
    var fechaIngreso = fila.getElementsByTagName("td")[8].innerText;
    var estado = fila.getElementsByTagName("td")[9].innerText;

    document.getElementById("tipoDocumento").value = tipoDocumento;
    document.getElementById("cedula").value = cedula;
    document.getElementById("nombres").value = nombres;
    document.getElementById("apellidos").value = apellidos;
    document.getElementById("correo").value = correo;
    document.getElementById("telefono").value = telefono;
    document.getElementById("ciudad").value = ciudad;
    document.getElementById("direccion").value = direccion;
    var fechaParts = fechaIngreso.split("/");
    var fechaFormateada = fechaParts[2] + "-" + fechaParts[1] + "-" + fechaParts[0];
    document.getElementById("fechaIngreso").value = fechaFormateada;
    document.getElementById("estado").value = estado;
  }


const registrar = async() =>{
    const validarNombresRespuesta1 = validarNombres1 ();
    const validarApellidosRespuesta1 = validarApellidos1 ();
    const validarCedulaRespuesta1 = validarCedula1();
    const validarCiudadRespuesta1 = validarCiudad1 ();
    const validarTelefonoRespuesta1 = validarTelefono1 ();
    const validarFechaIngresoRespuesta1 = validarFechaIngreso1 ();
    const validarCorreoRespuesta1 = validarCorreo1 ();
    const validarDireccionRespuesta1 = validarDireccion1 ();

    if(validarNombresRespuesta1 && validarApellidosRespuesta1 &&  validarCedulaRespuesta1 && validarCiudadRespuesta1 && validarTelefonoRespuesta1 && validarFechaIngresoRespuesta1 && validarCorreoRespuesta1 && validarDireccionRespuesta1){       
            Swal.fire({
                icon: 'success',
                title: 'El empleado ha sido creado exitosamente',
                showConfirmButton: false,
                timer: 1500
              });
            setTimeout(() =>{
                window.location.href = 'listarEmpleado.html';
            },1000);  
        }
    }      


validarNombres1 = () => {
    let nombre = document.getElementById('nombres1').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (nombre === null || nombre === '' || nombre.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un nombre</span>';
      document.getElementById('errorNombres1').innerHTML = texto;
      return false;
    } else if (nombre.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre debe de ser mayor o igual a 3 letras</span>';
      document.getElementById('errorNombres1').innerHTML = texto;
      return false;
    } else if (!expresion.test(nombre)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorNombres1').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorNombres1').innerHTML = '';
      return true;
    }
};

  validarApellidos1 = () => {
    let nombre = document.getElementById('apellidos1').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (nombre === null || nombre === '' || nombre.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un nombre</span>';
      document.getElementById('errorApellidos1').innerHTML = texto;
      return false;
    } else if (nombre.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre debe de ser mayor o igual a 3 letras</span>';
      document.getElementById('errorApellidos1').innerHTML = texto;
      return false;
    } else if (!expresion.test(nombre)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorApellidos1').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorApellidos1').innerHTML = '';
      return true;
    }
};

  validarCedula1 = () => {
    let cedula = document.getElementById('cedula1').value;
    let texto;
    let expresion = /[0-9]/;
  
    if (cedula === null || cedula === '' || cedula.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese su numero de identificación</span   >';
      document.getElementById('errorCedula1').innerHTML = texto;
      return false;
    } else if (!expresion.test(cedula)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permite</span>';
      document.getElementById('errorCedula1').innerHTML = texto;
      return false;
    } else if (cedula.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Su cedula tiene que ser mayor a 6 caracteres numericos</span>';
      document.getElementById('errorCedula1').innerHTML = texto;
      return false;
    } else if (cedula.length > 13) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Su cédula tiene que ser menor a 13 carcateres numericos</span>';
      document.getElementById('errorCedula1').innerHTML = texto;
      return false;    
    }else{
      document.getElementById('errorCedula1').innerHTML = '';
      return true;
    } 
};

validarCiudad1 = () => {
    let ciudad = document.getElementById('ciudad1').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (ciudad === null || ciudad === '' || ciudad.length === 0) {
     
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la ciudad de residencia</span>';
      document.getElementById('errorCiudad1').innerHTML = texto;
      return false;
    } else if (ciudad.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre de la ciudad debe de ser mayor a 3 letras</span>';
      document.getElementById('errorCiudad1').innerHTML = texto;
      return false;
    } else if (!expresion.test(ciudad)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorCiudad1').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorCiudad1').innerHTML = '';
      return true;
    }
};

  validarTelefono1 = () => {
    let telefono = document.getElementById('telefono1').value.trim();
    let texto;
    let expresion = /^[0-9]+$/;
  
    if (!telefono) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, ingrese el número de teléfono.</span>';
        document.getElementById('errorTelefono1').innerHTML = texto;
        return false;
    } else if (telefono.length < 10) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Su número de teléfono debe tener al menos 10 dígitos.</span>';
        document.getElementById('errorTelefono1').innerHTML = texto;
        return false;
    } else if (!expresion.test(telefono)) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo números en su número de teléfono.</span>';
        document.getElementById('errorTelefono1').innerHTML = texto;
        return false;
    }else{
      document.getElementById('errorTelefono1').innerHTML = '';
      return true;
    }
};

validarFechaIngreso1 = () => {
    let fechaIngreso = document.getElementById('fechaIngreso1').value
    let texto;

if (fechaIngreso === null || fechaIngreso === '' || fechaIngreso.length === 0) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la fecha de ingreso del empleado</span>';
        document.getElementById('errorFechaIngreso1').innerHTML = texto;
        return false;
      }else{
        document.getElementById('errorFechaIngreso1').innerHTML = '';
      return true;
      }
}

validarCorreo1 = () => {
    let correo = document.getElementById('correo1').value.trim();
    let texto;
    let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;3
  
    if (!correo) {      
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, ingrese el correo electrónico.</span>';
        document.getElementById('errorCorreo1').innerHTML = texto;
        return false;
    } else if (!expresion.test(correo)) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de correo electrónico válida.</span>';
        document.getElementById('errorCorreo1').innerHTML = texto;
        return false;
    }else {
      document.getElementById('errorCorreo1').innerHTML = '';
      return true;
    }
}

validarDireccion1 = () => {
    let direccion = document.getElementById('direccion1').value.trim();
    let texto;
    let expresion = /^[a-zA-Z0-9\s'#,-]*$/;
  
    if (!direccion) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, ingrese una dirección de residencia.</span>';
        document.getElementById('errorDireccion1').innerHTML = texto;
        return false;
    } else if (direccion.length < 5) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La dirección de residencia debe tener al menos 5 caracteres.</span>';
        document.getElementById('errorDireccion1').innerHTML = texto;
        return false;
    } else if (!expresion.test(direccion)) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de residencia válida.</span>';
        document.getElementById('errorDireccion1').innerHTML = texto;
        return false;
    }else{
      document.getElementById('errorDireccion1').innerHTML = '';
      return true;
    } 
};


const ActualizarRegistro = async() =>{
    const validarNombresRespuesta = validarNombres ();
    const validarApellidosRespuesta = validarApellidos ();
    const validarCedulaRespuesta = validarCedula();
    const validarCiudadRespuesta = validarCiudad ();
    const validarTelefonoRespuesta = validarTelefono ();
    const validarFechaIngresoRespuesta = validarFechaIngreso ();
    const validarCorreoRespuesta = validarCorreo ();
    const validarDireccionRespuesta = validarDireccion ();

    if(validarNombresRespuesta && validarApellidosRespuesta && validarCedulaRespuesta && validarCiudadRespuesta && validarTelefonoRespuesta && validarFechaIngresoRespuesta && validarCorreoRespuesta && validarDireccionRespuesta){
        Swal.fire({
            icon: 'info',
            title: 'El Empleado ha sido modificado exitosamente',
            showConfirmButton: false,
            timer: 1500
          });
        setTimeout(() =>{
            window.location.href = 'listarEmpleado.html';
        },1000);    
    }
}


validarNombres = () => {
    let nombre = document.getElementById('nombres').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (nombre === null || nombre === '' || nombre.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un nombre</span>';
      document.getElementById('errorNombres').innerHTML = texto;
      return false;
    } else if (nombre.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre debe de ser mayor o igual a 3 letras</span>';
      document.getElementById('errorNombres').innerHTML = texto;
      return false;
    } else if (!expresion.test(nombre)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorNombres').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorNombres').innerHTML = '';
      return true;
    }
};

validarApellidos = () => {
    let nombre = document.getElementById('apellidos').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (nombre === null || nombre === '' || nombre.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un nombre</span>';
      document.getElementById('errorApellidos').innerHTML = texto;
      return false;
    } else if (nombre.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre debe de ser mayor o igual a 3 letras</span>';
      document.getElementById('errorApellidos').innerHTML = texto;
      return false;
    } else if (!expresion.test(nombre)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorApellidos').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorApellidos').innerHTML = '';
      return true;
    }
};

validarCedula = () => {
    let cedula = document.getElementById('cedula').value;
    let texto;
    let expresion = /[0-9]/;
  
    if (cedula === null || cedula === '' || cedula.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese su numero de identificación</span   >';
      document.getElementById('errorCedula').innerHTML = texto;
      return false;
    } else if (!expresion.test(cedula)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permite</span>';
      document.getElementById('errorCedula').innerHTML = texto;
      return false;
    } else if (cedula.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Su cedula tiene que ser mayor a 6 caracteres numericos</span>';
      document.getElementById('errorCedula').innerHTML = texto;
      return false;
    } else if (cedula.length > 13) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Su cédula tiene que ser menor a 13 carcateres numericos</span>';
      document.getElementById('errorCedula').innerHTML = texto;
      return false;    
    }else{
      document.getElementById('errorCedula').innerHTML = '';
      return true;
    } 
}

validarCiudad = () => {
    let ciudad = document.getElementById('ciudad').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (ciudad === null || ciudad === '' || ciudad.length === 0) {
     
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la ciudad de residencia</span>';
      document.getElementById('errorCiudad').innerHTML = texto;
      return false;
    } else if (ciudad.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre de la ciudad debe de ser mayor a 3 letras</span>';
      document.getElementById('errorCiudad').innerHTML = texto;
      return false;
    } else if (!expresion.test(ciudad)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorCiudad').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorCiudad').innerHTML = '';
      return true;
    }
};

  validarTelefono = () => {
    let telefono = document.getElementById('telefono').value.trim();
    let texto;
    let expresion = /^[0-9]+$/;
  
    if (!telefono) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, ingrese el número de teléfono.</span>';
        document.getElementById('errorTelefono').innerHTML = texto;
        return false;
    } else if (telefono.length < 10) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Su número de teléfono debe tener al menos 10 dígitos.</span>';
        document.getElementById('errorTelefono').innerHTML = texto;
        return false;
    } else if (!expresion.test(telefono)) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo números en su número de teléfono.</span>';
        document.getElementById('errorTelefono').innerHTML = texto;
        return false;
    }else{
      document.getElementById('errorTelefono').innerHTML = '';
      return true;
    }
};

validarFechaIngreso = () => {
    let fechaIngreso = document.getElementById('fechaIngreso').value
    let texto;

if (fechaIngreso === null || fechaIngreso === '' || fechaIngreso.length === 0) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la fecha de ingreso del empleado</span>';
        document.getElementById('errorFechaIngreso').innerHTML = texto;
        return false;
      }else{
        document.getElementById('errorFechaIngreso').innerHTML = '';
      return true;
      }
}

validarCorreo = () => {
    let correo = document.getElementById('correo').value.trim();
    let texto;
    let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;3
  
    if (!correo) {      
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, ingrese el correo electrónico.</span>';
        document.getElementById('errorCorreo').innerHTML = texto;
        return false;
    } else if (!expresion.test(correo)) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de correo electrónico válida.</span>';
        document.getElementById('errorCorreo').innerHTML = texto;
        return false;
    }else {
      document.getElementById('errorCorreo').innerHTML = '';
      return true;
    }
}

validarDireccion = () => {
    let direccion = document.getElementById('direccion').value.trim();
    let texto;
    let expresion = /^[a-zA-Z0-9\s'#,-]*$/;
  
    if (!direccion) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, ingrese una dirección de residencia.</span>';
        document.getElementById('errorDireccion').innerHTML = texto;
        return false;
    } else if (direccion.length < 5) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La dirección de residencia debe tener al menos 5 caracteres.</span>';
        document.getElementById('errorDireccion').innerHTML = texto;
        return false;
    } else if (!expresion.test(direccion)) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de residencia válida.</span>';
        document.getElementById('errorDireccion').innerHTML = texto;
        return false;
    }else{
      document.getElementById('errorDireccion').innerHTML = '';
      return true;
    } 
};


function descargarExcel() {
    // Obtener la tabla y sus filas
    var tabla = document.querySelector('.table');
    var filas = tabla.querySelectorAll('tbody tr');

    // Crear un objeto de tipo Workbook (libro de Excel)
    var wb = XLSX.utils.book_new();

    // Crear una hoja de cálculo
    var ws = XLSX.utils.table_to_sheet(tabla);

    // Agregar la hoja de cálculo al libro de Excel
    XLSX.utils.book_append_sheet(wb, ws, 'Hoja 1');

    // Convertir el libro de Excel a un archivo binario
    var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    // Crear un Blob a partir del archivo binario
    var blob = new Blob([wbout], { type: 'application/octet-stream' });

    // Generar un enlace de descarga
    var url = URL.createObjectURL(blob);

    // Configurar los atributos del enlace de descarga
    var a = document.createElement('a');
    a.href = url;
    a.download = 'empleados.xlsx';
    a.style.display = 'none';

    // Agregar el enlace al documento y simular el clic
    document.body.appendChild(a);
    a.click();

    // Limpiar y remover el enlace
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

if(document.querySelector('#btnRegistrar')){
    document.querySelector('#btnRegistrar')
    .addEventListener('click',registrar)
}

if(document.querySelector('#btnActualizar')){
    document.querySelector('#btnActualizar')
    .addEventListener('click',ActualizarRegistro)
}


const iconElement = document.getElementById('cliente-icon');
iconElement.addEventListener('click', () => {
  var iconElement = document.getElementById('cliente-icon');
  var isTrue = iconElement.classList.contains('true');


  iconElement.classList.toggle('inactive');
  if (iconElement.classList.contains('inactive')) {
    Swal.fire({
      title: '¿Estas seguro que deseas activar el cliente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, activarlo!'
    }).then((result) => {
      if (result.isConfirmed) {        
        iconElement.classList.remove('mdi-toggle-switch-off');
        iconElement.classList.add('mdi-toggle-switch');
        if (iconElement.style.color === 'green') {  
          iconElement.style.color = 'red';
          iconElement.classList.remove('true');
          isTrue = false;
        } else {
          iconElement.style.color = 'green';
          iconElement.classList.add('true');
          isTrue = true;
        }
      } 
    }) 
  } else {
    Swal.fire({
      title: '¿Estas seguro que deseas desactivar el cliente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, desactivarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        iconElement.classList.remove('mdi-toggle-switch');
        iconElement.classList.add('mdi-toggle-switch-off');
        if (iconElement.style.color === 'green') {  
          iconElement.style.color = 'red';
          iconElement.classList.remove('true');
          isTrue = false;
        } else {
          iconElement.style.color = 'green';
          iconElement.classList.add('true');
          isTrue = true;
        }
      }
    })        
  }

  toggleCliente();
});
