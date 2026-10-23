export default function Privacy() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div
          className="relative h-[350px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/privacy-bg.jpg")`,
          }}
        >
          <h1 className="text-white text-5xl font-serif tracking-wide">
            POGOJI POSLOVANJA
          </h1>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-serif mb-8 text-center">
            POGOJI POSLOVANJA
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
                      <p className="italic">
              "Zakon o varstvu podatkov si lahko ogledate na spletni strani IPS.
              <a 
                href="https://pisrs.si/pregledPredpisa?id=ZAKO3906" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline hover:text-blue-700"
              >
              Na tej povezavi
              </a>."
            </p>

            <p>
              Pri DOMEN MLAKAR S.P, foto in video storitve, Domen Mlakar s.p., se trudimo, da
              se počutite varno in, da vaše osebne informacije čim bolj
              zaščitimo. Zavezano se vsem obiskovalcem pri ravnanju z vašimi
              osebnimi podatki, zato vse osebne podatke obdelujemo v skladu z
              Zakonom o varstvu osebnih podatkov, Zakonom o elektronskih
              komunikacijah ter Splošno uredbo o varstvu podatkov (GDPR).
            </p>

            <p>
              Namen Pravilnika o zasebnosti je, da vas obvestimo o namenih, za
              katere pridobimo vaše osebne informacije, kako bodo uporabljene,
              kakšne pravice imate v zvezi z informacijami, ki jih hranimo o
              vas, ter kako jih uveljavljate.
            </p>

            <ol className="list-decimal pl-6 space-y-6">
              <li>
                Upravljavec podatkov: Upravljavec vaših osebnih podatkov je
                Domen Mlakar S.P  Golobova ulica 24, 2250 Ptuj, Slovenija.
              </li>
              <li>
                Namen obdelave podatkov in vrste osebnih podatkov: Vse osebne
                podatke, ki nam jih posredujete, bomo obravnavali skrbno in jih
                uporabljali samo za namene, za katere ste nam jih posredovali.
                Če bo potrebno vaše podatke obdelati še druge namene, vas bomo
                predhodno obvestili in pridobili vaše soglasje.
              </li>
              <li>
                Obisk in uporaba spletnega mesta: Vsako, ko obiščete spletno
                mesto www.studiozima.si , www.poroke.studiozima.si in njegove
                poddomene, se spletni strežnik samodejno zabeleži v spletni
                dnevniški datoteki (na primer IP številka – številka, ki
                identificira določen računalnik ali drugo napravo povezano z
                internetom, različica brskalnika, čas obiska in podobno). Te
                podatke obdelujemo z namenom vodenja statistike obiskov vaših
                spletnih mest. Pridobljeni podatki obdeluje bomo in jih ne
                povezuje z drugimi podatki.
              </li>
            </ol>

            <p>
              Če na spletnem mestu obstajajo povezave do drugih spletnih mest,
              ki niso povezana s ponudnikom, ne prevzemamo odgovornosti za
              varovanje podatkov na teh spletnih mestih.
            </p>

            <ol className="list-decimal pl-6 space-y-6" start={4}>
              <li>
                Obdelava osebnih podatkov naših strank: Informacije, ki nam jih
                posredujete v okviru povpraševanja, nam jih posredujete
                prostovoljno, kar je osnova za vaše soglasje za komunikacijo
                preko elektronske pošte za namene komunikacije glede vašega
                povpraševanja. Te informacije bomo uporabljali le za potrebe
                priprave ponudbe in komunikacije med nami. Za kakršno
                informacij, ki vse nam jih posredovali, ste sami odgovorni.
              </li>
              <li>
                Uporabniki podatkov: Vse podatke zbiramo na podlagi svojih
                poslovnih osebnih podatkov, bomo uporabljali v skladu z namenom,
                za katerega so bili zbrani, in jih ne bomo posredovali tretjim
                osebam brez vašega soglasja. Osebnih podatkov strank zaradi
                zaupnega odnosa med specializantom in ponudnikom ne razkrivamo
                tretjim osebam.
              </li>
            </ol>

            <p>
              V okviru zakonske pristojnosti se vaši osebni podatki lahko
              posredujejo naslednjim obdelovalcem:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                ponudniki poštnih storitev, ponudniki storitev dostave,
                ponudniki storitev uničevanja datotek in storiški ponudniki;
              </li>
              <li>
                ponudniki storitev informacijske tehnologije v okviru
                vzdrževanja programske opreme in strojne opreme;
              </li>
              <li>skrbnik za varah spletne strani.</li>
            </ul>

            <p>
              Ponudnik se zavezuje, da ne bo posredoval ali prenesel vaših
              osebnih informacij tretji državi ali kateri koli mednarodni
              organizaciji.
            </p>

            <ol className="list-decimal pl-6 space-y-6" start={6}>
              <li>
                Obdobje hrambe: Zagotavljamo vam, da vaše informacije hranimo le
                toliko časa, kolikor je potrebno za izpolnitev namena, za
                katerega so bile zbrane in uporabljene. In sicer:
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    Dnevniki spletnega strežnika se hranijo 3 (tri) mesece;
                  </li>
                  <li>
                    Vaše kontaktne informacije za potrebe komunikacije
                    obdelujemo do zaključene transakcije ali končane
                    komunikacije;
                  </li>
                  <li>
                    Če za različne podatke, določene za realizacijo pogodb,
                    velja drug pravni rok hrambe (na primer računovodske ali
                    davčne podatke je rok hrambe 10 (deset) let. V tem času je
                    obdelava podatkov omejena.
                  </li>
                </ul>
              </li>
              <li>
                Po koncu potrebe za upravljanje podatkov, to je po namenu, za
                katerega so bili zbrani, se informacije takoj nepovratno in
                trajno izbrišejo.
              </li>
              <li>
                Vaše pravice: Ponudnik zagotavlja uveljavljanje vaših pravic, do
                katerih ste upravičeni v zvezi z obdelavo vaših osebnih
                informacij.
              </li>
            </ol>

            <p>Kategorije lahko zahtevate od podjetja:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>izbris vaših podatkov in hkrati preprečevanj;</li>
              <li>
                določene kopije vaših podatkov, ki se hranijo za namene
                preprečevanja;
              </li>
            </ul>

            <p>
              8. Spremembe: Pridržujemo si pravico, da občasno posodobimo
              oziroma Pravilnik revidiramo okoliščinam in zakonodaji na področju
              varstva osebnih podatkov. Zato vas vljudno prosimo, da pred vsaki
              kakršnim koli posredovanjem osebnih informacij preverite trenutno
              različico, da boste obveščeni o morebitnih spremembah ali
              posodobitvah.
            </p>

            <p>
              Podatki, Obvestilo o uporabi spletnih piškotkov: Uporabljamo
              spletne piškotke z namenom zagotavljanja boljše funkcionalnosti,
              uporabniške izkušnje, varnosti, nemoteno delovanje in druge
              uporabniške za spletnem mestu.
            </p>

            <p>
              Nujni piškotki so nujni za optimalno delovanje spletnega mesta,
              medtem ko se drugi piškotki uporabljajo za prilagajanje vsebin in
              oglasov ter za analiziranje prometa na spletnem mestu.
            </p>

            <p>
              Za več informacij preberite posebno o spletnih piškotkih, kjer
              lahko volite zavrnete posamezne spletne piškotke.
            </p>

            <p>
              To spletno mesto uporablja naslednje piškotke: Nujni: Ti piškotki
              so nujni za delovanje spletnega mesta in jih ni mogoče izklopiti
              iz sistema.
            </p>

            <p>
              Funkcionalni: Ti piškotki se uporabljajo za shranjevanje vaših
              nastavitev na spletnem mestu, kot so regija, jezik, preference,
              itd.
            </p>

            <p>
              Analitični: Ti piškotki nam omogočajo, da spremljamo in svoje
              prostore, da lahko sprejemajo in izboljšamo delovanje našega
              spletnega mesta.
            </p>

            <p>
              Trženje: To so piškotki, ki jih nastavijo naši partnerji za
              oglaševanje.
            </p>
            <p>
              Hvala za razumevanje.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
