<div id="observablehq-obitelji_header-45f659d1"></div>
<div id="observablehq-text_obitelji-45f659d1"></div>
<div id="observablehq-obitelji_plot-45f659d1"></div>
<div id="observablehq-text_povezane-45f659d1"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/e61464c9bcf6d8de.js?v=4";
new Runtime().module(define, name => {
  if (name === "obitelji_header") return new Inspector(document.querySelector("#observablehq-obitelji_header-45f659d1"));
  if (name === "text_obitelji") return new Inspector(document.querySelector("#observablehq-text_obitelji-45f659d1"));
  if (name === "obitelji_plot") return new Inspector(document.querySelector("#observablehq-obitelji_plot-45f659d1"));
  if (name === "text_povezane") return new Inspector(document.querySelector("#observablehq-text_povezane-45f659d1"));
});
</script>
