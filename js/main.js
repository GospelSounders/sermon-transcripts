// Gospel Sounders - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    init();
});

function init() {
    // Set up navigation
    setupNavigation();
    
    // Add smooth scrolling for anchor links
    setupSmoothScrolling();
    
    // Update statistics
    updateStatistics();
    
    console.log('Gospel Sounders website initialized');
}

function setupNavigation() {
    // Get current page path
    const currentPath = window.location.pathname;
    
    // Update active navigation link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath || 
            (currentPath === '/sermon-transcripts/' && link.getAttribute('href') === '/')) {
            link.classList.add('active');
        }
    });
}

function setupSmoothScrolling() {
    // Add smooth scrolling to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

async function updateStatistics() {
    try {
        // This would typically fetch from an API or generated JSON
        // For now, we'll use static data
        const stats = {
            totalTranscripts: 3200,
            ministries: 4,
            lastUpdated: new Date().toLocaleDateString()
        };
        
        // Update stat numbers if elements exist
        const statNumbers = document.querySelectorAll('.stat-number');
        if (statNumbers.length >= 3) {
            statNumbers[0].textContent = `3,200+`;
            statNumbers[1].textContent = stats.ministries;
            statNumbers[2].textContent = '100%';
        }
        
        console.log('Statistics updated:', stats);
    } catch (error) {
        console.error('Error updating statistics:', error);
    }
}

// Utility functions for future features

function searchTranscripts(query) {
    // Placeholder for search functionality
    console.log('Searching for:', query);
    // This will be implemented when the search page is built
}

function loadTranscriptList(ministry) {
    // Placeholder for loading transcript lists
    console.log('Loading transcripts for:', ministry);
    // This will fetch and display transcript lists
}

function displayTranscript(transcriptId) {
    // Placeholder for displaying individual transcripts
    console.log('Displaying transcript:', transcriptId);
    // This will show the full transcript content
}

// Export functions for use in other modules
window.GospelSounders = {
    searchTranscripts,
    loadTranscriptList,
    displayTranscript
};