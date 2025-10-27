import { NextResponse } from "next/server";

const PassengerVehicles = [
  {
    id: 1,
    title: "complete Body",
    description: "complete Body",
    src: "/completeBody.mp4",
    imageSrc: "/CompleteBody.png" 
  },
  {
    id: 2,
    title: "Front",
    description: "Front",
    src: "/Front.mp4",
    imageSrc: "/Front.png" 
  },
  {
    id: 3,
    title: "Cabin",
    description: "Cabin",
    src: "/Cabin.mp4",
    imageSrc: "/Cabin.png" 
  },
  {
    id: 4,
    title: "Trunk",
    description: "Trunk",
    src: "/Trunk.mp4",
    imageSrc: "/Trunk.png" 
  },
  {
    id: 5,
    title: "Exterior",
    description: "Exterior",
    src: "/Exterior.mp4",
    imageSrc: "/Exterior.png" 
  },
];

export async function GET() {
  return NextResponse.json(PassengerVehicles);
}
