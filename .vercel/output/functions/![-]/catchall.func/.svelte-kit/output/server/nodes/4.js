import * as server from '../entries/pages/blog/_id_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.Gwa80QsQ.js","_app/immutable/chunks/CxxUCMGk.js","_app/immutable/chunks/LN-LT7kK.js","_app/immutable/chunks/D3-wZl6Y.js","_app/immutable/chunks/Esja4Xnq.js","_app/immutable/chunks/CKGn1Wx3.js","_app/immutable/chunks/C1nuMI0n.js"];
export const stylesheets = [];
export const fonts = [];
