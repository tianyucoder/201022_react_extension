import React, { Component} from 'react'
import B from './B'
import myContext from './myContext'

const {Provider} = myContext

export default class A extends Component {
	state = {
		car:'马自达·阿特兹',
		name:'老刘',
		address:'北七家镇'
	}
	render() {
		return (
			<div style={{backgroundColor:'orange',padding:'10px'}}>
				<h1>我是A组件，我有台车：{this.state.car}</h1>
				{/* 使用Provider提供数据 */}
				<Provider value={{...this.state}}>
					<B/>
				</Provider>
			</div>
		)
	}
}
