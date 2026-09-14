export type ConversationVoice = 'jonathon' | 'chatgpt' | 'reflection';

export type ConversationExcerpt = {
  id: string;
  title: string;
  context?: string;
  entries: Array<{
    id: string;
    voice: ConversationVoice;
    content: string;
  }>;
};

// Selected source conversations will be added only after the original transcripts
// are available and Jonathon has chosen what to publish.
export const conversationExcerpts: ConversationExcerpt[] = [];
