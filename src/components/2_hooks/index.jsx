import React from 'react'
import ReactDOM from 'react-dom'

export default function Count() {

	const userInput = React.useRef()
	const [sum,setSum] = React.useState(0)
	const [name,setName] = React.useState('tom')

	React.useEffect(()=>{
		const timer = setInterval(() => {
			setSum( (a)=>a+1 )
		},1000);
		return ()=> clearInterval(timer)
	},[])
	
	function increment(){
		setSum(sum+1)
	}

	function huanming(){
		setName('jack')
	}

	function death(){
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	function show(){
		console.log(userInput.current.value)
	}

	return (
		<div>
			<h1>当前求和为:{sum}</h1>
			<h3>名字为：{name}</h3>
			<input type="text" ref={userInput}/>
			<button onClick={increment}>点我+1</button>
			<button onClick={huanming}>点我换名</button>
			<button onClick={death}>点我卸载组件</button>
			<button onClick={show}>点我提示输入</button>
		</div>
	)
}

