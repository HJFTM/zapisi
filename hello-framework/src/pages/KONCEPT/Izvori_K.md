<div id="observablehq-izvori_header-62571410"></div>
<div id="observablehq-izvori_table-62571410"></div>
<div id="observablehq-izvori_plot-62571410"></div>
<div id="observablehq-izvori_zapisi-62571410"></div>
<div id="observablehq-plot_zapisi-62571410"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/691f061675182fed.js?v=4";
new Runtime().module(define, name => {
  if (name === "izvori_header") return new Inspector(document.querySelector("#observablehq-izvori_header-62571410"));
  if (name === "izvori_table") return new Inspector(document.querySelector("#observablehq-izvori_table-62571410"));
  if (name === "izvori_plot") return new Inspector(document.querySelector("#observablehq-izvori_plot-62571410"));
  if (name === "izvori_zapisi") return new Inspector(document.querySelector("#observablehq-izvori_zapisi-62571410"));
  if (name === "plot_zapisi") return new Inspector(document.querySelector("#observablehq-plot_zapisi-62571410"));
});
</script>
