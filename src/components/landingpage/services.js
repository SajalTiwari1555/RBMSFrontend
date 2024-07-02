// components/ButtonComponent.js
"use client";
import ServicesCard1 from "../landingpage/servicescards/services"
import ServicesCard2 from "../landingpage/servicescards/services2"
import ServicesCard3 from "../landingpage/servicescards/services3"
import ServicesCard4 from "../landingpage/servicescards/services4"
import ServicesCard5 from "../landingpage/servicescards/services5"
import ServicesCard6 from "../landingpage/servicescards/services6"
import React, { useState } from 'react';

const ComponentOne = () => <div><ServicesCard1 /></div>;
const ComponentTwo = () => <div><ServicesCard2 />t</div>;
const ComponentThree = () => <div><ServicesCard3 /></div>;
const ComponentFour = () => <div><ServicesCard4 /></div>;
const ComponentFive = () => <div><ServicesCard5 /></div>;
const Componentsix = () => <div><ServicesCard6 /></div>;

const ButtonComponent = () => {
    const [ selectedComponent, setSelectedComponent ] = useState( null );
    const renderComponent = ( component ) => {
        switch ( component ) {
            case 'componentOne':
                return <ComponentOne />;
            case 'componentTwo':
                return <ComponentTwo />;
            case 'componentThree':
                return <ComponentThree />;
            case 'componentFour':
                return <ComponentFour />;
            case 'ComponentFive':
                return <ComponentFive />;
            case 'Componentsix':
                return <Componentsix />;
            default:
                return <ComponentOne />;
        }
    };

    return (
        <div className=" ">
            <div className="flex w-screen flex-col justify-center  gap-2">
                <div>
                    <h1 className="flex lg:text-5xl font-bold justify-center">
                        Explore all our<span className=" text-blue-600"> Services. ...</span>
                    </h1>
                </div>
                <div className="flex lg:pt-10 lg:p-20 flex-col justify-center text-gray-700 gap-5">
                    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">
                        <button onClick={() => setSelectedComponent( 'componentOne' )} className="rounded-3xl border p-3">SEO </button>
                        <button onClick={() => setSelectedComponent( 'componentTwo' )} className="rounded-3xl border p-3">CONTENT MARKETING</button>
                        <button onClick={() => setSelectedComponent( 'componentThree' )} className="rounded-3xl border p-3">PAID MARKETING</button>
                        <button onClick={() => setSelectedComponent( 'componentFour' )} className="rounded-3xl border p-3">DESIGN & DEVELOPMENT</button>
                        <button onClick={() => setSelectedComponent( 'ComponentFive' )} className="rounded-3xl border p-3">Popular Services</button>
                        <button onClick={() => setSelectedComponent( 'Componentsix' )} className="rounded-3xl border p-3">Company Incorporation
                        </button>
                        <button onClick={() => setSelectedComponent( 'Componentsix' )} className="rounded-3xl border p-3">Certificates & Licenses</button>

                    </div>
                    <div style={{ marginTop: '40px' }} className="text-green-600">{selectedComponent && renderComponent( selectedComponent )}</div>
                </div>
            </div>
        </div>

    );
};
export default ButtonComponent;
