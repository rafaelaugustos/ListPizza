$(function(){
	var i = Number(localStorage.getItem('pizza-contador')) + 1;
	var j, k, orderList;
	var $pizza = $("#NomePizza");
	var $pizzaList = $("#pizzas");
	var order = [];
	orderList = localStorage.getItem('pizza-cadastro');
	
	if(!orderList){
		$("#semErros").css("display","block");
	}
   

	
		// Carregar Lista de Pizzas
		
		orderList = orderList ? orderList.split(',') : [];   
		for( j = 0, k = orderList.length; j < k; j++) {
			$pizzaList.append(
				"<li id='" + orderList[j] + "'>"
				+ "<a class='editable' data-split-theme='c'>"	
				+ localStorage.getItem(orderList[j]) 
				+ "</a> <a href='#' class='close' data-icon='delete' data-theme='c'>X</a></li>"
			);
		}
    
	// Incluir Pizzas 
	$("#IncluirPizzas").on("tap", function() {
		if($pizza.val() != ""){
			localStorage.setItem("pizza-"+i, $pizza.val());
			localStorage.setItem("pizza-contador",i);
			$("#semErros").css("display","none");
			$pizzaList.append(
				"<li id='pizza-" + i + "'>" 
				+  "<a class='editable' data-split-theme='c'>" 
				+ localStorage.getItem("pizza-" + i) 
				+ " </a><a href='#' data-icon='delete' class='close' data-theme='c'>x</a></li>"
			);
			$.mobile.changePage("#ListaPizzas", { transition: "slidedown"});		
			listaPizzas();
			$pizza.val("");
			
			i++
		} 
		return false;
	});	
	
	// Excluir Pizzas
	$("#pizzas li a.close").on("tap", function() {
		//alert($(this).parent().attr("id"));
		localStorage.removeItem($(this).parent().attr("id"));
		 $(this).parent().slideUp('normal', function(){
				$(this).remove();
				listaPizzas();
			});
		 	
		return false;
	});
	
	function listaPizzas(){
		var $pizzaLi = $("#pizzas li");
		order.length = 0;
		
		$pizzaLi.each(function(){
			var id = $(this).attr("id");
			order.push(id);
		});
		$('ul').listview('refresh');
		localStorage.setItem("pizza-cadastro", order.join(","));	
	}	
});