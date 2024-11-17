import './Header.css'
import { IoMdArrowRoundBack } from "react-icons/io";


const Header = () => {

    const pages: any = {
        '/': 'Главная',
        '/transaction': 'Переводы',
        '/products/': 'Магазин',
        '/products/add': 'Создание товара',
        '/top': 'Топ',
        '/me': 'Мой профиль'

    }

    const pathname = window.location.pathname

    const back = () => {
        window.history.back()
    }

    return (
        <div className="header">
            <div className="back">
                { pathname !== '/' && (
                    <IoMdArrowRoundBack onClick={() => back()} color='white'/>
                ) }
            </div>
            <div className="info">
                {pages[pathname]}
            </div>
        </div>
    )
}

export default Header