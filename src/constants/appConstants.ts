export const SNIPPET_MARKERS = {
  begin: '----BEGIN-SNIPPET----',
  end: '----END-SNIPPET----',
};


import { OPENAI_DEFAULT_MODEL, OPENAI_DEFAULT_SYSTEM_PROMPT } from '../config';

export const MAX_ROWS = 20;
export const MAX_TITLE_LENGTH = 128;

export const CHAT_STREAM_DEBOUNCE_TIME = 250;
export const DEFAULT_MODEL = OPENAI_DEFAULT_MODEL
export const DEFAULT_INSTRUCTIONS = OPENAI_DEFAULT_SYSTEM_PROMPT


export const CONVERSATION_NOT_FOUND = 'conversation-not-found';

export const IMAGE_MAX_ZOOM = 2; // 200%
export const MAX_IMAGE_ATTACHMENTS_PER_MESSAGE = 10;
export const IMAGE_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml'
];

export const TEXT_MIME_TYPES = [
  'text/plain',
  'text/csv',
  'text/html',
  'text/css',
  'text/javascript',
  'text/xml',
  'application/json',
  'text/markdown'
];
