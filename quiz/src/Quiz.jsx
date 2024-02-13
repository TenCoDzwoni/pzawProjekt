import { useState } from "react";
import Pytanie from "./Pytanie";

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
    }]

    const [odpowiedz, setOdpowiedz] = useState('')
    const [licznik, setLicznik] = useState(0)
    const [punkty, setPunkty] = useState(0)
    const [pytanie, setPytanie] = useState(pio[licznik])

    function nastepnePytanie(){
        
        if (pytanie.odpowiedz === odpowiedz.target.value) {
            setPunkty(punkty+1)
        }
        if(licznik<4){
            setLicznik(licznik+1)
        }
        setPytanie(pio[licznik])
        console.log(punkty)
    }
    

  return (
    <div className="Quiz">
      <button>Rozpocznij grę</button>
      <button>Zakończ grę</button>
      <Pytanie pytanie={pytanie.pytanie}/>
      <input onChange={setOdpowiedz}/>
      <button onClick={nastepnePytanie}>Sprawdź odpowiedź </button>
    </div>
  );
}

export default Quiz;