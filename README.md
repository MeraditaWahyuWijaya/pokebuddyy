Pokemon Explorer
Aplikasi web interaktif untuk menjelajahi dunia Pokémon. Dibuat menggunakan React dan Next.js, aplikasi ini dilengkapi fitur pencarian, filter berdasarkan tipe, serta detail lengkap untuk setiap Pokémon.

Tech Stack
React 19 – Library JavaScript untuk membangun antarmuka pengguna
Next.js 14 – Framework React modern dengan App Router
TypeScript – Memberikan type safety dan pengalaman pengembangan yang lebih baik
Tailwind CSS – Utility-first CSS framework untuk styling cepat
Framer Motion – Animasi halus dan interaktif untuk React
PokeAPI – REST API sumber data resmi Pokémon

Fitur
Fitur Utama
Halaman utama berisi daftar 151 Pokémon pertama, Pencarian berdasarkan nama Pokémon, Filter berdasarkan tipe (seperti Fire, Water, Grass, dll), Halaman detail yang menampilkan informasi lengkap, Navigasi antar halaman menggunakan routing, Desain responsif untuk desktop dan mobile

Fitur Tambahan
Pengelolaan state dengan Context API, Custom hooks untuk filtering, Animasi interaktif dengan Framer Motion, Penanganan loading dan error, Penggunaan TypeScript untuk validasi dan efisiensi, Antarmuka modern dengan tampilan bersih dan terstruktur, Gambar dimuat secara efisien dengan lazy loading

Cara Pengaplikasian
cd pokemon-explorer
Install dependencies
npm install
Jalankan server pengembangan
npm run dev
Buka aplikasi di browser
http://localhost:3000

Panduan Penggunaan
-Beranda: Menampilkan daftar Pokémon
-Pencarian: Ketik nama Pokémon pada kolom pencarian
-Filter: Pilih tipe Pokémon dari dropdown
-Detail: Klik pada kartu Pokémon untuk informasi lengkap
-Navigasi: Gunakan tombol kembali untuk kembali ke halaman awal

Tampilan aplikasi dibuat modern dengan background gradasi dan layout berbasis kartu yang rapi. Warna tipe Pokémon dibedakan biar gampang dikenali. Grid-nya responsif, jadi tetap nyaman dilihat di berbagai ukuran layar. Ada efek hover dan transisi halaman yang halus, plus loading dan error handling yang dibuat supaya tetap ramah buat pengguna.

Keputusan Teknis
Pakai App Router dari Next.js biar routing-nya lebih simpel dan cepat. Context API dipakai buat ngatur state antar komponen. TypeScript bantu ngecek tipe data dan bikin kode lebih jelas. Styling-nya pakai Tailwind CSS yang cepat dan praktis. Animasi dibuat lebih halus pakai Framer Motion, dan beberapa logika dibikin custom hooks supaya lebih rapi dan gampang dipakai ulang.

Integrasi API
Aplikasi ini terintegrasi dengan PokeAPI sebagai sumber data utama. PokeAPI digunakan untuk memperoleh daftar 151 Pokémon pertama, mengambil detail lengkap dari masing-masing Pokémon, menampilkan sprites dan artwork resmi, serta menyajikan informasi penting seperti tipe, stats, dan abilities dari setiap karakter.

