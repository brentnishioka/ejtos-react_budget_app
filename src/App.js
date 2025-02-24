import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Add code to import the components
import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
import Budget from './components/Budget';
import ChangeCurrency from './components/ChangeCurrency';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
				<h1 className='mt-3'>Company's Budget Allocation</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<Remaining />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
					<div className='col-sm'>
						<ChangeCurrency />
					</div>
				</div>
				<h3 className='mt-3'>Allocation</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Change allocation</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AllocationForm/>
					</div>
				</div>
			</div>
        </AppProvider>
    );
};
export default App;