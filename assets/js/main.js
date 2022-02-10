//-------------------------------------
//Projekt: lev1_1: Semi-Horoskop

let horoIn = document.getElementById('horoskopInput')
let horoOut = document.getElementById('horoskopOutput')

function showHoroskop() {

    let newhoroIn = horoIn.value.toLowerCase();

    switch (true) {
        case newhoroIn == 'märz':
            horoOut.innerHTML = `<div id="aries">
            <img src="https://www.horoscopedates.com/img/icon_aries.png" alt="aries">
            <h2>March</h2>
            <p>Today your patience might be tested when one or more of your project gets put on hold by someone...</p>
        </div>`
            break;

            case newhoroIn == 'april':
                horoOut.innerHTML = `<div id="TAURUS">
                <img src="https://www.horoscopedates.com/img/icon_taurus.png" alt="taurus">
                <h2>April</h2>
                <p>Your intense energy makes you a great candidate for a leadership position right now, so if you are…
                </p>
            </div>`
                break;

                case newhoroIn == 'mai':
                    horoOut.innerHTML = `<div id="GEMINI: 
                    ">
                    <img src="https://www.horoscopedates.com/img/icon_gemini.png" alt="gemnini">
                    <h2>Mai</h2>
                    <p>If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…
                    </p>
                    </div>`
                    break;

            case newhoroIn == 'Juni':
                horoOut.innerHTML = `<div id="CANCER">
                <img src="https://www.horoscopedates.com/img/icon_cancer.png" alt="krebs">
                <h2>March</h2>
                <p>Too many different elements in your life are overlapping with each other right now—and it's your…
                </p>
                </div>`
                break;

            case newhoroIn == 'Juli':
                horoOut.innerHTML = `<div id="LEO">
                <img src="https://www.horoscopedates.com/img/icon_leo.png" alt="löwe">
                <h2>Juli</h2>
                <p>The issues you'll be dealing with today are very complicated ones—you will have to navigate your…
                </p>
                </div>`
                break;

            case newhoroIn == 'august':
                horoOut.innerHTML = `<div id="VIRGO">
                <img src="https://www.horoscopedates.com/img/icon_virgo.png" alt="august">
                <h2>August</h2>
                <p>You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…
                </p>
                </div>`
                break;

            case newhoroIn == 'september':
                horoOut.innerHTML = `<div id="LIBRA">
                <img src="https://www.horoscopedates.com/img/icon_libra.png" alt="september">
                <h2>September</h2>
                <p>Pick a cultural event that's coming up and get some tickets for it today.
                </p>
                </div>`
                break;

            case newhoroIn == 'october':
                horoOut.innerHTML = `<div id="SCORPIO">
                <img src="https://www.horoscopedates.com/img/icon_scorpio.png" alt="scorpion">
                <h2>October</h2>
                <p>Someone will challenge a belief that you've held for a very long time today—and they will say an…
                </p>
                </div>`
                break;

            case newhoroIn == 'november':
                horoOut.innerHTML = `<div id="SAGITTARIUS">
                <img src="https://www.horoscopedates.com/img/icon_sagittarius.png" alt="sagitairus">
                <h2>November</h2>
                <p>Someone in your life needs to step up and take on more responsibility—and you need to tell them to....
                </p>
                </div>`
                break;

            case newhoroIn == 'dezember':
            horoOut.innerHTML = `<div id="CAPRICORN">
            <img src="https://www.horoscopedates.com/img/icon_capricorn.png" alt="aries">
            <h2>March</h2>
            <p>Today your patience might be tested when one or more of your project gets put on hold by someone...</p>
        </div>`
            break;

            case newhoroIn == 'januar':
            horoOut.innerHTML = `<div id="AQUARIUS">
            <img src="https://www.horoscopedates.com/img/icon_aquarius.png" alt="aqua">
            <h2>Januar</h2>
            <p>Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…
            </p>
        </div>`
            break;

            case newhoroIn == 'februar':
            horoOut.innerHTML = `<div id="PISCES">
            <img src="https://www.horoscopedates.com/img/icon_pisces.png" alt="fab">
            <h2>Februar</h2>
            <p>Communication is very important today—written, spoken, and even nonverbal body language will all…
            </p>
        </div>`
            break;
    
        default:
            break;
    }
}