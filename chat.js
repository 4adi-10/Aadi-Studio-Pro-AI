export async function runTextInference() {
    const input = document.getElementById('textInput');
    const log = document.getElementById('textTerminal');
    const txt = input.value.trim();
    if (!txt) return;
    
    input.value = "";
    log.innerHTML += `\n\nUser: ${txt}\n\n[ROUTING TO EXTERNAL CLOUD AI...]`;
    log.scrollTop = log.scrollHeight;

    try {
        // Fetching directly from an external high-speed computing cluster
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer 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", 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama3-8b-8192", 
                messages: [
                    { role: "system", content: "You are the advanced cybernetic central mainframe AI of Aadi Studio Pro. Be sharp, brilliant, and technical." },
                    { role: "user", content: txt }
                ]
            })
        });

        const data = await response.json();
        const aiReply = data.choices[0].message.content;

        log.innerHTML = log.innerHTML.replace('[ROUTING TO EXTERNAL CLOUD AI...]', `Aadi External Core:\n🤖 ${aiReply}`);
    } catch (error) {
        log.innerHTML = log.innerHTML.replace('[ROUTING TO EXTERNAL CLOUD AI...]', `[!] Connection Error: Uplink pipeline timed out.`);
    }
    log.scrollTop = log.scrollHeight;
}