import { Scenario } from '../types';

export const handwerkerScenarios: Scenario[] = [
  {
    id: 'handwerker-1',
    roleId: 'handwerker',
    chapter: 1,
    title: 'Die Zunftversammlung',
    description: 'Du bist Geselle in der Werkstatt eines Schuhmacher-Meisters in einer großen Stadt. Heute findet eine wichtige Zunftversammlung statt. Die Zunft der Schuhmacher muss entscheiden: Sollen fremde Handwerker aus einer anderen Stadt in eurer Zunft arbeiten dürfen? Die Meinungen sind gespalten.',
    choices: [
      {
        text: 'Du sprichst dich für die Aufnahme der fremden Handwerker aus. Neue Ideen sind gut!',
        consequence: 'Einige Meister sind verärgert, aber die neuen Handwerker bringen tatsächlich neue Techniken mit. Du lernst eine bessere Methode, Leder zu verarbeiten.',
        statChanges: { wissen: 2, ansehen: -1, geschick: 1 },
        vocabularyLearned: [
          { word: 'die Zunft', definition: 'Eine Organisation von Handwerkern des gleichen Berufs', example: 'Die Zunft der Bäcker hatte strenge Regeln.' },
          { word: 'der Geselle', definition: 'Ein ausgebildeter Handwerker, der noch kein Meister ist', example: 'Nach der Lehre wurde man Geselle.' }
        ],
        historicalFact: 'Zünfte kontrollierten streng, wer in einer Stadt ein Handwerk ausüben durfte. Sie regelten Preise, Qualität und die Ausbildung.'
      },
      {
        text: 'Du stimmst gegen die Aufnahme. Die Zunft muss ihre Mitglieder schützen!',
        consequence: 'Die Mehrheit stimmt mit dir. Die fremden Handwerker werden abgewiesen. Die Zunft bleibt stark, aber einige Kunden gehen zu Handwerkern in der Nachbarstadt.',
        statChanges: { ansehen: 2, wohlstand: -1 },
        vocabularyLearned: [
          { word: 'der Meister', definition: 'Der höchste Rang eines Handwerkers', example: 'Nur ein Meister durfte eine eigene Werkstatt haben.' },
          { word: 'die Werkstatt', definition: 'Der Arbeitsplatz eines Handwerkers', example: 'In der Werkstatt des Schmieds war es sehr heiß.' }
        ],
        historicalFact: 'Zünfte hatten oft ein Monopol in ihrer Stadt. Fremde Handwerker wurden selten zugelassen, was manchmal zu wirtschaftlichen Problemen führte.'
      },
      {
        text: 'Du schlägst vor, die fremden Handwerker als Gäste für ein Jahr aufzunehmen—zur Probe.',
        consequence: 'Dein Kompromiss wird angenommen! Die Meister sind beeindruckt von deiner klugen Lösung. Du gewinnst Ansehen in der Zunft.',
        statChanges: { ansehen: 2, wissen: 1 },
        vocabularyLearned: [
          { word: 'der Kompromiss', definition: 'Eine Lösung, bei der beide Seiten etwas bekommen', example: 'Der Kompromiss war für alle akzeptabel.' },
          { word: 'die Versammlung', definition: 'Ein Treffen einer Gruppe, um wichtige Dinge zu besprechen', example: 'Die Zunftversammlung fand jeden Monat statt.' }
        ],
        historicalFact: 'Die Wanderschaft der Gesellen (Wanderjahre) war Pflicht. Gesellen mussten in verschiedenen Städten arbeiten, bevor sie Meister werden konnten.',
        achievementId: 'diplomat'
      }
    ],
    category: 'handwerk'
  },
  {
    id: 'handwerker-2',
    roleId: 'handwerker',
    chapter: 2,
    title: 'Das Meisterstück',
    description: 'Die Zeit ist gekommen: Du willst Meister werden! Dafür musst du ein Meisterstück anfertigen—ein perfektes Paar Schuhe, das die strengen Prüfer der Zunft überzeugen muss. Du hast drei Wochen Zeit. Wie gehst du vor?',
    choices: [
      {
        text: 'Du arbeitest Tag und Nacht und verwendest das beste Leder, das du finden kannst.',
        consequence: 'Deine Schuhe sind ein Kunstwerk! Die Prüfer sind beeindruckt. Du bestehst die Prüfung und wirst Meister. Aber du bist völlig erschöpft.',
        statChanges: { geschick: 3, ansehen: 2, wohlstand: -1 },
        vocabularyLearned: [
          { word: 'das Meisterstück', definition: 'Ein perfektes Werkstück, das ein Geselle machen muss, um Meister zu werden', example: 'Das Meisterstück musste die höchste Qualität haben.' },
          { word: 'das Leder', definition: 'Material aus Tierhaut, z.B. für Schuhe', example: 'Gutes Leder war teuer und schwer zu bekommen.' }
        ],
        historicalFact: 'Das Meisterstück war die wichtigste Prüfung für einen Handwerker. Nur wer es bestand, durfte eine eigene Werkstatt eröffnen und Lehrlinge ausbilden.',
        achievementId: 'meister'
      },
      {
        text: 'Du bittest einen erfahrenen Meister um Rat und arbeitest planvoll.',
        consequence: 'Der alte Meister gibt dir wertvolle Tipps. Du lernst Tricks, die in keinem Buch stehen. Dein Meisterstück ist solide und elegant zugleich.',
        statChanges: { wissen: 2, geschick: 2, ansehen: 1 },
        vocabularyLearned: [
          { word: 'der Rat', definition: 'Ein Vorschlag oder eine Empfehlung', example: 'Der Rat des alten Meisters war sehr hilfreich.' },
          { word: 'planvoll', definition: 'Gut durchdacht und organisiert', example: 'Er arbeitete planvoll an seinem Meisterstück.' }
        ],
        historicalFact: 'Das Wissen wurde im Mittelalter mündlich weitergegeben. Bücher waren selten und teuer. Erfahrung und Praxis waren wichtiger als Theorie.'
      },
      {
        text: 'Du experimentierst mit einem neuen Design, das noch niemand gesehen hat.',
        consequence: 'Dein innovatives Design überrascht die Prüfer. Einige finden es toll, andere zu ungewöhnlich. Du bestehst knapp—aber dein Name wird in der Stadt bekannt.',
        statChanges: { ansehen: 1, geschick: 1, wissen: 2 },
        vocabularyLearned: [
          { word: 'das Design', definition: 'Die Form und Gestaltung eines Gegenstandes', example: 'Das neue Design der Schuhe war sehr modern.' },
          { word: 'experimentieren', definition: 'Etwas Neues ausprobieren', example: 'Der Handwerker experimentierte mit neuen Materialien.' }
        ],
        historicalFact: 'Innovation war in den Zünften nicht immer willkommen. Neue Methoden mussten oft von der Zunft genehmigt werden.'
      }
    ],
    category: 'handwerk'
  },
  {
    id: 'handwerker-3',
    roleId: 'handwerker',
    chapter: 3,
    title: 'Feuer in der Stadt',
    description: 'Mitten in der Nacht bricht ein Feuer in der Nachbarstraße aus! Die Flammen breiten sich schnell über die Holzhäuser aus. Deine Werkstatt ist in Gefahr. Die Stadtbewohner bilden Löschketten mit Eimern Wasser aus dem Brunnen. Was tust du?',
    choices: [
      {
        text: 'Du rettest zuerst deine Werkzeuge und Materialien aus der Werkstatt.',
        consequence: 'Du schaffst es, das Wichtigste zu retten. Die Werkstatt ist beschädigt, aber deine Werkzeuge sind sicher. Du kannst schon bald wieder arbeiten.',
        statChanges: { wohlstand: 1, geschick: 1 },
        vocabularyLearned: [
          { word: 'das Feuer', definition: 'Brand, Flammen', example: 'Das Feuer zerstörte viele Häuser in der Stadt.' },
          { word: 'die Werkzeuge', definition: 'Instrumente zum Arbeiten (Hammer, Zange usw.)', example: 'Die Werkzeuge eines Schmieds waren sehr wertvoll.' }
        ],
        historicalFact: 'Feuer war die größte Gefahr für mittelalterliche Städte. Die meisten Häuser waren aus Holz, und ein Brand konnte eine ganze Stadt zerstören.'
      },
      {
        text: 'Du hilfst sofort bei der Löschkette und rettest Menschen.',
        consequence: 'Deine Werkstatt brennt teilweise ab, aber du rettest mehrere Nachbarn. Die ganze Stadt kennt jetzt deinen Namen. Der Stadtrat beschließt, dir beim Wiederaufbau zu helfen.',
        statChanges: { ansehen: 3, wohlstand: -2, glaube: 1 },
        vocabularyLearned: [
          { word: 'die Löschkette', definition: 'Eine Reihe von Menschen, die Wassereimer weitergeben', example: 'Die Löschkette reichte vom Brunnen bis zum Feuer.' },
          { word: 'der Stadtrat', definition: 'Die Regierung einer Stadt im Mittelalter', example: 'Der Stadtrat entschied über wichtige Fragen der Stadt.' }
        ],
        historicalFact: 'Mittelalterliche Städte hatten oft Feuerordnungen. Jeder Bürger war verpflichtet, bei Bränden zu helfen. Brandstiftung wurde mit dem Tod bestraft.',
        achievementId: 'held'
      },
      {
        text: 'Du organisierst die Löschaktion und rufst die Nachtwächter.',
        consequence: 'Deine schnelle Reaktion hilft, das Feuer einzudämmen. Der Schaden ist begrenzt. Der Bürgermeister bedankt sich persönlich bei dir.',
        statChanges: { ansehen: 2, wissen: 1, geschick: 1 },
        vocabularyLearned: [
          { word: 'der Nachtwächter', definition: 'Ein Mann, der nachts durch die Stadt geht und aufpasst', example: 'Der Nachtwächter rief die Stunden aus und warnte vor Feuer.' },
          { word: 'der Bürgermeister', definition: 'Der Chef der Stadtverwaltung', example: 'Der Bürgermeister wurde vom Stadtrat gewählt.' }
        ],
        historicalFact: 'Nachtwächter waren wichtig für die Sicherheit der Städte. Sie riefen die Uhrzeit, warnten vor Feuer und Feinden und kontrollierten die Stadttore.'
      }
    ],
    category: 'alltag'
  },
  {
    id: 'handwerker-4',
    roleId: 'handwerker',
    chapter: 4,
    title: 'Der Auftrag des Bischofs',
    description: 'Ein Bote kommt in deine Werkstatt: Der Bischof der Stadt braucht neue Schuhe für eine wichtige Zeremonie! Es ist eine große Ehre, aber auch viel Druck. Der Bischof ist mächtig und anspruchsvoll. Wie gehst du mit diesem wichtigen Auftrag um?',
    choices: [
      {
        text: 'Du verwendest das teuerste Material und arbeitest besonders sorgfältig.',
        consequence: 'Die Schuhe sind prächtig! Der Bischof ist sehr zufrieden und empfiehlt dich weiter. Du bekommst Aufträge von anderen wichtigen Personen.',
        statChanges: { wohlstand: 2, ansehen: 2, geschick: 1 },
        vocabularyLearned: [
          { word: 'der Bischof', definition: 'Ein hoher Geistlicher der Kirche', example: 'Der Bischof lebte im Bischofspalast neben dem Dom.' },
          { word: 'die Zeremonie', definition: 'Eine feierliche Handlung, oft in der Kirche', example: 'Die Zeremonie im Dom war sehr eindrucksvoll.' }
        ],
        historicalFact: 'Bischöfe waren im Mittelalter nicht nur religiöse Führer, sondern auch politische Machthaber. Viele Bischöfe regierten als Fürsten über große Gebiete.'
      },
      {
        text: 'Du baust in den Schuh ein geheimes Fach für Botschaften ein—ein besonderes Extra.',
        consequence: 'Der Bischof ist fasziniert von diesem cleveren Detail. Er nutzt das Fach tatsächlich für geheime Nachrichten. Du wirst sein bevorzugter Handwerker.',
        statChanges: { geschick: 2, wissen: 1, ansehen: 1 },
        vocabularyLearned: [
          { word: 'die Botschaft', definition: 'Eine Nachricht oder Mitteilung', example: 'Der Bote brachte eine wichtige Botschaft vom König.' },
          { word: 'bevorzugt', definition: 'Besonders geschätzt, als Erster gewählt', example: 'Er war der bevorzugte Handwerker des Bischofs.' }
        ],
        historicalFact: 'Geheime Kommunikation war im Mittelalter wichtig. Briefe wurden mit Siegeln verschlossen und manchmal in versteckten Fächern transportiert.',
        achievementId: 'erfinderisch'
      },
      {
        text: 'Du bittest den Bischof um eine Audienz, um seine Wünsche genau zu verstehen.',
        consequence: 'Der Bischof ist beeindruckt von deiner Professionalität. Im Gespräch lernst du viel über das kirchliche Leben. Die Schuhe passen perfekt.',
        statChanges: { wissen: 2, glaube: 1, ansehen: 1 },
        vocabularyLearned: [
          { word: 'die Audienz', definition: 'Ein offizielles Treffen mit einer wichtigen Person', example: 'Der Handwerker bat um eine Audienz beim Bischof.' },
          { word: 'der Dom', definition: 'Eine große, wichtige Kirche', example: 'Der Kölner Dom ist der berühmteste Dom Deutschlands.' }
        ],
        historicalFact: 'Große Kathedralen (Dome) waren Jahrhundertprojekte. Der Kölner Dom wurde 1248 begonnen und erst 1880 fertiggestellt!'
      }
    ],
    category: 'religion'
  },
  {
    id: 'handwerker-5',
    roleId: 'handwerker',
    chapter: 5,
    title: 'Die eigene Werkstatt',
    description: 'Du bist jetzt Meister und kannst endlich deine eigene Werkstatt eröffnen! Aber wo? Die Zunft hat bestimmte Regeln, welche Straße für dein Handwerk bestimmt ist. Du musst auch Lehrlinge finden und Material einkaufen. Eine große und aufregende Zeit beginnt!',
    choices: [
      {
        text: 'Du eröffnest eine kleine, aber feine Werkstatt in der Schuhmacherstraße.',
        consequence: 'Deine Werkstatt wird schnell bekannt für ihre Qualität. Du nimmst zwei Lehrlinge auf und lehrst sie dein Handwerk. Das Geschäft läuft gut.',
        statChanges: { wohlstand: 2, ansehen: 2, geschick: 1 },
        vocabularyLearned: [
          { word: 'eröffnen', definition: 'Zum ersten Mal öffnen, starten', example: 'Der neue Meister eröffnete seine eigene Werkstatt.' },
          { word: 'die Qualität', definition: 'Wie gut etwas ist', example: 'Die Qualität der Schuhe war ausgezeichnet.' }
        ],
        historicalFact: 'Im Mittelalter waren Handwerker des gleichen Berufs oft in derselben Straße. Daher gibt es heute noch Straßennamen wie Bäckergasse, Schmiedstraße oder Gerbergasse.'
      },
      {
        text: 'Du spezialisierst dich auf Luxusschuhe für den Adel.',
        consequence: 'Reiche Kunden zahlen gut, aber sie sind auch sehr anspruchsvoll. Du wirst zum gefragten Spezialisten, aber die Arbeit ist stressig.',
        statChanges: { wohlstand: 3, geschick: 2, ansehen: 1 },
        vocabularyLearned: [
          { word: 'der Luxus', definition: 'Teure, besonders schöne und nicht notwendige Dinge', example: 'Luxuswaren waren nur für den Adel erschwinglich.' },
          { word: 'sich spezialisieren', definition: 'Sich auf ein bestimmtes Gebiet konzentrieren', example: 'Der Handwerker spezialisierte sich auf Lederwaren.' }
        ],
        historicalFact: 'Kleidungsvorschriften (Kleiderordnungen) bestimmten, wer welche Kleidung tragen durfte. Bestimmte Stoffe und Farben waren dem Adel vorbehalten.'
      },
      {
        text: 'Du verbindest die Werkstatt mit einem kleinen Laden und verkaufst auch fertige Schuhe.',
        consequence: 'Dein Laden wird zu einem beliebten Treffpunkt. Du hast sowohl Handwerk als auch Handel. Die Zunft beobachtet dich aber genau—zu viel Handel ist für Handwerker nicht erlaubt.',
        statChanges: { wohlstand: 2, ansehen: 1, wissen: 1 },
        vocabularyLearned: [
          { word: 'der Laden', definition: 'Ein Geschäft, wo man Dinge kaufen kann', example: 'Im Laden des Schusters gab es Schuhe für alle.' },
          { word: 'der Treffpunkt', definition: 'Ein Ort, wo Menschen sich begegnen', example: 'Der Marktplatz war der wichtigste Treffpunkt der Stadt.' }
        ],
        historicalFact: 'Handwerker verkauften oft direkt aus ihrer Werkstatt. Die Trennung zwischen Handwerk und Handel war im Mittelalter streng geregelt.',
        achievementId: 'unternehmer'
      }
    ],
    category: 'handwerk'
  }
];
