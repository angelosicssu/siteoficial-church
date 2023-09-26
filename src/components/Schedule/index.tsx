import style from './Schedule.module.scss'
import { useEffect, useState } from "react";

export default function Schedule() {

    const [totalTime, setTotalTime] = useState((60 * 86400)); //FEITO EM HORAS
    const seconds = Math.floor(totalTime%60);
    const minutes = Math.floor((totalTime/60) % 60);
    const yours = Math.floor((totalTime/3600) % 24);
    const days = Math.floor(totalTime/86400);

    useEffect(() => {
        if(totalTime === 0) {
            alert("O tempo acabou")
            return
        } else {
            setTimeout(() => {
                setTotalTime(totalTime-1);
            }, 1000)
        }
       
    }, [totalTime])
    
    return(
        <div className={style.scheduleTime}>
            <section className={style.img}>
                <p>img</p>
            </section>
            <section className={style.stopWatch}>
                <span>{days.toString().padStart(2, "0")}d</span>
                <span>{yours.toString().padStart(2, "0")}h</span>
                <span>{minutes.toString().padStart(2, "0")}m</span>
                <span>{seconds.toString().padStart(2, "0")}s</span>
            </section>
            
        </div>
    )
}