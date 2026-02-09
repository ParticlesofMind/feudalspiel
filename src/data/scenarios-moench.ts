import { Scenario } from '../types';

export const moenchScenarios: Scenario[] = [
  {
    id: 'moench-1',
    roleId: 'moench',
    chapter: 1,
    title: 'Das Leben im Kloster',
    description: 'Du bist neu im Kloster und lernst die strenge Tagesordnung kennen. Um vier Uhr morgens beginnt der Tag mit dem ersten Gebet. Dann folgen Arbeit, Studium und weitere Gebete. Der Abt erklärt dir: Jeder Mönch muss eine Aufgabe wählen. Welche Aufgabe interessiert dich?',
    choices: [
      {
        text: 'Du arbeitest im Skriptorium und kopierst alte Bücher.',
        consequence: 'Du lernst die Kunst des Schreibens und Zeichnens. Jedes Buch ist ein Kunstwerk. Du kopierst Texte von Aristoteles und lernst dabei Latein und Philosophie.',
        statChanges: { wissen: 3, geschick: 1 },
        vocabularyLearned: [
          { word: 'das Skriptorium', definition: 'Der Raum im Kloster, wo Bücher geschrieben und kopiert werden', example: 'Im Skriptorium arbeiteten die Mönche schweigend.' },
          { word: 'das Manuskript', definition: 'Ein handgeschriebenes Buch oder Dokument', example: 'Das Manuskript war mit Gold und Farben verziert.' }
        ],
        historicalFact: 'Klöster waren die Bewahrer des Wissens im Mittelalter. Ohne die Schreibarbeit der Mönche wären viele antike Texte heute verloren.',
        achievementId: 'schreiber'
      },
      {
        text: 'Du pflegst den Kräutergarten und lernst Heilkunde.',
        consequence: 'Du lernst, welche Pflanzen heilen und welche giftig sind. Bald kommen Kranke aus dem ganzen Umland zu dir. Du wirst zum geschätzten Heiler.',
        statChanges: { wissen: 2, glaube: 1, geschick: 1 },
        vocabularyLearned: [
          { word: 'der Kräutergarten', definition: 'Ein Garten mit Heil- und Küchenkräutern', example: 'Im Kräutergarten des Klosters wuchsen Salbei, Minze und Kamille.' },
          { word: 'die Heilkunde', definition: 'Das Wissen über Medizin und Gesundheit', example: 'Die Heilkunde der Mönche war berühmt.' }
        ],
        historicalFact: 'Hildegard von Bingen (1098-1179) war eine berühmte Nonne, die viel über Heilpflanzen und Medizin schrieb. Ihre Werke werden heute noch gelesen.'
      },
      {
        text: 'Du hilfst in der Küche und im Gästehaus des Klosters.',
        consequence: 'Du lernst zu kochen und Gäste zu bewirten. Reisende, Pilger und sogar Adlige kommen ins Kloster. Du hörst Geschichten aus der ganzen Welt.',
        statChanges: { wissen: 1, ansehen: 1, geschick: 2 },
        vocabularyLearned: [
          { word: 'das Gästehaus', definition: 'Ein Ort, wo Reisende übernachten können', example: 'Das Gästehaus des Klosters stand allen Reisenden offen.' },
          { word: 'der Pilger', definition: 'Ein Mensch, der eine religiöse Reise macht', example: 'Die Pilger wanderten nach Santiago de Compostela.' }
        ],
        historicalFact: 'Die Regel des heiligen Benedikt (ora et labora—bete und arbeite) bestimmte das Klosterleben. Gastfreundschaft gegenüber Reisenden war eine wichtige Pflicht.'
      }
    ],
    category: 'religion'
  },
  {
    id: 'moench-2',
    roleId: 'moench',
    chapter: 2,
    title: 'Das verbotene Buch',
    description: 'Beim Aufräumen der Bibliothek findest du ein altes Buch, das in einer fremden Sprache geschrieben ist. Es enthält Zeichnungen von Sternen, Planeten und mathematischen Formeln. Es scheint ein arabisches Buch über Astronomie zu sein. Solche Bücher sind im Kloster nicht gern gesehen.',
    choices: [
      {
        text: 'Du liest das Buch heimlich und versuchst, die Sprache zu verstehen.',
        consequence: 'Du lernst arabische Zahlen und astronomische Berechnungen. Die Welt wird größer in deinem Verständnis. Du erkennst, dass anderes Wissen wertvoll ist.',
        statChanges: { wissen: 4 },
        vocabularyLearned: [
          { word: 'die Astronomie', definition: 'Die Wissenschaft von den Sternen und Planeten', example: 'Die Astronomie war im arabischen Raum sehr fortgeschritten.' },
          { word: 'die Bibliothek', definition: 'Ein Raum mit vielen Büchern', example: 'Die Bibliothek des Klosters hatte über hundert Bücher.' }
        ],
        historicalFact: 'Unsere „arabischen Zahlen" (1, 2, 3...) kamen tatsächlich über die arabische Welt nach Europa. Die Römer benutzten noch I, V, X, L, C, D, M.',
        achievementId: 'gelehrter'
      },
      {
        text: 'Du zeigst das Buch dem Abt und fragst um Erlaubnis, es zu studieren.',
        consequence: 'Der Abt ist überrascht, aber euren neugierigen Geist. Er erlaubt dir, das Buch zu studieren, wenn du die wichtigsten Teile ins Lateinische übersetzt.',
        statChanges: { wissen: 3, ansehen: 1 },
        vocabularyLearned: [
          { word: 'der Abt', definition: 'Der Leiter eines Klosters', example: 'Der Abt entschied über alle wichtigen Fragen im Kloster.' },
          { word: 'übersetzen', definition: 'Einen Text in eine andere Sprache umschreiben', example: 'Die Mönche übersetzten griechische Texte ins Lateinische.' }
        ],
        historicalFact: 'Toledo in Spanien war ein wichtiges Zentrum der Übersetzung. Arabische, jüdische und christliche Gelehrte arbeiteten zusammen und übersetzten griechische und arabische Texte.'
      },
      {
        text: 'Du stellst das Buch zurück. Es ist besser, sich auf die heiligen Texte zu konzentrieren.',
        consequence: 'Du widmest dich den Psalmen und der Bibel. Dein Latein wird ausgezeichnet und du schreibst eigene Kommentare zu den heiligen Texten. Der Abt lobt deinen Eifer.',
        statChanges: { glaube: 2, wissen: 1, ansehen: 1 },
        vocabularyLearned: [
          { word: 'die Psalmen', definition: 'Religiöse Lieder und Gebete aus der Bibel', example: 'Die Mönche sangen jeden Tag die Psalmen.' },
          { word: 'der Eifer', definition: 'Großer Fleiß und Begeisterung', example: 'Sein Eifer beim Studium beeindruckte den Abt.' }
        ],
        historicalFact: 'Die Bibel wurde im Mittelalter nur auf Latein gelesen. Erst Martin Luther übersetzte sie 1534 ins Deutsche—ein revolutionärer Schritt.'
      }
    ],
    category: 'religion'
  },
  {
    id: 'moench-3',
    roleId: 'moench',
    chapter: 3,
    title: 'Die Pest kommt',
    description: 'Schreckliche Nachrichten: Die Pest breitet sich aus! In den umliegenden Dörfern sterben Menschen. Kranke klopfen an die Klosterpforte und bitten um Hilfe. Einige Mönche haben Angst und wollen die Tore schließen. Was rätst du dem Abt?',
    choices: [
      {
        text: 'Öffnet die Tore und helft den Kranken!',
        consequence: 'Ihr nehmt die Kranken auf und pflegt sie. Einige Mönche werden auch krank, aber dank deiner Kräuterkenntnisse überleben viele. Das Kloster wird als Ort der Barmherzigkeit bekannt.',
        statChanges: { glaube: 2, ansehen: 3, wissen: 1 },
        vocabularyLearned: [
          { word: 'die Pest', definition: 'Eine tödliche Krankheit, die im Mittelalter Millionen Menschen tötete', example: 'Die Pest tötete ein Drittel der Bevölkerung Europas.' },
          { word: 'die Barmherzigkeit', definition: 'Mitgefühl und Hilfe für Leidende', example: 'Barmherzigkeit gegenüber den Kranken war eine christliche Pflicht.' }
        ],
        historicalFact: 'Der Schwarze Tod (1347-1353) tötete etwa 25 Millionen Menschen in Europa—ein Drittel der Bevölkerung. Es war die schlimmste Katastrophe des Mittelalters.',
        achievementId: 'barmherzig'
      },
      {
        text: 'Schließt die Tore und betet, dass Gott euch vor der Pest bewahrt.',
        consequence: 'Das Kloster bleibt verschont, aber die Schreie der Kranken vor den Toren verfolgen dich. Einige Mönche verlassen das Kloster, weil sie ihr Gewissen plagt.',
        statChanges: { glaube: 1, ansehen: -2, geschick: 1 },
        vocabularyLearned: [
          { word: 'verschonen', definition: 'Jemanden nicht treffen, nicht beschädigen', example: 'Das Kloster wurde von der Pest verschont.' },
          { word: 'das Gewissen', definition: 'Das innere Gefühl für richtig und falsch', example: 'Sein Gewissen sagte ihm, dass er helfen sollte.' }
        ],
        historicalFact: 'Viele Menschen glaubten, die Pest sei eine Strafe Gottes. Flagellanten (Geißler) zogen durch die Straßen und peitschten sich, um Gottes Vergebung zu erbitten.'
      },
      {
        text: 'Richtet ein Krankenhaus außerhalb der Klostermauern ein.',
        consequence: 'Ein kluger Kompromiss! Die Kranken werden versorgt, aber das Kloster bleibt geschützt. Du organisierst die Pflege und lernst viel über Krankheiten.',
        statChanges: { wissen: 2, ansehen: 2, geschick: 1 },
        vocabularyLearned: [
          { word: 'das Krankenhaus', definition: 'Ein Ort, wo Kranke behandelt werden (auch: Hospital, Spital)', example: 'Das Krankenhaus vor dem Kloster rettete viele Leben.' },
          { word: 'die Pflege', definition: 'Die Betreuung und Versorgung von Kranken', example: 'Die Pflege der Pestkranken war gefährlich.' }
        ],
        historicalFact: 'Klöster betrieben die ersten Krankenhäuser (Hospitäler) in Europa. Das Hotel-Dieu in Paris (gegründet um 651) ist eines der ältesten.'
      }
    ],
    category: 'alltag'
  },
  {
    id: 'moench-4',
    roleId: 'moench',
    chapter: 4,
    title: 'Die Schule des Klosters',
    description: 'Der Abt möchte eine Klosterschule gründen, in der auch Kinder aus dem Dorf lernen können. Bisher war Bildung nur für den Adel und den Klerus. Einige Mönche sind dagegen. Du sollst die Schule leiten. Was willst du unterrichten?',
    choices: [
      {
        text: 'Lesen, Schreiben und Rechnen—die Grundlagen für alle Kinder!',
        consequence: 'Die Kinder sind begeistert. Zum ersten Mal können Bauernsöhne lesen lernen! Die Dorfgemeinschaft ist dankbar. Einige der Kinder werden später selbst Gelehrte.',
        statChanges: { wissen: 2, ansehen: 2 },
        vocabularyLearned: [
          { word: 'die Bildung', definition: 'Wissen und Fähigkeiten, die man durch Lernen bekommt', example: 'Bildung war im Mittelalter ein Privileg der Reichen.' },
          { word: 'das Rechnen', definition: 'Das Arbeiten mit Zahlen (Addition, Subtraktion usw.)', example: 'Im Kloster lernten die Kinder Lesen, Schreiben und Rechnen.' }
        ],
        historicalFact: 'Im Mittelalter konnten die meisten Menschen nicht lesen oder schreiben. Klosterschulen und Domschulen waren die einzigen Bildungseinrichtungen. Die ersten Universitäten entstanden im 12. Jahrhundert.'
      },
      {
        text: 'Latein und die sieben freien Künste—die klassische Bildung!',
        consequence: 'Du unterrichtest nach dem antiken Modell: Grammatik, Rhetorik, Logik, Arithmetik, Geometrie, Musik und Astronomie. Die begabtesten Schüler werden auf die Universität vorbereitet.',
        statChanges: { wissen: 3, ansehen: 1 },
        vocabularyLearned: [
          { word: 'die freien Künste', definition: 'Die sieben Fächer der klassischen Bildung im Mittelalter', example: 'Die sieben freien Künste waren die Grundlage der Universitätsbildung.' },
          { word: 'die Universität', definition: 'Eine Hochschule für höhere Bildung', example: 'Die Universität Heidelberg wurde 1386 gegründet.' }
        ],
        historicalFact: 'Die älteste Universität im deutschsprachigen Raum ist die Universität Wien (1365), gefolgt von Heidelberg (1386) und Köln (1388).',
        achievementId: 'lehrer'
      },
      {
        text: 'Praktische Fähigkeiten—Kräuterkunde, Handwerk und Landwirtschaft!',
        consequence: 'Die Schule wird schnell beliebt. Die Kinder lernen, Kräuter zu erkennen, einfache Werkzeuge zu bauen und bessere Anbaumethoden. Das ganze Dorf profitiert vom neuen Wissen.',
        statChanges: { geschick: 2, wissen: 1, ansehen: 1 },
        vocabularyLearned: [
          { word: 'die Fähigkeit', definition: 'Etwas, das man gut kann', example: 'Seine Fähigkeit, Kräuter zu erkennen, war beeindruckend.' },
          { word: 'die Anbaumethode', definition: 'Die Art, wie man Pflanzen anbaut', example: 'Neue Anbaumethoden verbesserten die Ernte deutlich.' }
        ],
        historicalFact: 'Die Dreifelderwirtschaft war eine wichtige landwirtschaftliche Innovation: Ein Feld für Sommergetreide, eines für Wintergetreide, eines brach. So erholte sich der Boden.'
      }
    ],
    category: 'gesellschaft'
  },
  {
    id: 'moench-5',
    roleId: 'moench',
    chapter: 5,
    title: 'Der neue Abt',
    description: 'Der alte Abt ist gestorben und die Mönche müssen einen neuen Abt wählen. Zu deiner Überraschung wirst du als Kandidat vorgeschlagen! Die Verantwortung wäre enorm—du würdest das ganze Kloster leiten. Aber auch andere Kandidaten stehen bereit.',
    choices: [
      {
        text: 'Du nimmst die Kandidatur an und versprichst, das Kloster zu reformieren.',
        consequence: 'Du wirst gewählt! Als Abt führst du neue Regeln ein: mehr Bildung, bessere Pflege der Kranken und ein offenes Kloster. Dein Kloster wird zu einem Vorbild für andere.',
        statChanges: { ansehen: 3, wissen: 1, glaube: 1 },
        vocabularyLearned: [
          { word: 'die Reform', definition: 'Eine Veränderung zum Besseren', example: 'Die Reform des Klosters brachte viele Verbesserungen.' },
          { word: 'die Kandidatur', definition: 'Das Angebot, für ein Amt zu kandidieren', example: 'Er nahm die Kandidatur für das Amt des Abts an.' }
        ],
        historicalFact: 'Klosterreformen waren im Mittelalter wichtig. Die Reform von Cluny (10. Jahrhundert) und die Zisterzienser-Bewegung versuchten, das Klosterleben zu verbessern.',
        achievementId: 'abt'
      },
      {
        text: 'Du lehnst ab und unterstützt einen anderen, erfahreneren Kandidaten.',
        consequence: 'Der neue Abt ist dir dankbar und macht dich zu seinem engsten Berater. Du hast großen Einfluss, aber ohne die Last der Führung. Eine weise Entscheidung.',
        statChanges: { wissen: 1, ansehen: 1, glaube: 2 },
        vocabularyLearned: [
          { word: 'der Berater', definition: 'Eine Person, die jemandem Ratschläge gibt', example: 'Der Berater des Abts war ein weiser Mönch.' },
          { word: 'die Demut', definition: 'Bescheidenheit, sich nicht über andere stellen', example: 'Demut war eine wichtige Tugend für Mönche.' }
        ],
        historicalFact: 'Das Klosterleben basierte auf Gehorsam, Armut und Keuschheit. Die Mönche wählten ihren Abt demokratisch—ein seltenes Recht im Mittelalter.'
      },
      {
        text: 'Du schlägst vor, dass der neue Abt vom ganzen Dorf gewählt wird—nicht nur von den Mönchen.',
        consequence: 'Ein revolutionärer Vorschlag! Die meisten Mönche sind dagegen, aber die Idee verbreitet sich. Vielleicht wird sie eines Tages verwirklicht. Du bist deiner Zeit voraus.',
        statChanges: { wissen: 2, ansehen: -1, glaube: 1 },
        vocabularyLearned: [
          { word: 'die Wahl', definition: 'Das Verfahren, bei dem man eine Person für ein Amt bestimmt', example: 'Die Wahl des neuen Abts war spannend.' },
          { word: 'revolutionär', definition: 'Völlig neu und anders, die alte Ordnung verändernd', example: 'Seine Idee war revolutionär für das Mittelalter.' }
        ],
        historicalFact: 'Demokratische Elemente gab es im Mittelalter: Könige wurden gewählt (Kurfürsten), Äbte von Mönchen, und in Städten gab es Stadtrats-Wahlen.'
      }
    ],
    category: 'religion'
  }
];
