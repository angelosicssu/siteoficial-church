import style from './BoxLive.module.scss'

export default function BoxLive() {
    return(
        <main className={style.main}>
            <section className={style.text}>
                <h2>Seja <br></br> Bem- <br></br> Vindo</h2>
            </section>
            <section className={style.video}>
                <article className={style.videoText}>
                    <h3>Título do Vídeo</h3>
                    <h4>Programação | ao Vivo</h4>
                </article>
                <article className={style.videoYt}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/X8qiLDMOaLE?si=KiHnLDVJoadH3VJ8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </article>
            </section>
        </main>
    )
}