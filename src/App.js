import  {useState , useEffect, useRef} from 'react';
import axios from 'axios';
import Coins from './Components/Coins/Coins';
import Coin from './Routes/Coin/Coin';
import {Routes , Route, BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';





function App() {
  const [coins , setCoins] = useState([]);
  const url = process.env.REACT_APP_API_URI;
  const shouldLog = useRef(true);
  useEffect(()=> {
    if(shouldLog.current){
      shouldLog.current = false;

      axios.get(url).then((response)=>{
        setCoins(response.data)
        console.log(response.data[5])
        
      }).catch((error)=>{
        console.log(error)
      })
    }
    
    
  }, [url]);

  return (
    <>
    <Navbar/>
    <BrowserRouter basename='/react-app'>
      <Routes>
        
        <Route path='/react-app' element={<Coins coins={coins}/> } />
        <Route path='/coin' element={<Coin/>}>
          <Route path=':coinId' element={<Coin/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    
    

    <Footer/>
    
    
    </>
  );
}

export default App;
