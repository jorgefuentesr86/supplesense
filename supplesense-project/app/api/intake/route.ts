
let LAST_INTAKE: any = null;
export async function POST(req: Request) {
  const body = await req.text();
  try{ LAST_INTAKE = body ? JSON.parse(body) : LAST_INTAKE; return new Response(JSON.stringify({ ok:true, intake: LAST_INTAKE }), { status:200 }); }
  catch(e:any){ return new Response(JSON.stringify({ ok:false, error: e?.message }), { status:400 }); }
}
export function getIntake(){ return LAST_INTAKE; }
