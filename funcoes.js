$(document).ready(function(){
    $('#calcular').click(function(){
        
        var numero1 = parseFloat($('#numero1').val());
        var numero2 = parseFloat($('#numero2').val());

        
        if (isNaN(numero1) || isNaN(numero2)) {
            alert("Por favor, insira números válidos.");
            $('#resultado').text('Por favor, insira números válidos.');
        } else {
           
            var soma = numero1 + numero2;
            
         
            alert("A soma dos números é: " + soma);

          
            $('#resultado').text('Resultado: ' + soma);
        }
    });
});
