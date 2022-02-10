var products = [];
function addProducts() {
  var prId = document.getElementById("product_sku").value;
  var prName = document.getElementById("product_name").value;
  var prPrice = document.getElementById("product_price").value;
  var prQuantity = document.getElementById("product_quantity").value;

  //console.log(prId+""+prName+""+prPrice+""+prQuantity);
   
  if(datacheck(prName,prPrice,prQuantity)==false){

    
  }


  if (isProductExist(prId)) {
  } else {
    var product = {};
    product.prId = prId;
    product.prName = prName;
    product.prPrice = prPrice;
    product.prQuantity = prQuantity;

    products.push(product);
  }

  displayList();
 console.log("hello");
 console.log(products.length);
}

function isProductExist(prId) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].prId == prId) {
      return true;
    }
  }
  return false;
}

function deleteProducts(prId){
    for (var i = 0; i < products.length; i++){
        if(products[i].prId==prId){
            products.splice(i,1);
        }
    }
    displayList();
}

function editProducts(prId){
    var p={ };
    for(var i=0;i<products.length;i++){
        if(products[i].prId==prId){
            p=products[i];
        }
    }
    displayEditForm(p);
}

function displayEditForm(p){
    document.getElementById('product_sku').value=p.prId;
    document.getElementById('product_name').value=p.prName;
    document.getElementById('product_price').value=p.prPrice;
    document.getElementById('product_quantity').value=p.prQuantity;
    document.getElementById('update_product').style.display="block";
    document.getElementById('add_product').style.display="none";
}

function update_product(){
    var prId = document.getElementById("product_sku").value;
    var prName = document.getElementById("product_name").value;
    var prPrice = document.getElementById("product_price").value;
    var prQuantity = document.getElementById("product_quantity").value;
    if(isProductExist(prId)){
        for(var i=0;i<products.length;i++){
            if(products[i].prId==prId){
                products[i].prName=prName;
                products[i].prPrice=prPrice;
                products[i].prQuantity=prQuantity;

            }
        }
    }
}

function displayList() {
  var html = "";
  html +=
    "<table><tr><th>prId</th><th>prName</th><th>prPrice</th><th>prQuantity</th><th>Action</th></tr>";
  for (i = 0; i < products.length; i++) {
    html +=
      "<tr><td>" +
      products[i].prId +
      "</td><td>" +
      products[i].prName +
      "</td><td>" +
      products[i].prPrice +
      "</td><td>" +
      products[i].prQuantity +
      '</td><td><a href="#" class="edit" onclick="editProducts('+products[i].prId+')">Edit </a><a href="#"  onclick="deleteProducts ('+products[i].prId+')">Delete</a></td></tr>';
  }
  html += "</table>";
  document.getElementById("product_list").innerHTML=html;
}
