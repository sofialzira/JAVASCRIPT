const addSpan = document.createElement("span");
addSpan.textContent = 'Novo texto';
document.body.append(addSpan);

addSpan.classList.add("teste");

addSpan.addEventListener("click", () => addSpan.classList.toggle("outraclasse"));




const newButton = document.createElement("button");
document.body.append(newButton);

newButton.addEventListener("mouseover", () => newButton.classList.add("classe"));
newButton.addEventListener("mouseout", () => newButton.classList.remove("classe"));