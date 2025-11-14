<div id="observablehq-header-be63dea2"></div>
<div id="observablehq-plot-be63dea2"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/06be11ff043438c2@35.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-be63dea2"));
  if (name === "plot") return new Inspector(document.querySelector("#observablehq-plot-be63dea2"));
});
</script>
