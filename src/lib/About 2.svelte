<script>
  export let titulo;
  export let occupying;
</script>

<div class="About">
  <div class="grid">
    <div class="row">
      <div class="col-12">
        <h3>About {titulo}</h3>
      </div>
    </div>
    {#if !occupying}
      <div class="row">
        <p class="text-center my-4">
          online tutor since 2021 teaching programming and creating mini
          projects for students from all over the world.<br />
          I am interested in mobile development as well as data science, my hobbies
          are programming and learning new things
        </p>
        <hr />
        <ul class=" my-2 mx-6">
          <li>Country: From Chile</li>
          <li>Date of Birth: 09-08-1995</li>
          <li>Email: functutor3@gmail.com</li>
          <li>Address: Tarapaca,iquique</li>
        </ul>
      </div>
    {:else}
      <h1>Experience</h1>
      <ul>
        <li>
          <p>Online Tutor at Studypool</p>
          <p>Abril 2022 - Present</p>
        </li>
        <li>
          <p>Online Tutor at Ocilabs Project</p>
          <p>2021</p>
        </li>
      </ul>
    {/if}
  </div>
</div>

<style>
  .container-grid {
    display: grid;
    grid-template-columns: 500px 500px;
    grid-template-rows: 300px 300px;
    grid-gap: 1rem;
    grid-template-areas:
      "col1 col2"
      "col3 col4";
  }
  .col-1 {
    grid-area: col1;
    margin: 0.5em;
  }
  .col-2 {
    grid-area: col2;
    margin: 0.5em;
  }
  .col-3 {
    grid-area: col3;
    margin: 0.5em;
  }
  .col-4 {
    grid-area: col4;
    margin: 0.5em;
  }
  li {
    margin-left: 10rem;
    color: #4e4376;
  }
</style>
