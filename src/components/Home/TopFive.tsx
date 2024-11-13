import { observer } from 'mobx-react-lite'
import './Home.css'
import { IUser } from '../../types/user.interface';
import { SiBitcoinsv } from 'react-icons/si';

interface IProps {
    users: IUser[] | null[],
    title: string
}

const TopFive = observer(({ users, title }: IProps) => {

    return (
    <div className="home__item">
        <div className="title">
            {title}
        </div>
        <div className="top__users">
            {users ? (
                <>{users.slice(0, 5).map((user, key) => (
                    <div className="top__user">
                        <div className="place">
                            {key+1}
                        </div>
                        <div className="name">
                            <span>{user?.fullName}</span>
                        </div>
                        <div className="info__user">
                            <div className="books">
                                <span>{user?.balance}</span>
                                <SiBitcoinsv color="yellow" fontSize={'18px'}/>
                            </div>
                        </div>
                    </div>
                ))}</>
            ) : (
                <>Loading</>
            )}
        </div>
    </div>
    )
})

export default TopFive