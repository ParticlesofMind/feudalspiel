import { navigateTo, loadFromStorage, getState } from '../store';

export function renderIntroPage(): string {
  const hasSave = loadFromStorage();
  const state = getState();

  return `
    <div class="min-h-screen parchment-bg flex flex-col">
      <!-- Header -->
      <header class="text-center py-8 md:py-16 px-4">
        <div class="animate-fadeIn">
          <h1 class="font-heading text-4xl md:text-6xl font-bold text-ink tracking-wide mb-2">
            ⚔️ Feudalspiel ⚔️
          </h1>
          <p class="font-heading text-lg md:text-xl text-ink-light tracking-widest uppercase mt-2">
            Leben im Mittelalterlichen Deutschland
          </p>
          <hr class="medieval-divider max-w-md mx-auto mt-6"/>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-1 max-w-3xl mx-auto px-4 pb-16">
        <div class="medieval-card p-6 md:p-10 animate-fadeIn" style="animation-delay: 0.2s">
          <!-- Intro Image -->
          <div class="mb-6 rounded-lg overflow-hidden border-2 border-gold">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Nuremberg_chronicles_-_NORIMBERGA.png/600px-Nuremberg_chronicles_-_NORIMBERGA.png"
              alt="Mittelalterliche Stadt aus der Schedelschen Weltchronik"
              class="w-full h-48 md:h-64 object-cover"
            />
          </div>

          <h2 class="font-heading text-2xl md:text-3xl text-center text-ink mb-6">
            Willkommen im Heiligen Römischen Reich!
          </h2>

          <div class="space-y-4 text-ink-light text-lg leading-relaxed">
            <p>
              Stell dir vor, du lebst im <strong>mittelalterlichen Deutschland</strong>—vor 
              vielen hundert Jahren, als Ritter auf Burgen lebten, Mönche in Klöstern beteten 
              und Bauern auf den Feldern arbeiteten.
            </p>
            <p>
              In diesem Spiel wirst du eine <strong>Rolle wählen</strong> und das Leben im 
              Mittelalter erleben. Du triffst Entscheidungen, lernst über die Geschichte 
              und baust dein eigenes Profil auf.
            </p>
            <p>
              Jede Entscheidung hat <strong>Konsequenzen</strong>—genau wie im echten Leben! 
              Wirst du ein gerechter Herrscher? Ein geschickter Handwerker? Ein mutiger Ritter? 
              Die Wahl liegt bei dir.
            </p>
          </div>

          <hr class="medieval-divider"/>

          <div class="bg-parchment-dark/50 rounded-lg p-4 mb-6">
            <h3 class="font-heading text-sm uppercase tracking-wider text-ink-light mb-2">📜 Was du lernen wirst:</h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-ink-light">
              <li class="flex items-center gap-2"><span class="text-gold">✦</span> Das Feudalsystem und die Gesellschaft</li>
              <li class="flex items-center gap-2"><span class="text-gold">✦</span> Handel und Wirtschaft im Mittelalter</li>
              <li class="flex items-center gap-2"><span class="text-gold">✦</span> Religion und das Klosterleben</li>
              <li class="flex items-center gap-2"><span class="text-gold">✦</span> Handwerk und die Zünfte</li>
              <li class="flex items-center gap-2"><span class="text-gold">✦</span> Alltag und Feste der Menschen</li>
              <li class="flex items-center gap-2"><span class="text-gold">✦</span> Recht und Gerechtigkeit</li>
            </ul>
          </div>

          <div class="text-center space-y-3">
            <button id="btn-start" class="btn-primary text-lg">
              🏰 Abenteuer beginnen!
            </button>
            ${hasSave && state.profile ? `
              <div>
                <button id="btn-continue" class="btn-primary text-lg" style="background: linear-gradient(180deg, var(--color-forest), var(--color-forest-light));">
                  ▶ Weiterspielen als ${state.profile.name}
                </button>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Info boxes -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div class="medieval-card p-4 text-center animate-fadeIn" style="animation-delay: 0.4s">
            <div class="text-3xl mb-2">📖</div>
            <h3 class="font-heading text-sm uppercase tracking-wider mb-1">Sprache</h3>
            <p class="text-sm text-ink-light">Alle Texte sind auf Deutsch—perfekt für B1-Lerner!</p>
          </div>
          <div class="medieval-card p-4 text-center animate-fadeIn" style="animation-delay: 0.5s">
            <div class="text-3xl mb-2">🎭</div>
            <h3 class="font-heading text-sm uppercase tracking-wider mb-1">Rollen</h3>
            <p class="text-sm text-ink-light">Wähle eine Rolle: Bauer, Ritter, Mönch und mehr!</p>
          </div>
          <div class="medieval-card p-4 text-center animate-fadeIn" style="animation-delay: 0.6s">
            <div class="text-3xl mb-2">⚔️</div>
            <h3 class="font-heading text-sm uppercase tracking-wider mb-1">Entscheidungen</h3>
            <p class="text-sm text-ink-light">Jede Wahl verändert dein Schicksal!</p>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="text-center py-4 text-sm text-stone">
        <p>Feudalspiel — Lerne Deutsch durch das Mittelalter</p>
      </footer>
    </div>
  `;
}

export function attachIntroListeners() {
  document.getElementById('btn-start')?.addEventListener('click', () => {
    navigateTo('roleSelect');
  });
  document.getElementById('btn-continue')?.addEventListener('click', () => {
    loadFromStorage();
    navigateTo('scenario');
  });
}
