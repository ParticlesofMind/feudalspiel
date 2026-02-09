import { getState, makeDecision, navigateTo } from '../store';
import { getScenario, getTotalChapters } from '../data/scenarios';
import { getRoleById } from '../data/roles';
import { Stats } from '../types';

export function renderScenarioPage(): string {
  const { profile } = getState();
  if (!profile) return '<p>Fehler: Kein Profil gefunden.</p>';

  const totalChapters = getTotalChapters(profile.roleId);

  // Check if game is complete
  if (profile.currentChapter > totalChapters) {
    navigateTo('summary');
    return '';
  }

  const scenario = getScenario(profile.roleId, profile.currentChapter);
  if (!scenario) {
    navigateTo('summary');
    return '';
  }

  const role = getRoleById(profile.roleId);
  const progress = ((profile.currentChapter - 1) / totalChapters) * 100;

  return `
    <div class="min-h-screen parchment-bg">
      <!-- Top Bar -->
      <header class="sticky top-0 z-40 bg-royal text-parchment shadow-lg">
        <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="font-heading text-sm text-gold-light">${profile.name}</span>
            <span class="text-gold/50">|</span>
            <span class="text-sm text-gold/80">${role?.name || ''}</span>
          </div>
          <div class="flex items-center gap-3">
            <button id="btn-profile" class="text-sm text-gold-light hover:text-gold transition font-heading uppercase tracking-wider">
              📋 Profil
            </button>
            <button id="btn-glossary" class="text-sm text-gold-light hover:text-gold transition font-heading uppercase tracking-wider">
              📖 Glossar
            </button>
          </div>
        </div>
        <!-- Progress -->
        <div class="bg-royal-light">
          <div class="max-w-5xl mx-auto px-4 py-1 flex items-center gap-3">
            <span class="text-xs text-gold/60 font-heading">Kapitel ${profile.currentChapter}/${totalChapters}</span>
            <div class="flex-1 progress-track h-2" style="border-color: var(--color-gold-dark);">
              <div class="progress-fill" style="width: ${progress}%; background: linear-gradient(90deg, var(--color-gold-dark), var(--color-gold-light));"></div>
            </div>
          </div>
        </div>
      </header>

      <!-- Scenario Content -->
      <main class="max-w-3xl mx-auto px-4 py-8">
        <div class="animate-fadeIn">
          <!-- Chapter Title -->
          <div class="text-center mb-6">
            <span class="badge mb-2">${getCategoryLabel(scenario.category)}</span>
            <h1 class="font-heading text-2xl md:text-3xl font-bold text-ink mt-2">${scenario.title}</h1>
            <p class="font-heading text-sm text-stone uppercase tracking-widest mt-1">Kapitel ${scenario.chapter}</p>
          </div>

          <!-- Story Text -->
          <div class="medieval-card p-6 md:p-8 mb-8">
            <p class="text-lg leading-relaxed text-ink-light">${scenario.description}</p>
          </div>

          <!-- Choices -->
          <h2 class="font-heading text-lg text-ink mb-4 text-center">Was tust du?</h2>
          <div class="space-y-3" id="choices-container">
            ${scenario.choices.map((choice, i) => `
              <button class="btn-choice animate-slideIn choice-btn" data-choice="${i}" style="animation-delay: ${0.1 + 0.15 * i}s">
                <span class="font-heading text-gold-dark mr-2">${String.fromCharCode(65 + i)}.</span>
                ${choice.text}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Consequence Modal (hidden) -->
        <div id="consequence-modal" class="hidden mt-8">
          <div class="medieval-card p-6 md:p-8 animate-fadeIn border-forest-light" style="border-color: var(--color-forest)">
            <h3 class="font-heading text-xl text-ink mb-3">📜 Konsequenz</h3>
            <p class="text-lg text-ink-light leading-relaxed mb-4" id="consequence-text"></p>
            
            <!-- Stat Changes -->
            <div id="stat-changes" class="mb-4"></div>
            
            <!-- Historical Fact -->
            <div id="historical-fact" class="hidden bg-royal/10 rounded-lg p-4 mb-4">
              <h4 class="font-heading text-sm uppercase tracking-wider text-royal mb-1">🏛️ Historisches Wissen</h4>
              <p class="text-ink-light" id="fact-text"></p>
            </div>

            <!-- Vocabulary -->
            <div id="vocabulary-section" class="hidden mb-4">
              <h4 class="font-heading text-sm uppercase tracking-wider text-forest mb-2">📖 Neue Vokabeln</h4>
              <div id="vocab-list" class="space-y-2"></div>
            </div>

            <!-- Achievement -->
            <div id="achievement-section" class="hidden bg-gold/10 rounded-lg p-4 mb-4 text-center">
              <p class="font-heading text-sm uppercase tracking-wider text-gold-dark mb-1">🏆 Errungenschaft freigeschaltet!</p>
              <p class="text-lg font-bold text-ink" id="achievement-name"></p>
            </div>

            <div class="text-center mt-6">
              <button id="btn-next" class="btn-primary text-lg">
                Weiter →
              </button>
            </div>
          </div>
        </div>
      </main>

      <!-- Stats Sidebar (mini) -->
      <div class="fixed bottom-4 left-4 z-30">
        <div class="medieval-card p-3 text-xs space-y-1 opacity-80 hover:opacity-100 transition">
          ${renderMiniStats(profile.stats)}
        </div>
      </div>
    </div>
  `;
}

function renderMiniStats(stats: Stats): string {
  const items = [
    { label: 'ANS', value: stats.ansehen, icon: '⭐' },
    { label: 'WOH', value: stats.wohlstand, icon: '💰' },
    { label: 'WIS', value: stats.wissen, icon: '📚' },
    { label: 'GES', value: stats.geschick, icon: '🎯' },
    { label: 'GLA', value: stats.glaube, icon: '✝️' },
  ];
  return items.map(s => `
    <div class="flex items-center gap-1">
      <span>${s.icon}</span>
      <span class="font-heading text-ink-light">${s.label}</span>
      <span class="font-bold text-ink">${s.value}</span>
    </div>
  `).join('');
}

function getCategoryLabel(cat: string): string {
  const labels: Record<string, string> = {
    alltag: '🏠 Alltag',
    gesellschaft: '👥 Gesellschaft',
    handel: '💰 Handel & Wirtschaft',
    religion: '⛪ Religion & Kirche',
    handwerk: '🔨 Handwerk & Zünfte',
    landwirtschaft: '🌾 Landwirtschaft',
    recht: '⚖️ Recht & Justiz',
    feste: '🎉 Feste & Traditionen',
  };
  return labels[cat] || cat;
}

export function attachScenarioListeners() {
  const { profile } = getState();
  if (!profile) return;

  const scenario = getScenario(profile.roleId, profile.currentChapter);
  if (!scenario) return;

  // Navigate buttons
  document.getElementById('btn-profile')?.addEventListener('click', () => navigateTo('profile'));
  document.getElementById('btn-glossary')?.addEventListener('click', () => navigateTo('glossary'));

  // Choice buttons
  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const choiceIndex = parseInt((btn as HTMLElement).dataset.choice!);
      const choice = scenario.choices[choiceIndex];

      // Disable all choice buttons
      document.querySelectorAll('.choice-btn').forEach(b => {
        (b as HTMLButtonElement).disabled = true;
        b.classList.add('opacity-50');
      });
      // Highlight selected
      btn.classList.remove('opacity-50');
      btn.classList.add('ring-2', 'ring-gold');

      // Show consequence
      const modal = document.getElementById('consequence-modal')!;
      document.getElementById('consequence-text')!.textContent = choice.consequence;

      // Stat changes
      const statDiv = document.getElementById('stat-changes')!;
      const changes = Object.entries(choice.statChanges)
        .map(([key, val]) => {
          const v = val as number;
          const label = { ansehen: 'Ansehen', wohlstand: 'Wohlstand', wissen: 'Wissen', geschick: 'Geschick', glaube: 'Glaube' }[key] || key;
          const color = v > 0 ? 'text-forest' : 'text-crimson';
          const sign = v > 0 ? '+' : '';
          return `<span class="${color} font-heading text-sm">${label} ${sign}${v}</span>`;
        });
      statDiv.innerHTML = changes.length ? `<div class="flex flex-wrap gap-3">${changes.join('')}</div>` : '';

      // Historical fact
      if (choice.historicalFact) {
        document.getElementById('historical-fact')!.classList.remove('hidden');
        document.getElementById('fact-text')!.textContent = choice.historicalFact;
      }

      // Vocabulary
      if (choice.vocabularyLearned && choice.vocabularyLearned.length > 0) {
        document.getElementById('vocabulary-section')!.classList.remove('hidden');
        document.getElementById('vocab-list')!.innerHTML = choice.vocabularyLearned.map(v => `
          <div class="bg-parchment rounded-lg p-3 border border-gold/30">
            <span class="font-heading text-ink font-bold">${v.word}</span>
            <span class="text-ink-light"> — ${v.definition}</span>
            <p class="text-sm text-stone mt-1 italic">„${v.example}"</p>
          </div>
        `).join('');
      }

      // Achievement
      if (choice.achievementId) {
        import('../data/achievements').then(({ getAchievementById }) => {
          const ach = getAchievementById(choice.achievementId!);
          if (ach) {
            document.getElementById('achievement-section')!.classList.remove('hidden');
            document.getElementById('achievement-name')!.textContent = `${ach.icon} ${ach.name}`;
          }
        });
      }

      modal.classList.remove('hidden');
      modal.scrollIntoView({ behavior: 'smooth' });

      // Apply the decision
      makeDecision(
        scenario.id,
        scenario.title,
        choiceIndex,
        choice.text,
        choice.consequence,
        choice.statChanges,
        scenario.chapter,
        choice.vocabularyLearned,
        choice.historicalFact,
        choice.achievementId,
      );

      // Next button
      document.getElementById('btn-next')?.addEventListener('click', () => {
        const latest = getState().profile;
        if (!latest) return;

        const chapters = getTotalChapters(latest.roleId);
        if (latest.currentChapter > chapters) {
          navigateTo('summary');
        } else {
          navigateTo('scenario');
        }
      });
    });
  });
}
