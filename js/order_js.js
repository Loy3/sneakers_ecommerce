let quant = 0;
let price = 125;
let totalPrice = 0;


let company = "SNEAKER COMPANY";
let itemName = "Fall Limited Edition <br>Sneakers";

let order_status = "Order Status";

let card1 = '<h4>Step 1</h4>';
let card2 = '<h4>Step 2</h4>';
let card3 = '<h4>Step 3</h4>';
let card4 = '<h4>Step 4</h4>';

let card1Msg = '<br><p>Order has been received.</p><p>It is now moved to the next step.</p>';

let card2Msg = '<br><p> Order has been received by the courier.</p><p>You will be contacted to regarding delivery address,' +
    '<br>and you will be given a order number.</p>';

let card3Msg = '<br><p>Address has been received, and your order is on the way.</p>' +
    '<p>Please have your order number with you.</p>';

let card4Msg = '<br><p>You have received your order, thank you for shopping with us.</p>';

window.onload = function () {

    quant = parseInt(localStorage.getItem("quant"));

    totalPrice = price * quant;

    document.getElementById("price").innerHTML = 'Amount Paid: $' + totalPrice + '.00';

    document.getElementById("title").innerHTML = order_status + ": " + card2;

    document.getElementById("company").innerHTML = company;
    document.getElementById("itemName").innerHTML = itemName;

    document.getElementById("card1").innerHTML = card1;
    document.getElementById("card2").innerHTML = card2;
    document.getElementById("card3").innerHTML = card3;
    document.getElementById("card4").innerHTML = card4;

    document.getElementById("card5").innerHTML = card2 + card2Msg;
    document.getElementById("card5").style.backgroundColor = "hsl(25, 94%, 88%)";
    document.getElementById("card2").style.backgroundColor = "hsl(25, 94%, 88%)";
}


function viewOrderMsg(type){
   
    if(type == 1){
           
        document.getElementById("card5").innerHTML = card1 + card1Msg;
    }

    if(type == 2){
        document.getElementById("card5").innerHTML = card2 + card2Msg;
    }

    if(type == 3){
        document.getElementById("card5").innerHTML = card3 + card3Msg;
    }

    if(type == 4){
        document.getElementById("card5").innerHTML = card4 + card4Msg;
    }
}