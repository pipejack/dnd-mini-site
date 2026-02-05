import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    // placeholder: would call Trellis to convert images -> 3D model
    // Return a mock job id and a turntable preview URL
    const job = {
      id: 'mock-job-123',
      status: 'completed',
      turntable: '/figures/fig3.svg'
    };
    return NextResponse.json({ ok: true, job });
  } catch (err) {
    return NextResponse.json({ ok: false, error: (err as Error).message }, { status: 500 });
  }
}
