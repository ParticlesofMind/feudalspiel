-- Run this in the Supabase SQL Editor (https://supabase.com/dashboard → SQL Editor)
-- This creates the leaderboard table for Feudalspiel

CREATE TABLE IF NOT EXISTS leaderboard (
  id BIGSERIAL PRIMARY KEY,
  player_name TEXT NOT NULL,
  role_id TEXT NOT NULL,
  role_name TEXT NOT NULL,
  total_score INTEGER NOT NULL DEFAULT 0,
  ansehen INTEGER NOT NULL DEFAULT 0,
  wohlstand INTEGER NOT NULL DEFAULT 0,
  wissen INTEGER NOT NULL DEFAULT 0,
  geschick INTEGER NOT NULL DEFAULT 0,
  glaube INTEGER NOT NULL DEFAULT 0,
  title TEXT NOT NULL DEFAULT '',
  achievements_count INTEGER NOT NULL DEFAULT 0,
  vocabulary_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Row Level Security: everyone can read, anyone can insert
ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Leaderboard is viewable by everyone"
  ON leaderboard FOR SELECT
  USING (true);

CREATE POLICY "Anyone can submit scores"
  ON leaderboard FOR INSERT
  WITH CHECK (true);

-- Indexes for fast ranking
CREATE INDEX idx_leaderboard_total_score ON leaderboard (total_score DESC);
CREATE INDEX idx_leaderboard_role_id ON leaderboard (role_id, total_score DESC);
