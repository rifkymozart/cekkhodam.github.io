document.getElementById('form-yatim').addEventListener('submit', function (e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim().toLowerCase();
  const hasil = document.getElementById('hasil');

  const yatim = ['dedy', 'dedi', 'catur'];
  const yatimPasif = 'apriyan';
  const memberWartak = ['dicky', 'subani', 'bani', 'rifky', 'rifki', 'iqro', 'ilham', 'fakih'];

  if (nama === '') {
    hasil.innerHTML = '<span style="color: red;">Nama tidak boleh kosong!</span>';
  } else if (nama.includes(yatimPasif)) {
    hasil.innerHTML = '<span style="color: orange;">Kamu Yatim Pasif!</span>';
  } else if (yatim.some(kata => nama.includes(kata))) {
    hasil.innerHTML = '<span style="color: green;">Kamu Yatim!</span>';
  } else if (memberWartak.some(kata => nama.includes(kata))) {
    hasil.innerHTML = '<span style="color: blue;">Kamu Bukan Yatim!</span>';
  } else {
    hasil.innerHTML = '<span style="color: red;">Daftar Member Wartak Dulu AJG!</span>';
  }
});
