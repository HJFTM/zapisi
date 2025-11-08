<div id="observablehq-header-ffd36d3b"></div>
<div id="observablehq-text_1-ffd36d3b"></div>
<div id="observablehq-zupe_geo-ffd36d3b"></div>
<div id="observablehq-text_2-ffd36d3b"></div>
<div id="observablehq-mjesta_plot-ffd36d3b"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/fcc44adcdb25b804.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-ffd36d3b"));
  if (name === "text_1") return new Inspector(document.querySelector("#observablehq-text_1-ffd36d3b"));
  if (name === "zupe_geo") return new Inspector(document.querySelector("#observablehq-zupe_geo-ffd36d3b"));
  if (name === "text_2") return new Inspector(document.querySelector("#observablehq-text_2-ffd36d3b"));
  if (name === "mjesta_plot") return new Inspector(document.querySelector("#observablehq-mjesta_plot-ffd36d3b"));
});
</script>
