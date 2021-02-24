import React, { Component} from 'react'
import C from './C'
import D from './D'

export default class B extends Component {
	render() {
		return (
			<div style={{backgroundColor:'skyblue',padding:'10px'}}>
				<h1>我是B组件,{this.context.car}</h1>
				<C/>
				<D/>
			</div>
		)
	}
}