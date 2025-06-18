import { NextResponse } from "next/server";
const BookData=[
    {
        id:1,
        title:"Clean Code",
        author:"Robert C",
        published_year:"1999",
        
    },
    {
        id:2,
        title:"You don't know JS",
        author:"Kyle Simpson",
        published_year:"1998",
        
    },
    {
        id:3,
        title:"Python Crash  Course",
        author:"Eric Matthes",
        published_year:"1998",
        
        
    },
];
export async function GET(){
    return NextResponse.json(BookData);
}
export async function POST(req){
    //const body=await req.json();
    
    return NextResponse.json({
        message:"Book is successfully created",
        // bodyData:body,
    });
    
}
    
