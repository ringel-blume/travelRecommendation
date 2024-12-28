const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
const newYorkTime = new Date().toLocaleTimeString('en-US', options);
console.log("Current time in New York:", newYorkTime);


function showRecommendations(query) {
    const resultsContainer = document.getElementById('search-results');
    const resultsList = document.getElementById('results-list');

    // Clear previous results
    resultsList.innerHTML = '';

    if (query.trim() === '') {
        resultsContainer.style.display = 'none';
        return;
    }

    // Example recommendations (replace with dynamic suggestions as needed)
    const recommendations = [
        'HTML Basics',
        'CSS Flexbox Guide',
        'Responsive Web Design',
        'CSS Grid Layout',
        'HTML Forms',
        'CSS Animations',
        'Web Accessibility Tips'
    ];

    // Filter recommendations based on query
    const filtered = recommendations.filter(item => 
        item.toLowerCase().includes(query.toLowerCase())
    );

    // Display filtered recommendations
    filtered.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.onclick = () => alert(`You selected: ${item}`);
        resultsList.appendChild(li);
    });

    resultsContainer.style.display = filtered.length ? 'block' : 'none';
}
