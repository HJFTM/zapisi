<div id="observablehq-generacija_header-3d848ed8"></div>
<div id="observablehq-mjesta_geo_text-3d848ed8"></div>
<div id="observablehq-generacija_plot-3d848ed8"></div>
<div id="observablehq-obitelji_text-3d848ed8"></div>
<div id="observablehq-generacije_table1-3d848ed8"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/410aa8aa83984092.js?v=4";
new Runtime().module(define, name => {
  if (name === "generacija_header") return new Inspector(document.querySelector("#observablehq-generacija_header-3d848ed8"));
  if (name === "mjesta_geo_text") return new Inspector(document.querySelector("#observablehq-mjesta_geo_text-3d848ed8"));
  if (name === "generacija_plot") return new Inspector(document.querySelector("#observablehq-generacija_plot-3d848ed8"));
  if (name === "obitelji_text") return new Inspector(document.querySelector("#observablehq-obitelji_text-3d848ed8"));
  if (name === "generacije_table1") return new Inspector(document.querySelector("#observablehq-generacije_table1-3d848ed8"));
});
</script>
