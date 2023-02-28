//Decl
let item = '';
let quant = 0;
let cart = 0;
let price = 125;
let totalPrice = 0;

let company = "SNEAKER COMPANY";
let itemName = "Fall Limited Edition <br>Sneakers";

let paragraph = "These low-profile sneakers are your perfect casual wear companion." +
  "Featuring a durable rubber outer sole, they’ll withstand everything the" +
  "weather can offer.";

let disc = 50;
let ogp = 250;

let img1 = './images/image-product-1.jpg';
let img2 = './images/image-product-2.jpg';
let img3 = './images/image-product-3.jpg';
let img4 = './images/image-product-4.jpg';

let navIcon1 = '<img src="./images/icon-menu.svg" alt="">';
let navIcon2 = '<img src="./images/icon-close.svg" alt="">';
//Decl

//Onload Function
window.onload = function () {
  document.getElementById("icon").innerHTML = navIcon1;
  document.getElementById("myTopnav").style.display = "block";

  var expandImg = document.getElementById("expandedImg");
  expandImg.src = img1;
  expandImg.parentElement.style.display = "block";

  document.getElementById("company").innerHTML = company;
  document.getElementById("itemName").innerHTML = itemName;
  document.getElementById("paragraph").innerHTML = paragraph;

  document.getElementById("cart").innerHTML = cart;
  document.getElementById("quant").innerHTML = quant;
  document.getElementById("myPrice").innerHTML = "$" + price + ".00";

  document.getElementById("disc").innerHTML = disc + "%";
  document.getElementById("ogp").innerHTML = "$" + ogp + ".00";
  document.getElementById("paragraph").innerHTML = paragraph;
}
//Onload Function

//When viewing the nav from a small screen
function myFunction() {
  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById("icon").innerHTML = navIcon2;

    document.getElementById("navi").style.display = "block";
    document.getElementById("logo").style.display = "none";
  } else {
    x.className = "topnav";
    document.getElementById("icon").innerHTML = navIcon1;

    document.getElementById("navi").style.display = "none";
    document.getElementById("logo").style.display = "block";
  }
}
//End 

//Add and subtract quantity
function add() {
  quant++;
  document.getElementById("quant").innerHTML = quant;
}

function subt() {
  quant--;

  if (quant <= 0) {
    quant = 0;
  }

  document.getElementById("quant").innerHTML = quant;

  totalPrice = quant * price;

  console.log(totalPrice);
}
//End

//Add to cart
function addtocart() {
  document.getElementById("cart").innerHTML = quant;
  document.getElementById("cart").style.display = "block";
}
//End

//Cart
//Open and close cart
function openForm() {
  document.getElementById("popup").style.display = "block";

  item = '$' + price + '.00 x ' + quant
  totalPrice = quant * price;
  const tPrice = '$' + totalPrice + '.00';

  if (quant > 0) {
    const box = '<h5>Cart</h5><div class="row"><div class="fcol">' +
      '<img src="./images/image-product-1.jpg" alt=""></div><div class="scol"><p>' +
      'Fall Limited Edition Sneakers</p><p style="margin-top: 5px;">' +
      item + ' <span id="tPrice">' + tPrice + '</span>' +
      '<span><img src="./images/icon-delete.svg" alt="" onclick="deletOrder()" title="Delete"></span>' +
      '</p></div></div>' +
      '<div class="chBtn"><a href="checkout.html" onclick="checkout()" >Checkout</a></div>';
    document.getElementById('box').innerHTML = box;
  }
  if (quant <= 0) {
    const box = '<h5>Cart</h5><div class="row"><div class="tcol">' +
      'Your cart is empty.' +
      '</div></div>';
    document.getElementById('box').innerHTML = box;
  }
}

function deletOrder() {
  cart = 0;
  quant = 0;
  document.getElementById("cart").innerHTML = cart;
  document.getElementById("quant").innerHTML = quant;
}

function checkout() {
  localStorage.setItem("quant", quant);
  window.navigate("checkout.html");
}

function closeForm() {
  document.getElementById("popup").style.display = "none";
}
//end of open and close cart
//Cart

//View clicked image
let num = 1;
function viewImg(type) {
  var expandImg = document.getElementById("expandedImg");
  var prod1 = document.getElementById("prod1");
  var prod2 = document.getElementById("prod2");
  var prod3 = document.getElementById("prod3");
  var prod4 = document.getElementById("prod4");


  if (type == 1) {
    expandImg.src = img1;
    num = 1;

    prod1.className = "prod";
  } else {
    prod1.className = "";
  }

  if (type == 2) {
    expandImg.src = img2;
    num = 2;

    prod2.className = "prod";
  } else {
    prod2.className = "";
  }

  if (type == 3) {
    expandImg.src = img3;
    num = 3;

    prod3.className = "prod";
  } else {
    prod3.className = "";
  }

  if (type == 4) {
    expandImg.src = img4;
    num = 4;

    prod4.className = "prod";
  } else {
    prod4.className = "";
  }

}

//
let num2 = 1;
function showImg(type) {
  var showMyImg = document.getElementById("showMyImg");

  var pop_prod1 = document.getElementById("pop_prod1");
  var pop_prod2 = document.getElementById("pop_prod2");
  var pop_prod3 = document.getElementById("pop_prod3");
  var pop_prod4 = document.getElementById("pop_prod4");

  if (type == 1) {
    showMyImg.src = img1;
    num2 = 1;

    pop_prod1.className = "prod";
  } else {
    pop_prod1.className = "";
  }

  if (type == 2) {
    showMyImg.src = img2;
    num2 = 2;

    pop_prod2.className = "prod";
  } else {
    pop_prod2.className = "";
  }

  if (type == 3) {
    showMyImg.src = img3;
    num2 = 3;

    pop_prod3.className = "prod";
  } else {
    pop_prod3.className = "";
  }

  if (type == 4) {
    showMyImg.src = img4;
    num2 = 4;

    pop_prod4.className = "prod";
  } else {
    pop_prod4.className = "";
  }



}
//End

//Changing images using buttons
function next() {
  var expandImg = document.getElementById("expandedImg");
  if (num == 1) {
    expandImg.src = img2;
    num = 2;
  } else
    if (num == 2) {
      expandImg.src = img3;
      num = 3;
    } else
      if (num == 3) {
        expandImg.src = img4;
        num = 4;
      }

  expandImg.parentElement.style.display = "block";
}

function prev() {
  var expandImg = document.getElementById("expandedImg");
  if (num == 2) {
    expandImg.src = img1;
    num = 1;
  } else
    if (num == 3) {
      expandImg.src = img2;
      num = 2;
    } else
      if (num == 4) {
        expandImg.src = img3;
        num = 3;
      }
  expandImg.parentElement.style.display = "block";
}

//Open and close popup
function openPop(imgs) {
  var w = window.innerWidth;
  var showMyImg = document.getElementById("showMyImg");
  num2 = num;

  if (num == 1) {
    showMyImg.src = img1;
    // num = 2;
  } else
    if (num == 2) {
      showMyImg.src = img2;
      //num = 3;
    } else
      if (num == 3) {
        showMyImg.src = img3;
        //num = 4;
      } else
        if (num == 4) {
          showMyImg.src = img4;
          // num = 1;
        }
  //showMyImg.src = img1;

  if (w > 400) {
    showMyImg.parentElement.style.display = "block";
    document.getElementById("showBG").style.display = "block";
  } else {
    showMyImg.parentElement.style.display = "none";
    document.getElementById("showBG").style.display = "none";
  }
}

function closePop() {
  document.getElementById("showBG").style.display = "none";
}
//end of open and close popup

function next2() {
  var showMyImg = document.getElementById("showMyImg");
  if (num2 == 1) {
    showMyImg.src = img2;
    num2 = 2;
  } else
    if (num2 == 2) {
      showMyImg.src = img3;
      num2 = 3;
    } else
      if (num2 == 3) {
        showMyImg.src = img4;
        num2 = 4;
      }

  showMyImg.parentElement.style.display = "block";
}

function prev2() {
  var showMyImg = document.getElementById("showMyImg");
  if (num2 == 2) {
    showMyImg.src = img1;
    num2 = 1;
  } else
    if (num2 == 3) {
      showMyImg.src = img2;
      num2 = 2;
    } else
      if (num2 == 4) {
        showMyImg.src = img3;
        num2 = 3;
      }
  showMyImg.parentElement.style.display = "block";
}
//End