const tombolWarna = document.getElementById("tombolWarna");
const pesan = document.getElementById("pesan");
const daftarWarna = ["#ffe5e5", "#e5f0ff", "#e5ffe9", "#fff6e5", 
"#f2e5ff"];
let index = 0;
tombolWarna.addEventListener("click", function () {
 index = (index + 1) % daftarWarna.length;
 document.body.style.backgroundColor = daftarWarna[index];
 pesan.textContent = "Tombol sudah diklik " + (index + 1) + " kali.";
});
