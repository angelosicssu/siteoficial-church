import VideoBoxLive from './VideoBoxLive'
import style from './BoxLive.module.scss'
import TextBoxLive from './TextBoxLive'

export default function BoxLive( {  } ) {
    return(
        <main className={style.main}>
            <section className={style.text}>
                <h2>Seja <br></br> Bem- <br></br> Vindo</h2>
            </section>
            <section className={style.video}>
                <TextBoxLive title='A Grande Guerra do Cristão'/>
                <VideoBoxLive />
            </section>
        </main>
    )
}