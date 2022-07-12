<script>
  import About from "./About.svelte";
  let src = "./coder.png";
</script>

<div class="Header d-flex">
  <img {src} alt="coder" />
  <div class="group">
    <h1>Karen Cofré</h1>
    <h6>IOS, WebDevelopment and Data extraction</h6>
  </div>
</div>

<style>
  .Header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #b3acac;
    height: 200px;
  }
  .Header h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #4e4376;
  }
  .Header img {
    width: 100px;
    height: 100px;
  }
  h6 {
    color: #4e4376;
  }
</style>
