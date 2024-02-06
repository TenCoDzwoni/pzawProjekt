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

    const [pytanie, setPytanie] = useState(pio[0])

    let punkty = 0

    function nastepnePytanie(){
        if (punkty/* input*/  == odpowiedz) {
            punkty+=1
        }
        setPytanie(pio)
    }
    

  return (
    <div className="Quiz">
      <button>Rozpocznij grę</button>
      <button>Zakończ grę</button>
      <Pytanie $pytanie={pytanie.pytanie}/>
      <button onClick={nastepnePytanie()}>Sprawdź odpowiedź </button>
    </div>
  );
}

export default Quiz;