import { NextResponse } from "next/server";

export async function GET(req){
   return new NextResponse('prueba api')
}