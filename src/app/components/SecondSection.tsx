import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import square from "../../../public/square.svg";
import canva from "../../../public/tech-icons/canva.svg";
import chatgpt from "../../../public/tech-icons/chatgpt.svg";
import framer from "../../../public/tech-icons/framer.svg";
import github from "../../../public/tech-icons/github.svg";
import slack from "../../../public/tech-icons/slack.svg";
import insta from "../../../public/insta.svg";
import linkedin from "../../../public/linkedin.svg";
import shadcn from "../../../public/tech-icons/shadcn-ui-seeklogo.svg"
import supabase from "../../../public/tech-icons/supabase-seeklogo.svg"
import sanity from "../../../public/tech-icons/sanity-seeklogo.svg"
import { Button } from "@/components/ui/button";

const icons = [canva, chatgpt, framer, github, slack, shadcn, sanity, supabase];

const socialMedia = [
  {
    id: 1,
    icon: insta,
    name: "Instagram",
    username: "@aizaz_rajput",
    link: "https://www.instagram.com/aizaz_rajput/",
  },
  {
    id: 2,
    icon: github,
    name: "Github",
    username: "@AizazNaeem4433",
    link: "https://github.com/AizazNaeem4433",
  },
  {
    id: 3,
    icon: linkedin,
    name: "Linkedin",
    username: "@aizaz-naeem",
    link: "https://www.linkedin.com/in/aizaz-naeem-bba5ba276/",
  },
];

export function SectionTwo() {
  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative col-span-1">
        <Image
          src={square}
          alt="square"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-100 border-none">
          <CardHeader>
            <CardTitle>Explore my stack</CardTitle>
            <CardDescription>Check out the tools i use daily</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {icons.map((item, index) => (
              <Image key={index} src={item} alt="Icon" className="w-16 h-16" />
            ))}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none"
            >
              <Image src={item.icon} alt="Icon" className="w-16 h-16" />
              <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
              <p className="text-muted-foreground">{item.username}</p>
              <Button className="mt-4" size="sm" asChild>
                <a href={item.link}>Follow</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
