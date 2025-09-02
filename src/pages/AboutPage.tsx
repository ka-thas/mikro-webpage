import Navbar from '../components/Navbar';


function AboutPage(){
    return <div className="min-h-screen bg-blue-100 dark:bg-gray-900 transition-colors">
        <Navbar />
        <main className="flex flex-col items-center justify-start">
            <h1 className="text-4xl font-bold">Om oss</h1>
        </main>
    </div>
}
export default AboutPage;