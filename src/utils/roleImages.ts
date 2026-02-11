import { roles } from '../data/roles';

// Local image imports – Vite resolves these to hashed URLs at build time
import bauerImg from '../pictures/Medieval Peasant Plowing.png';
import handwerkerImg from '../pictures/Medieval Illuminated Manuscript Codex Manes.png';
import kaufmannImg from '../pictures/Medieval Illuminated Manuscript Codex Manes (1).png';
import ritterImg from '../pictures/Medieval Illuminated Manuscript Codex Manes (2).png';
import moenchImg from '../pictures/Medieval Illuminated Manuscript Codex Manes (3).png';
import adligerImg from '../pictures/Medieval Illuminated Manuscript Codex Manes (4).png';

/** Map from role ID to local image path */
const roleImageMap: Record<string, string> = {
  bauer: bauerImg,
  handwerker: handwerkerImg,
  kaufmann: kaufmannImg,
  ritter: ritterImg,
  moench: moenchImg,
  adliger: adligerImg,
};

export function hydrateRoleImages(root: ParentNode = document) {
  const images = Array.from(root.querySelectorAll<HTMLImageElement>('img[data-role-image]'));
  if (images.length === 0) return;

  const roleMap = new Map(roles.map(role => [role.id, role] as const));
  for (const img of images) {
    const roleId = img.dataset.roleImage || '';
    const role = roleMap.get(roleId);
    if (!role) continue;

    img.alt = role.imageAlt;
    img.src = roleImageMap[roleId] ?? '';
  }
}

