import { deepEqual } from "node:assert/strict";
import { test } from "node:test";

function greet(name: string) {
  // Ensure the name is not empty or just spaces
  if (name.trim().length === 0) {
    return { message: "Welcome, Guest!" };
  }

  // Return the correct greeting message
  return { message: `Welcome, ${name}!` };
}


test("should greet person", () => {
  const result = greet("Liam");

  deepEqual(result, { message: "Welcome, Liam!" });
});
