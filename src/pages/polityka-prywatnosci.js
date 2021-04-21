import React from "react";
import SEO from "../components/common/seo.js";
import Layout from "../components/common/layout";
import Navigation from "../components/navigation/navigation";
import Header from "../components/sections/header";
import Map from "../components/sections/map";
import Contact from "../components/sections/contact";
import { Dot, Container } from "../components/global";
import styled from "styled-components";
import { ADDRESS } from "../components/const";
const Rodo = () => (
  <Layout>
    <SEO title='Polityka Prywatności' />
    <Navigation />
    <Header />
    <Article id='page'>
      <Title>Polityka Prywatności</Title>

      <Container>
        <h5>Obowiązek informacyjny RODO</h5>
        <p>
          Poniższa informacja stanowi zwięzły, zrozumiały i przejrzysty skrót
          informacji zamieszczonych w Polityce Prywatności odnośnie
          Administratora danych, celu i sposobu przetwarzania danych osobowych
          oraz Twoich praw w związku z tym przetwarzaniem, w formie wymaganej do
          spełnienia obowiązku informacyjnego RODO. Szczegóły dotyczące sposobu
          przetwarzania i podmiotów uczestniczących w tym procesie dostępne są
          we wskazanej polityce.
        </p>
        <h5>Kto jest administratorem danych?</h5>
        <p>
          Administratorem Danych Osobowych (dalej Administrator) jest firma
          <span className='douzupelnienia'> {ADDRESS.nazwa_podmiotu}</span>,
          prowadząca działalność pod adresem:{" "}
          <span className='douzupelnienia'> {ADDRESS.address}</span>, o nadanym
          numerze identyfikacji podatkowej (NIP):{" "}
          <span className='douzupelnienia'> {ADDRESS.nip}</span>, świadcząca
          usługi drogą elektroniczną za pośrednictwem Serwisu
        </p>
        <h5>Jak można skontaktować się z administratorem danych?</h5>
        <p>
          Z Administratorem można skontaktować się w jeden z poniższych sposobów
        </p>
        <List>
          <Dot>
            <strong>Adres poczty elektronicznej</strong> -{" "}
            <span className='douzupelnienia'> {ADDRESS.mail}</span>
          </Dot>
          <Dot>
            <strong>Formularz kontaktowy</strong> - dostępny pod adresem:
            <a href={`${ADDRESS.www}/#contact`}>
              <span className='douzupelnienia'> {ADDRESS.www}/#contact</span>
            </a>
          </Dot>
        </List>
        <h5>Czy Administrator powołał Inspektora Danych Osobowych?</h5>
        <p>
          Na podstawie Art. 37 RODO, Administrator nie powołał Inspektora
          Ochrony Danych.
        </p>
        <p>
          W sprawach dotyczących przetwarzania danych, w tym danych osobowych,
          należy kontaktować się bezpośrednio z Administratorem.
        </p>
        <h5>Skąd pozyskujemy dane osobowe i jakie są ich źródła?</h5>
        <p>Dane pozyskiwane są z następujących źródeł:</p>
        <List>
          <Dot>od osób, których dane dotyczą</Dot>
          <Dot>
            w przypadku rejestracji przy użyciu portali społecznościowych, za
            wyrażoną świadomą zgodą tych osób, z tych portali społecznościowych
          </Dot>
        </List>
        <h5>Jaki jest zakres przetwarzanych przez nas danych osobowych?</h5>
        <p>
          W serwisie przetwarzane są <strong>dane osobowe zwykłe</strong>,
          podane dobrowolnie przez osoby, których dotyczą
          <br />
          <small>
            (Np. imię i nazwisko, login, adres e-mail, telefon, adres IP, itp.)
          </small>
        </p>
        <p>
          Szczegółowy zakres przetwarzanych danych dostępny jest w
          <a href={`${ADDRESS.www}/#contact`}>
            <span className='douzupelnienia'>
              {ADDRESS.www}/#polityka-prywatnosci
            </span>
          </a>
          .
        </p>
        <h5>Jakie są cele przetwarzania przez nas danych?</h5>
        <p>
          Dane osobowe dobrowolnie podane przez Użytkowników są przetwarzane w
          jednym z następujących celów:
        </p>
        <List>
          <Dot>
            Realizacji usług elektronicznych:<List></List>
          </Dot>
          <Dot>
            Komunikacji Administratora z Użytkownikami w sprawach związanych z
            Serwisem oraz ochrony danych
          </Dot>
          <Dot>Zapewnienia prawnie uzasadnionego interesu Administratora</Dot>
        </List>
        <h5>Jakie są podstawy prawne przetwarzania danych?</h5>
        <p>Serwis gromadzi i przetwarza dane Użytkowników na podstawie:</p>
        <List>
          <Dot>
            Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia
            27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
            przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
            takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
            rozporządzenie o ochronie danych)
            <List>
              <br />
              <Dot>
                <strong> art. 6 ust. 1 lit. a</strong>
                <br />
                <p>
                  osoba, której dane dotyczą wyraziła zgodę na przetwarzanie
                  swoich danych osobowych w jednym lub większej liczbie
                  określonych celów
                </p>
              </Dot>
              <Dot>
                <strong>art. 6 ust. 1 lit. b</strong>
                <br />
                <p>
                  przetwarzanie jest niezbędne do wykonania umowy, której stroną
                  jest osoba, której dane dotyczą, lub do podjęcia działań na
                  żądanie osoby, której dane dotyczą, przed zawarciem umowy
                </p>
              </Dot>
              <Dot>
                <strong>art. 6 ust. 1 lit. f</strong> <br />
                <p>
                  przetwarzanie jest niezbędne do celów wynikających z prawnie
                  uzasadnionych interesów realizowanych przez administratora lub
                  przez stronę trzecią
                </p>
              </Dot>
            </List>
          </Dot>
          <Dot>
            Ustawa z dnia 10 maja 2018 r. o ochronie danych osobowych (Dz.U.
            2018 poz. 1000)
          </Dot>
          <Dot>
            Ustawa z dnia 16 lipca 2004 r. Prawo telekomunikacyjne (Dz.U. 2004
            nr 171 poz. 1800)
          </Dot>
          <Dot>
            Ustawa z dnia 4 lutego 1994 r. o prawie autorskim i prawach
            pokrewnych (Dz. U. 1994 Nr 24 poz. 83)
          </Dot>
        </List>
        <h5>
          Jaki jest prawnie uzasadniony interes realizowany przez
          Administratora?
        </h5>
        <List>
          <Dot>
            W celu ewentualnego ustalenia, dochodzenia lub obrony przed
            roszczeniami – podstawą prawną przetwarzania jest nasz uzasadniony
            interes (art. 6 ust. 1 lit. f) RODO) polegający na ochronie naszych
            praw, w tym między innymi;
          </Dot>
          <Dot>W celu oceny ryzyka potencjalnych klientów</Dot>
          <Dot>W celu oceny planowanych kampanii marketingowych</Dot>
          <Dot>W celu realizacji marketingu bezpośredniego</Dot>
        </List>
        <h5>Przez jaki okres przetwarzamy dane osobowe?</h5>
        <p>
          Co do zasady, wskazane dane osobowe są przechowywane wyłącznie przez
          okres świadczenia usługi w ramach prowadzonego serwisu przez
          Administratora. Są one usuwane lub anonimizowane w okresie do{" "}
          <strong>30 dni od chwili zakończenia świadczenia usług</strong> (np.
          usunięcie zarejestrowanego konta użytkownika, wypisanie z listy
          Newsletter, itp.)
        </p>
        <p>
          W wyjątkowych sytuacjach, w celu zabezpieczenie prawnie uzasadnionego
          interesu realizowanego przez Administratora, okres ten może ulec
          wydłużeniu. W takiej sytuacji Administrator będzie przechowywał
          wskazane dane, od czasu żądania ich usunięcia przez Użytkownika, nie
          dłużej niż przez okres 3 lat w przypadku naruszenia lub podejrzenia
          naruszenia zapisów regulaminu serwisu przez osobę, której dane
          dotyczą.
        </p>
        <h5>Kto jest odbiorcą danych w tym danych osobowych?</h5>
        <p>Co do zasady jedynym odbiorcą danych jest Administrator.</p>
        <p>
          Przetwarzanie danych może jednak być powierzone innym podmiotom,
          realizującym usługi na rzecz Administratora w celu utrzymania
          działalności Serwisu.
        </p>
        Do podmiotów takich można zaliczyć między innymi:
        <List>
          <Dot>
            Firmy hostingowe, świadczące usługi hostingu lub usług pokrewnych
            dla Administratora
          </Dot>
        </List>
        <h5>
          Czy Państwa dane osobowe będą przekazywane poza Unię Europejską?
        </h5>
        <p>
          Dane osobowe
          <strong> nie będą przekazywane poza Unię Europejską</strong>, chyba że
          zostały opublikowane na skutek indywidualnego działania Użytkownika
          (np. wprowadzenie komentarza lub wpisu), co sprawi, że dane będą
          dostępne dla każdej osoby odwiedzającej serwis.
        </p>
        <h5>
          Czy dane osobowe będą podstawą zautomatyzowanego podejmowania decyzji?
        </h5>
        <p>
          Dane osobowe <strong>nie będą wykorzystywane</strong> do
          zautomatyzowanego podejmowania decyzji (profilowania).
        </p>
        <h5>
          Jakie mają Państwo prawa związane z przetwarzaniem danych osobowych?
        </h5>
        <List>
          <Dot>
            <strong>Prawo dostępu do danych osobowych</strong>
            <br />
            Użytkownikom przysługuje prawo uzyskania dostępu do swoich danych
            osobowych, realizowane na żądanie złożone do Administratora
          </Dot>
          <Dot>
            <strong>Prawo do sprostowania danych osobowych</strong>
            <br />
            Użytkownikom przysługuje prawo żądania od Administratora
            niezwłocznego sprostowania danych osobowych, które są nieprawidłowe
            lub / oraz uzupełnienia niekompletnych danych osobowych, realizowane
            na żądanie złożone do Administratora
          </Dot>
          <Dot>
            <strong>Prawo do usunięcia danych osobowych</strong>
            <br />
            Użytkownikom przysługuje prawo żądania od Administratora
            niezwłocznego usunięcia danych osobowych, realizowane na żądanie
            złożone do Administratora. <br />
            <br />W przypadku kont użytkowników, usunięcie danych polega na
            anonimizacji danych umożliwiających identyfikację Użytkownika.
            <br />
            <br />W przypadku usługi Newsletter, Użytkownik ma możliwość
            samodzielnego usunięcia swoich danych osobowych korzystając z
            odnośnika umieszczonego w każdej przesyłanej wiadomości e-mail.
          </Dot>
          <Dot>
            <strong>
              Prawo do ograniczenia przetwarzania danych osobowych
            </strong>
            <br />
            Użytkownikom przysługuje prawo ograniczenia przetwarzania danych
            osobowych w przypadkach wskazanych w art. 18 RODO, m.in.
            kwestionowania prawidłowość danych osobowych, realizowane na żądanie
            złożone do Administratora
          </Dot>
          <Dot>
            <strong>Prawo do przenoszenia danych osobowych</strong>
            <br />
            Użytkownikom przysługuje prawo uzyskania od Administratora, danych
            osobowych dotyczących Użytkownika w ustrukturyzowanym, powszechnie
            używanym formacie nadającym się do odczytu maszynowego, realizowane
            na żądanie złożone do Administratora
          </Dot>
          <Dot>
            <strong>
              Prawo wniesienia sprzeciwu wobec przetwarzania danych osobowych
            </strong>
            <br />
            Użytkownikom przysługuje prawo wniesienia sprzeciwu wobec
            przetwarzania jego danych osobowych w przypadkach określonych w art.
            21 RODO, realizowane na żądanie złożone do Administratora
          </Dot>
          <Dot>
            <strong>Prawo wniesienia skargi</strong>
            <br />
            Użytkownikom przysługuje prawo wniesienia skargi do organu
            nadzorczego zajmującego się ochroną danych osobowych.
          </Dot>
        </List>
      </Container>
    </Article>
  </Layout>
);

export default Rodo;

const Title = styled.h4`
  margin-top: 75px;
`;

const List = styled.ul`
  /* padding: 40px 0px 150px; */
  li {
    list-style-position: inside;
    text-indent: -1.5em;
    padding-left: 1.5em;
    line-height: 1.4;
  }
`;
const Article = styled.article`
  padding-top: 20px;
  /* border: 1px solid red; */
`;
