<div id="observablehq-bolesti_header-79fe1553"></div>
<div id="observablehq-text_1-79fe1553"></div>
<div id="observablehq-bolest_plot-79fe1553"></div>
<div id="observablehq-text_2-79fe1553"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/5bb911525082b88c.js?v=4";
new Runtime().module(define, name => {
  if (name === "bolesti_header") return new Inspector(document.querySelector("#observablehq-bolesti_header-79fe1553"));
  if (name === "text_1") return new Inspector(document.querySelector("#observablehq-text_1-79fe1553"));
  if (name === "bolest_plot") return new Inspector(document.querySelector("#observablehq-bolest_plot-79fe1553"));
  if (name === "text_2") return new Inspector(document.querySelector("#observablehq-text_2-79fe1553"));
});
</script>
