import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-wellness-light font-open-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-wellness-purple/10 to-wellness-mint/10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-wellness-purple/10 text-wellness-purple hover:bg-wellness-purple/20">
              3 месяца до идеального тела
            </Badge>
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-wellness-gray mb-6 leading-tight">
              Онлайн курс
              <span className="text-wellness-purple block">Пилатеса</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Научитесь укреплять тело и развивать гибкость с опытным тренером в
              прямых эфирах. Для начинающих от 20 до 45 лет.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-wellness-purple hover:bg-wellness-purple/90 text-white px-8 py-6 text-lg"
              >
                Записаться на курс
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-wellness-mint text-wellness-mint hover:bg-wellness-mint hover:text-white px-8 py-6 text-lg"
              >
                Узнать подробнее
              </Button>
            </div>
            <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={16} />
                <span>500+ учеников</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Star" size={16} className="text-yellow-500" />
                <span>4.9 рейтинг</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={16} />
                <span>3 месяца</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Course Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-wellness-gray mb-4">
              О курсе пилатеса
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексная программа развития тела и духа через методику пилатеса
              с индивидуальным подходом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-wellness-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="Target"
                    size={32}
                    className="text-wellness-purple"
                  />
                </div>
                <CardTitle className="font-montserrat text-xl">
                  1 этап: Основы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Изучение базовых принципов пилатеса, правильного дыхания и
                  основных упражнений
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-wellness-mint/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="TrendingUp"
                    size={32}
                    className="text-wellness-mint"
                  />
                </div>
                <CardTitle className="font-montserrat text-xl">
                  2 этап: Развитие
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Углубление техники, работа с оборудованием и персональные
                  рекомендации
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-wellness-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="Award"
                    size={32}
                    className="text-wellness-purple"
                  />
                </div>
                <CardTitle className="font-montserrat text-xl">
                  3 этап: Мастерство
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Сложные комплексы, самостоятельная практика и получение
                  сертификата
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-montserrat font-bold text-wellness-gray mb-6">
                Тарифы обучения
              </h3>
              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-l-wellness-mint">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-montserrat font-semibold text-xl">
                        Базовый
                      </h4>
                      <p className="text-gray-600">Доступ к записям эфиров</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-wellness-purple">
                        15 000 ₽
                      </div>
                      <div className="text-sm text-gray-500">за весь курс</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-wellness-purple bg-wellness-purple/5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-montserrat font-semibold text-xl">
                        Премиум
                      </h4>
                      <p className="text-gray-600">
                        Прямые эфиры + обратная связь
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-wellness-purple">
                        25 000 ₽
                      </div>
                      <div className="text-sm text-gray-500">за весь курс</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="bg-wellness-mint/10 rounded-2xl p-8">
              <h3 className="text-2xl font-montserrat font-bold text-wellness-gray mb-4">
                Целевая аудитория
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-wellness-mint" />
                  <span>Возраст от 20 до 45 лет</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-wellness-mint" />
                  <span>Начинающие в пилатесе</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-wellness-mint" />
                  <span>Желающие улучшить осанку</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-wellness-mint" />
                  <span>Стремящиеся к гармонии тела и души</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-wellness-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-wellness-gray mb-4">
              Преимущества обучения
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Понятные выгоды от прохождения курса пилатеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-wellness-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" size={40} className="text-wellness-purple" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-4">
                Здоровье
              </h3>
              <p className="text-gray-600">
                Укрепление мышц кора, улучшение осанки и общего самочувствия
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-wellness-mint/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Zap" size={40} className="text-wellness-mint" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-4">
                Энергия
              </h3>
              <p className="text-gray-600">
                Повышение уровня энергии и снижение стресса через осознанное
                движение
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-wellness-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Smile" size={40} className="text-wellness-purple" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-4">
                Уверенность
              </h3>
              <p className="text-gray-600">
                Развитие координации, гибкости и уверенности в своем теле
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-center mb-8">
              Сценарии использования
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-montserrat font-semibold text-lg mb-4 text-wellness-purple">
                  Утренняя практика
                </h4>
                <p className="text-gray-600">
                  Начинайте день с энергизирующего комплекса упражнений для
                  пробуждения тела
                </p>
              </div>
              <div>
                <h4 className="font-montserrat font-semibold text-lg mb-4 text-wellness-mint">
                  Вечернее расслабление
                </h4>
                <p className="text-gray-600">
                  Снимайте напряжение после рабочего дня с помощью расслабляющих
                  упражнений
                </p>
              </div>
              <div>
                <h4 className="font-montserrat font-semibold text-lg mb-4 text-wellness-purple">
                  Реабилитация
                </h4>
                <p className="text-gray-600">
                  Восстанавливайтесь после травм с помощью безопасных и
                  эффективных упражнений
                </p>
              </div>
              <div>
                <h4 className="font-montserrat font-semibold text-lg mb-4 text-wellness-mint">
                  Поддержка формы
                </h4>
                <p className="text-gray-600">
                  Поддерживайте физическую форму и предотвращайте проблемы с
                  осанкой
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-wellness-gray mb-4">
              Почему нам доверяют
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Отзывы, гарантии и подтверждения качества обучения
            </p>
          </div>

          {/* Reviews */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "За 3 месяца полностью изменилась моя осанка и самочувствие.
                  Тренер объясняет очень понятно!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-wellness-purple/10 rounded-full flex items-center justify-center">
                    <span className="text-wellness-purple font-semibold">
                      А
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">Анна, 32 года</div>
                    <div className="text-sm text-gray-500">Менеджер</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Прямые эфиры создают ощущение персональной тренировки. Очень
                  мотивирует заниматься регулярно."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-wellness-mint/10 rounded-full flex items-center justify-center">
                    <span className="text-wellness-mint font-semibold">М</span>
                  </div>
                  <div>
                    <div className="font-semibold">Мария, 28 лет</div>
                    <div className="text-sm text-gray-500">Дизайнер</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Идеально для начинающих. Никакого стеснения, четкие
                  инструкции и видимый результат."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-wellness-purple/10 rounded-full flex items-center justify-center">
                    <span className="text-wellness-purple font-semibold">
                      Е
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">Елена, 35 лет</div>
                    <div className="text-sm text-gray-500">Учитель</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Guarantees & Certificates */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-6">
                Наши гарантии
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon
                    name="Shield"
                    size={20}
                    className="text-wellness-mint mt-1"
                  />
                  <div>
                    <h4 className="font-semibold">Возврат средств</h4>
                    <p className="text-gray-600">
                      100% возврат в течение 14 дней, если курс не подошел
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="Award"
                    size={20}
                    className="text-wellness-purple mt-1"
                  />
                  <div>
                    <h4 className="font-semibold">Сертификат</h4>
                    <p className="text-gray-600">
                      Официальный сертификат о прохождении курса
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="Users"
                    size={20}
                    className="text-wellness-mint mt-1"
                  />
                  <div>
                    <h4 className="font-semibold">Поддержка</h4>
                    <p className="text-gray-600">
                      Доступ к сообществу и поддержке тренера
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-6">
                О тренере
              </h3>
              <Card className="p-6 border-0 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-wellness-purple/10 rounded-full flex items-center justify-center">
                    <Icon
                      name="User"
                      size={32}
                      className="text-wellness-purple"
                    />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lg">
                      Елена Волкова
                    </h4>
                    <p className="text-gray-600">
                      Сертифицированный инструктор пилатеса
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon
                      name="Check"
                      size={14}
                      className="text-wellness-mint"
                    />
                    8 лет опыта преподавания
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      name="Check"
                      size={14}
                      className="text-wellness-mint"
                    />
                    500+ учеников
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      name="Check"
                      size={14}
                      className="text-wellness-mint"
                    />
                    Международная сертификация BASI
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-montserrat font-bold text-center mb-8">
              Частые вопросы
            </h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold">
                  Подходит ли курс для новичков?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Да, курс специально разработан для людей без опыта в пилатесе.
                  Мы начинаем с самых основ и постепенно усложняем упражнения.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold">
                  Какое оборудование нужно?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Для начала достаточно коврика для йоги. Дополнительное
                  оборудование (мячи, ленты) мы рассмотрим во второй части
                  курса.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold">
                  Сколько времени занимает одна тренировка?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Продолжительность занятия 60 минут. Прямые эфиры проходят 3
                  раза в неделю в удобное время.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold">
                  Есть ли ограничения по возрасту?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Курс рассчитан на людей от 20 до 45 лет. Если у вас есть
                  медицинские противопоказания, обязательно проконсультируйтесь
                  с врачом.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-wellness-purple to-wellness-mint">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Начните путь к здоровью уже сегодня
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Присоединяйтесь к сообществу людей, которые выбрали здоровый образ
              жизни
            </p>

            <Card className="max-w-md mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat text-wellness-gray">
                  Записаться на курс
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" className="border-gray-200" />
                <Input
                  placeholder="Email"
                  type="email"
                  className="border-gray-200"
                />
                <Input
                  placeholder="Телефон"
                  type="tel"
                  className="border-gray-200"
                />
                <Textarea
                  placeholder="Расскажите о своих целях и ожиданиях"
                  className="border-gray-200"
                />
                <Button
                  size="lg"
                  className="w-full bg-wellness-purple hover:bg-wellness-purple/90 text-white py-6"
                >
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  Начать обучение
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с условиями обработки
                  персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wellness-gray text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-montserrat font-bold mb-4">
                Пилатес Онлайн
              </h3>
              <p className="text-gray-300 mb-4">
                Профессиональное обучение пилатесу в формате прямых эфиров
              </p>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-wellness-mint"
                >
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-wellness-mint"
                >
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-wellness-mint"
                >
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>hello@pilates-online.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold mb-4">Информация</h4>
              <div className="space-y-2 text-gray-300">
                <div>Политика конфиденциальности</div>
                <div>Пользовательское соглашение</div>
                <div>Возврат средств</div>
                <div>Сертификаты</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Пилатес Онлайн. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
