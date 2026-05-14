/**
 * AI Career Coach - Roadmaps & Skill Gap Logic
 */

const roadmapData = {
    frontend: {
        role: "Frontend Master",
        skills: [
            { name: "React.js", current: 75, target: 90 },
            { name: "CSS/Tailwind", current: 85, target: 95 },
            { name: "TypeScript", current: 40, target: 80 },
            { name: "Next.js", current: 30, target: 85 }
        ],
        steps: [
            { title: "Advanced React Patterns", desc: "Hooks, Context API, and Performance Optimization." },
            { title: "TypeScript Mastery", desc: "Generic types, interfaces, and integration with React." },
            { title: "Full Stack Basics", desc: "Connecting to APIs and understanding Server Components." }
        ]
    },
    backend: {
        role: "Backend Specialist",
        skills: [
            { name: "Node.js", current: 60, target: 95 },
            { name: "PostgreSQL", current: 45, target: 85 },
            { name: "Redis/Caching", current: 20, target: 70 },
            { name: "Docker/K8s", current: 10, target: 80 }
        ],
        steps: [
            { title: "Microservices Architecture", desc: "Understanding distributed systems and message brokers." },
            { title: "Database Optimization", desc: "Advanced indexing and query performance tuning." },
            { title: "Cloud Deployment", desc: "AWS/GCP infrastructure and CI/CD pipelines." }
        ]
    }
};

function generateRoadmap() {
    const roleKey = document.getElementById('roadmapSelect').value;
    const data = roadmapData[roleKey] || roadmapData.frontend;
    
    // Update Header
    document.getElementById('roleName').innerText = data.role;
    
    // Render Skill Gap
    const gapContent = document.getElementById('skillGapContent');
    gapContent.innerHTML = data.skills.map(skill => `
        <div class="skill-bar-container">
            <div class="skill-name">
                <span>${skill.name}</span>
                <span class="gap-label">${skill.target - skill.current}% Gap</span>
            </div>
            <div class="progress-track">
                <div class="progress-fill" style="width: ${skill.current}%"></div>
                <div class="gap-marker" style="left: ${skill.target}%"></div>
            </div>
            <div class="flex justify-between" style="font-size: 0.75rem; margin-top: 4px; color: var(--text-muted);">
                <span>Current: ${skill.current}%</span>
                <span>Target: ${skill.target}%</span>
            </div>
        </div>
    `).join('');
    
    // Render Timeline
    const timeline = document.getElementById('roadmapTimeline');
    timeline.innerHTML = data.steps.map((step, index) => `
        <div class="roadmap-step">
            <div class="step-card">
                <span class="step-tag">Phase ${index + 1}</span>
                <h3>${step.title}</h3>
                <p style="color: var(--text-muted); font-size: 0.875rem;">${step.desc}</p>
            </div>
        </div>
    `).join('');
}

// Initial Render
document.addEventListener('DOMContentLoaded', generateRoadmap);
