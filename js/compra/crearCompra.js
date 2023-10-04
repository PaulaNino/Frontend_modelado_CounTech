const registrar = () => {
    const validarContactoRespuesta = validarContacto();
    const validarNumeroFacturaRespuesta = validarNumeroFactura();
    const validarFechaCompraRespuesta = validarFechaCompra();

    if(validarContactoRespuesta && validarNumeroFacturaRespuesta && validarFechaCompraRespuesta){
        Swal.fire({
            icon: 'success',
            title: 'La compra ha sido creada exitosamente',
            showConfirmButton: false,
            timer: 1500
          });
        setTimeout(() =>{
            window.location.href = 'listarCompra.html';
        },1000); 
    }

}

validarContacto = () => {
    let validarContacto = document.getElementById('proveedor').value
    let texto;    
  
    if (validarContacto === null || validarContacto === '' || validarContacto.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el Proveedor</span>';
      document.getElementById('errorProveedor').innerHTML = texto;
      return false;
    }  else {
      document.getElementById('errorProveedor').innerHTML = '';
      return true;
    }
  };

validarNumeroFactura = () => {
    let validarContacto = document.getElementById('numeroFactura').value
    let texto;    
  
    if (validarContacto === null || validarContacto === '' || validarContacto.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el numero de la factura del proveedor</span>';
      document.getElementById('errorNumeroFactura').innerHTML = texto;
      return false;
    }  else {
      document.getElementById('errorNumeroFactura').innerHTML = '';
      return true;
    }
  };

validarFechaCompra = () => {
    let fechaIngreso = document.getElementById('fechaCompra').value
    let texto;

if (fechaIngreso === null || fechaIngreso === '' || fechaIngreso.length === 0) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la fecha de ingreso del empleado</span>';
        document.getElementById('errorFechaCompra').innerHTML = texto;
        return false;
      }else{
        document.getElementById('errorFechaCompra').innerHTML = '';
      return true;
      }
}

document.querySelector('#btnRegistrar')
.addEventListener('click',registrar)

const tablaInsumos = document.getElementById('tablaInsumos');
  const tbody = tablaInsumos.querySelector('tbody');
  
  tablaInsumos.addEventListener('click', (event) => {
    const target = event.target;
    const row = target.closest('tr');
    const inputs = Array.from(row.querySelectorAll('input'));
    const lastInput = inputs[inputs.length - 1];

    if (target.classList.contains('guardar-btn') && !isRowEmpty(inputs)) {
      event.preventDefault();
      addNewRow();
    } else if (target.classList.contains('eliminar-btn')) {
      event.preventDefault();
      deleteRow(row);
    }
  });

  const addNewRow = () => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>
        <select style="width: 90px;" aria-label="Default select example">                            
          <option value="1">Producción</option>
          <option value="2">Administrativo</option>
          <option value="3">Nomina</option>
        </select>
      </td>
      <td>
        <select style="width: 90px;" aria-label="Default select example">
          <option selected disabled>Seleccionar</option>
          <option value="1">Hilos</option>
          <option value="2">Agujas</option>
          <option value="3">Bobina de hilo</option>
        </select>
      </td>
      <td>
        <input type="text" placeholder="Ingrese la descripción">
      </td>
      <td>
        <input style="width: 50px;" type="number" placeholder="0" class="cantidad">
      </td>
      <td>
        <input style="width: 130px;" type="number" placeholder="0,00" class="valorUnitario">
      </td>
      <td>
        <input style="width: 50px;" type="number" placeholder="0">
      </td>
      <td>
        <select style="width: 50px;" aria-label="Default select example">                            
          <option value="1">19%</option>
          <option value="2">15%</option>
          <option value="3">5%</option>
        </select>
      </td>
      <td>
        <input style="width: 130px;" type="number" placeholder="0,00" class="valorTotal" readonly>
      </td>
      <td style="text-align: center">
        <button class="btn btn-success guardar-btn" style="background-color: transparent;border:none"><span class="mdi mdi-content-save" style="font-size: 24px;color:green"></span></button>
        <button class="btn btn-danger eliminar-btn" style="background-color: transparent;border:none"><span style="color: red; font-size:24px" class="mdi mdi-trash-can-outline"></span></button>
      </td>
    `;

    tbody.appendChild(newRow);
    newRow.querySelector('input').focus();
  };

  const deleteRow = (row) => {
    row.remove();
  };

  const isRowEmpty = (inputs) => {
    return inputs.some((input) => input.value.trim() !== '');
  };
