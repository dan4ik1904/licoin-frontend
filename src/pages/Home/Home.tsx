import { observer } from "mobx-react-lite";
import { FC } from "react";
import useAuth from "../../hooks/useAuth";
import AuthorizatHome from "./AuthorizatHome";
import Loading from "../../components/Loading/Loading";
import NoAuth from "../../components/Auth/NoAuth";


const Home: FC = observer(() => {

  const { isAuthenticated, loading } = useAuth()


  if(loading === true) return <Loading />

  return (
    <>
    { isAuthenticated ? (
        <>
          <AuthorizatHome />
        </>
        
      ) : (
        <>
          <NoAuth />
        </>
        
      )
    }
    </>
   
  )
  
  
})

export default Home;
