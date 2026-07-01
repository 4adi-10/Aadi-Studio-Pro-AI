export function runVisionInference() {
    const log = document.getElementById('visionTerminal');
    const promptVal = document.getElementById('visionInput').value.trim();
    const canvas = document.getElementById('creativeCanvas');
    const ctx = canvas.getContext('2d');
    
    if(!promptVal) return;
    log.innerHTML = `[COMPUTING VISUAL NODE MAP] Drawing vector data vectors for "${promptVal}"...`;
    
    ctx.fillStyle = '#08031a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const iterations = Math.min(60 + promptVal.length * 6, 250);
    for (let i = 0; i < iterations; i++) {
        let xPos = Math.abs(Math.sin(i * promptVal.length + 3)) * canvas.width;
        let yPos = Math.abs(Math.cos(i * 1.5)) * canvas.height;
        let radius = Math.abs(Math.sin(i)) * 5 + 1;
        
        ctx.beginPath();
        ctx.arc(xPos, yPos, radius, 0, Math.PI * 2);
        
        if (i % 3 === 0) {
            ctx.fillStyle = 'rgba(122, 0, 255, 0.75)';
        } else if (i % 3 === 1) {
            ctx.fillStyle = 'rgba(176, 85, 255, 0.9)';
        } else {
            ctx.fillStyle = 'rgba(0, 255, 170, 0.85)';
        }
        ctx.fill();
    }
    
    ctx.font = 'bold 12px "Space Mono", monospace';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText(promptVal.toUpperCase(), canvas.width / 2, canvas.height - 25);
    
    log.innerHTML = `✨ Render complete. Custom graphic matrix compilation success.`;
    document.getElementById('downloadBtn').disabled = false;
}

export function downloadCanvasArt() {
    const canvas = document.getElementById('creativeCanvas');
    const imgUrl = canvas.toDataURL("image/png");
    const linkElement = document.createElement('a');
    linkElement.download = 'aadi-studio-design.png';
    linkElement.href = imgUrl;
    linkElement.click();
}