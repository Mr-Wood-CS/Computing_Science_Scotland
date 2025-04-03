var text = document.getElementById("sectionToRead").innerText;

document.addEventListener("DOMContentLoaded", function () {
    let synth = window.speechSynthesis;
    let voices = [];
    let currentUtterance = null;

    function populateVoices() {
        voices = synth.getVoices();
        let voiceSelect = document.getElementById("voiceSelect");
        if (voiceSelect) {
            voiceSelect.innerHTML = voices.map((voice, index) =>
                `<option value="${index}">${voice.name} (${voice.lang})</option>`
            ).join("");
        }
    }

    // Load voices (some browsers delay loading)
    if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = populateVoices;
    }
    populateVoices();

    document.querySelectorAll(".read-text").forEach((button) => {
        button.addEventListener("click", function () {
            let text = this.getAttribute("data-text");
            if (text) {
                if (synth.speaking) {
                    synth.cancel(); // Stop any existing speech
                }
                currentUtterance = new SpeechSynthesisUtterance(text);

                let selectedVoiceIndex = document.getElementById("voiceSelect")?.value;
                if (selectedVoiceIndex && voices[selectedVoiceIndex]) {
                    currentUtterance.voice = voices[selectedVoiceIndex];
                }

                synth.speak(currentUtterance);
            }
        });
    });

    document.getElementById("pauseSpeech")?.addEventListener("click", function () {
        if (synth.speaking && !synth.paused) {
            synth.pause();
        }
    });

    document.getElementById("resumeSpeech")?.addEventListener("click", function () {
        if (synth.paused) {
            synth.resume();
        }
    });

    document.getElementById("stopSpeech")?.addEventListener("click", function () {
        synth.cancel();
    });
});