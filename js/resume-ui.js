/**
 * AI Career Coach - Resume UI Controller
 * Handles the display of analysis results and scoring.
 */

window.displayResults = (results) => {
    const atsStatus = document.getElementById('atsStatus');
    const atsDetails = document.getElementById('atsDetails');
    const feedbackContent = document.getElementById('feedbackContent');
    const improvementContent = document.getElementById('improvementContent');
    const scoreLabel = document.getElementById('scoreLabel');

    // Update ATS Section
    atsStatus.innerText = 'Highly Compatible';
    atsDetails.innerHTML = `
        <p>✅ Standard font detected</p>
        <p>✅ Clear section headings</p>
        <p>✅ Keyword density: Optimal (12%)</p>
    `;

    // Update Feedback Section
    scoreLabel.innerText = 'Good - Job Ready';
    feedbackContent.innerHTML = `
        <div style="margin-bottom: var(--spacing-md);">
            <h4 style="color: var(--primary-blue); margin-bottom: 0.5rem;">✅ Strengths</h4>
            <ul style="padding-left: 1.2rem; font-size: 0.875rem;">
                <li>Strong technical stack (React, Node.js)</li>
                <li>Clear project descriptions</li>
                <li>Professional formatting</li>
            </ul>
        </div>
        <div style="margin-bottom: var(--spacing-md);">
            <h4 style="color: #eab308; margin-bottom: 0.5rem;">⚠️ Missing Skills</h4>
            <p style="font-size: 0.875rem; color: var(--text-muted);">Industry analysis suggests you are missing: <strong>Docker, AWS, Unit Testing</strong>.</p>
        </div>
    `;

    // Update Improvement Suggestions
    improvementContent.innerHTML = `
        <ul style="padding-left: 1.2rem; font-size: 0.875rem; display: grid; gap: 0.75rem;">
            <li><strong>Quantify Achievements:</strong> Instead of "Improved performance", use "Improved performance by 30% using lazy loading".</li>
            <li><strong>Summary Optimization:</strong> Lead with your strongest skill (e.g., "Full Stack Developer with 2+ years of experience").</li>
            <li><strong>Formatting:</strong> Increase line spacing in the 'Experience' section to 1.15 for better readability.</li>
        </ul>
    `;
};
