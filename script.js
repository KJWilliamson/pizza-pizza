document.querySelector("#check").addEventListener("click", check);

const pizza = "Pieology";
function check() {
  const pizza = document.querySelector("#pizza").value.toLowerCase();

  //Conditionals go here
  if (pizza === "pieology") {
    document.querySelector("#placeToSee").innerText = "Pizza 🍕 Heaven";
    document.querySelector("body").style.backgroundImage =
      "url('https://media2.giphy.com/media/hj6nflDqPwiHu/200w.webp?cid=ecf05e47uanf9v42col2swfeu36tsd6qmmxwcmkolmyg5h4b&rid=200w.webp&ct=g')";
    // document.querySelector("body").style.backgroundRepeat = "no-repeat";
    // document.querySelector("body").style.backgroundSize = "1488px";
    // document.querySelector("body").style.color = "black";
  } else if (pizza == "dominos") {
    document.querySelector("#placeToSee").innerText =
      "Pizza 🍕, dips, and twists! Oh my!";
    document.querySelector("body").style.backgroundImage =
      "url('https://media1.giphy.com/media/1Stf7t6PooiDhDLqv2/200w.webp?cid=ecf05e47pp81o45vg95zyy5y5pl30c15vythxklzsoejtlb2&rid=200w.webp&ct=g')";

  } else if (pizza == "little ceasars") {
    document.querySelector("#placeToSee").innerText = "PIZZA 🍕🍕🍕 PIZZA";
    document.querySelector("body").style.backgroundImage =
      "url('https://c.tenor.com/tW9dQMk7SwgAAAAC/little-caesars-pizza.gif')";
    
  } else if (pizza === "papa murphys") {
    document.querySelector("#placeToSee").innerText =
      "Papa Murphy's ehhhhh. A little Take 'N' Bake 🍕 is your style!";
    document.querySelector("body").style.backgroundImage =
      "url('https://media1.giphy.com/media/wsWOV2GCAI8T7UXTlU/giphy-downsized-large.gif')";
    
  } else if (pizza === "mod pizza") {
    document.querySelector("#placeToSee").innerText = "Mod Pizza 🍕 hits the spot";
    document.querySelector("body").style.backgroundImage =
      "url('https://media4.giphy.com/media/IpoqtkcWGIYcE/100.webp?cid=ecf05e473xs72piuyo3o1ebs5a35h3xz8q110vapaza7tyel&rid=100.webp&ct=g')";
    
  } else if (pizza == "oreganos") {
    document.querySelector("#placeToSee").innerText =
      "Oreganos Pizza 🍕🍕";
    document.querySelector("body").style.backgroundImage =
      "url('https://media3.giphy.com/media/WSrLGd6cAjiiyi9j8c/200w.webp?cid=ecf05e47uanf9v42col2swfeu36tsd6qmmxwcmkolmyg5h4b&rid=200w.webp&ct=g')";
    
  } else if (pizza == "pizza hut") {
    document.querySelector("#placeToSee").innerText = "PIZZA 🍕🍕🍕 YO";
    document.querySelector("body").style.backgroundImage =
      "url('https://media2.giphy.com/media/qux1258Flm8Zq/200.webp?cid=ecf05e47uanf9v42col2swfeu36tsd6qmmxwcmkolmyg5h4b&rid=200.webp&ct=g')";
    
  } else if (pizza == "rosatis") {
    document.querySelector("#placeToSee").innerText = "AMAZING PIZZA 🍕🍕🍕 PIE";
    document.querySelector("body").style.backgroundImage =
      "url('https://media1.giphy.com/media/PjRXPpqdZPpNC/200.gif')";
    
    } else if (pizza == "hungry howies") {
    document.querySelector("#placeToSee").innerText = "THAT'S A MEH 🍕🍕🍕";
    document.querySelector("body").style.backgroundImage =
      "url('https://media4.giphy.com/media/sTUWqCKtxd01W/200.gif')";
    
    } else if (pizza == "papa johns") {
    document.querySelector("#placeToSee").innerText = "NO NO 🍕🍕🍕";
    document.querySelector("body").style.backgroundImage =
      "url('https://static.wixstatic.com/media/dcd126_15f3eee03dd04d6ca90d31df5ea8c58b~mv2.gif')";
    
    } else if (pizza == "genos") {
    document.querySelector("#placeToSee").innerText = "I WANT MORE 🍕🍕🍕";
    document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/f2ffb6cf43c384ba3081d635c4a76eeb/tumblr_nopgux5WVS1s5e5bko1_400.gifv')";
    
    } else {
    document.querySelector("#placeToSee").innerText = "Ummmmm...";
    document.querySelector("body").style.backgroundImage =
      "url('https://i.pinimg.com/originals/50/2f/73/502f7314e0a40d7a4ed9937ff860a5e3.gif')";
    
  }
}

