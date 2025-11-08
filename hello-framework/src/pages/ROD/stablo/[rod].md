<div id="observablehq-stablo_header-9bacef05"></div>
<div id="observablehq-text_stablo-9bacef05"></div>
<div id="observablehq-stablo_plot-9bacef05"></div>
<div id="observablehq-text_opaska-9bacef05"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/8fc4a2673a126f10.js?v=4";
new Runtime().module(define, name => {
  if (name === "stablo_header") return new Inspector(document.querySelector("#observablehq-stablo_header-9bacef05"));
  if (name === "text_stablo") return new Inspector(document.querySelector("#observablehq-text_stablo-9bacef05"));
  if (name === "stablo_plot") return new Inspector(document.querySelector("#observablehq-stablo_plot-9bacef05"));
  if (name === "text_opaska") return new Inspector(document.querySelector("#observablehq-text_opaska-9bacef05"));
});
</script>
