const bonuses = [
  {
    id: 0,
    name: 'I, Zombie',
    bonus: '275%',
    spins: '30',
    code: 'WHEELIZ275',
    deposit: '$50',
    wheelPosition: 360
  },
  {
    id: 1,
    name: 'Panda’s Gold',
    bonus: '250%',
    spins: '20',
    code: 'WHEELPG250',
    deposit: '$30',
    wheelPosition: 45
  },
  {
    id: 2,
    name: 'Trigger Happy',
    bonus: '320%',
    spins: '40',
    code: 'WHEELTH320',
    deposit: '$100',
    wheelPosition: 90
  },
  {
    id: 3,
    name: 'Asgard',
    bonus: '300%',
    spins: '70',
    code: 'WHEELAG300',
    deposit: '$100',
    wheelPosition: 135
  },
  {
    id: 4,
    name: '',
    bonus: '200% No Rules',
    spins: '',
    code: 'WHEEL200',
    deposit: '$50',
    wheelPosition: 180
  },
  {
    id: 5,
    name: '',
    bonus: '250% No Max',
    spins: '',
    code: 'WHEEL250',
    deposit: '$50',
    wheelPosition: 225
  },
  {
    id: 6,
    name: '',
    bonus: '300% No Max',
    spins: '',
    code: 'WHEEL300',
    deposit: '$70',
    wheelPosition: 270
  },
  {
    id: 7,
    name: '',
    bonus: '350% No Max',
    spins: '',
    code: 'WHEEL350',
    deposit: '$100',
    wheelPosition: 315
  }
];

export const getRandomBonus = () =>
  bonuses[Math.floor(Math.random() * bonuses.length)];

export default bonuses;
