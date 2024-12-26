function setHarga() {
    const tipeKamar = document.getElementById("tipeKamar").value;
    const hargaInput = document.getElementById("harga");
    let harga = 0;
    switch (tipeKamar) {
        case "Standar":
            harga = 300000;
            break;
        case "Deluxe":
            harga = 500000;
            break;
        case "Family":
            harga = 700000;
            break;
        default:
            harga = 0;
    }
    hargaInput.value = harga.toLocaleString('id-ID');
    hitungTotal();
}
function hitungTotal() {
    const harga = parseInt(document.getElementById("harga").value.replace(/\./g, '') || 0);
    const durasi = parseInt(document.getElementById("durasiMenginap").value || 0);
    const breakfast = document.getElementById("breakfast").checked;
    let total = harga * durasi;

    if (durasi > 3) {
        total *= 0.9; // Diskon 10%
    }
    if (breakfast) {
        total += 80000;
    }

    document.getElementById("totalBayar").value = total.toLocaleString('id-ID');
}
function validateForm(event) {
    const namaPemesan = document.getElementById("namaPemesan").value.trim();
    const nomorIdentitas = document.getElementById("nomorIdentitas").value;
    if (!namaPemesan) {
        alert("Nama Pemesan harus diisi!");
        event.preventDefault();
        return false;
    }

    if (!/^\d{16}$/.test(nomorIdentitas)) {
        alert("Nomor Identitas harus 16 digit!");
        event.preventDefault();
        return false;
    }
    return true;
}
function showResume(event) {
    event.preventDefault();
    if (!validateForm(event)) return;
    const namaPemesan = document.getElementById("namaPemesan").value;
    const nomorIdentitas = document.getElementById("nomorIdentitas").value;
    const tipeKamar = document.getElementById("tipeKamar").value;
    const durasi = document.getElementById("durasiMenginap").value;
    const breakfast = document.getElementById("breakfast").checked ? "Ya" : "Tidak";
    const totalBayar = document.getElementById("totalBayar").value;
    const diskon = durasi > 3 ? "10%" : "0%";
    const resumeContainer = document.querySelector(".resume-container");
    resumeContainer.innerHTML = `
        <h2>Resume Pemesanan</h2>
        <ul>
            <li><strong>Nama Pemesan:</strong> ${namaPemesan}</li>
            <li><strong>Nomor Identitas:</strong> ${nomorIdentitas}</li>
            <li><strong>Tipe Kamar:</strong> ${tipeKamar}</li>
            <li><strong>Durasi Menginap:</strong> ${durasi} hari</li>
            <li><strong>Diskon:</strong> ${diskon}</li>
            <li><strong>Termasuk Breakfast:</strong> ${breakfast}</li>
            <li><strong>Total Bayar:</strong> Rp ${totalBayar}</li>
        </ul>
    `;
    resumeContainer.style.display = "block";
}