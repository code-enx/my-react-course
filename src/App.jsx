function App() {
  const usersInfo = [
    {
      username: "enix",
      email: "codeenx@gmail.com",
      location: "California",
    },

    {
      username: "Xe54z",
      email: "xe54@gmail.com",
      location: "Los Angels",
    },

    {
      username: "stefin",
      email: "stefin@gmail.com",
      location: "Denmark",
    },

    {
      username: "Ben",
      email: "bensharon@gmail.com",
      location: "Santa Monica",
    },

    {
      username: "Asra",
      email: "asra@gmail.com",
      location: "NewYork",
    },
  ];
  return (
    <main>
      {usersInfo.map((user) => (
        <ul key={Math.random()}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </main>
  );
}

export default App;
