import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun
            className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${theme === "light" ? "dark:rotate-90 dark:scale-0" : "dark:rotate-0 dark:scale-100"}`}
          />

          <Moon
            className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${theme === "dark" ? "dark:text-gray-300 dark:bg-gray-800" : "text-gray-700 bg-white"}`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg mt-1 w-36"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        >
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
