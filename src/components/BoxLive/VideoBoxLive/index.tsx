import style from './VideoBoxLive.module.scss'

export default function VideoBoxLive() {
    return(
        <article className={style.videoYt}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/v0yeKwGEGKQ?si=gzKalg7YgUs1YKeu" title="A Grande Guerra do Cristão" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </article>
    )
}