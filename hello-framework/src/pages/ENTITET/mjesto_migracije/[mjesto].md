<div id="observablehq-header-8f728d32"></div>
<div id="observablehq-migracije_table-8f728d32"></div>
<div id="observablehq-plot_migracije-8f728d32"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/df8fc0e5efe82f9b.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-8f728d32"));
  if (name === "migracije_table") return new Inspector(document.querySelector("#observablehq-migracije_table-8f728d32"));
  if (name === "plot_migracije") return new Inspector(document.querySelector("#observablehq-plot_migracije-8f728d32"));
});
</script>
