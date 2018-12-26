const input = document.getElementById('pass');
const div = document.querySelector('.message');
const password = ["user", "wiosna"];
const message = ["mycie agrow to najgorsza czynnosc na swiecie", "piekna pora roku"];

input.addEventListener('input', (e) => {
 // console.log(e.target.value);


 
})

input.addEventListener('focus', (e) => {
 e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
 e.target.classList.remove('active');
})


// if (password === e.target.value) {
//     div.textContent = message;
//     e.target.value = '';
//    } else {
//     div.textContent = '';
//    }
//   })