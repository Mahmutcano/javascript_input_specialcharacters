document.addEventListener('DOMContentLoaded', function() {
  var input = document.getElementById('form_input');
  var regex = /[.,!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g; // özel karakterleri içeren regex ifadesi
  
  input.addEventListener('input', function(e) {
    var value = input.value;
    var new_value = value.replace(regex, '');
    if (new_value !== value) {
      input.value = new_value;
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var input = document.getElementById('form_input2');
  var regex = /[.,!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g; // özel karakterleri içeren regex ifadesi
  
  input.addEventListener('input', function(e) {
    var value = input.value;
    var new_value = value.replace(regex, '');
    if (new_value !== value) {
      input.value = new_value;
    }
  });
});