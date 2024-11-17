import { FormEvent, useState } from "react"
import useAuth from "../../hooks/useAuth"
import transactions from "../../stores/transactions"
import useTelegram from "../../hooks/useTelegram"
import './Transaction.css'
import { SiBitcoinsv } from "react-icons/si"
import Loading from "../../components/Loading/Loading"
import NoAuth from "../../components/Auth/NoAuth"


const Transaction = () => {

    const [isOpenTransaction, setIsOpenTransaction] = useState(false)
    const [error, setError] = useState('')
    const [userRecipientId, setUserRecipientId] = useState('')
    const [moneyCount, setMoneyCount] = useState<number>()

    const { data, loading, isAuthenticated } = useAuth()
    const { tgID } = useTelegram()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const send = () => {
        if(!userRecipientId || !moneyCount) return setError('error')
        transactions.transaction(tgID, userRecipientId, moneyCount)
    }

    const toogleTransaction = () => {
        if(isOpenTransaction === false) setIsOpenTransaction(true)
        if(isOpenTransaction === true) setIsOpenTransaction(false)
    }

    if(loading === true || transactions.isLoading === true) return <Loading />
    if(isAuthenticated === false && loading === false) return <NoAuth />
    return (
        <div className="items">
            {transactions.error && (<div className="error">
                {transactions?.error}
            </div>)}
            <div className="me__balance">
                <h2>Мой баланс</h2>
                <span>{data?.balance}<SiBitcoinsv color="yellow" fontSize={'23px'}/></span>
            </div>
            {isOpenTransaction === false && (
                <div className="transaction" >
                    <button onClick={() => toogleTransaction()} type="submit" className="btn btn-primary w-50 h-40" style={{ backgroundColor: '#646cff', border: 'none', marginTop: '10px' }}>
                                Добавить
                    </button>
                </div>
            )}
            {isOpenTransaction === true && (
                <div className="transaction__forn">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card" style={{ backgroundColor: '#1d1d1d', borderRadius: '10px', padding: '2em', marginTop: '5em' }}>
                                <h2 className="text-center" style={{ color: '#fff' }}>Перевести</h2>
                                {error && (
                                    <p style={{
                                        color: 'red'
                                    }}>{error}</p>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label" style={{ color: '#888' }}>ID Пользователя</label>
                                        <input
                                            onChange={e => setUserRecipientId(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label" style={{ color: '#888' }}>Количество Coin'ов</label>
                                        <input
                                            onChange={e => setMoneyCount(Number(e.target.value))}
                                            type="text"
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <button onClick={() => send()} type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#646cff', border: 'none', marginTop: '10px' }}>
                                        Отправить
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
        
    )
}

export default Transaction