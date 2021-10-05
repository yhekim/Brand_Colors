import './App.scss';
import Sidebar from './component/Sidebar';
import Content from './component/Content';
import MainContext from './MainContext';
import {useState,useEffect} from "react";
import BrandsData from "./brands.json";
import { Copied } from './component/Copied';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import { Collection } from './component/Collection';
import {forceCheck} from 'react-lazyload';


function App() {

  const brandsArray=[];

  Object.keys(BrandsData).map((key) => {

      brandsArray.push(BrandsData[key])

  });

const [brands,setBrands]=useState(brandsArray);

const [selectBrands,setSelectBrands]=useState([]);
const [copied,setCopied]=useState(false);
const [search,setSearch]=useState("");




useEffect(() => {
  const timeOut=setTimeout(() => {
    setCopied(false)
  }, 1500);
 
  return ()=>{
    clearTimeout(timeOut);
  }
 
},[copied])
useEffect(()=>{
setBrands(brandsArray.filter((brand)=>brand.title.toLowerCase().includes(search.toLowerCase())))
},[search])

  useEffect(()=>
  {
    forceCheck()

  },[brands])

  const data={
    search,
    brands,
    setSearch,
    setCopied,
    setBrands,
    selectBrands,
    setSelectBrands,
  
    
    
    
    

    
    

  }

  return (

  <>
  <MainContext.Provider value={data}>
  {copied && <Copied color={copied}/>}
  
  <Sidebar/>
  <Router>
    <Switch>
    <Route exact path="/" >
    <Content/>
    </Route>
    <Route  path="/collection/:slugs" >
    <Collection/>
    </Route>
    </Switch>
  </Router>
  
 
 
  </MainContext.Provider>
 
  
  </>
  );
}

export default App;
