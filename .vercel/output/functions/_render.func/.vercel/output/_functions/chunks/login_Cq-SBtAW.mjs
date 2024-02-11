export { renderers } from '../renderers.mjs';

const page = () => import('./pages/login_vSNV_RdC.mjs').then(n => n.l);

export { page };
