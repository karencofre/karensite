<script></script>

<div class="Section-Grid">
  <div class="container-grid">
    <div class="col-1 text-center">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Swapi Encyclopedia</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            made with Swift and SwiftUI.
          </h6>
          <p class="card-text">
            In this application you can search for a character and a movie in
            the Star Wars API.
          </p>
          <a
            href="https://github.com/karencofre/StarsWarsEncycloapediaApp"
            class="card-link"
            >Link to the project
          </a>
        </div>
      </div>
    </div>
    <div class="col-3 text-center">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">PokeApi App</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            made with con Swift y SwiftUI
          </h6>
          <p class="card-text">
            In this application you can search for a pokemon and see its
            information, It also has some animations.
          </p>
          <a
            href="https://github.com/karencofre/PocketmonstersPokeDex"
            class="card-link">Link to project</a
          >
        </div>
      </div>
    </div>

    <div class="col-2 text-center ">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Web Scraping With Python</h5>
          <h6 class="card-subtitle mb-2 text-muted">made with Scrapy</h6>
          <p class="card-text">
            In this script i use Scrapy to scrape data from a news website.
          </p>
          <a
            href="https://github.com/karencofre/paginadocearscrapy"
            class="card-link">Link to Project</a
          >
        </div>
      </div>
    </div>
    <div class="col-4 text-center">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Books to Scrap</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            made with beautifulsoup4 and python
          </h6>
          <p class="card-text">
            In this script i use beautifulsoup4 and python mutlithreading to
            scrape data from a website.
            <!-- and create an app -->
          </p>
          <a href="#" class="card-link">Link to project</a>
          <!-- link to app project <a href="#" class="card-link">Link to project</a>  -->
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .container-grid {
    display: grid;
    margin-left: 200px;
    margin-top: 30px;
    margin-bottom: 30px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
    grid-template-areas:
      "col1 col2"
      "col3 col4";
  }
  .col-1 {
    grid-area: col1;
    margin: 0.5rem;
  }
  .col-2 {
    grid-area: col2;
    margin: 0.5rem;
  }
  .col-3 {
    grid-area: col3;
    margin: 0.5rem;
  }
  .col-4 {
    grid-area: col4;
    margin: 0.5rem;
  }
  a {
    color: #4e4376;
  }
  .card {
    box-shadow: 5px 5px 50px 18px #fff;
  }
</style>
