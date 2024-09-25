import { deepEqual } from "node:assert/strict";
import { test } from "node:test";

// Step 1: Implement basic greet function
function greet(name: string) {
  // Ensure the name is not empty or just spaces
  if (name.trim().length === 0) {
    return { message: "Welcome, Guest!" };
  }

  // Return the correct greeting message
  return { message: `Welcome, ${name}!` };
}

// Step 1: Basic test case to verify greeting functionality
test("should greet person", () => {
  const result = greet("Liam");  // Call greet with the name "Liam"
  deepEqual(result, { message: "Welcome, Liam!" });  // Check if the output is as expected
});