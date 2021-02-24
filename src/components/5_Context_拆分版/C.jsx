import React, { Component} from 'react'
import myContext from './myContext'

export default class C extends Component {
	//声明接收数据
	static contextType = myContext
	render() {
		console.log(this)
		return (
			<div style={{backgroundColor:'gray',padding:'10px'}}>
				<h1>我是C组件，我收到了车:{this.context.car}</h1>
			</div>
		)
	}
}
