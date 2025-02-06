import './App.css'


function App() {
  const users = [
    { id: 1, name: "one", score: 90 },
    { id: 2, name: "two", score: 88 },
    { id: 3, name: "three", score: 60 },
  ];
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.score} /100
        </li>
      ))}
    </ul>
  );
}
export default App;


