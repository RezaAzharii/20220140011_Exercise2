var gambar = ['./aset/ft1.jpeg', './aset/ft2.jpeg', './aset/imgpop.gif']; // Tambahkan lebih banyak jalur gambar jika diperlukan
        var indeksSaatIni = 0;
        var elemenGambar = document.getElementById('image1');

        function gantiGambar() {
            indeksSaatIni = (indeksSaatIni + 1) % gambar.length;
            elemenGambar.src = gambar[indeksSaatIni];
        }

        setInterval(gantiGambar, 2500); // Ganti gambar setiap 3 detik

        function ImageN() {
            // Contoh: Ganti sumber gambar saat tombol diklik
            gantiGambar();
        }

document.getElementById('popup').addEventListener('click', ShowPopup);

function ImageN() {
    alert("Image akan berubah jika rasio diabawah 600");
}
  
function VidN() {
    alert("Dancing and Chill");
}

document.addEventListener("DOMContentLoaded", function() {
    var music = document.getElementById("background-music");
    var muteButton = document.getElementById("mute-button");
    var isPlaying = true; // Variable to track the playing status

    muteButton.addEventListener("click", function() {
        if (isPlaying) {
            music.pause(); // Pause the music
            muteButton.innerHTML = '<i class="fas fa-solid fa-music"></i>'; // Change the icon to play
        } else {
            music.play(); // Play the music
            muteButton.innerHTML = '<i class="fas fa-solid fa-volume-mute"></i>'; // Change the icon to pause
        }
        isPlaying = !isPlaying; // Toggle the playing status
    });
});

function SubmitData() {
    var name = document.getElementById("nama").value;
    var jumlah = document.getElementById("jumlah").value;
    var tanggal = document.getElementById("tanggal").value;
    var alamat = document.getElementById("alamat").value;
    var tahun = document.getElementById("tahun").value;
    var Grade = document.querySelector("input[name='Grade']:checked").value;
  

    alert(
      "Nama: " + name +
      "\nJumlah: " + jumlah +
      "\nTanggal: " + tanggal +
      "\nAlamat: " + alamat +
      "\nTahun: " + tahun +
      "\nGrade: " + Grade
    );
  }
