const menuIcon = document.querySelector('#menu-icon');
const mainMenu = document.querySelector('.mainMenu');

menuIcon.onclick = () => {
menuIcon.classList.toggle('bx-x');
mainMenu.classList.toggle('active');
};




// const openPopUp = document.getElementById('open_pop_up_1');
// const closePopUp = document.getElementById('pop_up_close_1');
// const popUp = document.getElementById('pop_up_1');

// openPopUp.addEventListener('click', function (e) {
//     e.preventDefault();
//     popUp.classList.add('active');
// })

// closePopUp.addEventListener('click', () => {
//     popUp.classList.remove('active');
// })

// const openPopUp_2 = document.getElementById('open_pop_up_2');
// const closePopUp_2 = document.getElementById('pop_up_close_2');
// const popUp_2 = document.getElementById('pop_up_2');

// openPopUp_2.addEventListener('click', function (e) {
//     e.preventDefault();
//     popUp_2.classList.add('active');
// })

// closePopUp_2.addEventListener('click', () => {
//     popUp_2.classList.remove('active');
// })


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
  









