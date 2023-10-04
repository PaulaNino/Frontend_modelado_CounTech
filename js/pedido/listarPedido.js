function cancelarPedido(){
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
            'El pedido ha sido anulado correctamente.',
            'success'
          )
          setTimeout(()=>{
            window.location.href='listarPedido.html'
          },1000)
        }
      })
    }