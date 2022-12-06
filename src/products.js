//Программы
import programm1 from './assets/pictures/programms/1.jpg';
import programm2 from './assets/pictures/programms/2.jpg';
import programm3 from './assets/pictures/programms/3.jpg';
import programm4 from './assets/pictures/programms/4.jpg';
import programm5 from './assets/pictures/programms/5.jpg';
import programm6 from './assets/pictures/programms/6.jpg';

//Дополнительно
import other1 from './assets/pictures/other/1.jpg';
import other2 from './assets/pictures/other/2.jpg';
import other3 from './assets/pictures/other/3.jpg';

const programms = [
  {
    title: 'Двухфазная программа',
    picture: programm1,
    prices: [400, 700, 900, 1300, 1500],
    description: ['Мойка арок, дисков, шин, ковриков.', 'Бесконтактная мойка первичным составом.', 'Ручная мойка автошампунем.', 'Промывка шильдиков, стекольных рам и решетки радиатора.', 'Сушка кузова.']
  },
  {
    title: 'Трехфазная программа',
    picture: programm2,
    prices: [550, 900, 1300, 1500, 1800],
    description: ['Двухфазная программа.', 'Консервация ЛКП полимером.']
  },
  {
    title: 'Комплексная двухфазная программа',
    picture: programm3,
    prices: [850, 1300, 1600, 1800, 2100],
    description: ['Двухфазная программа.', 'Комплексная уборка салона.', 'Полировка пластика салона.', 'Чернение резины.']
  },
  {
    title: 'Комплексная трехфазная программа',
    picture: programm4,
    prices: [1300, 1600, 1900, 2100, 2300],
    description: ['Комплексная трехфазная программа.', 'Консервация ЛКП полимером.']
  },
  {
    title: 'Мойка мотоцикла',
    picture: programm5,
    prices: [1300, 1600, 1900, 2100, 2300],
    description: ['Описание']
  },
  {
    title: 'Мойка квадроцикла',
    picture: programm6,
    prices: [1300, 1600, 1900, 2100, 2300],
    description: ['Описание']
  },
];

const other = [
  {
    title: 'Экотуман',
    picture: other1,
    prices: [500, 600, 700, 800, 900],
    description: ['Описание']
  },
  {
    title: 'Химчистка',
    picture: other2,
    prices: [500, 600, 700, 800, 900],
    description: ['Описание']
  },
  {
    title: 'Удаление дорожной разметки',
    picture: other3,
    prices: [500, 600, 700, 800, 900],
    description: ['Описание']
  }
]

export { programms, other };