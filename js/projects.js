/**
 * AI Career Coach - Project Idea Logic
 */

const projects = [
    {
        title: "AI Personal Finance Tracker",
        level: "intermediate",
        desc: "A web app that uses AI to categorize expenses and provide savings recommendations.",
        tech: ["React", "Node.js", "Chart.js", "Gemini API"],
        features: ["Automatic expense tagging", "Visual spending charts", "Monthly budget AI coach"]
    },
    {
        title: "Smart Task Manager",
        level: "beginner",
        desc: "A classic Todo app but with AI-powered task prioritization and deadline reminders.",
        tech: ["HTML5", "CSS3", "Vanilla JS", "Local Storage"],
        features: ["Drag and drop ordering", "Voice-to-task input", "Daily focus suggestions"]
    },
    {
        title: "Decentralized Portfolio Reviewer",
        level: "advanced",
        desc: "A platform for developers to get their portfolios reviewed by an AI agent and peer community.",
        tech: ["Next.js", "Tailwind", "Solidity", "OpenAI"],
        features: ["Automated UI/UX audit", "Gas-optimized reviews", "Contribution rewards"]
    },
    {
        // Another one
        title: "Weather-Based Outfit Planner",
        level: "beginner",
        desc: "Suggests the best outfit based on current weather data and user wardrobe.",
        tech: ["React", "Weather API", "CSS Grid"],
        features: ["Real-time weather sync", "Wardrobe management", "Visual style guide"]
    }
];

function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';

    const filtered = filter === 'all' ? projects : projects.filter(p => p.level === filter);

    filtered.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card project-card';
        card.innerHTML = `
            <span class="project-difficulty diff-${project.level}">${project.level}</span>
            <h3>${project.title}</h3>
            <p style="color: var(--text-muted); font-size: 0.875rem; margin-top: 0.5rem;">${project.desc}</p>
            
            <div class="project-tech-stack">
                ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>

            <ul class="project-features">
                ${project.features.map(f => `<li>${f}</li>`).join('')}
            </ul>

            <button class="btn btn-outline" style="width: 100%; margin-top: auto;">View Implementation Guide</button>
        `;
        grid.appendChild(card);
    });
}

// Filter Event Listeners
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.level);
    });
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => renderProjects());
