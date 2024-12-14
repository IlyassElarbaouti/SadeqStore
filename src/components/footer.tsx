import * as React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {  Facebook, Instagram } from "lucide-react";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export function Footer() {
  return (
    <footer className="bg-stone-900 text-gray-50">
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Image
            className="w-20 md:w-28 invert "
            src={"/logo.png"}
            alt={"logo"}
            width={2000}
            height={500}
          />
          <p className="mt-4 text-sm text-stone-200 max-w-md mx-auto">
            the best market for Digital Products, IPTV and much more.{" "}
          </p>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-xs text-stone-300">
            &copy; {new Date().getFullYear()} Store Sadeq, Inc. All rights
            reserved.
          </p>
          <div className="flex mt-4 items-center space-x-6 sm:mt-0">
            {[
              { Icon: TelegramIcon, label: "Telegram",link:"https://web.telegram.org/k/#@Iptvsadeq" },
              { Icon: Facebook, label: "Facebook",link:"https://www.facebook.com/profile.php?id=61570043319981" },
              { Icon: Instagram, label: "Instagram",link:"https://www.instagram.com/sadeqstore.1/" },
              { Icon: WhatsAppIcon, label: "Whatsapp",link:"https://wa.me/+212768060430" },
            ].map(({ Icon, label, link }) => (
              <a
                key={label}
                target="_blank"
                href={link}
                className="text-stone-300 hover:text-foreground"
              >
                <span className="sr-only">{label}</span>
                <Icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
