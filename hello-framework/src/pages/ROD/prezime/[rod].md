<div id="observablehq-prezime_header-b9087471"></div>
<div id="observablehq-paragraph1-b9087471"></div>
<div id="observablehq-prezime_plot-b9087471"></div>
<div id="observablehq-paragraph2-b9087471"></div>
<div id="observablehq-prezime_table-b9087471"></div>
<p>Credit: <a href="https://observablehq.com/d/3a9b8d56718102ec@427">Prezime (R) by FTM</a></p>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/3a9b8d56718102ec.js?v=4";
new Runtime().module(define, name => {
  if (name === "prezime_header") return new Inspector(document.querySelector("#observablehq-prezime_header-b9087471"));
  if (name === "paragraph1") return new Inspector(document.querySelector("#observablehq-paragraph1-b9087471"));
  if (name === "prezime_plot") return new Inspector(document.querySelector("#observablehq-prezime_plot-b9087471"));
  if (name === "paragraph2") return new Inspector(document.querySelector("#observablehq-paragraph2-b9087471"));
  if (name === "prezime_table") return new Inspector(document.querySelector("#observablehq-prezime_table-b9087471"));
});
</script>
