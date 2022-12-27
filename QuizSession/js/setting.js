export class Setting{
    constructor()
    {
        this.categoryInp = document.getElementById("category");
        this.starBtnInp = document.getElementById("starBtn");
        this.starBtnInp.addEventListener("click" , this.starQuiz.bind(this))
    }
    starQuiz() {
        let category = this.categoryInp.value;
        console.log(category)
    }
}