window.onload = () => {

    const addToList = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }

    const doSomething = document.getElementById('interesting');

    var i = 0;

    doSomething.onclick = () => {
        const myList = document.getElementById('addingList');
        addToList.appendToList(myList, i);
        i++;
    }

}