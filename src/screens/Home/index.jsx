import Contact from "../../components/Contact";
import Container from "../../components/Container";
import Hero from "../../components/Hero";
import Stores from "../../components/Stores";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Stores />
      {/* <Contact/> */}
    </Container>
  );
}
