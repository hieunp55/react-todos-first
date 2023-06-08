import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    "Hanoi",
    "Ho Chi Minh",
    "Hai Phong",
    "Hai Duong",
    "Nghe An",
    "Thanh Hoa",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="List Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <span>, </span>World
      </Alert>
      <Button color="warning" onClick={() => console.log("Clicked")}>
        Close
      </Button>
    </div>
  );
}

export default App;
