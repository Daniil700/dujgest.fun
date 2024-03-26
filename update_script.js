const menuIcon = document.querySelector('#menu-icon');
const mainMenu = document.querySelector('.mainMenu');

menuIcon.onclick = () => {
menuIcon.classList.toggle('bx-x');
mainMenu.classList.toggle('active');
};


const game_button = document.getElementById('game_button');
let previous_text = game_button.textContent.trim();

// game_button.addEventListener('click', function() {
//   if (game_button.textContent.trim() === previous_text) {
//     game_button.textContent = 'mc.dujgest.fun';
//     previous_text = 'mc.dujgest.fun';
//   } else {
//     game_button.textContent = 'Почати гру';
//     previous_text = 'Почати гру';
//   }

//   navigator.clipboard.writeText('mc.dujgest.fun');
// });


const openPopUp = document.getElementById('open_pop_up_info');
const closePopUp = document.getElementById('pop_up_close_info');
const popUp = document.getElementById('pop_up_info');

openPopUp.addEventListener('click', function (e) {
  e.preventDefault();
  popUp.classList.add('active');
});

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
});

const cooperate_openPopUp = document.getElementById('open_pop_up_cooperate');
const cooperate_closePopUp = document.getElementById('pop_up_close_cooperate');
const cooperate_popUp = document.getElementById('pop_up_cooperate');

cooperate_openPopUp.addEventListener('click', function (e) {
  e.preventDefault();
  cooperate_popUp.classList.add('active');
});

cooperate_closePopUp.addEventListener('click', () => {
  cooperate_popUp.classList.remove('active');
});




    var closeButton = document.getElementById("pop_up_close_introduce");
    function closeModal() {
        var modal = document.getElementById("open_pop_up_introduce");
        
        modal.style.display = "none";
    }

    closeButton.addEventListener("click", closeModal);


  



    var gameButton = document.getElementById("game_button");
    function openModal() {

        var modal = document.getElementById("open_pop_up_introduce");
        modal.style.display = "block";
    }
    gameButton.addEventListener("click", openModal);






    // var closeButton = document.getElementById("pop_up_close_cooperate");
    // var openLink = document.getElementById("open_pop_up_cooperate");
    // var modal = document.getElementById("pop_up_cooperate");

    // function closeModal() {
      
    //     modal.style.display = "none";
    // }

    // function openModal() {
  
    //     modal.style.display = "block";
    // }

    // closeButton.addEventListener("click", closeModal);
    // openLink.addEventListener("click", openModal);






  
    // var closeButton = document.getElementById("pop_up_close_info");
    // var openLink = document.getElementById("open_pop_up_info");
    // var modal = document.getElementById("pop_up_info");

    // function closeModal() {

    //     modal.style.display = "none";
    // }

   
    // function openModal() {

    //     modal.style.display = "block";
    // }

    // closeButton.addEventListener("click", closeModal);
    // openLink.addEventListener("click", openModal);







// const form = document.getElementById('myForm');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
  
//   const emailInput = document.querySelector('input[type=email]');
//   const emailValue = emailInput.value.trim();

//   if (!isValidEmail(emailValue)) {
//     emailInput.setCustomValidity('Please enter a valid email address');
//     emailInput.reportValidity();
//   } else {
//     emailInput.setCustomValidity('');
//     form.submit();
//   }
// });

// function isValidEmail(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }



//   const form = document.querySelector('form');
//   const emailInput = form.querySelector('input[name="email"]');

//   form.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     // Проверяем правильность ввода почты
//     if (!emailInput.checkValidity()) {
//       alert('Пожалуйста, введите правильный email.');
//       return;
//     }

//     // Отправляем данные формы на указанный email
//     const formData = new FormData(form);
//     const response = await fetch('https://example.com/send-form-data.php', {
//       method: 'POST',
//       body: formData,
//     });

//     if (response.ok) {
//       alert('Данные формы успешно отправлены на указанный email.');
//       // Скрываем всплывающее окно
//       document.getElementById('pop_up_1').classList.remove('active');
//     } else {
//       alert('Произошла ошибка при отправке данных формы.');
//     }
//   });



//   const form = document.querySelector('form');
//   const emailInput = document.querySelector('input[type="email"]');
  
//   form.addEventListener('submit', (event) => {
//     if (!emailInput.checkValidity()) {
//       event.preventDefault();
//       alert('Пожалуйста, введите корректный адрес электронной почты.');
//     }
//   });
  









