/**
 * AI Career Coach - Main JS
 * Core UI interactions and state management
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('AI Career Coach Initialized');
    
    // Initialize Navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // In a static app, we might handle active state like this
            // or just let the page reload.
            // navItems.forEach(i => i.classList.remove('active'));
            // item.classList.add('active');
        });
    });

    // Modal Handling Helper
    window.showModal = (id) => {
        const modal = document.getElementById(id);
        if (modal) modal.style.display = 'flex';
    };

    window.hideModal = (id) => {
        const modal = document.getElementById(id);
        if (modal) modal.style.display = 'none';
    };

    // Close modal on click outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            e.target.style.display = 'none';
        }
    });


    // Notification System
    const notificationContainer = document.createElement('div');
    notificationContainer.className = 'notification-container';
    document.body.appendChild(notificationContainer);

    window.showNotification = (message, type = 'info') => {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <span>${getNotificationIcon(type)}</span>
            <div>${message}</div>
            <span class="notification-close" onclick="this.parentElement.remove()">×</span>
        `;
        notificationContainer.appendChild(notification);
        setTimeout(() => notification.remove(), 5000);
    };

    function getNotificationIcon(type) {
        switch(type) {
            case 'success': return '✅';
            case 'warning': return '⚠️';
            case 'error': return '❌';
            default: return 'ℹ️';
        }
    }

    // Global Search Logic
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    showNotification(`Searching for: "${query}"...`, 'info');
                    searchInput.value = '';
                }
            }
        });
    }

});
