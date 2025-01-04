function toggleCard(button) {
    const card = button.parentElement;
    const fullText = card.querySelector('.full-text');
    const shortText = card.querySelector('.short-text');

    if (fullText.style.display === 'none') {
        fullText.style.display = 'block';
        shortText.style.display = 'none';
        button.classList.add('expanded');
    } else {
        fullText.style.display = 'none';
        shortText.style.display = 'block';
        button.classList.remove('expanded');
    }
}

document.getElementById('searchInput').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase(); 
    const containers = document.querySelectorAll('.center-card'); 
    let found = false; 

    containers.forEach(container => {
        const containerText = container.querySelector('h2').textContent.toLowerCase();
        if (containerText.includes(searchValue)) {
            container.style.display = 'flex'; 
            found = true;
        } else {
            container.style.display = 'none';
        }
    });

    const noResultsMessage = document.getElementById('noResults');
    if (!found) {
        noResultsMessage.style.display = 'block';
    } else {
        noResultsMessage.style.display = 'none';
    }
});
