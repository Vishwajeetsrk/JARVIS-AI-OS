export interface EnglishPhraseItem {
  phrase: string;
  category: "Meeting" | "Email" | "Interview" | "Technical" | "Daily Life";
  meaning: string;
  pronunciationHint: string;
  workExample: string;
  practicePrompt: string;
}

export const DAILY_ENGLISH_PHRASES: EnglishPhraseItem[] = [
  {
    phrase: "Let's touch base on this tomorrow",
    category: "Meeting",
    meaning: "Let's briefly talk or check in with each other tomorrow.",
    pronunciationHint: "lets touch bayss on this tuh-mor-oh",
    workExample: "I have uploaded the initial batch to Salesforce; let's touch base on this tomorrow morning.",
    practicePrompt: "Try saying: 'I will finish the report today and let's touch base tomorrow.'",
  },
  {
    phrase: "Please find the attached reconciliation report",
    category: "Email",
    meaning: "A polite, professional way to tell someone a document is attached to the email.",
    pronunciationHint: "pleez find thee uh-tacht re-con-sil-ee-ay-shun re-port",
    workExample: "Good day, Ma'am. Please find the attached reconciliation report for yesterday's Razorpay donations.",
    practicePrompt: "Use this phrase at the start of your daily status emails.",
  },
  {
    phrase: "In my previous project, I was responsible for...",
    category: "Interview",
    meaning: "A clear, professional way to introduce your past experience in an interview.",
    pronunciationHint: "in my pree-vee-us pro-jekt, eye wuz re-spon-sih-bul for...",
    workExample: "In my previous project, I was responsible for streamlining our Salesforce Data Loader uploads.",
    practicePrompt: "Complete this sentence with one of your real achievements.",
  },
  {
    phrase: "We need to optimize the database query latency",
    category: "Technical",
    meaning: "We need to make the database search faster and use less time/resources.",
    pronunciationHint: "wee need too op-tih-mize the day-tuh-bays kwer-ee lay-ten-see",
    workExample: "By adding vector indexing in PostgreSQL, we significantly optimized the database query latency.",
    practicePrompt: "Explain how indexing improves query speed.",
  },
  {
    phrase: "I appreciate your prompt response",
    category: "Email",
    meaning: "Thank you for replying quickly.",
    pronunciationHint: "eye uh-pree-shee-ayt yor prompt re-spons",
    workExample: "Thank you for the update, Bharathi Ma'am. I appreciate your prompt response.",
    practicePrompt: "Use this to politely acknowledge a quick reply from colleagues.",
  },
];

export class EnglishLearningEngine {
  public static getDailyPhrases(): EnglishPhraseItem[] {
    return DAILY_ENGLISH_PHRASES;
  }
}
