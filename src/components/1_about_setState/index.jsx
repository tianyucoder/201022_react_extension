import React, { Component } from 'react'

export default class Count extends Component {
	//eslint-disable-next-line
	state = {sum:0}

	render() {
		console.log('render')
		return (
			<div>
				<h2>当前求和为：{this.state.sum}</h2>
				<button onClick={this.increment}>点我+1</button>
				<button onClick={this.changeSum}>点我将和变为99</button>
			</div>
		)
	}

	//eslint-disable-next-line
	increment = ()=>{
		//函数式的setState，适用于：新状态依赖于原状态
		this.setState( state =>({sum:state.sum+1}))
	}

	//eslint-disable-next-line
	changeSum = ()=>{
		//对象式的setState，适用于：新状态不依赖于原状态
		this.setState({sum:99})
	}
}
