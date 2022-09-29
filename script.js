document.getElementById('prompt').innerHTML = "What is your name?";
document.getElementById('answer').innerHTML = "Answer:";

document.querySelector('#inputText').addEventListener('change', (e) => {  

  const message = e.target.value;
  const myClassInstance = new MyClass(message)
  const response = myClassInstance.answer()
  console.log(response);  //Records to console

  document.querySelector('#output').innerHTML = response; //Records output
});



class MyClass {
    name = "Jason" //Instance Var
    constructor(name){  //Constructor
        this.name = name
    }
    answer() {             // Function
        return "Hello " + this.name + ",";
    }
}


// }

//Seperate Method

//Done:
// 1. Ask user for name instead of input. Make output say "Hello [NAME]" 

//To-Do:
// 2. Extract all useful logic into a separate method, and call that method from the code above. Outputs "Hello [name] ,
// 3. Put extracted method into a new class, and instantiate that class from here and call the method on that class
// 4. (Bonus) Ask for a comma-separated list of names. Print "Hello [NAME]" for each name
