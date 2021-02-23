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
		//获取原来的sum
		const {sum} = this.state
		//更新状态
		this.setState({sum:sum+1})
		console.log('@',this.state.sum)
	}

	//eslint-disable-next-line
	changeSum = ()=>{
		//函数体
	}
}
