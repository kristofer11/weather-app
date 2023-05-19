import './App.css';
import Search from './components/search/search'

function App() {

    const handleOnSearchChange = (searchData) => {
        console.log(searchData);
    }

  return (
    <div className='container'>
        <h1>Weather App</h1>
        <div>
            <Search onSearchChange={handleOnSearchChange}/>
        </div>
    </div>
  )
}

export default App;
