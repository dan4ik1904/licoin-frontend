import { makeAutoObservable, runInAction } from "mobx"
import { getAllUsers, getClassmatesUsers, getOneUser, getTopUsers } from "../api/users"
import { IAuthData, ISession, IUser } from "../types/user.interface"
import { auth, authMe, getSessions } from "../api/auth"
import { IProduct } from "../types/products.interface"


class UserStore {

    users: IUser[] = []
    oneUser: IUser | null = null
    me: IUser | null = null
    isLoading = false
    error: unknown | null = null
    myProduct: IProduct[] | Array<null> = []
    mySessions: ISession[] | Array<null> = []
    classmates: IUser[] | Array<null> = []
    endFetch = false

    constructor() {
        makeAutoObservable(this)
    }

    async fetchAllUsers() {
        this.isLoading = true
        const users = await getAllUsers()
        console.log(users)
        this.users = users
        runInAction(() => {
            this.isLoading = false
            console.log(this.users)
        })
    }

    async fetchMe(tgId: number) {
        this.isLoading = true;
        this.error = null; // Сбрасываем ошибку перед началом загрузки
    
        try {
            const me = await authMe(tgId);
            runInAction(() => {
                this.me = me;
                this.isLoading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.error = error;
                this.isLoading = false;
            });
            console.error("Ошибка при загрузке данных пользователя:", error); // Логирование ошибки
        }
    }

    async fetchMySesions(tgId: number) {
        try {
            this.isLoading = true
            const sessions = await getSessions(tgId)
            if(sessions) {
                this.mySessions = sessions
                runInAction(() => {
                    this.isLoading = false
                })
            }
        } catch (error) {
            this.error = error
            runInAction(() => {
                this.isLoading = false
            })
        }
    }

    async fetchClassmaets(tgId: number) {
        try {
            const classmates = await getClassmatesUsers(tgId) 
            this.classmates = classmates
        } catch (error) {
            
        }
    }

    async fetchTopUsers(page: number) {
        try {
            this.isLoading = true;
            const fetchedUsers = await getTopUsers(page, 6);
    
            runInAction(() => {
                if (fetchedUsers.length < 6) {
                    this.endFetch = true; // Исправлено на присваивание
                }
    
                // Создаем множество идентификаторов уже существующих пользователей
                const existingUserIds = new Set(this.users.map(user => user.id));
    
                // Фильтруем новых пользователей, оставляя только уникальных
                const uniqueFetchedUsers = fetchedUsers.filter(user => !existingUserIds.has(user.id));
    
                // Добавляем уникальных пользователей к существующим
                this.users = [...this.users, ...uniqueFetchedUsers];
    
                this.isLoading = false;
            });
        } catch (error) {
            this.error = error;
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }

    async auth(data: IAuthData) {
        this.isLoading = true
        const res = await auth(data)
        if(res.status === 200){
            this.isLoading = false
        }
        return res
    }

    async fetchUser(id: string) {
        this.isLoading = true
        const res = await getOneUser(id)
        if(res.status === 200) {
            this.isLoading = false
        }
        runInAction(() => {
            if(res.data) {
                this.oneUser = res?.data 
            }
        })
    }

    
}

export default new UserStore()