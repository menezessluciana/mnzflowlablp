import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, BrainCircuit, Scaling, AlertTriangle, Clock, Users, X } from "lucide-react";

const painPoints = [
  {
    icon: <Clock className="h-8 w-8 text-secondary" />,
    title: "Clientes abandonando por demora no atendimento",
    description: "Cada minuto de atraso na resposta é dinheiro perdido. Leads quentes esfriam rapidamente quando não há resposta imediata.",
  },
  {
    icon: <Users className="h-8 w-8 text-secondary" />,
    title: "Atendentes repetindo as mesmas perguntas 1000x",
    description: "Sua equipe está sobrecarregada respondendo sempre as mesmas dúvidas básicas, perdendo tempo que poderia ser usado estrategicamente.",
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-secondary" />,
    title: "Impossível escalar atendimento sem explodir custos",
    description: "Contratar mais pessoas significa mais custos fixos. E ainda assim, perdendo vendas fora do horário comercial.",
  },
];

const solutions = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Resposta instantânea 24/7",
    description: "Agentes de IA que respondem seus leads em segundos, qualquer hora do dia, garantindo que nenhuma oportunidade seja perdida.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Qualificação automática de leads",
    description: "IA que identifica automaticamente leads qualificados e direciona apenas os melhores prospects para sua equipe comercial.",
  },
  {
    icon: <Scaling className="h-8 w-8 text-primary" />,
    title: "Escala infinita sem contratar",
    description: "Atenda milhares de leads simultaneamente sem aumentar custos fixos. ROI que se paga em dias, não meses.",
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
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-destructive">Tempo de resposta é crucial</span><br />
              <span className="text-foreground">Cada minuto perdido é oportunidade perdida</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-semibold max-w-4xl mx-auto mb-4">
              O custo da inação aumenta a cada lead não respondido. É hora de agir.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A MNZ FlowLab transforma leads perdidos em oportunidades de negócio com agentes de IA que trabalham 24/7 para você.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Pare de perder dinheiro →
            </Button>
          </div>
        </section>

        {/* INTEREST */}
        <section className="bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <X className="h-8 w-8 text-destructive mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-destructive">Os problemas que estão te custando caro:</h2>
              </div>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Cada um desses problemas representa dinheiro saindo do seu bolso todos os dias.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {painPoints.map((point, index) => (
                <div key={index} className="bg-background p-8 rounded-lg border border-border transform hover:scale-105 hover:border-destructive transition-all duration-300">
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
              <div className="flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-secondary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">Agora imagine isso:</h2>
              </div>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Transforme cada lead em oportunidade real com tecnologia que trabalha enquanto você dorme.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="bg-card border-border text-center hover:border-secondary transition-colors">
                  <CardHeader>
                    <div className="mx-auto bg-muted p-4 rounded-full w-fit mb-4">{solution.icon}</div>
                    <CardTitle className="text-secondary">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <div className="bg-secondary/10 border border-secondary rounded-lg p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                  Cada lead vira oportunidade real • Concorrência chorando no travesseiro
                </h3>
                <p className="text-lg text-muted-foreground">
                  Enquanto seus concorrentes perdem leads, você está fechando vendas 24/7. ROI que se paga em dias, não meses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACTION */}
        <section className="bg-primary/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pare de perder dinheiro hoje!</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Agende uma demonstração gratuita para realizarmos um diagnóstico e encontrarmos a solução ideal para o seu negócio.
            </p>
            <Button size="lg" variant="default" className="text-lg px-10 py-7 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 transition-shadow">
              Quero parar de perder leads agora
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
