import React, { Component,createContext} from 'react'

//调用createContext，创建一个“数据指挥官” ---- 创建Context容器对象
const carContext = createContext()
//从“数据指挥官”身上获取能传递数据的Provider，也可以获取接收数据的Consumer
const {Provider,Consumer} = carContext

function D(){
	return (
		<div style={{backgroundColor:'pink',padding:'10px'}}>
			<h1>
				我是D组件，我收到了车:
				<Consumer>
					{data => data.car}
				</Consumer>
			</h1>
		</div>
	)
}

class C extends Component {
	//声明接收数据
	static contextType = carContext
	render() {
		console.log(this)
		return (
			<div style={{backgroundColor:'gray',padding:'10px'}}>
				<h1>我是C组件，我收到了车:{this.context.car}</h1>
			</div>
		)
	}
}

class B extends Component {
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
