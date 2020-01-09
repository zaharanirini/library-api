const Library = require('../models/Library');

class LibraryRepo {

  constructor(model) {
    this.model = model;
  }

  // TODO: Buat fungsi dengan nama `tambahBuku` untuk menambah buku baru pada perpustakaan
  // Parameter infoBuku merupakan sebuah objek buku dengan key judulBuku, pengarangBuku, genreBuku, dan isDipinjam
  async tambahBuku(infoBuku) {
    // tambahkan disini
  }

  // TODO: Buat fungsi dengan nama `listBuku` untuk mendapatkan semua data buku yg tersedia
  async listBuku() {
    // tambahkan disini
  }

  // TODO: Buat fungsi dengan nama `cariBuku` untuk mencari buku berdasarkan ID buku
  async cariBuku(id) {
    // tambahkan disini
  }

  // TODO: Buat fungsi `hapusBuku` untuk dapat menghapus buku dengan ID
  async hapusBuku(id) {
    // tambahkan disini
  }

  // TODO: Buat fungsi dengan nama `rubahInfoBuku` untuk merubah informasi buku dengan ID
  async rubahInfoBuku(id, infoBukuBaru) {
    // tambahkan disini
  }

  // Fungsi dengan nama `rubahStatusPeminjaman` untuk merubah informasi buku dengan ID
  async rubahStatusPeminjaman(id) {
    const buku = await this.model.findById(id)
    const query = { _id: id };
    return await this.model.findOneAndUpdate(query, { $set: { isDipinjam: !(buku.isDipinjam) } });
  }
}

module.exports = new LibraryRepo(Library);