import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export const ContactForm: FC = () => {
  return (
    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
      <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
      <p className="text-white/60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iusto enim
        autem deserunt vel consectetur quia sapiente corrupti
      </p>
      {/* input */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input type="text" name="firstname" placeholder="First Name" />
        <Input type="text" name="lastname" placeholder="Last Name" />
        <Input type="email" name="email" placeholder="Email address" />
        <Input type="number" name="phone" placeholder="Phone number" />
      </div>
      {/* select */}
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select a service</SelectLabel>
            <SelectItem value="web">Web Development</SelectItem>
            <SelectItem value="mob">Mobile Development</SelectItem>
            <SelectItem value="seo">SEO Optimization</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {/* textarea */}
      <Textarea className="h-[200px]" placeholder="Type your message here" />
      {/* btn */}
      <Button size={"md"} className="max-w-40">
        Send message
      </Button>
    </form>
  );
};
