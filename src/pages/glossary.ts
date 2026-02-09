import { getState, navigateTo } from '../store';

export function renderGlossaryPage(): string {
  const { profile } = getState();
  const vocabulary = profile?.vocabulary || [];

  // Medieval glossary terms (always available)
  const glossaryTerms = [
    { word: 'das Heilige Römische Reich (HRR)', definition: 'Ein großes Reich in Mitteleuropa, das vom 10. bis zum 19. Jahrhundert existierte. Es umfasste Gebiete im heutigen Deutschland, Österreich, der Schweiz und anderen Ländern.' },
    { word: 'das Lehnswesen', definition: 'Das System, in dem der König Land an Adlige gab, die dafür Dienste leisteten. Diese gaben Land weiter an Ritter.' },
    { word: 'der Feudalismus', definition: 'Die Gesellschaftsordnung des Mittelalters, basierend auf Landbesitz und Abhängigkeitsverhältnissen.' },
    { word: 'die Leibeigenschaft', definition: 'Ein System, in dem Bauern an das Land gebunden waren und dem Grundherrn dienen mussten.' },
    { word: 'der Zehnte', definition: 'Eine Abgabe von einem Zehntel der Ernte oder des Einkommens, meist an die Kirche.' },
    { word: 'die Zunft', definition: 'Eine Organisation von Handwerkern des gleichen Berufs, die Regeln für Qualität, Preise und Ausbildung festlegte.' },
    { word: 'der Lehnseid', definition: 'Ein feierliches Versprechen von Treue und Dienst, das ein Vasall seinem Lehnsherrn gab.' },
    { word: 'die Fron / der Frondienst', definition: 'Unbezahlte Pflichtarbeit, die Bauern für ihren Grundherrn leisten mussten.' },
    { word: 'das Marktrecht', definition: 'Das Recht einer Stadt, einen Markt abzuhalten. Es wurde vom König oder Fürsten verliehen.' },
    { word: 'der Ablassbrief', definition: 'Ein Dokument der Kirche, das Vergebung von Sünden versprach—oft gegen Geld.' },
    { word: 'das Gottesurteil (Ordal)', definition: 'Eine Prüfung, bei der man glaubte, Gott zeige durch das Ergebnis, wer schuldig oder unschuldig ist.' },
    { word: 'die Hanse', definition: 'Ein mächtiger Bund norddeutscher Kaufleute und Städte, der den Handel in der Nord- und Ostsee kontrollierte.' },
    { word: 'die Drei-Felder-Wirtschaft', definition: 'Eine landwirtschaftliche Methode: Ein Feld Sommergetreide, ein Feld Wintergetreide, ein Feld ruht (liegt brach).' },
    { word: 'der Minnesang', definition: 'Die Kunst der höfischen Liebeslyrik. Minnesänger besangen die idealisierte Liebe zu einer adeligen Dame.' },
    { word: 'die Kreuzzüge', definition: 'Militärische Expeditionen der christlichen europäischen Mächte ins Heilige Land (11.–13. Jahrhundert).' },
    { word: 'das Stadtrecht', definition: 'Besondere Rechte und Regeln für Stadtbewohner, die oft freier waren als auf dem Land.' },
    { word: '"Stadtluft macht frei"', definition: 'Ein Rechtsgrundsatz: Wenn ein Leibeigener ein Jahr und einen Tag in einer Stadt lebte, wurde er frei.' },
    { word: 'der Kurfürst', definition: 'Einer der sieben Fürsten, die das Recht hatten, den König / Kaiser zu wählen.' },
    { word: 'die Pest / der Schwarze Tod', definition: 'Eine tödliche Seuche, die im 14. Jahrhundert etwa ein Drittel der europäischen Bevölkerung tötete.' },
    { word: 'der Sachsenspiegel', definition: 'Das wichtigste deutsche Rechtsbuch des Mittelalters, geschrieben um 1220 von Eike von Repgow.' },
  ];

  return `
    <div class="min-h-screen parchment-bg">
      <!-- Header -->
      <header class="bg-royal text-parchment py-4 px-4">
        <div class="max-w-4xl mx-auto flex items-center justify-between">
          <button id="btn-back-glossary" class="text-gold-light hover:text-gold transition font-heading text-sm uppercase tracking-wider">
            ← Zurück
          </button>
          <h1 class="font-heading text-xl text-gold-light">📖 Glossar</h1>
          <div></div>
        </div>
      </header>

      <main class="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <!-- Search -->
        <div class="medieval-card p-4">
          <input
            type="text"
            id="glossary-search"
            placeholder="🔍 Begriff suchen..."
            class="w-full px-4 py-2 rounded-lg border-2 border-gold/30 bg-parchment text-ink focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 placeholder:text-stone-light"
          />
        </div>

        <!-- Learned Vocabulary -->
        ${vocabulary.length > 0 ? `
          <div>
            <h2 class="font-heading text-lg text-ink mb-3 flex items-center gap-2">
              <span class="text-forest">✓</span> Gelernte Vokabeln
              <span class="text-sm text-stone font-normal">(${vocabulary.length})</span>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3" id="learned-vocab">
              ${vocabulary.map(v => `
                <div class="medieval-card p-4 vocab-item" data-word="${v.word.toLowerCase()}">
                  <h4 class="font-heading text-ink font-bold">${v.word}</h4>
                  <p class="text-ink-light text-sm mt-1">${v.definition}</p>
                  <p class="text-stone text-xs mt-2 italic">„${v.example}"</p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- General Glossary -->
        <div>
          <h2 class="font-heading text-lg text-ink mb-3">📜 Mittelalter-Glossar</h2>
          <p class="text-sm text-ink-light mb-4">Wichtige Begriffe aus dem Mittelalter, die dir helfen, die Welt besser zu verstehen.</p>
          <div class="space-y-2" id="glossary-list">
            ${glossaryTerms.map(t => `
              <details class="medieval-card glossary-item" data-word="${t.word.toLowerCase()}">
                <summary class="p-4 cursor-pointer font-heading text-ink hover:text-crimson transition list-none flex items-center justify-between">
                  <span>${t.word}</span>
                  <span class="text-gold text-sm">▼</span>
                </summary>
                <div class="px-4 pb-4 text-ink-light text-sm leading-relaxed border-t border-gold/20 pt-3">
                  ${t.definition}
                </div>
              </details>
            `).join('')}
          </div>
        </div>
      </main>
    </div>
  `;
}

export function attachGlossaryListeners() {
  document.getElementById('btn-back-glossary')?.addEventListener('click', () => {
    const { profile } = getState();
    navigateTo(profile ? 'scenario' : 'intro');
  });

  // Search
  document.getElementById('glossary-search')?.addEventListener('input', (e) => {
    const query = (e.target as HTMLInputElement).value.toLowerCase();
    document.querySelectorAll('.vocab-item, .glossary-item').forEach(item => {
      const word = (item as HTMLElement).dataset.word || '';
      const text = item.textContent?.toLowerCase() || '';
      const match = word.includes(query) || text.includes(query);
      (item as HTMLElement).style.display = match ? '' : 'none';
    });
  });
}
