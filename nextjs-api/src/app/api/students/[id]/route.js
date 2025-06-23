import { NextResponse } from "next/server";
import * as yup from "yup";

//update student api
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  fatherName: yup.string().required("fatherName is required"),
  address: yup.string().required("address is required"),
  age: yup.number().required("age is required"),
  major: yup.string().required("major is required"),
});
export async function PUT(req, { params }) {
  try {
    const studentId = params.id;
    const body = await req.json();
    await schema.validate(body, { abortEarly: false });
    return NextResponse.json({
      message: "Student is successfully updated!",
      studentId,
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
//delete student api
export async function DELETE(req, { params }) {
  const studentId = params.id;
  return NextResponse.json({
    message: "Student is successfully deleted!",
    studentId,
  });
}
//get student detail api
export async function GET(req, { params }) {
  const studentId = params.id;
  const student = {
    id: studentId,
    name: "Su Su",
    age: 18,
    fatherName: "U Maung",
    adress: "Hlaing",
    major: "Computer Science",
  };

  return NextResponse.json(student);
}