import { useEffect, useState } from "react";
import Pytanie from "./Pytanie";
import './Quiz.css'

function Quiz() {

    const pio=[{
        pytanie: 'W którym roku powstała gra Heores of Might and Magic 3?',
        odpowiedz: '1999'
    },
    {
        pytanie: 'Fabularnie kto jest najpotężniejszym nekromantą kampanii Homm3?',
        odpowiedz: 'Sandro'
    },
    {
        pytanie: 'Jaki budynek powinno się starać rozbudować w 1 tygodniu gry?',
        odpowiedz: 'Kapitol'
    },
    {
        pytanie: 'Kogo nienawidzą Giganci?',
        odpowiedz: 'Czarnych Smoków'
    },
    {
        pytanie: 'Jakie Jednostki produkuje dworek?',
        odpowiedz: 'Wampiry'
    },
    {
        pytanie: 'Z jakiego typu bronią posługują się krasnoludy?',
        odpowiedz: 'Młotem'
    },
    {
        pytanie: 'Jak nazywa się zamek w którym można wybudować podziemny tunel?',
        odpowiedz: 'Twierdza'
    },
    {
        pytanie: 'Ile złota dziennie dostarcza kapitol?',
        odpowiedz: '4000'
    },
    {
        pytanie: 'Po budowli "Fort" Występuje?',
        odpowiedz: 'Cytadela'
    },
    {
        pytanie: 'Ilu maksymalnie graczy może grać na jednej mapie?',
        odpowiedz: '8'
    },
    {
        pytanie: 'Ile kryształów dziennnie dostarcza "Labolatorium"?',
        odpowiedz: '0'
    },
    {
        pytanie: 'Miasto bagniste z NAJLEPSZĄ muzyką nazywa się?',
        odpowiedz: 'Cytadela'
    },
    {
        pytanie: 'Ile kosztuje księga czarów?',
        odpowiedz: '500'
    }
]

    const [wynik, setWynik]= useState('')
    const [odpowiedz, setOdpowiedz] = useState('')
    const [licznik, setLicznik] = useState(0)
    const [punkty, setPunkty] = useState(0)
    const [pytanie, setPytanie] = useState(pio[licznik])

    function nastepnePytanie(){
        console.log(licznik)
        setPytanie(pio[licznik])
        if(licznik<4){
            if (pytanie.odpowiedz == odpowiedz.target.value) {
                setPunkty(punkty+1)
            }
            setLicznik(licznik+1)
        }
        if(licznik==4){
            document.getElementById('wynik').style.display='block';
        }
        
    }
    
    useEffect(()=>{
        setPytanie(pio[licznik]);
        setWynik(punkty)
    })

    function start(){
        setLicznik(0)
        setWynik('')
        setPunkty(0)
        document.getElementById('wynik').style.display='none'

    }
  return (
    <div className="Quiz">
      <button  className='Button' onClick={start}>Rozpocznij grę</button>
      <Pytanie pytanie={pytanie.pytanie}/>
      <input onChange={setOdpowiedz}/><br/>
      <button className='Button' onClick={nastepnePytanie}>Sprawdź odpowiedź </button>
      <div id='wynik'>
        Twój winik to: {wynik}
      </div>
    </div>
  );
}

export default Quiz;