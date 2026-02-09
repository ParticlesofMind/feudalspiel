import { Role } from '../types';

export const roles: Role[] = [
  {
    id: 'bauer',
    name: 'Bauer',
    description: 'Du arbeitest auf dem Land und versorgst die Gesellschaft mit Nahrung. Das Leben ist hart, aber ehrlich.',
    longDescription: 'Als Bauer bist du das Fundament der mittelalterlichen Gesellschaft. Du bearbeitest das Land deines Herrn, zahlst den Zehnten und lebst im Rhythmus der Jahreszeiten. Dein Alltag ist geprägt von Feldarbeit, Ernte und den Pflichten gegenüber dem Grundherrn. Trotz der schweren Arbeit findest du Freude in den Festen und der Gemeinschaft deines Dorfes.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_mars.jpg/300px-Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_mars.jpg',
    stats: { ansehen: 1, wohlstand: 1, wissen: 1, geschick: 3, glaube: 3 },
    startingItems: ['Pflug', 'Sichel', 'Leinentuch'],
    socialClass: 'Dritter Stand'
  },
  {
    id: 'handwerker',
    name: 'Handwerker',
    description: 'Du bist Meister deines Fachs und Mitglied einer Zunft. In der Stadt genießt du Ansehen und Freiheit.',
    longDescription: 'Als Handwerker lebst du in einer blühenden Stadt des Heiligen Römischen Reiches. Du hast deine Lehrzeit hinter dir, bist Geselle geworden und strebst nach der Meisterwürde. Deine Zunft regelt dein Berufsleben, schützt dich aber auch. Du stellst Waren her, die in der ganzen Region geschätzt werden.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Mendel_I_100_v.jpg/300px-Mendel_I_100_v.jpg',
    stats: { ansehen: 2, wohlstand: 2, wissen: 2, geschick: 4, glaube: 2 },
    startingItems: ['Werkzeug', 'Schürze', 'Zunftzeichen'],
    socialClass: 'Bürger'
  },
  {
    id: 'kaufmann',
    name: 'Kaufmann',
    description: 'Du reist durch die Lande, handelst Waren und kennst die Wege des Geldes. Reichtum und Risiko gehen Hand in Hand.',
    longDescription: 'Als Kaufmann bist du ein wichtiger Teil der wachsenden Wirtschaft. Du reist zwischen den Städten, besuchst Märkte und Messen und handelst mit Waren aus nah und fern. Du kennst den Wert von Gewürzen, Stoffen und Metallen. Dein Wohlstand wächst, aber die Straßen sind gefährlich und die Konkurrenz ist groß.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Merchant_of_Venice.jpg/300px-Merchant_of_Venice.jpg',
    stats: { ansehen: 2, wohlstand: 4, wissen: 3, geschick: 2, glaube: 1 },
    startingItems: ['Handelsbuch', 'Münzbeutel', 'Reisemantel'],
    socialClass: 'Bürger'
  },
  {
    id: 'ritter',
    name: 'Ritter',
    description: 'Du bist ein Krieger im Dienste deines Lehnsherrn. Ehre, Tapferkeit und Treue bestimmen dein Leben.',
    longDescription: 'Als Ritter bist du dem Adel nahe und trägst das Schwert im Dienste deines Lehnsherrn. Du hast als Knappe gelernt, zu kämpfen und dich ritterlich zu verhalten. Turniere, Feldzüge und die Verwaltung deines Lehens bestimmen deinen Alltag. Der Ehrenkodex der Ritterschaft ist dein Leitfaden.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Codex_Manesse_Hartmann_von_Aue.jpg/300px-Codex_Manesse_Hartmann_von_Aue.jpg',
    stats: { ansehen: 4, wohlstand: 3, wissen: 2, geschick: 3, glaube: 2 },
    startingItems: ['Schwert', 'Schild', 'Rüstung'],
    socialClass: 'Niederer Adel'
  },
  {
    id: 'moench',
    name: 'Mönch / Nonne',
    description: 'Du lebst im Kloster, betest, schreibst und bewahrst das Wissen der Welt. Dein Leben gehört Gott.',
    longDescription: 'Als Mönch oder Nonne hast du dich dem geistlichen Leben gewidmet. Im Kloster folgst du einer strengen Tagesordnung: Gebet, Arbeit und Studium. Du kopierst Bücher, pflegst den Kräutergarten und hilfst den Armen. Das Kloster ist ein Ort des Wissens und des Friedens, aber auch der strengen Regeln.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Escribano.jpg/300px-Escribano.jpg',
    stats: { ansehen: 2, wohlstand: 1, wissen: 5, geschick: 1, glaube: 5 },
    startingItems: ['Bibel', 'Federkiel', 'Kutte'],
    socialClass: 'Klerus'
  },
  {
    id: 'adliger',
    name: 'Adliger',
    description: 'Du herrschst über Land und Leute. Macht und Verantwortung liegen in deinen Händen.',
    longDescription: 'Als Adliger bist du ein mächtiger Herr in deinem Gebiet. Du verwaltest deine Ländereien, sprichst Recht und führst deine Untertanen. Politik, Bündnisse und manchmal auch Konflikte bestimmen dein Leben. Du lebst auf einer Burg und genießt Privilegien, trägst aber auch große Verantwortung.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Frederick_III%2C_Holy_Roman_Emperor_-_Hans_Burgkmair_d._%C3%84._001.jpg/300px-Frederick_III%2C_Holy_Roman_Emperor_-_Hans_Burgkmair_d._%C3%84._001.jpg',
    stats: { ansehen: 5, wohlstand: 4, wissen: 3, geschick: 1, glaube: 2 },
    startingItems: ['Siegelring', 'Urkunde', 'Hermelinmantel'],
    socialClass: 'Hoher Adel'
  }
];

export function getRoleById(id: string): Role | undefined {
  return roles.find(r => r.id === id);
}
