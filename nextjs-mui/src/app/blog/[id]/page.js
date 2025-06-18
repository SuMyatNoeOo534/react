"use client";
import {Box,Typography} from "@mui/material";
import { useParams } from "next/navigation";
export default function BlogDetail(){
    const params=useParams();
    console.log('Blog ID:',params.id)
    const blogID=params.id;
    return(
        <Box>
            <Typography>Blog:{blogID}</Typography>
        </Box>
    );
}