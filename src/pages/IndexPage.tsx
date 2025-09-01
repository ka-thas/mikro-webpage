import MikroLogo from '../assets/logos/Frame 7.svg'
import Navbar from '../components/Navbar';


function IndexPage(){
    return <div className="bg-gray-100 min-h-screen">
            <Navbar />
        <main className="flex flex-col items-center justify-start min-h-screen">
            <div className="bg-mikro-green text-black p-4">Hello Mikro</div>

            <img src={MikroLogo} alt="Mikro Logo" width="256" height="256" className='overflow-hidden'/>
            <h2 className="text-mikro-green text-2xl font-bold mt-4">
                Linjeforeningen for Robotikk og Intelligente systemer
            </h2>
        </main>
    </div>
}
export default IndexPage;