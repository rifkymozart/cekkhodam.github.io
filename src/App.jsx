import { useState } from 'react';
import './App.css';

function App() {
  const [nama, setNama] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const khodam = [
    'anjing', 'babi', 'kucing', 'beruk', 'tapir', 'srengenge', 'tuyul', 'macan', 'singa', 'jokowi',
    'cobra', 'ayam', 'sapi', 'wewe gombel', 'cicak', 'monyet', 'naga', 'beruang', 'doraemon',
    'spongebob', 'patrick', 'marmut', 'merak', 'angsa', 'kucing', 'hamster', 'bebek', 'barbie',
    'capung', 'mimi peri', 'bidadari', 'ratu pantai selatan', 'ratu pantai bkt', 'radja jawa',
    'raja bekasi', 'ratu pantai marunda', 'badut dufan'
  ];
  const khodamPilihan = ['Superman', 'Batman', 'singa', 'kingkong', 'dr strange', 'kucing', 'spongebob'];
  const pilihanCowo = ['rifki', 'rifky', 'merong'];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama.trim()) {
      setResult(<span style={{ color: 'red' }}>Nama tidak boleh kosong!</span>);
      return;
    }

    setDisabled(true);
    setLoading(true);
    setResult(<span style={{ color: 'gray' }}>Sedang mengecek khodam <strong>{nama}</strong></span>);

    setTimeout(() => {
      const namaLower = nama.toLowerCase();
      const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)].toUpperCase();
      const randomKhodamPilihan = khodamPilihan[Math.floor(Math.random() * khodamPilihan.length)].toUpperCase();

      setLoading(false);

      if (pilihanCowo.some(kata => namaLower.includes(kata))) {
        setResult(<span style={{ color: 'blue' }}>Khodam kamu adalah {randomKhodamPilihan}</span>);
      } else {
        setResult(<span style={{ color: 'blue' }}>Khodam kamu adalah {randomKhodam}</span>);
      }

      // Keep disabled as per original logic "Nonaktifkan form setelah submit"
      // or should we allow re-submission? Original code: disables input and button.
      // But maybe we want to allow reset? For now stick to original logic strictly.
    }, 5000);
  };

  return (
    <div className="container">
      <h1>Khodam Ceeekkkkk!</h1>
      <form id="form-yatim" className="form" onSubmit={handleSubmit}>
        <label htmlFor="nama" className="label">Nama:</label>
        <input
          type="text"
          id="nama"
          name="nama"
          className="input"
          placeholder="Masukkan nama..."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          disabled={disabled}
        />
        <button type="submit" className="button" disabled={disabled}>Cek</button>
      </form>

      {loading && <div id="loader" className="loader" style={{ display: 'block' }}></div>}

      {/* Tambahkan catatan di sini */}
      <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '10px', color: 'gray' }}>
        Created By <strong>R3</strong>
      </p>

      <p id="hasil" className="result">
        {result}
      </p>
    </div>
  );
}

export default App;
