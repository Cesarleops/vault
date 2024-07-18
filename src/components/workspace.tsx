import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";

export const Workspace = () => {
  const params = useParams();
  const [showMenu, setShowMenu] = useState(false);
  const [content, setContent] = useState("");

  console.log("e", content);
  const handleInput = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);

    const cursorPosition = e.target.selectionStart;
    const lastChar = newContent[cursorPosition - 1];

    if (lastChar === "/") {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, []);
  return (
    <section className="w-full">
      <textarea
        className="bg-[#20192b]  w-full h-full p-10 text-white"
        onChange={handleInput}
        value={content}
      ></textarea>
      {showMenu && (
        <Command className="absolute top-20 right-10 w-[30%] h-[30%]">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      )}
    </section>
  );
};
