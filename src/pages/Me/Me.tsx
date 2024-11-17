import { observer } from "mobx-react-lite"
import NoAuth from "../../components/Auth/NoAuth"
import Loading from "../../components/Loading/Loading"
import MeInfo from "../../components/Me/MeInfo"
import useAuth from "../../hooks/useAuth"


const Me = observer(() => {

    const {isAuthenticated, loading, data} = useAuth()

    if(loading === true) return <Loading />

    if(isAuthenticated === false && loading === false) return <NoAuth /> 
    return (
        <>
            {
                data !== null &&  (
                    <><MeInfo me={data}/></>
                )
            }
            
        </>
    )
})

export default Me