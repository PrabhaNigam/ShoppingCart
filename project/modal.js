/*-----------------Opening Modal------------------------*/

var openModal = function(){
var modalItem = localStorage.getItem('AddModal');
$.getJSON("./products.json", function (result) {
    for (var d of result) {
        if(d.id == modalItem){
            document.getElementById('modname').innerHTML = d.name;
            document.getElementById('modprice').innerHTML = d.price;
            document.getElementById('modbrand').innerHTML = d.brand;
            document.getElementById('modimg').src = d.image[0];
        }
        
    }
})

};