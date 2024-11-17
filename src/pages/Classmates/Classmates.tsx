import { observer } from "mobx-react-lite"
import users from "../../stores/users"
import Loading from "../../components/Loading/Loading"
import UserTopCard from "../../components/Top/UserTopCard"
import { useEffect } from "react"
import useTelegram from "../../hooks/useTelegram"


const Classmates = observer(() => {

    const { tgID } = useTelegram()

    useEffect(() => {
        users.fetchClassmaets(tgID)
    }, [])

    if(users.isLoading === true) return <Loading />

    return (
        <>
            {users.classmates && (
                <>
                    {users.classmates.map(user => (
                        <><UserTopCard user={user}/></>
                    ))}
                </>
            )}
        </>
    )
})

export default Classmates