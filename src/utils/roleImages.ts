import { roles } from '../data/roles';

// Local image imports – Vite resolves these to hashed URLs at build time
import moenchImg from '../pictures/mönch.png';
import ritterImg from '../pictures/ritter.png';
import handwerkerImg from '../pictures/handwerker.png';
import bauerImg from '../pictures/bauer.png';
import adligerImg from '../pictures/könig.png';
import kaufmannImg from '../pictures/händler.png';

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

