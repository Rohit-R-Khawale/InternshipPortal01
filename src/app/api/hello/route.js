export async function GET() {
  return Response.json({ message: "Hello from backend!" });
}

export async function POST(req) {
  const body = await req.json();
  return Response.json({ received: body });
}
