import React from 'react';
import Navbar from '../components/Navbar';


function AboutPage(){
    return <div>
        <Navbar />
        <main className="flex flex-col items-center justify-start min-h-screen">
            <h1 className="text-4xl font-bold">Om oss</h1>
        </main>
    </div>
}
export default AboutPage;