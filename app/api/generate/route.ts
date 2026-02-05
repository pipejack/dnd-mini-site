import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    // placeholder: call Grok (user will provide API keys later)
    // For now return mock image URLs from /figures
    const images = [
      '/figures/fig1.svg',
      '/figures/fig2.svg',
      '/figures/fpic1.png',
      '/figures/fpic2.png'
    ];

    return NextResponse.json({ ok: true, images });
  } catch (err) {
    return NextResponse.json({ ok: false, error: (err as Error).message }, { status: 500 });
  }
}
