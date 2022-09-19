import Navbar from "./Components/Navbar/Navbar";
import {Routes, Route} from 'react-router-dom';
import Home from "./Containers/Home/Home";
import AddArticle from "./Containers/AddArticle/AddArticle";
import Article from "./Containers/Article/Article";
import EditArticle from "./Containers/EditArticle/EditArticle";

function App() {
  return (
    <div className="App">
      <Navbar/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/write' element={<AddArticle/>}/>
            <Route path='/edit/:slug' element={<EditArticle/>}/>
            <Route path='/article/:slug' element={<Article/>}/>
        </Routes>
    </div>
  );
}

export default App;
