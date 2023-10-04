const iconElement = document.getElementById('task-icon');
iconElement.addEventListener('click', () => {
var iconElement = document.getElementById('task-icon');
var isTrue = iconElement.classList.contains('true');


  iconElement.classList.toggle('inactive');
  if (iconElement.classList.contains('inactive')) {
    Swal.fire({
      title: '¿Está seguro que quiere finalizar la tarea?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, finalizar!'
    }).then((result) => {
      if (result.isConfirmed) {        
        iconElement.classList.remove('mdi-toggle-switch-off');
        iconElement.classList.add('mdi-toggle-switch');
        if (iconElement.style.color === 'green') {  
          iconElement.style.color = 'red';
          iconElement.classList.remove('true');
          isTrue = false;
        } else {
          iconElement.style.color = 'green';
          iconElement.classList.add('true');
          isTrue = true;
        }
      } 
    }) 
  } 
  toggleCliente();
});
