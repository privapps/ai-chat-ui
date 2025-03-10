export interface AppConfig {
  openapi_key: string;
  default_model: string;
  default_system_prompt: string;
  openapi_url: string;
}

export function loadAppConfigFromLocalStorage(): AppConfig | null {
  try {
    const configString = localStorage.getItem("appConfig"); // Assuming you're storing it under "appConfig" key.  Adjust if needed.

    if (!configString) {
      console.warn("App config not found in localStorage.");
      alert(("App config not found in localStorage."))
      return null;
    }

    const parsedConfig = JSON.parse(configString);

    // Perform validation to ensure the parsed object conforms to the AppConfig interface.
    // This is crucial for type safety, even with TypeScript.  See detailed explanation below.
    if (
      typeof parsedConfig.openapi_key !== 'string' ||
      typeof parsedConfig.default_model !== 'string' ||
      typeof parsedConfig.default_system_prompt !== 'string' ||
      typeof parsedConfig.openapi_url !== 'string'
    ) {
      console.error("Invalid app config format in localStorage:", parsedConfig);
      return null; // Or throw an error, depending on your error handling strategy.
    }

    return {
      openapi_key: parsedConfig.openapi_key,
      default_model: parsedConfig.default_model,
      default_system_prompt: parsedConfig.default_system_prompt,
      openapi_url: parsedConfig.openapi_url,
    };
  } catch (error) {
    console.error("Error loading app config from localStorage:", error);
    return null; // Or throw an error, depending on your error handling strategy.
  }
}

export const config = loadAppConfigFromLocalStorage();