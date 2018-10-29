/*------------Adding to WishCart-----------------------------*/
function AddToWishlist() {
    var WishItem = localStorage.getItem('AddWish').split(',');
    console.log(WishItem)
    $.getJSON("./products.json", function (result) {
        for (var d of result) {
            for (var wish of WishItem) {
                if (wish == d.id) {
                    var wishCart = document.createElement('div');
                    wishCart.setAttribute("class", "wishCart");
                    wishCart.setAttribute("id", "wishCart" + d.id);
                    document.getElementById('wishlist').appendChild(wishCart);

                    var image = document.createElement('img');
                    image.setAttribute('id', 'wishimg' + d.id);
                    image.setAttribute('src', d.image[0]);
                    document.getElementById('wishCart' + d.id).appendChild(image);

                    var listDesc = document.createElement('div');
                    listDesc.setAttribute("class", "listDesc");
                    listDesc.setAttribute("id", "lists" + d.id);
                    document.getElementById('wishCart' + d.id).appendChild(listDesc);

                    var wishtab = document.createElement('table');
                    wishtab.setAttribute("id", "wishtab" + d.id);
                    document.getElementById('lists' + d.id).appendChild(wishtab);

                    document.getElementById('wishtab' + d.id).innerHTML = '<tr><th><h3 id="name' + d.id + '">Name :</h3></th></tr ><tr><th><h3 id="price' + d.id + '">Price :</h3></th></tr><tr><th><h3 id="brand' + d.id + '">Brand :</h3></th></tr><tr><td><input type="button" class="btn btn-danger remove" id="'+d.id+'" value="Remove" onclick="removeProductWishlist()" /></td><td><input type="button" class="btn btn-success success" value="Buy Now" onclick="buyNow()" /></td></tr>'
                    document.getElementById('name'+d.id).innerHTML = "Name : "+d.name;
                    document.getElementById('price'+d.id).innerHTML = "Price : "+d.price;
                    document.getElementById('brand'+d.id).innerHTML = "Brand : "+d.brand;
                }
            }
        }
    })
};
/*----------------------Removing from wishlist-----------------------------------------------*/


function removeProductWishlist() {
    var id = (event.target.id)
    var removeWish = localStorage.getItem('AddWish').split(',');
    for (var w = 0; w < removeWish.length; w++) {
        if (removeWish[w] == id) {
            removeWish.splice(w, 1);
            //console.log(removeCart);
        }

    }

    localStorage.setItem("AddWish",removeWish);
    window.location = "./wishlist.html";
    //console.log(Cart);
};

function buyNow(){
    alert("Thanks for Shopping with Us!!");
    window.location = "./welcome.html";
 }
 