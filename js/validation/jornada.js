const url = 'https://api-backend-project.onrender.com/main/jornada';

  const listarDatos = async () => {
    let respuesta = '';
    let body = document.getElementById('contenido');

    fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then((resp) => resp.json())
      .then(function (data) {
        let listaJornadas = data.jornada;
        respuesta = listaJornadas.map(function (jornada) {
          return `<tr>
              <td>${jornada.empleado}</td>
              <td>${jornada.fechaRegistro}</td>
              <td>${jornada.horaInicial}</td>
              <td>${jornada.horaFinal}</td>
              <td>${jornada.estado}</td>
              <td>        
                <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal"  data-bs-target="#ModalEdit" onclick='editar(${JSON.stringify(jornada)})'>Editar</button>
                <a href="#" class="btn btn-sm btn-danger" onclick="eliminar('${jornada._id}')" type="button">Eliminar</a></td>
            </tr>`;
        });
    
        body.innerHTML = respuesta.join('');
      });
  }


  document.addEventListener("DOMContentLoaded", function() {
    listarDatos();
  });

  const eliminar = (id) =>{
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, Eliminarlo!'
      }).then((result) => {
        if (result.isConfirmed) {
            let jornada = {
                _id: id
            }
            fetch (url,{
                method: 'DELETE',
                mode: 'cors',
                body: JSON.stringify(jornada),//Convertir el objeto _usuario a un JSON
                headers: {"Content-type": "application/json; charset=UTF-8"}
            }).then(() =>{
                Swal.fire(
                    'Eliminado!',
                    'El registro ha sido eliminado.',
                    'success',
                    );
                setTimeout(() =>{
                    window.location.href = 'jornadaLaboral.html';
                },1000);  
            })
        }
      })
};

document.getElementById('ModalAdd').addEventListener('hidden.bs.modal', function () {
  restartValidateCreate();
  // restartForm();
});

function restartValidateCreate() {

  document.getElementById('_msgEmpleado').innerHTML = '';
  document.getElementById('_msgHoraFinal').innerHTML = '';
  document.getElementById('_msgHoraInicial').innerHTML = '';
  document.getElementById('_msgEstado').innerHTML = '';

}

// function restartForm() {

//   document.getElementById('_empleado').value = '';
//   document.getElementById('_horaInicial').value = '';
//   document.getElementById('_horaFinal').value = '';
//   document.getElementById('_estado').value = '';

// }



const registrar = async() =>{

  restartValidateCreate();
  // restartForm();

  const _validateEmpleado = _validarEmpleado();
  const _validateHoraInicial = _validarHoraInicial();
  const _validateHoraFinal = _validarHoraFinal();
  const _validateEstado = _validarEstado();


  if( _validateEmpleado && _validateHoraInicial && _validateHoraFinal && _validateEstado){


    let _empleado = document.getElementById('_empleado').value
    let _horaInicial = document.getElementById('_horaInicial').value
    let _horaFinal = document.getElementById('_horaFinal').value
    let _estado = document.getElementById('_estado').value
  

let jornada = {

    empleado:_empleado,
    horaInicial:_horaInicial,
    horaFinal:_horaFinal,
    estado:_estado 
  }

  fetch(url,{
      method: 'POST',
      mode : 'cors',
      body: JSON.stringify(jornada),
      headers:{"Content-type": "application/json; charset=UTF-8"}
  })
  .then((resp)=> resp.json())
  .then(json => {
      Swal.fire({
          icon: 'success',
          title: 'El registro ha sido creado exitosamente',
          showConfirmButton: false,
          timer: 1500
        });
      setTimeout(() =>{
          window.location.href = 'jornadaLaboral.html';
      },1000);  
  })
}else{
  Swal.fire({
  icon: 'warning',
  title: 'Error al registrar',
  showConfirmButton: false,
  timer: 1500
});  
}
}

_validarEmpleado = () => {
  let _empleado = document.getElementById('_empleado').value;
  let texto = '';

  if (_empleado === null || _empleado === '' || _empleado === 'Seleccione un empleado') {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Seleccione un empleado</span>';
    document.getElementById('_msgEmpleado').innerHTML = texto;
    return false;
  } else {
    document.getElementById('_msgEmpleado').innerHTML = '';
    return true;
  }
}

_validarEstado = () => {
  let _estado = document.getElementById('_estado').value;
  let texto = '';

  if (_estado === null || _estado === '' || _estado === 'Seleccione un estado') {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Seleccione un estado</span>';
    document.getElementById('_msgEstado').innerHTML = texto;
    return false;
  } else {
    document.getElementById('_msgEstado').innerHTML = '';
    return true;
  }
}

_validarHoraFinal = () => {
  let _horaFinal = document.getElementById('_horaFinal').value;
  let texto = '';

  if (_horaFinal === null || _horaFinal === '' || _horaFinal.length === 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una hora</span>';
    document.getElementById('_msgHoraFinal').innerHTML = texto;
    return false;
  } else {
    document.getElementById('_msgHoraFinal').innerHTML = '';
    return true;
  }
}

_validarHoraInicial = () => {
  let _horaIncial = document.getElementById('_horaInicial').value;
  let texto = '';

  if (_horaIncial === null || _horaIncial === '' || _horaIncial.length === 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una hora</span>';
    document.getElementById('_msgHoraInicial').innerHTML = texto;
    return false;
  } else {
    document.getElementById('_msgHoraInicial').innerHTML = '';
    return true;
  }
}





const editar = (jornada) => {

    document.getElementById('id').value = jornada._id;
    document.getElementById('empleado').value = jornada.empleado;
    document.getElementById('horaInicial').value = jornada.horaInicial;
    document.getElementById('horaFinal').value = jornada.horaFinal;
    document.getElementById('estado').value = jornada.estado;
}


const Actualizar = async(id) =>{


  const validateHoraInicial = validarHoraInicial();
  const validateHoraFinal = validarHoraFinal();



  if(validateHoraInicial && validateHoraFinal){

    let _id = document.getElementById('id').value
    let _empleado = document.getElementById('empleado').value
    let _horaInicial = document.getElementById('horaInicial').value
    let _horaFinal = document.getElementById('horaFinal').value
    let _estado = document.getElementById('estado').value

    let jornada = {
        _id:_id,
        empleado:_empleado,
        horaInicial:_horaInicial,
        horaFinal:_horaFinal,
        estado:_estado
      }
      console.log(jornada)
      fetch(url,{
          method: 'PUT',
          mode : 'cors',
          body: JSON.stringify(jornada),
          headers:{"Content-type": "application/json; charset=UTF-8"}
      })
      .then((resp)=> resp.json())
      .then(json => {
          Swal.fire({
              icon: 'info',
              title: 'El registro ha sido modificado exitosamente',
              showConfirmButton: false,
              timer: 6000
            });
          setTimeout(() =>{
              window.location.href = 'jornadaLaboral.html';
          },1000);  
      })

  }else{
    Swal.fire({
    icon: 'warning',
    title: 'Error al editar',
    showConfirmButton: false,
    timer: 1500
  });  
}
}

  validarHoraFinal = () => {
    let horaFinal = document.getElementById('horaFinal').value;
    let texto = '';
  
    if (horaFinal === null || horaFinal === '' || horaFinal.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una hora</span>';
      document.getElementById('msgHoraFinal').innerHTML = texto;
      return false;
    } else {
      document.getElementById('msgHoraFinal').innerHTML = '';
      return true;
    }
  }
  
  validarHoraInicial = () => {
    let horaInicial = document.getElementById('horaInicial').value;
    let texto = '';
  
    if (horaInicial === null || horaInicial === '' || horaInicial.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una hora</span>';
      document.getElementById('msgHoraInicial').innerHTML = texto;
      return false;
    } else {
      document.getElementById('msgHoraInicial').innerHTML = '';
      return true;
    }
  }




  if(document.querySelector('#btnActualizar')){
    document.querySelector('#btnActualizar')
    .addEventListener('click', Actualizar)

    
}

if(document.querySelector('#btnCrear')){
  document.querySelector('#btnCrear')
  .addEventListener('click', registrar)
}
