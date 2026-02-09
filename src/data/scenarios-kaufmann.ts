import { Scenario } from '../types';

export const kaufmannScenarios: Scenario[] = [
  {
    id: 'kaufmann-1',
    roleId: 'kaufmann',
    chapter: 1,
    title: 'Die erste Handelsreise',
    description: 'Du bist ein junger Kaufmann und planst deine erste große Handelsreise. Du hast Geld gespart und willst Waren kaufen, um sie in einer anderen Stadt teurer zu verkaufen. Aber welche Route wählst du? Die Straße durch den Wald ist kürzer, aber gefährlich. Die Straße über die Berge ist sicherer, aber dauert länger.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Kodex_Manesse_Reinmar_der_Alte.jpg/300px-Kodex_Manesse_Reinmar_der_Alte.jpg',
    choices: [
      {
        text: 'Du nimmst die kurze Straße durch den Wald und sparst Zeit.',
        consequence: 'Die Reise durch den Wald ist aufregend. Du triffst andere Reisende und schließt dich einer Karawane an. Gemeinsam seid ihr sicher. Du kommst schnell an und machst gute Geschäfte.',
        statChanges: { wohlstand: 2, geschick: 1 },
        vocabularyLearned: [
          { word: 'die Handelsreise', definition: 'Eine Reise, um Waren zu kaufen oder zu verkaufen', example: 'Die Handelsreise führte den Kaufmann durch mehrere Städte.' },
          { word: 'die Karawane', definition: 'Eine Gruppe von Reisenden, die zusammen reisen', example: 'Die Karawane bot Schutz vor Räubern.' }
        ],
        historicalFact: 'Reisen im Mittelalter war gefährlich. Räuber, schlechte Straßen und Krankheiten machten Handelsreisen riskant. Kaufleute reisten oft in Gruppen.'
      },
      {
        text: 'Du wählst die sichere Route über die Berge.',
        consequence: 'Die Reise dauert länger, aber du kommst sicher an. Unterwegs besuchst du eine Bergstadt und kaufst dort günstig seltene Mineralien.',
        statChanges: { wissen: 1, wohlstand: 1, geschick: 1 },
        vocabularyLearned: [
          { word: 'die Route', definition: 'Der Weg, den man nimmt', example: 'Die Route über die Berge war länger, aber sicherer.' },
          { word: 'das Mineral', definition: 'Ein natürliches Material aus der Erde (z.B. Salz, Erz)', example: 'Salz war das wichtigste Mineral im Mittelalter.' }
        ],
        historicalFact: 'Salz war im Mittelalter so wertvoll, dass man es „weißes Gold" nannte. Salzstraßen und Salzstädte (wie Salzburg oder Halle) waren sehr reich.'
      },
      {
        text: 'Du wartest auf eine Handelsgesellschaft und reist mit erfahrenen Kaufleuten.',
        consequence: 'Die erfahrenen Kaufleute zeigen dir die besten Handelswege und geben wertvolle Tipps. Du lernst viel über den Fernhandel und knüpfst wichtige Kontakte.',
        statChanges: { wissen: 2, ansehen: 1 },
        vocabularyLearned: [
          { word: 'die Handelsgesellschaft', definition: 'Eine Gruppe von Kaufleuten, die zusammen Geschäfte machen', example: 'Die Hanse war die berühmteste Handelsgesellschaft.' },
          { word: 'der Fernhandel', definition: 'Handel über weite Strecken', example: 'Im Fernhandel wurden Gewürze aus dem Orient gebracht.' }
        ],
        historicalFact: 'Die Hanse war ein mächtiger Bund von Kaufleuten und Städten in Norddeutschland. Sie kontrollierte den Handel in der Nord- und Ostsee.',
        achievementId: 'hanseat'
      }
    ],
    category: 'handel'
  },
  {
    id: 'kaufmann-2',
    roleId: 'kaufmann',
    chapter: 2,
    title: 'Auf der Messe',
    description: 'Du bist auf der großen Messe in Frankfurt angekommen! Hunderte Kaufleute aus ganz Europa sind hier. Gewürze aus dem Orient, Tuche aus Flandern, Wein aus dem Rheinland—alles wird hier gehandelt. Du hast Geld und willst investieren. Was kaufst du?',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/AntoninusVia_MesseFrankfurt.jpg/350px-AntoninusVia_MesseFrankfurt.jpg',
    choices: [
      {
        text: 'Du kaufst teure Gewürze—Pfeffer, Zimt und Safran.',
        consequence: 'Gewürze sind teuer, aber der Gewinn ist enorm! Du verkaufst sie in kleineren Städten mit großem Profit. Allerdings ist das Risiko hoch—wenn die Gewürze feucht werden, sind sie wertlos.',
        statChanges: { wohlstand: 3, geschick: 1 },
        vocabularyLearned: [
          { word: 'die Messe', definition: 'Ein großer Markt, der regelmäßig stattfindet', example: 'Die Frankfurter Messe war eine der wichtigsten in Europa.' },
          { word: 'das Gewürz', definition: 'Eine Pflanze, die Essen Geschmack gibt (Pfeffer, Zimt usw.)', example: 'Gewürze aus dem Orient waren sehr teuer.' }
        ],
        historicalFact: 'Pfeffer war im Mittelalter so wertvoll wie Gold. Reiche Menschen wurden „Pfeffersäcke" genannt—ein Ausdruck, den es heute noch gibt.'
      },
      {
        text: 'Du investierst in feine Stoffe und Tuche aus Flandern.',
        consequence: 'Die flandrischen Tuche sind von höchster Qualität. Du findest schnell Käufer—besonders Adlige und reiche Bürger wollen die feinen Stoffe. Ein solides Geschäft!',
        statChanges: { wohlstand: 2, ansehen: 1, wissen: 1 },
        vocabularyLearned: [
          { word: 'das Tuch', definition: 'Ein Stück Stoff oder Gewebe', example: 'Die Tuche aus Flandern waren in ganz Europa beliebt.' },
          { word: 'investieren', definition: 'Geld ausgeben, um später mehr Geld zu verdienen', example: 'Der Kaufmann investierte in wertvolle Waren.' }
        ],
        historicalFact: 'Flandern (heute Belgien) war das Zentrum der Tuchproduktion. Flämische Stoffe wurden in ganz Europa gehandelt und waren ein Zeichen von Wohlstand.'
      },
      {
        text: 'Du kaufst verschiedene Waren—ein wenig von allem, um das Risiko zu verteilen.',
        consequence: 'Eine kluge Strategie! Du hast Gewürze, Stoffe und Metallwaren. Wenn eine Ware schlecht verkauft wird, gleichen die anderen es aus. Ein erfahrener Kaufmann nickt anerkennend.',
        statChanges: { wissen: 2, wohlstand: 1, geschick: 1 },
        vocabularyLearned: [
          { word: 'das Risiko', definition: 'Die Gefahr, etwas zu verlieren', example: 'Der Kaufmann verteilte sein Risiko auf verschiedene Waren.' },
          { word: 'die Strategie', definition: 'Ein Plan, um ein Ziel zu erreichen', example: 'Seine Handelsstrategie war sehr erfolgreich.' }
        ],
        historicalFact: 'Die Frankfurter Messe begann im Mittelalter und existiert bis heute. Sie war ein Ort des internationalen Handels und des kulturellen Austauschs.',
        achievementId: 'klug'
      }
    ],
    category: 'handel'
  },
  {
    id: 'kaufmann-3',
    roleId: 'kaufmann',
    chapter: 3,
    title: 'Der Geldwechsler',
    description: 'Du hast Waren in verschiedenen Städten verkauft und hast jetzt Münzen aus vielen Regionen: Gulden, Taler, Groschen, Pfennige. Jede Stadt und jedes Fürstentum hat andere Münzen! Ein Geldwechsler bietet dir an, alles in eine Währung umzutauschen—gegen eine Gebühr natürlich.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Quentin_Matsys_-_The_Moneylender_and_his_Wife_-_WGA14281.jpg/350px-Quentin_Matsys_-_The_Moneylender_and_his_Wife_-_WGA14281.jpg',
    choices: [
      {
        text: 'Du nutzt den Geldwechsler und tauschst alles in Gulden um.',
        consequence: 'Die Gebühr ist hoch, aber du hast jetzt einheitliches Geld und kannst einfacher handeln. Der Geldwechsler erklärt dir auch den Wert verschiedener Münzen.',
        statChanges: { wissen: 2, wohlstand: -1 },
        vocabularyLearned: [
          { word: 'der Geldwechsler', definition: 'Eine Person, die verschiedene Münzen umtauscht', example: 'Der Geldwechsler saß auf dem Marktplatz an seinem Tisch.' },
          { word: 'die Währung', definition: 'Das Geldsystem eines Landes', example: 'Im Heiligen Römischen Reich gab es viele verschiedene Währungen.' }
        ],
        historicalFact: 'Im HRR gab es hunderte verschiedene Münzen. Jeder Fürst, jede Stadt konnte eigene Münzen prägen. Geldwechsler waren unverzichtbar für den Handel.'
      },
      {
        text: 'Du lernst selbst, die verschiedenen Münzen zu bewerten.',
        consequence: 'Es dauert Zeit, aber du verstehst jetzt das Münzsystem. Du kannst selbst einschätzen, welche Münzen wertvoll sind und welche nicht. Ein wichtiges Wissen für einen Kaufmann!',
        statChanges: { wissen: 3, geschick: 1 },
        vocabularyLearned: [
          { word: 'die Münze', definition: 'Ein rundes Stück Metall als Geld', example: 'Die Münze trug das Bild des Kaisers.' },
          { word: 'bewerten', definition: 'Den Wert von etwas einschätzen', example: 'Der Kaufmann konnte die Münzen genau bewerten.' }
        ],
        historicalFact: 'Münzfälschung war ein großes Problem im Mittelalter. Manche Münzherren vermischten Gold mit billigeren Metallen. Man nannte das „Kippen und Wippen".',
        achievementId: 'muenzkenner'
      },
      {
        text: 'Du schließt einen Vertrag mit einem Bankier in der Stadt ab.',
        consequence: 'Der Bankier gibt dir einen Wechselbrief. Damit kannst du in jeder großen Stadt Geld abheben, ohne schwere Münzen zu transportieren. Ein modernes System!',
        statChanges: { wohlstand: 1, wissen: 2, ansehen: 1 },
        vocabularyLearned: [
          { word: 'der Wechselbrief', definition: 'Ein Dokument, mit dem man Geld in einer anderen Stadt bekommen konnte', example: 'Der Wechselbrief war sicherer als Bargeld.' },
          { word: 'der Bankier', definition: 'Eine Person, die beruflich mit Geld arbeitet', example: 'Die Bankiers aus Florenz waren die berühmtesten in Europa.' }
        ],
        historicalFact: 'Wechselbriefe waren eine wichtige Erfindung. Italienische Bankiers (wie die Medici) entwickelten das Bankwesen, das wir heute noch nutzen.'
      }
    ],
    category: 'handel'
  },
  {
    id: 'kaufmann-4',
    roleId: 'kaufmann',
    chapter: 4,
    title: 'Räuber auf der Straße',
    description: 'Auf dem Rückweg von einer Handelsreise wirst du von Räubern überfallen! Eine Gruppe bewaffneter Männer blockiert den Weg. Dein Pferd ist mit Waren beladen. Die Räuber fordern alles. Was tust du?',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Battle_on_a_Bridge_%28Landscape_with_the_Flight_into_Egypt%29_%E2%80%93_Joos_de_Momper.jpg/400px-Battle_on_a_Bridge_%28Landscape_with_the_Flight_into_Egypt%29_%E2%80%93_Joos_de_Momper.jpg',
    choices: [
      {
        text: 'Du verhandelst mit den Räubern und bietest ihnen einen Teil deiner Waren an.',
        consequence: 'Die Räuber nehmen den Deal an. Du verlierst etwas, aber behältst das Meiste. Ein Räuber flüstert dir zu, welche Wege sicher sind. Vielleicht war er selbst einmal Kaufmann.',
        statChanges: { geschick: 2, wohlstand: -1 },
        vocabularyLearned: [
          { word: 'der Räuber', definition: 'Eine Person, die anderen Dinge stiehlt, oft mit Gewalt', example: 'Die Räuber lauerten im Wald auf Reisende.' },
          { word: 'der Überfall', definition: 'Ein plötzlicher Angriff, um zu stehlen', example: 'Der Überfall auf die Karawane war gut geplant.' }
        ],
        historicalFact: 'Raubrittertum war im Mittelalter ein echtes Problem. Manche verarmte Adlige überfielen Kaufleute auf den Straßen. Geleitschutz war daher oft nötig.'
      },
      {
        text: 'Du zeigst deinen Geleitbrief des Fürsten und drohst mit Konsequenzen.',
        consequence: 'Die Räuber zögern. Ein Geleitbrief bedeutet, dass der Fürst dich beschützt. Sie lassen dich ziehen, murren aber. Du bist froh, den Geleitbrief gekauft zu haben!',
        statChanges: { ansehen: 1, wissen: 1, wohlstand: 1 },
        vocabularyLearned: [
          { word: 'der Geleitbrief', definition: 'Ein Dokument, das Schutz auf der Reise garantiert', example: 'Mit dem Geleitbrief des Kaisers war man sicherer auf den Straßen.' },
          { word: 'der Fürst', definition: 'Ein mächtiger Adliger, der über ein Gebiet herrscht', example: 'Der Fürst regierte über ein großes Gebiet im Reich.' }
        ],
        historicalFact: 'Geleitbriefe und Geleitrecht waren wichtig für den Handel. Fürsten gaben Kaufleuten Schutz—gegen Geld natürlich. Das „Freie Geleit" war ein wichtiges Recht.',
        achievementId: 'geschuetzt'
      },
      {
        text: 'Du reitest schnell davon und hoffst, dass dein Pferd schneller ist.',
        consequence: 'Eine wilde Flucht! Du verlierst einige Waren, die vom Pferd fallen, aber du kommst in Sicherheit. Dein Herz klopft schnell. In der nächsten Stadt meldest du den Überfall.',
        statChanges: { geschick: 1, wohlstand: -2, ansehen: 1 },
        vocabularyLearned: [
          { word: 'die Flucht', definition: 'Schnell weglaufen vor einer Gefahr', example: 'Die Flucht vor den Räubern war gefährlich.' },
          { word: 'melden', definition: 'Offiziell berichten oder mitteilen', example: 'Er meldete den Überfall bei den Stadtwachen.' }
        ],
        historicalFact: 'Landfriedensgesetze sollten die Sicherheit auf den Straßen verbessern. Kaiser Friedrich I. erließ 1152 einen wichtigen Landfrieden für das ganze Reich.'
      }
    ],
    category: 'recht'
  },
  {
    id: 'kaufmann-5',
    roleId: 'kaufmann',
    chapter: 5,
    title: 'Das Handelskontor',
    description: 'Dein Geschäft wächst! Du willst ein Handelskontor eröffnen—ein festes Büro in einer großen Handelsstadt. Nürnberg, Augsburg oder Lübeck? Jede Stadt hat Vor- und Nachteile. Wo baust du dein Geschäft auf?',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Nuremberg_chronicles_-_Nuremberga.png/400px-Nuremberg_chronicles_-_Nuremberga.png',
    choices: [
      {
        text: 'Nürnberg—die Kreuzung aller Handelswege!',
        consequence: 'Nürnberg liegt im Zentrum des Reiches. Handelswege aus allen Richtungen treffen hier zusammen. Dein Kontor wird schnell zu einem wichtigen Umschlagplatz für Waren.',
        statChanges: { wohlstand: 3, ansehen: 1 },
        vocabularyLearned: [
          { word: 'das Handelskontor', definition: 'Ein Büro oder Niederlassung eines Kaufmanns', example: 'Das Handelskontor in Nürnberg war sehr erfolgreich.' },
          { word: 'der Umschlagplatz', definition: 'Ein Ort, wo Waren gelagert und weitergeschickt werden', example: 'Frankfurt war ein wichtiger Umschlagplatz für Waren aus ganz Europa.' }
        ],
        historicalFact: 'Nürnberg war eine der reichsten Städte des HRR. Die Nürnberger Kaufleute handelten mit der ganzen bekannten Welt.'
      },
      {
        text: 'Augsburg—die Stadt der Fugger und Welser!',
        consequence: 'In Augsburg lernst du von den größten Kaufmannsfamilien Europas. Die Fugger finanzieren sogar den Kaiser! Du machst wichtige Kontakte und lernst über das Bankwesen.',
        statChanges: { wissen: 2, wohlstand: 1, ansehen: 2 },
        vocabularyLearned: [
          { word: 'die Kaufmannsfamilie', definition: 'Eine Familie, deren Geschäft der Handel ist', example: 'Die Fugger waren die reichste Kaufmannsfamilie Deutschlands.' },
          { word: 'finanzieren', definition: 'Für etwas bezahlen, Geld geben', example: 'Die Fugger finanzierten Könige und Päpste.' }
        ],
        historicalFact: 'Die Fugger aus Augsburg waren die reichste Familie Europas. Jakob Fugger „der Reiche" finanzierte die Wahl Kaiser Karls V. und gründete die Fuggerei—die älteste Sozialsiedlung der Welt.',
        achievementId: 'fugger'
      },
      {
        text: 'Lübeck—das Tor zum Norden und zur Hanse!',
        consequence: 'In Lübeck bist du Teil der mächtigen Hanse. Du handelst mit Fisch, Pelzen und Bernstein aus dem Norden. Die Ostsee wird dein Handelsgebiet.',
        statChanges: { wohlstand: 2, wissen: 1, geschick: 1 },
        vocabularyLearned: [
          { word: 'die Hanse', definition: 'Ein Bund von Kaufleuten und Städten für den Handel', example: 'Lübeck war die „Königin der Hanse".' },
          { word: 'der Bernstein', definition: 'Ein gelbes, durchsichtiges fossiles Harz', example: 'Bernstein von der Ostsee war eine wertvolle Handelsware.' }
        ],
        historicalFact: 'Lübeck war die „Königin der Hanse" und eine der reichsten Städte Nordeuropas. Die Hansestädte kontrollierten den Handel von London bis Nowgorod.'
      }
    ],
    category: 'handel'
  }
];
