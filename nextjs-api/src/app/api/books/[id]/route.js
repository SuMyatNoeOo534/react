import { NextResponse } from "next/server";
import * as yup from "yup";

//Update book api
const schema = yup.object().shape({
  title: yup.string().required("title is required"),
  author: yup.string().required("author is required"),
  published_year: yup.number().required("year is required"),
});
export async function PUT(req, { params }) {
  try {
    const body = await req.json();
    await schema.validate(body, { abortEarly: false });
    return NextResponse.json({
      message: "Book is successfully Updated!",
      bodyData: body,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return NextResponse.json(
        {
          message: "Validation Failed",
          errors: error.inner.map((e) => ({
            path: e.path,
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Unexpected error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const bookId = params.id;
  return NextResponse.json({
    message: "Book is successfully deleted!",
    bookId,
  });
}

export async function GET(req, { params }) {
  const bookId = params.id;
  const book = {
    id: bookId,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    published_year: "2000",
  };

  return NextResponse.json(book);
}