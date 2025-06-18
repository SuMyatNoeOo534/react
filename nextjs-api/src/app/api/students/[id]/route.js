import {NextResponse} from"next/server";
export async function PUT(req,{params}){
    const studentId=params.id;
    const body=await req.json();
    return NextResponse.json({ 
        message:"Student is updated",
        studentId,
        bodyData:body,
    });
}
export async function GET(req,{params}){
    const studentId=params.id;
    const student={
        id:studentId,
        name:"Su Su",
        age:17,
        gender:"female",
        fatherName:"U Maung",
        address:"Hledan",
        major:"Computer Science",
    };
    return NextResponse.json(student);

        
}