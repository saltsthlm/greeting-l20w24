import { deepEqual } from "node:assert/strict";
import { test } from "node:test";

// Improved Step: Refactor greet function to avoid duplicated calls
function greet(name: string) {
  // Trim the input once and reuse the trimmed value
  const trimmedName = name.trim();

  // Ensure the trimmed name is not empty or just spaces
  if (trimmedName.length === 0) {
    return { message: "Welcome, Guest!" };
  }

  // Return the correct greeting message
  return { message: `Welcome, ${trimmedName}!` };
}

// Step 1: Basic test case to verify greeting functionality
test("should greet person", () => {
  const result = greet("Liam");  // Call greet with the name "Liam"
  deepEqual(result, { message: "Welcome, Liam!" });  // Check if the output is as expected
});
