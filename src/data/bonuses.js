const bonuses = [
  {
    id: 0,
    name: '',
    bonus: '200% No Rules',
    spins: '',
    code: 'WHEEL200',
    deposit: '',
    wheelPosition: 0,
    image: require('../images/coupons/200.png')
  },
  {
    id: 1,
    name: 'Fire Dragon',
    bonus: '250%',
    spins: '20',
    code: 'WHEELFD250',
    deposit: '',
    wheelPosition: 45,
    image: require('../images/coupons/fire-dragon.png')
  },
  {
    id: 2,
    name: '',
    bonus: '350 No Max',
    spins: '',
    code: 'WHEEL350',
    deposit: '',
    wheelPosition: 90,
    image: require('../images/coupons/350.png')
  },
  {
    id: 3,
    name: 'Empress Wu',
    bonus: '275%',
    spins: '30',
    code: 'WHEELEW275',
    deposit: '',
    wheelPosition: 135,
    image: require('../images/coupons/empress-wu.png')
  },
  {
    id: 4,
    name: '',
    bonus: '300% No Max',
    spins: '',
    code: 'WHEEL300',
    deposit: '',
    wheelPosition: 180,
    image: require('../images/coupons/300.png')
  },
  {
    id: 5,
    name: 'Plentiful Treasure',
    bonus: '320%',
    spins: '40',
    code: 'WHEELPT320',
    deposit: '',
    wheelPosition: 225,
    image: require('../images/coupons/plentiful-treasure.png')
  },
  {
    id: 6,
    name: '',
    bonus: '250% No Max',
    spins: '',
    code: 'WHEEL250',
    deposit: '',
    wheelPosition: 270,
    image: require('../images/coupons/250.png')
  },
  {
    id: 7,
    name: 'Scuba Fishing',
    bonus: '300%',
    spins: '70',
    code: 'WHEELSF300',
    deposit: '',
    wheelPosition: 315,
    image: require('../images/coupons/scuba-fishing.png')
  }
];

export const getRandomBonus = () =>
  bonuses[Math.floor(Math.random() * bonuses.length)];

export default bonuses;
