import entryOption from '../File/entryOptions.json'

export default function answerRobot(entry){
  const {greeting,answerForGreeting,answerForGreeting2}=entryOption
let message={txt:"",id:"robot",txt2:""}
entry=entry.toLowerCase()
console.log(entry)
let checkIfGreeting=greeting.some(el=>el===entry)

    if(checkIfGreeting){
message.txt=answerForGreeting[parseInt(Math.random()*answerForGreeting.length)]
message.txt2=answerForGreeting2[parseInt(Math.random()*answerForGreeting2.length)]

    }
    if(entry==="czego dotyczy ta strona?"){
        message.txt="Na tej stronie beda umieszczane gry"
        
    }
    if(entry==="jak często będzie dodawana gra?"){
        message.txt="Co tydzien będzie wrzucona nowa gierka"
       
    }
    
    return message
   

}