import React from 'react'
import { IInvoice } from '../../models/models'
import InvoiceItem from './InvoiceItem/InvoiceItem'
import s from './InvoiceList.module.scss'

interface InvoiceListProps {
	invoices: IInvoice[]
}

const InvoiceList = ({invoices}: InvoiceListProps) => {
  return (
	<div className={s.list}>
	  {invoices.map(invoice => (
		<InvoiceItem invoice={invoice} key={invoice.id} />
	  ))}
	</div>
  )
}

export default InvoiceList
