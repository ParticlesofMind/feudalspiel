import { roles } from '../data/roles';
import { navigateTo } from '../store';

let selectedRoleId: string | null = null;

export function renderRoleSelectPage(): string {
  return `
    <div class="min-h-screen parchment-bg">
      <!-- Header -->
      <header class="text-center py-6 px-4">
        <button id="btn-back-intro" class="absolute left-4 top-6 text-ink-light hover:text-ink transition font-heading text-sm uppercase tracking-wider">
          ← Zurück
        </button>
        <h1 class="font-heading text-3xl md:text-4xl font-bold text-ink">Wähle deine Rolle</h1>
        <p class="text-ink-light mt-2 text-lg">Wer willst du im mittelalterlichen Deutschland sein?</p>
        <hr class="medieval-divider max-w-xs mx-auto mt-4"/>
      </header>

      <!-- Role Grid -->
      <main class="max-w-6xl mx-auto px-4 pb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${roles.map((role, i) => `
            <div class="medieval-card cursor-pointer role-card animate-fadeIn" data-role="${role.id}" style="animation-delay: ${0.1 * i}s">
              <div class="p-5">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-heading text-xl font-bold text-ink">${role.name}</h3>
                  <span class="badge">${role.socialClass}</span>
                </div>
                <p class="text-ink-light text-base leading-relaxed mb-4">${role.description}</p>
                
                <!-- Stats Preview -->
                <div class="space-y-1">
                  ${renderStatBar('Ansehen', role.stats.ansehen)}
                  ${renderStatBar('Wohlstand', role.stats.wohlstand)}
                  ${renderStatBar('Wissen', role.stats.wissen)}
                  ${renderStatBar('Geschick', role.stats.geschick)}
                  ${renderStatBar('Glaube', role.stats.glaube)}
                </div>

                <!-- Starting Items -->
                <div class="mt-3 flex flex-wrap gap-1">
                  ${role.startingItems.map((item: string) => `
                    <span class="text-xs bg-parchment-dark px-2 py-0.5 rounded-full text-ink-light">🎒 ${item}</span>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </main>

      <!-- Name Entry Modal -->
      <div id="name-modal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 hidden">
        <div class="medieval-card p-8 max-w-md mx-4 w-full animate-fadeIn">
          <h2 class="font-heading text-2xl text-center text-ink mb-2" id="modal-role-title"></h2>
          <p class="text-center text-ink-light mb-1" id="modal-role-desc"></p>
          <hr class="medieval-divider"/>
          <p class="text-center text-ink-light mb-4">Wie heißt dein Charakter?</p>
          <input
            type="text"
            id="input-name"
            placeholder="Dein Name..."
            class="w-full px-4 py-3 rounded-lg border-2 border-gold bg-parchment text-ink font-body text-lg focus:outline-none focus:border-gold-light focus:ring-2 focus:ring-gold/30 placeholder:text-stone-light"
            maxlength="30"
          />
          <div class="flex gap-3 mt-6">
            <button id="btn-cancel-name" class="flex-1 px-4 py-2 rounded-lg border-2 border-stone text-stone font-heading text-sm uppercase tracking-wider hover:bg-parchment-dark transition">
              Abbrechen
            </button>
            <button id="btn-confirm-name" class="flex-1 btn-primary">
              Spiel starten!
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderStatBar(label: string, value: number): string {
  const pct = (value / 5) * 100;
  return `
    <div class="stat-bar">
      <span class="stat-label">${label}</span>
      <div class="flex-1 progress-track">
        <div class="progress-fill" style="width: ${pct}%"></div>
      </div>
      <span class="text-xs text-ink-light w-4 text-right">${value}</span>
    </div>
  `;
}

export function attachRoleSelectListeners() {
  // Back button
  document.getElementById('btn-back-intro')?.addEventListener('click', () => {
    navigateTo('intro');
  });

  // Role cards
  document.querySelectorAll('.role-card').forEach(card => {
    card.addEventListener('click', () => {
      const roleId = (card as HTMLElement).dataset.role!;
      selectedRoleId = roleId;
      const role = roles.find(r => r.id === roleId)!;

      const modal = document.getElementById('name-modal')!;
      document.getElementById('modal-role-title')!.textContent = `🛡️ ${role.name}`;
      document.getElementById('modal-role-desc')!.textContent = role.longDescription;

      modal.classList.remove('hidden');
      (document.getElementById('input-name') as HTMLInputElement).focus();
    });
  });

  // Cancel
  document.getElementById('btn-cancel-name')?.addEventListener('click', () => {
    document.getElementById('name-modal')!.classList.add('hidden');
    selectedRoleId = null;
  });

  // Click outside modal
  document.getElementById('name-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      document.getElementById('name-modal')!.classList.add('hidden');
      selectedRoleId = null;
    }
  });

  // Confirm
  document.getElementById('btn-confirm-name')?.addEventListener('click', startGame);
  document.getElementById('input-name')?.addEventListener('keydown', (e) => {
    if ((e as KeyboardEvent).key === 'Enter') startGame();
  });
}

function startGame() {
  const nameInput = document.getElementById('input-name') as HTMLInputElement;
  const name = nameInput.value.trim();
  if (!name || !selectedRoleId) return;

  // Import dynamically to avoid circular deps
  import('../store').then(({ selectRole }) => {
    selectRole(selectedRoleId!, name);
  });
}
