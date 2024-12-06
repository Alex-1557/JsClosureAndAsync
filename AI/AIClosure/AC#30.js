//3. Private Variables (Emulation):
//Data Encapsulation and Privacy:

function createPerson(name) {
    let privateName = name; // Emulated private variable
    return {
      getName: function() {
        return privateName;
      },
  
    };
  }
  
  let person = createPerson("John");
  console.log(person.getName()); // Output: John
  // console.log(person.privateName);  // Error: privateName is not accessible.
  //Correct: Closures emulate private variables, enhancing data encapsulation.