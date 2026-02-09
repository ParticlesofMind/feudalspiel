import { Achievement } from '../types';

export const achievements: Achievement[] = [
  { id: 'gemeinschaft', name: 'Dorfhelfer', description: 'Du hast der Dorfgemeinschaft in einer schwierigen Zeit geholfen.', icon: '🤝' },
  { id: 'haendler', name: 'Geschickter Händler', description: 'Du hast auf dem Markt klug gehandelt und gut verdient.', icon: '💰' },
  { id: 'protest', name: 'Stimme des Volkes', description: 'Du hast für die Rechte der Bauern gesprochen.', icon: '📢' },
  { id: 'wilderer', name: 'Waldläufer', description: 'Du hast die Jagdgesetze gebrochen, um deine Familie zu ernähren.', icon: '🏹' },
  { id: 'stadtluft', name: 'Stadtluft macht frei', description: 'Du hast die Leibeigenschaft hinter dir gelassen.', icon: '🏰' },
  { id: 'diplomat', name: 'Geschickter Vermittler', description: 'Du hast einen klugen Kompromiss gefunden.', icon: '⚖️' },
  { id: 'meister', name: 'Zunftmeister', description: 'Du hast das Meisterstück bestanden und bist nun Meister!', icon: '🔨' },
  { id: 'held', name: 'Held der Stadt', description: 'Du hast Menschen vor der Feuersbrunst gerettet.', icon: '🔥' },
  { id: 'erfinderisch', name: 'Erfindergeist', description: 'Du hast mit einer kreativen Lösung beeindruckt.', icon: '💡' },
  { id: 'unternehmer', name: 'Unternehmergeist', description: 'Du hast Handwerk und Handel geschickt verbunden.', icon: '📈' },
  { id: 'hanseat', name: 'Hanseat', description: 'Du hast dich der Hanse angeschlossen.', icon: '⛵' },
  { id: 'klug', name: 'Kluger Kopf', description: 'Du hast dein Risiko klug verteilt.', icon: '🧠' },
  { id: 'muenzkenner', name: 'Münzkenner', description: 'Du kennst den Wert jeder Münze im Reich.', icon: '🪙' },
  { id: 'geschuetzt', name: 'Unter Schutz', description: 'Ein Geleitbrief hat dich beschützt.', icon: '📜' },
  { id: 'fugger', name: 'Fugger-Schüler', description: 'Du hast von den größten Kaufleuten Europas gelernt.', icon: '🏛️' },
  { id: 'minnesaenger', name: 'Minnesänger', description: 'Du hast die Dame deines Herzens geehrt.', icon: '🎵' },
  { id: 'lehnsherr', name: 'Guter Lehnsherr', description: 'Du hast Verantwortung für deine Untertanen versprochen.', icon: '👑' },
  { id: 'richter', name: 'Gerechter Richter', description: 'Du hast ein faires Urteil gesprochen.', icon: '⚖️' },
  { id: 'lehrmeister', name: 'Lehrmeister', description: 'Du bildest die nächste Generation von Rittern aus.', icon: '🗡️' },
  { id: 'schreiber', name: 'Buchschreiber', description: 'Du bewahrst das Wissen der Welt in Büchern.', icon: '📖' },
  { id: 'gelehrter', name: 'Gelehrter', description: 'Du hast verbotenes Wissen studiert und Neues gelernt.', icon: '🌟' },
  { id: 'barmherzig', name: 'Barmherzig', description: 'Du hast den Pestkranken geholfen.', icon: '❤️' },
  { id: 'lehrer', name: 'Lehrer', description: 'Du unterrichtest die nächste Generation.', icon: '📚' },
  { id: 'abt', name: 'Abt', description: 'Du leitest das Kloster mit Weisheit und Güte.', icon: '✝️' },
  { id: 'weise', name: 'Weiser Herrscher', description: 'Du hörst deinen Untertanen zu.', icon: '👂' },
  { id: 'politikus', name: 'Politikus', description: 'Du hast eine kluge politische Ehe geschlossen.', icon: '💍' },
  { id: 'reichspolitiker', name: 'Reichspolitiker', description: 'Du hast auf dem Reichstag Einfluss genommen.', icon: '🦅' },
  { id: 'gerecht', name: 'Gerechter Herr', description: 'Du hast die Klagen deiner Bauern ernst genommen.', icon: '⚖️' },
  { id: 'gesetzgeber', name: 'Gesetzgeber', description: 'Du hast ein Gesetzbuch geschrieben.', icon: '📜' },
];

export function getAchievementById(id: string): Achievement | undefined {
  return achievements.find(a => a.id === id);
}
