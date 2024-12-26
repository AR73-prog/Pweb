$(document).ready(function () {
    function setHarga() {
        const tipeKamar = $("#tipeKamar").val();
        let harga = 0;

        switch (tipeKamar) {
            case "Standar": harga = 300000; break;
            case "Deluxe": harga = 500000; break;
            case "Family": harga = 700000; break;
        }

        $("#harga").val(harga.toLocaleString('id-ID'));
        hitungTotal();
    }

    function hitungTotal() {
        const harga = parseInt($("#harga").val().replace(/\./g, '') || 0);
        const durasi = parseInt($("#durasiMenginap").val() || 0);
        const breakfast = $("#breakfast").is(":checked");
        let total = harga * durasi;

        if (durasi > 3) {
            total *= 0.9; // Diskon 10%
        }

        if (breakfast) {
            total += 80000;
        }

        $("#totalBayar").val(total.toLocaleString('id-ID'));
    }

    function validateForm() {
        const namaPemesan = $("#namaPemesan").val().trim();
        let nomorIdentitas = $("#nomorIdentitas").val().trim();

        // Sanitize input (remove non-numeric characters)
        nomorIdentitas = nomorIdentitas.replace(/\D/g, "");
        if (!namaPemesan) {
            alert("Nama Pemesan harus diisi!");
            return false;
        }
        if (nomorIdentitas.length !== 16) {
            alert("Nomor Identitas harus 16 digit!");
            return false;
        }
        return true;
    }

    function showResume(event) {
        event.preventDefault();
        if (!validateForm()) return;

        const namaPemesan = $("#namaPemesan").val();
        const nomorIdentitas = $("#nomorIdentitas").val();
        const tipeKamar = $("#tipeKamar").val();
        const durasi = $("#durasiMenginap").val();
        const breakfast = $("#breakfast").is(":checked") ? "Ya" : "Tidak";
        const totalBayar = $("#totalBayar").val();
        const diskon = durasi > 3 ? "10%" : "0%";

        $(".resume-container").html(`
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
        `).show();
    }

    $("#tipeKamar").change(setHarga);
    $("#durasiMenginap, #breakfast").on("change", hitungTotal);
    $("#pemesananForm").on("submit", showResume);
});