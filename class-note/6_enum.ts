enum Shoes {
    Nike= 10,
    Adidas,
}

enum Shoes2 {
    Nike= '나이키',
    Adidas = '아디다스',
}

const myShoes = Shoes.Nike;
const myShoes2 = Shoes2.Nike;
console.log(myShoes, myShoes2);

function askQuestion(answer: Answer) {
    if(answer === Answer.Yes) {
        console.log('정답입니다.');
    }
    if(answer === Answer.No) {
        console.log('오답입니다.');
    }
}

enum Answer {
    Yes = 'Y',
    No = 'N',
}
askQuestion(Answer.Yes);
// askQuestion('yes');
// askQuestion('예스');
// askQuestion('Y');

function answer() {

}