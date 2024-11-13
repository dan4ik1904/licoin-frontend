import { transaction } from "../api/transaction"
import { makeAutoObservable } from "mobx"


class TransactionStore {

    isLoading = false
    error: string | null = null

    constructor() {
        makeAutoObservable(this)
    }

    async transaction(tgID: number, userRecipientId: string, moneyCount: number) {
        try {
            this.isLoading = true
            const transactionRes = await transaction(tgID, userRecipientId, moneyCount)
            if(transactionRes?.status !== 201) {
                this.error = transactionRes?.data.message
            }
            this.isLoading = false
        } catch (error) {
            console.error(error)
        }
    }
    
}

export default new TransactionStore()