import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Index() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://functions.poehali.dev/312ec817-ef4d-40d9-94ed-f0cc41fb315f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input })
      });

      const data = await response.json();
      
      if (data.response) {
        const aiMessage: Message = { role: 'assistant', content: data.response };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        const errorMessage: Message = { 
          role: 'assistant', 
          content: 'Извините, произошла ошибка. Попробуйте ещё раз.' 
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    } catch (error) {
      const errorMessage: Message = { 
        role: 'assistant', 
        content: 'Не удалось подключиться к ИИ. Проверьте соединение.' 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
              <Icon name="Bot" size={32} className="text-white" />
            </div>
            <h1 className="text-5xl font-bold glow-text">
              ИИ Ассистент
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Умный помощник на базе Google Gemini
          </p>
        </header>

        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 mb-6">
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="MessageSquare" size={48} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Начните диалог</h2>
                <p className="text-muted-foreground max-w-md">
                  Задайте любой вопрос, и ИИ-ассистент поможет вам найти ответ
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 w-full max-w-2xl">
                  <Button 
                    variant="outline" 
                    className="h-auto p-4 text-left justify-start hover-glow"
                    onClick={() => setInput('Расскажи интересный факт о космосе')}
                  >
                    <Icon name="Sparkles" className="mr-2 flex-shrink-0" size={20} />
                    <span>Расскажи интересный факт о космосе</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-auto p-4 text-left justify-start hover-glow"
                    onClick={() => setInput('Как приготовить идеальный кофе?')}
                  >
                    <Icon name="Coffee" className="mr-2 flex-shrink-0" size={20} />
                    <span>Как приготовить идеальный кофе?</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-auto p-4 text-left justify-start hover-glow"
                    onClick={() => setInput('Посоветуй книгу для чтения')}
                  >
                    <Icon name="Book" className="mr-2 flex-shrink-0" size={20} />
                    <span>Посоветуй книгу для чтения</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-auto p-4 text-left justify-start hover-glow"
                    onClick={() => setInput('Объясни квантовую физику простыми словами')}
                  >
                    <Icon name="Lightbulb" className="mr-2 flex-shrink-0" size={20} />
                    <span>Объясни квантовую физику</span>
                  </Button>
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="Bot" size={16} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary/20 border border-secondary/30'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                  {message.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <Icon name="User" size={16} />
                    </div>
                  )}
                </div>
              ))
            )}
            {loading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Icon name="Bot" size={16} className="text-white" />
                </div>
                <div className="bg-secondary/20 border border-secondary/30 p-4 rounded-2xl">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 p-4">
          <div className="flex gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Задайте ваш вопрос..."
              className="flex-1 text-lg"
              disabled={loading}
            />
            <Button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              size="lg"
              className="px-6 hover-glow bg-primary"
            >
              {loading ? (
                <Icon name="Loader2" size={24} className="animate-spin" />
              ) : (
                <Icon name="Send" size={24} />
              )}
            </Button>
          </div>
        </Card>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>Powered by Google Gemini AI • Создано на poehali.dev</p>
        </div>
      </div>
    </div>
  );
}
