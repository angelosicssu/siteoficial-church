import style from './Programations.module.scss';

export default function Programations() {
    return(
        <div className={style.containerGeral}>
            <section className={style.text}>
                <h6>Programações</h6>
            </section>
            <section className={style.groups}>
                <article className={style.groupOne}>
                    <img src="./images/culto_familiar.png" alt="" />
                    <img src="./images/nova_jovens.png" alt="" />
                    <img src="./images/nova_teens.png" alt="" />
                </article>
                <article className={style.groupTwo}>
                    <img src="./images/senib.png" alt="" />
                    <img src="./images/ministerioCasais.png" alt="" />
                    <img src="./images/nova_kids.png" alt="" />
                </article>
            </section>
        </div>
    )
}