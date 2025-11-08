<div id="observablehq-header-9498c00a"></div>
<div id="observablehq-text_1-9498c00a"></div>
<div id="observablehq-zupe_plot-9498c00a"></div>
<div id="observablehq-zupe_geo-9498c00a"></div>
<div id="observablehq-zupe_table-9498c00a"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/fcc44adcdb25b804.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-9498c00a"));
  if (name === "text_1") return new Inspector(document.querySelector("#observablehq-text_1-9498c00a"));
  if (name === "zupe_plot") return new Inspector(document.querySelector("#observablehq-zupe_plot-9498c00a"));
  if (name === "zupe_geo") return new Inspector(document.querySelector("#observablehq-zupe_geo-9498c00a"));
  if (name === "zupe_table") return new Inspector(document.querySelector("#observablehq-zupe_table-9498c00a"));
});
</script>
