async function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

document.body.style.backgroundColor = "black";

window.onbeforeunload = function() {
  return "Data will be lost if you leave the page, are you sure?";
};

function ResizeEverything(){
  RepositionQuestion()
  if(RoundStarted){
    for (let i = 1; i < 8; i++) {
      eval("Player"+i+".Resize()")
      eval("Curse"+i+".Resize()")
    }
    for (let y = 1; y < 5; y++) {
      if(document.getElementById("Boss"+y+"")){
        eval("Boss"+y+".Resize()")
      }      
    }
  }  
}
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////GLOBAL VARIABLES////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
var usedQuestions = new Array();
var CurrentLevel = 0;

var RollTime = 1000
var ShowDiceTime = 0

var finalNumber = 1
var finalNumber1 = 1
var finalNumber2 = 1

var Player1Score = 0;
var Player2Score = 0;
var Player3Score = 0;
var Player4Score = 0;
var Player5Score = 0;
var Player6Score = 0;
var Player7Score = 0;
var Player1Answer = 0;
var Player2Answer = 0;
var Player3Answer = 0;
var Player4Answer = 0;
var Player5Answer = 0;
var Player6Answer = 0;
var Player7Answer = 0;
var ZoliAnswer = 0;
var DezsoAnswer = 0;
var Player1Answered = false
var Player2Answered = false
var Player3Answered = false
var Player4Answered = false
var Player5Answered = false
var Player6Answered = false
var Player7Answered = false
var Player1Cursed = false
var Player2Cursed = false
var Player3Cursed = false
var Player4Cursed = false
var Player5Cursed = false
var Player6Cursed = false
var Player7Cursed = false
var ZoliAnswered = false
var DezsoAnswered = false
var Player1AnsweredCorrectly = false
var Player2AnsweredCorrectly = false
var Player3AnsweredCorrectly = false
var Player4AnsweredCorrectly = false
var Player5AnsweredCorrectly = false
var Player6AnsweredCorrectly = false
var Player7AnsweredCorrectly = false
var ZoliAnsweredCorrectly = false
var DezsoAnsweredCorrectly = false
var ZoliBonus = 0
var DezsoBonus = 0
var DoubleBonus = 0
var Player1CurrentRoll = 0;
var Player2CurrentRoll = 0;
var Player3CurrentRoll = 0;
var Player4CurrentRoll = 0;
var Player5CurrentRoll = 0;
var Player6CurrentRoll = 0;
var Player7CurrentRoll = 0;
var Player1StartsRoll = false
var Player2StartsRoll = false
var Player3StartsRoll = false
var Player4StartsRoll = false
var Player5StartsRoll = false
var Player6StartsRoll = false
var Player7StartsRoll = false
var Player1Rolled = false
var Player2Rolled = false
var Player3Rolled = false
var Player4Rolled = false
var Player5Rolled = false
var Player6Rolled = false
var Player7Rolled = false
var PlayerSelected = false

var PlayerIterator = 1

var SelectedBoss = 0
var BossAttacked = false

var GameStarted = false
var RoundStarted = false
var RoundEnded = false

var Level0Completed = true
var Level1Completed = false
var Level2Completed = false
var Level3Completed = false
var Level4Completed = false
var Level5Completed = false

var SelectedQuestionType
var QuestionSelected = false
var SelectedQuestion
var QuestionAnswered = false

var SelectedPlayer = 1

var PlayersArray = new Array()
PlayersArray = [1,2,3,4,5,6,7]

var HowManyCursed = 0

var CursedOnes = new Array()

var FonokChecked = false
var ZoliChecked = false
var DezsoChecked = false

var RoundCounter = 1
var MaximumRound = 1

var Player1Distance = 60
var Player2Distance = 60
var Player3Distance = 60
var Player4Distance = 50
var Player5Distance = 50
var Player6Distance = 50
var Player7Distance = 50

var TimerInterrupted = false
//////////////////////////////////////////////////////////////////////
//////////////////////////////INIT GAME//////////////////////////////
////////////////////////////////////////////////////////////////////
function StartGame() {
    if(GameStarted == false){
      //eval("Boss"+SelectedBoss+".init()")
      Player3.init()
      Player2.init()
      Player1.init()
      Player6.init()
      Player7.init()
      Player5.init()
      Player4.init()      
      Curse1.init()
      Curse2.init()
      Curse3.init()
      Curse4.init()
      Curse5.init()
      Curse6.init()
      Curse7.init()
      GameStarted = true
    }
}
///////////////////////////////////////////////////////////////////////
//////////////////////////////LOAD LEVEL//////////////////////////////
/////////////////////////////////////////////////////////////////////
function LoadLevel(){
  if(CurrentLevel < 5 & eval("Level"+CurrentLevel+"Completed == true")){
    CurrentLevel = CurrentLevel + 1
    SelectedBoss = SelectedBoss + 1
    document.getElementById("background").src = "static/img/Levels/Level"+CurrentLevel+".gif"
    RoundEnded = false
    if(Level0Completed){
      StartGame()
    }
  }
}
////////////////////////////////////////////////////////////////////////
//////////////////////////////START ROUND//////////////////////////////
/////////////////////////////////////////////////////////////////////
function StartRound(){
  if(CurrentLevel != 0 & RoundEnded == false){
    if(RoundCounter == 1){
      eval("Boss"+SelectedBoss+".init()")
      eval("Boss"+SelectedBoss+".show()")
    }
    document.getElementById("Rounds").textContent = RoundCounter + ". KÖR"
    document.getElementById("Rounds").hidden = false
    RepositionQuestion()
    delay(500).then(() => Player1.show())
    delay(1000).then(() => Player2.show())
    delay(1500).then(() => Player3.show())
    delay(2000).then(() => Player4.show())
    delay(2500).then(() => Player5.show())
    delay(3000).then(() => Player6.show())
    delay(3500).then(() => Player7.show())
    RoundStarted = true
    QuestionSelected = false
    QuestionAnswered = false
    PlayerIterator = 1
    SelectedPlayer = 1
    Player1Answered = false
    Player2Answered = false
    Player3Answered = false
    Player4Answered = false
    Player5Answered = false
    Player6Answered = false
    Player7Answered = false
    Player1Cursed = false
    Player2Cursed = false
    Player3Cursed = false
    Player4Cursed = false
    Player5Cursed = false
    Player6Cursed = false
    Player7Cursed = false
    for (let i = 1; i < 8; i++) {
      document.getElementById("Curse"+i+"").hidden = true
    }
    ZoliAnswered = false
    DezsoAnswered = false
    Player1AnsweredCorrectly = false
    Player2AnsweredCorrectly = false
    Player3AnsweredCorrectly = false
    Player4AnsweredCorrectly = false
    Player5AnsweredCorrectly = false
    Player6AnsweredCorrectly = false
    Player7AnsweredCorrectly = false
    ZoliAnsweredCorrectly = false
    DezsoAnsweredCorrectly = false
    Player1Rolled = false
    Player2Rolled = false
    Player3Rolled = false
    Player4Rolled = false
    Player5Rolled = false
    Player6Rolled = false
    Player7Rolled = false
    Player1StartsRoll = false
    Player2StartsRoll = false
    Player3StartsRoll = false
    Player4StartsRoll = false
    Player5StartsRoll = false
    Player6StartsRoll = false
    Player7StartsRoll = false
    BossAttacked = false
    PlayerSelected = false
    FonokChecked = false
    ZoliChecked = false
    DezsoChecked = false
    ZoliBonus = 0
    DezsoBonus = 0
    DoubleBonus = 0
    
    TimerInterrupted = false

    document.getElementById("Zoli").src = "static/img/Zoli_Kard_Lent.png"
    document.getElementById("Dezso").src = "static/img/Dezso_Bot_Lent.png"
    document.getElementById("Zoli").hidden = true
    document.getElementById("Dezso").hidden = true
    document.getElementById("Boom").src = "static/img/Blessing.gif"
    document.getElementById("Boom").hidden = true
    
    for (let i = 0; i < 3; i++) {
      document.getElementById("Option"+i+"TEXT").style.border = "none";
      document.getElementById("Option"+i+"TEXT").style.color = "black";
      document.getElementById("Option"+i+"TEXT").style.fontSize = "40px";
    }
  }  
}
////////////////////////////////////////////////////////////////////////////
//////////////////////////////SHOW FONOKOK//////////////////////////////
//////////////////////////////////////////////////////////////////////////
function ShowFonokok(){
  if(CurrentLevel == 1){
    document.getElementById("background").hidden = true
    for (let i = 1; i < 8; i++) {
        eval("Player"+i+".hide()")
    }
    Boss1.hide()
    document.getElementById("ZoliDezso").hidden = false
    document.getElementById("Boom").src = "static/img/Blessing.gif"
    delay(6000).then(() => document.getElementById("Boom").hidden = false)
    delay(8100).then(() => document.getElementById("Boom").hidden = true)
    delay(7200).then(() => document.getElementById("ZoliDezso").src = "static/img/ZoliDezso_transformed.png")
    delay(9000).then(() => document.getElementById("ZoliDezso").src = "static/img/ZoliDezso_transformed_labeled.png")
  }
}

function HideFonokok(){
  if(CurrentLevel == 1){
    document.getElementById("background").hidden = false
    for (let i = 1; i < 8; i++) {
        eval("Player"+i+".show()")
    }
    Boss1.show()
    document.getElementById("Boom").src = "static/img/Blessing.gif"
    document.getElementById("Boom").hidden = true
    document.getElementById("ZoliDezso").hidden = true
  }
}
////////////////////////////////////////////////////////////////////////
//////////////////////////////BOSS ATTACK//////////////////////////////
//////////////////////////////////////////////////////////////////////
function BossAttack(){
  document.getElementById("Rounds").hidden = true
  if(RoundStarted & RoundEnded == false & QuestionAnswered == false & PlayerSelected == false & BossAttacked == false){
      eval("Boss"+SelectedBoss+".Run()")
      eval("MoveBossTimer(Boss"+SelectedBoss+")")
      BossAttacked = true
      delay(4000).then(() => CursePlayers())
  }
}

function MoveBoss(){
    var step=-1;
    var x=(document.getElementById("Boss"+SelectedBoss+"").offsetLeft / window.innerWidth) * 100
    
    if(x > 10){
        document.getElementById("Boss"+SelectedBoss+"").style.left= x + step + "%";
    }else if(x <= 10){
        clearTimeout(my_time);
        eval("Boss"+SelectedBoss + ".Attack()")

        delay(eval("Boss"+SelectedBoss+".GetAttackLength()")).then(() => HurtPLayers())
        function HurtPLayers(){
          for (let i = 1; i < 8; i++) {
            eval("Player"+i+".Hurt()")
          }
        }
        delay(1400).then(() => eval("ResetBossPos(Boss"+SelectedBoss+")"))
    }
}

function ResetBossPos(){
    clearTimeout(my_time);
    document.getElementById("Boss"+SelectedBoss+"").style.top= eval("Boss"+SelectedBoss+".top")
    document.getElementById("Boss"+SelectedBoss+"").style.left= eval("Boss"+SelectedBoss+".left")
    document.getElementById("Boss"+SelectedBoss+"").style.zIndex = "1";
}

function MoveBossTimer(){
    eval("my_time=setTimeout('MoveBossTimer(Boss"+SelectedBoss+")',40)")
    eval("MoveBoss(Boss"+SelectedBoss+")")
}

function CursePlayers(){

  HowManyCursed = Math.floor(Math.random() * 7) + 1

  getRandom(PlayersArray,HowManyCursed)

  CursedOnes = getRandom(PlayersArray,HowManyCursed)

  CursedOnes.forEach(ActivateCurse);

}

function ActivateCurse(item) {
  eval("Curse"+item+".show()")
  //eval("Player"+item+".Cursed = true")
  //eval("console.log(Player"+item+".Cursed)")
  if(item == 1){
    Player1Cursed = true
  }
  if(item == 2){
    Player2Cursed = true
  }
  if(item == 3){
    Player3Cursed = true
  }
  if(item == 4){
    Player4Cursed = true
  }
  if(item == 5){
    Player5Cursed = true
  }
  if(item == 6){
    Player6Cursed = true
  }
  if(item == 7){
    Player7Cursed = true
  }
}

function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
////////////////////////////////////////////////////////////////////////////
//////////////////////////////SELECT QUESTION//////////////////////////////
//////////////////////////////////////////////////////////////////////////
function QuestionSelector(){
  if(CurrentLevel != 0 & RoundStarted & BossAttacked){
    if (QuestionSelected == false){
      SelectedQuestionType = 1
      //SelectedQuestionType = Math.floor(Math.random() * 3) + 1
      SelectQuestion(SelectedQuestionType)
      RepositionQuestion()
      QuestionSelected = true
      document.getElementById("TypeinAnswers").hidden = false
      document.getElementById("Player1Answer").hidden = false
      document.getElementById("Player2Answer").hidden = false
      document.getElementById("Player3Answer").hidden = false
      document.getElementById("Player4Answer").hidden = false
      document.getElementById("Player5Answer").hidden = false
      document.getElementById("Player6Answer").hidden = false
      document.getElementById("Player7Answer").hidden = false
      document.getElementById("ZoliAnswer").hidden = false
      document.getElementById("DezsoAnswer").hidden = false
    }
  }
}
////////////////////////////////////////////////////////////////////////////
//////////////////////////////ANSWER QUESTION//////////////////////////////
//////////////////////////////////////////////////////////////////////////
function Player1GivesAnswer(){
  if (QuestionSelected & Player1Answered == false){
    Player1Answer = document.getElementById("Player1TypeinAnswer").value
    if(document.getElementById("Player1TypeinAnswer") && document.getElementById("Player1TypeinAnswer").value){
      document.getElementById("Player1Answer").hidden = true
      if(SelectedQuestionType == 1){
        if(Player1Answer == CorrectAnswers[selectedQuestion]){
          Player1AnsweredCorrectly = true
        }
      }
      Player1Answered = true
      CheckQuestionAnswered()
    }else{
      console.log("PLayer1 nem adott választ")
    }
  }
}
function Player2GivesAnswer(){
  if (QuestionSelected & Player2Answered == false){
    Player2Answer = document.getElementById("Player2TypeinAnswer").value
    if(document.getElementById("Player2TypeinAnswer") && document.getElementById("Player2TypeinAnswer").value){
      document.getElementById("Player2Answer").hidden = true
      if(SelectedQuestionType == 1){
        if(Player2Answer == CorrectAnswers[selectedQuestion]){
          Player2AnsweredCorrectly = true
        }
      }
      Player2Answered = true
      CheckQuestionAnswered()
    }else{
      console.log("PLayer2 nem adott választ")
    }
  }
}
function Player3GivesAnswer(){
  if (QuestionSelected & Player3Answered == false){
    Player3Answer = document.getElementById("Player3TypeinAnswer").value
    if(document.getElementById("Player3TypeinAnswer") && document.getElementById("Player3TypeinAnswer").value){
      document.getElementById("Player3Answer").hidden = true
      if(SelectedQuestionType == 1){
        if(Player3Answer == CorrectAnswers[selectedQuestion]){
          Player3AnsweredCorrectly = true
        }
      }
      Player3Answered = true
      CheckQuestionAnswered()
    }else{
      console.log("PLayer3 nem adott választ")
    }
  }
}
function Player4GivesAnswer(){
  if (QuestionSelected & Player4Answered == false){
    Player4Answer = document.getElementById("Player4TypeinAnswer").value
    if(document.getElementById("Player4TypeinAnswer") && document.getElementById("Player4TypeinAnswer").value){
      document.getElementById("Player4Answer").hidden = true
      if(SelectedQuestionType == 1){
        if(Player4Answer == CorrectAnswers[selectedQuestion]){
          Player4AnsweredCorrectly = true
        }
      }
      Player4Answered = true
      CheckQuestionAnswered()
    }else{
      console.log("PLayer4 nem adott választ")
    }
  }
}
function Player5GivesAnswer(){
  if (QuestionSelected & Player5Answered == false){
    Player5Answer = document.getElementById("Player5TypeinAnswer").value
    if(document.getElementById("Player5TypeinAnswer") && document.getElementById("Player5TypeinAnswer").value){
      document.getElementById("Player5Answer").hidden = true
      if(SelectedQuestionType == 1){
        if(Player5Answer == CorrectAnswers[selectedQuestion]){
          Player5AnsweredCorrectly = true
        }
      }
      Player5Answered = true
      CheckQuestionAnswered()
    }else{
      console.log("PLayer5 nem adott választ")
    }
  }
}
function Player6GivesAnswer(){
  if (QuestionSelected & Player6Answered == false){
    Player6Answer = document.getElementById("Player6TypeinAnswer").value
    if(document.getElementById("Player6TypeinAnswer") && document.getElementById("Player6TypeinAnswer").value){
      document.getElementById("Player6Answer").hidden = true
      if(SelectedQuestionType == 1){
        if(Player6Answer == CorrectAnswers[selectedQuestion]){
          Player6AnsweredCorrectly = true
        }
      }
      Player6Answered = true
      CheckQuestionAnswered()
    }else{
      console.log("PLayer6 nem adott választ")
    }
  }
}
function Player7GivesAnswer(){
  if (QuestionSelected & Player7Answered == false){
    Player7Answer = document.getElementById("Player7TypeinAnswer").value
    if(document.getElementById("Player7TypeinAnswer") && document.getElementById("Player7TypeinAnswer").value){
      document.getElementById("Player7Answer").hidden = true
      if(SelectedQuestionType == 1){
        if(Player7Answer == CorrectAnswers[selectedQuestion]){
          Player7AnsweredCorrectly = true
        }
      }
      Player7Answered = true
      CheckQuestionAnswered()
    }else{
      console.log("PLayer7 nem adott választ")
    }
  }
}
function ZoliGivesAnswer(){
  if (QuestionSelected & ZoliAnswered == false){
    ZoliAnswer = document.getElementById("ZoliTypeinAnswer").value
    if(document.getElementById("ZoliTypeinAnswer") && document.getElementById("ZoliTypeinAnswer").value){
      document.getElementById("ZoliAnswer").hidden = true
      if(SelectedQuestionType == 1){
        if(ZoliAnswer == CorrectAnswers[selectedQuestion]){
          ZoliAnsweredCorrectly = true
        }
      }
      ZoliAnswered = true
      CheckQuestionAnswered()
    }else{
      console.log("Zoli nem adott választ")
    }
  }
}
function DezsoGivesAnswer(){
  if (QuestionSelected & DezsoAnswered == false){
    DezsoAnswer = document.getElementById("DezsoTypeinAnswer").value
    if(document.getElementById("DezsoTypeinAnswer") && document.getElementById("DezsoTypeinAnswer").value){
      document.getElementById("DezsoAnswer").hidden = true
      if(SelectedQuestionType == 1){
        if(DezsoAnswer == CorrectAnswers[selectedQuestion]){
          DezsoAnsweredCorrectly = true
        }
      }
      DezsoAnswered = true
      CheckQuestionAnswered()
    }else{
      console.log("Dezso nem adott választ")
    }
  }
}
function CheckQuestionAnswered(){
  if(Player1Answered & Player2Answered & Player3Answered & Player4Answered & Player5Answered & Player6Answered & Player7Answered & ZoliAnswered & DezsoAnswered){    
    document.getElementById("QuestionAnswered").hidden = false
    RepositionQuestion()
    document.getElementById("Counter").hidden = true
    TimerInterrupted = true
  }
}

function StartTimer(){
  if(QuestionSelected){
    document.getElementById("Counter").hidden = false
    RepositionQuestion()
    delay(30000).then(() => document.getElementById("Counter").hidden = true)
    delay(30000).then(() => EndAnswering())

    function EndAnswering(){
      if(TimerInterrupted == false){
        for (let i = 1; i < 8; i++) {
          if(eval("Player"+i+"Answered == false")){
            eval("Player"+i+"Answer = -1")
            eval("Player"+i+"Answered = true")
            eval("Player"+i+"AnsweredCorrectly = false")        
            document.getElementById("Player"+i+"Answer").hidden = true
          }
        }
        if(DezsoAnswered == false){
          DezsoAnswer = -1
          DezsoAnsweredCorrectly = false
          DezsoAnswered = true
          document.getElementById("DezsoAnswer").hidden = true
        }

        if(ZoliAnswered == false){
          ZoliAnswer = -1
          ZoliAnsweredCorrectly = false
          ZoliAnswered = true
          document.getElementById("ZoliAnswer").hidden = true
        }

        document.getElementById("QuestionAnswered").hidden = false
        RepositionQuestion()
      }
    }
  }
}
function CheckQuestion(){
  for (let i = 0; i < 3; i++) {
    if(i == CorrectAnswers[selectedQuestion]){
      document.getElementById("Option"+i+"TEXT").style.border = "solid";
      document.getElementById("Option"+i+"TEXT").style.color = "red";
    }else{
      document.getElementById("Option"+i+"TEXT").style.fontSize = "10px";
    }
  }
  QuestionAnswered = true
}
/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////LIFT CURSE & GIVE BONUES//////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
function CheckZoli(){
  if(QuestionAnswered){
    document.getElementById("QuestionDIV").hidden = true
    document.getElementById("QuestionAnswered").hidden = true

    if(ZoliAnsweredCorrectly){
      document.getElementById("Zoli").hidden = false
      delay(5000).then(() => document.getElementById("Zoli").src = "static/img/Zoli_Kard_Fent.png")
      ZoliBonus = 3
      delay(5100).then(() => document.getElementById("ZoliBonus").hidden = false)
    }else{
      document.getElementById("Tumbleweed").hidden = false
      delay(3000).then(() => document.getElementById("Tumbleweed").hidden = true)
    }
    ZoliChecked = true
  }
}
function CheckDezso(){
  if(QuestionAnswered & ZoliChecked){
    document.getElementById("Zoli").hidden = true
    document.getElementById("ZoliBonus").hidden = true

    if(DezsoAnsweredCorrectly){
      document.getElementById("Dezso").hidden = false
      delay(5000).then(() => document.getElementById("Dezso").src = "static/img/Dezso_Bot_Fent.png")
      DezsoBonus = 3
      delay(5100).then(() => document.getElementById("DezsoBonus").hidden = false)
    }else{
      document.getElementById("Tumbleweed").hidden = false
      delay(3000).then(() => document.getElementById("Tumbleweed").hidden = true)
    }
    DezsoChecked = true
  }
}
function CheckDezsoAndZoli(){
  if(QuestionAnswered & ZoliChecked & DezsoChecked){
    document.getElementById("Dezso").hidden = true
    document.getElementById("DezsoBonus").hidden = true

    if(ZoliAnsweredCorrectly & DezsoAnsweredCorrectly){
      document.getElementById("Boom").hidden = false
      delay(2100).then(() => document.getElementById("Boom").hidden = true)
      delay(1500).then(() => document.getElementById("DoubleBlessing").hidden = false)

      Player1Cursed = false
      Player2Cursed = false
      Player3Cursed = false
      Player4Cursed = false
      Player5Cursed = false
      Player6Cursed = false
      Player7Cursed = false
      DoubleBonus = 6
      
      for (let i = 1; i < 8; i++) {
        document.getElementById("Curse"+i+"").hidden = true
      }
    }

    if(ZoliChecked & DezsoChecked){
      FonokChecked = true
    }
  }
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////SELECT PLAYER//////////////////////////////
////////////////////////////////////////////////////////////////////////
function SelectPlayer(){
  if (QuestionAnswered & FonokChecked){
    document.getElementById("DoubleBlessing").hidden = true
    document.getElementById("dice"+finalNumber+"").setAttribute("hidden", "hidden")
    document.getElementById("double_dice1_"+finalNumber1+"").setAttribute("hidden", "hidden")
    document.getElementById("double_dice2_"+finalNumber2+"").setAttribute("hidden", "hidden")    

    if(SelectedPlayer == 1){
      document.getElementById("Score").textContent = "ÖSSZPONTSZÁM: " + Player1Score
      document.getElementById("CurrentRoll").textContent = "AKTUÁLIS DOBÁS: 0"
      Player1.Highlight()
    }
    if(SelectedPlayer == 1){
      document.getElementById("Score").textContent = "ÖSSZPONTSZÁM: " + Player1Score
      document.getElementById("CurrentRoll").textContent = "AKTUÁLIS DOBÁS: 0"
      Player1.Highlight()
    }
    if(Player1Rolled == true){
      document.getElementById("Score").textContent = "ÖSSZPONTSZÁM: " + Player2Score
      document.getElementById("CurrentRoll").textContent = "AKTUÁLIS DOBÁS: 0"
      SelectedPlayer = 2
      Player2.Highlight()
    }
    if(Player2Rolled == true){
      document.getElementById("Score").textContent = "ÖSSZPONTSZÁM: " + Player3Score
      document.getElementById("CurrentRoll").textContent = "AKTUÁLIS DOBÁS: 0"
      SelectedPlayer = 3
      Player3.Highlight()
    }
    if(Player3Rolled == true){
      document.getElementById("Score").textContent = "ÖSSZPONTSZÁM: " + Player4Score
      document.getElementById("CurrentRoll").textContent = "AKTUÁLIS DOBÁS: 0"
      SelectedPlayer = 4
      Player4.Highlight()
    }
    if(Player4Rolled == true){
      document.getElementById("Score").textContent = "ÖSSZPONTSZÁM: " + Player5Score
      document.getElementById("CurrentRoll").textContent = "AKTUÁLIS DOBÁS: 0"
      SelectedPlayer = 5
      Player5.Highlight()
    }
    if(Player5Rolled == true){
      document.getElementById("Score").textContent = "ÖSSZPONTSZÁM: " + Player6Score
      document.getElementById("CurrentRoll").textContent = "AKTUÁLIS DOBÁS: 0"
      SelectedPlayer = 6
      Player6.Highlight()      
    }
    if(Player6Rolled == true){
      document.getElementById("Score").textContent = "ÖSSZPONTSZÁM: " + Player7Score
      document.getElementById("CurrentRoll").textContent = "AKTUÁLIS DOBÁS: 0"
      SelectedPlayer = 7
      Player7.Highlight()
    }
    if(Player7Rolled == true){
      Player7.RemoveHighlight()
    }
    PlayerSelected = true
    document.getElementById("GoodAnswer").src = "static/img/GoodAnswer.png"
    document.getElementById("GoodAnswer").hidden = true
    document.getElementById("BadAnswer").hidden = true
    document.getElementById("CursePortrait").hidden = true
    document.getElementById("DezsoPortrait").hidden = true
    document.getElementById("ZoliPortrait").hidden = true
    document.getElementById("DoubleExtraPortrait").hidden = true

    if(eval("Player"+SelectedPlayer+"AnsweredCorrectly")){
      document.getElementById("GoodAnswer").hidden = false
    }else if(eval("Player"+SelectedPlayer+"AnsweredCorrectly == false")){
      document.getElementById("BadAnswer").hidden = false
    }

    if(eval("Player"+SelectedPlayer+"Cursed")){
      document.getElementById("CursePortrait").hidden = false
      if(eval("Player"+SelectedPlayer+"AnsweredCorrectly")){
        document.getElementById("GoodAnswer").src = "static/img/GoodAnswerButNO.png"
        document.getElementById("GoodAnswer").hidden = false
      }
    }
    
    if(DezsoAnsweredCorrectly){
      document.getElementById("DezsoPortrait").hidden = false
    }

    if(ZoliAnsweredCorrectly){
      document.getElementById("ZoliPortrait").hidden = false
    }

    if(DezsoAnsweredCorrectly & ZoliAnsweredCorrectly){
      document.getElementById("DoubleExtraPortrait").hidden = false
    }
  }
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////ROLL THE DICE//////////////////////////////
////////////////////////////////////////////////////////////////////////
function RollTheDice(){
  if(RoundStarted & QuestionAnswered & PlayerSelected){
    if(eval("Player"+SelectedPlayer+"Rolled == false & Player"+SelectedPlayer+"StartsRoll == false")){
      eval("Player"+SelectedPlayer+"StartsRoll = true")
      if(eval("Player"+SelectedPlayer+"AnsweredCorrectly") & eval("Player"+SelectedPlayer+"Cursed == false")){
        document.getElementById("double_rolling_dice1").removeAttribute("hidden")
        document.getElementById("double_rolling_dice2").removeAttribute("hidden")
        delay(RollTime).then(() => FinalDoubleDice())
      }else{
        document.getElementById("rolling_dice").removeAttribute("hidden")
        delay(RollTime).then(() => FinalDice())
      }
    }
  }
}
function FinalDice(){
    
    finalNumber = Math.floor(Math.random() * 6) + 1
    document.getElementById("rolling_dice").setAttribute("hidden", "hidden")
    
    document.getElementById("dice"+finalNumber+"").removeAttribute("hidden")
    delay(ShowDiceTime).then(() => ShowStats())
    
    function ShowStats(){
      //document.getElementById("dice"+finalNumber+"").setAttribute("hidden", "hidden")
      eval("Player"+SelectedPlayer+"CurrentRoll = finalNumber + DezsoBonus + ZoliBonus + DoubleBonus")
      eval("Player"+SelectedPlayer+"Score = Player"+SelectedPlayer+"Score + finalNumber + DezsoBonus + ZoliBonus + DoubleBonus")
      eval("Player"+SelectedPlayer+".UpdateScore()")
      eval("Player"+SelectedPlayer+"Rolled = true")
      
      if(SelectedPlayer == 7){
        PlayerSelected = false
      }
      //PlayerAttack()
    }

}
function FinalDoubleDice(){
  
  finalNumber1 = Math.floor(Math.random() * 6) + 1
  finalNumber2 = Math.floor(Math.random() * 6) + 1
  document.getElementById("double_rolling_dice1").setAttribute("hidden", "hidden")
  document.getElementById("double_rolling_dice2").setAttribute("hidden", "hidden")

  document.getElementById("double_dice1_"+finalNumber1+"").removeAttribute("hidden")
  //delay(ShowDiceTime).then(() => document.getElementById("double_dice1_"+finalNumber1+"").setAttribute("hidden", "hidden"))

  document.getElementById("double_dice2_"+finalNumber2+"").removeAttribute("hidden")
  delay(ShowDiceTime).then(() => ShowStats())

  function ShowStats(){
    //document.getElementById("double_dice2_"+finalNumber2+"").setAttribute("hidden", "hidden")
    eval("Player"+SelectedPlayer+"CurrentRoll = finalNumber1 + finalNumber2 + DezsoBonus + ZoliBonus + DoubleBonus")
    eval("Player"+SelectedPlayer+"Score = Player"+SelectedPlayer+"Score + finalNumber1 + finalNumber2 + DezsoBonus + ZoliBonus + DoubleBonus")
    eval("Player"+SelectedPlayer+".UpdateScore()")
    eval("Player"+SelectedPlayer+"Rolled = true")
    if(SelectedPlayer == 7){
      PlayerSelected = false    
    }
    //PlayerAttack()
  }
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////PLAYER ATTACK//////////////////////////////
////////////////////////////////////////////////////////////////////////
function PlayerAttack(){  
  if(RoundStarted & RoundEnded == false & QuestionAnswered & Player7Rolled){
    if(PlayerIterator < 8){
      eval("Player"+PlayerIterator +".Run()")
      eval("MoveTimer(Player"+PlayerIterator+")")
      delay(2200).then(() => PlayerAttack())
    }
    if(PlayerIterator == 7){
      delay(2500).then(() => Player7.RemoveHighlight())
      if(RoundCounter == MaximumRound){
        delay(2600).then(() => eval("Boss"+SelectedBoss+".Death()"))
      }
      RoundEnded = true
      RoundStarted = false
    }
  }
}

function MovePlayer(){
  if(PlayerIterator < 8){
    var step=1;
    var x=(document.getElementById("Player"+PlayerIterator+"").offsetLeft / window.innerWidth) * 100
    
    if(x < eval("Player"+PlayerIterator+"Distance")){
        document.getElementById("Player"+PlayerIterator+"").style.left= x + step + "%";
    }else if(x >= eval("Player"+PlayerIterator+"Distance")){
        clearTimeout(my_time);
        eval("Player"+PlayerIterator + ".Attack()")
        delay(1000).then(() => eval("Boss"+SelectedBoss+".Hurt()"))
        delay(1100).then(()=> ShowDamage())
        function ShowDamage(){
          document.getElementById("DamageNumber").hidden = false
          document.getElementById("DamageNumber").textContent = eval("Player"+PlayerIterator+"CurrentRoll")
          delay(500).then(()=> document.getElementById("DamageNumber").hidden = true)
        }
        delay(1200).then(() => eval("ResetPos(Player"+PlayerIterator+")"))
    }
  }
}

function ResetPos(){
  if(PlayerIterator < 8){
    clearTimeout(my_time);
    document.getElementById("Player"+PlayerIterator+"").style.top= eval("Player"+PlayerIterator+".top");
    document.getElementById("Player"+PlayerIterator+"").style.left= eval("Player"+PlayerIterator+".left");
    PlayerIterator = PlayerIterator + 1
  }
}

function MoveTimer(){
  if(PlayerIterator < 8){
    eval("my_time=setTimeout('MoveTimer(Player"+PlayerIterator+")',10)")
    eval("MovePlayer(Player"+PlayerIterator+")");
  }
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////END ROUND//////////////////////////////
////////////////////////////////////////////////////////////////////
function EndRound(){
  if(RoundEnded){
    if(RoundCounter == MaximumRound){
      RoundCounter = 1
      eval("Level"+CurrentLevel+"Completed = true")
      eval("Boss"+SelectedBoss+".remove()")
      Curse1.hide()
      Curse2.hide()
      Curse3.hide()
      Curse4.hide()
      Curse5.hide()
      Curse6.hide()
      Curse7.hide()
      delay(500).then(() => Player1.hide())
      delay(1000).then(() => Player2.hide())
      delay(1500).then(() => Player3.hide())
      delay(2000).then(() => Player4.hide())
      delay(2500).then(() => Player5.hide())
      delay(3000).then(() => Player6.hide())
      delay(3500).then(() => Player7.hide())
    }else{
      RoundEnded = false
      RoundCounter = RoundCounter + 1
    }
  }
}