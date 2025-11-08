<div id="observablehq-text_stablo-d02f54d4"></div>
<div id="observablehq-stablo_plot-d02f54d4"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/8fc4a2673a126f10.js?v=4";
new Runtime().module(define, name => {
  if (name === "text_stablo") return new Inspector(document.querySelector("#observablehq-text_stablo-d02f54d4"));
  if (name === "stablo_plot") return new Inspector(document.querySelector("#observablehq-stablo_plot-d02f54d4"));
});
</script>
