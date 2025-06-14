
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <img src="/lovable-uploads/126063ad-8aa0-4949-87a7-18d18bc9b53d.png" alt="MNZ FlowLab Logo" className="h-12" />
        <Button>Agendar Consulta</Button>
      </div>
    </header>
  );
}
