const control = async() =>{

    Swal.fire({
        icon: 'success',
        title: 'Guardado exitosamente',
        showConfirmButton: true,
        timer: 6000
      });
}

if(document.querySelector('#btnControl')){
    document.querySelector('#btnControl')
    .addEventListener('click', control)
  }


  function toggleRow(icon) {
    var row = icon.parentNode;
    var nextRow = row.nextElementSibling;
    nextRow.classList.toggle("show");
}

const _iconElement = document.getElementById('cliente-icon');
_iconElement.addEventListener('click', () => {
var _iconElement = document.getElementById('cliente-icon');
var isTrue = _iconElement.classList.contains('true');


  _iconElement.classList.toggle('inactive');
  if (_iconElement.classList.contains('inactive')) {
    Swal.fire({
      title: '¿Está seguro que desea activar el empleado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, activarlo!'
    }).then((result) => {
      if (result.isConfirmed) {        
        _iconElement.classList.remove('mdi-toggle-switch-off');
        _iconElement.classList.add('mdi-toggle-switch');
        if (_iconElement.style.color === 'green') {  
          _iconElement.style.color = 'red';
          _iconElement.classList.remove('true');
          isTrue = false;
        } else {
          _iconElement.style.color = 'green';
          _iconElement.classList.add('true');
          isTrue = true;
        }
      } 
    }) 
  } else {
    Swal.fire({
      title: '¿Está seguro que desea desactivar el empleado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, desactivarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        _iconElement.classList.remove('mdi-toggle-switch');
        _iconElement.classList.add('mdi-toggle-switch-off');
        if (_iconElement.style.color === 'green') {  
          _iconElement.style.color = 'red';
          _iconElement.classList.remove('true');
          isTrue = false;
        } else {
          _iconElement.style.color = 'green';
          _iconElement.classList.add('true');
          isTrue = true;
        }
      }
    })        
  }

  toggleCliente();
});


