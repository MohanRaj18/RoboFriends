import React,{Component} from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import '../style/App.css';
import Scroll from '../components/Scroll';

class App extends Component{
  constructor(){
    super()
    this.state = {
        searchField:'',
        robotList:[]
    }
  }

  componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({robotList:users}));
  }

  onSearch = (event) => {
   this.setState({searchField : event.target.value})
  } 

  render(){
    const filteredRobots = this.state.robotList.filter(
        robot => {
          return robot.name.toLowerCase().includes(
             this.state.searchField.toLowerCase()
           )
        }
       )
   if(this.state.robotList.length>0){
    return(
        <div className='tc m4'>
        <h1 className='f1'>Robo Friends</h1>
        <SearchBox onSearch={this.onSearch}/>
        <Scroll className='scroll'>
        <CardList robots={filteredRobots}/>
        </Scroll>
       </div>
     )
   }
   else{
    return(
        <div className='tc'>
            <h1 className='f1'>LOADING</h1>
        </div>
    )
   }
    
  }
   
}

export default App;