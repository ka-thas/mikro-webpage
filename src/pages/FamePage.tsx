import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const boards = [
  /* {
    year: "2024 – 2025",
    members: ["Gard Lier Sveen – Leder",
      "Matz Overby – Økonomi",
      "Sylvelin Bernadette Furnes-Misje – PR-ansvarlig"
    ]
  }, */
  {
    year: "2023 – 2024",
    members: [
      "Ka Thas – Leder",
      "Emma Sofie Fjeld Brovold – Halvleder",
      "Iver Nygård Juul – Øko",
      "Eirik Bjørnson Jahr – Kiosk",
      "Sofie Larssen Markeset",
      "Helene Bye Humberset",
      "Finn Ivar Heggelien",
      "Matz Overby"
    ]
  },
  {
    year: "2022 – 2023",
    members: [
      "Elias Lynum Ringkjøb – Leder",
      "Ka Thas – Halvleder",
      "Trym Schalchian-Tabrizi Auren – Økonomi",
      "Mons Bjerkan – Kiosk",
      "Thea Hermansen Bakke",
      "Ada Hatland",
      "Markus Yuki Nishimure",
      "Mattis Stene-Johansen"
    ]
  },
  {
    year: "2021 – 2022",
    members: [
      "Thanh Thao Le – Leder",
      "Thyra Liang Aakvåg – Nestleder",
      "Tobias Lømo",
      "Trym Schalchian-Tabrizi Auren",
      "Sondre Rørvik Kippernes",
      "Elias Lynum Ringkøb",
      "Samuel Valland Lyngset",
      "Oscar Hæstad Bjørnstad"
    ]
  },
  {
    year: "2018 – 2019",
    members: [
      "Eirik Solheim Ølberg – Leder",
      "Hilmar Elverhøy – Nestleder",
      "Peter Nordstein – Økonomiansvarlig",
      "Eirik Berg – Informasjonsansvarlig",
      "Georg Magneshaugen – Algolansvarlig",
      "Johannes Holstad",
      "Pål Primstad",
      "Elias Ramsgaard"
    ]
  },
  {
    year: "2017 – 2018",
    members: [
      "Isak Eriksen Bjørn – Leder",
      "Jesper Anderson – Nestleder",
      "Peter Norstein – Økonomiannsvarlig",
      "Nikolai René Berg – Algolansvarlig",
      "Pål Primstad",
      "Jeanette Kirkerud",
      "Tor Jan Derek Berstad",
      "Mari Gilje Galta",
      "Bjørn Ivar Teigen – Komiteleder for MKL"
    ]
  },
  {
    year: "2016 – 2017",
    members: [
      "Isak Eriksen Bjørn – Leder",
      "Jesper Anderson – Nestleder",
      "Ole Edvin Skjeltorp – Økonomiansvarlig",
      "Tor Jan Derek Berstad",
      "Pål Primstad",
      "Jeanette Kirkerud",
      "Mathias Ciarlo Thorstensen",
      "Peter Norstein",
      "Bjørn Ivar Teigen – Komiteleder for MKL"
    ]
  },
  {
    year: "2015 – 2016",
    members: [
      "Vetle Bu Solgård – Leder",
      "Nirusan Tharmanathan – Nestleder",
      "Anders Skibeli Rokkones – Økonomiansvarlig",
      "Ognjen Rasinjak – PR-ansvarlig",
      "Ole-Christian Hagenes",
      "Marius Lunder Lillestøl",
      "Elsie Mestl",
      "Isak Bjørn",
      "Bjørn Ivar Teigen – Komiteleder for MKL",
      "Espen Wøien Olsen – Ressursperson"
    ]
  },
  {
    year: "2014 – 2015",
    members: [
      "Espen Wøien Olsen – Leder",
      "Bjørn Ivar Teigen – Nestleder",
      "Anders Rokkones – Økonomiansvarlig",
      "Celina Moldestad – PR ansvarlig"
    ]
  }

];

function FamePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Wall of Fame 🏆
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Her hyller vi tidligere styremedlemmer i Mikro!
        </p>
        {boards.map((board) => (
          <section key={board.year} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-mikro-green dark:text-mikrogreen-light mb-4">
              {board.year}
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {board.members.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default FamePage;
