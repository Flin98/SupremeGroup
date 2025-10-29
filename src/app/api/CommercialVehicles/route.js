import { NextResponse } from "next/server";

const CommercialVehicles = [
  {
    id: 1,
    title: "Complete Body",
    description: "Commercial Complete Body",
    src: "/CommercialCompleteBody.mp4",
    imageSrc: "https://supreme-group.vercel.app/static/media/commercial-body.497c72f2daf47ca41c4fd25f86191b69.svg" 
  },
  {
    id: 2,
      title: "Engine",
    description: "Commercial Engine",
    src: "/CommercialEngine.mp4",
       imageSrc: "https://supreme-group.vercel.app/static/media/commercial-engine.474985507c936157fc7a6daa457d4f04.svg" 
   
  },
  {
    id: 3,
     title: "Cabin",
    description: "Commercial-Cabin",
    src: "/Commercial-Cabin.mp4",
        imageSrc: "https://supreme-group.vercel.app/static/media/commercial-cabin.7981ee5cadcf17dbe57012daa413c584.svg"
  },
];

export async function GET() {
  return NextResponse.json(CommercialVehicles);
}
