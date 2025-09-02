import MikroLogo from '../assets/logos/Frame 7.svg'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function IndexPage() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-start px-6 py-12 min-h-screen text-center dark:bg-gray-800">
        <img 
          src={MikroLogo} 
          alt="Mikro Logo" 
          width="256" 
          height="256" 
          className="overflow-hidden"
        />

        <h2 className="text-mikro-green dark:text-mikro-green-light text-2xl font-bold mt-4">
          Linjeforeningen for Robotikk og Intelligente systemer
        </h2>

        <p className="mt-6 max-w-2xl text-gray-800 dark:text-gray-200 leading-relaxed">
          Mikro er en studentforening ved Institutt for informatikk ved Universitetet i Oslo. 
          Våre arrangementer er hovedsaklig rettet mot de studenter som studerer Informatikk: 
          robotikk og intelligente systemer.
        </p>

        <p className="mt-4 max-w-2xl text-gray-800 dark:text-gray-200 leading-relaxed">
          I et steg å forbedre studiemiljøet på tvers av kull og å bli kjent med nye personer 
          jobber vi også for å forbedre studentmiljøet på hele IFI. De fleste av våre arrengement 
          er åpent for alle og vi oppfordrer absolutt alle til å bli med!
        </p>
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage;
