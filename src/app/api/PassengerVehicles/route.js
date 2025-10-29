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
    imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACMCAMAAAB23NoyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAL0UExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7AI5DgAAAD7dFJOUwD+9goE/fsCID/xAcdv5/cD9Qi/4+hV4V/X7xj6+AnfXfzuGVqbFfnt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" 
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
