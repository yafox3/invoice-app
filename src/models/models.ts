export interface IItem {
	name: string
	qty: number
	price: number
	total: number
}

export interface IInvoice {
	id: number
	from: {
		email: string
		address: {
			country: string
			city: string
			postCode: number
			street: string
		}
	}
	to: {
		email: string
		address: {
			country: string
			city: string
			postCode: number
			street: string
		}
	}
	date: {
		date: Date
		remaining: number
	}
	description: string
	items: IItem[]
}

export interface IUser {
	email: string
	avatar: string
	invoices: IInvoice[]
}