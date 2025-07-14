// Gospel Sounders - Search Functionality

let currentResults = [];
let currentPage = 0;
const resultsPerPage = 20;

document.addEventListener('DOMContentLoaded', function() {
    setupSearch();
    
    // Enable search on Enter key
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});

function setupSearch() {
    // Pre-populate search if URL has query params
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    if (query) {
        document.getElementById('search-input').value = query;
        performSearch();
    }
}

function performSearch() {
    const query = document.getElementById('search-input').value.trim();
    const ministry = document.getElementById('ministry-filter').value;
    const topic = document.getElementById('topic-filter').value;
    
    if (!query && !ministry && !topic) {
        showError('Please enter a search term or select a filter');
        return;
    }
    
    // Update URL
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (ministry) params.set('ministry', ministry);
    if (topic) params.set('topic', topic);
    
    window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
    
    // Show loading state
    showLoading();
    
    // Simulate search (in real implementation, this would query an index)
    setTimeout(() => {
        const results = simulateSearch(query, ministry, topic);
        displayResults(results);
    }, 1000);
}

function simulateSearch(query, ministry, topic) {
    // For now, return mock results
    // In real implementation, this would search through a built index
    const mockResults = [
        {
            title: "The Sanctuary and End Time Events",
            ministry: "Newlife SDA Church",
            excerpt: "Understanding the heavenly sanctuary and its role in end time prophecy...",
            videoId: "abc123",
            relevance: 95
        },
        {
            title: "Daniel's 70 Weeks Prophecy",
            ministry: "Pioneer Loudcry",
            excerpt: "A detailed study of Daniel's prophecy about the 70 weeks and the Messiah...",
            videoId: "def456",
            relevance: 89
        },
        {
            title: "Health and Temperance",
            ministry: "Young Evangelists",
            excerpt: "Biblical principles for healthy living and temperance in all things...",
            videoId: "ghi789",
            relevance: 82
        }
    ];
    
    // Filter by ministry if selected
    let filteredResults = mockResults;
    if (ministry) {
        filteredResults = filteredResults.filter(result => 
            result.ministry.toLowerCase().includes(ministry.replace('-', ' '))
        );
    }
    
    return filteredResults;
}

function displayResults(results) {
    currentResults = results;
    currentPage = 0;
    
    const resultsSection = document.getElementById('search-results');
    const resultsTitle = document.getElementById('results-title');
    const resultsCount = document.getElementById('results-count');
    const resultsContainer = document.getElementById('results-container');
    
    if (results.length === 0) {
        resultsTitle.textContent = 'No Results Found';
        resultsCount.textContent = 'Try different search terms or filters';
        resultsContainer.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>No sermons found</h3>
                <p>Try searching for broader terms or check out our popular searches below.</p>
                <div class="no-results-suggestions">
                    <button class="btn btn-secondary" onclick="searchTopic('prophecy')">Search Prophecy</button>
                    <button class="btn btn-secondary" onclick="searchTopic('Sabbath')">Search Sabbath</button>
                </div>
            </div>
        `;
    } else {
        resultsTitle.textContent = 'Search Results';
        resultsCount.textContent = `Found ${results.length} sermon${results.length === 1 ? '' : 's'}`;
        renderResultsPage();
    }
    
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function renderResultsPage() {
    const resultsContainer = document.getElementById('results-container');
    const startIndex = currentPage * resultsPerPage;
    const endIndex = Math.min(startIndex + resultsPerPage, currentResults.length);
    const pageResults = currentResults.slice(startIndex, endIndex);
    
    if (currentPage === 0) {
        resultsContainer.innerHTML = '';
    }
    
    pageResults.forEach(result => {
        const resultElement = createResultElement(result);
        resultsContainer.appendChild(resultElement);
    });
    
    // Show/hide load more button
    const loadMoreContainer = document.querySelector('.load-more-container');
    if (endIndex < currentResults.length) {
        loadMoreContainer.style.display = 'block';
    } else {
        loadMoreContainer.style.display = 'none';
    }
}

function createResultElement(result) {
    const div = document.createElement('div');
    div.className = 'result-item';
    
    div.innerHTML = `
        <div class="result-header">
            <h3 class="result-title">
                <a href="/transcript/${result.videoId}" class="result-link">
                    ${result.title}
                </a>
            </h3>
            <div class="result-meta">
                <span class="result-ministry">${result.ministry}</span>
                <span class="result-relevance">${result.relevance}% match</span>
            </div>
        </div>
        <p class="result-excerpt">${result.excerpt}</p>
        <div class="result-actions">
            <a href="/transcript/${result.videoId}" class="btn btn-primary btn-sm">Read Transcript</a>
            <a href="https://youtube.com/watch?v=${result.videoId}" target="_blank" class="btn btn-outline btn-sm">
                Watch Video
            </a>
        </div>
    `;
    
    return div;
}

function loadMoreResults() {
    currentPage++;
    renderResultsPage();
}

function searchTopic(topic) {
    document.getElementById('search-input').value = topic;
    document.getElementById('topic-filter').value = '';
    performSearch();
}

function showLoading() {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
            <p>Searching through 3,200+ sermon transcripts...</p>
        </div>
    `;
    
    document.getElementById('search-results').style.display = 'block';
}

function showError(message) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = `
        <div class="error">
            <div class="error-icon">⚠️</div>
            <p>${message}</p>
        </div>
    `;
    
    document.getElementById('search-results').style.display = 'block';
}

// Export functions for global use
window.performSearch = performSearch;
window.loadMoreResults = loadMoreResults;
window.searchTopic = searchTopic;