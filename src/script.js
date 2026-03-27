document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name.length < 2) {
    alert('Введите корректное имя');
    return;
  }

  if (email.length < 5 || !email.includes('@')) {
    alert('Введите корректный email');
    return;
  }

  if (subject.length < 2) {
    alert('Введите тему сообщения');
    return;
  }

  if (message.length < 5) {
    alert('Введите сообщение');
    return;
  }

  alert('Сообщение отправлено!');
  this.reset();
});