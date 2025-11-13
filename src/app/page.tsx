"use client";

import { Globe, MessageCircle, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const languages = [
    { name: "Inglês", flag: "🇺🇸", learners: "2.5M" },
    { name: "Espanhol", flag: "🇪🇸", learners: "1.8M" },
    { name: "Francês", flag: "🇫🇷", learners: "1.2M" },
    { name: "Alemão", flag: "🇩🇪", learners: "980K" },
    { name: "Italiano", flag: "🇮🇹", learners: "750K" },
    { name: "Japonês", flag: "🇯🇵", learners: "1.5M" },
    { name: "Coreano", flag: "🇰🇷", learners: "890K" },
    { name: "Mandarim", flag: "🇨🇳", learners: "1.1M" },
  ];

  const features = [
    {
      icon: MessageCircle,
      title: "Conversas Reais",
      description: "Pratique com diálogos do dia a dia e situações reais",
    },
    {
      icon: Sparkles,
      title: "IA Personalizada",
      description: "Aprenda no seu ritmo com feedback inteligente",
    },
    {
      icon: TrendingUp,
      title: "Progresso Visível",
      description: "Acompanhe sua evolução com métricas detalhadas",
    },
    {
      icon: Users,
      title: "Comunidade Global",
      description: "Conecte-se com milhões de estudantes pelo mundo",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FB]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#1E304F] flex items-center justify-center shadow-md">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-[#1E304F]">
                LinguaFlow
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#idiomas" className="text-sm font-medium text-[#6E7581] hover:text-[#3A76D1] transition-colors">
                Idiomas
              </a>
              <a href="#recursos" className="text-sm font-medium text-[#6E7581] hover:text-[#3A76D1] transition-colors">
                Recursos
              </a>
              <a href="#sobre" className="text-sm font-medium text-[#6E7581] hover:text-[#3A76D1] transition-colors">
                Sobre
              </a>
            </nav>
            <div className="flex items-center gap-2 sm:gap-4">
              <Button variant="ghost" size="sm" className="text-sm text-[#6E7581] hover:text-[#1E304F]">
                Entrar
              </Button>
              <Button size="sm" className="bg-[#1E304F] hover:bg-[#2a4268] text-white text-sm shadow-md">
                Começar Grátis
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#42D7A1]/10 text-[#1E304F] text-sm font-medium border border-[#42D7A1]/20">
            <Zap className="w-4 h-4 text-[#42D7A1]" />
            Mais de 5 milhões de estudantes
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-[#1C1C1E]">
            Aprenda idiomas de forma{" "}
            <span className="text-[#3A76D1]">
              natural e divertida
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-[#6E7581] max-w-2xl mx-auto leading-relaxed">
            Domine novos idiomas através de conversas reais, exercícios interativos e feedback personalizado por IA
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto bg-[#1E304F] hover:bg-[#2a4268] text-white text-lg px-8 py-6 shadow-lg">
              Começar Agora
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border-[#3A76D1] text-[#3A76D1] hover:bg-[#3A76D1]/5">
              Ver Demonstração
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-8 text-sm text-[#6E7581]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#42D7A1]"></div>
              Grátis para começar
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#42D7A1]"></div>
              Sem cartão de crédito
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#42D7A1]"></div>
              Cancele quando quiser
            </div>
          </div>
        </div>
      </section>

      {/* Languages Grid */}
      <section id="idiomas" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#1C1C1E]">
            Escolha seu próximo idioma
          </h2>
          <p className="text-lg text-[#6E7581]">
            Mais de 30 idiomas disponíveis para você dominar
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {languages.map((language, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 bg-white border border-gray-200 hover:border-[#3A76D1]"
            >
              <div className="text-center space-y-3">
                <div className="text-5xl">{language.flag}</div>
                <h3 className="font-semibold text-lg text-[#1C1C1E]">{language.name}</h3>
                <p className="text-sm text-[#6E7581]">
                  {language.learners} estudantes
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#1C1C1E]">
            Por que escolher o LinguaFlow?
          </h2>
          <p className="text-lg text-[#6E7581]">
            Tecnologia de ponta para acelerar seu aprendizado
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 bg-white border border-gray-200"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#3A76D1] flex items-center justify-center shadow-md">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-[#1C1C1E]">{feature.title}</h3>
                <p className="text-[#6E7581] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <Card className="bg-[#1E304F] text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">5M+</div>
              <div className="text-white/80">Estudantes Ativos</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">30+</div>
              <div className="text-white/80">Idiomas Disponíveis</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">95%</div>
              <div className="text-white/80">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Suporte Disponível</div>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1E]">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-lg sm:text-xl text-[#6E7581] leading-relaxed">
            Junte-se a milhões de pessoas que já transformaram suas vidas aprendendo novos idiomas
          </p>
          <Button size="lg" className="bg-[#1E304F] hover:bg-[#2a4268] text-white text-lg px-8 py-6 shadow-lg">
            Começar Gratuitamente
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-12 sm:mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-[#1E304F] flex items-center justify-center shadow-md">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-[#1E304F]">
                  LinguaFlow
                </span>
              </div>
              <p className="text-sm text-[#6E7581] leading-relaxed">
                Aprenda idiomas de forma natural e divertida com tecnologia de IA
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-[#1C1C1E]">Produto</h4>
              <ul className="space-y-2 text-sm text-[#6E7581]">
                <li><a href="#" className="hover:text-[#3A76D1] transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-[#3A76D1] transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-[#3A76D1] transition-colors">Idiomas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-[#1C1C1E]">Empresa</h4>
              <ul className="space-y-2 text-sm text-[#6E7581]">
                <li><a href="#" className="hover:text-[#3A76D1] transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-[#3A76D1] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#3A76D1] transition-colors">Carreiras</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-[#1C1C1E]">Suporte</h4>
              <ul className="space-y-2 text-sm text-[#6E7581]">
                <li><a href="#" className="hover:text-[#3A76D1] transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-[#3A76D1] transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-[#3A76D1] transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-[#6E7581]">
            © 2024 LinguaFlow. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
