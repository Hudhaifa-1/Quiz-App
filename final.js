class Final{
    constructor(correctAnswers, totalAmount){
        this.scoreElement = document.querySelector(".score");
        this.againBtn = document.querySelector("#again");
    this.render(correctAnswers,totalAmount);
    this.againBtn.addEventListener("click",this.startAgain)
    };
    startAgain = ()=>{
        location.reload();
    }
    render(correctAnswers, totalAmount){
        
        if(correctAnswers==totalAmount){
            this.scoreElement.innerHTML = `You answered <h2 style="display:inline;font-size:30px;color:green" >${correctAnswers}</h2> out of <h2 style="display:inline;font-size:30px; color:green" >${totalAmount}</h2> correct`;
        }else{
            this.scoreElement.innerHTML = `You answered <h2 style="display:inline;font-size:30px;color:red" >${correctAnswers}</h2> out of <h2 style="display:inline;font-size:30px; color:green" >${totalAmount}</h2> correct`;
        }
    }

}
export default Final;