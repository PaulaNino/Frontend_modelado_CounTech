

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
    a.download = 'ventas.xlsx';
    a.style.display = 'none';

    // Agregar el enlace al documento y simular el clic
    document.body.appendChild(a);
    a.click();

    // Limpiar y remover el enlace
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}



function descargarPDF() {
    const element = document.querySelector('.comprobante'); // Obtener el elemento del modal por su ID
    const options = {
      margin: [0, 0, 0, 0], // Configurar los márgenes del PDF
      filename: 'comprobante.pdf', // Nombre del archivo PDF descargado
      image: { type: 'jpeg', quality: 0.98 }, // Opciones de imagen (tipo y calidad)
      html2canvas: { scale: 2 }, // Opciones de html2canvas (escala)
      jsPDF: {
        unit: 'mm', // Unidad de medida (milímetros)
        format: 'a5', // Formato de página (por ejemplo, A4)
        orientation: 'portrait', // Orientación de página (vertical)
        fontSize: 10 // Tamaño de fuente predeterminado para el documento PDF (por ejemplo, 10 puntos)
      }
    };
  

    html2pdf().set(options).from(element).save(); // Convertir el contenido del elemento al PDF y descargarlo
}
  

