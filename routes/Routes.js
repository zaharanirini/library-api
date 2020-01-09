const express = require('express');

const app = express.Router();
const repo = require('../repos/LibraryRepo');

// Memanggil fungsi listBuku untuk mendapatkan data semua buku yang ada
app.get('/', (req, res) => {
  // isi disini
});

// Memanggil fungsi cariBuku untuk mendapatkan spesifik buku berdasarkan ID
app.get('/:id', (req, res) => {
  const { id } = req.params;
  // tambahkan disini
});

// Memanggil fungsi tambahBuku untuk menambah buku baru pada list
app.post('/', (req, res) => {
  const infoBukuBaru = req.body;
  // isi disini
});

// Memanggil fungsi hapusBuku untuk menghapus buku tertentu
app.delete('/:id', (req, res) => {
  const { id } = req.params;
  // isi disini
});

// Memanggil fungsi rubahStatusPeminjaman untuk merubah status peminjaman buku tertentu
app.put('/:id', (req, res) => {
  const { id } = req.params;
  // isi disini
});

// Memanggil fungsi rubahStatusPeminjaman untuk merubah status peminjaman buku tertentu
app.put('/rubah/:id', (req, res) => {
  const { id } = req.params;
  repo.rubahInfoBuku(id, req.body)
    .then((info) => {
      res.status(200).json({
        info: info,
        message: `Informasi buku dengan id ${id} sudah diubah`
      })
        .catch((error) => console.log(error));
    });
});
module.exports = app;
