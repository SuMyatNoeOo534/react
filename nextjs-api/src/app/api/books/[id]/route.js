import {NextResponse} from"next/server";
export async function PUT(req,{params}){
    const bookId=params.id;
    const body=await req.json();
    return NextResponse.json({ 
        message:"Book is updated",
        bookId,
        bodyData:body,
    });
}
export async function DELETE(req,{params}){
    const bookId=params.id;
    
    return NextResponse.json({ 
        message:"Book is deleted",
        bookId,
       
    });
}
export async function GET(req,{params}){
    const bookId=params.id;
    const book={
        id:bookId,
       
        title:"Clean Code",
        author:"Robert C",
        published_year:"1999"
    
        
        
    };
    return NextResponse.json(book);

        
}
        
