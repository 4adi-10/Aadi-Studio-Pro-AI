export async function runVisionInference() {
    const log = document.getElementById('visionTerminal');
    const promptVal = document.getElementById('visionInput').value.trim();
    const canvas = document.getElementById('creativeCanvas');
    const ctx = canvas.getContext('2d');
    
    if(!promptVal) return;
    log.innerHTML = `[CONNECTING TO IMAGINATION ENGINES...] Fetching true external render paths...`;
    
    try {
        // Generating a completely unique layout via poll seeds
        const randomSeed = Math.floor(Math.random() * 1000000);
        const externalImageUrl = `https://image.pollinations.ai/p/${encodeURIComponent(promptVal)}?width=300&height=300&seed=${randomSeed}&nologo=true`;
        
        const img = new Image();
        img.crossOrigin = "anonymous"; // Prevents security errors during downloading
        img.src = externalImageUrl;
        
        img.onload = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            log.innerHTML = `✨ External generation success. Graphics rendered onto canvas layout.`;
            document.getElementById('downloadBtn').disabled = false;
        };
        
        img.onerror = function() {
            log.innerHTML = `[!] Error loading external pixel asset vector layout.`;
        };
        
    } catch (e) {
        log.innerHTML = `[!] Critical pipeline communication breakdown.`;
    }
}

export function downloadCanvasArt() {
    const canvas = document.getElementById('creativeCanvas');
    const imgUrl = canvas.toDataURL("image/png");
    const linkElement = document.createElement('a');
    linkElement.download = 'aadi-pro-external-art.png';
    linkElement.href = imgUrl;
    linkElement.click();
}