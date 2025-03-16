const toggleButton = document.getElementById('toggleButton');
const closeButton = document.getElementById('closeButton');
closeButton.classList.toggle('hidden');
// Butona tıklanıldığında çarpıyı göster
toggleButton.addEventListener('click', function() {
    closeButton.classList.toggle('hidden');
});

// Çarpıya tıklanıldığında çarpıyı gizle
closeButton.addEventListener('click', function() {
    closeButton.classList.add('hidden');
});