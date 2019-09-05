import React, { memo, useState, useEffect } from 'react';

import ErrorsMessage from './errors-message';
import Ticket from './ticket';

import tripsData from '../api/trips.json';

import './style.css';



const TripsPage = (props) => {

const [inputData, setValue] = useState('');
const [filterData, setFilterData] = useState([]);

//Получение введеных данных
const handlerChange = evt =>
{
	const searchValue = evt.target.value.trimLeft().toLowerCase();
	setValue(searchValue)
}

//Ввод текста , двухстороннее связывание
useEffect(() => 
{
	if(!inputData) return;

	searchHanler({inputData, tripsData, setFilterData});

}, [inputData]);

  return (
    <div className={`trips-page`}>
    	<div className={`trips-page-search`}>
    		<input 
    			type={`text`}
    			placeholder={`Search ticket`}
    			onChange={handlerChange}
    			value={inputData}
    			/>
    	</div>

    	{inputData === '' && <Ticket tripsData={tripsData}/>}
    	{inputData !== '' && <Ticket tripsData={filterData}/>}
		{inputData !== '' && filterData.length === 0 && <ErrorsMessage />}

    </div>
  )
}

export default memo(TripsPage);

// Поиск билетов
const searchHanler = (props) =>
{
		const {inputData, tripsData, setFilterData} = props;
		const filter = tripsData.filter(ticketDesc =>
		{
			return ticketDesc['toName'].toLowerCase().includes(inputData) || ticketDesc['fromName'].toLowerCase().includes(inputData)
		});

	return setFilterData(filter);
}
