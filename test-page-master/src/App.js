import '../src/StaticReactComponent/CSS/App.css';
import Dashboard from './DashBord/Dashboard';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddCourse from './course/AddCourse';
import ViewCourse from './course/ShowCourse';
import EditCourse from './course/EditCourse';
import EditChapter from './Chapter/EditChapter'
import AddChapter from './Chapter/AddChapter'
import ViewChapter from './Chapter/ViewChapter'

// import Demo from './Demo';
function App() {
  const arr=["shubham","abhijeet","jitendra"];

   const Nname=()=>{
      return <>
        {
          arr.map((data)=>(
            <span key={data}>{data}</span>
          ))
        }
      </> 
   }
  return (
    <>
       <Router>

        <Routes>
            <Route exact path='/' Component={Nname}/>
            {/* <Route exact path='/' Component={Demo} /> */}
            <Route exact path='/:id' Component={Dashboard}/>
            <Route exact path='/addCourse' Component={AddCourse}/>
            <Route exact path='/viewCourse' Component={ViewCourse}/>
            <Route exact path='/editPage/:id' Component={EditCourse}/>

            <Route exact path='/editChapter/:id' Component={EditChapter}/>
            <Route exact path='/addChapter' Component={AddChapter}/>
            <Route exact path='/viewChapter' Component={ViewChapter}/>
           



           
        </Routes>
       </Router>
    </>
  );
}

export default App;
