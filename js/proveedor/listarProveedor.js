function editarRegistro(button) {
    var fila = button.parentNode.parentNode;
    var tipoCliente = fila.getElementsByTagName("td")[0].innerText;
    var tipoIdentificacion = fila.getElementsByTagName("td")[1].innerText;
    var numeroIdentificacion = fila.getElementsByTagName("td")[2].innerText;
    var razonSocial = fila.getElementsByTagName("td")[3].innerText;
    var nombreComercial = fila.getElementsByTagName("td")[4].innerText;
    var ciudad = fila.getElementsByTagName("td")[5].innerText;
    var direccion = fila.getElementsByTagName("td")[6].innerText;
    var contacto = fila.getElementsByTagName("td")[7].innerText;
    var telefono = fila.getElementsByTagName("td")[8].innerText;
    var correo = fila.getElementsByTagName("td")[9].innerText;
    var estado = fila.getElementsByTagName("td")[10].innerText;

    document.getElementById("tipoProveedor").value = tipoCliente;
    document.getElementById("tipoIdentificacion").value = tipoIdentificacion;
    document.getElementById("numeroIdentificacion").value = numeroIdentificacion;
    document.getElementById("razonSocial").value = razonSocial;
    document.getElementById("nombreComercial").value = nombreComercial;
    document.getElementById("ciudad").value = ciudad;
    document.getElementById("direccion").value = direccion;
    document.getElementById("contacto").value = contacto;
    document.getElementById("telefono").value = telefono;
    document.getElementById("correo").value = correo;
    document.getElementById("estado").value = estado;
  }
  

  const registrar = async() =>{
    const validarNombreComercialRespuesta = validarNombreComercial1 ();
    const validarRazonSocialRespuesta = validarRazonSocial1 ();
    const validarContactoRespuesta = validarContacto1 ();
    const validarNumeroIdentificacionRespuesta = validarNumeroIdentificacion1 ();
    const validarCiudadRespuesta = validarCiudad1 ();
    const validarDireccionRespuesta = validarDireccion1 ();
    const validarTelefonoRespuesta = validarTelefono1 ();
    const validarCorreoRespuesta = validarCorreo1 ();

    if (validarNumeroIdentificacionRespuesta && validarRazonSocialRespuesta && validarNombreComercialRespuesta && validarCiudadRespuesta && validarDireccionRespuesta && validarTelefonoRespuesta && validarCorreoRespuesta && validarContactoRespuesta){        
            Swal.fire({
                icon: 'success',
                title: 'El Proveedor ha sido creado exitosamente',
                showConfirmButton: false,
                timer: 1500
              });
            setTimeout(() =>{
                window.location.href = 'listarProveedor.html';
            },1000);          
        }
    }


  validarNombreComercial1 = () => {
    let nombreComercial = document.getElementById('nombreComercial1').value
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (nombreComercial === null || nombreComercial === '' || nombreComercial.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el nombre comercial de la empresa</span>';
      document.getElementById('errorNombreComercial1').innerHTML = texto;
      return false;
    } else if (nombreComercial.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre comercial debe de ser mayor o igual a 3 letras</span>';
      document.getElementById('errorNombreComercial1').innerHTML = texto;
      return false;
    } else if (!expresion.test(nombreComercial)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorNombreComercial1').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorNombreComercial1').innerHTML = '';
      return true;
    }
  };
  
  validarRazonSocial1 = () => {
    let razonSocial = document.getElementById('razonSocial1').value
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (razonSocial === null || razonSocial === '' || razonSocial.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la razon social de la empresa</span>';
      document.getElementById('errorRazonSocial1').innerHTML = texto;
      return false;
    } else if (razonSocial.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">la razon social debe de ser mayor o igual a 3 letras</span>';
      document.getElementById('errorRazonSocial1').innerHTML = texto;
      return false;
    } else if (!expresion.test(razonSocial)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorRazonSocial1').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorRazonSocial1').innerHTML = '';
      return true;
    }
  };
  
  validarContacto1 = () => {
    let validarContacto = document.getElementById('contacto1').value
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (validarContacto === null || validarContacto === '' || validarContacto.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el contacto de la empresa</span>';
      document.getElementById('errorContacto1').innerHTML = texto;
      return false;
    } else if (validarContacto.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre del contacto debe de ser mayor o igual a 3 letras</span>';
      document.getElementById('errorContacto1').innerHTML = texto;
      return false;
    } else if (!expresion.test(validarContacto)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorContacto1').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorContacto1').innerHTML = '';
      return true;
    }
  };
  
  validarNumeroIdentificacion1 = () => {
    let numeroIdentificacion = document.getElementById('numeroIdentificacion1').value;
    let texto;
    let expresion = /[0-9]/;
  
    if (numeroIdentificacion === null || numeroIdentificacion === '' || numeroIdentificacion.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un numero de identificación</span   >';
      document.getElementById('errorNumeroIdentificacion1').innerHTML = texto;
      return false;
    } else if (!expresion.test(numeroIdentificacion)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permite numeros</span>';
      document.getElementById('errorNumeroIdentificacion1').innerHTML = texto;
      return false;
    } else if (numeroIdentificacion.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El numero de identidad tiene que ser mayor a 6 caracteres numericos</span>';
      document.getElementById('errorNumeroIdentificacion1').innerHTML = texto;
      return false;
    } else if (numeroIdentificacion.length > 11) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El numero de identidad tiene que ser menor a 11 carcateres numericos</span>';
      document.getElementById('errorNumeroIdentificacion1').innerHTML = texto;
      return false;    
    }else{
      document.getElementById('errorNumeroIdentificacion1').innerHTML = '';
      return true;
    } 
  }
  
  validarCiudad1 = () => {
    let ciudad = document.getElementById('ciudad1').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (ciudad === null || ciudad === '' || ciudad.length === 0) {
     
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una ciudad</span>';
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
  
  validarCorreo1 = () => {
    let correo = document.getElementById('correo1').value.trim();
    let texto;
    let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;3
  
    if (!correo) {      
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de correo electrónico.</span>';
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
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de residencia.</span>';
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
    const validarNombreComercialRespuesta = validarNombreComercial ();
      const validarRazonSocialRespuesta = validarRazonSocial ();
      const validarContactoRespuesta = validarContacto ();
      const validarNumeroIdentificacionRespuesta = validarNumeroIdentificacion ();
      const validarCiudadRespuesta = validarCiudad ();
      const validarDireccionRespuesta = validarDireccion ();
      const validarTelefonoRespuesta = validarTelefono ();
      const validarCorreoRespuesta = validarCorreo ();
  
      if (validarNumeroIdentificacionRespuesta && validarRazonSocialRespuesta && validarNombreComercialRespuesta && validarCiudadRespuesta && validarDireccionRespuesta && validarTelefonoRespuesta && validarCorreoRespuesta && validarContactoRespuesta){       
              Swal.fire({
                  icon: 'info',
                  title: 'El Proveedor ha sido modificado exitosamente',
                  showConfirmButton: false,
                  timer: 1500
                });
              setTimeout(() =>{
                  window.location.href = 'listarProveedor.html';
              },1000);          
            }
        }
  
  validarNombreComercial = () => {
    let nombreComercial = document.getElementById('nombreComercial').value
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (nombreComercial === null || nombreComercial === '' || nombreComercial.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el nombre comercial de la empresa</span>';
      document.getElementById('errorNombreComercial').innerHTML = texto;
      return false;
    } else if (nombreComercial.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre comercial debe de ser mayor o igual a 3 letras</span>';
      document.getElementById('errorNombreComercial').innerHTML = texto;
      return false;
    } else if (!expresion.test(nombreComercial)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorNombreComercial').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorNombreComercial').innerHTML = '';
      return true;
    }
  };
  
  validarRazonSocial = () => {
    let razonSocial = document.getElementById('razonSocial').value
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (razonSocial === null || razonSocial === '' || razonSocial.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la razon social de la empresa</span>';
      document.getElementById('errorRazonSocial').innerHTML = texto;
      return false;
    } else if (razonSocial.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">la razon social debe de ser mayor o igual a 3 letras</span>';
      document.getElementById('errorRazonSocial').innerHTML = texto;
      return false;
    } else if (!expresion.test(razonSocial)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorRazonSocial').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorRazonSocial').innerHTML = '';
      return true;
    }
  };
  
  validarContacto = () => {
    let validarContacto = document.getElementById('contacto').value
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (validarContacto === null || validarContacto === '' || validarContacto.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el contacto de la empresa</span>';
      document.getElementById('errorContacto').innerHTML = texto;
      return false;
    } else if (validarContacto.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre del contacto debe de ser mayor o igual a 3 letras</span>';
      document.getElementById('errorContacto').innerHTML = texto;
      return false;
    } else if (!expresion.test(validarContacto)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorContacto').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorContacto').innerHTML = '';
      return true;
    }
  };
  
  validarNumeroIdentificacion = () => {
    let numeroIdentificacion = document.getElementById('numeroIdentificacion').value;
    let texto;
    let expresion = /[0-9]/;
  
    if (numeroIdentificacion === null || numeroIdentificacion === '' || numeroIdentificacion.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un numero de identificación</span   >';
      document.getElementById('errorNumeroIdentificacion').innerHTML = texto;
      return false;
    } else if (!expresion.test(numeroIdentificacion)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permite numeros</span>';
      document.getElementById('errorNumeroIdentificacion').innerHTML = texto;
      return false;
    } else if (numeroIdentificacion.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El numero de identidad tiene que ser mayor a 6 caracteres numericos</span>';
      document.getElementById('errorNumeroIdentificacion').innerHTML = texto;
      return false;
    } else if (numeroIdentificacion.length > 11) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El numero de identidad tiene que ser menor a 11 carcateres numericos</span>';
      document.getElementById('errorNumeroIdentificacion').innerHTML = texto;
      return false;    
    }else{
      document.getElementById('errorNumeroIdentificacion').innerHTML = '';
      return true;
    } 
  }
  
  validarCiudad = () => {
    let ciudad = document.getElementById('ciudad').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (ciudad === null || ciudad === '' || ciudad.length === 0) {
     
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una ciudad</span>';
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
  
  validarCorreo = () => {
    let correo = document.getElementById('correo').value.trim();
    let texto;
    let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;3
  
    if (!correo) {      
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de correo electrónico.</span>';
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
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de residencia.</span>';
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
    a.download = 'proveedores.xlsx';
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
      title: '¿Estas seguro que deseas activar el Proveedor?',
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
      title: '¿Estas seguro que deseas desactivar el Proveedor?',
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




