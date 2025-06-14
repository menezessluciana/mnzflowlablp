
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, BrainCircuit, Scaling, AlertTriangle, Clock, Users } from "lucide-react";

const painPoints = [
  {
    icon: <Clock className="h-8 w-8 text-secondary" />,
    title: "Processos Lentos e Repetitivos",
    description: "Sua equipe gasta horas em tarefas que poderiam ser automatizadas, perdendo foco no que realmente importa.",
  },
  {
    icon: <Users className="h-8 w-8 text-secondary" />,
    title: "Equipe Sobrecarregada",
    description: "O volume de trabalho manual está causando burnout e diminuindo a produtividade e a moral da equipe.",
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-secondary" />,
    title: "Erros Humanos Custosos",
    description: "Erros manuais geram retrabalho, custos inesperados e impactam negativamente a satisfação do cliente.",
  },
];

const solutions = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Automação de Processos (RPA)",
    description: "Implementamos robôs que executam tarefas 24/7, com 100% de precisão, liberando sua equipe para a estratégia.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Agentes de IA Personalizados",
    description: "Criamos assistentes virtuais inteligentes para atendimento, análise de dados e tomada de decisão complexa.",
  },
  {
    icon: <Scaling className="h-8 w-8 text-primary" />,
    title: "Escalabilidade e Eficiência",
    description: "Nossas soluções crescem com seu negócio, garantindo que você possa escalar sem aumentar os custos operacionais.",
  },
];

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* ATTENTION */}
        <section className="relative pt-48 pb-32 text-center" style={{ background: 'radial-gradient(ellipse at bottom, var(--background) 0%, #10101a 100%)' }}>
          <div className="container mx-auto px-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Sua empresa está presa em tarefas manuais?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A MNZ FlowLab liberta o potencial da sua equipe com automação inteligente e agentes de IA, transformando seus processos e impulsionando resultados.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Descubra como →
            </Button>
          </div>
        </section>

        {/* INTEREST */}
        <section className="bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">A rotina manual está freando seu crescimento?</h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Muitas empresas enfrentam os mesmos desafios. Veja se algum parece familiar.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {painPoints.map((point, index) => (
                <div key={index} className="bg-background p-8 rounded-lg border border-border transform hover:scale-105 hover:border-primary transition-all duration-300">
                  <div className="mb-4">{point.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DESIRE */}
        <section>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">A solução para o crescimento exponencial</h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Nós não apenas resolvemos problemas, nós criamos oportunidades com tecnologia de ponta.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="bg-card border-border text-center">
                  <CardHeader>
                    <div className="mx-auto bg-muted p-4 rounded-full w-fit mb-4">{solution.icon}</div>
                    <CardTitle>{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ACTION */}
        <section className="bg-primary/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para transformar sua operação?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Não deixe seus concorrentes saírem na frente. Agende uma demonstração gratuita e veja o poder da automação em ação.
            </p>
            <Button size="lg" variant="default" className="text-lg px-10 py-7 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 transition-shadow">
              Fale com um especialista agora
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

