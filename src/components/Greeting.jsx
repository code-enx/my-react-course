function Greeting() {
  const greet = "Hello I'm enix";
  const date = new Date();

  return (
    <div>
      <h1>{greet}</h1>
      <p>Date : {date.getDate()}</p>
    </div>
  );
}

export default Greeting;
