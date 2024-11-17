import { FC, useEffect } from "react"
import TopFive from "../../components/Home/TopFive"
import users from "../../stores/users"
import useTelegram from "../../hooks/useTelegram"
import { observer } from "mobx-react-lite"
import useAuth from "../../hooks/useAuth"
import Logo from "../../components/Home/Logo"
// import InfoMe from "../../components/Home/InfoMe"


const Home: FC = observer(() => {

    const { tgID } = useTelegram()
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        const fetch = async() => {
            await users.fetchTopUsers(1)    
            if(isAuthenticated) await users.fetchClassmaets(tgID)
        }
        fetch()
    }, [])

    return (
        <div className="home__items">
            <Logo />
            {users.users ? (
                <TopFive title="Топ лицея" users={users.users}/>    
            ) : (
                <>loading...</>
            ) }
            {users.classmates && isAuthenticated ? (
                <TopFive title={"Топ класса"} users={users.classmates}/>    
            ) : (
                <></>
            )}
        </div>
    )
})

export default Home