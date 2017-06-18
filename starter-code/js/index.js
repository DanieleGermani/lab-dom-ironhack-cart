function deleteItem(){
    var child = event.currentTarget.parentNode;
    child.parentNode.removeChild(child);
}

function getPriceByProduct(itemNode){


}

function getPriceByProduct(){

}


// function updatePriceByProduct(productPrice, index){
//
// }
//
 function getTotalPrice() {
  var unitPrice = document.getElementsByClassName('unit-price');
  var quantities = document.getElementsByClassName('quantity');
  var singlePrice = document.getElementsByClassName('not-price');

  var total = 0;
  for (var i = 0; i < unitPrice.length; i++) {
    //singlePrice[i].value = oneItem;
    console.log(unitPrice[i].innerHTML)
    console.log(quantities[i].value)
    var oneItem = (unitPrice[i].innerHTML) * quantities[i].value;
    total += oneItem;



    console.log(total)

  }

document.getElementById('total-price').innerHTML = total;
 };




//
// function createQuantityInput(){
//
// }
//
// function createDeleteButton(){
//
// }
//
// function createQuantityNode(){
//
// }
//
// function createItemNode(dataType, itemData){
//
// }
//
// function createNewItemRow(itemName, itemUnitPrice){
//
// }
//
// function createNewItem(){
//
// }

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');
//
//    calculatePriceButton.onclick = getTotalPrice;
//    createItemButton.onclick = createNewItem;
//
//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
