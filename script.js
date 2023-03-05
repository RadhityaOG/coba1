// JavaScript untuk mengirim link WA dengan pesan terisi
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
  const jawaban = document.getElementById('jawaban').value.toLowerCase();
  let message = '';
  if (jawaban === 'iya') {
    message = 'iya suka';
  } else if (jawaban === 'tidak') {
    message = 'gk suka';
  } else {
    message = 'jawaban lain';
  }
  const link = `https://wa.me/6287877082802?text=${message}`;
  window.location.href = link;
});
