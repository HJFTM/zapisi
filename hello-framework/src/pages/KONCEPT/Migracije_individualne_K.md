<div id="observablehq-migracije_header-60ee9cc9"></div>
<div id="observablehq-migracije_plot-60ee9cc9"></div>
<div id="observablehq-migracije_footer-60ee9cc9"></div>
<div id="observablehq-migracije_definicija-60ee9cc9"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/d1e5a145fe2b4455.js?v=4";
new Runtime().module(define, name => {
  if (name === "migracije_header") return new Inspector(document.querySelector("#observablehq-migracije_header-60ee9cc9"));
  if (name === "migracije_plot") return new Inspector(document.querySelector("#observablehq-migracije_plot-60ee9cc9"));
  if (name === "migracije_footer") return new Inspector(document.querySelector("#observablehq-migracije_footer-60ee9cc9"));
  if (name === "migracije_definicija") return new Inspector(document.querySelector("#observablehq-migracije_definicija-60ee9cc9"));
});
</script>
