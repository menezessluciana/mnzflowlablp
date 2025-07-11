
import { Button } from "@/components/ui/button";

export default function Header() {
  const whatsappNumber = "5519997991494";
  const whatsappMessage = "Olá! Gostaria de conhecer as soluções de IA da MNZ FlowLab.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <img src="/lovable-uploads/126063ad-8aa0-4949-87a7-18d18bc9b53d.png" alt="MNZ FlowLab Logo" className="h-12" />
        <Button asChild>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Entrar em contato
          </a>
        </Button>
      </div>
    </header>
  );
}
