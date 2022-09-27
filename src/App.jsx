// hoan thanh https://flexboxfroggy.com/#vi toi bai 24 va chup lai kem ten (Huy Anh, Đạt)

// https://www.autograph.io/

// Đạt ->  UI Header
// Joe -> UI Slider tại mục Featured Editions, có thể slide được thì càng tốt
// Hoang Anh -> BreadCrumb
// Huy Anh -> Footer
// Dũng ->  Content -> UI mục Feature tai https://blog.autograph.io/

import Slider from './components/Slider';
import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Content } from './components/Content';
import Breadcrumb from './components/Breadcrumb';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';

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
    const isDisplayHeader = true;

    return (
        <div className='App'>
            {isDisplayHeader && <Header userData={user} customData='data' isAuth />}
            {/* Menu */}
            <Breadcrumb breadCrumb={breadCrumb} />
            <Slider sliders={sliders} />
            <Content />
            {/* Footer */}
            <BreadCrumb />
        </div>
    );
}

export default App;
