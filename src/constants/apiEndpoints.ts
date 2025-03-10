import { config } from '../appconfig';

export const OPENAI_ENDPOINT = config?.openapi_url
export const TTS_ENDPOINT = `${OPENAI_ENDPOINT}/audio/speech`;
export const CHAT_COMPLETIONS_ENDPOINT = `${OPENAI_ENDPOINT}/chat/completions`;
export const MODELS_ENDPOINT = `${OPENAI_ENDPOINT}/models`;
