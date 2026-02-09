import { getState, navigateTo } from '../store';
import { getRoleById } from '../data/roles';
import { getAchievementById } from '../data/achievements';
import { getTotalChapters } from '../data/scenarios';
import { Stats } from '../types';

export function renderProfilePage(): string {
  const { profile } = getState();
  if (!profile) return '<p>Kein Profil vorhanden.</p>';

  const role = getRoleById(profile.roleId);
  const totalChapters = getTotalChapters(profile.roleId);
  const progress = Math.min(100, ((profile.currentChapter - 1) / totalChapters) * 100);

  return `
    <div class="min-h-screen parchment-bg">
      <!-- Header -->
      <header class="bg-royal text-parchment py-4 px-4">
        <div class="max-w-4xl mx-auto flex items-center justify-between">
          <button id="btn-back-scenario" class="text-gold-light hover:text-gold transition font-heading text-sm uppercase tracking-wider">
            ← Zurück zum Spiel
          </button>
          <h1 class="font-heading text-xl text-gold-light">📋 Dein Profil</h1>
          <div></div>
        </div>
      </header>

      <main class="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <!-- Character Card -->
        <div class="medieval-card p-6 animate-fadeIn">
          <div class="flex flex-col md:flex-row gap-6">
            <!-- Avatar area -->
            <div class="flex-shrink-0 text-center">
              <h2 class="font-heading text-2xl text-ink mt-3">${profile.name}</h2>
              <span class="badge mt-1">${role?.name || ''}</span>
              <p class="text-sm text-stone mt-1">${role?.socialClass || ''}</p>
            </div>

            <!-- Stats -->
            <div class="flex-1">
              <h3 class="font-heading text-sm uppercase tracking-wider text-ink-light mb-3">Eigenschaften</h3>
              <div class="space-y-2">
                ${renderFullStatBar('⭐ Ansehen', profile.stats.ansehen)}
                ${renderFullStatBar('💰 Wohlstand', profile.stats.wohlstand)}
                ${renderFullStatBar('📚 Wissen', profile.stats.wissen)}
                ${renderFullStatBar('🎯 Geschick', profile.stats.geschick)}
                ${renderFullStatBar('✝️ Glaube', profile.stats.glaube)}
              </div>
              <div class="mt-4">
                <div class="flex items-center justify-between text-sm text-ink-light mb-1">
                  <span class="font-heading text-xs uppercase tracking-wider">Fortschritt</span>
                  <span>${Math.round(progress)}%</span>
                </div>
                <div class="progress-track">
                  <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tabs -->
        <div class="flex gap-2 overflow-x-auto pb-1">
          <button class="profile-tab active font-heading text-sm px-4 py-2 rounded-t-lg border-2 border-b-0 border-gold bg-parchment text-ink" data-tab="decisions">
            📜 Entscheidungen (${profile.decisions.length})
          </button>
          <button class="profile-tab font-heading text-sm px-4 py-2 rounded-t-lg border-2 border-b-0 border-stone/30 bg-parchment-dark/50 text-stone hover:text-ink transition" data-tab="vocabulary">
            📖 Vokabeln (${profile.vocabulary.length})
          </button>
          <button class="profile-tab font-heading text-sm px-4 py-2 rounded-t-lg border-2 border-b-0 border-stone/30 bg-parchment-dark/50 text-stone hover:text-ink transition" data-tab="facts">
            🏛️ Wissen (${profile.historicalFacts.length})
          </button>
          <button class="profile-tab font-heading text-sm px-4 py-2 rounded-t-lg border-2 border-b-0 border-stone/30 bg-parchment-dark/50 text-stone hover:text-ink transition" data-tab="achievements">
            🏆 Erfolge (${profile.achievements.length})
          </button>
        </div>

        <!-- Tab Content: Decisions -->
        <div id="tab-decisions" class="tab-content medieval-card p-6">
          ${profile.decisions.length === 0 ? '<p class="text-stone text-center">Noch keine Entscheidungen getroffen.</p>' :
            profile.decisions.map((d, i) => `
              <div class="mb-4 pb-4 ${i < profile.decisions.length - 1 ? 'border-b border-gold/20' : ''} animate-fadeIn" style="animation-delay: ${i * 0.05}s">
                <div class="flex items-center gap-2 mb-1">
                  <span class="font-heading text-xs text-gold-dark uppercase">Kapitel ${d.chapter}</span>
                  <span class="text-gold/30">|</span>
                  <span class="font-heading text-sm text-ink">${d.scenarioTitle}</span>
                </div>
                <p class="text-ink-light text-sm mb-1">➤ ${d.choiceText}</p>
                <p class="text-stone text-xs italic">${d.consequence}</p>
              </div>
            `).join('')
          }
        </div>

        <!-- Tab Content: Vocabulary -->
        <div id="tab-vocabulary" class="tab-content medieval-card p-6 hidden">
          ${profile.vocabulary.length === 0 ? '<p class="text-stone text-center">Noch keine Vokabeln gelernt.</p>' :
            `<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${profile.vocabulary.map(v => `
                <div class="bg-parchment rounded-lg p-3 border border-gold/20">
                  <span class="font-heading text-ink font-bold">${v.word}</span>
                  <p class="text-ink-light text-sm">${v.definition}</p>
                  <p class="text-stone text-xs mt-1 italic">„${v.example}"</p>
                </div>
              `).join('')}
            </div>`
          }
        </div>

        <!-- Tab Content: Facts -->
        <div id="tab-facts" class="tab-content medieval-card p-6 hidden">
          ${profile.historicalFacts.length === 0 ? '<p class="text-stone text-center">Noch keine historischen Fakten gelernt.</p>' :
            `<div class="space-y-3">
              ${profile.historicalFacts.map((f, i) => `
                <div class="flex gap-3 animate-fadeIn" style="animation-delay: ${i * 0.05}s">
                  <span class="text-gold text-lg">📜</span>
                  <p class="text-ink-light text-sm leading-relaxed">${f}</p>
                </div>
              `).join('')}
            </div>`
          }
        </div>

        <!-- Tab Content: Achievements -->
        <div id="tab-achievements" class="tab-content medieval-card p-6 hidden">
          ${profile.achievements.length === 0 ? '<p class="text-stone text-center">Noch keine Errungenschaften freigeschaltet.</p>' :
            `<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${profile.achievements.map(aid => {
                const a = getAchievementById(aid);
                if (!a) return '';
                return `
                  <div class="flex items-center gap-3 bg-gold/10 rounded-lg p-3 border border-gold/30 animate-fadeIn">
                    <span class="text-2xl">${a.icon}</span>
                    <div>
                      <p class="font-heading text-sm font-bold text-ink">${a.name}</p>
                      <p class="text-xs text-ink-light">${a.description}</p>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>`
          }
        </div>

        <!-- Items -->
        <div class="medieval-card p-6">
          <h3 class="font-heading text-sm uppercase tracking-wider text-ink-light mb-3">🎒 Gegenstände</h3>
          <div class="flex flex-wrap gap-2">
            ${profile.items.map(item => `
              <span class="bg-parchment-dark px-3 py-1 rounded-full text-sm text-ink-light border border-gold/20">
                ${item}
              </span>
            `).join('')}
          </div>
        </div>
      </main>
    </div>
  `;
}

function renderFullStatBar(label: string, value: number): string {
  const pct = (value / 10) * 100;
  return `
    <div class="flex items-center gap-3">
      <span class="text-sm w-28 text-ink-light">${label}</span>
      <div class="flex-1 progress-track">
        <div class="progress-fill" style="width: ${pct}%"></div>
      </div>
      <span class="text-sm font-bold text-ink w-6 text-right">${value}</span>
    </div>
  `;
}

export function attachProfileListeners() {
  document.getElementById('btn-back-scenario')?.addEventListener('click', () => {
    navigateTo('scenario');
  });

  // Tab switching
  document.querySelectorAll('.profile-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = (tab as HTMLElement).dataset.tab!;

      // Update tab styles
      document.querySelectorAll('.profile-tab').forEach(t => {
        t.classList.remove('active', 'bg-parchment', 'text-ink', 'border-gold');
        t.classList.add('bg-parchment-dark/50', 'text-stone', 'border-stone/30');
      });
      tab.classList.add('active', 'bg-parchment', 'text-ink', 'border-gold');
      tab.classList.remove('bg-parchment-dark/50', 'text-stone', 'border-stone/30');

      // Show/hide content
      document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
      document.getElementById(`tab-${tabId}`)?.classList.remove('hidden');
    });
  });
}
