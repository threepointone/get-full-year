import { test, TestContext } from "node:test";
import assert from "node:assert/strict";
import getFullYear, {
  YearResponseDTO,
  YearFetchingError,
} from "../src/index.js";

test("getFullYear returns the current year in standard mode", async (t: TestContext) => {
  const response = await getFullYear();
  assert.equal(typeof response, "object");
  assert.ok(response !== null);
  assert.equal(typeof response.year, "number");
  assert.equal(response.year, new Date().getFullYear());
  assert.ok(
    "sponsored_by" in response,
    "Should include sponsored_by in standard mode"
  );
});

test("getFullYear returns the current year in enterprise mode", async (t: TestContext) => {
  const response = await getFullYear(true);
  assert.equal(typeof response, "object");
  assert.ok(response !== null);
  assert.equal(typeof response.year, "number");
  assert.equal(response.year, new Date().getFullYear());
});

test("getFullYear throws YearFetchingError on network error", async (t: TestContext) => {
  // Mock fetch to simulate a network error
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => {
    throw new Error("Network error");
  };

  try {
    await assert.rejects(
      async () => {
        await getFullYear();
      },
      (error: unknown) => {
        assert.ok(error instanceof YearFetchingError);
        assert.ok(error.message.includes("Network error"));
        assert.equal(error.fallbackYear, new Date().getFullYear());
        return true;
      }
    );
  } finally {
    // Restore original fetch
    globalThis.fetch = originalFetch;
  }
});

test("getFullYear throws YearFetchingError on bad HTTP status", async (t: TestContext) => {
  // Mock fetch to simulate a bad HTTP response
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response(null, { status: 500 });

  try {
    await assert.rejects(
      async () => {
        await getFullYear();
      },
      (error: unknown) => {
        assert.ok(error instanceof YearFetchingError);
        assert.ok(error.message.includes("HTTP Status: 500"));
        assert.equal(error.fallbackYear, new Date().getFullYear());
        return true;
      }
    );
  } finally {
    // Restore original fetch
    globalThis.fetch = originalFetch;
  }
});
