// const getButton = document.getElementsByTagName("button");
// const buttonsContainer = document.querySelectorAll(".container button");
// const getId = document.getElementById("teste");


// const newDiv = document.createElement('div');

// document.body.prepend(newDiv);

// newDiv.prepend("Isto é apenas para um exercício");
// newDiv.append(" muito dificil ");
// newDiv.setAttribute("aria-label", "teste-teste"); ??


// eventos DOM 



// exercicio pseudo eventos 


const buttons = document.querySelectorAll("button");
const buttons2 = document.getElementsByTagName("button");

console.log(buttons);


buttons[0].onmouseover = () => console.log("mouseover");
buttons[1].onmouseover = () => console.log("mouseover");


buttons[0].addEventListener("mouseout", () => console.log("mouseout"));
buttons[1].addEventListener("mouseout", () => console.log("mouseout"));

buttons.foreach(button => button.onmouseover = () => console.log("mouse over!"));

setTimeout(() => 
    buttons[0].setAttribute("id", "primeiro botão"), 2000);

setTimeout(() => buttons[0].setAttribute("id", "teste"), 2000);



 
// objecto evento 





