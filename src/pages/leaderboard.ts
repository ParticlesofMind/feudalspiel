import { navigateTo, getState } from '../store';
import { getLeaderboard, getLeaderboardByRole, LeaderboardEntry } from '../utils/supabase';

let currentFilter = 'all';
let entries: LeaderboardEntry[] = [];
let loading = true;

export function renderLeaderboardPage(): string {
  const { profile } = getState();

  return `
    <div class="min-h-screen parchment-bg">
      <!-- Header -->
      <header class="sticky top-0 z-40 bg-royal text-parchment shadow-lg">
        <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <button id="btn-back" class="text-sm text-gold-light hover:text-gold transition font-heading uppercase tracking-wider">
            ← Zurück
          </button>
          <h1 class="font-heading text-lg text-gold-light">🏆 Rangliste</h1>
          <div></div>
        </div>
      </header>

      <main class="max-w-3xl mx-auto px-4 py-8">
        <div class="animate-fadeIn">
          <div class="text-center mb-6">
            <h1 class="font-heading text-2xl md:text-3xl font-bold text-ink">🏆 Rangliste</h1>
            <p class="text-ink-light mt-1">Wie gut haben alle gespielt?</p>
          </div>

          <!-- Filter Buttons -->
          <div class="flex flex-wrap gap-2 justify-center mb-6">
            <button class="filter-btn badge cursor-pointer text-sm px-3 py-1" data-filter="all" style="${currentFilter === 'all' ? 'background: var(--color-gold-dark); color: var(--color-ink)' : ''}">
              Alle
            </button>
            <button class="filter-btn badge cursor-pointer text-sm px-3 py-1" data-filter="bauer" style="${currentFilter === 'bauer' ? 'background: var(--color-gold-dark); color: var(--color-ink)' : ''}">
              🌾 Bauer
            </button>
            <button class="filter-btn badge cursor-pointer text-sm px-3 py-1" data-filter="handwerker" style="${currentFilter === 'handwerker' ? 'background: var(--color-gold-dark); color: var(--color-ink)' : ''}">
              🔨 Handwerker
            </button>
            <button class="filter-btn badge cursor-pointer text-sm px-3 py-1" data-filter="kaufmann" style="${currentFilter === 'kaufmann' ? 'background: var(--color-gold-dark); color: var(--color-ink)' : ''}">
              💰 Kaufmann
            </button>
            <button class="filter-btn badge cursor-pointer text-sm px-3 py-1" data-filter="ritter" style="${currentFilter === 'ritter' ? 'background: var(--color-gold-dark); color: var(--color-ink)' : ''}">
              ⚔️ Ritter
            </button>
            <button class="filter-btn badge cursor-pointer text-sm px-3 py-1" data-filter="moench" style="${currentFilter === 'moench' ? 'background: var(--color-gold-dark); color: var(--color-ink)' : ''}">
              📿 Mönch
            </button>
            <button class="filter-btn badge cursor-pointer text-sm px-3 py-1" data-filter="adliger" style="${currentFilter === 'adliger' ? 'background: var(--color-gold-dark); color: var(--color-ink)' : ''}">
              👑 Adliger
            </button>
          </div>

          <!-- Leaderboard Table -->
          <div id="leaderboard-content" class="medieval-card p-4 md:p-6">
            <div class="text-center text-ink-light py-8">
              <p class="text-lg">⏳ Rangliste wird geladen...</p>
            </div>
          </div>

          ${profile ? `
            <div class="text-center mt-6">
              <button id="btn-new-game" class="btn-primary" style="background: linear-gradient(180deg, var(--color-royal), var(--color-royal-light));">
                🔄 Neues Spiel starten
              </button>
            </div>
          ` : ''}
        </div>
      </main>
    </div>
  `;
}

function renderLeaderboardTable(data: LeaderboardEntry[]): string {
  if (data.length === 0) {
    return `
      <div class="text-center text-ink-light py-8">
        <p class="text-lg">Noch keine Einträge! 🏰</p>
        <p class="text-sm mt-1">Spiel das Spiel und sei der Erste!</p>
      </div>
    `;
  }

  return `
    <div class="overflow-x-auto">
      <table class="w-full text-left">
        <thead>
          <tr class="border-b-2 border-gold/40">
            <th class="font-heading text-xs uppercase tracking-wider text-stone py-2 px-2">#</th>
            <th class="font-heading text-xs uppercase tracking-wider text-stone py-2 px-2">Name</th>
            <th class="font-heading text-xs uppercase tracking-wider text-stone py-2 px-2">Rolle</th>
            <th class="font-heading text-xs uppercase tracking-wider text-stone py-2 px-2 text-center">Punkte</th>
            <th class="font-heading text-xs uppercase tracking-wider text-stone py-2 px-2 hidden md:table-cell">Titel</th>
          </tr>
        </thead>
        <tbody>
          ${data.map((entry, i) => {
            const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`;
            const roleEmoji = getRoleEmoji(entry.role_id);
            const isHighlighted = i < 3;
            return `
              <tr class="border-b border-gold/20 ${isHighlighted ? 'bg-gold/5' : ''} hover:bg-gold/10 transition">
                <td class="py-3 px-2 font-heading text-lg">${medal}</td>
                <td class="py-3 px-2">
                  <span class="font-bold text-ink">${entry.player_name}</span>
                </td>
                <td class="py-3 px-2">
                  <span class="text-sm">${roleEmoji} ${entry.role_name}</span>
                </td>
                <td class="py-3 px-2 text-center">
                  <span class="font-heading text-lg font-bold text-gold-dark">${entry.total_score}</span>
                  <span class="text-xs text-stone">/50</span>
                </td>
                <td class="py-3 px-2 text-sm text-ink-light hidden md:table-cell">${entry.title}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>

    <!-- Stats breakdown for top 3 -->
    ${data.length > 0 ? `
      <div class="mt-6 pt-4 border-t-2 border-gold/20">
        <h3 class="font-heading text-sm uppercase tracking-wider text-stone mb-3 text-center">Top 3 – Details</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          ${data.slice(0, 3).map((entry, i) => {
            const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉';
            return `
              <div class="bg-parchment-dark/50 rounded-lg p-3 text-center">
                <p class="font-heading text-sm font-bold text-ink">${medal} ${entry.player_name}</p>
                <div class="grid grid-cols-5 gap-1 mt-2 text-xs">
                  <div>⭐<br/>${entry.ansehen}</div>
                  <div>💰<br/>${entry.wohlstand}</div>
                  <div>📚<br/>${entry.wissen}</div>
                  <div>🎯<br/>${entry.geschick}</div>
                  <div>✝️<br/>${entry.glaube}</div>
                </div>
                <p class="text-xs text-stone mt-1">🏆 ${entry.achievements_count} | 📖 ${entry.vocabulary_count}</p>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    ` : ''}
  `;
}

function getRoleEmoji(roleId: string): string {
  const emojis: Record<string, string> = {
    bauer: '🌾',
    handwerker: '🔨',
    kaufmann: '💰',
    ritter: '⚔️',
    moench: '📿',
    adliger: '👑',
  };
  return emojis[roleId] || '🏰';
}

async function loadData(filter: string) {
  const container = document.getElementById('leaderboard-content');
  if (!container) return;

  container.innerHTML = `<div class="text-center text-ink-light py-8"><p class="text-lg">⏳ Laden...</p></div>`;

  try {
    if (filter === 'all') {
      entries = await getLeaderboard(50);
    } else {
      entries = await getLeaderboardByRole(filter, 30);
    }
    container.innerHTML = renderLeaderboardTable(entries);
    loading = false;
  } catch (err) {
    console.error(err);
    container.innerHTML = `
      <div class="text-center text-ink-light py-8">
        <p class="text-lg">❌ Fehler beim Laden</p>
        <p class="text-sm mt-1">Bitte versuche es später noch einmal.</p>
      </div>
    `;
  }
}

export function attachLeaderboardListeners() {
  document.getElementById('btn-back')?.addEventListener('click', () => {
    const { profile } = getState();
    if (profile) {
      navigateTo('summary');
    } else {
      navigateTo('intro');
    }
  });

  document.getElementById('btn-new-game')?.addEventListener('click', () => {
    import('../store').then(({ resetGame }) => {
      if (confirm('Neues Spiel starten? Dein Fortschritt wird gelöscht.')) {
        resetGame();
      }
    });
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = (btn as HTMLElement).dataset.filter!;
      currentFilter = filter;

      // Update styles
      document.querySelectorAll('.filter-btn').forEach(b => {
        (b as HTMLElement).style.background = '';
        (b as HTMLElement).style.color = '';
      });
      (btn as HTMLElement).style.background = 'var(--color-gold-dark)';
      (btn as HTMLElement).style.color = 'var(--color-ink)';

      loadData(filter);
    });
  });

  // Initial load
  loadData(currentFilter);
}
