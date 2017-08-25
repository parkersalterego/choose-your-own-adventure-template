// ----------------------------------------------------------------------------
//                                 nav
// ----------------------------------------------------------------------------

var hamMenu = document.querySelector('#ham-menu');
var nav = document.querySelector('#nav-bar');

// var printToP = document.querySelector('.')innerHTML =

hamMenu.addEventListener('click', function() {

  if

    (hamMenu.classList.contains('open')) {
    this.classList.remove('open');
    nav.classList.remove('slide-in');
    nav.classList.add('slide-out');
    document.querySelector('.nav-icon-container').classList.remove('opacity-zero');
  }

  else {

    this.classList.add('open');
    nav.classList.add('slide-in');
    nav.classList.remove('slide-out');
    document.querySelector('.nav-icon-container').classList.add('opacity-zero');

  }
});

// -------------------------------text-input-----------------------------------

var submit = document.querySelector('.submit-button');
var mainParagraph = document.querySelector('.text-container__p-two');
var inputText = document.querySelector('.input-text').value;

let num = 0;
submit.addEventListener('click', function(){
num = num + 1;
console.log(num);
});

//                             decisions

var decisionOne = 'one';
var decisionTwo = 'two';
var decisionThree = 'three';
var decisionFour = 'four';
var decisionArray = [decisionOne, decisionTwo, decisionThree, decisionFour];

//                            choices

let choiceNum = 0;
submit.addEventListener('click', function() {
  choiceNum = choiceNum + 1;
  console.log(choiceNum);
});

var choiceArray = [ choiceArrayOne, choiceArrayTwo, choiceArrayThree, choiceArrayFour];

// choice one
var choiceArrayOne = [oneA, oneB, oneC, oneD];

var oneA = 'string-a';
var oneB = 'string-b';
var oneC = 'string-c';
var oneD = 'string-d';

// choicetwo

var choiceArrayTwo = [twoA, twoB, twoC, twoD];

var twoA = 'string-a';
var twoB = 'string-b';
var twoC = 'string-c';
var twoD = 'string-d';

// choice three

var choiceArrayThree = [threeA, threeB, threeC, threeD];

var threeA = 'string-a';
var threeB = 'string-b';
var threeC = 'string-c';
var threeD = 'string-d';

// choice four

var choiceArrayFour = [fourA, fourB, fourC, fourD];

var fourA = 'string-a';
var fourB = 'string-b';
var fourC = 'string-c';
var fourD = 'string-d';

//---------------------------------Decision-fill--------------------------------

switch(decisionArray[num]) {
  case (decisionArray[num] == 'A' || decisionArray[num] == 'a'):
      mainParagraph.innerHTML = (choiceArray[choiceNum])[0];
    break;

  case (decisionArray[num] == 'B' || decisionArray[num] == 'b'):
      mainParagraph.innerHTML = (choiceArray[choiceNum])[1];
    break;

  case (decisionArray[num] == 'C' || decisionArray[num] == 'c'):
      mainParagraph.innerHTML = (choiceArray[choiceNum])[2];
    break;

  case (decisionArray[num] == 'D' || decisionArray[num] == 'd'):
      mainParagraph.innerHTML = (choiceArray[choiceNum])[3];
    break;
}
