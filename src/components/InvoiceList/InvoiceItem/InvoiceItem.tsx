import React from 'react'
import s from './InvoiceItem.module.scss'
import { IInvoice } from '../../../models/models'

interface InvoiceItemProps {
	invoice: IInvoice
}

const InvoiceItem = ({invoice}: InvoiceItemProps) => {
  return (
	<div className={s.item}>
		<div className={s.id}><span>#</span>{invoice.id}</div>
		<div className={s.date}>Remaining {invoice.date.remaining} days</div>
		<div className={s.email}>{invoice.to.email}</div>
		<div className={s.cost}>{invoice.total} $</div>
		<div className={invoice.status ? s.status.concat(' ', s.paid) : s.status}>{invoice.status ? 'Paid' : 'Pending'}</div>
		<div className={s.show}>
			<i className="bi bi-arrow-right-short" /> 
		</div>
	</div>
  )
}

export default InvoiceItem
