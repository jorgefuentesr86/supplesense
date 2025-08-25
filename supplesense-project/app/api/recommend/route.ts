
import { recommend } from "@/lib/rules";
import { getIntake } from "@/app/api/intake/route";
export async function POST(req: Request) {
  const intake = getIntake();
  const rec = recommend(intake ?? {});
  return new Response(JSON.stringify(rec), { status: 200 });
}
