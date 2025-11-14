<div id="observablehq-header-2fec07a9"></div>
<div id="observablehq-dogadjaji_plot-2fec07a9"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/73e0c5ccd49fd966.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-2fec07a9"));
  if (name === "dogadjaji_plot") return new Inspector(document.querySelector("#observablehq-dogadjaji_plot-2fec07a9"));
});
</script>
