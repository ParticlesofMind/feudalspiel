import { getState, navigateTo, resetGame } from '../store';
import { getRoleById } from '../data/roles';
import { getAchievementById } from '../data/achievements';
import { Stats } from '../types';

export function renderSummaryPage(): string {
  const { profile } = getState();
  if (!profile) return '<p>Kein Profil vorhanden.</p>';

  const role = getRoleById(profile.roleId);
  const totalStats = Object.values(profile.stats).reduce((a, b) => a + b, 0);
  const maxStats = 50;
  const percentage = Math.round((totalStats / maxStats) * 100);

  // Determine title based on stats
  const title = getTitle(profile.stats, profile.roleId);

  return `
    <div class="min-h-screen parchment-bg">
      <main class="max-w-3xl mx-auto px-4 py-12">
        <div class="medieval-card p-8 md:p-12 text-center animate-fadeIn">
          <!-- Crown -->
          <div class="text-6xl mb-4">👑</div>
          
          <h1 class="font-heading text-3xl md:text-4xl font-bold text-ink mb-2">
            Deine Reise ist zu Ende!
          </h1>
          <p class="text-ink-light text-lg mb-6">
            ${profile.name}, du hast dich als <strong>${role?.name}</strong> durch das mittelalterliche Deutschland geschlagen.
          </p>

          <hr class="medieval-divider"/>

          <!-- Title -->
          <div class="bg-royal/10 rounded-lg p-6 my-6">
            <p class="font-heading text-sm uppercase tracking-wider text-royal mb-2">Dein Titel</p>
            <h2 class="font-heading text-2xl md:text-3xl text-ink">${title}</h2>
          </div>

          <!-- Final Stats -->
          <div class="text-left max-w-sm mx-auto my-6 space-y-2">
            ${renderFinalStat('⭐ Ansehen', profile.stats.ansehen)}
            ${renderFinalStat('💰 Wohlstand', profile.stats.wohlstand)}
            ${renderFinalStat('📚 Wissen', profile.stats.wissen)}
            ${renderFinalStat('🎯 Geschick', profile.stats.geschick)}
            ${renderFinalStat('✝️ Glaube', profile.stats.glaube)}
            <hr class="medieval-divider"/>
            <div class="flex items-center justify-between">
              <span class="font-heading text-sm text-ink">Gesamtpunkte</span>
              <span class="font-heading text-xl text-gold-dark">${totalStats} / ${maxStats}</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${percentage}%"></div>
            </div>
          </div>

          <!-- Summary Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            <div class="bg-parchment-dark/50 rounded-lg p-3">
              <p class="text-2xl font-bold text-ink">${profile.decisions.length}</p>
              <p class="text-xs text-stone font-heading uppercase">Entscheidungen</p>
            </div>
            <div class="bg-parchment-dark/50 rounded-lg p-3">
              <p class="text-2xl font-bold text-ink">${profile.vocabulary.length}</p>
              <p class="text-xs text-stone font-heading uppercase">Vokabeln</p>
            </div>
            <div class="bg-parchment-dark/50 rounded-lg p-3">
              <p class="text-2xl font-bold text-ink">${profile.historicalFacts.length}</p>
              <p class="text-xs text-stone font-heading uppercase">Historische Fakten</p>
            </div>
            <div class="bg-parchment-dark/50 rounded-lg p-3">
              <p class="text-2xl font-bold text-ink">${profile.achievements.length}</p>
              <p class="text-xs text-stone font-heading uppercase">Errungenschaften</p>
            </div>
          </div>

          <!-- Achievements -->
          ${profile.achievements.length > 0 ? `
            <div class="my-6">
              <h3 class="font-heading text-sm uppercase tracking-wider text-ink-light mb-3">🏆 Errungenschaften</h3>
              <div class="flex flex-wrap gap-2 justify-center">
                ${profile.achievements.map(aid => {
                  const a = getAchievementById(aid);
                  return a ? `<span class="bg-gold/10 border border-gold/30 rounded-full px-3 py-1 text-sm">${a.icon} ${a.name}</span>` : '';
                }).join('')}
              </div>
            </div>
          ` : ''}

          <hr class="medieval-divider"/>

          <!-- Actions -->
          <div class="space-y-3 mt-6">
            <button id="btn-view-profile" class="btn-primary">
              📋 Vollständiges Profil ansehen
            </button>
            <br/>
            <button id="btn-view-glossary" class="btn-primary" style="background: linear-gradient(180deg, var(--color-forest), var(--color-forest-light));">
              📖 Glossar ansehen
            </button>
            <br/>
            <button id="btn-new-game" class="btn-primary" style="background: linear-gradient(180deg, var(--color-royal), var(--color-royal-light));">
              🔄 Neues Spiel starten
            </button>
          </div>

          <p class="text-sm text-stone mt-8 leading-relaxed">
            Du hast viel über das Leben im mittelalterlichen Deutschland gelernt! 
            Möchtest du eine andere Rolle ausprobieren? Jede Rolle hat ihre eigene Geschichte.
          </p>
        </div>
      </main>
    </div>
  `;
}

function renderFinalStat(label: string, value: number): string {
  const pct = (value / 10) * 100;
  return `
    <div class="flex items-center gap-3">
      <span class="text-sm w-28">${label}</span>
      <div class="flex-1 progress-track">
        <div class="progress-fill" style="width: ${pct}%"></div>
      </div>
      <span class="font-bold text-ink w-6 text-right">${value}</span>
    </div>
  `;
}

function getTitle(stats: Stats, roleId: string): string {
  const maxStat = Object.entries(stats).reduce((max, [key, val]) =>
    val > max.val ? { key, val } : max, { key: '', val: 0 });

  const titles: Record<string, Record<string, string>> = {
    bauer: {
      ansehen: '🌾 Der geachtete Bauer',
      wohlstand: '🌾 Der wohlhabende Bauer',
      wissen: '🌾 Der weise Bauer',
      geschick: '🌾 Der geschickte Bauer',
      glaube: '🌾 Der fromme Bauer',
    },
    handwerker: {
      ansehen: '🔨 Der berühmte Meister',
      wohlstand: '🔨 Der reiche Handwerksmeister',
      wissen: '🔨 Der gelehrte Handwerker',
      geschick: '🔨 Der Meister aller Meister',
      glaube: '🔨 Der fromme Handwerker',
    },
    kaufmann: {
      ansehen: '💰 Der angesehene Kaufherr',
      wohlstand: '💰 Der Pfeffersack',
      wissen: '💰 Der kluge Fernhändler',
      geschick: '💰 Der gerissene Händler',
      glaube: '💰 Der ehrbare Kaufmann',
    },
    ritter: {
      ansehen: '⚔️ Der ruhmreiche Ritter',
      wohlstand: '⚔️ Der mächtige Lehnsherr',
      wissen: '⚔️ Der gelehrte Ritter',
      geschick: '⚔️ Der Turnierkönig',
      glaube: '⚔️ Der Kreuzritter',
    },
    moench: {
      ansehen: '📿 Der verehrte Abt',
      wohlstand: '📿 Der klösterliche Verwalter',
      wissen: '📿 Der große Gelehrte',
      geschick: '📿 Der begabte Heiler',
      glaube: '📿 Der heilige Mönch',
    },
    adliger: {
      ansehen: '👑 Der große Fürst',
      wohlstand: '👑 Der reiche Herzog',
      wissen: '👑 Der weise Herrscher',
      geschick: '👑 Der geschickte Diplomat',
      glaube: '👑 Der fromme Landesherr',
    },
  };

  return titles[roleId]?.[maxStat.key] || '🏰 Bürger des Reiches';
}

export function attachSummaryListeners() {
  document.getElementById('btn-view-profile')?.addEventListener('click', () => navigateTo('profile'));
  document.getElementById('btn-view-glossary')?.addEventListener('click', () => navigateTo('glossary'));
  document.getElementById('btn-new-game')?.addEventListener('click', () => {
    if (confirm('Möchtest du wirklich ein neues Spiel starten? Dein Fortschritt wird gelöscht.')) {
      resetGame();
    }
  });
}
