const url = 'https://api-backend-project.onrender.com/main/produccion';

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
        let listaProducciones = data.produccion;
        respuesta = listaProducciones.map(function (produccion) {
          return `<tr>
              <td>${produccion.cliente}</td>
              <td>${produccion.numOrdenTrabajo}</td>
              <td>${produccion.fechaRegistro}</td>
              <td>${produccion.fechaEntrega}</td>
              <td>${produccion.observaciones}</td>
              <td>${produccion.estado}</td>
              <td>
                <button type="button" class="btn btn-sm btn-info" data-bs-toggle="modal" data-bs-target="#detalleModal" onclick='verDetalle(${JSON.stringify(produccion)})'>Ver detalle</button>          
                <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal"  data-bs-target="#ModalEdit" onclick='editar(${JSON.stringify(produccion)})'>Editar</button>
                <a href="#" class="btn btn-sm btn-danger" onclick="eliminar('${produccion._id}')" type="button">Eliminar</a></td>
            </tr>`;
        });
    
        body.innerHTML = respuesta.join('');
      });
  }


  document.addEventListener("DOMContentLoaded", function() {
    listarDatos();
  });

  const verDetalle = (produccion) => {
    document.getElementById('detail_referencia').value = produccion.referencia;
    document.getElementById('detail_proceso').value = produccion.proceso;
    document.getElementById('detail_cantProceso').value = produccion.cantProceso;
    document.getElementById('detail_color').value = produccion.color;
    document.getElementById('detail_cantColor').value = produccion.cantColor;
    document.getElementById('detail_talla').value = produccion.talla;
    document.getElementById('detail_cantTalla').value = produccion.cantTalla;
  }


  const editar = (produccion) => {
    document.getElementById('id').value = produccion._id;
    document.getElementById('cliente').value = produccion.cliente;
    document.getElementById('numOrdenTrabajo').value = produccion.numOrdenTrabajo;
    document.getElementById('fechaEntrega').value = produccion.fechaEntrega;
    document.getElementById('observaciones').value = produccion.observaciones;
    document.getElementById('estado').value = produccion.estado;
    document.getElementById('referencia').value = produccion.referencia;
    document.getElementById('proceso').value = produccion.proceso;
    document.getElementById('cantProceso').value = produccion.cantProceso;
    document.getElementById('color').value = produccion.color;
    document.getElementById('cantColor').value = produccion.cantColor;
    document.getElementById('talla').value = produccion.talla;
    document.getElementById('cantTalla').value = produccion.cantTalla;
  }
  
  

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
            let produccion = {
                _id: id
            }
            fetch (url,{
                method: 'DELETE',
                mode: 'cors',
                body: JSON.stringify(produccion),//Convertir el objeto _usuario a un JSON
                headers: {"Content-type": "application/json; charset=UTF-8"}
            }).then(() =>{
                Swal.fire(
                    'Eliminado!',
                    'El registro ha sido eliminado.',
                    'success',
                    );
                setTimeout(() =>{
                    window.location.href = 'main.html';
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
  document.getElementById('_msgTalla').innerHTML = '';
  document.getElementById('_msgColor').innerHTML = '';
  document.getElementById('_msgProceso').innerHTML = '';
  document.getElementById('_msgReferencia').innerHTML = '';
  document.getElementById('_msgNumOrdenTrabajo').innerHTML = '';
  document.getElementById('_msgCantProceso').innerHTML = '';
  document.getElementById('_msgCantColor').innerHTML = '';
  document.getElementById('_msgEstado').innerHTML = '';
  document.getElementById('_msgCantTalla').innerHTML = '';
  document.getElementById('_msgCliente').innerHTML = '';
  document.getElementById('_msgFechaEntrega').innerHTML = '';
}


// function restartForm() {

//   document.getElementById('_cliente').value = ''; 
//   document.getElementById('_numOrdenTrabajo').value = ''; 
//   document.getElementById('_fechaEntrega').value = ''; 
//   document.getElementById('_observaciones').value = ''; 
//   document.getElementById('_estado').value = ''; 
//   document.getElementById('_referencia').value = ''; 
//   document.getElementById('_proceso').value = ''; 
//   document.getElementById('_cantProceso').value = '';
//   document.getElementById('_color').value = '';
//   document.getElementById('_cantColor').value = ''; 
//   document.getElementById('_talla').value = ''; 
//   document.getElementById('_cantTalla').value = '';
// }



const registrar = async() =>{
  // restartForm();
  restartValidateCreate();
  
  const _validateCantProceso = _validarCantProceso();
  const _validateCantColor = _validarCantColor();
  const _validateCantTalla = _validarCantTalla();
  const _validateCliente = _validarCliente();
  const _validateNumOrden = _validarNumOrden();
  const _validateRef = _validarRef();
  const _validateProc = _validarProceso();
  const _validateColor = _validarColor();
  const _validateTalla = _validarTalla();
  const _validateEstado = _validarEstado();
  const _validateFechaEntrega = _validarFechaEntrega();
  
  

  if (_validateCantProceso && _validateCantColor && _validateCantTalla && _validateCliente && _validateNumOrden && _validateRef && _validateProc && _validateColor && _validateTalla && _validateEstado && _validateFechaEntrega){    

  let _cliente = document.getElementById('_cliente').value
  let _numOrdenTrabajo = document.getElementById('_numOrdenTrabajo').value
  let _fechaEntrega = document.getElementById('_fechaEntrega').value
  let _observaciones = document.getElementById('_observaciones').value
  let _estado = document.getElementById('_estado').value
  let _referencia = document.getElementById('_referencia').value
  let _proceso = document.getElementById('_proceso').value
  let _cantProceso = document.getElementById('_cantProceso').value
  let _color = document.getElementById('_color').value
  let _cantColor = document.getElementById('_cantColor').value
  let _talla = document.getElementById('_talla').value
  let _cantTalla = document.getElementById('_cantTalla').value

      let produccion = {
        cliente:_cliente,
        numOrdenTrabajo:_numOrdenTrabajo,
        fechaEntrega:_fechaEntrega,
        observaciones:_observaciones,
        referencia:_referencia,  
        proceso:_proceso,  
        cantProceso:_cantProceso,  
        color:_color,  
        cantColor:_cantColor,  
        talla:_talla,  
        cantTalla:_cantTalla,
        estado:_estado,  
      }

      fetch(url,{
          method: 'POST',
          mode : 'cors',
          body: JSON.stringify(produccion),
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
              window.location.href = 'main.html';
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

_validarFechaEntrega = () => {
  let fechaEntrega = document.getElementById('_fechaEntrega').value;
  let texto;

  if (fechaEntrega === null || fechaEntrega === '' || fechaEntrega.length === 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la fecha de compra</span>';
    document.getElementById('_msgFechaEntrega').innerHTML = texto;
    return false;
  } else {
  document.getElementById('_msgFechaEntrega').innerHTML = '';
  return true; 
  }

  
};

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


_validarColor = () => {

  let _color = document.getElementById('_color').value;
  let texto = '';

  if (_color === null || _color === '' || _color.length === 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un color</span   >';
    document.getElementById('_msgColor').innerHTML = texto;
    return false;
  } else{
    document.getElementById('_msgColor').innerHTML = '';
    return true;
  } 
}

_validarProceso = () => {

  let _proceso = document.getElementById('_proceso').value;
  let texto = '';

  if (_proceso === null || _proceso === '' || _proceso.length === 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un proceso</span   >';
    document.getElementById('_msgProceso').innerHTML = texto;
    return false;
  } else{
    document.getElementById('_msgProceso').innerHTML = '';
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



  _validarCantProceso = () => {

    let _cantProceso = document.getElementById('_cantProceso').value;
  
    let texto = '';
    let expresion = /[0-9]/;
  
    if (_cantProceso === null || _cantProceso === '' || _cantProceso.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una cantidad</span   >';
      document.getElementById('_msgCantProceso').innerHTML = texto;
      return false;
    } else if (!expresion.test(_cantProceso)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Sólo se permite numeros</span>';
      document.getElementById('_msgCantProceso').innerHTML = texto;
      return false;
    } else if (_cantProceso <= 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La cantidad no puede ser menor o igual a cero</span>';
      document.getElementById('_msgCantProceso').innerHTML = texto;
      return false;
    } else{
      document.getElementById('_msgCantProceso').innerHTML = '';
      return true;
    } 
  }
  
  _validarCantColor= () => {
  
    let _cantColor = document.getElementById('_cantColor').value;
  
    let texto = '';
    let expresion = /[0-9]/;
  
    if (_cantColor === null || _cantColor === '' || _cantColor.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una cantidad</span   >';
      document.getElementById('_msgCantColor').innerHTML = texto;
      return false;
    } else if (!expresion.test(_cantColor)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Sólo se permite numeros</span>';
      document.getElementById('_msgCantColor').innerHTML = texto;
      return false;
    } else if (_cantColor <= 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La cantidad no puede ser menor o igual a cero</span>';
      document.getElementById('_msgCantColor').innerHTML = texto;
      return false;
    } else{
      document.getElementById('_msgCantColor').innerHTML = '';
      return true;
    } 
  }
  
  _validarCantTalla= () => {
    let _cantTalla = document.getElementById('_cantTalla').value;
  
    let texto = '';
    let expresion = /[0-9]/;
  
    if (_cantTalla === null || _cantTalla === '' || _cantTalla.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una cantidad</span   >';
      document.getElementById('_msgCantTalla').innerHTML = texto;
      return false;
    } else if (!expresion.test(_cantTalla)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Sólo se permite numeros</span>';
      document.getElementById('_msgCantTalla').innerHTML = texto;
      return false;
    } else if (_cantTalla <= 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La cantidad no puede ser menor o igual a cero</span>';
      document.getElementById('_msgCantTalla').innerHTML = texto;
      return false;
    } else{
      document.getElementById('_msgCantTalla').innerHTML = '';
      return true;
    } 
  }
  
  _validarCliente = () => {
    let _cliente = document.getElementById('_cliente').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (_cliente === null || _cliente === '' || _cliente.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un cliente</span>';
      document.getElementById('_msgCliente').innerHTML = texto;
      return false;
    } else if (_cliente.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El cliente debe tener más o igual a 3 letras</span>';
      document.getElementById('_msgCliente').innerHTML = texto;
      return false;
    } else if (!expresion.test(_cliente)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('_msgCliente').innerHTML = texto;
      return false;
    } else {
      document.getElementById('_msgCliente').innerHTML = '';
      return true;
    }
  };


  document.getElementById('ModalEdit').addEventListener('hidden.bs.modal', function () {
    restartValidateEdit();
  });
  
  function restartValidateEdit() {
    document.getElementById('msgCantProceso').innerHTML = '';
    document.getElementById('msgCantColor').innerHTML = '';
    document.getElementById('msgCantTalla').innerHTML = '';
    document.getElementById('msgCliente').innerHTML = '';
    document.getElementById('msgFechaEntrega').innerHTML = '';

  }


const Actualizar = async(id) =>{

  restartValidateEdit();

  const validateCantProceso = validarCantProceso();
  const validateCantColor = validarCantColor();
  const validateCantTalla = validarCantTalla();
  const validateCliente = validarCliente();
  const validateFechaEntrega = validarFechaEntrega();
  

  if (validateCantProceso && validateCantColor && validateCantTalla && validateCliente && validateFechaEntrega){

 let _id = document.getElementById('id').value
 let _cliente = document.getElementById('cliente').value
 let _numOrdenTrabajo = document.getElementById('numOrdenTrabajo').value
 let _fechaEntrega = document.getElementById('fechaEntrega').value
 let _observaciones = document.getElementById('observaciones').value
 let _estado = document.getElementById('estado').value
 let _referencia = document.getElementById('referencia').value
 let _proceso = document.getElementById('proceso').value
 let _cantProceso = document.getElementById('cantProceso').value
 let _color = document.getElementById('color').value
 let _cantColor = document.getElementById('cantColor').value
 let _talla = document.getElementById('talla').value
 let _cantTalla = document.getElementById('cantTalla').value
 

      let produccion = {
        _id:_id,
        cliente:_cliente,
        numOrdenTrabajo:_numOrdenTrabajo,
        fechaEntrega:_fechaEntrega,
        observaciones:_observaciones,
        referencia:_referencia,  
        proceso:_proceso,  
        cantProceso:_cantProceso,  
        color:_color,  
        cantColor:_cantColor,  
        talla:_talla,  
        cantTalla:_cantTalla,
        estado:_estado,  
      }
      console.log(produccion)
      fetch(url,{
          method: 'PUT',
          mode : 'cors',
          body: JSON.stringify(produccion),
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
              window.location.href = 'main.html';
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

  validarFechaEntrega = () => {
    let fechaEntrega = document.getElementById('fechaEntrega').value;
    let texto;
  
    if (fechaEntrega === null || fechaEntrega === '' || fechaEntrega.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la fecha de compra</span>';
      document.getElementById('msgFechaEntrega').innerHTML = texto;
      return false;
    } else {
    document.getElementById('msgFechaEntrega').innerHTML = '';
    return true; 
    }
  
    
  };


validarCantProceso = () => {

  let cantProceso = document.getElementById('cantProceso').value;

  let texto = '';
  let expresion = /[0-9]/;

  if (cantProceso === null || cantProceso === '' || cantProceso.length === 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una cantidad</span   >';
    document.getElementById('msgCantProceso').innerHTML = texto;
    return false;
  } else if (!expresion.test(cantProceso)) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Sólo se permite numeros</span>';
    document.getElementById('msgCantProceso').innerHTML = texto;
    return false;
  } else if (cantProceso <= 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La cantidad no puede ser menor o igual a cero</span>';
    document.getElementById('msgCantProceso').innerHTML = texto;
    return false;
  } else{
    document.getElementById('msgCantProceso').innerHTML = '';
    return true;
  } 
}

validarCantColor= () => {

  let cantColor = document.getElementById('cantColor').value;

  let texto = '';
  let expresion = /[0-9]/;

  if (cantColor === null || cantColor === '' || cantColor.length === 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una cantidad</span   >';
    document.getElementById('msgCantColor').innerHTML = texto;
    return false;
  } else if (!expresion.test(cantColor)) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Sólo se permite numeros</span>';
    document.getElementById('msgCantColor').innerHTML = texto;
    return false;
  } else if (cantColor <= 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La cantidad no puede ser menor o igual a cero</span>';
    document.getElementById('msgCantColor').innerHTML = texto;
    return false;
  } else{
    document.getElementById('msgCantColor').innerHTML = '';
    return true;
  } 
}

validarCantTalla= () => {
  let cantTalla = document.getElementById('cantTalla').value;

  let texto = '';
  let expresion = /[0-9]/;

  if (cantTalla === null || cantTalla === '' || cantTalla.length === 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una cantidad</span   >';
    document.getElementById('msgCantTalla').innerHTML = texto;
    return false;
  } else if (!expresion.test(cantTalla)) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Sólo se permite numeros</span>';
    document.getElementById('msgCantTalla').innerHTML = texto;
    return false;
  } else if (cantTalla <= 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La cantidad no puede ser menor o igual a cero</span>';
    document.getElementById('msgCantTalla').innerHTML = texto;
    return false;
  } else{
    document.getElementById('msgCantTalla').innerHTML = '';
    return true;
  } 
}

validarCliente = () => {
  let cliente = document.getElementById('cliente').value;
  let texto;
  let expresion = /[a-zA-Z]/;

  if (cliente === null || cliente === '' || cliente.length === 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un cliente</span>';
    document.getElementById('msgCliente').innerHTML = texto;
    return false;
  } else if (cliente.length < 3) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El cliente debe tener más o igual a 3 letras</span>';
    document.getElementById('msgCliente').innerHTML = texto;
    return false;
  } else if (!expresion.test(cliente)) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
    document.getElementById('msgCliente').innerHTML = texto;
    return false;
  } else {
    document.getElementById('msgCliente').innerHTML = '';
    return true;
  }
};


if(document.querySelector('#btnActualizar')){
  document.querySelector('#btnActualizar')
  .addEventListener('click', Actualizar)

  
}

if(document.querySelector('#btnCrear')){
document.querySelector('#btnCrear')
.addEventListener('click', registrar)
}



  


