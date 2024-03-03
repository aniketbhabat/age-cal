const btnE = document.getElementById("btn");
const birthdayE = document.getElementById("birthday");
const resultE = document.getElementById("result");

function calculateAge(){
    const birthdayValue = birthdayE.ariaValueMax;
    if (birthdayValue === ""){
        alert("Please enter your Bithday");
    }else{
        const age = getAge{(birthdayValue);
            resultE.innerHTML = `Your age is ${age} ${age>1 ? "years" : "Year"}old`;
        }
    }
}

function getAge(birthdayValue) {
        const currentDate = new Date();
        const birthdayDate = new Date(birthdayValue);
        let age = currentDate.getFullYear() - birthdayDate.getFullYear();
        const month = currentDate.getMonth() - birthdayDate.getMonth();
      
        if (
          month < 0 ||
          (month === 0 && currentDate.getDate() < birthdayDate.getDate())
        ) {
          age--;
        }
      
        return age;
}
      
btnEl.addEventListener("click", calculateAge);
      
