import { FC, useEffect } from "react"
import TopFive from "../../components/Home/TopFive"
import users from "../../stores/users"
import useTelegram from "../../hooks/useTelegram"
import { observer } from "mobx-react-lite"
// import InfoMe from "../../components/Home/InfoMe"


const AuthorizatHome: FC = observer(() => {

    const { tgID } = useTelegram()

    useEffect(() => {
        const fetch = async() => {
            await users.fetchTopUsers()    
            await users.fetchClassmaets(tgID)
        }
        fetch()
    }, [])

    return (
        <>
            {users.users ? (
                <TopFive title="Топ лицея" users={users.users}/>    
            ) : (
                <>loading...</>
            ) }
            {users.classmates ? (
                <TopFive title={"Топ класса"} users={users.classmates}/>    
            ) : (
                <></>
            )}
        </>
    )
})

export default AuthorizatHome