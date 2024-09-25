import { deepEqual } from "node:assert/strict";
import { test } from "node:test";

function greet(name: string) {
}

test("should greet person", () => {
  const result = greet("Liam");

  deepEqual(result, { message: "Welcome, Liam!" });
});
