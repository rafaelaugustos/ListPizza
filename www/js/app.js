$(document).ready(function(){
    var $server;
    $server = 'http://localhost/XDK/';
                  
    function Lista(){
        $.ajax({
        type: "get",
        dataType  : 'html',
        url: $server+"/conecta.php",
        data: "acao=listapizzas",
        success: function(data) {
            $('#listapizzas').html(data);
             intel.xdk.notification.alert('Nome Cadastrado com sucesso','Cadastro','Ok');
        }
    });
}
    Lista();
});