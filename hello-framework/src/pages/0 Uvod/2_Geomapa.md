<div id="observablehq-index_header-ab68e840"></div>
<div id="observablehq-mjesta_geo-ab68e840"></div>
<div id="observablehq-index_footer-ab68e840"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/d1e5e12448b03e80.js?v=4";
new Runtime().module(define, name => {
  if (name === "index_header") return new Inspector(document.querySelector("#observablehq-index_header-ab68e840"));
  if (name === "mjesta_geo") return new Inspector(document.querySelector("#observablehq-mjesta_geo-ab68e840"));
  if (name === "index_footer") return new Inspector(document.querySelector("#observablehq-index_footer-ab68e840"));
});
</script>
