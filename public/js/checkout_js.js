
let quant = 0;
let price = 125;
let totalPrice = 0;

let company = "SNEAKER COMPANY";
let itemName = "Fall Limited Edition <br>Sneakers";


window.onload = function () {
    document.getElementById("company").innerHTML = company;
    document.getElementById("itemName").innerHTML = itemName;
    
    quant = parseInt(localStorage.getItem("quant"));

    totalPrice = price * quant;

    document.getElementById("price").innerHTML = 'Total: $' + totalPrice + '.00';
}





//messages
let nameVld = "<p>first or last name entry shouldn't be left empty</p>";
let emailVld = "<p>email address entry shouldn't be left empty</p>";
let pnumVld = "<p>phome number entry shouldn't be left empty</p>";
let cardNumVld = "<p>card number entry shouldn't be left empty</p>";
let detailsVld = "<p>entry shouldn't be left empty</p>";
let cardNameVld = "<p>Card name entry shouldn't be left empty</p>";


let vldEmail = "<p>invalid email address</p>";

let success = '<h2>message</h2>' +
    '<p> message was sent successfully!</p><br>' +
    '<a href="order.html"><button onclick="closeForm()">close</button></a>';
//End of messages

//form
let full_name = "";
function myForm() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;

    var pnum = document.getElementById("pnum").value;

    var cardNum = document.getElementById("cardNum").value;
    var date = document.getElementById("date").value;
    var cvv = document.getElementById("cvv").value;
    var zip = document.getElementById("zip").value;
    var cardName = document.getElementById("cardName").value;

    console.log(fname + ", " + lname + ", " + email + ", " + pnum + ", " + cardNum + ", " + date +
        ", " + cvv + ", " + zip + ", " + cardName);

    if (emptyEntry(fname, lname, email, pnum, cardNum, date, cvv, zip, cardName) == true && validate_email(email) == true) {
        full_name = fname + " " + lname;
        console.log("hello");
        const myData = {
            "First & Last Name:": full_name, "Email Address": email, "Phone Number": pnum, 
            "Total Price": totalPrice, "Item": "Fall Limited Edition Sneakers"
        }

        sendEmail(myData);
    }

    return false;
}


//Check if entries are empty
function emptyEntry(fname, lname, mail, pNum, cNum, dat, cvv, zip, cName) {

    if (fname == "") {
        document.getElementById("name_validate").innerHTML = nameVld;
        document.getElementById("fname").style.border = "2px solid red";

    } else {
        document.getElementById("name_validate").innerHTML = "";
        document.getElementById("fname").style.border = "2px solid #552f1ad7";
    }

    if (lname == "") {
        document.getElementById("name_validate").innerHTML = nameVld;
        document.getElementById("lname").style.border = "2px solid red";
    } else {
        document.getElementById("name_validate").innerHTML = "";
        document.getElementById("lname").style.border = "2px solid #552f1ad7";
    }

    if (mail == "") {
        document.getElementById("email_validate").innerHTML = emailVld;
        document.getElementById("email").style.border = "2px solid red";
    } else {
        document.getElementById("email_validate").innerHTML = "";
        document.getElementById("email").style.border = "2px solid #552f1ad7";
    }

    if (pNum == "") {
        document.getElementById("pnum_validate").innerHTML = pnumVld;
        document.getElementById("pnum").style.border = "2px solid red";
    } else {
        document.getElementById("pnum_validate").innerHTML = "";
        document.getElementById("pnum").style.border = "2px solid #552f1ad7";
    }

    if (cNum == "") {
        document.getElementById("cardNum_validate").innerHTML = cardNumVld;
        document.getElementById("cardNum").style.border = "2px solid red";
    } else {
        document.getElementById("cardNum_validate").innerHTML = "";
        document.getElementById("cardNum").style.border = "2px solid #552f1ad7";
    }

    if (dat == "") {
        document.getElementById("details_validate").innerHTML = detailsVld;
        document.getElementById("date").style.border = "2px solid red";
    } else {
        document.getElementById("details_validate").innerHTML = "";
        document.getElementById("date").style.border = "2px solid #552f1ad7";
    }

    if (cvv == "") {
        document.getElementById("details_validate").innerHTML = detailsVld;
        document.getElementById("cvv").style.border = "2px solid red";
    } else {
        document.getElementById("details_validate").innerHTML = "";
        document.getElementById("cvv").style.border = "2px solid #552f1ad7";
    }

    if (zip == "") {
        document.getElementById("details_validate").innerHTML = detailsVld;
        document.getElementById("zip").style.border = "2px solid red";

    } else {
        document.getElementById("details_validate").innerHTML = "";
        document.getElementById("zip").style.border = "2px solid #552f1ad7";
    }

    if (cName == "") {
        document.getElementById("cardName_validate").innerHTML = cardNameVld;
        document.getElementById("cardName").style.border = "2px solid red";
    } else {
        document.getElementById("cardName_validate").innerHTML = "";
        document.getElementById("cardName").style.border = "2px solid #552f1ad7";
    }





    if (fname != "" && mail != "" && lname != "" && pNum != "" && cNum != "" && dat != "" && zip != "" && cvv != "" && cName != "") {
        return true;
    } else {
        return false;
    }

}
//End

//Validate 
function validate_email(mail) {
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (mail.match(mailformat)) {
        return true;
    }
    else {
        document.getElementById("email_validate").innerHTML = vldEmail;
        return false;
    }
}
//End

//Send 
function sendEmail(data) {

    fetch('https://formspree.io/f/xdovzovo', {
        method: 'POST',
        body: JSON.stringify({
            data
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (results) {
            console.log(results);
            openForm();
            document.getElementById("box").innerHTML = success;
        }).catch(error => {
            console.error('Error:', error);
        });
}


//Open and close popup
function openForm() {
    document.getElementById("popup").style.display = "block";

}

function closeForm() {
    document.getElementById("popup").style.display = "none";
    location.reload();
}
//end of open and close popup