const express = require('express');

const app = express.Router();
const repo = require('../repos/LibraryRepo');

// TODO: Memanggil fungsi listBuku untuk mendapatkan data semua buku yang ada
app.get('/', (req, res) => {
  repo.listBuku().then((library)=>{
    res.json(library);
  }).catch((error)=>console.log(error));
});

// TODO: Memanggil fungsi cariBuku untuk mendapatkan spesifik buku berdasarkan ID
app.get('/:id', (req, res) => {
  const { id } = req.params;
  repo.cariBuku(id, req.body)
    .then((info) => {
      res.status(200).json({
        info: info,
        message: `Informasi buku dengan id ${id}`
      })
        .catch((error) => console.log(error));
    });
});

// TODO: Memanggil fungsi tambahBuku untuk menambah buku baru pada list
app.post('/', (req, res) => {
  const infoBukuBaru = req.body;
  console.log(infoBukuBaru)
  repo.tambahBuku(infoBukuBaru).then((infoBuku)=>{res.json(infoBuku);
  }).catch((error)=>console.log(error));
});

// TODO: Memanggil fungsi hapusBuku untuk menghapus buku tertentu
app.delete('/:id', (req, res) => {
  const { id } = req.params;
  repo.hapusBuku(id).then((ok)=>{
    console.log(ok);
    console.log(`Delete record with id: ${id}`);
    res.status(200).json([]);
  }).catch((error)=>console.log(error))
});

// TODO: Memanggil fungsi rubahInfoBuku untuk merubah status peminjaman buku tertentu
app.put('/:id', (req, res) => {
  const { id } = req.params;
  const infoBuku = {tambahBuku: req.body.tambahBuku, pengarangBuku: req.body.pengarangBuku, genreBuku: req.body.genreBuku, isDipinjam: req.body.isDipinjam};
  repo.rubahInfoBuku(id, infoBuku)
  .then(res.status(200).json([]))
  .catch((error)=>console.log(error));
});

// Memanggil fungsi rubahStatusPeminjaman untuk merubah info peminjaman buku tertentu
app.put('/rubah/:id', (req, res) => {
  const { id } = req.params;
  repo.rubahStatusPeminjaman(id, req.body)
    .then((info) => {
      res.status(200).json({
        info: info,
        message: `Informasi buku dengan id ${id} sudah diubah`
      })
        .catch((error) => console.log(error));
    });
});
module.exports = app;
