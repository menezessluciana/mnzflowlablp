
import { Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img src="/lovable-uploads/126063ad-8aa0-4949-87a7-18d18bc9b53d.png" alt="MNZ FlowLab Logo" className="h-10" />
        </div>
        <div className="text-center text-muted-foreground mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} MNZ FlowLab. Todos os direitos reservados.</p>
          <p>Transformando processos, impulsionando o futuro.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
