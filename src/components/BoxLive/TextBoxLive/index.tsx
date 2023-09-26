import style from './TextBoxLive.module.scss'

export default function TextBoxLive( {title}: {title: string} ) {
    return(
        <article className={style.videoText}>
            <h3>{title}</h3>
            <h4>Culto Familiar | ao Vivo</h4>
        </article>
    )
}