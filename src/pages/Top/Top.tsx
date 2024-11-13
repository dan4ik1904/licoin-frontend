import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import users from "../../stores/users";
import './Top.css'
import Loading from "../../components/Loading/Loading";
import UserTopCard from "../../components/Top/UserTopCard";


const Top: FC = observer(() => {

  useEffect(() => {
    users.fetchTopUsers()
  }, [])

  if(users.isLoading === true) return <Loading />
  return (
    <main>
      <div className="users">
        {users.users.map((user) => (
          <>
            <UserTopCard user={user} />
          </>
        ))
        }
      </div>
      
    </main>
  );
  
})

export default Top;
