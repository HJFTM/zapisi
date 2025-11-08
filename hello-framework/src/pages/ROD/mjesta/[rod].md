<div id="observablehq-mjesta_header-fece154c"></div>
<div id="observablehq-mjesta_geo_text-fece154c"></div>
<div id="observablehq-mjesta_geo-fece154c"></div>
<div id="observablehq-mjesta_text-fece154c"></div>
<div id="observablehq-mjesta_plot-fece154c"></div>
<div id="observablehq-mjesta_obitelji_text-fece154c"></div>
<div id="observablehq-mjesta_obitelji_table-fece154c"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/702564761cbe308e.js?v=4";
new Runtime().module(define, name => {
  if (name === "mjesta_header") return new Inspector(document.querySelector("#observablehq-mjesta_header-fece154c"));
  if (name === "mjesta_geo_text") return new Inspector(document.querySelector("#observablehq-mjesta_geo_text-fece154c"));
  if (name === "mjesta_geo") return new Inspector(document.querySelector("#observablehq-mjesta_geo-fece154c"));
  if (name === "mjesta_text") return new Inspector(document.querySelector("#observablehq-mjesta_text-fece154c"));
  if (name === "mjesta_plot") return new Inspector(document.querySelector("#observablehq-mjesta_plot-fece154c"));
  if (name === "mjesta_obitelji_text") return new Inspector(document.querySelector("#observablehq-mjesta_obitelji_text-fece154c"));
  if (name === "mjesta_obitelji_table") return new Inspector(document.querySelector("#observablehq-mjesta_obitelji_table-fece154c"));
});
</script>
