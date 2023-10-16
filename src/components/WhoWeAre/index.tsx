import style from './WhoWeAre.module.scss'

export default function WhoWeAre() {
    return(
        <div className={style.whoWeAre}>
            <section className={style.text}>
                <div className={style.titleMain}>
                    <h4>Quem Somos</h4>
                </div>
                <h5>HÁ MAIS DE 19 ANOS A NOVA IGREJA BATISTA GRANDE CIRCULAR VEM <br/>
                    CONSTRUINDO HISTÓRIA NA CIDADE DE MANAUS. UMA IGREJA <br/>
                    DIFERENCIADA, ALICERÇADA NA PALAVRA DE DEUS E NO AMOR, QUE <br/>
                    ATRAVÉS DE SUAS PROGRAMAÇÕES DINÂMICAS, TEM ALCANÇADO <br/>
                    INÚMERAS VIDAS. DESDE A SUA FUNDAÇÃO ATÉ HOJE, DIVERSAS <br/>
                    PESSOAS DECLARARAM SUA FÉ EM CRISTO JESUS. VÁRIOS <br/>
                    CASAMENTOS FORAM TRANSFORMADOS E MUITAS FAMÍLIAS PASSARAM <br/>
                    A TER UM NOVO ESTILO DE VIVER. ESSA HISTÓRIA AINDA ESTÁ SENDO <br/>
                    ESCRITA E VOCÊ PODE FAZER PARTE DELA.
                    <br/>
                    <br/>
                    <br/>
                    COM PROGRAMAÇÕES VARIADAS VOLTADAS PARA CRIANÇAS, <br/>
                    ADOLESCENTES, JOVENS E ADULTOS LEVA O EVANGELHO E O ENSINO DA <br/>
                    PALAVRA DE UMA FORMA PRÁTICA E CLARA. 
                    <br/>
                    <br/>
                    <br/>
                    A NOVA IGREJA BATISTA GRANDE CIRCULAR ESTÁ DE BRAÇOS <br/>
                    ABERTOS PARA VOCÊ. VENHA NOS CONHECER E FAZER PARTE <br/>
                    DESTA GRANDE FAMÍLIA
                    </h5>
            </section>
            <div className={style.verticalLine}></div>
            <img src="./images/20_anos.png" alt="" />
        </div>
    )
}