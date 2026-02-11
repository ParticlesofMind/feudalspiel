import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://uiujejtygkootpdzbbah.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpdWplanR5Z2tvb3RwZHpiYmFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NTk2MTIsImV4cCI6MjA4NjIzNTYxMn0.6HpQ8F3tylPl7kRAWdVpvAkVBD8IR7mee-OACd3ZgHw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ===== Leaderboard Types =====
export interface LeaderboardEntry {
  id?: number;
  player_name: string;
  role_id: string;
  role_name: string;
  total_score: number;
  ansehen: number;
  wohlstand: number;
  wissen: number;
  geschick: number;
  glaube: number;
  title: string;
  achievements_count: number;
  vocabulary_count: number;
  created_at?: string;
}

// ===== Leaderboard API =====
export async function submitScore(entry: Omit<LeaderboardEntry, 'id' | 'created_at'>): Promise<boolean> {
  const { error } = await supabase.from('leaderboard').insert([entry]);
  if (error) {
    console.error('Fehler beim Speichern:', error);
    return false;
  }
  return true;
}

export async function getLeaderboard(limit = 50): Promise<LeaderboardEntry[]> {
  const { data, error } = await supabase
    .from('leaderboard')
    .select('*')
    .order('total_score', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Fehler beim Laden:', error);
    return [];
  }
  return data || [];
}

export async function getLeaderboardByRole(roleId: string, limit = 20): Promise<LeaderboardEntry[]> {
  const { data, error } = await supabase
    .from('leaderboard')
    .select('*')
    .eq('role_id', roleId)
    .order('total_score', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Fehler beim Laden:', error);
    return [];
  }
  return data || [];
}
