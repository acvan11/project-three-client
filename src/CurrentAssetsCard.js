import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import SERVER_URL from './constants/server';

class AllMoneyList extends Component {
	state = {
		allMoney: []
	}

	componentDidMount() {

		let token = localStorage.getItem('mernToken') || ''
		console.log(token)
		axios.post(SERVER_URL + '/money/all',  {
			headers: { 'Authorization': `Bearer ${token}` },
			body: this.state,

		})
		.then(res => {
				const allMoney = res.data;
				this.setState({ allMoney });
			})
	}

	render() {

		 const income = [];
		 var totalIncome = 0;

		 this.state.allMoney.forEach(i =>{
		 	if (moment(i.date).format('MMMM') === moment().format('MMMM'))
      		 { income.push(i.amount) }
      		})

      	income.reduce((total, inc) => totalIncome = total + inc, 0);

		return(
			
			<div>

				<h2>{`Monthly Income to Date: $${totalIncome}`}</h2>

			</div>
			


		);
	}
}

export default AllMoneyList;
