import { Scenario } from '../types';
import { bauerScenarios } from './scenarios-bauer';
import { handwerkerScenarios } from './scenarios-handwerker';
import { kaufmannScenarios } from './scenarios-kaufmann';
import { ritterScenarios } from './scenarios-ritter';
import { moenchScenarios } from './scenarios-moench';
import { adligerScenarios } from './scenarios-adliger';

const allScenarios: Scenario[] = [
  ...bauerScenarios,
  ...handwerkerScenarios,
  ...kaufmannScenarios,
  ...ritterScenarios,
  ...moenchScenarios,
  ...adligerScenarios,
];

export function getScenariosForRole(roleId: string): Scenario[] {
  return allScenarios.filter(s => s.roleId === roleId).sort((a, b) => a.chapter - b.chapter);
}

export function getScenario(roleId: string, chapter: number): Scenario | undefined {
  return allScenarios.find(s => s.roleId === roleId && s.chapter === chapter);
}

export function getTotalChapters(roleId: string): number {
  return allScenarios.filter(s => s.roleId === roleId).length;
}
