<div id="observablehq-dogadjaji_header-10270e77"></div>
<div id="observablehq-prezime_plot-10270e77"></div>
<div id="observablehq-dogadjaji_plot-10270e77"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/aa7fb7f01cf66d07.js?v=4";
new Runtime().module(define, name => {
  if (name === "dogadjaji_header") return new Inspector(document.querySelector("#observablehq-dogadjaji_header-10270e77"));
  if (name === "prezime_plot") return new Inspector(document.querySelector("#observablehq-prezime_plot-10270e77"));
  if (name === "dogadjaji_plot") return new Inspector(document.querySelector("#observablehq-dogadjaji_plot-10270e77"));
});
</script>
