<div id="observablehq-mjesta_header-0ab3d6dd"></div>
<div id="observablehq-mjesta_geo-0ab3d6dd"></div>
<div id="observablehq-mjesta_text-0ab3d6dd"></div>
<div id="observablehq-mjesta_plot-0ab3d6dd"></div>
<div id="observablehq-mjesta_obitelji_text-0ab3d6dd"></div>
<div id="observablehq-mjesta_obitelji_table-0ab3d6dd"></div>
<p>Credit: <a href="https://observablehq.com/d/702564761cbe308e@417">Mjesta (R) by FTM</a></p>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/702564761cbe308e.js?v=4";
new Runtime().module(define, name => {
  if (name === "mjesta_header") return new Inspector(document.querySelector("#observablehq-mjesta_header-0ab3d6dd"));
  if (name === "mjesta_geo") return new Inspector(document.querySelector("#observablehq-mjesta_geo-0ab3d6dd"));
  if (name === "mjesta_text") return new Inspector(document.querySelector("#observablehq-mjesta_text-0ab3d6dd"));
  if (name === "mjesta_plot") return new Inspector(document.querySelector("#observablehq-mjesta_plot-0ab3d6dd"));
  if (name === "mjesta_obitelji_text") return new Inspector(document.querySelector("#observablehq-mjesta_obitelji_text-0ab3d6dd"));
  if (name === "mjesta_obitelji_table") return new Inspector(document.querySelector("#observablehq-mjesta_obitelji_table-0ab3d6dd"));
});
</script>
