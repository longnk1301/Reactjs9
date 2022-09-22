// co 2 kieu viet
// function component
// class component

// < reactjs 16.8
//class component la 1 statefull -> co the tao state trong component
//function component laf 1 stateless -> khong the tao state trong component, chi co the nhan props tu component khac pass qua

//>= reactjs 16.8
//function component laf 1 stateless + hooks -> statefull -> co the tao state trong component

//State: la du lieu, co the thay doi va cap nhat du lieu
//Props: dung de truyen du lieu giua cac component voi nhau

//useState la 1 hook de quan ly state trong 1 component

//BT:
//Thêm component Menu gom 5 menus(do nguoi lam tu nghi) la 1 state tu app pass qua (Huy Anh)
//Them slide component gom 4 sliders, du lieu tu App chuyen qua (Hoang Anh)
//Them BreadCrumb component gom 3 tabs, du lieu tu App chuyen qua (Dung)
//Them Content component gom info trang chu, du lieu tu App chuyen qua (Joe)
//Them Footer component gom info cua 1 footer, du lieu tu App chuyen qua (Dat)

import Slider from './components/Slider';
import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Content } from './components/Content';
import Breadcrumb from './components/Breadcrumb';

function App() {
    const [user] = useState({
        name: 'Long',
        isAuth: true,
    });

    const [sliders] = useState({
        slider1: 'Slider1',
        slider2: 'Slider2',
        slider3: 'Slider3',
        slider4: 'Slider4',
    });

    const [breadCrumb] = useState(['Home', 'Product', 'Item...']);

    return (
        <div className="App">
            <Header userData={user} customData="data" isAuth />
            {/* Menu */}
            <Breadcrumb breadCrumb={breadCrumb} />
            <Slider sliders={sliders} />
            <Content />
            {/* Footer */}
        </div>
    );
}

export default App;
