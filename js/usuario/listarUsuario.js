function editarRegistro(button) {
    var fila = button.parentNode.parentNode;
    var nombreCompleto = fila.getElementsByTagName("td")[0].innerText;
    var cedula = fila.getElementsByTagName("td")[1].innerText;
    var correo = fila.getElementsByTagName("td")[2].innerText;
    var telefono = fila.getElementsByTagName("td")[3].innerText;
    var rol = fila.getElementsByTagName("td")[4].innerText;
    var estado = fila.getElementsByTagName("td")[5].innerText;

    document.getElementById("nombre").value = nombreCompleto;
    document.getElementById("cedula").value = cedula;
    document.getElementById("correo").value = correo;
    document.getElementById("telefono").value = telefono;
    document.getElementById("rol").value = rol;
    document.getElementById("estado").value = estado;
    
  }


const registrar = async() =>{
    const validarNombresRespuesta1 = validarNombres1 ();
    const validarCedulaRespuesta1 = validarCedula1();
    const validarCorreoRespuesta1 = validarCorreo1 ();
    const validarTelefonoRespuesta1 = validarTelefono1 ();


    if(validarNombresRespuesta1 && validarCedulaRespuesta1 && validarCorreoRespuesta1 && validarTelefonoRespuesta1){
        Swal.fire({
            icon: 'success',
            title: 'El Usuario ha sido creado exitosamente',
            showConfirmButton: false,
            timer: 1500
          });
        setTimeout(() =>{
            window.location.href = 'listarUsuario.html';
        },1000);     
    }      
}

validarNombres1 = () => {
    let nombre = document.getElementById('nombre1').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (nombre === null || nombre === '' || nombre.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un nombre</span>';
      document.getElementById('errorNombre1').innerHTML = texto;
      return false;
    } else if (nombre.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre debe de ser mayor o igual a 3 letras</span>';
      document.getElementById('errorNombre1').innerHTML = texto;
      return false;
    } else if (!expresion.test(nombre)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorNombre1').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorNombre1').innerHTML = '';
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
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permite números</span>';
      document.getElementById('errorCedula1').innerHTML = texto;
      return false;
    } else if (cedula.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Su cédula tiene que ser mayor a 3 dígitos</span>';
      document.getElementById('errorCedula1').innerHTML = texto;
      return false;
    } else if (cedula.length > 13) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Su cédula tiene que ser menor a 13 dígitos</span>';
      document.getElementById('errorCedula1').innerHTML = texto;
      return false;    
    }else{
      document.getElementById('errorCedula1').innerHTML = '';
      return true;
    } 
};

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

validarTelefono1 = () => {
    let telefono = document.getElementById('telefono1').value.trim();
    let texto;
    let expresion = /^[0-9]+$/;
  
    if (!telefono) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un número de teléfono.</span>';
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

  const ActualizarRegistro = async() =>{     
    const validarNombresRespuesta = validarNombres ();
    const validarCedulaRespuesta = validarCedula();
    const validarCorreoRespuesta = validarCorreo ();
    const validarTelefonoRespuesta = validarTelefono ();


    if(validarNombresRespuesta && validarCedulaRespuesta && validarCorreoRespuesta && validarTelefonoRespuesta){
        Swal.fire({
            icon: 'info',
            title: 'El Usuario ha sido modificado exitosamente',
            showConfirmButton: false,
            timer: 1500
          });
        setTimeout(() =>{
            window.location.href = 'listarUsuario.html';
        },1000);     
    }      
}

validarNombres = () => {
    let nombre = document.getElementById('nombre').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (nombre === null || nombre === '' || nombre.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un nombre</span>';
      document.getElementById('errorNombre').innerHTML = texto;
      return false;
    } else if (nombre.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre debe de ser mayor o igual a 3 letras</span>';
      document.getElementById('errorNombre').innerHTML = texto;
      return false;
    } else if (!expresion.test(nombre)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorNombre').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorNombre').innerHTML = '';
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
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permite números</span>';
      document.getElementById('errorCedula').innerHTML = texto;
      return false;
    } else if (cedula.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Su cédula tiene que ser mayor a 3 dígitos</span>';
      document.getElementById('errorCedula').innerHTML = texto;
      return false;
    } else if (cedula.length > 13) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Su cédula tiene que ser menor a 13 dígitos</span>';
      document.getElementById('errorCedula').innerHTML = texto;
      return false;    
    }else{
      document.getElementById('errorCedula').innerHTML = '';
      return true;
    } 
};

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

validarTelefono = () => {
    let telefono = document.getElementById('telefono').value.trim();
    let texto;
    let expresion = /^[0-9]+$/;
  
    if (!telefono) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un número de teléfono.</span>';
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
    a.download = 'usuarios.xlsx';
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
      title: '¿Estas seguro que deseas activar el Usuario?',
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
      title: '¿Estas seguro que deseas desactivar el Usuario?',
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