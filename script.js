document.getElementById('searchInput').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const info = document.querySelectorAll('.info');

    info.forEach(info => {
        const infoText = info.textContent.toLowerCase();
        if (infoText.includes(searchValue)) {
            info.style.display = 'block';
        } else {
            info.style.display = 'none'; 
        }
    });
});


