<div id="observablehq-header-9f98a146"></div>
<div id="observablehq-plot-9f98a146"></div>
<p>Credit: <a href="https://observablehq.com/d/73e0c5ccd49fd966">Mjesta (E) - Događaji by FTM</a></p>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/73e0c5ccd49fd966.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-9f98a146"));
  if (name === "plot") return new Inspector(document.querySelector("#observablehq-plot-9f98a146"));
});
</script>
