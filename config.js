// Tetapan KVFC.
// mode: 'local'    = demo, data disimpan dalam peranti ini sahaja (untuk uji reka bentuk).
// mode: 'firebase' = sebenar, order dari telefon pembeli sampai ke telefon kaunter.
// Email AWAL untuk bahagian staf (huruf kecil). Selepas itu boleh ditukar dalam panel staf > Akses staf,
// tetapi hanya dengan persetujuan kedua-dua email ini. Selepas ditukar, nilai di Firestore yang digunakan.
window.KVFC_CONFIG = {
  mode: 'local',
  managerEmail: 'ichamambon@gmail.com',   // email manager (boleh ubah menu & harga)
  cashierEmail: 'helmi221008@gmail.com',   // email cashier (lihat order & jualan)
  firebase: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    appId: ''
  }
};
