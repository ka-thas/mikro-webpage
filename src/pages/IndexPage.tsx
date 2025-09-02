import MikroLogo from '../assets/logos/Frame 7.svg'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


function IndexPage(){
    return (
        <div className="j,">
            <Navbar />
            <main className="flex flex-col items-center justify-start m-30 min-h-screen">
                <img 
                    src={MikroLogo} 
                    alt="Mikro Logo" 
                    width="256" 
                    height="256" 
                    className='overflow-hidden'
                />
                <h2 className="text-mikro-green dark:text-mikro-green-light text-2xl font-bold mt-4">
                    Linjeforeningen for Robotikk og Intelligente systemer
                </h2>
            </main>
            <Footer />
        </div>
    )
}

export default IndexPage;