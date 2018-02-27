import React from 'react';
import ReactDOM from 'react-dom';
// 引入所需的模块
import BoxItem from './components/boxItem.js'

var datas = require('./data/datas.json');

class App extends React.Component{
	render(){
		var items = datas.map((item,index)=>{
			return <BoxItem key={index} data={item}/>;
		});
		return (
			<div id='box'>
				{items}
			</div>
		);
	}
	
}

ReactDOM.render(<App />,document.getElementById('app'));
