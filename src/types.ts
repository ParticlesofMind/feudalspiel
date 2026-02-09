// ===== Game Data Types =====

export interface Role {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  imageFileName: string;
  imageAlt: string;
  stats: Stats;
  startingItems: string[];
  socialClass: string;
}

export interface Stats {
  ansehen: number;    // Reputation
  wohlstand: number;  // Wealth
  wissen: number;     // Knowledge
  geschick: number;   // Skill
  glaube: number;     // Faith
}

export interface Choice {
  text: string;
  consequence: string;
  statChanges: Partial<Stats>;
  vocabularyLearned?: VocabularyItem[];
  historicalFact?: string;
  achievementId?: string;
}

export interface Scenario {
  id: string;
  roleId: string;
  chapter: number;
  title: string;
  description: string;
  choices: Choice[];
  category: ContentCategory;
}

export type ContentCategory =
  | 'alltag'       // Daily life
  | 'gesellschaft' // Social hierarchy
  | 'handel'       // Trade and economy
  | 'religion'     // Religion and church
  | 'handwerk'     // Crafts and guilds
  | 'landwirtschaft' // Food and agriculture
  | 'recht'        // Laws and justice
  | 'feste';       // Festivals and traditions

export interface VocabularyItem {
  word: string;
  definition: string;
  example: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface PlayerProfile {
  name: string;
  roleId: string;
  stats: Stats;
  currentChapter: number;
  decisions: DecisionRecord[];
  achievements: string[];
  vocabulary: VocabularyItem[];
  historicalFacts: string[];
  items: string[];
}

export interface DecisionRecord {
  scenarioId: string;
  scenarioTitle: string;
  choiceIndex: number;
  choiceText: string;
  consequence: string;
  chapter: number;
}

export type Page = 'intro' | 'roleSelect' | 'nameEntry' | 'scenario' | 'profile' | 'glossary' | 'summary';
