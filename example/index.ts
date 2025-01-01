import getFullYear, {
  YearResponseDTO,
  YearFetchingError,
} from "../dist/esm/index.js";

// Example 1: Standard mode with error handling
async function standardExample() {
  try {
    const data: YearResponseDTO = await getFullYear();
    console.log("✨ Year data:", data);
  } catch (error) {
    if (error instanceof YearFetchingError) {
      console.error("🚨 Failed to fetch year:", error.message);
    }
  }
}

// Example 2: Enterprise mode
async function enterpriseExample() {
  try {
    const data: YearResponseDTO = await getFullYear(true);
    console.log("🏢 Enterprise year data:", data);
  } catch (error) {
    if (error instanceof YearFetchingError) {
      console.error("🚨 Enterprise mode failed:", error.message);
    }
  }
}

// Run examples
standardExample();
enterpriseExample();
