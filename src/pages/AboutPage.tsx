import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Navbar />
            <main className="flex flex-col items-center justify-start max-w-3xl mx-auto px-6 py-12 space-y-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                    Mikro – Studentforeningen for robotikk og intelligente systemer 🤖
                </h1>

                <section className="space-y-4 text-gray-700 dark:text-gray-300">
                    <h2 className="text-2xl font-semibold">Om Mikro</h2>
                    <p>
                        Mikro er linjeforeningen ved Institutt for informatikk ved Universitetet i Oslo, spesielt rettet mot studenter på programmet <strong>Informatikk: Robotikk og Intelligente Systemer</strong>. Vårt mål er å skape både et sosialt og faglig miljø hvor studenter kan møtes på tvers av kull, utveksle ideer og bygge nettverk. Selv om vi har et faglig fokus, er de fleste arrangementene våre åpne for alle studenter ved IFI – alle er hjertelig velkommen!
                    </p>
                </section>

                <section className="space-y-4 text-gray-700 dark:text-gray-300">
                    <h2 className="text-2xl font-semibold">Bakgrunn</h2>
                    <p>
                        Foreningen ble grunnlagt av Omid Mirmotahari, med en visjon om å være et samlingspunkt for studenter på I:NOR-programmet. Siden starten har Mikro fokusert på å kombinere faglige og sosiale aktiviteter for å forbedre både studiemiljøet og studentopplevelsen på IFI.
                    </p>
                </section>

                <section className="space-y-4 text-gray-700 dark:text-gray-300">
                    <h2 className="text-2xl font-semibold">Formål</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Skape et godt sosialt miljø for studenter på robotikk og intelligente systemer.</li>
                        <li>Tilby faglige arrangementer som inspirerer og gir innsikt i forskning og næringsliv.</li>
                        <li>Bidra til å styrke det faglige miljøet ved IFI generelt.</li>
                    </ul>
                </section>

                <section className="space-y-4 text-gray-700 dark:text-gray-300">
                    <h2 className="text-2xl font-semibold">Typiske aktiviteter</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Bowlingkvelder</strong> 🎳</li>
                        <li><strong>10-minuttersfester</strong> 🕺</li>
                        <li><strong>TOD-talks</strong></li>
                        <li><strong>IKEA-turer</strong> 🛋️</li>
                        <li><strong>Pokerkvelder</strong> ♠️♥️</li>
                        <li><strong>Juleølsmaking</strong> 🍻</li>
                        <li><strong>Hytteturer</strong> ⛷️🏔️</li>
                        <li><strong>Fagkvelder</strong> 📚</li>
                    </ul>
                    <p>
                        Her inviterer vi masterstudenter, forelesere og professorer innen nanoelektronikk, robotikk og digital signalbehandling. De holder foredrag om forskning, pågående prosjekter og masteroppgaver. I tillegg arrangerer vi presentasjoner av bedrifter og forskningsgrupper, samt uformelle sosiale kvelder med pizza og brettspill.
                    </p>
                </section>

                <section className="space-y-4 text-gray-700 dark:text-gray-300">
                    <h2 className="text-2xl font-semibold">Hvorfor bli med?</h2>
                    <p>
                        Mikro er mer enn bare en linjeforening – vi er et sted hvor du kan utvikle både faglige ferdigheter og sosiale nettverk, få nye venner, og bli en del av et engasjert fellesskap som varer gjennom hele studietiden din ved IFI.
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default AboutPage;
