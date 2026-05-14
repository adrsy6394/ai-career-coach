/**
 * AI Career Coach - Resume Parser & Simulation
 */

const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');
const analysisAction = document.getElementById('analysisAction');

// Handle Drag and Drop
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('drag-over');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    const files = e.dataTransfer.files;
    if (files.length > 0) handleFile(files[0]);
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) handleFile(e.target.files[0]);
});

function handleFile(file) {
    fileName.innerText = file.name;
    fileSize.innerText = (file.size / (1024 * 1024)).toFixed(2) + ' MB';
    
    uploadArea.style.display = 'none';
    fileInfo.style.display = 'flex';
    analysisAction.style.display = 'block';
}

function resetUpload() {
    fileInput.value = '';
    uploadArea.style.display = 'block';
    fileInfo.style.display = 'none';
    analysisAction.style.display = 'none';
    document.getElementById('analysisDashboard').style.display = 'none';
}

function startAnalysis() {
    analysisAction.style.display = 'none';
    const dashboard = document.getElementById('analysisDashboard');
    dashboard.style.display = 'grid';
    
    // Simulate AI Analysis
    const scoreCircle = document.getElementById('scoreCircle');
    const scoreValue = document.getElementById('scoreValue');
    const feedbackContent = document.getElementById('feedbackContent');
    const scoreLabel = document.getElementById('scoreLabel');

    let progress = 0;
    const targetScore = 82;
    const circumference = 2 * Math.PI * 65;

    const interval = setInterval(() => {
        if (progress >= targetScore) {
            clearInterval(interval);
            showFinalFeedback();
        } else {
            progress++;
            scoreValue.innerText = progress + '%';
            const offset = circumference - (progress / 100) * circumference;
            scoreCircle.style.strokeDashoffset = offset;
        }
    }, 20);
}

function showFinalFeedback() {
    if (window.displayResults) {
        window.displayResults();
    }
}
