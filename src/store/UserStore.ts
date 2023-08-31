import { makeAutoObservable } from 'mobx'
import { IInvoice, IUser } from '../models/models'

class UserStore {
	private _user: IUser = {
		avatar: '',
		email: '',
		invoices: []
	}

	constructor() {
		makeAutoObservable(this)
	}
	
	public get getAvatar() : string {
		return this._user?.avatar
	}

	public get getInvoices() : IInvoice[] {
		return this._user?.invoices
	}

	public get getUser() : IUser {
		return this._user
	}

	public login(user: IUser) {
		this._user = {...user}
	}
}

export default new UserStore()