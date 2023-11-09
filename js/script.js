// Nama: Ibnu Fadhlan
// Discord: Alanf1f2
// Email: IbnuFadhlan0401@gmail.com

function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value) / 100; // Konversi tinggi ke meter
    var gender = document.getElementById("gender").value;
    // untuk menghitung berat badan dan tinggi badan
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        var bmi = weight / (height * height);
        var result = "BMI Anda: " + bmi.toFixed(2);
        // untuk memilih gender laki-laki/perempuan
        if (gender === "Laki-Laki") {
            result += " (Laki-Laki)";
        } else {
            result += " (Perempuan)";
        }
        // status berat badan jika bmi menunjukkan nilai 18.5 maka hasilnya kurus begitu juga jika bmi kecil 24,9 maka hasilnya normal
        // dst
        if (bmi < 18.5) {
            result += " - Kurus";
        } else if (bmi < 24.9) {
            result += " - Normal";
        } else if (bmi < 29.9) {
            result += " - Gemuk";
        } else {
            result += " - Obesitas";
        }

        document.getElementById("result").innerText = result;

    } else {
        document.getElementById("result").innerText = "Masukkan berat badan, tinggi badan, dan jenis kelamin yang valid.";
        document.getElementById("explanation").innerText = "";
    }
}
