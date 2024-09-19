import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.FormData();
  console.log(data);
  try{

    return NextResponse.json("imagen subida");
  }catch(error){
    console.log(error)
  }
  //return new response("hola ")
}
