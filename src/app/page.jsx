import Image from "next/image";

import Header from "./component/Header";
import PokeData from "./component/PokeData";

export default function Home() {
  return (
    <main>
      <Header />
      <PokeData />
    </main>
  );
}
