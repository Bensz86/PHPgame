document.body.style.backgroundColor = "black";
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////GLOBAL VARIABLES////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
var usedQuestions = new Array();
var CurrentLevel = 0;

var RollTime = 3000
var ShowDiceTime = 3000

var finalNumber
var finalNumber1
var finalNumber2

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
var Player1Answered = false
var Player2Answered = false
var Player3Answered = false
var Player4Answered = false
var Player5Answered = false
var Player6Answered = false
var Player7Answered = false
var Player1AnsweredCorrectly = false
var Player2AnsweredCorrectly = false
var Player3AnsweredCorrectly = false
var Player4AnsweredCorrectly = false
var Player5AnsweredCorrectly = false
var Player6AnsweredCorrectly = false
var Player7AnsweredCorrectly = false
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
//////////////////////////////////////////////////////////////////////
//////////////////////////////INIT GAME//////////////////////////////
////////////////////////////////////////////////////////////////////
function StartGame() {
    if(GameStarted == false){
      Boss1.init()
      //Boss2.init()
      //Boss3.init()
      //Boss4.init()
      //Boss5.init()
      Player1.init()
      Player2.init()
      Player3.init()
      Player4.init()
      Player5.init()
      Player6.init()
      Player7.init()
      GameStarted = true
    }
}
///////////////////////////////////////////////////////////////////////
//////////////////////////////LOAD LEVEL//////////////////////////////
/////////////////////////////////////////////////////////////////////
function LoadLevel(){
  if(eval("Level"+CurrentLevel+"Completed == true")){
    CurrentLevel = CurrentLevel + 1
    document.getElementById("background").src = "img/Levels/Level"+CurrentLevel+".gif"    
    if(Level0Completed){
      StartGame()
    }
  }
  /*if(CurrentLevel == 0){
    if(Level0Completed){
      document.getElementById("background").src = "img/Levels/Level1.gif"
      CurrentLevel = CurrentLevel + 1
      StartGame()
    }
  }else if(CurrentLevel == 1){
    if(Level1Completed){
      document.getElementById("background").src = "img/Levels/Level2.jpg"
      CurrentLevel = CurrentLevel + 1
    }
  }else if(CurrentLevel == 2){
    if(Level2Completed){      
      document.getElementById("background").src = "img/Levels/Garazs.jpg"
      CurrentLevel = CurrentLevel + 1
    }
  }else if(CurrentLevel == 3){
    if(Level3Completed){
      document.getElementById("background").src = "img/Levels/Garazs.jpg"
      CurrentLevel = CurrentLevel + 1
    }
  }else if(CurrentLevel == 4){
    if(Level4Completed){
      document.getElementById("background").src = "img/Levels/Garazs.jpg"
      CurrentLevel = CurrentLevel + 1
    }
  }else if(CurrentLevel == 5){
    if(Level5Completed){
      document.getElementById("background").src = "img/Levels/Garazs.jpg"
      CurrentLevel = CurrentLevel + 1
    }
  }*/
}
////////////////////////////////////////////////////////////////////////
//////////////////////////////START ROUND//////////////////////////////
/////////////////////////////////////////////////////////////////////
function StartRound(){
  if(CurrentLevel != 0){
    if(CurrentLevel==1){
      Boss1.show()
    }else if(CurrentLevel == 2){
      //Boss2.show()
    }else if(CurrentLevel == 3){
      //Boss3.show()
    }else if(CurrentLevel == 4){
      //Boss4.show()
    }else if(CurrentLevel == 5){
      //Boss5.show()
    }
    delay(500).then(() => Player1.show())
    delay(1000).then(() => Player2.show())
    delay(1500).then(() => Player3.show())
    delay(2000).then(() => Player4.show())
    delay(2500).then(() => Player5.show())
    delay(3000).then(() => Player6.show())
    delay(3500).then(() => Player7.show())
    RoundStarted = true
    RoundEnded = false
  }  
}
////////////////////////////////////////////////////////////////////////////
//////////////////////////////SELECT QUESTION//////////////////////////////
//////////////////////////////////////////////////////////////////////////
function QuestionSelector(){
  if(CurrentLevel != 0 & RoundStarted){
    if (QuestionSelected == false){
      SelectedQuestionType = 1
      //SelectedQuestionType = Math.floor(Math.random() * 3) + 1
      SelectQuestion(SelectedQuestionType)
      RepositionQuestion()
      QuestionSelected = true
    }
  }
}
////////////////////////////////////////////////////////////////////////////
//////////////////////////////ANSWER QUESTION//////////////////////////////
//////////////////////////////////////////////////////////////////////////
function Player1GivesAnswer(){
  if (QuestionSelected & Player1Answered == false){
    Player1Answer = document.getElementById("Player1Answer").value
    if(document.getElementById("Player1Answer") && document.getElementById("Player1Answer").value){
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
    Player2Answer = document.getElementById("Player2Answer").value
    if(document.getElementById("Player2Answer") && document.getElementById("Player2Answer").value){
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
    Player3Answer = document.getElementById("Player3Answer").value
    if(document.getElementById("Player3Answer") && document.getElementById("Player3Answer").value){
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
    Player4Answer = document.getElementById("Player4Answer").value
    if(document.getElementById("Player4Answer") && document.getElementById("Player4Answer").value){
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
    Player5Answer = document.getElementById("Player5Answer").value
    if(document.getElementById("Player5Answer") && document.getElementById("Player5Answer").value){
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
    Player6Answer = document.getElementById("Player6Answer").value
    if(document.getElementById("Player6Answer") && document.getElementById("Player6Answer").value){
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
    Player7Answer = document.getElementById("Player7Answer").value
    if(document.getElementById("Player7Answer") && document.getElementById("Player7Answer").value){
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
function CheckQuestionAnswered(){
  if(Player1Answered & Player2Answered & Player3Answered & Player4Answered & Player5Answered & Player6Answered & Player7Answered){
    QuestionAnswered = true
    document.getElementById("QuestionAnswered").hidden = false
    RepositionQuestion()
  }
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////SELECT PLAYER//////////////////////////////
////////////////////////////////////////////////////////////////////////
function SelectPlayer(){
  if (QuestionAnswered){
    document.getElementById("QuestionDIV").hidden = true
    document.getElementById("QuestionAnswered").hidden = true
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
  }
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////ROLL THE DICE//////////////////////////////
////////////////////////////////////////////////////////////////////////
function RollTheDice(){
  if(RoundStarted & QuestionAnswered & PlayerSelected){
      if(SelectedPlayer == 1 & Player1Rolled == false & Player1StartsRoll == false){
        Player1StartsRoll = true
        if(Player1AnsweredCorrectly){
          document.getElementById("double_rolling_dice1").removeAttribute("hidden")
          document.getElementById("double_rolling_dice2").removeAttribute("hidden")
          delay(RollTime).then(() => FinalDoubleDice())
        }else{
          document.getElementById("rolling_dice").removeAttribute("hidden")
          delay(RollTime).then(() => FinalDice())
        }
      }else if(SelectedPlayer == 2 & Player2Rolled == false & Player2StartsRoll == false){
        Player2StartsRoll = true        
        if(Player2AnsweredCorrectly){
          document.getElementById("double_rolling_dice1").removeAttribute("hidden")
          document.getElementById("double_rolling_dice2").removeAttribute("hidden")
          delay(RollTime).then(() => FinalDoubleDice())
        }else{
          document.getElementById("rolling_dice").removeAttribute("hidden")
          delay(RollTime).then(() => FinalDice())
        }
      }else if(SelectedPlayer == 3 & Player3Rolled == false & Player3StartsRoll == false){
        Player3StartsRoll = true        
        if(Player3AnsweredCorrectly){
          document.getElementById("double_rolling_dice1").removeAttribute("hidden")
          document.getElementById("double_rolling_dice2").removeAttribute("hidden")
          delay(RollTime).then(() => FinalDoubleDice())
        }else{
          document.getElementById("rolling_dice").removeAttribute("hidden")
          delay(RollTime).then(() => FinalDice())
        }
      }else if(SelectedPlayer == 4 & Player4Rolled == false & Player4StartsRoll == false){
        Player4StartsRoll = true        
        if(Player4AnsweredCorrectly){
          document.getElementById("double_rolling_dice1").removeAttribute("hidden")
          document.getElementById("double_rolling_dice2").removeAttribute("hidden")
          delay(RollTime).then(() => FinalDoubleDice())
        }else{
          document.getElementById("rolling_dice").removeAttribute("hidden")
          delay(RollTime).then(() => FinalDice())
        }
      }else if(SelectedPlayer == 5 & Player5Rolled == false & Player5StartsRoll == false){
        Player5StartsRoll = true        
        if(Player5AnsweredCorrectly){
          document.getElementById("double_rolling_dice1").removeAttribute("hidden")
          document.getElementById("double_rolling_dice2").removeAttribute("hidden")
          delay(RollTime).then(() => FinalDoubleDice())
        }else{
          document.getElementById("rolling_dice").removeAttribute("hidden")
          delay(RollTime).then(() => FinalDice())
        }
      }else if(SelectedPlayer == 6 & Player6Rolled == false & Player6StartsRoll == false){
        Player6StartsRoll = true        
        if(Player6AnsweredCorrectly){
          document.getElementById("double_rolling_dice1").removeAttribute("hidden")
          document.getElementById("double_rolling_dice2").removeAttribute("hidden")
          delay(RollTime).then(() => FinalDoubleDice())
        }else{
          document.getElementById("rolling_dice").removeAttribute("hidden")
          delay(RollTime).then(() => FinalDice())
        }
      }else if(SelectedPlayer == 7 & Player7Rolled == false & Player7StartsRoll == false){
        Player7StartsRoll = true        
        if(Player7AnsweredCorrectly){
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

    if(finalNumber == 6){
      document.getElementById("dice6").removeAttribute("hidden")
      delay(ShowDiceTime).then(() => document.getElementById("dice6").setAttribute("hidden", "hidden"))
    }
    else if(finalNumber == 5){
      document.getElementById("dice5").removeAttribute("hidden")
      delay(ShowDiceTime).then(() => document.getElementById("dice5").setAttribute("hidden", "hidden"))
    }
    else if(finalNumber == 4){
      document.getElementById("dice4").removeAttribute("hidden")
      delay(ShowDiceTime).then(() => document.getElementById("dice4").setAttribute("hidden", "hidden"))
    }
    else if(finalNumber == 3){
      document.getElementById("dice3").removeAttribute("hidden")
      delay(ShowDiceTime).then(() => document.getElementById("dice3").setAttribute("hidden", "hidden"))
    }
    else if(finalNumber == 2){
      document.getElementById("dice2").removeAttribute("hidden")
      delay(ShowDiceTime).then(() => document.getElementById("dice2").setAttribute("hidden", "hidden"))
    }
    else if(finalNumber == 1){
      document.getElementById("dice1").removeAttribute("hidden")
      delay(ShowDiceTime).then(() => document.getElementById("dice1").setAttribute("hidden", "hidden"))
    }
    if(SelectedPlayer == 1){
      Player1CurrentRoll = finalNumber
      Player1Score = Player1Score + finalNumber
      Player1.UpdateScore()
      Player1Rolled = true
    }else if(SelectedPlayer == 2){
      Player2CurrentRoll = finalNumber
      Player2Score = Player2Score + finalNumber
      Player2.UpdateScore()
      Player2Rolled = true
    }else if(SelectedPlayer == 3){
      Player3CurrentRoll = finalNumber
      Player3Score = Player3Score + finalNumber
      Player3.UpdateScore()
      Player3Rolled = true
    }else if(SelectedPlayer == 4){
      Player4CurrentRoll = finalNumber
      Player4Score = Player4Score + finalNumber
      Player4.UpdateScore()
      Player4Rolled = true
    }else if(SelectedPlayer == 5){
      Player5CurrentRoll = finalNumber
      Player5Score = Player5Score + finalNumber
      Player5.UpdateScore()
      Player5Rolled = true
    }else if(SelectedPlayer == 6){
      Player6CurrentRoll = finalNumber
      Player6Score = Player6Score + finalNumber
      Player6.UpdateScore()
      Player6Rolled = true
    }else if(SelectedPlayer == 7){
      Player7CurrentRoll = finalNumber
      Player7Score = Player7Score + finalNumber
      Player7.UpdateScore()
      Player7Rolled = true
      SelectedPlayer = 1
    }
    
}
function FinalDoubleDice(){
  
  finalNumber1 = Math.floor(Math.random() * 6) + 1
  finalNumber2 = Math.floor(Math.random() * 6) + 1
  document.getElementById("double_rolling_dice1").setAttribute("hidden", "hidden")
  document.getElementById("double_rolling_dice2").setAttribute("hidden", "hidden")

  if(finalNumber1 == 6){
    document.getElementById("double_dice1_6").removeAttribute("hidden")
    delay(ShowDiceTime).then(() => document.getElementById("double_dice1_6").setAttribute("hidden", "hidden"))
  }
  else if(finalNumber1 == 5){
    document.getElementById("double_dice1_5").removeAttribute("hidden")
    delay(ShowDiceTime).then(() => document.getElementById("double_dice1_5").setAttribute("hidden", "hidden"))
  }
  else if(finalNumber1 == 4){
    document.getElementById("double_dice1_4").removeAttribute("hidden")
    delay(ShowDiceTime).then(() => document.getElementById("double_dice1_4").setAttribute("hidden", "hidden"))
  }
  else if(finalNumber1 == 3){
    document.getElementById("double_dice1_3").removeAttribute("hidden")
    delay(ShowDiceTime).then(() => document.getElementById("double_dice1_3").setAttribute("hidden", "hidden"))
  }
  else if(finalNumber1 == 2){
    document.getElementById("double_dice1_2").removeAttribute("hidden")
    delay(ShowDiceTime).then(() => document.getElementById("double_dice1_2").setAttribute("hidden", "hidden"))
  }
  else if(finalNumber1 == 1){
    document.getElementById("double_dice1_1").removeAttribute("hidden")
    delay(ShowDiceTime).then(() => document.getElementById("double_dice1_1").setAttribute("hidden", "hidden"))
  }

  if(finalNumber2 == 6){
    document.getElementById("double_dice2_6").removeAttribute("hidden")
    delay(ShowDiceTime).then(() => document.getElementById("double_dice2_6").setAttribute("hidden", "hidden"))
  }
  else if(finalNumber2 == 5){
    document.getElementById("double_dice2_5").removeAttribute("hidden")
    delay(ShowDiceTime).then(() => document.getElementById("double_dice2_5").setAttribute("hidden", "hidden"))
  }
  else if(finalNumber2 == 4){
    document.getElementById("double_dice2_4").removeAttribute("hidden")
    delay(ShowDiceTime).then(() => document.getElementById("double_dice2_4").setAttribute("hidden", "hidden"))
  }
  else if(finalNumber2 == 3){
    document.getElementById("double_dice2_3").removeAttribute("hidden")
    delay(ShowDiceTime).then(() => document.getElementById("double_dice2_3").setAttribute("hidden", "hidden"))
  }
  else if(finalNumber2 == 2){
    document.getElementById("double_dice2_2").removeAttribute("hidden")
    delay(ShowDiceTime).then(() => document.getElementById("double_dice2_2").setAttribute("hidden", "hidden"))
  }
  else if(finalNumber2 == 1){
    document.getElementById("double_dice2_1").removeAttribute("hidden")
    delay(ShowDiceTime).then(() => document.getElementById("double_dice2_1").setAttribute("hidden", "hidden"))
  }
  if(SelectedPlayer == 1){
    Player1CurrentRoll = finalNumber1 + finalNumber2
    Player1Score = Player1Score + finalNumber1 + finalNumber2
    Player1.UpdateScore()
    Player1Rolled = true
  }else if(SelectedPlayer == 2){
    Player2CurrentRoll = finalNumber1 + finalNumber2
    Player2Score = Player2Score + finalNumber1 + finalNumber2
    Player2.UpdateScore()
    Player2Rolled = true
  }else if(SelectedPlayer == 3){
    Player3CurrentRoll = finalNumber1 + finalNumber2
    Player3Score = Player3Score + finalNumber1 + finalNumber2
    Player3.UpdateScore()
    Player3Rolled = true
  }else if(SelectedPlayer == 4){
    Player4CurrentRoll = finalNumber1 + finalNumber2
    Player4Score = Player4Score + finalNumber1 + finalNumber2
    Player4.UpdateScore()
    Player4Rolled = true
  }else if(SelectedPlayer == 5){
    Player5CurrentRoll = finalNumber1 + finalNumber2
    Player5Score = Player5Score + finalNumber1 + finalNumber2
    Player5.UpdateScore()
    Player5Rolled = true
  }else if(SelectedPlayer == 6){
    Player6CurrentRoll = finalNumber1 + finalNumber2
    Player6Score = Player6Score + finalNumber1 + finalNumber2
    Player6.UpdateScore()
    Player6Rolled = true
  }else if(SelectedPlayer == 7){
    Player7CurrentRoll = finalNumber1 + finalNumber2
    Player7Score = Player7Score + finalNumber1 + finalNumber2
    Player7.UpdateScore()
    Player7Rolled = true
    SelectedPlayer = 1
  }
  
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////PLAYER ATTACK//////////////////////////////
////////////////////////////////////////////////////////////////////////
function PlayerAttack(GivenId){
  eval(GivenId + ".Run()")
  MoveTimer(GivenId)
}

function MovePlayer(GivenId){
  var step=1; // Change this step value
  console.log(GivenId)    
  //var x=(document.getElementById(GivenId).offsetLeft / window.innerWidth) * 100;
  eval("var x=(document.getElementById("+GivenId+").offsetLeft / window.innerWidth) * 100")
  
  if(x < 60){
      document.getElementById(GivenId).style.left= x + step + "%";
  }else if(x >= 60){
      clearTimeout(my_time);
      eval(GivenId + ".Attack()")
      delay(1000).then(() => Boss1.Hurt())
      delay(1200).then(() => ResetPos())
  }
}

function ResetPos(){
  clearTimeout(my_time);
  document.getElementById('Player1').style.top= "40%";
  document.getElementById('Player1').style.left= "10%";  
}

function MoveTimer(GivenId){
  my_time=setTimeout('MoveTimer('+GivenId+')',10);
  MovePlayer(GivenId);
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////END ROUND//////////////////////////////
////////////////////////////////////////////////////////////////////
function EndRound(){
  Boss1.hide()
  //Boss2.hide()
  //Boss3.hide()
  //Boss4.hide()
  //Boss5.hide()
  delay(500).then(() => Player1.hide())
  delay(1000).then(() => Player2.hide())
  delay(1500).then(() => Player3.hide())
  delay(2000).then(() => Player4.hide())
  delay(2500).then(() => Player5.hide())
  delay(3000).then(() => Player6.hide())
  delay(3500).then(() => Player7.hide())
  RoundStarted = false
  RoundEnded = true
}