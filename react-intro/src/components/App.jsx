import { HeaderComponent } from "./Header.jsx";
import { PuppyList } from "./PuppList.jsx";

export function App(props) {

  const mainHeading = "Topics";

  return (
    <>
      <HeaderComponent />
      <main>
        <h2>{mainHeading.toUpperCase()+"!!!"}</h2>
        <PuppyList />
      </main>
    </>
  )
}
