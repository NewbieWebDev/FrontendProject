const suggestionsList = [
    "Google",
    "YouTube",
    "Facebook",
    "Twitter",
    "Instagram",
    "LinkedIn",
    "Reddit",
    "Wikipedia",
    "Amazon",
    "Ebay",
    "Netflix",
    "Pinterest",
    "Yahoo",
    "Bing",
    "WhatsApp"
];

function suggest() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';
    
    if (input) {
        const filteredSuggestions = suggestionsList.filter(suggestion => 
            suggestion.toLowerCase().includes(input)
        );

        filteredSuggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion;
            li.onclick = function() {
                document.getElementById('search-input').value = suggestion;
                suggestions.innerHTML = '';
            };
            suggestions.appendChild(li);
        });
    }
}

function search() {
    const query = document.getElementById('search-input').value;
    console.log(`Searching for: ${query}`);  // For debugging
    if (query) {
        window.open(`https://www.google.com/search?q=${query}`, '_blank');
    }
}
