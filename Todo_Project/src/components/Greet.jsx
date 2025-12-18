// function Greet() {

//     return <h1>Hello and welcome to react tutorial!!!</h1>
// }

// export default Greet;

const Greet = () => {
  const greeting = "Hello and welcome to react tutorial!!!";
  const date = new Date();

  return (
    <div>
      <h1>{greeting}</h1>
      <p>Today's date is {date.toDateString()}</p>
    </div>
  );
};

export default Greet;
