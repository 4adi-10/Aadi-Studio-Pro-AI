// Aadi Studio Pro AI - Chat Module Array
export function runTextInference() {
    const input = document.getElementById('textInput');
    const log = document.getElementById('textTerminal');
    const txt = input.value.trim();
    if (!txt) return;
    
    input.value = "";
    log.innerHTML += `\n\nUser: ${txt}\n\n[ACCESSING CYBER NETWORKS...]`;
    
    // Custom hacker/coder generation answers
    setTimeout(() => {
        let systemResponse = "";
        const lowerTxt = txt.toLowerCase();

        if (lowerTxt.includes("hello") || lowerTxt.includes("hey")) {
            systemResponse = "Connection established. AADI-STUDIO central mainframe initialized. Standing by for protocol optimization instructions.";
        } else if (lowerTxt.includes("code") || lowerTxt.includes("program")) {
            systemResponse = "Compiling development algorithms... Remember to structure your matrices cleanly into modules. Error reduction checks initialized successfully.";
        } else if (lowerTxt.includes("who are you")) {
            systemResponse = "I am the core logic matrix of Aadi Studio Pro AI—a secure sandbox environment executed entirely inside client storage arrays.";
        } else {
            systemResponse = `Analysis matrix for instruction cluster "${txt}" completed successfully. Network pipelines fully clean. Ready for next loop injection.`;
        }

        // Replace the computing text with the final response
        log.innerHTML = log.innerHTML.replace('[ACCESSING CYBER NETWORKS...]', `Aadi Core Matrix:\n🤖 ${systemResponse}`);
        log.scrollTop = log.scrollHeight;
    }, 700);
}