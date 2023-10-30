import React,{ Component} from 'react';
class Checklist extends Component{
	constructor(props){
		super(props);

		this.state = {
		items: [ 
			{id:1, text:'Item1',completed:false},
			{id:2, text:'Item2',completed:false},
			{id:3, text:'Item3',completed:false},
			// Add more items as needed

		],
	};

 }

handelToggle = (itemId)=> {
	this.setState((prevState) => ({
		items:prevState.items.map((item)=>item.id === itemId ? {...item,completed: !item.completed}:item
		),
	}));
};

render() {
	return(
		<div>
			<h2>Checklist</h2>
			<ul>
				{this.state.items.map((item)=>(
					<li key={item.id}>
						<label>
							<input 
							type="checkbox"
							checked={item.completed}
							onChange={()=>this.handelToggle(item.id)}
							/>
							{item.text}
						</label>
					</li>
				))}
			</ul>
		</div>
	);


 }

}
export default Checklist;