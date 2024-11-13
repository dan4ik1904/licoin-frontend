export interface IUser {
    id: string;
    balance: number;
    className?: string;
    fullName: string;
    role: string;
}

export interface IAuthData {
    fullName: string
    className?: string
    tgId: number
    role?: string
}

export interface ISession {
    id: string;
    userId: string;
    tgId: number;
}

export interface IPatchData extends Omit<IAuthData, 'tgId'> {}