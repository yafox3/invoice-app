import { collection, getDocs } from 'firebase/firestore'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import InvoiceList from '../../components/InvoiceList/InvoiceList'
import SideBar from '../../components/SideBar/SideBar'
import Button from '../../components/UI/Button/Button'
import { db } from '../../firebase/firebase'
import UserStore from '../../store/UserStore'
import s from './DashboardPage.module.scss'

const DashboardPage = observer(() => { 
	const fetchInvoices = () => {
		getDocs(collection(db, 'invoices'))
		.then(querySnapshot => {
			const invoices = querySnapshot.docs.map(doc => doc.data())
			const keys = invoices.map((_, idx) => Object.keys(invoices[idx]))
			invoices.forEach((invoice, idx) => UserStore.setInvoice = invoice[keys[idx][0]])
		})
	}   
 
	useEffect(() => {
		fetchInvoices() 
	}, [])
	
	return <div className={s.dashboard}>
		<SideBar />
		<div className='container'>
			<div className={s.header}>
				<div className={s.info}>
					<div className={s.title}>Invoices</div>
					<div className={s.count}>There are {UserStore.getInvoices.length} total invoices</div>
				</div>
				<div className={s.actions}>
					<Button variant='primary' style={{position: 'relative'}}>
						<i style={{position: 'absolute', top: '50%', left: 10, fontSize: '32px', transform: 'translateY(-50%)'}} className="bi bi-plus-circle-fill" /> <span style={{marginLeft: '30px'}}>New invoice</span>
					</Button>
				</div>
			</div>

			<InvoiceList invoices={UserStore.getInvoices}/>
		</div>
	</div>
})

export default DashboardPage
