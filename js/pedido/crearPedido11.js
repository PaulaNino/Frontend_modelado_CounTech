

// Obtener referencias a los elementos del DOM
const agregarReferenciaBtn = document.getElementById("agregarReferencia");
const referenciaInput = document.getElementById("referencia");
const descripcionInput = document.getElementById("descripcion");
const procesosSelect = document.getElementById("procesos");
const valorUnitarioInput = document.getElementById("valorUnitario");
const referenciasTableBody = document.getElementById("referenciasTableBody");
const valorPagarInput = document.getElementById("valorPagar");

// Manejador de evento para el botón agregarReferencia
agregarReferenciaBtn.addEventListener("click", () => {
  // Obtener los valores de los campos de entrada
  const referencia = referenciaInput.value;
  const descripcion = descripcionInput.value;
  const procesos = Array.from(procesosSelect.selectedOptions, (option) => option.value);
  const valorUnitario = parseFloat(valorUnitarioInput.value);

  // Crear una nueva fila en la tabla de referencias
  const nuevaFila = document.createElement("tr");

  // Insertar las celdas en la nueva fila
  nuevaFila.innerHTML = `
    <td>${referencia}</td>
    <td>${descripcion}</td>
    <td>${procesos.join(", ")}</td>
    <td>${valorUnitario}</td>
    <td>0</td>
    <td>0</td>
    <td>
      <button style="background-color: transparent;border:none" class="agregarColorBtn"><span style="font-size:24px" class="mdi mdi-plus-circle"></span></button>      
      <button style="background-color: transparent;border:none" class="eliminarBtn"><span style="color: red; font-size:24px" class="mdi mdi-trash-can-outline"></span></button>
    </td>
  `;

  // Agregar la nueva fila a la tabla de referencias
  referenciasTableBody.appendChild(nuevaFila);

  // Limpiar los campos de entrada
  referenciaInput.value = "";
  descripcionInput.value = "";
  procesosSelect.selectedIndex = -1;
  valorUnitarioInput.value = "";

  // Actualizar el campo valorPagar con la suma de los valores totales
  actualizarValorPagar();
});


///////////////  REVISAR QUE ESTA MALO   ///////////

// Función para actualizar el campo valorPagar
function actualizarValorPagar() {
  let valorTotal = 0;
  const filasReferencia = referenciasTableBody.getElementsByTagName("tr");

  // Calcular el valor total sumando los valores de todas las filas
  for (let i = 0; i < filasReferencia.length; i++) {
    const fila = filasReferencia[i];
    const valorUnitario = parseFloat(fila.cells[3].textContent);
    const cantidadTotal = parseInt(fila.cells[4].textContent);
    const valorFila = valorUnitario * cantidadTotal;
    fila.cells[5].textContent = valorFila.toFixed(2);
    valorTotal += valorFila;
  }

  // Actualizar el campo valorPagar con el valor total
  valorPagarInput.value = valorTotal.toFixed(2);
}


// Manejador de evento para los botones eliminar
referenciasTableBody.addEventListener("click", (event) => {
  if (event.target.classList.contains("eliminarBtn")) {
    const fila = event.target.parentNode.parentNode;
    referenciasTableBody.removeChild(fila);
    actualizarValorPagar();
  }
});

// Manejador de evento para los botones agregarColor
referenciasTableBody.addEventListener("click", (event) => {
  if (event.target.classList.contains("agregarColorBtn")) {
    const filaReferencia = event.target.parentNode.parentNode;
    const colorTable = crearTablaColor();
    filaReferencia.parentNode.insertBefore(colorTable, filaReferencia.nextSibling);
    event.target.disabled = true;
  }
});

// Función para crear la tabla de colores
function crearTablaColor() {
  const tablaColor = document.createElement("table");
  tablaColor.classList.add("table", "table-bordered");
  tablaColor.innerHTML = `
    <thead>
      <tr>
        <th>Color/Talla</th>
        <th>S</th>
        <th>M</th>
        <th>L</th>
        <th>XL</th>
        <th>CantidadTotal</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <!-- Aquí se agregarán dinámicamente las filas de los colores -->
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5" style="text-align: right;">
          <strong>Cantidad Total:</strong>
        </td>
        <td id="cantidadTotalCell">0</td>
      </tr>
      <tr>
        <td colspan="7" style="text-align: right;">
          <button class="crearColorBtn">Crear</button>
          <button class="guardarColoresBtn" style="background-color: rgb(112, 175, 116)";>Guardar</button>
        </td>
      </tr>
    </tfoot>
  `;

  tablaColor.addEventListener("click", (event) => {
    if (event.target.classList.contains("crearColorBtn")) {
      agregarFilaColor(tablaColor);
    } else if (event.target.classList.contains("guardarColoresBtn")) {
      guardarColores(tablaColor);
      tablaColor.style.display = "none";
      
    }
  });

  tablaColor.addEventListener("keydown", (event) => {
    const currentCell = event.target;
    const currentRow = currentCell.parentNode;
    const currentRowIndex = currentRow.rowIndex;

    if (
      event.key === "Tab" &&
      currentCell.cellIndex === 4 &&
      currentRowIndex !== tablaColor.rows.length - 2
    ) {
      event.preventDefault();
      agregarFilaColor(tablaColor);
      const newRow = tablaColor.rows[currentRowIndex + 1];
      newRow.cells[0].focus();
    }
  });

  tablaColor.addEventListener("input", (event) => {
    const input = event.target;
    const cell = input.parentNode;
    const row = cell.parentNode;
    const totalCell = tablaColor.querySelector("#cantidadTotalCell");

    if (input.cellIndex >= 1 && input.cellIndex <= 4) {
      let total = 0;

      for (let i = 1; i <= 4; i++) {
        const value = parseInt(row.cells[i].textContent) || 0;
        total += value;
      }

      totalCell.textContent = total;
    }
  });

  agregarFilaColor(tablaColor);
  tablaColor.rows[1].classList.add("expanded");
  tablaColor.rows[1].cells[0].focus();

  return tablaColor;
}



// Función para agregar una nueva fila de color
function agregarFilaColor(tablaColor) {
  const tbody = tablaColor.querySelector("tbody");
  const nuevaFila = document.createElement("tr");
  nuevaFila.innerHTML = `
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td>0</td>
    <td>
      <button style="background-color: transparent;border:none" class="eliminarColorBtn"><span style="color: red; font-size:24px" class="mdi mdi-trash-can-outline"></span></button>
    </td>
  `;
  tbody.appendChild(nuevaFila);
}

// Función para guardar los colores en la fila de referencia correspondiente
function guardarColores(tablaColor) {
  const filaReferencia = tablaColor.previousSibling;
  const cantidadTotalCell = tablaColor.querySelector("tfoot td:last-child");
  let cantidadTotal = 0;

  const filasColor = tablaColor.querySelectorAll("tbody tr");
  filasColor.forEach((filaColor) => {
    const cantidadColumnas = filaColor.cells.length;
    const cantidad = Array.from(filaColor.cells)
      .slice(1, cantidadColumnas - 2)
      .reduce((total, cell) => total + parseInt(cell.textContent) || 0, 0);
    cantidadTotal += cantidad;
  });

  cantidadTotalCell.textContent = cantidadTotal;

  const filaReferenciaCantidadTotal = filaReferencia.cells[4];
  filaReferenciaCantidadTotal.textContent = cantidadTotal;

  actualizarValorPagar();
}

// Manejador de evento para los botones eliminarColor
referenciasTableBody.addEventListener("click", (event) => {
  if (event.target.classList.contains("eliminarColorBtn")) {
    const filaColor = event.target.parentNode.parentNode;
    const tablaColor = filaColor.parentNode.parentNode;
    filaColor.parentNode.removeChild(filaColor);
    guardarColores(tablaColor);
  }
});


