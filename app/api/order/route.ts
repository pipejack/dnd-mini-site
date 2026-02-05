import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    // placeholder: create an order record and return a mock order id
    const order = {
      id: 'order_mock_001',
      status: 'created',
      amount: body?.amount || 4999
    };
    return NextResponse.json({ ok: true, order });
  } catch (err) {
    return NextResponse.json({ ok: false, error: (err as Error).message }, { status: 500 });
  }
}
