import Question from "./question.js";
import Final from "./final.js";


class Quiz{
    constructor(quizElement,amount, questions){
        // Catch the vareblis
        this.quizElement= quizElement;
        this.currentElement = document.querySelector('.current');
        this.totalElement = document.querySelector(".total");
        this.finalElement = document.querySelector('.final');
        this.nextBtn = document.querySelector('#next');
        
        // Put the total questions 
        this.totalAmount = amount;
        // Set a counter for the questions
        this.answerdAmount = 0;

        this.questions = this.setQuestions(questions);
        this.nextBtn.addEventListener("click", this.nextQuestion)
        this.renderQuestion();
        //Create a final object
        this.final={};
    }

    // Create an object for every question
    setQuestions(questions){
        return questions.map((questions) =>new Question(questions));
     
    } 
    // To render a question
    renderQuestion(){
       
        this.questions[this.answerdAmount].render()
        this.currentElement.innerHTML = this.answerdAmount+1;
        this.totalElement.innerHTML = this.totalAmount;
    }

    nextQuestion =() =>{
        const checkElement = this.questions[this.answerdAmount].answerElements.filter((ele)=>ele.firstChild.checked);
        if(checkElement.length==0){
            alert("You have to check")
        }else{
            this.questions[this.answerdAmount].answer(checkElement);
            this.answerdAmount++;
            this.answerdAmount < this.totalAmount? this.renderQuestion() : this.endQuizApp();
        }
    }
     

    endQuizApp (){
        this.quizElement.style.display = "none";
        this.finalElement.style.display="block";
        const correct = this.countCorrectAnswer();
        // Full the final object with data 
       this.final= new Final(correct,this.totalAmount)
    }

    countCorrectAnswer () {
        let count =0;
        this.questions.forEach((ele)=>{
            if(ele.isCorrect){
                count++;
                
            }
        });
        return count;
    }
  
}
export default Quiz;