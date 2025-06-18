import { NextResponse } from "next/server";
const StudentData=[
    {
        id:1,
        name:"Su Su",
        age:17,
        address:"Hlaing",
        major:"Computer Science"
    },
    {
        id:1,
        name:"Su Myat",
        age:17,
        address:"Hlaing",
        major:"Computer Science"
    },
    {
        id:1,
        name:"Noe",
        age:17,
        address:"Hlaing",
        major:"Computer Science"
    },
];
export async function GET(){
    return NextResponse.json(StudentData);
}
export async function POST(req){
    const body=await req.json();
    
    return NextResponse.json({
        message:"Student is successfullycreated",
        bodyData:body,
    });
    bodyData:body;
}
    
