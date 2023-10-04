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
    a.download = 'compras.xlsx';
    a.style.display = 'none';

    // Agregar el enlace al documento y simular el clic
    document.body.appendChild(a);
    a.click();

    // Limpiar y remover el enlace
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }


  function cancelarCompra(){
    Swal.fire({
        title: 'Estas seguro?',
        text: "No podras revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, Anularlo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Anulado!',
            'La compra ha sido anulada correctamente.',
            'success'
          )
          setTimeout(()=>{
            window.location.href='listarCompra.html'
          },1000)
        }
      })
    }
  