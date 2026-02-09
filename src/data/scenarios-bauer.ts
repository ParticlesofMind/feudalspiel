import { Scenario } from '../types';

export const bauerScenarios: Scenario[] = [
  {
    id: 'bauer-1',
    roleId: 'bauer',
    chapter: 1,
    title: 'Der Morgen auf dem Feld',
    description: 'Es ist früher Morgen im Dorf. Die Sonne geht gerade auf und du stehst vor deinem kleinen Haus aus Holz und Lehm. Heute ist ein wichtiger Tag: Der Grundherr hat befohlen, dass der Zehnte—ein Zehntel der Ernte—bald abgeliefert werden muss. Aber dein Nachbar ist krank und kann seine Felder nicht bestellen. Was tust du?',
    choices: [
      {
        text: 'Du hilfst deinem Nachbarn zuerst und kümmerst dich dann um deine eigenen Felder.',
        consequence: 'Dein Nachbar ist sehr dankbar. Das ganze Dorf spricht über deine Güte. Allerdings bist du jetzt im Rückstand mit deiner eigenen Arbeit.',
        statChanges: { ansehen: 2, geschick: -1 },
        vocabularyLearned: [
          { word: 'der Zehnte', definition: 'Ein Zehntel der Ernte, das man abgeben musste', example: 'Der Bauer musste den Zehnten an den Grundherrn liefern.' },
          { word: 'bestellen', definition: 'Das Feld bearbeiten und bepflanzen', example: 'Im Frühling bestellen die Bauern ihre Felder.' }
        ],
        historicalFact: 'Im Mittelalter mussten Bauern den Zehnten (10% der Ernte) an die Kirche oder den Grundherrn abgeben. Dies war eine der wichtigsten Pflichten.'
      },
      {
        text: 'Du konzentrierst dich auf deine eigene Ernte. Der Zehnte muss pünktlich sein!',
        consequence: 'Dein Feld sieht gut aus und du wirst den Zehnten rechtzeitig liefern können. Aber einige Nachbarn sind enttäuscht.',
        statChanges: { wohlstand: 1, ansehen: -1 },
        vocabularyLearned: [
          { word: 'die Ernte', definition: 'Die reifen Früchte, die man vom Feld holt', example: 'Die Ernte war dieses Jahr sehr gut.' },
          { word: 'pünktlich', definition: 'Zur richtigen Zeit, nicht zu spät', example: 'Der Zehnte muss pünktlich abgeliefert werden.' }
        ],
        historicalFact: 'Wenn Bauern den Zehnten nicht rechtzeitig lieferten, konnten sie bestraft werden. Der Grundherr hatte große Macht über seine Bauern.'
      },
      {
        text: 'Du gehst zum Pfarrer und bittest um Hilfe für deinen Nachbarn.',
        consequence: 'Der Pfarrer organisiert eine gemeinsame Hilfsaktion. Die Dorfgemeinschaft arbeitet zusammen. Du gewinnst an Ansehen und lernst etwas über die Rolle der Kirche.',
        statChanges: { ansehen: 1, glaube: 1 },
        vocabularyLearned: [
          { word: 'der Pfarrer', definition: 'Der Priester in einem Dorf oder einer Gemeinde', example: 'Der Pfarrer half den Armen im Dorf.' },
          { word: 'die Dorfgemeinschaft', definition: 'Alle Menschen, die zusammen in einem Dorf leben', example: 'Die Dorfgemeinschaft feierte gemeinsam das Erntedankfest.' }
        ],
        historicalFact: 'Die Kirche spielte eine zentrale Rolle im Dorfleben. Der Pfarrer war oft Vermittler und half bei Konflikten.',
        achievementId: 'gemeinschaft'
      }
    ],
    category: 'landwirtschaft'
  },
  {
    id: 'bauer-2',
    roleId: 'bauer',
    chapter: 2,
    title: 'Der Markttag',
    description: 'Endlich ist Markttag in der nächsten Stadt! Du darfst mit deiner übrigen Ernte—Gemüse, Eier und etwas Käse—zum Markt gehen. Die Stadt ist laut und aufregend. Überall sind Händler, Handwerker und Bürger. Ein Kaufmann bietet dir einen guten Preis für alle deine Waren auf einmal. Aber du könntest auch versuchen, einzeln zu verkaufen.',
    choices: [
      {
        text: 'Du verkaufst alles an den Kaufmann. Schnell und sicher!',
        consequence: 'Der Kaufmann bezahlt fair und du hast schnell Geld in der Tasche. Du nutzt die Zeit, um die Stadt zu erkunden und neue Dinge zu sehen.',
        statChanges: { wohlstand: 2, wissen: 1 },
        vocabularyLearned: [
          { word: 'der Markt', definition: 'Ein Platz, wo Menschen Waren kaufen und verkaufen', example: 'Jeden Samstag war Markt in der Stadt.' },
          { word: 'die Ware', definition: 'Dinge, die man kaufen oder verkaufen kann', example: 'Der Kaufmann hatte viele verschiedene Waren.' }
        ],
        historicalFact: 'Mittelalterliche Märkte waren wichtige soziale und wirtschaftliche Ereignisse. Städte mit Marktrecht wuchsen oft schnell.'
      },
      {
        text: 'Du verkaufst deine Waren einzeln an verschiedene Kunden.',
        consequence: 'Es dauert länger, aber du verdienst mehr Geld. Außerdem lernst du viele Menschen kennen und hörst interessante Neuigkeiten.',
        statChanges: { wohlstand: 3, ansehen: 1, geschick: 1 },
        vocabularyLearned: [
          { word: 'handeln', definition: 'Über den Preis verhandeln; kaufen und verkaufen', example: 'Auf dem Markt muss man immer handeln.' },
          { word: 'der Kunde', definition: 'Eine Person, die etwas kauft', example: 'Die Kunden auf dem Markt waren freundlich.' }
        ],
        historicalFact: 'Bauern durften oft nur an bestimmten Tagen in die Stadt kommen. Das Marktrecht wurde vom König oder Fürsten verliehen.',
        achievementId: 'haendler'
      },
      {
        text: 'Du tauschst deine Waren gegen Werkzeuge und Stoffe ein.',
        consequence: 'Du hast kein Geld, aber nützliche Dinge für den Winter. Ein Schmied gibt dir eine gute Sichel im Tausch gegen deinen Käse.',
        statChanges: { geschick: 2, wohlstand: 1 },
        vocabularyLearned: [
          { word: 'tauschen', definition: 'Eine Sache gegen eine andere geben', example: 'Im Mittelalter hat man oft Waren getauscht statt mit Geld bezahlt.' },
          { word: 'der Schmied', definition: 'Ein Handwerker, der Metall bearbeitet', example: 'Der Schmied machte Schwerter und Werkzeuge.' }
        ],
        historicalFact: 'Tauschhandel war im Mittelalter sehr verbreitet. Nicht jeder hatte Zugang zu Münzgeld, besonders auf dem Land.'
      }
    ],
    category: 'handel'
  },
  {
    id: 'bauer-3',
    roleId: 'bauer',
    chapter: 3,
    title: 'Das Erntedankfest',
    description: 'Die Ernte ist eingebracht und das Dorf feiert! Es gibt Musik, Tanz und gutes Essen. Der Grundherr hat sogar ein Fass Bier geschickt. Aber plötzlich kommt ein Bote mit einer Nachricht: Der Grundherr verlangt zusätzliche Arbeitstage auf seinen Feldern—die sogenannte Fron. Die Stimmung im Dorf kippt.',
    choices: [
      {
        text: 'Du akzeptierst die Fron ohne zu klagen. Der Grundherr ist mächtig.',
        consequence: 'Die zusätzliche Arbeit ist erschöpfend, aber der Grundherr ist zufrieden mit dir. Er merkt sich deine Loyalität. Beim nächsten Problem wird er dir eher helfen.',
        statChanges: { ansehen: 1, geschick: 1, wohlstand: -1 },
        vocabularyLearned: [
          { word: 'die Fron', definition: 'Unbezahlte Pflichtarbeit für den Grundherrn', example: 'Die Bauern mussten jede Woche drei Tage Fron leisten.' },
          { word: 'der Grundherr', definition: 'Der Adlige, dem das Land gehört', example: 'Der Grundherr lebte auf der Burg über dem Dorf.' }
        ],
        historicalFact: 'Fronarbeit (auch Frondienst) war eine der wichtigsten Pflichten der Bauern. Sie mussten unbezahlt auf den Feldern des Grundherrn arbeiten.'
      },
      {
        text: 'Du sprichst mit den anderen Bauern und ihr schreibt gemeinsam eine Bitte an den Grundherrn.',
        consequence: 'Der Grundherr ist überrascht, aber er hört euch an. Er reduziert die Fron um einen Tag. Ein kleiner Sieg für das Dorf!',
        statChanges: { ansehen: 2, wissen: 1 },
        vocabularyLearned: [
          { word: 'die Bitte', definition: 'Eine höfliche Frage oder Anfrage', example: 'Die Bauern richteten eine Bitte an den Grundherrn.' },
          { word: 'verhandeln', definition: 'Über Bedingungen sprechen und eine Einigung suchen', example: 'Die Bauern versuchten, mit dem Grundherrn zu verhandeln.' }
        ],
        historicalFact: 'Bauernproteste gab es im ganzen Mittelalter. Der bekannteste war der Deutsche Bauernkrieg von 1524-1525.',
        achievementId: 'protest'
      },
      {
        text: 'Du feierst weiter und machst dir morgen Sorgen. Heute ist Fest!',
        consequence: 'Du genießt das Fest und tanzt die ganze Nacht. Am nächsten Tag ist die Arbeit doppelt schwer, aber die Erinnerung an das Fest wärmt dein Herz.',
        statChanges: { glaube: 1, wohlstand: -1, geschick: 1 },
        vocabularyLearned: [
          { word: 'das Fest', definition: 'Eine Feier mit Essen, Musik und Tanz', example: 'Das Erntedankfest war das größte Fest im Dorf.' },
          { word: 'die Stimmung', definition: 'Die allgemeine Gefühlslage einer Gruppe', example: 'Die Stimmung auf dem Fest war ausgelassen.' }
        ],
        historicalFact: 'Feste waren im Mittelalter sehr wichtig. Das Erntedankfest, Weihnachten und die Kirchweih waren Höhepunkte des Jahres.'
      }
    ],
    category: 'feste'
  },
  {
    id: 'bauer-4',
    roleId: 'bauer',
    chapter: 4,
    title: 'Der strenge Winter',
    description: 'Der Winter ist gekommen und er ist streng. Der Schnee liegt hoch und die Vorräte werden knapp. Deine Familie friert und hat Hunger. Ein reisender Händler bietet dir Getreide an—aber zu einem sehr hohen Preis. Im Wald gibt es Wild, aber die Jagd ist den Bauern verboten. Nur der Adel darf jagen.',
    choices: [
      {
        text: 'Du kaufst das teure Getreide vom Händler.',
        consequence: 'Deine Familie überlebt den Winter gut, aber dein Geldbeutel ist fast leer. Im Frühling musst du sehr sparsam sein.',
        statChanges: { wohlstand: -2, glaube: 1 },
        vocabularyLearned: [
          { word: 'die Vorräte', definition: 'Essen und Dinge, die man für später aufbewahrt', example: 'Die Vorräte für den Winter waren fast aufgebraucht.' },
          { word: 'das Getreide', definition: 'Weizen, Roggen oder andere Pflanzen für Brot', example: 'Getreide war das wichtigste Nahrungsmittel im Mittelalter.' }
        ],
        historicalFact: 'Hunger im Winter war eine reale Gefahr. Viele Bauern überlebten mit sehr wenig Nahrung, besonders nach schlechten Ernten.'
      },
      {
        text: 'Du gehst heimlich im Wald jagen.',
        consequence: 'Du fängst einen Hasen und deine Familie hat Fleisch! Aber ein Förster hat dich beinahe gesehen. Wilderei wurde im Mittelalter hart bestraft.',
        statChanges: { geschick: 2, ansehen: -1 },
        vocabularyLearned: [
          { word: 'die Jagd', definition: 'Das Fangen oder Töten von Wildtieren', example: 'Die Jagd war ein Privileg des Adels.' },
          { word: 'das Wildern', definition: 'Illegal jagen, ohne Erlaubnis', example: 'Wildern konnte mit dem Tod bestraft werden.' }
        ],
        historicalFact: 'Das Jagdrecht lag beim Adel. Bauern, die wilderten, wurden streng bestraft—manchmal mit dem Tod. Der Wald gehörte dem Herrn.',
        achievementId: 'wilderer'
      },
      {
        text: 'Du bittest im Kloster um Hilfe.',
        consequence: 'Die Mönche geben dir Brot und Suppe. Sie zeigen dir auch, welche Pflanzen man im Winter sammeln kann. Du lernst viel über Kräuter und Heilpflanzen.',
        statChanges: { wissen: 2, glaube: 1 },
        vocabularyLearned: [
          { word: 'das Kloster', definition: 'Ein Ort, wo Mönche oder Nonnen leben', example: 'Das Kloster half den armen Bauern im Winter.' },
          { word: 'die Heilpflanze', definition: 'Eine Pflanze, die als Medizin verwendet wird', example: 'Die Mönche kannten viele Heilpflanzen.' }
        ],
        historicalFact: 'Klöster waren im Mittelalter wichtige Zentren der Hilfe und des Wissens. Sie betrieben Hospitäler und versorgten Arme mit Essen.'
      }
    ],
    category: 'alltag'
  },
  {
    id: 'bauer-5',
    roleId: 'bauer',
    chapter: 5,
    title: 'Die Entscheidung',
    description: 'Der Frühling ist da und mit ihm eine große Nachricht: Der Grundherr sucht Arbeiter für den Bau einer neuen Kirche in der Stadt. Wer mitarbeitet, bekommt bessere Bedingungen und vielleicht sogar die Freiheit von der Leibeigenschaft. Aber du müsstest dein Dorf verlassen. Deine Familie und Freunde sind hier.',
    choices: [
      {
        text: 'Du gehst in die Stadt und arbeitest am Kirchenbau.',
        consequence: 'Das Leben in der Stadt ist anders—laut, spannend und voller Möglichkeiten. Die Arbeit ist schwer, aber du lernst ein Handwerk und triffst Menschen aus vielen Regionen. Nach einem Jahr bist du frei!',
        statChanges: { ansehen: 2, wissen: 2, geschick: 2 },
        vocabularyLearned: [
          { word: 'die Leibeigenschaft', definition: 'Ein System, in dem Bauern an das Land gebunden waren', example: 'Die Leibeigenschaft war wie eine milde Form der Sklaverei.' },
          { word: 'die Freiheit', definition: 'Das Recht, selbst zu entscheiden', example: 'In der Stadt konnte ein Bauer die Freiheit erlangen.' }
        ],
        historicalFact: '„Stadtluft macht frei" war ein wichtiger Rechtsgrundsatz. Wenn ein Leibeigener ein Jahr und einen Tag in einer Stadt lebte, wurde er frei.',
        achievementId: 'stadtluft'
      },
      {
        text: 'Du bleibst im Dorf bei deiner Familie.',
        consequence: 'Das Dorfleben geht weiter. Du bist zufrieden mit dem, was du hast. Die Dorfgemeinschaft schätzt deine Treue und du wirst zum Dorfältesten gewählt.',
        statChanges: { ansehen: 3, glaube: 1 },
        vocabularyLearned: [
          { word: 'der Dorfälteste', definition: 'Der älteste oder wichtigste Mann im Dorf', example: 'Der Dorfälteste sprach bei Versammlungen für alle Bauern.' },
          { word: 'die Treue', definition: 'Loyalität und Zuverlässigkeit', example: 'Treue war eine wichtige Tugend im Mittelalter.' }
        ],
        historicalFact: 'Die meisten Bauern verließen ihr Dorf nie. Reisen war gefährlich und teuer. Die Dorfgemeinschaft war der Mittelpunkt des Lebens.'
      },
      {
        text: 'Du schickst deinen ältesten Sohn in die Stadt und bleibst selbst im Dorf.',
        consequence: 'Dein Sohn wird in der Stadt Lehrling bei einem Handwerker. Er schickt dir manchmal Geld und Nachrichten. Du bist stolz auf ihn, vermisst ihn aber auch.',
        statChanges: { wissen: 1, wohlstand: 1, ansehen: 1 },
        vocabularyLearned: [
          { word: 'der Lehrling', definition: 'Ein junger Mensch, der ein Handwerk lernt', example: 'Der Lehrling arbeitete drei Jahre beim Meister.' },
          { word: 'das Handwerk', definition: 'Arbeit, die man mit den Händen macht (z.B. Schuhmacher, Bäcker)', example: 'Ein Handwerk zu lernen dauerte viele Jahre.' }
        ],
        historicalFact: 'Viele Bauernsöhne gingen in die Städte, um ein Handwerk zu lernen. Die Lehrzeit dauerte meist 3-7 Jahre.'
      }
    ],
    category: 'gesellschaft'
  }
];
