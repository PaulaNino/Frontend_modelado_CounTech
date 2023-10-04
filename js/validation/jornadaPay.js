const control = async() =>{

    Swal.fire({
        icon: 'success',
        title: '¡Registros pagados exitosamente!',
        showConfirmButton: true,
        timer: 6000
      });
}


if(document.querySelector('#btnPay')){
    document.querySelector('#btnPay')
    .addEventListener('click', control)
  }

  const _iconElement_ = document.getElementById('pay-icon');
  _iconElement_.addEventListener('click', () => {
  var _iconElement_ = document.getElementById('pay-icon');
  var isTrue = _iconElement_.classList.contains('true');
  
  
    _iconElement_.classList.toggle('inactive');
    if (_iconElement_.classList.contains('inactive')) {
      Swal.fire({
        title: '¿Está seguro que desea pagar al empleado?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, pagar!'
      }).then((result) => {
        if (result.isConfirmed) {        
          _iconElement_.classList.remove('mdi-toggle-switch-off');
          _iconElement_.classList.add('mdi-toggle-switch');
          if (_iconElement_.style.color === 'green') {  
            _iconElement_.style.color = 'red';
            _iconElement_.classList.remove('true');
            isTrue = false;
          } else {
            _iconElement_.style.color = 'green';
            _iconElement_.classList.add('true');
            isTrue = true;
          }
        } 
      }) 
    } else {
      Swal.fire({
        title: '¿Desea revertir el pago?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, revertir!'
      }).then((result) => {
        if (result.isConfirmed) {
          _iconElement_.classList.remove('mdi-toggle-switch');
          _iconElement_.classList.add('mdi-toggle-switch-off');
          if (_iconElement_.style.color === 'green') {  
            _iconElement_.style.color = 'red';
            _iconElement_.classList.remove('true');
            isTrue = false;
          } else {
            _iconElement_.style.color = 'green';
            _iconElement_.classList.add('true');
            isTrue = true;
          }
        }
      })        
    }
  
    toggleCliente();
  });