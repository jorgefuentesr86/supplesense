
export async function POST(req: Request) {
  const body = await req.text();
  return new Response(JSON.stringify({ ok: true, received: body ? JSON.parse(body) : {} }), { status: 200 });
}
