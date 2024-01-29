import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import AboutUs from '../pages/AboutUs'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Item from '../pages/Item'
import StorageOptions from '../pages/StorageOptions'
import Register from '../pages/Register'
import MintingOptions from '../pages/MintingOptions'
import PersonalizeRecomendation from '../pages/PersonalizeRecomendation'
import Contactus from '../pages/Contactus'
import Dashboard from '../pages/Dashboard'
import EditProfile from '../pages/EditProfile'
import Loginj from '../pages/Valuation'
import Upload2 from '../pages/Upload2'
import Upload1 from '../pages/Upload-1'
import Notfound from '../components/Notfound'
import PageLinks from '../pages/PageLinks'
import Connectwallet from '../pages/Connectwallet'

// import ArEnable from '../pages/ArEnable'

function Routercomp() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/item" element={< Item />} />
            <Route exact path={'/register'} element={<Register />} />
            <Route exact path={'/storage-options'} element={<StorageOptions />} />
            <Route exact path={'/minting-options'} element={<MintingOptions />} />
            <Route exact path={'/personalize-recomendation'} element={<PersonalizeRecomendation />} />
            <Route exact path={'/contactus'} element={<Contactus />} />
            <Route exact path={'/dashboard'} element={<Dashboard />} />
            <Route exact path={'/edit'} element={<EditProfile />} />
            {/* <Route exact path={'/edit'} element={<EditProfile />} /> */}
            <Route exact path={'/loginnn'} element={<Loginj />} />
            <Route exact path={'/upload2'} element={<Upload2 />} />
            <Route exact path={'/upload1'} element={<Upload1 />} />
            <Route exact  path={'*'}  element={<Notfound/>} />
            <Route exact  path={'/page-links'}  element={<PageLinks/>} />
            <Route exact  path={'/connect-wallet'}  element={<Connectwallet/>} />
            {/* <Route exact  path={'/edit-profile'}  element={<EditProfile/>} /> */}
            {/* <Route exact path={'/ar-enabled'} element={<ArEnable />} /> */}
            {/* <Route exact path={'/valuation'} element={<Valuation />} />
            <Route exact path={'/subscription'} element={<Subscription />} />
            <Route exact path={'/upload-1'} element={<Upload1 />} />
            <Route exact path={'/upload-2'} element={<Upload2 />} /> */}
        </Routes>

    )
}

export default Routercomp