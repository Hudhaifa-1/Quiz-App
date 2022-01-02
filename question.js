class Question{
    constructor(question){
        this.questionElement = document.querySelector("#questions");
        // Catch the label's of answers
        this.answerElements =[
            document.querySelector("#a1"),
            document.querySelector("#a2"),
            document.querySelector("#a3"),
            document.querySelector("#a4"),
        ];
        
        // Set the proprtes of api in varebils
        this.correctAnswer = question.correct_answer;
        this.question = question.question;
        this.isCorrect = false;
        this.answers = [...question.incorrect_answers,this.correctAnswer];

    }
    // To check if the answer was correct or not
    answer(checkedElement){
        this.isCorrect =
        (checkedElement[0].textContent == this.correctAnswer)? true : false;
    }
    // To render the question on the screen
    render(){
        this.questionElement.innerHTML = this.question;
        this.answerElements.forEach((el,index) => {
            el.innerHTML ='<input type="radio" name="radio"><span class="checkmark"></span>' + this.answers[index];

        })
    }
}
export default Question;