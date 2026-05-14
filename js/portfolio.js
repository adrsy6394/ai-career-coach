/**
 * AI Career Coach - Portfolio & Code Assistant Logic
 */

function switchToolTab(tab) {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    
    document.querySelector(`.tab-btn[onclick*="${tab}"]`).classList.add('active');
    document.getElementById(`${tab}Tab`).classList.add('active');
}

function reviewPortfolio() {
    const url = document.getElementById('portfolioUrl').value;
    if (!url) return alert('Please enter a URL');
    
    const results = document.getElementById('portfolioResults');
    results.style.display = 'block';
    results.scrollIntoView({ behavior: 'smooth' });
}

function analyzeCode(type) {
    const code = document.getElementById('codeInput').value;
    if (!code) return alert('Please paste some code first');
    
    const output = document.getElementById('codeAnalysisOutput');
    output.innerHTML = '<div class="card">🚀 Analyzing...</div>';
    
    setTimeout(() => {
        if (type === 'explain') {
            output.innerHTML = `
                <div class="card info">
                    <h4 style="color: var(--primary-blue);">Code Explanation</h4>
                    <p style="font-size: 0.875rem; margin-top: 0.5rem;">
                        This block of code is a **JavaScript function** that handles UI tab switching. 
                        It iterates through all tab buttons and content sections to toggle the 'active' class.
                    </p>
                </div>
            `;
        } else {
            output.innerHTML = `
                <div class="card error">
                    <h4 style="color: #ef4444;">Bug Found!</h4>
                    <p style="font-size: 0.875rem; margin-top: 0.5rem;">
                        Potential <strong>Null Reference Error</strong> at line 12. Make sure the element exists before calling <code>classList</code>.
                    </p>
                </div>
                <div class="card warning">
                    <h4 style="color: #f59e0b;">Optimization Tip</h4>
                    <p style="font-size: 0.875rem; margin-top: 0.5rem;">
                        Consider using <strong>Event Delegation</strong> instead of multiple listeners for better performance.
                    </p>
                </div>
            `;
        }
    }, 1000);
}
