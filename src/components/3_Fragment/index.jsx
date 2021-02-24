import React, { Component,Fragment } from 'react'

export default class Person extends Component {
	state = {
		persons:[
			{id:'001',name:'tom',age:18,sex:'男'},
			{id:'002',name:'jack',age:19,sex:'女'}
		]
	}
	render() {
		return (
			<div className="person">
				{
					this.state.persons.map((personObj)=>{
						return (
							<Fragment key={personObj.id}>
								<div>{personObj.name}</div>
								<div>{personObj.age}</div>
								<div>{personObj.sex}</div>
							</Fragment>
						)
					})
				}
			</div>
		)
	}
}
