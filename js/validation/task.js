document.getElementById('ModalTask').addEventListener('hidden.bs.modal', function () {
    restartValidateTask();
  });
  
  function restartValidateTask() {
    document.getElementById('_msgCantidad').innerHTML = '';
    document.getElementById('_msgEmpleado').innerHTML = '';
    document.getElementById('_msgTalla').innerHTML = '';
  }

const register = async() =>{

    restartValidateTask()

    const _validateTalla = _validarTalla();
    const  _validateEmpleado = _validarEmpleado();
    const _validateCantidad= _validarCantidad();    
  
    if (_validateCantidad && _validateEmpleado && _validateTalla){    
        Swal.fire({
            icon: 'success',
            title: 'Asignación exitosa',
            showConfirmButton: false,
            timer: 1500
          }); 
    }else{
      Swal.fire({
      icon: 'warning',
      title: 'Error al asignar',
      showConfirmButton: false,
      timer: 1500
    });  
    }
  
  }

  _validarCantidad = () => {

    let _cantidad= document.getElementById('_cantidad').value;
  
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
  

  if(document.querySelector('#btnTask')){
    document.querySelector('#btnTask')
    .addEventListener('click', register)
    }