import "./App.css";
import users from "./userData";
import Card from "./components/Card";
console.log(users);
function App() {
  return (
    <>
      <h1>My Users</h1>
      {/* <div>My Company Users</div> */}
      <div className="main">
        {users.map((user) => (
          <Card user={user} />
        ))}
      </div>
    </>
  );
}

export default App;
