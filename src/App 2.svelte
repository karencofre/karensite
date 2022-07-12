<script>
  import Section from "./lib/Section.svelte";
  import Map from "./lib/Map.svelte";
  import About from "./lib/About.svelte";
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";
  import Habilidades from "./lib/Habilidades.svelte";
</script>

<main>
  <Header />
  <Map />
  <About titulo={"Karen"} occupying={""} />
  <h3>Proyectos</h3>
  <Section />
  <h3>Habilidades</h3>
  <Habilidades />
  <About titulo={"Karen's Jobs"} occupying="trabajo" />
  <Footer />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  :global(main) {
    background-color: #b3acac;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    height: 100%;
    margin: 0;
    padding: 0;
    margin: 30px 25px;
    padding: 15px 14px;
    border: 0.1rem solid #4e4376;
  }
  :global(h2, h3, h4) {
    color: #58444f;
    text-align: center;
    display: block;
    background: linear-gradient(to top left, #b3acac, #4e4376);

    color: #4e4376;
    opacity: 0.8;
    text-transform: uppercase;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
  }
  :global(h1, h5) {
    text-align: center;
    color: #4e4376;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
  }
  :global(p) {
    /* background: linear-gradient(to top left, #b3acac, #4e4376); */
    /* opacity: 0.8; */
    padding: 0 1.5em;
    margin: 0.5em;
    display: block;
    justify-content: center;
    text-align: justify;
    color: #4e4376;
  }
</style>
