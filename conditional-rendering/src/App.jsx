import { PersonInfo } from './components/PersonInfo';

function App() {
  const jan = {
    name: 'Jan',
    lastname: 'Kowalski',
    mail: 'j.kowalski@gmail.com',
    tel: '+48 123 456 789',
  };
  const agnieszka = {
    name: 'Agnieszka',
    lastname: 'Kowalska',
    mail: 'a.kowalska@gmail.com',
    tel: '+48 987 654 321',
  };
  const ludwik = {
    name: 'Ludwik',
    lastname: 'Kowalski',
    mail: 'l.kowalski@gmail.com',
  };

  return (
    <>
      <PersonInfo person={jan} />
      <br />
      <PersonInfo person={agnieszka} />
      <br />
      <PersonInfo person={ludwik} />
    </>
  );
}

export default App;
