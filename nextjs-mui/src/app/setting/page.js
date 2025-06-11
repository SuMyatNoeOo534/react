"use client";
import LinkButton from "@/components/LinkButton";
import {Button,Typography} from "@mui/material";
import Link from "next/link";
export  default function Setting(){
    return(
        <div>
            <Typography variant="h4">Profile Page</Typography>
            <Link href="/profile" passHref>
            <Button variant="contained">Go to Profile</Button>
            </Link>
            <Link href="/" passHref>
            <Button variant="contained">Go to Home</Button>
            </Link>
            <LinkButton href="/profile">
            Go to Profile by LinkButton Component
            </LinkButton>
        </div>

);
}