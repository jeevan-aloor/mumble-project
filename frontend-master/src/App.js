import './App.css';
import {BrowserRouter, Routes, Route, Link,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import StorageOptions from "./pages/StorageOptions"
import MintingOptions from "./pages/MintingOptions"
import About from "./pages/AboutUs"
import PersonalizeRecomendation from "./pages/PersonalizeRecomendation"
import Contactus from "./pages/Contactus"
import Dashboard from './pages/Dashboard';
import ArEnable from "./pages/ArEnabled"
import Valuation from "./pages/Valuation"
import Subscription from "./pages/Subscription"
import Upload1 from "./pages/Upload-1"
import Upload2 from "./pages/Upload2"
import Faq from "./pages/Faq"
import Profile from "./pages/Profile"
import Activity from "./pages/Activity"
import Search from "./pages/Search"
import Notfound from './components/Notfound';
import Item from './pages/Item';
import Item2 from './pages/item2';
import EditProfile from './pages/EditProfile';
import Profile2 from './pages/Profile2';
import Redeem from './pages/Redeem';
import Connectwallet from './pages/Connectwallet';
import Connectwallet2 from './pages/connectWallet2';
import Connectwallet3 from './pages/Connectwallet3';
import PageLinks from './pages/PageLinks';
import Routercomp from './Router/router';
import Display from './Router/display';
function App() {
  return (
      
      <>
      <Header/>
      {/* <Display/> */}
      <Routercomp/>
      {/* <Routes> */}
        {/* <Route exact path={'/login'} element={<Login/>} /> */}
        {/* </Routes> */}
        {/* <main> */}
          {/* <Routes>
            <Route exact path={'/'} element={<Home/>} />
            <Route exact path={'/register'} element={<Register/>} />
            <Route exact path={'/storage-options'} element={<StorageOptions/>} />
            <Route exact path={'/minting-options'} element={<MintingOptions/>} />
            <Route exact path={'/aboutus'} element={<About/>} />
            <Route exact path={'/personalize-recomendation'} element={<PersonalizeRecomendation/>} />
            <Route exact path={'/contactus'} element={<Contactus/>} />
            <Route exact path={'/dashboard'} element={<Dashboard/>} />
            <Route exact path={'/ar-enabled'} element={<ArEnable/>} />
            <Route exact path={'/valuation'} element={<Valuation/>} />
            <Route exact path={'/subscription'} element={<Subscription/>} />
            <Route exact path={'/upload-1'} element={<Upload1/>} />
            <Route exact path={'/upload-2'} element={<Upload2/>} />
            <Route exact path={'/faq'} element={<Faq/>} />
            <Route exact path={'/profile'} element={<Profile/>} />
            <Route exact path={'/activity'} element={<Activity/>} />
            <Route exact path={'/search'} element={<Search/>} />
            <Route exact path={'/not-found'} element={<Notfound/>} />
            <Route exact path={'/item-1'} element={<Item/>} />
            <Route exact path={'/item-2'} element={<Item2/>} />
            <Route exact path={'edit-profile'} element={<EditProfile/>} />
            <Route exact path={'profile2'} element={<Profile2/>} />
            <Route exact path={'redeem'} element={<Redeem/>} />
            <Route exact path={'connect-wallet'} element={<Connectwallet/>} />
            <Route exact path={'connect-wallet2'} element={<Connectwallet2/>} />
            <Route exact path={'connect-wallet3'} element={<Connectwallet3/>} />
            <Route exact path={'page-links'} element={<PageLinks/>} />

          </Routes> */}
          <Footer/>
        {/* </main> */}
        </>
      
  );
}

export default App;