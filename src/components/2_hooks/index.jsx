import React from 'react'

export default function Count() {
	console.log('@')

	const [sum,setSum] = React.useState(0)
	const [name,setName] = React.useState('tom')

	function increment(){
		setSum(sum+1)
	}

	function huanming(){
		setName('jack')
	}

	return (
		<div>
			<h1>当前求和为:{sum}</h1>
			<h3>名字为：{name}</h3>
			<button onClick={increment}>点我+1</button>
			<button onClick={huanming}>点我换名</button>
		</div>
	)
}

