import { Scenario } from '../types';

export const ritterScenarios: Scenario[] = [
  {
    id: 'ritter-1',
    roleId: 'ritter',
    chapter: 1,
    title: 'Das erste Turnier',
    description: 'Du bist soeben zum Ritter geschlagen worden und nimmst an deinem ersten Turnier teil! Hunderte Zuschauer sind gekommen. Der Herold ruft deinen Namen. Dein Pferd ist nervös, deine Rüstung glänzt. Du reitest gegen einen erfahrenen Ritter. Wie bereitest du dich vor?',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Codex_Manesse_%28765%29_Walther_von_Klingen.jpg/300px-Codex_Manesse_%28765%29_Walther_von_Klingen.jpg',
    choices: [
      {
        text: 'Du konzentrierst dich und reitest mit voller Kraft auf deinen Gegner zu.',
        consequence: 'Dein mutiger Angriff überrascht den erfahrenen Ritter. Du triffst ihn fest mit der Lanze! Die Menge jubelt. Du gewinnst die erste Runde!',
        statChanges: { ansehen: 3, geschick: 1 },
        vocabularyLearned: [
          { word: 'das Turnier', definition: 'Ein Wettkampf zwischen Rittern', example: 'Das Turnier war das größte Ereignis des Jahres.' },
          { word: 'die Lanze', definition: 'Eine lange Waffe zum Reiten im Turnier', example: 'Die Lanze zerbrach beim Aufprall.' }
        ],
        historicalFact: 'Turniere waren im Mittelalter wichtige gesellschaftliche Ereignisse. Ritter konnten Ruhm, Ehre und sogar Reichtum gewinnen. Manchmal waren Turniere allerdings auch tödlich.'
      },
      {
        text: 'Du beobachtest deinen Gegner genau und wartest auf eine Schwäche.',
        consequence: 'Deine Geduld zahlt sich aus. Du erkennst, dass dein Gegner nach links schwankt. Beim nächsten Durchgang nutzt du diese Schwäche und gewinnst!',
        statChanges: { wissen: 2, geschick: 2 },
        vocabularyLearned: [
          { word: 'der Gegner', definition: 'Die Person, gegen die man kämpft', example: 'Der Gegner war ein erfahrener Ritter aus dem Norden.' },
          { word: 'die Schwäche', definition: 'Ein Punkt, an dem man nicht stark ist', example: 'Jeder Kämpfer hat eine Schwäche.' }
        ],
        historicalFact: 'Ritter begannen ihre Ausbildung als Pagen mit sieben Jahren. Mit 14 wurden sie Knappen und mit 21 konnten sie zum Ritter geschlagen werden.'
      },
      {
        text: 'Du grüßt erst die Dame auf der Tribüne und bittest um ihren Segen.',
        consequence: 'Die Dame gibt dir ihr Tuch als Glücksbringer. Die Zuschauer sind begeistert von deiner Höflichkeit. Du kämpfst mit neuem Mut und schlägst dich ehrenvoll—auch wenn du knapp verlierst.',
        statChanges: { ansehen: 2, glaube: 1 },
        vocabularyLearned: [
          { word: 'die Höflichkeit', definition: 'Gutes, respektvolles Verhalten', example: 'Höflichkeit war eine wichtige Tugend der Ritter.' },
          { word: 'der Glücksbringer', definition: 'Ein Gegenstand, der Glück bringen soll', example: 'Das Tuch der Dame war sein Glücksbringer.' }
        ],
        historicalFact: 'Das Ideal der „Minne" (höfische Liebe) war zentral in der Ritterkultur. Ritter verehrten eine Dame und kämpften in ihrem Namen. Minnesänger besangen diese Liebe in Liedern.',
        achievementId: 'minnesaenger'
      }
    ],
    category: 'feste'
  },
  {
    id: 'ritter-2',
    roleId: 'ritter',
    chapter: 2,
    title: 'Der Lehnseid',
    description: 'Dein Lehnsherr, Graf Heinrich, ruft dich zu sich auf die Burg. Er will dir ein kleines Lehen geben—ein Stück Land mit einem Dorf und einigen Bauern. Dafür musst du ihm den Lehnseid schwören: Treue und Dienst im Krieg. Es ist eine große Ehre, aber auch eine große Verpflichtung.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Codex_Manesse_Rudolf_von_Ems.jpg/300px-Codex_Manesse_Rudolf_von_Ems.jpg',
    choices: [
      {
        text: 'Du schwörst den Eid feierlich und nimmst das Lehen an.',
        consequence: 'Du kniest vor dem Grafen und legst deine Hände in seine. Der Eid ist geschworen. Du bist jetzt Lehnsmann mit eigenem Land! Die Verantwortung für das Dorf liegt bei dir.',
        statChanges: { ansehen: 2, wohlstand: 2 },
        vocabularyLearned: [
          { word: 'der Lehnseid', definition: 'Ein feierliches Versprechen der Treue an den Lehnsherrn', example: 'Der Ritter schwor den Lehnseid auf seinen Knien.' },
          { word: 'das Lehen', definition: 'Land, das ein Herr seinem Vasallen gibt', example: 'Das Lehen bestand aus einem Dorf und den umliegenden Feldern.' }
        ],
        historicalFact: 'Das Lehnswesen war die Grundlage der mittelalterlichen Gesellschaft. Der König gab Land an Fürsten, die es an Ritter weitergaben. Im Gegenzug leisteten sie Militärdienst.'
      },
      {
        text: 'Du bittest um Bedenkzeit und erkundigst dich über das Lehen.',
        consequence: 'Du erfährst, dass das Dorf arm ist und die Bauern unter dem letzten Herrn gelitten haben. Du weißt jetzt, was dich erwartet, und kannst dich besser vorbereiten.',
        statChanges: { wissen: 2, geschick: 1 },
        vocabularyLearned: [
          { word: 'die Bedenkzeit', definition: 'Zeit zum Nachdenken vor einer Entscheidung', example: 'Er bat um Bedenkzeit, bevor er den Eid schwor.' },
          { word: 'der Vasall', definition: 'Ein Ritter oder Adeliger, der einem höheren Herrn dient', example: 'Als Vasall des Grafen musste er im Krieg kämpfen.' }
        ],
        historicalFact: 'Das Lehnswesen hatte strenge Regeln. Ein Vasall, der seinen Eid brach, konnte sein Lehen verlieren. Der Lehnsherr musste aber auch seinen Vasallen beschützen.'
      },
      {
        text: 'Du nimmst das Lehen an und versprichst, ein guter Herr für die Bauern zu sein.',
        consequence: 'Der Graf ist beeindruckt von deiner Haltung. Die Bauern im Dorf hören von deinem Versprechen und haben Hoffnung. Du wirst mit Freude empfangen.',
        statChanges: { ansehen: 3, glaube: 1 },
        vocabularyLearned: [
          { word: 'die Verpflichtung', definition: 'Etwas, das man tun muss; eine Pflicht', example: 'Mit dem Lehen kam eine große Verpflichtung.' },
          { word: 'der Herr', definition: 'Der Besitzer oder Anführer', example: 'Der neue Herr war freundlich zu seinen Bauern.' }
        ],
        historicalFact: 'Ein guter Lehnsherr sollte seine Untertanen beschützen und gerecht behandeln. In der Realität war das aber oft nicht der Fall.',
        achievementId: 'lehnsherr'
      }
    ],
    category: 'gesellschaft'
  },
  {
    id: 'ritter-3',
    roleId: 'ritter',
    chapter: 3,
    title: 'Der Kreuzzugsaufruf',
    description: 'Ein Prediger kommt ins Dorf und ruft zum Kreuzzug auf! Er verspricht Vergebung aller Sünden und Ruhm für jeden Ritter, der ins Heilige Land zieht. Viele Ritter bereiten sich schon auf die Reise vor. Dein Lehnsherr fragt, ob du mitziehst.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/BnF_ms._12559%2C_fol._1_-_Pr%C3%A9dication_de_la_Croisade.jpg/300px-BnF_ms._12559%2C_fol._1_-_Pr%C3%A9dication_de_la_Croisade.jpg',
    choices: [
      {
        text: 'Du ziehst in den Kreuzzug—für Gott und Ehre!',
        consequence: 'Die Reise ist lang und beschwerlich. Du siehst fremde Länder und Kulturen. Die Kämpfe sind hart, aber du überlebst und kehrst als erfahrener Ritter zurück. Du bringst Wissen über arabische Medizin und Wissenschaft mit.',
        statChanges: { ansehen: 2, wissen: 2, glaube: 2, wohlstand: -1 },
        vocabularyLearned: [
          { word: 'der Kreuzzug', definition: 'Ein Krieg der Christen um das Heilige Land', example: 'Viele Ritter zogen in den Kreuzzug.' },
          { word: 'die Vergebung', definition: 'Verzeihen von Fehlern oder Sünden', example: 'Der Prediger versprach Vergebung für alle Kreuzfahrer.' }
        ],
        historicalFact: 'Es gab mehrere Kreuzzüge zwischen 1096 und 1291. Die Kreuzfahrer brachten viel Wissen aus dem Orient nach Europa zurück—Mathematik, Medizin und neue Nahrungsmittel.'
      },
      {
        text: 'Du bleibst zu Hause und beschützt dein Lehen.',
        consequence: 'Während andere Ritter fortziehen, hütest du dein Land. Die Bauern sind dankbar. Als Nachbar-Lehen angegriffen werden, bist du der einzige Ritter, der verteidigen kann. Du wirst zum Schutzherrn der Region.',
        statChanges: { ansehen: 2, wohlstand: 2, geschick: 1 },
        vocabularyLearned: [
          { word: 'beschützen', definition: 'Jemanden vor Gefahr bewahren', example: 'Der Ritter beschützte sein Dorf vor Feinden.' },
          { word: 'verteidigen', definition: 'Sich gegen einen Angriff wehren', example: 'Er verteidigte die Burg gegen die Angreifer.' }
        ],
        historicalFact: 'Nicht alle Ritter zogen in die Kreuzzüge. Viele blieben zu Hause und verwalteten ihre Lehen. Die Abwesenheit vieler Ritter führte oft zu Problemen in Europa.'
      },
      {
        text: 'Du schickst Geld und Ausrüstung, aber ziehst nicht selbst in den Krieg.',
        consequence: 'Du unterstützt den Kreuzzug finanziell. Der Prediger sagt, auch das bringt Gottes Segen. Dein Geld hilft, einen armen Ritter auszurüsten, der sonst nicht hätte ziehen können.',
        statChanges: { glaube: 2, wohlstand: -2, ansehen: 1 },
        vocabularyLearned: [
          { word: 'die Ausrüstung', definition: 'Alles, was man für eine Aufgabe braucht', example: 'Die Ausrüstung eines Ritters war sehr teuer.' },
          { word: 'unterstützen', definition: 'Jemandem helfen oder etwas fördern', example: 'Er unterstützte den Kreuzzug mit Geld und Waffen.' }
        ],
        historicalFact: 'Eine Ritterrüstung kostete so viel wie ein kleiner Bauernhof. Viele Ritter konnten sich die Reise ins Heilige Land nicht leisten und brauchten finanzielle Unterstützung.'
      }
    ],
    category: 'religion'
  },
  {
    id: 'ritter-4',
    roleId: 'ritter',
    chapter: 4,
    title: 'Gerechtigkeit im Dorf',
    description: 'Als Lehnsherr musst du auch Richter sein. Zwei Bauern streiten sich: Der eine sagt, der andere hat seinen Zaun verschoben und einen Teil seines Feldes gestohlen. Beide haben Zeugen, die ihre Version bestätigen. Wie urteilst du?',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Sachsenspiegel_Landrecht_I_3_2.jpg/300px-Sachsenspiegel_Landrecht_I_3_2.jpg',
    choices: [
      {
        text: 'Du misst die Felder selbst nach und suchst die alten Grenzsteine.',
        consequence: 'Nach langer Suche findest du einen alten Grenzstein. Er beweist, dass der Zaun tatsächlich verschoben wurde. Du sprichst ein gerechtes Urteil. Beide Parteien akzeptieren es.',
        statChanges: { ansehen: 2, wissen: 2 },
        vocabularyLearned: [
          { word: 'der Grenzstein', definition: 'Ein Stein, der die Grenze zwischen zwei Grundstücken markiert', example: 'Der Grenzstein stand seit hundert Jahren an dieser Stelle.' },
          { word: 'das Urteil', definition: 'Die Entscheidung eines Richters', example: 'Das Urteil des Ritters war gerecht.' }
        ],
        historicalFact: 'Im Mittelalter gab es verschiedene Rechtssysteme nebeneinander: Kirchenrecht, Landrecht und Stadtrecht. Der „Sachsenspiegel" (1220) war das wichtigste deutsche Rechtsbuch.',
        achievementId: 'richter'
      },
      {
        text: 'Du lässt die Dorfgemeinschaft entscheiden.',
        consequence: 'Die Dorfversammlung diskutiert den Fall. Die Dorfältesten kommen zu einer Einigung. Die Gemeinschaft ist zufrieden, weil alle mitreden durften.',
        statChanges: { ansehen: 1, wissen: 1, glaube: 1 },
        vocabularyLearned: [
          { word: 'die Dorfversammlung', definition: 'Ein Treffen aller Dorfbewohner', example: 'Bei der Dorfversammlung wurden wichtige Fragen besprochen.' },
          { word: 'die Einigung', definition: 'Eine Lösung, mit der alle einverstanden sind', example: 'Nach langem Diskutieren fanden sie eine Einigung.' }
        ],
        historicalFact: 'Die Dorfgemeinschaft hatte eigene Regeln und Gerichtsbarkeit. Das „Weistum" war eine mündliche Sammlung der Dorfrechte und Gewohnheiten.'
      },
      {
        text: 'Du rufst einen Gottesurteil an—Gott soll entscheiden!',
        consequence: 'Die Bauern müssen eine Prüfung bestehen: Sie tragen heiße Eisen. Wessen Wunde schneller heilt, sagt die Wahrheit. Es ist eine dramatische Szene, die das ganze Dorf zusammenbringt.',
        statChanges: { glaube: 2, ansehen: 1 },
        vocabularyLearned: [
          { word: 'das Gottesurteil', definition: 'Eine Prüfung, bei der Gott zeigen soll, wer recht hat', example: 'Das Gottesurteil war im frühen Mittelalter üblich.' },
          { word: 'die Prüfung', definition: 'Ein Test oder eine Herausforderung', example: 'Die Prüfung durch heißes Eisen war gefürchtet.' }
        ],
        historicalFact: 'Gottesurteile (Ordal) waren im frühen Mittelalter üblich: Feuerprobe, Wasserprobe oder Zweikampf. Die Kirche verbot sie 1215 auf dem Vierten Laterankonzil.'
      }
    ],
    category: 'recht'
  },
  {
    id: 'ritter-5',
    roleId: 'ritter',
    chapter: 5,
    title: 'Das Vermächtnis des Ritters',
    description: 'Die Jahre sind vergangen. Du bist ein erfahrener Ritter mit Land und Ansehen. Dein Sohn ist nun alt genug, um deine Nachfolge anzutreten. Aber wie willst du in Erinnerung bleiben? Wie soll dein Vermächtnis aussehen?',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Codex_Manesse_Werner_von_Teufen.jpg/300px-Codex_Manesse_Werner_von_Teufen.jpg',
    choices: [
      {
        text: 'Du lässt eine Kapelle bauen—zu Ehren Gottes und deiner Familie.',
        consequence: 'Die Kapelle wird ein Zentrum des Dorflebens. Generationen werden hier beten und deinen Namen kennen. Du hinterlässt ein Zeichen des Glaubens.',
        statChanges: { glaube: 3, ansehen: 2, wohlstand: -2 },
        vocabularyLearned: [
          { word: 'die Kapelle', definition: 'Eine kleine Kirche', example: 'Die Kapelle auf dem Hügel war ein beliebter Ort für Gebete.' },
          { word: 'das Vermächtnis', definition: 'Was man der Nachwelt hinterlässt', example: 'Sein Vermächtnis war eine gerechte Herrschaft.' }
        ],
        historicalFact: 'Viele Adlige stifteten Kirchen und Kapellen. Sie glaubten, dass dies ihnen im Jenseits helfen würde. Diese Stiftungen waren auch ein Zeichen von Macht und Reichtum.'
      },
      {
        text: 'Du gründest eine Ritterschule für junge Knappen.',
        consequence: 'Junge Männer aus der ganzen Region kommen, um bei dir das Kämpfen, Reiten und den Ehrenkodex zu lernen. Dein Wissen lebt in der nächsten Generation weiter.',
        statChanges: { wissen: 2, ansehen: 2, geschick: 1 },
        vocabularyLearned: [
          { word: 'der Knappe', definition: 'Ein junger Mann, der bei einem Ritter lernt', example: 'Der Knappe trug das Schwert seines Ritters.' },
          { word: 'der Ehrenkodex', definition: 'Regeln für ehrenhaftes Verhalten', example: 'Der Ehrenkodex der Ritter verlangte Tapferkeit und Treue.' }
        ],
        historicalFact: 'Die Ausbildung zum Ritter dauerte viele Jahre: Ab 7 Jahren war man Page, ab 14 Knappe, und mit 21 konnte man zum Ritter geschlagen werden.',
        achievementId: 'lehrmeister'
      },
      {
        text: 'Du verbesserst das Leben der Bauern—bessere Felder, ein neuer Brunnen, eine Schule.',
        consequence: 'Die Bauern verehren dich. Das Dorf blüht auf und wird zum Vorbild in der Region. Dein Name wird mit Güte und Weisheit verbunden.',
        statChanges: { ansehen: 3, wohlstand: -1, wissen: 1 },
        vocabularyLearned: [
          { word: 'der Brunnen', definition: 'Ein Loch im Boden, aus dem man Wasser holt', example: 'Der neue Brunnen brachte frisches Wasser ins Dorf.' },
          { word: 'das Vorbild', definition: 'Eine Person oder Sache, der man nacheifert', example: 'Der gerechte Ritter war ein Vorbild für alle.' }
        ],
        historicalFact: 'Leben und Tod im Mittelalter hingen stark vom Lehnsherrn ab. Ein guter Herr konnte das Leben seiner Bauern deutlich verbessern—und umgekehrt.'
      }
    ],
    category: 'gesellschaft'
  }
];
