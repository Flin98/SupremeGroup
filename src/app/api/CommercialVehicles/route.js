import { NextResponse } from "next/server";

const CommercialVehicles = [
  {
    id: 1,
    title: "Complete Body",
    description: "Commercial Complete Body",
    src: "/CommercialCompleteBody.mp4",
    imageSrc: "/CompleteBody.png" 
  },
  {
    id: 2,
      title: "Engine",
    description: "Commercial Engine",
    src: "/CommercialEngine.mp4",
       imageSrc: "/Engine.png" 
   
  },
  {
    id: 3,
     title: "Cabin",
    description: "Commercial-Cabin",
    src: "/Commercial-Cabin.mp4",
        imageSrc: "/Cabin.png"
  },
];

export async function GET() {
  return NextResponse.json(CommercialVehicles);
}
