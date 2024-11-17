import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../types/user.interface";
import '../Item.css';
import { SiBitcoinsv } from "react-icons/si";

interface IProps {
    user: IUser | null;
}

const UserTopCard: FC<IProps> = ({ user }) => {
    if (!user) return <></>;

    const navigate = useNavigate();

    const link = () => {
        navigate(`/users/${user.id}`);
    };

    return (
        <div className="item" onClick={link}>
            <div className="item__info__main">
                <h3>{user.fullName}</h3>
                <h4>{user.className}</h4>
            </div>
            <div className="item__info">
                <span className="highlight">{user.balance}</span>
                <span><SiBitcoinsv color="yellow" fontSize={'22px'} /></span>
            </div>
        </div>
    );
};

export default UserTopCard;
