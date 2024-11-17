import api from "./axios"


export const transaction = async (tgID: number, userRecipientId: string, moneyCount: number) => {
    try {
        const transaction = await api.post('/transactions', {
            userRecipientId,
            countMoney: moneyCount 
        }, {
            headers: {
                Authorization: tgID
            }
        })
        return transaction
    } catch (error) {
        
    }
}

export const fetchMyTransaction = async(tgId: number) => {
    try {
        const transactions = await api.get('/transaction/my', {
            headers: {
                Authorization: tgId
            }
        })
        return transactions
    } catch (error) {
        
    }
}