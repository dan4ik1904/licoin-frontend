import { FC } from 'react'
import { IUser } from '../../types/user.interface'
import './Me.css'
import { SiBitcoinsv } from 'react-icons/si'
// import { MdDelete } from "react-icons/md";


interface IProps {
    me: IUser
}

const MeInfo: FC<IProps> = ({me}: IProps) => {


    return (
        <div className="me__item">
            <div className="me__avatar__wrapper">
                <div className="avatar">
                    <span>{me.fullName[0]}</span>
                </div>
            </div>
            
            <div className="me__info">
                <div className="man">
                    <h3>{me.fullName}</h3>
                    <h4>{me.className}</h4>    
                </div>
                <div className="balance">
                    <span>{me.balance}<SiBitcoinsv color="yellow" fontSize={'18px'}/></span>
                </div>
                <div className="id">
                    <span>ID:  {me.id}</span>
                </div>
            </div>
        </div>
    )
    
}

export default MeInfo