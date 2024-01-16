import { useState } from 'react';
import { ButtonStrong } from './components/ButtonStrong';

const initialState = {
  isSpoilerShown: false,
  isWarningShown: true,
  numberOfLikes: 0,
};

function App() {
  //   const [isSpoilerShown, setIsSpoilerShown] = useState(false);
  //   const [isWarningShown, setIsWarningShown] = useState(true);
  //   const [numberOfLikes, setNumberOfLikes] = useState(0);

  const [state, setState] = useState(initialState);

  //right click on the name of the function and choose rename symbol
  function handleShowSpoilerClick() {
    setState((prevState) => {
      return {
        ...prevState,
        isWarningShown: false,
        isSpoilerShown: true,
      };
    });
  }

  // the order of returned objects is important
  function handleCloseWarningClick() {
    setState((prevState) => {
      return { ...prevState, isWarningShown: false };
    });
  }

  // passing a function to setNumberOfLikes is called functional update
  function handleLikeButtonClick() {
    setState((prevState) => {
      return { ...prevState, numberOfLikes: prevState.numberOfLikes + 1 };
    });
  }
  function handleSuperButtonClick() {
    setState((prevState) => {
      return { ...prevState, numberOfLikes: prevState.numberOfLikes + 3 };
    });
  }
  function handleDullButtonClick() {
    setState((prevState) => {
      return { ...prevState, numberOfLikes: prevState.numberOfLikes - 1 };
    });
  }

  console.log('<App> render');

  return (
    <>
      <h1>Green Book</h1>
      <h2>Production date: 2018</h2>
      <br />
      <h2>Number of likes: {state.numberOfLikes}</h2>
      <button onClick={handleLikeButtonClick}>LIKE</button>
      <button onClick={handleSuperButtonClick}>SUPER</button>
      <button onClick={handleDullButtonClick}>DULL</button>
      <br />
      <h2>Story</h2>
      {state.isWarningShown && (
        <p>
          Attention! Story description contains spoilers!{' '}
          <button onClick={handleCloseWarningClick}>X</button>
        </p>
      )}
      <p>
        Green Book is a 2018 American biographical comedy-drama film directed by
        Peter Farrelly. Starring Viggo Mortensen and Mahershala Ali, the film is
        inspired by the true story of a 1962 tour of the Deep South by African
        American pianist Don Shirley and Italian American bouncer and later
        actor Frank Vallelonga, who served as Shirley&apos;s driver and
        bodyguard.
      </p>
      <ButtonStrong
        onClick={() => {
          alert('StrongClick!');
        }}
      >
        Show strong spoiler!
      </ButtonStrong>
      <ButtonStrong
        onClick={() => {
          alert('StrongClick is cool!');
        }}
      >
        Show another strong spoiler!
      </ButtonStrong>
      {state.isSpoilerShown ? (
        <p>
          Finally, inspite of totally different characters, Don and Frank become
          good friends
        </p>
      ) : (
        <button onClick={handleShowSpoilerClick}>Pokaż spoiler</button>
      )}
    </>
  );
}

export default App;
