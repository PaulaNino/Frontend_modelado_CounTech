// Obtener referencias a los elementos del DOM
const agregarReferenciaBtn = document.getElementById('agregarReferencia');
const referenciasTableBody = document.getElementById('referenciasTableBody');
const valorPagarInput = document.getElementById('valorPagar');

// Agregar evento de clic al botón "Agregar Referencia"
agregarReferenciaBtn.addEventListener('click', agregarReferencia);

// Función para agregar una nueva referencia a la tabla
function agregarReferencia() {
  // Obtener valores de los campos de la información de referencia
  const referenciaInput = document.getElementById('referencia');
  const descripcionInput = document.getElementById('descripcion');
  const valorUnitarioInput = document.getElementById('valorUnitario');
  const procesosSelect = document.getElementById('procesos');

  // Crear una nueva fila en la tabla de referencias
  const newRow = document.createElement('tr');

  // Crear las celdas de la nueva fila
  const referenciaCell = document.createElement('td');
  referenciaCell.textContent = referenciaInput.value;

  const descripcionCell = document.createElement('td');
  descripcionCell.textContent = descripcionInput.value;

  const procesosCell = document.createElement('td');
  procesosCell.textContent = Array.from(procesosSelect.selectedOptions, option => option.text).join(', ');

  const valorUnitarioCell = document.createElement('td');
  valorUnitarioCell.textContent = valorUnitarioInput.value;

  const cantidadTotalCell = document.createElement('td');
  cantidadTotalCell.textContent = '0'; // Se actualizará más adelante

  const valorTotalCell = document.createElement('td');
  valorTotalCell.textContent = '0'; // Se actualizará más adelante

  const accionesCell = document.createElement('td');
  const agregarColorBtn = document.createElement('button');
  agregarColorBtn.innerHTML = '<i class="mdi mdi-plus-circle"></i>';
  agregarColorBtn.addEventListener('click', agregarColor);

  const editarBtn = document.createElement('button');
  editarBtn.textContent = 'Editar';
  editarBtn.addEventListener('click', editarReferencia);

  const eliminarBtn = document.createElement('button');
  eliminarBtn.textContent = 'Eliminar';
  eliminarBtn.addEventListener('click', eliminarReferencia);

  accionesCell.appendChild(agregarColorBtn);
  accionesCell.appendChild(editarBtn);
  accionesCell.appendChild(eliminarBtn);

  // Agregar las celdas a la nueva fila
  newRow.appendChild(referenciaCell);
  newRow.appendChild(descripcionCell);
  newRow.appendChild(procesosCell);
  newRow.appendChild(valorUnitarioCell);
  newRow.appendChild(cantidadTotalCell);
  newRow.appendChild(valorTotalCell);
  newRow.appendChild(accionesCell);

  // Agregar la nueva fila a la tabla de referencias
  referenciasTableBody.appendChild(newRow);

  // Limpiar los campos de la información de referencia
  referenciaInput.value = '';
  descripcionInput.value = '';
  valorUnitarioInput.value = '';
  procesosSelect.selectedIndex = -1;

  // Actualizar el campo de valor a pagar
  actualizarValorPagar();
}

// Función para agregar una nueva tabla de colores
function agregarColor() {
  // Crear una nueva tabla de colores
  const tablaColoresDiv = document.createElement('div');
  tablaColoresDiv.classList.add('table-responsive');

  const tablaColores = document.createElement('table');
  tablaColores.classList.add('table');
  tablaColores.classList.add('table-bordered');

  // Crear el encabezado de la tabla de colores
  const thead = document.createElement('thead');
  const encabezadoRow = document.createElement('tr');
  encabezadoRow.innerHTML = `
    <th>Color/Talla</th>
    <th>S</th>
    <th>M</th>
    <th>L</th>
    <th>XL</th>
    <th>Cantidad Total</th>
    <th>Acciones</th>
  `;
  thead.appendChild(encabezadoRow);
  tablaColores.appendChild(thead);

  // Crear el cuerpo de la tabla de colores
  const tbody = document.createElement('tbody');
  tablaColores.appendChild(tbody);

  // Crear el campo de cantidades totales
  const cantidadesTotalesInput = document.createElement('input');
  cantidadesTotalesInput.classList.add('form-control');
  cantidadesTotalesInput.disabled = true;
  cantidadesTotalesInput.value = '0';

  // Crear los botones de crear y guardar
  const crearBtn = document.createElement('button');
  crearBtn.textContent = 'Crear';
  crearBtn.addEventListener('click', agregarFilaColor);

  const guardarBtn = document.createElement('button');
  guardarBtn.textContent = 'Guardar';
  guardarBtn.addEventListener('click', guardarColores);

  // Agregar la tabla de colores, el campo de cantidades totales y los botones al documento
  tablaColoresDiv.appendChild(tablaColores);
  tablaColoresDiv.appendChild(cantidadesTotalesInput);
  tablaColoresDiv.appendChild(crearBtn);
  tablaColoresDiv.appendChild(guardarBtn);

  // Insertar la tabla de colores debajo de la tabla de referencias
  const referenciaRow = this.parentNode.parentNode.parentNode;
  referenciaRow.insertAdjacentElement('afterend', tablaColoresDiv);
}

// Función para agregar una nueva fila en la tabla de colores
function agregarFilaColor() {
  const tablaColores = this.parentNode.parentNode.getElementsByTagName('table')[0];
  const tbody = tablaColores.getElementsByTagName('tbody')[0];

  // Crear una nueva fila en la tabla de colores
  const newRow = document.createElement('tr');

  // Crear las celdas de la nueva fila
  const colorTallaCell = document.createElement('td');
  const colorTallaInput = document.createElement('input');
  colorTallaInput.type = 'text';
  colorTallaCell.appendChild(colorTallaInput);

  const sCell = document.createElement('td');
  const sInput = document.createElement('input');
  sInput.type = 'number';
  sInput.addEventListener('input', actualizarCantidadTotal);
  sCell.appendChild(sInput);

  const mCell = document.createElement('td');
  const mInput = document.createElement('input');
  mInput.type = 'number';
  mInput.addEventListener('input', actualizarCantidadTotal);
  mCell.appendChild(mInput);

  const lCell = document.createElement('td');
  const lInput = document.createElement('input');
  lInput.type = 'number';
  lInput.addEventListener('input', actualizarCantidadTotal);
  lCell.appendChild(lInput);

  const xlCell = document.createElement('td');
  const xlInput = document.createElement('input');
  xlInput.type = 'number';
  xlInput.addEventListener('input', actualizarCantidadTotal);
  xlCell.appendChild(xlInput);

  const cantidadTotalCell = document.createElement('td');
  cantidadTotalCell.textContent = '0'; // Se actualizará más adelante

  const accionesCell = document.createElement('td');
  const eliminarBtn = document.createElement('button');
  eliminarBtn.textContent = 'Eliminar';
  eliminarBtn.addEventListener('click', eliminarFilaColor);

  accionesCell.appendChild(eliminarBtn);

  // Agregar las celdas a la nueva fila
  newRow.appendChild(colorTallaCell);
  newRow.appendChild(sCell);
  newRow.appendChild(mCell);
  newRow.appendChild(lCell);
  newRow.appendChild(xlCell);
  newRow.appendChild(cantidadTotalCell);
  newRow.appendChild(accionesCell);

  // Agregar la nueva fila al cuerpo de la tabla
  tbody.appendChild(newRow);
}







// Función para eliminar una fila de la tabla de colores
function eliminarFilaColor() {
  const fila = this.parentNode.parentNode;
  const tablaColores = fila.parentNode.parentNode;
  const tbody = tablaColores.getElementsByTagName('tbody')[0];

  // Eliminar la fila del cuerpo de la tabla
  tbody.removeChild(fila);
}

// Función para actualizar la cantidad total en una fila de la tabla de colores
function actualizarCantidadTotal() {
  const fila = this.parentNode.parentNode;
  const sInput = fila.getElementsByTagName('input')[1];
  const mInput = fila.getElementsByTagName('input')[2];
  const lInput = fila.getElementsByTagName('input')[3];
  const xlInput = fila.getElementsByTagName('input')[4];
  const cantidadTotalCell = fila.getElementsByTagName('td')[5];

  const s = parseInt(sInput.value) || 0;
  const m = parseInt(mInput.value) || 0;
  const l = parseInt(lInput.value) || 0;
  

  const cantidadTotal = s + m + l ;
  cantidadTotalCell.textContent = cantidadTotal;

  actualizarCantidadesTotales();
}

// Función para actualizar las cantidades totales en la tabla de colores
function actualizarCantidadesTotales() {
  const tablaColores = document.getElementById('tablaColores');
  const cantidadesTotalesInput = tablaColores.nextElementSibling;
  const filas = tablaColores.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
  let cantidadesTotales = 0;

  for (let i = 0; i < filas.length; i++) {
    const cantidadTotalCell = filas[i].getElementsByTagName('td')[5];
    const cantidadTotal = parseInt(cantidadTotalCell.textContent) || 0;
    cantidadesTotales += cantidadTotal;
  }

  cantidadesTotalesInput.value = cantidadesTotales;
}

// Función para guardar los colores y cantidades totales en la tabla de referencias
function guardarColores() {
  const tablaColores = this.parentNode.getElementsByTagName('table')[0];
  const filas = tablaColores.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

  for (let i = 0; i < filas.length; i++) {
    const fila = filas[i];
    const referencia = this.parentNode.parentNode.previousElementSibling.getElementsByTagName('td')[0].textContent;
    const descripcion = this.parentNode.parentNode.previousElementSibling.getElementsByTagName('td')[1].textContent;
    const procesos = Array.from(this.parentNode.parentNode.previousElementSibling.getElementsByTagName('td')[2].getElementsByTagName('span'))
      .map(span => span.textContent);
    const valorUnitario = parseFloat(this.parentNode.parentNode.previousElementSibling.getElementsByTagName('td')[3].textContent);
    const colorTalla = fila.getElementsByTagName('input')[0].value;
    const s = parseInt(fila.getElementsByTagName('input')[1].value) || 0;
    const m = parseInt(fila.getElementsByTagName('input')[2].value) || 0;
    const l = parseInt(fila.getElementsByTagName('input')[3].value) || 0;
    const xl = parseInt(fila.getElementsByTagName('input')[4].value) || 0;
    const cantidadTotal = s + m + l + xl;
    const valorTotal = valorUnitario * cantidadTotal;

    // Crear una nueva fila en la tabla de referencias
    const newRow = document.createElement('tr');

    // Crear las celdas de la nueva fila
    const referenciaCell = document.createElement('td');
    referenciaCell.textContent = referencia;

    const descripcionCell = document.createElement('td');
    descripcionCell.textContent = descripcion;

    const procesosCell = document.createElement('td');
    procesosCell.textContent = procesos.join(', ');

    const valorUnitarioCell = document.createElement('td');
    valorUnitarioCell.textContent = valorUnitario.toFixed(2);

    const cantidadTotalCell = document.createElement('td');
    cantidadTotalCell.textContent = cantidadTotal;

    const valorTotalCell = document.createElement('td');
    valorTotalCell.textContent = valorTotal.toFixed(2);

    const accionesCell = document.createElement('td');
    const editarBtn = document.createElement('button');
    editarBtn.textContent = 'Editar';
    editarBtn.addEventListener('click', editarReferencia);

    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.addEventListener('click', eliminarReferencia);

    accionesCell.appendChild(editarBtn);
    accionesCell.appendChild(eliminarBtn);

    // Agregar las celdas a la nueva fila
    newRow.appendChild(referenciaCell);
    newRow.appendChild(descripcionCell);
    newRow.appendChild(procesosCell);
    newRow.appendChild(valorUnitarioCell);
    newRow.appendChild(cantidadTotalCell);
    newRow.appendChild(valorTotalCell);
    newRow.appendChild(accionesCell);

    // Agregar la nueva fila a la tabla de referencias
    referenciasTableBody.appendChild(newRow);
  }

  // Eliminar la tabla de colores y los elementos relacionados
  this.parentNode.parentNode.removeChild(this.parentNode);
  actualizarValorPagar();
}

// Función para editar una referencia existente
function editarReferencia() {
  const referenciaRow = this.parentNode.parentNode;
  const referenciaCells = referenciaRow.getElementsByTagName('td');

  // Obtener los valores de las celdas de la referencia
  const referencia = referenciaCells[0].textContent;
  const descripcion = referenciaCells[1].textContent;
  const procesos = referenciaCells[2].textContent.split(', ');
  const valorUnitario = parseFloat(referenciaCells[3].textContent);

  // Actualizar los campos de la información de referencia con los valores existentes
  const referenciaInput = document.getElementById('referencia');
  referenciaInput.value = referencia;

  const descripcionInput = document.getElementById('descripcion');
  descripcionInput.value = descripcion;

  const valorUnitarioInput = document.getElementById('valorUnitario');
  valorUnitarioInput.value = valorUnitario;

  const procesosSelect = document.getElementById('procesos');
  Array.from(procesosSelect.options).forEach(option => {
    option.selected = procesos.includes(option.text);
  });

  // Eliminar la fila de la referencia existente
  referenciasTableBody.removeChild(referenciaRow);

  // Actualizar el campo de valor a pagar
  actualizarValorPagar();
}

// Función para eliminar una referencia existente
function eliminarReferencia() {
  const referenciaRow = this.parentNode.parentNode;
  referenciasTableBody.removeChild(referenciaRow);

  // Actualizar el campo de valor a pagar
  actualizarValorPagar();
}

// Función para actualizar el campo de valor a pagar
function actualizarValorPagar() {
  const filas = referenciasTableBody.getElementsByTagName('tr');
  let valorPagar = 0;

  for (let i = 0; i < filas.length; i++) {
    const valorTotalCell = filas[i].getElementsByTagName('td')[5];
    const valorTotal = parseFloat(valorTotalCell.textContent) || 0;
    valorPagar += valorTotal;
  }

  valorPagarInput.value = valorPagar.toFixed(2);
}

// Obtener la tabla de referencias
const referenciasTable = document.getElementById('referenciasTable');
const referenciasTableBody1 = referenciasTable.getElementsByTagName('tbody')[0];

// Obtener el campo de valor a pagar
const valorPagarInput1 = document.getElementById('valorPagar');

// Obtener el botón de agregar referencia
const agregarReferenciaBtn1 = document.getElementById('agregarReferencia');
agregarReferenciaBtn.addEventListener('click', agregarReferencia);

// Obtener los botones de guardar y cancelar
const guardarBtn = document.getElementById('guardar');
guardarBtn.addEventListener('click', guardarPedido);

const cancelarBtn = document.getElementById('cancelar');
cancelarBtn.addEventListener('click', cancelarPedido);
