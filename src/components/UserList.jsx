function UserList() {
  const users = [
    { id: 1, name: "enix", age: 20 },
    { id: 2, name: "xe54z", age: 20 },
    { id: 3, name: "asra", age: 20 },
  ];

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
        </div>
      ))}
    </div>
  );
}

export default UserList;
