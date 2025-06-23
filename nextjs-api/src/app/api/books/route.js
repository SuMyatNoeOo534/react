import { NextResponse } from "next/server";
import * as yup from 'yup';
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
const schema=yup.object().shape({
    title:yup.string().required("Title is required"),
    author:yup.string().required("Author is required"),
    published_year:yup.number().required("Published_year is required"),
    
});
export async function POST(req){
    try{
        const body=await req.json();
    await schema.validate(body,{abortEarly:false});
    return NextResponse.json({
        message:"Book is successfullycreated",
        bodyData:body,
    });
    
    
    
}catch(error){
//   return NextResponse.json({message:"Internal server error"},
//     {
//         status:500,
//     }
// );
if(error.name==="ValidationError"){
    return NextResponse.json(
        {
            message:"Validation failed",
            errors:error.inner.map((e)=>({
                path:e.path,
                message:e.message,
            })),

            },
            {status:400}
    );
    
}
return NextResponse.json(
    {
        message:"Unexpected error",
        error:error.message,
    },
    {status:500}
);
}
}   

// export async function GET(){
//     return NextResponse.json(BookData);
// }
// export async function POST(req){
//     //const body=await req.json();
    
//     return NextResponse.json({
//         message:"Book is successfully created",
//         // bodyData:body,
//     });
    
// }
    
