import { test, TestContext } from "node:test";
import assert from "node:assert/strict";
import getFullYear from "../src/index.js";

test("getFullYear returns the current year", async (t: TestContext) => {
  const response = await getFullYear();
  assert.equal(typeof response, "object");
  assert.ok(response !== null);
  assert.equal(typeof response.year, "number");
  assert.equal(response.year, new Date().getFullYear());
});

test("getFullYear handles network errors", async (t: TestContext) => {
  // Mock fetch to simulate a network error
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => {
    throw new Error("Network error");
  };

  try {
    await assert.rejects(getFullYear(), /Network error/);
  } finally {
    // Restore original fetch
    globalThis.fetch = originalFetch;
  }
});
