// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony


const showColor = function (e) {

  const x = e.clientX + 1;
  const y = e.clientY + 1;

    if ((x%2 == 0) && (y%2 == 0)) {
        console.log(x, y);
        document.body.style.backgroundColor = "red";
    }
    else if ((x%2 != 0) && (y%2 != 0)) {
        console.log(x, y);
        document.body.style.backgroundColor = "blue";
    }
    else {
        console.log(x, y);
        document.body.style.backgroundColor = "green";
    }

}

addEventListener("click", showColor)