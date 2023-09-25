import style from './Header.module.scss'

export default function Header() {
    return(
        <header className={style.box_main}>
        <img src="./images/Marca_GC.png" alt="" />
        <nav>
            <ul className={style.list}>
                <li><a>Ao Vivo</a></li>
                <li><a>Quem Somos Nós</a></li>
                <li><a>Meditação</a></li>
                <li><a>Eventos</a></li>
                <li><a>Contato</a></li>
            </ul>
        </nav>
        
        </header>
    )
}