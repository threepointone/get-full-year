export interface YearResponseDTO {
  year: number;
  sponsored_by?: string;
  metadata?: Record<string, unknown>;
}

export class YearFetchingError extends Error {
  constructor(message: string) {
    super(`🚨 Year Fetching Operation Failed: ${message}`);
    this.name = "YearFetchingError";
  }
}

/**
 * An extraordinarily sophisticated function for retrieving the current year
 * through our state-of-the-art year acquisition infrastructure.
 *
 * @param isEnterprise - A boolean flag indicating whether to execute in enterprise mode
 * @returns A Promise containing the year data encapsulated in our proprietary DTO
 * @throws {YearFetchingError} When the year cannot be gracefully acquired
 */
export default async function getFullYear(
  isEnterprise: boolean = false
): Promise<YearResponseDTO> {
  console.log(
    `🚀 Initiating year acquisition process ${
      isEnterprise ? "in ENTERPRISE mode" : "in STANDARD mode"
    }...`
  );

  try {
    const temporalDataEndpoint: string = "https://getfullyear.com/api/year";
    console.log(
      `📡 Establishing connection to temporal data service at ${temporalDataEndpoint}`
    );

    const response: Response = await fetch(temporalDataEndpoint);

    if (!response.ok) {
      throw new YearFetchingError(`HTTP Status: ${response.status}`);
    }

    const data: YearResponseDTO = await response.json();

    if (!isEnterprise) {
      console.log(
        `✨ Sponsored by our magnificent partner: ${data.sponsored_by}`
      );
    }

    console.log(`✅ Year acquisition completed successfully`);
    return data;
  } catch (error) {
    console.error(
      `❌ Catastrophic failure in year acquisition process: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
    throw new YearFetchingError(
      error instanceof Error ? error.message : "Unknown error"
    );
  }
}
