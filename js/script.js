        // Hedef tarih ve saat (örneğin, 31 Aralık 2025)
        var targetDate = new Date("May 2, 2025 09:00:00").getTime();

        // Geri sayım fonksiyonu
        var countdownInterval = setInterval(function() {
            // Şu anki tarih ve saat
            var now = new Date().getTime();

            // Kalan süre
            var remainingTime = targetDate - now;

            // Gün, saat, dakika, saniye hesaplama
            var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            // Geri sayımı ekrana yazdır
            document.getElementById("day").innerHTML = days;
            document.getElementById("hour").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            // Eğer geri sayım tamamlanmışsa
            if (remainingTime < 0) {
                clearInterval(countdownInterval);
                document.getElementById("countdown").innerHTML = "Zaman Doldu!";
            }
        }, 1000); // Her saniye geri sayımı güncelle