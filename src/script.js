const addTask = document.getElementById("addTask");
const add = document.getElementById("add");
const retrieve = document.getElementById("retrieve");
const taskList = document.getElementById("taskList");


const list = [];
addTask.addEventListener('keydown', down => {
    if(down.key === 'Enter'){
        down.preventDefault();
        add.click();
    }
})

add.addEventListener('click', addTodo);

    function addTodo() {
        
        const taskValue = addTask.value.trim();


        if(taskValue === ''){
            return;
        }

        // add each todo when the button is clicked
        list.push(taskValue);
        taskList.innerHTML = "";

        
        
        list.forEach(oneTodo => {
            const oneElement = document.createElement("li");
           oneElement.textContent = oneTodo;
           taskList.appendChild(oneElement);
           oneElement.style.width = "max-content";
           const delBtn = document.createElement("button");
           oneElement.appendChild(delBtn);
           delBtn.textContent = "Delete"


        });
        addTask.value = "";
        
        localStorage.setItem('listKey', JSON.stringify(list));
 

    }

    //button to bring back the previous to-do's

retrieve.addEventListener('click', (arrayList) => {

        arrayList = localStorage.getItem('listKey');
        //turning the arrayList into an array
        //
       JSON.parse(arrayList).forEach(oneTodo => {
        const oneElement = document.createElement("li");
       oneElement.textContent = oneTodo;
       taskList.appendChild(oneElement);
       oneElement.style.width = "max-content";
       const delBtn = document.createElement("button");
       oneElement.appendChild(delBtn);
       delBtn.textContent = "Delete"

      
    }
)});

const clear = document.getElementById("clear");
clear.addEventListener('click', () =>{
    localStorage.clear();
});

