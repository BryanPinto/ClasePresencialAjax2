$(document).ready(function(){

	var url = 'https://mindicador.cl/api';
	var api = {
  "version": "1.5.0",
  "autor": "mindicador.cl",
  "fecha": "2018-08-02T22:00:00.000Z",
  "uf": {
    "codigo": "uf",
    "nombre": "Unidad de fomento (UF)",
    "unidad_medida": "Pesos",
    "fecha": "2018-08-02T04:00:00.000Z",
    "valor": 27204.23
  },
  "dolar": {
    "codigo": "dolar",
    "nombre": "Dólar observado",
    "unidad_medida": "Pesos",
    "fecha": "2018-08-02T04:00:00.000Z",
    "valor": 641.05
  },
  "dolar_intercambio": {
    "codigo": "dolar_intercambio",
    "nombre": "Dólar acuerdo",
    "unidad_medida": "Pesos",
    "fecha": "2014-11-13T05:00:00.000Z",
    "valor": 758.87
  },
  "euro": {
    "codigo": "euro",
    "nombre": "Euro",
    "unidad_medida": "Pesos",
    "fecha": "2018-08-02T04:00:00.000Z",
    "valor": 748.02
  },
  "utm": {
    "codigo": "utm",
    "nombre": "Unidad Tributaria Mensual (UTM)",
    "unidad_medida": "Pesos",
    "fecha": "2018-08-01T04:00:00.000Z",
    "valor": 47729
  }
};


	

		$.ajax({
		url: url + api,
		method: 'GET'
	}).then(function(data){
	$('.input-group input-group-lg').append(+data.api.valor+)
});



	$(".btn btn-default").on('submit', function(event){
				var convert = $("#numConvertido").val();
				event.preventDefault();
				$(".input-group input-group-lg").append('<div class="valorDolar"> ' +
					'<h3>El valor es :'+' valor</h3> ' +
					'</div>')
				$("#numConvertido").val("");
			});
	



});


