import { NextResponse } from "next/server";


export async function GET() {
    try {
        return NextResponse.json({success:true});
    } catch(error) {
        return NextResponse.json({success:false , message:error.message});
    }
}

export async function POST(req , res) {
    try {
        return NextResponse.json({success:true});
    } catch(error) {
        return NextResponse.json({success:false , message:error.message});
    }
}