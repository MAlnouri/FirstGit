window.onload = () => {
    const doSomething = document.getElementById('interesting');

    doSomething.onclick = () => {
        const feetToInchesInput = document.getElementById("feetToInchesInput");
        const feetToInchesDisplay = document.getElementById("feetToInchesDisplay");
        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    }

}