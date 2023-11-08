function RepositionQuestion(){
    document.getElementById("QuestionDIV").style.left = (window.innerWidth/2) - (document.getElementById("QuestionDIV").offsetWidth/2) + "px"
    document.getElementById("QuestionAnswered").style.left = (window.innerWidth/2) - (document.getElementById("QuestionAnswered").offsetWidth/2) + "px"
    document.getElementById("Rounds").style.left = (window.innerWidth/2) - (document.getElementById("Rounds").offsetWidth/2) + "px"
    document.getElementById("Counter").style.left = (window.innerWidth/2) - (document.getElementById("Counter").offsetWidth/2) + "px"
  }

const Questions = [
    "Hány évig tartott a 100 éves háború?",
    "Mi Vasvári Zoltán kutyájának a neve?",
    "Hány DataExpertes parkolóhely van lent a garázsban?",
    "Melyik nem költöző madár?",
    "A tavaszi napéjegyenlőségkor ...",
    "Mikor volt a kenyérmezei csata?",
    "Ki volt a kalapos király?",
    "Mi volt Szombahely ókori latin neve?",
    "Ki van az amerikai 100 dolláros bankjegyen?",
    "Mikor lesz Magyarországon legközelebb teljes napfogyatkozás?",
    "Melyik amerikai színésznőről neveztek el kisbolygót?",
    "Hány csillag alkotja a Göncölszekeret?",
    "Hány billió kilométer 1 fényév?",
    "Mit nevezünk Kék Holdnak?",
    "Mit jelent magyarul a Dies diem docet-latin közmondás?",
    "Melyik költő verse a Héja-nász az avaron?",
    "Hány kötetből áll a Harry Potter?",
    "Ki volt Ecthelion fia, A Gyűrűk Urában?",
    "Ki írta az Énekek éneke c. verset?",
    "Mi volt a végeredménye a Magyar-Ausztria mérkőzésnek a 2016-os foci EB-n?",
    "Maradona hányas mezt viselt?",
    "Hány fős csapatok játszanak a vízilabdában?",
    "Milyen származású Zinédine Zidane labdarúgó?",
    "Mennyi a játékideje a rögbinek?",
    "A csigák melyik törzsbe tartoznak?",
    "Melyik ország a világ legnagyobb banánexportőre?",
    "Mi a gyurgyalag másik elnevezése?",
    "Hol található az ékcsont?"
];
const Answers = [
    ["99","100","116"],
    ["Rambo","Terminátor","Zolcsi"],
    ["20","14","10"],
    ["daru","mezei veréb", "gólya"],
    ["a nappalok rövidebbek","az éjszakák hosszabbak", "a nappalok és éjszakák egyforma hosszúak"],
    ["1479. október 13-án", "1467. novenber 5-én", "1456. március 18-án"],
    ["II. József", "I. József", "IV. Károly"],
    ["Solva", "Arrabona", "Savaria"],
    ["Benjamin Franklin", "Abraham Lincoln", "George Washington"],
    ["2089.09.21","2091.09.11","2081.09.03"],
    ["Jodie Foster", "Natalie Portman", "Meryl Streep"],
    ["hét", "nyolc", "tíz"],
    ["15,6", "9,4", "87,9"],
    ["egy adott hónapban háromszor van telihold", "egy adott hónapban kétszer van telihold", "egy adott hónapban nincs telihold"],
    ["Nap napot tanít", "Pap papot tanít", "Amí élek, remélek"],
    ["József Attila", "Arany János", "Ady Endre"],
    ["hét", "nyolc", "három"],
    ["Rohan királya","Gondor helytartója","A hobbitok vezére"],
    ["Csokonai Vizéz Mihály", "Kosztolányi Dezső", "Balassi Bálint"],
    ["2-0", "1-0", "1-1"],
    ["12-es", "11-es", "10-es"],
    ["12-12 fős", "10-10 fős", "7-7 fős"],
    ["francia", "algériai", "amerikai"],
    ["2x45 perc", "2x40 perc", "2x25 perc"],
    ["puhatestűek", "ízeltlábúak", "gerinchúrosok"],
    ["Peru", "Ecuador", "Kongó"],
    ["királymadár", "méhészmadár", "tüzesmadár"],
    ["alsó végtagon", "fülben", "agykoponyában"]
];
const CorrectAnswers = [
    2,
    0,
    1,
    1,
    2,
    0,
    1,
    2,
    0,
    2,
    0,
    0,
    1,
    2,
    0,
    2,
    0,
    1,
    1,
    0,
    2,
    2,
    1,
    1,
    0,
    1,
    1,
    2
];

function SelectQuestion(tpyeNumber){
    if (usedQuestions.length < 28){
        var checkArray = false
        var tries = 1
        if(tpyeNumber == 1){
            while (checkArray == false){
                selectedQuestion = Math.floor(Math.random()*Questions.length)    
                if(usedQuestions.length == 0){
                    usedQuestions.push(selectedQuestion)
                    checkArray = true
                }
                else if(usedQuestions.includes(selectedQuestion) == false){
                    usedQuestions.push(selectedQuestion)
                    checkArray = true
                }
                tries = tries + 1
        }
            
        document.getElementById("QuestionTEXT").textContent = Questions[selectedQuestion]
        document.getElementById("Option0TEXT").textContent = Answers[selectedQuestion][0]
        document.getElementById("Option1TEXT").textContent = Answers[selectedQuestion][1]
        document.getElementById("Option2TEXT").textContent = Answers[selectedQuestion][2]
        //if()
        var socket = io.connect('http://' + document.domain + ':' + location.port);
        function sendMessage(message) {
            socket.emit('message_from_board', message);
        }
        sendMessage("question,"+Questions[selectedQuestion]+","+Answers[selectedQuestion][0]+","+Answers[selectedQuestion][1]+","+Answers[selectedQuestion][2])

        }
        else if(this.tpyeNumber == 2){
        }
        else if(this.tpyeNumber == 3){
        }
        document.getElementById("QuestionDIV").hidden = false
        RepositionQuestion()
        
    }
}