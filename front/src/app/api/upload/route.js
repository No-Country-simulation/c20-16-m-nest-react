import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.FormData();
  console.log(data);
  //return NextResponse.json("imagen subida");
  return new response("hola ")
}
