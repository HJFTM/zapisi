<div id="observablehq-header-8c67d3bf"></div>
<div id="observablehq-obitelji_plot2-8c67d3bf"></div>
<div id="observablehq-zapisi_table-8c67d3bf"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/1139dab5d2013347.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-8c67d3bf"));
  if (name === "obitelji_plot2") return new Inspector(document.querySelector("#observablehq-obitelji_plot2-8c67d3bf"));
  if (name === "zapisi_table") return new Inspector(document.querySelector("#observablehq-zapisi_table-8c67d3bf"));
});
</script>
