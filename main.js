ContactosMVC.controllerInst = new ContactosMVC.Controller({
	model: ContactosMVC.Model,
	view: ContactosMVC.View,
	endpoint: 'http://localhost:8080',
});
ContactosMVC.arrayContactos = [];



var valorCookie = document.cookie;
var expresionRegular = /\s*;\s*/;
console.warn(valorCookie);
if(valorCookie == ""){
	console.log("no hay cookie");
	window.location = "/";
}
else {
	console.log("hay cookies");
	var arrayCookie = valorCookie.split(expresionRegular);
	var objDatos = {};

	arrayCookie.forEach(function(elem){
		expresionRegular = /\s*=\s*/;
		getDatoCookie= elem.split(expresionRegular);
		if(getDatoCookie[0] == "sessionBool"){
			objDatos[`${getDatoCookie[0]}`] = Boolean(parseInt(getDatoCookie[1]));
		}
		else{
			objDatos[`${getDatoCookie[0]}`] = getDatoCookie[1];
		}
		console.warn(objDatos);
	})

	ContactosMVC.controllerInst.getData();
}
