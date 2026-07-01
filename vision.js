// Aadi Studio Pro AI - Procedural Vision Module Array
export function runVisionInference() {
    const log = document.getElementById('visionTerminal');
    const promptVal = document.getElementById('visionInput').value.trim();
    const canvas = document.getElementById('creativeCanvas');
    const ctx = canvas.getContext('2d');
    
    if(!promptVal) return;
    log.innerHTML = `[COMPUTING VISUAL NODE MAP] Drawing vector data vectors for "${promptVal}"...`;
    
    // Clear and draw deep grid background layer
    ctx.fillStyle = '#08031a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Abstract neon algorithmic matrix generator loop
    const iterations = Math.min(60 + promptVal.length * 6, 250);
    for (let i = 0; i < iterations; i++) {
        let xPos = Math.abs(Math.sin(i * promptVal.length + 3)) * canvas.width;
        let yPos = Math.abs(Math.cos(i * 1.5)) * canvas.height;
        let radius = Math.abs(Math.sin(i)) * 5 + 1;
        
        ctx.beginPath();
        ctx.arc(xPos, yPos, radius, 0, Math.PI * 2);
        
        // Dynamic cyber-hacker neon styling matrix
        if (i % 3 === 0) {
            ctx.fillStyle = 'rgba(122, 0, 255, 0.75)'; // Electric Indigo
        } else if (i % 3 === 1) {
            ctx.fillStyle = 'rgba(176, 85, 255, 0.9)';  // Neon Purple
        } else {
            ctx.fillStyle = 'rgba(0, 255, 170, 0.85)';  // Matrix Green/Teal accent
        }
        ctx.fill();
    }
    
    // Render text block directly inside the creative array
    ctx.font = 'bold 12px "Space Mono", monospace';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText(promptVal.toUpperCase(), canvas.width / 2, canvas.height - 25);
    
    log.innerHTML = `✨ Render complete. Custom graphic matrix compilation success.`;
    
    // Enable the download asset button
    document.getElementById('downloadBtn').disabled = false;
}

// Asset Downloader Feature
export function downloadCanvasArt() {
    const canvas = document.getElementById('creativeCanvas');
    
    // Convert the HTML canvas directly into a local download stream
    const imgUrl = canvas.toDataURL("image/png");
    const linkElement = document.createElement('a');
    linkElement.download = 'aadi-studio-design.png';
    linkElement.href = imgUrl;
    linkElement.click();
}