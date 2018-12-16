let size = 10;

const init = () => {

    const btn = document.createElement("BUTTON");
    const btn_name = document.createTextNode("Stworz liste")
    btn.appendChild(btn_name);
    document.body.appendChild(btn);
    const ul = document.createElement("ul");
    ul.setAttribute("id", "list")
    document.body.appendChild(ul);

}

const createLiElements = () => {

    const ul = document.querySelector("ul");
    a = (size - 9)
    y = size

    for (let i = a; i <= y; i++) {
        const li = document.createElement("li");
        const li_name = document.createTextNode("Lista nr " + i);
        li.appendChild(li_name);
        ul.appendChild(li);
        li.setAttribute("id", i);
        document.getElementById(i).style.fontSize = `${size}px`;
        document.body.appendChild(ul, li);
        size++;
    }
}

init(addEventListener("click", createLiElements));