import { PlayerProfile, Stats, DecisionRecord, VocabularyItem, Page } from './types';
import { getRoleById } from './data/roles';

// ===== Game State =====
export interface GameState {
  currentPage: Page;
  profile: PlayerProfile | null;
}

const STORAGE_KEY = 'feudalspiel_save';

let state: GameState = {
  currentPage: 'intro',
  profile: null,
};

let listeners: Array<() => void> = [];

export function getState(): GameState {
  return state;
}

export function subscribe(listener: () => void): () => void {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter(l => l !== listener);
  };
}

function notify() {
  listeners.forEach(l => l());
}

function saveToStorage() {
  if (state.profile) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.profile));
  }
}

export function loadFromStorage(): boolean {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      state.profile = JSON.parse(saved);
      return true;
    } catch {
      return false;
    }
  }
  return false;
}

export function clearSave() {
  localStorage.removeItem(STORAGE_KEY);
}

// ===== Actions =====
export function navigateTo(page: Page) {
  state = { ...state, currentPage: page };
  notify();
}

export function selectRole(roleId: string, playerName: string) {
  const role = getRoleById(roleId);
  if (!role) return;

  state = {
    ...state,
    profile: {
      name: playerName,
      roleId: role.id,
      stats: { ...role.stats },
      currentChapter: 1,
      decisions: [],
      achievements: [],
      vocabulary: [],
      historicalFacts: [],
      items: [...role.startingItems],
    },
    currentPage: 'scenario',
  };
  saveToStorage();
  notify();
}

export function makeDecision(
  scenarioId: string,
  scenarioTitle: string,
  choiceIndex: number,
  choiceText: string,
  consequence: string,
  statChanges: Partial<Stats>,
  chapter: number,
  vocabulary?: VocabularyItem[],
  historicalFact?: string,
  achievementId?: string,
) {
  if (!state.profile) return;

  const newStats = { ...state.profile.stats };
  for (const [key, value] of Object.entries(statChanges)) {
    const k = key as keyof Stats;
    newStats[k] = Math.max(0, Math.min(10, newStats[k] + (value as number)));
  }

  const decision: DecisionRecord = {
    scenarioId,
    scenarioTitle,
    choiceIndex,
    choiceText,
    consequence,
    chapter,
  };

  const newVocabulary = [...state.profile.vocabulary];
  if (vocabulary) {
    for (const v of vocabulary) {
      if (!newVocabulary.find(existing => existing.word === v.word)) {
        newVocabulary.push(v);
      }
    }
  }

  const newFacts = [...state.profile.historicalFacts];
  if (historicalFact && !newFacts.includes(historicalFact)) {
    newFacts.push(historicalFact);
  }

  const newAchievements = [...state.profile.achievements];
  if (achievementId && !newAchievements.includes(achievementId)) {
    newAchievements.push(achievementId);
  }

  state = {
    ...state,
    profile: {
      ...state.profile,
      stats: newStats,
      decisions: [...state.profile.decisions, decision],
      vocabulary: newVocabulary,
      historicalFacts: newFacts,
      achievements: newAchievements,
      currentChapter: state.profile.currentChapter + 1,
    },
  };
  saveToStorage();
  notify();
}

export function resetGame() {
  clearSave();
  state = {
    currentPage: 'intro',
    profile: null,
  };
  notify();
}
