import Quiz from "./quiz.js";
class Settings{
    constructor(){
        //Catch the varibles
        this.settingDom = document.querySelector("#settings");
        this.quizDom = document.querySelector("#quiz")
        this.categoreyDom = document.querySelector("#categorey");
        this.nQuestionsDom = document.querySelector("#nQuestions");
        this.startBtn = document.querySelector("#startBtn");
        this.difficulty = [
            document.querySelector("#easy"),
            document.querySelector("#medium"),
            document.querySelector("#hard"),
        ];

        //Create object from class Quiz
        this.quiz={};
    this.startBtn.addEventListener("click",this.startQuizApp);
}
    // Function with consebt of async - wait: it's mean wait another function to do something
    startQuizApp  =async () =>{
      try{
          //catch the propertes of  api url
        const amount =this.getAmount();
        const categoreyId =this.categoreyDom.value;
        const difficulty =this.getDifficulty();
        
        // Api 
         const url=`https://opentdb.com/api.php?amount=${amount}&category=${categoreyId}&difficulty=${difficulty
     }`
     let {results}= await this.fetchData(url) ;
     console.log("started")
     console.log(results)

     this.toggleElement();

     //Full the quiz object with data
     this.quiz = new Quiz(this.quizDom, amount, results)

    
 
      }catch(err){
         alert(err)
         console.log(err)
      }
    };

    // To hide the setting div and display the quiz div
    toggleElement(){
        if(this.getAmount() && this.getDifficulty()){
        this.quizDom.style.display ="block"
        this.settingDom.style.display = "none"
        }else{
            if(!this.getAmount()){
                alert("Please enter a correct number!")
            }
            if(!this.getDifficulty())
            alert("Please choose a difficulty!")
        }
        
    };

    // Send reqest to the api
    fetchData = async (url) => {
        const response =await fetch(url);
    
        const result = await response.json();
        return result;
        
    };

    // Choose difficulty
    getDifficulty = () =>{

        const difficulty = this.difficulty.filter((el)=>el.checked);
        if(difficulty.length === 1){
            return difficulty[0].id;
        }
       // else{
        // alert("please chose difficulty")
        // }
    };

    getAmount = ()=>{
        let amount = this.nQuestionsDom.value;
        
        if(amount > 0 && amount<20){
            return amount;
        }
      //  else{
        //     alert("Please enter a correct number")
        // }
    };
}


export default Settings;
