export function HeaderComponent(props) {

  let timeDown = 0;
  const gitIsUp = false;
  if(gitIsUp) {
    timeDown = 0;
  } else {
    timeDown = 1000;
  }

  //what this component looks like
  return (
    <header>
      <h1>Hello React!!</h1>
      <p>I wish GitHub Worked</p>
      <p>Time since Github has been down: {timeDown*10} seconds</p>
    </header>
  )
}
