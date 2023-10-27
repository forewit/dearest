<style global>
  :root {
    /* see:  https://neumorphism.io/ */
    --neu-color: #c5ebec;
    --neu-shadow-color: #a7c8c9;
    --neu-highlight-color: #e3ffff;
  }

  @font-face {
    font-family: "Poltawski Nowy";
    src: url("/fonts/PoltawskiNowy.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    font-family: "Poltawski Nowy";
    margin: 0;
    padding: 0;
  }
  html,
  body {
    background: var(--neu-color);
  }

  .neu-card {
    border-radius: 40px;
    background: var(--neu-color);
    box-shadow: 20px 20px 60px var(--neu-shadow-color),
      -20px -20px 60px var(--neu-highlight-color);
  }
</style>
