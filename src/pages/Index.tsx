import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 300) {
        setShowDialog(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div 
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/c9593933-181c-4a30-a494-b032f96510e0/files/a2b649b1-cbe7-4c3e-a052-c2ef92bac7f5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <header className="relative z-10 container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold glow-text">
            Charing Command
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" className="hover-glow" asChild>
              <a href="https://t.me/charingcmd" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" className="mr-2" size={20} />
                Telegram
              </a>
            </Button>
            <Button className="hover-glow bg-primary">
              Заказать сайт
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="animate-fade-in">
          <h1 className="text-7xl font-bold mb-6 glow-text">
            Создаём веб-сайты
          </h1>
          <p className="text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Быстро. Качественно. Профессионально.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 hover-glow bg-primary" asChild>
              <a href="https://t.me/charingcmd" target="_blank" rel="noopener noreferrer">
                <Icon name="Zap" className="mr-2" size={24} />
                Начать проект
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 hover-glow" asChild>
              <a href="https://warzonepolitik.wuaze.com" target="_blank" rel="noopener noreferrer">
                <Icon name="ExternalLink" className="mr-2" size={24} />
                Пример работы
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 hover-glow animate-slide-in-left">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Icon name="Rocket" size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Быстро</h3>
            <p className="text-muted-foreground">
              Создаём сайты за считанные часы. Не дни, не недели — часы.
            </p>
          </Card>

          <Card className="p-8 bg-card/80 backdrop-blur-sm border-secondary/20 hover-glow animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
              <Icon name="Sparkles" size={32} className="text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Качественно</h3>
            <p className="text-muted-foreground">
              Современный дизайн, чистый код, адаптивная вёрстка.
            </p>
          </Card>

          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 hover-glow animate-slide-in-right">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Icon name="Wallet" size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Доступно</h3>
            <p className="text-muted-foreground">
              Цены от 90₽. Без переплат и скрытых комиссий.
            </p>
          </Card>
        </div>
      </section>

      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${showDialog ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center mb-12 glow-text">
            Как это работает?
          </h2>
          
          <div className="space-y-6">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-secondary/30 glow-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                  <Icon name="MessageSquare" size={24} className="text-secondary" />
                </div>
                <div>
                  <p className="text-xl font-semibold mb-2">Вы пишете:</p>
                  <p className="text-2xl text-secondary">"Создайте мне веб-сайт!"</p>
                </div>
              </div>
            </Card>

            <div className="flex justify-center">
              <div className="w-1 h-12 bg-gradient-to-b from-secondary via-primary to-secondary animate-pulse-glow" />
            </div>

            <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/30 glow-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-xl font-semibold mb-2">Вы переводите:</p>
                  <p className="text-2xl text-primary">Сумму в зависимости от заказа</p>
                </div>
              </div>
            </Card>

            <div className="flex justify-center">
              <div className="w-1 h-12 bg-gradient-to-b from-primary via-secondary to-primary animate-pulse-glow" />
            </div>

            <Card className="p-8 bg-card/80 backdrop-blur-sm border-secondary/30 glow-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                  <Icon name="CheckCircle2" size={24} className="text-secondary" />
                </div>
                <div>
                  <p className="text-xl font-semibold mb-2">Мы отвечаем:</p>
                  <p className="text-2xl text-secondary font-bold">"Сделано!"</p>
                  <a 
                    href="https://warzonepolitik.wuaze.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg text-muted-foreground hover:text-secondary transition-colors inline-flex items-center gap-2 mt-2"
                  >
                    warzonepolitik.wuaze.com
                    <Icon name="ExternalLink" size={18} />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative z-10 container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">
          Довольные клиенты
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover-glow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={24} className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-lg">Алексей</p>
                <div className="flex text-yellow-500">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              "Сделали сайт за 3 часа! Не ожидал такой скорости. Всё как я хотел, даже лучше."
            </p>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur-sm border-secondary/20 hover-glow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={24} className="text-secondary" />
              </div>
              <div>
                <p className="font-bold text-lg">Мария</p>
                <div className="flex text-yellow-500">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              "Отличная работа! Современный дизайн и всё работает идеально. Рекомендую!"
            </p>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover-glow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={24} className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-lg">Дмитрий</p>
                <div className="flex text-yellow-500">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              "За такую цену — просто огонь! Быстро, качественно, без лишних вопросов."
            </p>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur-sm border-secondary/20 hover-glow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={24} className="text-secondary" />
              </div>
              <div>
                <p className="font-bold text-lg">Анна</p>
                <div className="flex text-yellow-500">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              "Ребята профи своего дела. Сделали сайт для моего бизнеса — всё круто!"
            </p>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover-glow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={24} className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-lg">Игорь</p>
                <div className="flex text-yellow-500">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              "Просто написал что хочу, и через пару часов уже был готовый сайт. Магия!"
            </p>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur-sm border-secondary/20 hover-glow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={24} className="text-secondary" />
              </div>
              <div>
                <p className="font-bold text-lg">Елена</p>
                <div className="flex text-yellow-500">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              "Качество на высоте! Адаптив, скорость загрузки — всё супер. Спасибо!"
            </p>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover-glow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={24} className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-lg">Сергей</p>
                <div className="flex text-yellow-500">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              "Цена вообще смешная за такое качество. Буду заказывать ещё!"
            </p>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur-sm border-secondary/20 hover-glow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={24} className="text-secondary" />
              </div>
              <div>
                <p className="font-bold text-lg">Ольга</p>
                <div className="flex text-yellow-500">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              "Сайт получился стильный и красивый. Друзьям уже посоветовала!"
            </p>
          </Card>
        </div>

        <Card className="p-12 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-primary/30 text-center">
          <h2 className="text-4xl font-bold mb-6 glow-text">
            Готовы создать свой сайт?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нашему сообществу и получите профессиональный сайт уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 hover-glow bg-primary" asChild>
              <a href="https://t.me/charingcmd" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" className="mr-2" size={24} />
                @charingcmd
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 hover-glow" asChild>
              <a href="https://t.me/zymoyy" target="_blank" rel="noopener noreferrer">
                <Icon name="User" className="mr-2" size={24} />
                @zymoyy
              </a>
            </Button>
          </div>
        </Card>
      </section>

      <footer className="relative z-10 container mx-auto px-4 py-8 text-center text-muted-foreground border-t border-border/50">
        <p>© 2024 Charing Command. Создаём веб-сайты для людей.</p>
      </footer>
    </div>
  );
}