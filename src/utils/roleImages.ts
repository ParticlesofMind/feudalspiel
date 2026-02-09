import { roles } from '../data/roles';
import { getWikimediaImageUrl } from './wikimedia';

export async function hydrateRoleImages(root: ParentNode = document) {
  const images = Array.from(root.querySelectorAll<HTMLImageElement>('img[data-role-image]'));
  if (images.length === 0) return;

  const roleMap = new Map(roles.map(role => [role.id, role] as const));
  await Promise.all(images.map(async img => {
    const roleId = img.dataset.roleImage || '';
    const role = roleMap.get(roleId);
    if (!role) return;

    img.alt = role.imageAlt;
    const width = Number(img.dataset.imageWidth || 640);
    img.src = getWikimediaImageUrl(role.imageFileName, width);
  }));
}
