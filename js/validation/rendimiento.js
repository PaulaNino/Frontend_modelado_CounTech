const url = 'https://api-backend-project.onrender.com/main/rendimiento';

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
        let listaRendimientos = data.rendimiento;
        respuesta = listaRendimientos.map(function (rendimiento) {
          return `<tr>
              <td>${rendimiento.numOrdenTrabajo}</td>
              <td>${rendimiento.referencia}</td>
              <td>${rendimiento.proceso}</td>
              <td>${rendimiento.empleado}</td>
              <td>${rendimiento.cantidad}</td>
              <td>${rendimiento.talla}</td>
              <td>${rendimiento.fechaRegistro}</td>
              <td>${rendimiento.horaInicial}</td>
              <td>${rendimiento.horaFinal}</td>
              <td>${rendimiento.estado}</td>
              <td>        
                <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal"  data-bs-target="#ModalEdit" onclick='editar(${JSON.stringify(rendimiento)})'>Editar</button>
                <a href="#" class="btn btn-sm btn-danger" onclick="eliminar('${rendimiento._id}')" type="button">Eliminar</a></td>
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
            let rendimiento = {
                _id: id
            }
            fetch (url,{
                method: 'DELETE',
                mode: 'cors',
                body: JSON.stringify(rendimiento),//Convertir el objeto _usuario a un JSON
                headers: {"Content-type": "application/json; charset=UTF-8"}
            }).then(() =>{
                Swal.fire(
                    'Eliminado!',
                    'El registro ha sido eliminado.',
                    'success',
                    );
                setTimeout(() =>{
                    window.location.href = 'rendimiento.html';
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

    document.getElementById('_msgCantidad').innerHTML = '';
    document.getElementById('_msgHoraFinal').innerHTML = '';
    document.getElementById('_msgHoraInicial').innerHTML = '';
    document.getElementById('_msgEstado').innerHTML = '';
    document.getElementById('_msgProceso').innerHTML = '';
    document.getElementById('_msgEmpleado').innerHTML = '';
    document.getElementById('_msgTalla').innerHTML = '';
    document.getElementById('_msgReferencia').innerHTML = '';
    document.getElementById('_msgNumOrdenTrabajo').innerHTML = '';

  }
//   function restartForm() {

//     document.getElementById('_numOrdenTrabajo').value = '';
//     document.getElementById('_referencia').value = '';
//     document.getElementById('_cantidad').value = '';
//     document.getElementById('_horaInicial').value = '';
//     document.getElementById('_horaFinal').value = '';

//   }


const registrar = async() =>{

    restartValidateCreate();
    // restartForm();

    const _validateCantidad = _validarCantidad();
    const _validateHoraInicial = _validarHoraInicial();
    const _validateHoraFinal = _validarHoraFinal();
    const _validateEstado = _validarEstado();
    const _validateProceso = _validarProceso();
    const _validateEmpleado = _validarEmpleado();
    const _validateTalla = _validarTalla();
    const _validateRef = _validarRef();
    const _validateNumOrden = _validarNumOrden();



    if(_validateNumOrden && _validateRef && _validateTalla && _validateEmpleado && _validateCantidad && _validateHoraInicial && _validateHoraFinal && _validateEstado && _validateProceso){

    let _numOrdenTrabajo = document.getElementById('_numOrdenTrabajo').value
    let _referencia = document.getElementById('_referencia').value
    let _proceso = document.getElementById('_proceso').value
    let _empleado = document.getElementById('_empleado').value
    let _cantidad = document.getElementById('_cantidad').value
    let _talla = document.getElementById('_talla').value
    let _horaInicial = document.getElementById('_horaInicial').value
    let _horaFinal = document.getElementById('_horaFinal').value
    let _estado = document.getElementById('_estado').value
  

let rendimiento = {
    numOrdenTrabajo:_numOrdenTrabajo,
    referencia:_referencia,
    proceso:_proceso,
    empleado:_empleado,
    talla:_talla,
    cantidad:_cantidad,
    horaInicial:_horaInicial,
    horaFinal:_horaFinal,
    estado:_estado 
  }

  fetch(url,{
      method: 'POST',
      mode : 'cors',
      body: JSON.stringify(rendimiento),
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
          window.location.href = 'rendimiento.html';
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

_validarNumOrden = () => {

    let _numOrden = document.getElementById('_numOrdenTrabajo').value;
  
    let texto = '';
    let expresion = /[0-9]/;
  
    if (_numOrden === null || _numOrden === '' || _numOrden.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un número de referencia</span   >';
      document.getElementById('_msgNumOrdenTrabajo').innerHTML = texto;
      return false;
    } else if (!expresion.test(_numOrden)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Sólo se permiten números</span>';
      document.getElementById('_msgNumOrdenTrabajo').innerHTML = texto;
      return false;
    } else if (_numOrden.length <= 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El número debe tener más de 3 dígitos</span>';
      document.getElementById('_msgNumOrdenTrabajo').innerHTML = texto;
      return false;
    } else{
      document.getElementById('_msgNumOrdenTrabajo').innerHTML = '';
      return true;
    } 
  }

_validarRef = () => {

    let _referencia = document.getElementById('_referencia').value;
    let texto = '';
  
    if (_referencia === null || _referencia === '' || _referencia.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una referencia</span   >';
      document.getElementById('_msgReferencia').innerHTML = texto;
      return false;
    } else if (_referencia <= 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La referencia debe tener más de 3 dígitos</span>';
      document.getElementById('_msgReferencia').innerHTML = texto;
      return false;
    } else{
      document.getElementById('_msgReferencia').innerHTML = '';
      return true;
    } 
  }

_validarTalla = () => {
    let _talla = document.getElementById('_talla').value;
    let texto = '';
  
    if (_talla === null || _talla === '' || _talla === 'Seleccione una talla') {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Seleccione una talla</span>';
      document.getElementById('_msgTalla').innerHTML = texto;
      return false;
    } else {
      document.getElementById('_msgTalla').innerHTML = '';
      return true;
    }
  }

_validarProceso = () => {
    let _proceso = document.getElementById('_proceso').value;
    let texto = '';
  
    if (_proceso === null || _proceso === '' || _proceso === 'Seleccione un proceso') {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Seleccione un proceso</span>';
      document.getElementById('_msgProceso').innerHTML = texto;
      return false;
    } else {
      document.getElementById('_msgProceso').innerHTML = '';
      return true;
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

_validarCantidad = () => {

    let _cantidad = document.getElementById('_cantidad').value;
  
    let texto = '';
    let expresion = /[0-9]/;
  
    if (_cantidad === null || _cantidad === '' || _cantidad.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una cantidad</span   >';
      document.getElementById('_msgCantidad').innerHTML = texto;
      return false;
    } else if (!expresion.test(_cantidad)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Sólo se permite numeros</span>';
      document.getElementById('_msgCantidad').innerHTML = texto;
      return false;
    } else if (_cantidad <= 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La cantidad no puede ser menor o igual a cero</span>';
      document.getElementById('_msgCantidad').innerHTML = texto;
      return false;
    } else{
      document.getElementById('_msgCantidad').innerHTML = '';
      return true;
    } 
  }



const editar = (rendimiento) => {

    document.getElementById('id').value = rendimiento._id;
    document.getElementById('numOrdenTrabajo').value = rendimiento.numOrdenTrabajo;
    document.getElementById('referencia').value = rendimiento.referencia;
    document.getElementById('proceso').value = rendimiento.proceso;
    document.getElementById('empleado').value = rendimiento.empleado;
    document.getElementById('cantidad').value = rendimiento.cantidad;
    document.getElementById('talla').value = rendimiento.talla;
    document.getElementById('horaInicial').value = rendimiento.horaInicial;
    document.getElementById('horaFinal').value = rendimiento.horaFinal;
    document.getElementById('estado').value = rendimiento.estado;

  }



  document.getElementById('ModalEdit').addEventListener('hidden.bs.modal', function () {
    restartValidateEdit();
  });
  
  function restartValidateEdit() {
    document.getElementById('msgHoraFinal').innerHTML = '';
    document.getElementById('cantidad').innerHTML = '';
    document.getElementById('msgHoraInicial').innerHTML = '';


  }

const Actualizar = async(id) =>{

    restartValidateEdit()

    const validateCantidad = validarCantidad();
    const validateHoraInicial = validarHoraInicial();
    const validateHoraFinal = validarHoraFinal();


    if (validateCantidad && validateHoraInicial && validateHoraFinal){

    let _id = document.getElementById('id').value
    let _numOrdenTrabajo = document.getElementById('numOrdenTrabajo').value
    let _referencia = document.getElementById('referencia').value
    let _proceso = document.getElementById('proceso').value
    let _empleado = document.getElementById('empleado').value
    let _cantidad = document.getElementById('cantidad').value
    let _talla = document.getElementById('talla').value
    let _horaInicial = document.getElementById('horaInicial').value
    let _horaFinal = document.getElementById('horaFinal').value
    let _estado = document.getElementById('estado').value

    let rendimiento = {
        _id:_id,
        numOrdenTrabajo:_numOrdenTrabajo,
        referencia:_referencia,
        proceso:_proceso,
        empleado:_empleado,
        talla:_talla,
        cantidad:_cantidad,
        horaInicial:_horaInicial,
        horaFinal:_horaFinal,
        estado:_estado 
      }
      console.log(rendimiento)
      fetch(url,{
          method: 'PUT',
          mode : 'cors',
          body: JSON.stringify(rendimiento),
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
              window.location.href = 'rendimiento.html';
          },1000);  
      })
      
  }else{
    Swal.fire({
    icon: 'warning',
    title: 'Error al editar',
    showConfirmButton: false,
    timer: 1500
  });  
}}

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
    let horaIncial = document.getElementById('horaInicial').value;
    let texto = '';
  
    if (horaIncial === null || horaIncial === '' || horaIncial.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una hora</span>';
      document.getElementById('msgHoraInicial').innerHTML = texto;
      return false;
    } else {
      document.getElementById('msgHoraInicial').innerHTML = '';
      return true;
    }
  }

validarCantidad = () => {

    let cantidad = document.getElementById('cantidad').value;
  
    let texto = '';
    let expresion = /[0-9]/;
  
    if (cantidad === null || cantidad === '' || cantidad.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una cantidad</span   >';
      document.getElementById('msgCantidad').innerHTML = texto;
      return false;
    } else if (!expresion.test(cantidad)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Sólo se permite numeros</span>';
      document.getElementById('msgCantidad').innerHTML = texto;
      return false;
    } else if (cantidad <= 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La cantidad no puede ser menor o igual a cero</span>';
      document.getElementById('msgCantidad').innerHTML = texto;
      return false;
    } else{
      document.getElementById('msgCantidad').innerHTML = '';
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