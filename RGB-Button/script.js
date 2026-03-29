const btn = document.getElementById('btnRgb');

btn.addEventListener('mouseover', () => {
    // 1. Hitung batas maksimal agar tombol tidak keluar layar
    // window.innerWidth (lebar layar) - btn.clientWidth (lebar tombol)
    const maxX = window.innerWidth - btn.clientWidth;
    const maxY = window.innerHeight - btn.clientHeight;

    // 2. Generate angka acak antara 0 sampai batas maksimal
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // 3. Terapkan koordinat baru ke gaya tombol
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
});

// Tambahkan pesan iseng saat berhasil diklik (kalau user bisa klik)
btn.addEventListener('click', () => {
    alert("Ngecit anjir!");
});