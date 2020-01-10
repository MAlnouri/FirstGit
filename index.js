window.onload = () => {
    const doSomething = document.getElementById('interesting');

    doSomething.onclick = () => {
        const setColor = (className) => {
            console.log("SET CLASS TO", className);
            var element = document.getElementById("form-section");
            if (currentClass) {
                element.classList.remove(currentClass);        
            }
            currentClass = className;
            element.classList.add(className);
        }
    }

}