<div id="observablehq-header-7cac3eda"></div>
<div id="observablehq-zapisi-7cac3eda"></div>
<div id="observablehq-zapis_plot-7cac3eda"></div>
<div id="observablehq-zapis_zadnji-7cac3eda"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/04833182aa90e10f.js?v=4";
new Runtime().module(define, name => {
  if (name === "header") return new Inspector(document.querySelector("#observablehq-header-7cac3eda"));
  if (name === "zapisi") return new Inspector(document.querySelector("#observablehq-zapisi-7cac3eda"));
  if (name === "zapis_plot") return new Inspector(document.querySelector("#observablehq-zapis_plot-7cac3eda"));
  if (name === "zapis_zadnji") return new Inspector(document.querySelector("#observablehq-zapis_zadnji-7cac3eda"));
});
</script>
