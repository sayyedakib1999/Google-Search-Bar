function searchGoogle() {
    var searchTerm = document.getElementById('searchInput').value;
    if (searchTerm.trim() !== '') {
        var googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
        window.open(googleSearchUrl, '_blank');
    }
}