import React from 'react';
import About from '../components/About';
import Title from '../components/Title';

const MainPage = () => {
    return (
        <div>
            <Title title="Hello world" />
            <About info={{ title: "Some Title", body: "Some body" }} />
        </div>
    );
};

export default MainPage;
