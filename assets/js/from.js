$(document).ready(function() {
     $('.navbar-index .nav-item .nav-link').removeClass('active').removeAttr('aria-current');
     $('a[href="' + location.pathname + '"]').closest('li').addClass('active').attr('aria-current', 'page'); 
   });
   const currentabout = location.href; 
const menuitemabout = document.querySelectorAll('.navbar-index .nav-item .nav-link');
 const menulengthabout = menuitemabout.length
for (let j = 0; j<menulengthabout; j++){
 if(menuitemabout[j].href === currentabout) {
  menuitemabout[j].className = "active" 
    }
}
/*validation*/
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()