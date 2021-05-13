
document.querySelector('body').addEventListener('click', (e) => {
  if (e.target.className === "moreinfobutton") {


    y = Array.from(document.querySelector('body').getElementsByClassName("moreinfobutton")).indexOf(e.target);

    if (document.getElementsByClassName("moreinfo")[y].style.display === "none") {
      document.getElementsByClassName("moreinfo")[y].style.display = "block";
    }
    else {
      document.getElementsByClassName("moreinfo")[y].style.display = "none";
    }

  }

  else if (e.target.className === "additem") {
    y = Array.from(document.querySelector('#selectionbox').getElementsByClassName("additem")).indexOf(e.target);
    document.getElementsByClassName("cards")[y].style.display = "none";
    document.getElementsByClassName("cobcards")[y].style.display = "flex";
  }

  else if (e.target.className === "removeitem") {
    y = Array.from(document.querySelector('#checkoutbox').getElementsByClassName("removeitem")).indexOf(e.target);
    document.getElementsByClassName("cards")[y].style.display = "flex";
    document.getElementsByClassName("cobcards")[y].style.display = "none";
  }

  else if (e.target.className === "reset") {
    console.log("2");
    for (i = 0; i < document.getElementsByClassName("cards").length; i++) {
      document.getElementsByClassName("cards")[i].style.display = "flex";
      document.getElementsByClassName("cobcards")[i].style.display = "none";
    }

  }

});

document




$.ajax({
  url: 'https://api.airtable.com/v0/appVpOhYYVXibHhbp/Products',
  method: 'GET',
  headers: {
    Authorization: 'Bearer key8pVl9RUqEaUTLV'
  },
  success: function (result) {
    console.log(result);
    console.log(result.records[0]);
    console.log(result.records[0].fields);
    console.log(result.records[0].fields.Product);

    for (i = 0; i < result.records.length; i++) {
      console.log(result.records[i].fields.Product);
      let node = document.createElement("div");
      node.className = "col-10 col-md-5 justify-content-center align-items-center cards m-2  test";
      node.style.display = "flex";
      document.getElementById("contentbox").appendChild(node);

      let node2 = document.createElement("div");
      node2.className = "col-10 col-md-5 cobcards justify-content-center align-items-center m-2 test";
      node2.style.display = "none";
      document.getElementById("checkoutcontentbox").appendChild(node2);
    }

    for (i = 0; i < document.getElementsByClassName("cards").length; i++) {
      document.getElementsByClassName("cards")[i].innerHTML = " <div class='row'><div class='col-5 d-flex justify-content-center align-items-center p-3 cardimage'><img src=" + result.records[i].fields.Picture[0].url + " alt=''></div><div class='col-7 d-flex justify-content-start align-items-center'><div><h2>" + result.records[i].fields.Product + "</h2><p class='moreinfo' style='display: none;'>" + result.records[i].fields.Description + "</p><p>RM" + result.records[i].fields.price + "</p><button class='moreinfobutton'>more info</button><button class='additem'>add</button></div></div></div>";
    }

    for (i = 0; i < document.getElementsByClassName("cobcards").length; i++) {
      document.getElementsByClassName("cobcards")[i].innerHTML = " <div class='row'><div class='col-5 d-flex justify-content-center align-items-center p-3 cardimage'><img src=" + result.records[i].fields.Picture[0].url + " alt=''></div><div class='col-7 d-flex justify-content-start align-items-center'><div><h2>" + result.records[i].fields.Product + "</h2><p class='moreinfo' style='display: none;'>" + result.records[i].fields.Description + "</p><p>RM" + result.records[i].fields.price + "</p><button class='moreinfobutton'>more info</button><button class='removeitem'>remove</button></div></div></div>";
    }
  }
})

