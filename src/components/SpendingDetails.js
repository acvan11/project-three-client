import React, { Component } from 'react';
import moment from 'moment';
export default class SpendingDetails extends Component {

  render() {

    let spending = this.props.spendingFunction();
    console.log('list spending: ', spending);
    const year_spending = [

    ];

      const spendingItems12 = (spending) => {
      let arr12 = []
      for (let key in spending["December"]){
      arr12.push({month: "December", data: {key: key, data: spending['December'][key]}})
    }
      console.log('array of result: ', arr12);
      return arr12
    }

      const spendingItems11 = (spending) => {
      let arr11 = []
      for (let key in spending["November"]){
      arr11.push({month: "November", data: {key: key, data: spending['November'][key]}})
    }
      console.log('array of result: ', arr11);
      return arr11
    }

      const spendingItems10 = (spending) => {
      let arr10 = []
      for (let key in spending["October"]){
      arr10.push({month: "October", data: {key: key, data: spending['October'][key]}})
    }
      console.log('array of result: ', arr10);
      return arr10
    }

      const spendingItems9 = (spending) => {
      let arr9 = []
      for (let key in spending["September"]){
      arr9.push({month: "September", data: {key: key, data: spending['September'][key]}})
    }
      console.log('array of result: ', arr9);
      return arr9
    }

      const spendingItems8 = (spending) => {
      let arr8 = []
      for (let key in spending["August"]){
      arr8.push({month: "August", data: {key: key, data: spending['August'][key]}})
    }
      console.log('array of result: ', arr8);
      return arr8
    }

       const spendingItems7 = (spending) => {
      let arr7 = []
      for (let key in spending["July"]){
      arr7.push({month: "July", data: {key: key, data: spending['July'][key]}})
    }
      return arr7
    }

     const spendingItems6 = (spending) => {
      let arr6 = []
      for (let key in spending["June"]){
      arr6.push({month: "June", data: {key: key, data: spending['June'][key]}})
    }
      return arr6
    }

     const spendingItems5 = (spending) => {
      let arr5 = []
      for (let key in spending["May"]){
      arr5.push({month: "May", data: {key: key, data: spending['May'][key]}})
    }
      return arr5
    }

     const spendingItems4 = (spending) => {
      let arr4 = []
      for (let key in spending["April"]){
      arr4.push({month: "April", data: {key: key, data: spending['April'][key]}})
    }
      return arr4
    }

     const spendingItems3 = (spending) => {
      let arr3 = []
      for (let key in spending["March"]){
      arr3.push({month: "March", data: {key: key, data: spending['March'][key]}})
    }
      return arr3
    }

     const spendingItems2 = (spending) => {
      let arr2 = []
      for (let key in spending["February"]){
      arr2.push({month: "February", data: {key: key, data: spending['February'][key]}})
    }
      return arr2
    }

     const spendingItems1 = (spending) => {
      let arr1 = []
      for (let key in spending["January"]){
      arr1.push({month: "January", data: {key: key, data: spending['January'][key]}})
    }
      return arr1
    }

		return(
			<div>
        <h1>September</h1>
        {spendingItems9(spending).map(item => {
          console.log('item in September: ', item);
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {moment(key.date).calendar()}</p>)}              
            </div>
            )
        })}

        <hr/>

         <h1>August</h1>
        {spendingItems8(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {moment(key.date).calendar()}</p>)}              
            </div>
            )
        })}

        <hr/>

           <h1>July</h1>
        {spendingItems7(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {moment(key.date).calendar()}</p>)}              
            </div>
            )
        })}

        <hr/>

         <h1>June</h1>
        {spendingItems6(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {moment(key.date).calendar()}</p>)}              
            </div>
            )
        })}

        <hr/>

         <h1>May</h1>
        {spendingItems5(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {moment(key.date).calendar()}</p>)}              
            </div>
            )
        })}

        <hr/>

         <h1>April</h1>
        {spendingItems4(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {moment(key.date).calendar()}</p>)}              
            </div>
            )
        })}

        <hr/>
     
         <h1>March</h1>
        {spendingItems3(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {moment(key.date).calendar()}</p>)}              
            </div>
            )
        })}

        <hr/>

         <h1>February</h1>
        {spendingItems2(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {moment(key.date).calendar()}</p>)}              
            </div>
            )
        })}

        <hr/>

         <h1>January</h1>
        {spendingItems1(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {moment(key.date).calendar()}</p>)}              
            </div>
            )
        })}

        <hr/>
			</div>
		);
	}
}