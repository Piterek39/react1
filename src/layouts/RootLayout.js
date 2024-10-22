import React from 'react';
import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';

const RootLayout = ({ items, children }) => {
    return (
        <div id="root">
            <NavBarMenu items={items} />
            <main className="content">{children}</main>
            <Footer />
        </div>
    );
};

export default RootLayout;
