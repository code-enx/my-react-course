import Whether from "./components/Whether";
import UserStatus from "./components/UserStatus";

function App() {
  return (
    <div>
      <Whether />
      <UserStatus loggedIn={true} isAdmin={false} />
    </div>
  );
}

export default App;
