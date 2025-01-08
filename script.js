document.getElementById('form-yatim').addEventListener('submit', function (e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim().toLowerCase();
  const hasil = document.getElementById('hasil');
  const submitButton = document.querySelector('#form-yatim button[type="submit"]');

  //const memberAzzahra = ['dicky', 'subani', 'bani', 'rifky', 'rifki', 'iqro', 'ilham', 'fakih', 'wahyu', 'abdul', 'muid', 'anjas', 'catur', 'dedy', 'dedi', 'apriyan', 'dicki'];
  const khodamPilihan = ['Superman', 'Batman', 'singa', 'kingkong', 'dr strange', 'kucing', 'spongebob']
  const khodam = ['anjing', 'babi', 'kucing', 'beruk', 'tapir', 'srengenge', 'tuyul', 'macan', 'singa', 'jokowi', 'cobra', 'ayam', 'sapi', 'wewe gombel', 'cicak', 'monyet', 'naga', 'beruang', 'doraemon', 'spongebob', 'patrick', 'marmut', 'merak', 'angsa', 'kucing', 'hamster', 'bebek', 'barbie', 'capung', 'mimi peri', 'bidadari'];
  //const ciwi = ['zakia', 'imah', 'imalatul'];
  //const khodamCiwi = ['marmut', 'merak', 'angsa', 'kucing', 'hamster', 'bebek', 'barbie', 'capung', 'peri', 'bidadari'];

  const pilihanCowo = ['rifki', 'rifky', 'merong'];
  const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)].toUpperCase();
  const randomKhodamPilihan = khodamPilihan[Math.floor(Math.random() * khodamPilihan.length)].toUpperCase();
  //const randomKhodamCiwi = khodamCiwi[Math.floor(Math.random() * khodamCiwi.length)].toUpperCase();

  if (nama === '') {
    hasil.innerHTML = '<span style="color: red;">Nama tidak boleh kosong!</span>';
  } else if (pilihanCowo.some(kata => nama.includes(kata))) {
    hasil.innerHTML = `<span style="color: blue;">Khodam kamu adalah ${randomKhodamPilihan}</span>`;
    disableForm(submitButton);
  } else {
    hasil.innerHTML = `<span style="color: blue;">Khodam kamu adalah ${randomKhodam}</span>`;
    disableForm(submitButton);
  }
});

// Fungsi untuk menonaktifkan form setelah submit
function disableForm(submitButton) {
  submitButton.disabled = true; // Menonaktifkan tombol submit
  document.getElementById('nama').disabled = true; // Menonaktifkan input nama
}
