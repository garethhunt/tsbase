import test from "ava";

import hello from "../src/hello";

test("Works as required", (t) => {
  t.is(hello("World"), "Hello World!", "Expected Hello World!")
}) ;