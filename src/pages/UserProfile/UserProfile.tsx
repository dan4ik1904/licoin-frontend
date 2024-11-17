import { observer } from "mobx-react-lite"
import Loading from "../../components/Loading/Loading"
import MeInfo from "../../components/Me/MeInfo"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import users from "../../stores/users"


const UserProfile = observer(() => {

    // const {isAuthenticated, loading, data} = useAuth()

    const params = useParams()
    const userId = params.userId

    useEffect(() => {
        if(userId) users.fetchUser(userId)
        
        
    }, [])

    if(users.isLoading === true) return <Loading />
    if(!users.oneUser) return <></>
    return (
        <>
            <MeInfo me={users.oneUser}/>
            
        </>
    )
})

export default UserProfile