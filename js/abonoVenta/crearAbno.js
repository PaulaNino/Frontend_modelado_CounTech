
const registrar = async () => {
  //const validarFechaAbonoRespuesta = validarFechaAbono();
  const validarValorAbonoRespuesta = validarValorAbono();

  if (validarValorAbonoRespuesta) {
    let _fechaAbono = document.getElementById('fechaAbono').value
    let _valorAbono = document.getElementById('valorAbono').value
    let abonos = {
      fechaAbono: _fechaAbono,
      valorAbono: _valorAbono
    }

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(abonos),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then((resp) => resp.json())
      .then(json => {
        Swal.fire({
          icon: 'success',
          title: 'El abono ha sido creado exitosamente',
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          window.location.href = 'listarAbono.html';
        }, 1000);
      })
  }
}



validarFechaAbono = () => {
  let fechaAbono = document.getElementById('fechaAbono').value
  let texto;
  let fechaActual = new Date(); //'16/07/2023'

  if (fechaAbono === null || fechaAbono === '' || fechaAbono.length === 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la fecha de abono</span>';
    document.getElementById('errorFechaAbono').innerHTML = texto;
    return false;
  } else if (fechaAbono > fechaActual) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La fecha de abono no puede superar la fecha actual</span>';
    document.getElementById('errorFechaAbono').innerHTML = texto;
    return false;
  } else {
    document.getElementById('errorFechaAbono').innerHTML = '';
    return true;
  }
}

validarValorAbono = () => {
  let valorAbono = document.getElementById('valorAbono').value;
  let texto;
  let expresion = /[0-9]/;

  if (valorAbono === null && valorAbono === '') {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el valor del abono</span   >';
    document.getElementById('errorValorAbono').innerHTML = texto;
    return false;
  } else if (!expresion.test(valorAbono)) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el valor del abono</span>';
    document.getElementById('errorValorAbono').innerHTML = texto;
    return false;
  } else if (valorAbono <= 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El valor del abono no puede ser menor o igual a 0</span>';
    document.getElementById('errorValorAbono').innerHTML = texto;
    return false;
  } else {
    document.getElementById('errorValorAbono').innerHTML = '';
    return true;
  }
}



validarDescripcionAnular1 = () => {
  let validarDescripcion = document.getElementById('descripcionAbono').value
  let texto;
  let expresion = /[a-zA-Z]/;

  if (validarDescripcion === null || validarDescripcion === '' || validarDescripcion.length === 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la descripción de la anulación</span>';
    document.getElementById('errorDescripcionAbono').innerHTML = texto;
    return false;
  } else if (!expresion.test(validarDescripcion)) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
    document.getElementById('errorDescripcionAbono').innerHTML = texto;
    return false;
  } else {
    document.getElementById('errorDescripcionAbono').innerHTML = '';
    return true;
  }
}



validarDescripcionAnular = () => {
  let validarDescripcion = document.getElementById('descripcionAbono').value
  let texto;
  let expresion = /[a-zA-Z]/;

  if (validarDescripcion === null || validarDescripcion === '' || validarDescripcion.length === 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la descripción de la anulación</span>';
    document.getElementById('errorDescripcionAbono').innerHTML = texto;
    return false;
  } else if (!expresion.test(validarDescripcion)) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
    document.getElementById('errorDescripcionAbono').innerHTML = texto;
    return false;
  } else {
    document.getElementById('errorDescripcionAbono').innerHTML = '';
    return true;
  }
};


function validarAnularAbono() {
  Swal.fire({
    title: '¿Está seguro que desea anular el abono?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, anularlo!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes agregar la redirección a la página específica
        window.location.href = '../abonosVenta/crearAbonoVenta.html';
      }
    });
}





if (document.querySelector('#btnRegistrar')) {
  document.querySelector('#btnRegistrar')
    .addEventListener('click', registrar)
}


if (document.querySelector('#btnValidarAnularAbono')){
  document.querySelector('#btnValidarAnularAbono')
  .addEventListener('click', validarDescripcionAnular )
}