
    $(document).ready(function() {
      // Variables para llevar el seguimiento de las referencias agregadas
      let referenciaCount = 1;
      let referenciaTotalCount = 0;
    
      // Manejador de evento para el botón "Agregar" de la sección de referencia
      $('#agregarReferencia').click(function() {
        const referencia = $('#referencia').val();
        const descripcion = $('#descripcion').val();
        const valorUnitario = parseFloat($('#valorUnitario').val());
      
        // Verificar si se ha ingresado al menos un proceso
        const procesos = [];
        if ($('#procesoPlana').is(':checked')) {
          procesos.push('Plana');
        }
        if ($('#procesoRecubridora').is(':checked')) {
          procesos.push('Recubridora');
        }
        if ($('#procesoFileteadora').is(':checked')) {
          procesos.push('Fileteadora');
        }
        if ($('#procesoPresilladora').is(':checked')) {
          procesos.push('Presilladora');
        }
    
        // Crear la nueva fila en la tabla de referencias
        const newRow = `
          <tr data-referencia="${referencia}">
            <td>${referencia}</td>
            <td>${descripcion}</td>
            <td>${procesos.join(', ')}</td>
            <td>${valorUnitario}</td>
            <td>0</td>
            <td>0</td>
            <td>
              <button type="button" class="btn btn-primary btn-sm editarReferencia">Editar</button>
              <button type="button" class="btn btn-danger btn-sm eliminarReferencia">Eliminar</button>
              <button type="button" class="btn btn-success btn-sm agregarColores">Agregar Colores</button>
            </td>
          </tr>
        `;
        $('#referenciasTableBody').append(newRow);

        // Incrementar el contador de referencias
        referenciaCount++;
        referenciaTotalCount++;

        // Actualizar la cantidad total y el valor total en la tabla de referencias
        actualizarCantidadTotal();
        actualizarValorTotal();

        // Limpiar los campos de la sección de referencia
        $('#referencia').val('');
        $('#descripcion').val('');
        $('#valorUnitario').val('');

        // Mostrar la sección de colores/tallas para la nueva referencia
        mostrarColoresTallas(referencia);
      });

      // Función para actualizar la cantidad total en la tabla de referencias
      function actualizarCantidadTotal() {
        $('#referenciasTableBody tr').each(function() {
          const referencia = $(this).data('referencia');
          let cantidadTotal = 0;

          // Calcular la cantidad total sumando las unidades de cada fila de la tabla de colores/tallas para la referencia actual
          $(`#coloresTallasTableBody tr[data-referencia="${referencia}"]`).each(function() {
            const s = parseInt($(this).find('.s').text()) || 0;
            const m = parseInt($(this).find('.m').text()) || 0;
            const l = parseInt($(this).find('.l').text()) || 0;
            const xl = parseInt($(this).find('.xl').text()) || 0;

            cantidadTotal += s + m + l + xl;
          });

          // Actualizar la cantidad total en la fila correspondiente de la tabla de referencias
          $(this).find('td:nth-child(5)').text(cantidadTotal);
        });
      }

      // Función para actualizar el valor total en la tabla de referencias
      function actualizarValorTotal() {
        $('#referenciasTableBody tr').each(function() {
          const referencia = $(this).data('referencia');
          const valorUnitario = parseFloat($(this).find('td:nth-child(4)').text());
          const cantidadTotal = parseInt($(this).find('td:nth-child(5)').text());
          const valorTotal = valorUnitario * cantidadTotal;

          // Actualizar el valor total en la fila correspondiente de la tabla de referencias
          $(this).find('td:nth-child(6)').text(valorTotal);
        });

        // Calcular el valor a pagar sumando los valores totales de todas las referencias
        let valorPagar = 0;
        $('#referenciasTableBody tr').each(function() {
          const valorTotal = parseFloat($(this).find('td:nth-child(6)').text());
          valorPagar += valorTotal;
        });

        // Actualizar el campo "Valor a Pagar" en la sección de forma de pago
        $('#valorPagar').val(valorPagar);
      }

      // Función para mostrar la sección de colores/tallas para una referencia dada
      function mostrarColoresTallas(referencia) {
        const coloresTallasSection = `
          <div class="row mt-4 coloresTallasSection" data-referencia="${referencia}">
            <div class="col">
              <h3>Tabla de Colores/Tallas - Referencia ${referencia}</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th>Color/Talla</th>
                    <th>S</th>
                    <th>M</th>
                    <th>L</th>
                    <th>XL</th>
                    <th>Cantidad Total</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody id="coloresTallasTableBody-${referencia}">
                  <!-- Aquí se agregarán dinámicamente las filas de las colores/tallas -->
                </tbody>
              </table>
              <button type="button" class="btn btn-primary btn-sm agregarColor">Agregar</button>
              <button type="button" class="btn btn-success btn-sm guardarColores">Guardar</button>
            </div>
          </div>
        `;
        $('#referenciasTableBody tr[data-referencia="' + referencia + '"]').after(coloresTallasSection);
      }

      // Manejador de evento para el botón "Agregar Colores" de la tabla de referencias
      $(document).on('click', '.agregarColores', function() {
        const referencia = $(this).closest('tr').data('referencia');
        mostrarColoresTallas(referencia);
      });

      // Manejador de evento para el botón "Agregar" de la tabla de colores/tallas
      $(document).on('click', '.agregarColor', function() {
        const referencia = $(this).closest('.coloresTallasSection').data('referencia');
        const coloresTallasTableBody = $('#coloresTallasTableBody-' + referencia);

        const newRow = `
          <tr>
            <td><input type="text" class="form-control colorTalla"></td>
            <td><input type="number" class="form-control s"></td>
            <td><input type="number" class="form-control m"></td>
            <td><input type="number" class="form-control l"></td>
            <td><input type="number" class="form-control xl"></td>
            <td class="cantidadTotal">0</td>
            <td>
              <button type="button" class="btn btn-primary btn-sm guardarColor">Guardar</button>
              <button type="button" class="btn btn-warning btn-sm editarColor">Editar</button>
              <button type="button" class="btn btn-danger btn-sm eliminarColor">Eliminar</button>
            </td>
          </tr>
        `;
        coloresTallasTableBody.append(newRow);
      });

      // Manejador de evento para el botón "Guardar" de la tabla de colores/tallas
      $(document).on('click', '.guardarColores', function() {
        const referencia = $(this).closest('.coloresTallasSection').data('referencia');
        const coloresTallasTableBody = $('#coloresTallasTableBody-' + referencia);
        let unidadesTotales = 0;

        coloresTallasTableBody.find('tr').each(function() {
          const colorTalla = $(this).find('.colorTalla').val();
          const s = parseInt($(this).find('.s').val()) || 0;
          const m = parseInt($(this).find('.m').val()) || 0;
          const l = parseInt($(this).find('.l').val()) || 0;
          const xl = parseInt($(this).find('.xl').val()) || 0;
          const cantidadTotal = s + m + l + xl;

          $(this).find('.cantidadTotal').text(cantidadTotal);
          unidadesTotales += cantidadTotal;

          // Guardar los datos en la fila correspondiente de la tabla de referencias
          const referenciaRow = $('#referenciasTableBody tr[data-referencia="' + referencia + '"]');
          referenciaRow.data('colorTalla', colorTalla);
          referenciaRow.data('s', s);
          referenciaRow.data('m', m);
          referenciaRow.data('l', l);
          referenciaRow.data('xl', xl);
        });

        // Actualizar la cantidad total en la tabla de referencias
        const referenciaRow = $('#referenciasTableBody tr[data-referencia="' + referencia + '"]');
        referenciaRow.find('td:nth-child(5)').text(unidadesTotales);

        // Actualizar el valor total en la tabla de referencias
        const valorUnitario = parseFloat(referenciaRow.find('td:nth-child(4)').text());
        const valorTotal = valorUnitario * unidadesTotales;
        referenciaRow.find('td:nth-child(6)').text(valorTotal);

        // Actualizar el valor a pagar en la sección de forma de pago
        actualizarValorTotal();
      });

      // Manejador de evento para el botón "Editar" de la tabla de colores/tallas
      $(document).on('click', '.editarColor', function() {
        const referencia = $(this).closest('.coloresTallasSection').data('referencia');
        const coloresTallasTableBody = $('#coloresTallasTableBody-' + referencia);

        const row = $(this).closest('tr');
        const colorTalla = row.find('.colorTalla').val();
        const s = parseInt(row.find('.s').val()) || 0;
        const m = parseInt(row.find('.m').val()) || 0;
        const l = parseInt(row.find('.l').val()) || 0;
        const xl = parseInt(row.find('.xl').val()) || 0;
        const cantidadTotal = s + m + l + xl;

        row.find('.cantidadTotal').text(cantidadTotal);

        // Actualizar los datos en la fila correspondiente de la tabla de referencias
        const referenciaRow = $('#referenciasTableBody tr[data-referencia="' + referencia + '"]');
        referenciaRow.data('colorTalla', colorTalla);
        referenciaRow.data('s', s);
        referenciaRow.data('m', m);
        referenciaRow.data('l', l);
        referenciaRow.data('xl', xl);

        // Actualizar la cantidad total en la tabla de referencias
        let unidadesTotales = 0;
        coloresTallasTableBody.find('tr').each(function() {
          const cantidad = parseInt($(this).find('.cantidadTotal').text()) || 0;
          unidadesTotales += cantidad;
        });
        referenciaRow.find('td:nth-child(5)').text(unidadesTotales);

        // Actualizar el valor total en la tabla de referencias
        const valorUnitario = parseFloat(referenciaRow.find('td:nth-child(4)').text());
        const valorTotal = valorUnitario * unidadesTotales;
        referenciaRow.find('td:nth-child(6)').text(valorTotal);

        // Actualizar el valor a pagar en la sección de forma de pago
        actualizarValorTotal();
      });

      // Manejador de evento para el botón "Eliminar" de la tabla de colores/tallas
      $(document).on('click', '.eliminarColor', function() {
        const referencia = $(this).closest('.coloresTallasSection').data('referencia');
        const coloresTallasTableBody = $('#coloresTallasTableBody-' + referencia);

        // Eliminar la fila de la tabla de colores/tallas
        $(this).closest('tr').remove();

        // Actualizar la cantidad total en la tabla de referencias
        let unidadesTotales = 0;
        coloresTallasTableBody.find('tr').each(function() {
          const cantidad = parseInt($(this).find('.cantidadTotal').text()) || 0;
          unidadesTotales += cantidad;
        });
        const referenciaRow = $('#referenciasTableBody tr[data-referencia="' + referencia + '"]');
        referenciaRow.find('td:nth-child(5)').text(unidadesTotales);

        // Actualizar el valor total en la tabla de referencias
        const valorUnitario = parseFloat(referenciaRow.find('td:nth-child(4)').text());
        const valorTotal = valorUnitario * unidadesTotales;
        referenciaRow.find('td:nth-child(6)').text(valorTotal);

        // Actualizar el valor a pagar en la sección de forma de pago
        actualizarValorTotal();
      });

      // Manejador de evento para el botón "Eliminar" de la tabla de referencias
      $(document).on('click', '.eliminarReferencia', function() {
        const referencia = $(this).closest('tr').data('referencia');

        // Eliminar la fila de la tabla de referencias
        $(this).closest('tr').remove();

        // Eliminar la sección de colores/tallas correspondiente
        $('.coloresTallasSection[data-referencia="' + referencia + '"]').remove();

        // Actualizar el valor a pagar en la sección de forma de pago
        actualizarValorTotal();
      });

      // Manejador de evento para el botón "Guardar" de la sección de forma de pago
      $('#guardarFormulario').click(function() {
        // Obtener los datos del formulario
        const formaPago = $('#formaPago').val();
        const valorPagar = parseFloat($('#valorPagar').val());

        // Realizar la lógica de guardado del formulario
        // ...

        // Mostrar un mensaje de éxito o redirigir a otra página
        // ...
      });

      // Manejador de evento para el botón "Cancelar" del formulario
      $('#cancelarFormulario').click(function() {
        // Realizar la lógica de cancelación del formulario
        // ...

        // Mostrar un mensaje de confirmación o redirigir a otra página
        // ...
      })
    });
 