import { NextResponse } from "next/server";
import NoteModel from "../lib/NoteModel";


export async function GET() {
    try {
        let notes = await NoteModel.find();
        return NextResponse.json({success:true , notes});
    } catch(error) {
        return NextResponse.json({success:false , message:error.message});
    }
}

export async function POST(req , res) {
    try {
        let noteData = await req.json();
        let Note = new NoteModel(noteData);
        await Note.save();
        return NextResponse.json({success:true , Note});
    } catch(error) {
        return NextResponse.json({success:false , message:error.message});
    }
}

export async function PUT(req , res) {
    try {
        let noteData = await req.json();
        let Note = await NoteModel.findOne({_id:noteData._id});
        Note.title = noteData.title;
        Note.tagline = noteData.tagline;
        Note.body = noteData.body;
        await Note.save();
        return NextResponse.json({success:true , Note});
    } catch(error) {
        return NextResponse.json({success:false , message:error.message});
    }
}