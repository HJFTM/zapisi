<div id="observablehq-image-992e6505"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/03a9d649093847ef.js?v=4";
new Runtime().module(define, name => {
  if (name === "image") return new Inspector(document.querySelector("#observablehq-image-992e6505"));
});
</script>
