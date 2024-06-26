import Board from "./Board";
import Card from "./Card";
import Start from "./Start";
import Won from "./Won";

function App() {
  const pairNumber = undefined;
  const catImages = undefined;
  const foundIds = [];
  const flip = () => {};
  const isFlipped = () => false;

  if (!pairNumber) {
    return <Start />;
  }

  if (!catImages) {
    return "Betöltés alatt...";
  }

  if (foundIds.length === pairNumber) {
    return <Won />;
  }

  return (
    <Board>
      {catImages.map(({ id, url }, idx) => (
        <Card
          key={idx}
          flipped={isFlipped(idx)}
          onClick={() => flip(idx)}
          url={url}
        />
      ))}
    </Board>
  );
}

export default App;
