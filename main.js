function searchGoogle() {
    var searchTerm = document.getElementById('searchInput').value;
    if (searchTerm.trim() !== '') {
        var googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
        window.open(googleSearchUrl, '_blank');
    }
}
function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('suggestions').style.display = 'none';
}

function handleKeyDown(event) {
    var suggestions = document.querySelectorAll('.suggestion');
    if (event.key === 'ArrowDown' && suggestions.length > 0) {
        event.preventDefault();
        suggestions[0].focus();
    }
}