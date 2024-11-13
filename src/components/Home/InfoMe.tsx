import { FC, useEffect } from "react";
import './Home.css';
import users from "../../stores/users";
import Loading from "../Loading/Loading";
import useTelegram from "../../hooks/useTelegram";
import { SiBitcoinsv } from "react-icons/si";
import { observer } from "mobx-react-lite";

const InfoMe: FC = observer(() => {
    const { tgID } = useTelegram();

    useEffect(() => {
        users.fetchMe(tgID);
    }, [tgID]); // Добавляем tgID как зависимость

    if (users.isLoading) return <Loading />;
    
    if (users.error) {
        return <div className="error">Ошибка загрузки данных пользователя</div>; // Обработка ошибок
    }

    if (users.me) {
        return (
            <div className="home__item">
                <div className="logo">
                    <img style={{height: '200px'}} src="main.png" alt="" />
                </div>
                <div className="info__me">
                    <div className="name">
                        {users.me.fullName}
                        {users.me.className}
                    </div>
                </div>
                <div className="info__balance">
                    <span>{users.me.balance}<SiBitcoinsv color="yellow" fontSize={'18px'}/></span>
                </div>
            </div>
        );
    }

    return null; // Возвращаем null, если нет данных о пользователе
})

export default InfoMe;