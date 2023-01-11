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
import other4 from './assets/pictures/other/4.jpg';

const programms = [
  {
    title: 'Двухфазная программа',
    picture: programm1,
    prices: [400, 700, 900, 1300, 1500],
    times: ['40мин', '1ч 10мин'],
    description: ['Мойка арок, дисков, шин, ковриков.', 'Бесконтактная мойка первичным составом.', 'Ручная мойка автошампунем.', 'Промывка шильдиков, стекольных рам и решетки радиатора кистью.', 'Сушка кузова.']
  },
  {
    title: 'Трехфазная программа',
    picture: programm2,
    prices: [550, 900, 1300, 1500, 1800],
    times: ['50мин', '1ч 20мин'],
    description: ['Двухфазная программа.', 'Консервация ЛКП полимером.']
  },
  {
    title: 'Комплексная двухфазная программа',
    picture: programm3,
    prices: [850, 1300, 1600, 1800, 2100],
    times: ['1ч 20мин', '1ч 50мин'],
    description: ['Двухфазная программа.', 'Комплексная уборка салона.', 'Чистка педалей.', 'Полировка пластика салона.', 'Чернение резины.']
  },
  {
    title: 'Комплексная трехфазная программа',
    picture: programm4,
    prices: [1300, 1600, 1900, 2100, 2300],
    times: ['1ч 30мин', '2ч'],
    description: ['Комплексная двухфазная программа.', 'Консервация ЛКП полимером.']
  },
  {
    title: 'Мойка мотоцикла',
    picture: programm5,
    prices: [300, 400, 500, 600, 700],
    times: ['20мин', '40мин'],
    description: ['Бесконтактная мойка первичным составом.', 'Ручная мойка автошампунем.', 'Промывка компонентов кистью']
  },
  {
    title: 'Мойка квадроцикла',
    picture: programm6,
    prices: [400, 500, 600, 700, 800],
    times: ['30мин', '50мин'],
    description: ['Бесконтактная мойка первичным составом.', 'Ручная мойка автошампунем.', 'Промывка компонентов кистью']
  },
];

const other = [
  {
    title: 'Экотуман',
    picture: other1,
    prices: [800, 1000, 1200, 1400, 1600],
    times: ['35мин', '45мин'],
    description: ['Устранение стойких неприятных запахов', 'Ароматизация', 'Ассортимент ароматов уточняйте у сотрудников']
  },
  {
    title: 'Химчистка',
    picture: other2,
    prices: [],
    times: ['60ч', '90ч'],
    description: ['Химчистка салона с разбором']
  },
  {
    title: 'Удаление дорожной разметки',
    picture: other3,
    prices: [],
    times: ['20мин', '1ч 20мин'],
    description: ['Описание отсутствует']
  },
  {
    title: 'Уборка багажника',
    picture: other4,
    prices: [100, 100, 100, 250, 400],
    times: ['10мин', '15мин'],
    description: ['Пылесос', 'Влажная уборка']
  }
]

export { programms, other };