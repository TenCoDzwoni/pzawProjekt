import { useEffect, useState } from "react";
import Pytanie from "./Pytanie";
import './Quiz.css'

function Quiz() {

    const pio=[{
        pytanie: 'ile',
        odpowiedz: 'tyle'
    },
    {
        pytanie: 'a',
        odpowiedz: 'a'
    },
    {
        pytanie: 'b',
        odpowiedz: 'b'
    },
    {
        pytanie: 'c',
        odpowiedz: 'c'
    },
    {
        pytanie: 'd',
        odpowiedz: 'd'
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