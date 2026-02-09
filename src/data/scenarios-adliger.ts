import { Scenario } from '../types';

export const adligerScenarios: Scenario[] = [
  {
    id: 'adliger-1',
    roleId: 'adliger',
    chapter: 1,
    title: 'Die Herrschaft beginnt',
    description: 'Dein Vater ist gestorben und du erbst eine Burg, drei Dörfer und die Herrschaft über zweihundert Untertanen. Die Burg ist alt und braucht Reparaturen. Die Bauern erwarten einen gerechten Herrn. Dein erster Befehl als neuer Herr ist wichtig. Was tust du zuerst?',
    choices: [
      {
        text: 'Du lässt die Burg reparieren und verstärken.',
        consequence: 'Die Burg wird stärker und sicherer. In unsicheren Zeiten ein kluger Zug. Die Handwerker bringen auch Neuigkeiten aus anderen Regionen mit.',
        statChanges: { wohlstand: -1, geschick: 2, ansehen: 1 },
        vocabularyLearned: [
          { word: 'die Burg', definition: 'Eine befestigte Wohnanlage des Adels', example: 'Die Burg stand auf einem Hügel über dem Tal.' },
          { word: 'die Herrschaft', definition: 'Die Macht über ein Gebiet und seine Bewohner', example: 'Die Herrschaft über das Land brachte große Verantwortung.' }
        ],
        historicalFact: 'Burgen waren im Mittelalter Zentren der Macht. Sie dienten als Wohnung, Verwaltungssitz und Verteidigungsanlage. In Deutschland gibt es noch über 25.000 Burgruinen.'
      },
      {
        text: 'Du berufst eine Versammlung aller Dorfvorsteher ein, um ihre Probleme zu hören.',
        consequence: 'Die Dorfvorsteher erzählen von ihren Sorgen: zu hohe Abgaben, ein Streit um Wasser-rechte, und ein Wolf, der die Schafe reißt. Du kennst jetzt die Probleme deiner Herrschaft.',
        statChanges: { wissen: 2, ansehen: 2 },
        vocabularyLearned: [
          { word: 'der Untertanke', definition: 'Eine Person, die unter der Herrschaft eines Adligen lebt', example: 'Die Untertanen mussten dem Herrn gehorchen.' },
          { word: 'die Abgabe', definition: 'Geld oder Waren, die man dem Herrn geben muss', example: 'Die Abgaben der Bauern waren oft zu hoch.' }
        ],
        historicalFact: 'Ein guter Lehnsherr sollte „die Waage" halten—gerecht sein und beide Seiten hören. Der Sachsenspiegel beschrieb die Pflichten von Herren und Untertanen.',
        achievementId: 'weise'
      },
      {
        text: 'Du organisierst ein großes Fest, um deinen Herrschaftsantritt zu feiern.',
        consequence: 'Das Fest ist prächtig! Benachbarte Adlige kommen und du knüpfst wichtige politische Kontakte. Die Bauern bekommen freies Essen und Bier. Alle sind beeindruckt, aber deine Kasse leidet.',
        statChanges: { ansehen: 3, wohlstand: -2, glaube: 1 },
        vocabularyLearned: [
          { word: 'der Herrschaftsantritt', definition: 'Der Beginn der Regierung eines neuen Herrschers', example: 'Der Herrschaftsantritt wurde mit einem großen Fest gefeiert.' },
          { word: 'die Kontakte', definition: 'Verbindungen zu wichtigen Personen', example: 'Gute Kontakte waren im Mittelalter sehr wichtig für den Adel.' }
        ],
        historicalFact: 'Feste und Empfänge waren wichtige politische Instrumente. Adlige nutzten sie, um Bündnisse zu schmieden und ihre Macht zu zeigen.'
      }
    ],
    category: 'gesellschaft'
  },
  {
    id: 'adliger-2',
    roleId: 'adliger',
    chapter: 2,
    title: 'Die Heiratspolitik',
    description: 'In deiner Position ist eine Heirat nicht nur eine persönliche Entscheidung—sie ist Politik! Drei Familien haben Interesse an einer Verbindung mit dir gezeigt. Jede Heirat bringt andere Vorteile. Für wen entscheidest du dich?',
    choices: [
      {
        text: 'Die Tochter eines reichen Kaufmanns—sie bringt eine große Mitgift.',
        consequence: 'Die Mitgift füllt deine Kasse, aber einige Adlige rümpfen die Nase über die „niedere" Verbindung. Deine Frau ist klug und bringt neues wirtschaftliches Denken an den Hof.',
        statChanges: { wohlstand: 4, ansehen: -1, wissen: 1 },
        vocabularyLearned: [
          { word: 'die Mitgift', definition: 'Geld oder Besitz, den die Braut in die Ehe mitbringt', example: 'Die Mitgift der Kaufmannstochter war beeindruckend.' },
          { word: 'die Heirat', definition: 'Die offizielle Verbindung zweier Menschen', example: 'Die Heirat war im Mittelalter oft eine politische Entscheidung.' }
        ],
        historicalFact: 'Im Spätmittelalter heirateten immer mehr Adlige in reiche Kaufmannsfamilien. Geld wurde wichtiger als Blutlinie. Die Fugger und Welser stiegen so in den Adel auf.'
      },
      {
        text: 'Die Tochter eines mächtigen Nachbargrafen—eine politische Allianz.',
        consequence: 'Die Verbindung macht beide Familien stärker. Euer Bündnis sorgt für Frieden in der Region. Bei Konflikten steht ihr zusammen. Eine starke politische Ehe.',
        statChanges: { ansehen: 3, geschick: 1 },
        vocabularyLearned: [
          { word: 'die Allianz', definition: 'Ein Bündnis zwischen zwei Parteien', example: 'Die Allianz der beiden Familien brachte Frieden.' },
          { word: 'das Bündnis', definition: 'Eine Vereinbarung zur gegenseitigen Hilfe', example: 'Das Bündnis zwischen den Adligen war stark.' }
        ],
        historicalFact: 'Politische Ehen waren die Norm im Adel. Die Habsburger wurden durch geschickte Heiratspolitik zur mächtigsten Familie Europas. „Bella gerant alii, tu felix Austria nube!" (Andere mögen Kriege führen, du, glückliches Österreich, heirate!)',
        achievementId: 'politikus'
      },
      {
        text: 'Eine Frau aus niedrigem Adel, die du wirklich liebst.',
        consequence: 'Die Liebe siegt! Einige finden die Verbindung unter deinem Stand, aber deine Ehe ist glücklich. Deine Frau gewinnt mit ihrer Freundlichkeit die Herzen der Untertanen.',
        statChanges: { glaube: 2, ansehen: 1 },
        vocabularyLearned: [
          { word: 'die Liebe', definition: 'Das tiefe Gefühl der Zuneigung zu einem Menschen', example: 'Minnesänger besangen die reine, unerreichbare Liebe.' },
          { word: 'der Stand', definition: 'Die soziale Klasse, zu der man gehört', example: 'Es gab drei Stände: Adel, Klerus und Bauern.' }
        ],
        historicalFact: 'Liebesheiraten waren im Adel selten. Die meisten Ehen wurden von den Familien arrangiert. Die Kirche betonte zwar die freie Einwilligung beider Partner, aber die Realität sah oft anders aus.'
      }
    ],
    category: 'gesellschaft'
  },
  {
    id: 'adliger-3',
    roleId: 'adliger',
    chapter: 3,
    title: 'Der Reichstag',
    description: 'Du wirst zum Reichstag eingeladen—die große Versammlung der Fürsten, Bischöfe und Städte des Heiligen Römischen Reiches! Der Kaiser will über Krieg und Steuern beraten. Du reist nach Worms, wo der Reichstag stattfindet. Prächtig gekleidete Adlige aus dem ganzen Reich sind dort.',
    choices: [
      {
        text: 'Du unterstützt den Kaiser und stimmst für seine Steuerpläne.',
        consequence: 'Der Kaiser merkt sich deine Loyalität. Bei der nächsten Gelegenheit bekommst du zusätzliche Rechte—zum Beispiel das Marktrecht für eines deiner Dörfer.',
        statChanges: { ansehen: 1, wohlstand: 2 },
        vocabularyLearned: [
          { word: 'der Reichstag', definition: 'Die Versammlung der wichtigsten Herrscher des Reiches', example: 'Der Reichstag tagte in verschiedenen Städten.' },
          { word: 'die Steuer', definition: 'Geld, das man an den Staat zahlen muss', example: 'Die neuen Steuern waren bei den Bürgern unbeliebt.' }
        ],
        historicalFact: 'Der Reichstag war die wichtigste politische Versammlung des HRR. Er tagte in verschiedenen Städten. Der berühmteste war der Reichstag zu Worms 1521, wo Martin Luther verhört wurde.'
      },
      {
        text: 'Du schließt dich mit anderen kleinen Adligen zusammen und fordert mehr Rechte.',
        consequence: 'Eure Allianz hat Gewicht. Der Kaiser muss Kompromisse machen. Ihr bekommt ein Mitspracherecht bei der Steuerverteilung. Ein wichtiger Sieg für den niederen Adel!',
        statChanges: { ansehen: 2, wissen: 2 },
        vocabularyLearned: [
          { word: 'das Mitspracherecht', definition: 'Das Recht, bei Entscheidungen mitzureden', example: 'Die Fürsten forderten mehr Mitspracherecht im Reich.' },
          { word: 'der Kompromiss', definition: 'Eine Einigung, bei der beide Seiten Zugeständnisse machen', example: 'Der Kaiser musste einen Kompromiss mit den Fürsten finden.' }
        ],
        historicalFact: 'Das HRR war kein zentraler Staat. Der Kaiser teilte die Macht mit Hunderten von Fürsten, Bischöfen und Städten. Man nannte es „Flickenteppich" wegen der vielen kleinen Herrschaftsgebiete.',
        achievementId: 'reichspolitiker'
      },
      {
        text: 'Du nutzt den Reichstag, um Handelsverträge mit anderen Regionen zu schließen.',
        consequence: 'Du triffst Kaufleute und Adlige aus fernen Gebieten. Ein Handelsvertrag mit einem italienischen Adeligen bringt dir Zugang zu Waren aus dem Mittelmeerraum.',
        statChanges: { wohlstand: 2, wissen: 1, ansehen: 1 },
        vocabularyLearned: [
          { word: 'der Handelsvertrag', definition: 'Eine Vereinbarung über den Austausch von Waren', example: 'Der Handelsvertrag brachte beiden Seiten Vorteile.' },
          { word: 'der Mittelmeerraum', definition: 'Die Region um das Mittelmeer', example: 'Gewürze und Seide kamen aus dem Mittelmeerraum.' }
        ],
        historicalFact: 'Italien war im Mittelalter das Zentrum des Fernhandels. Venedig, Genua und Florenz waren reiche Handelsrepubliken, die den Handel mit dem Orient kontrollierten.'
      }
    ],
    category: 'gesellschaft'
  },
  {
    id: 'adliger-4',
    roleId: 'adliger',
    chapter: 4,
    title: 'Die Bauernklage',
    description: 'Eine Gruppe Bauern aus deinem Dorf kommt zur Burg. Sie klagen über zu hohe Abgaben, schlechte Ernten und die Willkür deines Vogts—des Mannes, der in deinem Namen das Dorf verwaltet. Sie bitten dich um Gerechtigkeit. Dein Vogt aber sagt, die Bauern seien faul und widerspenstig.',
    choices: [
      {
        text: 'Du hörst beide Seiten an und untersuchst die Lage persönlich.',
        consequence: 'Du reitest ins Dorf und siehst die Probleme mit eigenen Augen. Der Vogt hat tatsächlich zu hart regiert. Du ersetzt ihn durch einen gerechteren Mann.',
        statChanges: { ansehen: 3, wissen: 1 },
        vocabularyLearned: [
          { word: 'der Vogt', definition: 'Ein Beamter, der im Namen des Herrn regiert', example: 'Der Vogt verwaltete das Dorf für den Adligen.' },
          { word: 'die Willkür', definition: 'Handeln nach eigener Lust, ohne Regeln oder Gerechtigkeit', example: 'Die Willkür des Vogts machte die Bauern wütend.' }
        ],
        historicalFact: 'Bauernaufstände waren im Mittelalter häufig. Die Bauern wehrten sich gegen unfaire Behandlung. Der größte war der Deutsche Bauernkrieg 1524/25.',
        achievementId: 'gerecht'
      },
      {
        text: 'Du senkst die Abgaben und gibst den Bauern mehr Freiheiten.',
        consequence: 'Die Bauern sind überglücklich. Die Ernte verbessert sich, weil sie motivierter arbeiten. Am Ende verdienst du sogar mehr, weil die Bauern mehr produzieren.',
        statChanges: { ansehen: 2, wohlstand: 1, glaube: 1 },
        vocabularyLearned: [
          { word: 'die Abgaben', definition: 'Geld oder Waren, die man an den Herrn zahlen muss', example: 'Die Senkung der Abgaben machte die Bauern glücklich.' },
          { word: 'die Freiheit', definition: 'Das Recht, selbst zu entscheiden', example: 'Mehr Freiheit für die Bauern brachte bessere Ernten.' }
        ],
        historicalFact: 'Die „Zwölf Artikel" der Bauern (1525) waren die erste Menschenrechtserklärung in Europa. Sie forderten unter anderem die Wahl des Pfarrers, niedrigere Abgaben und das Ende der Leibeigenschaft.'
      },
      {
        text: 'Du verteidigst den Vogt. Ordnung und Autorität müssen gewahrt werden.',
        consequence: 'Die Bauern gehen enttäuscht zurück. Einige planen im Geheimen einen Aufstand. Die Stimmung in deiner Herrschaft verschlechtert sich.',
        statChanges: { ansehen: -2, wohlstand: 1 },
        vocabularyLearned: [
          { word: 'die Autorität', definition: 'Die anerkannte Macht einer Person', example: 'Die Autorität des Adligen wurde von den Bauern in Frage gestellt.' },
          { word: 'der Aufstand', definition: 'Ein Protest oder Kampf gegen die Obrigkeit', example: 'Der Aufstand der Bauern wurde blutig niedergeschlagen.' }
        ],
        historicalFact: 'Die Unterdrückung der Bauern führte zu Aufständen in ganz Europa. In Deutschland war der Bauernkrieg 1524/25 der größte Volksaufstand vor der Französischen Revolution.'
      }
    ],
    category: 'recht'
  },
  {
    id: 'adliger-5',
    roleId: 'adliger',
    chapter: 5,
    title: 'Das Erbe des Adligen',
    description: 'Du blickst auf dein Leben zurück. Du hast regiert, Entscheidungen getroffen und die Welt ein Stück verändert. Nun musst du entscheiden, wie du dein Erbe weitergibst und was du der Nachwelt hinterlässt.',
    choices: [
      {
        text: 'Du schreibst ein Gesetzbuch für deine Herrschaft—klare und gerechte Regeln für alle.',
        consequence: 'Dein Gesetzbuch wird in der ganzen Region bekannt. Andere Herren übernehmen deine Ideen. Es ist dein größtes Vermächtnis—Gerechtigkeit, die über deinen Tod hinaus besteht.',
        statChanges: { wissen: 3, ansehen: 2 },
        vocabularyLearned: [
          { word: 'das Gesetzbuch', definition: 'Eine Sammlung von Gesetzen und Regeln', example: 'Das Gesetzbuch des Adligen war fair und klar.' },
          { word: 'die Gerechtigkeit', definition: 'Fairness, das Richtige tun', example: 'Gerechtigkeit war die wichtigste Tugend eines guten Herrschers.' }
        ],
        historicalFact: 'Der „Sachsenspiegel" von Eike von Repgow (um 1220) war das wichtigste Gesetzbuch des Mittelalters. Er wurde in Deutsch statt in Latein geschrieben—eine Sensation!',
        achievementId: 'gesetzgeber'
      },
      {
        text: 'Du gründest ein Hospital für Kranke und Arme.',
        consequence: 'Das Hospital hilft vielen Menschen. Kranke, Alte und Reisende finden hier Schutz und Pflege. Es wird nach dir benannt und besteht noch Jahrhunderte nach deinem Tod.',
        statChanges: { glaube: 2, ansehen: 2, wohlstand: -1 },
        vocabularyLearned: [
          { word: 'das Hospital', definition: 'Ein Ort für die Pflege von Kranken und Armen', example: 'Das Hospital war für alle Menschen offen, reich oder arm.' },
          { word: 'die Stiftung', definition: 'Eine Organisation, die mit Geld Gutes tut', example: 'Die Stiftung des Adligen half den Armen der Stadt.' }
        ],
        historicalFact: 'Die Fuggerei in Augsburg (1521) ist die älteste Sozialsiedlung der Welt. Jakob Fugger gründete sie für arme Bürger. Die Jahresmiete betrug 1 Rheinischen Gulden—und ist es theoretisch noch heute.'
      },
      {
        text: 'Du baust die Handelsstraßen und Brücken in deinem Gebiet aus.',
        consequence: 'Neue Straßen und Brücken machen dein Gebiet zu einem Knotenpunkt des Handels. Kaufleute kommen, Städte wachsen, und der Wohlstand steigt für alle.',
        statChanges: { wohlstand: 3, ansehen: 1, geschick: 1 },
        vocabularyLearned: [
          { word: 'die Handelsstraße', definition: 'Eine wichtige Straße für den Transport von Waren', example: 'Die Handelsstraße verband die großen Städte miteinander.' },
          { word: 'der Knotenpunkt', definition: 'Ein Ort, wo viele Wege zusammentreffen', example: 'Nürnberg war ein Knotenpunkt der Handelswege.' }
        ],
        historicalFact: 'Straßen und Brücken waren im Mittelalter politische Machtmittel. Wer eine Brücke oder einen Pass kontrollierte, konnte Zölle erheben und den Handel beeinflussen.'
      }
    ],
    category: 'gesellschaft'
  }
];
