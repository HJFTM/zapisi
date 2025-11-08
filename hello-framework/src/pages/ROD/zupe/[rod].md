<div id="observablehq-header-e0d4c2ce"></div>
<div id="observablehq-text_1-e0d4c2ce"></div>
<div id="observablehq-zupe_plot-e0d4c2ce"></div>
<div id="observablehq-zupe_geo-e0d4c2ce"></div>
<div id="observablehq-zupe_table-e0d4c2ce"></div>
<p>Credit: <a href="https://observablehq.com/d/fcc44adcdb25b804">Župe (R) by FTM: izvori</a></p>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/fcc44adcdb25b804.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-e0d4c2ce"));
  if (name === "text_1") return new Inspector(document.querySelector("#observablehq-text_1-e0d4c2ce"));
  if (name === "zupe_plot") return new Inspector(document.querySelector("#observablehq-zupe_plot-e0d4c2ce"));
  if (name === "zupe_geo") return new Inspector(document.querySelector("#observablehq-zupe_geo-e0d4c2ce"));
  if (name === "zupe_table") return new Inspector(document.querySelector("#observablehq-zupe_table-e0d4c2ce"));
});
</script>
