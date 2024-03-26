<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    // получаем данные из формы
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);

    // проверяем, что все поля заполнены
    if($name == "" || $email == "") {
        echo "Заполните все поля";
        exit;
    }

    // формируем тему письма
    $subject = "Оплата Vip";

    // формируем текст письма
    $message = "Здравствуйте, $name! Спасибо за покупку Vip. Для оплаты перейдите по ссылке: https://example.com/payment";

    // отправляем письмо
    $to = $email;
    $headers = "From: admin@example.com\r\n";
    $headers .= "Reply-To: admin@example.com\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    if (mail($to, $subject, $message, $headers)) {
        // выводим сообщение об успешной отправке
        echo "Сообщение отправлено";
    } else {
        echo "Ошибка отправки сообщения";
    }
}

function sendEmail() {
    var form = document.getElementById("myForm");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            alert("Письмо успешно отправлено");
        }
    }
    xhr.send(new FormData(form));
}
?>
