import React from 'react'
import myContext from './myContext'
const {Consumer} = myContext

export default function D(){
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


