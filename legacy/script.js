document.getElementById('form-yatim').addEventListener('submit', function (e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim().toLowerCase();
  const namaInput = document.getElementById('nama').value.trim();
  const hasil = document.getElementById('hasil');
  const loader = document.getElementById('loader');
  const submitButton = document.querySelector('#form-yatim button[type="submit"]');

  if (nama === '') {
    hasil.innerHTML = '<span style="color: red;">Nama tidak boleh kosong!</span>';
    return;
  }

  // Nonaktifkan tombol submit selama proses berjalan
  submitButton.disabled = true;
  loader.style.display = 'block';
  hasil.innerHTML = `<span style="color: gray;">Sedang mengecek khodam <strong>${namaInput}</strong></span>`;

  // Simulasikan proses mendapatkan respons (5 detik)
  setTimeout(() => {
    const khodam = [
      'anjing', 'babi', 'kucing', 'beruk', 'tapir', 'srengenge', 'tuyul', 'macan', 'singa', 'jokowi',
      'cobra', 'ayam', 'sapi', 'wewe gombel', 'cicak', 'monyet', 'naga', 'beruang', 'doraemon',
      'spongebob', 'patrick', 'marmut', 'merak', 'angsa', 'kucing', 'hamster', 'bebek', 'barbie',
      'capung', 'mimi peri', 'bidadari', 'ratu pantai selatan', 'ratu pantai bkt', 'radja jawa',
      'raja bekasi', 'ratu pantai marunda', 'badut dufan'
    ];
    const khodamPilihan = ['Superman', 'Batman', 'singa', 'kingkong', 'dr strange', 'kucing', 'spongebob'];
    const pilihanCowo = ['rifki', 'rifky', 'merong'];

    // Pilih khodam secara acak
    const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)].toUpperCase();
    const randomKhodamPilihan = khodamPilihan[Math.floor(Math.random() * khodamPilihan.length)].toUpperCase();

    // Sembunyikan loader dan tampilkan hasil berdasarkan kondisi
    loader.style.display = 'none';

    if (pilihanCowo.some(kata => nama.includes(kata))) {
      hasil.innerHTML = `<span style="color: blue;">Khodam kamu adalah ${randomKhodamPilihan}</span>`;
    } else {
      hasil.innerHTML = `<span style="color: blue;">Khodam kamu adalah ${randomKhodam}</span>`;
    }

    // Nonaktifkan form setelah submit
    disableForm(submitButton);
  }, 5000); // 5000ms = 5 detik
});

// Fungsi untuk menonaktifkan form setelah submit
function disableForm(submitButton) {
  submitButton.disabled = true; // Menonaktifkan tombol submit
  document.getElementById('nama').disabled = true; // Menonaktifkan input nama
}
