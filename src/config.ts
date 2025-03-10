import { config } from './appconfig';

export const OPENAI_API_KEY = config?.openapi_key
export const OPENAI_DEFAULT_MODEL: string = config?.default_model || 'gpt-4o-mini'
export const OPENAI_DEFAULT_SYSTEM_PROMPT: string = config?.default_system_prompt || 'You are a helpful assistant.'
