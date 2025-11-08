<div id="observablehq-header-bdaa23f1"></div>
<div id="observablehq-text_1-bdaa23f1"></div>
<div id="observablehq-izvori_table-bdaa23f1"></div>
<div id="observablehq-text_2-bdaa23f1"></div>
<div id="observablehq-izvori_plot-bdaa23f1"></div>
<div id="observablehq-footer-bdaa23f1"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/498acbe1ffe06e57.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-bdaa23f1"));
  if (name === "text_1") return new Inspector(document.querySelector("#observablehq-text_1-bdaa23f1"));
  if (name === "izvori_table") return new Inspector(document.querySelector("#observablehq-izvori_table-bdaa23f1"));
  if (name === "text_2") return new Inspector(document.querySelector("#observablehq-text_2-bdaa23f1"));
  if (name === "izvori_plot") return new Inspector(document.querySelector("#observablehq-izvori_plot-bdaa23f1"));
  if (name === "footer") return new Inspector(document.querySelector("#observablehq-footer-bdaa23f1"));
});
</script>
