const logos = [
  require('../images/logos/captainjack.png'),
  require('../images/logos/clubplayer.png'),
  require('../images/logos/dreams.png'),
  require('../images/logos/grandfortune.png'),
  require('../images/logos/palace.png'),
  require('../images/logos/prism.png'),
  require('../images/logos/ragingbull.png'),
  require('../images/logos/royalace.png'),
  require('../images/logos/ruby.png'),
  require('../images/logos/slotsgarden.png'),
  require('../images/logos/thevirtual.png'),
  require('../images/logos/wildvegas.png'),
  require('../images/logos/vegasstrip.png')
];

const casinosUrls = [
  'https://captainjackcasino.com/webplay/?coupon=',
  'https://www.clubplayercasino.com/webplay/?cashier&coupon=',
  'https://www.dreamscasino.com/webplay/?coupon=',
  'https://www.grandfortunecasino.com/webplay/?coupon=',
  'https://www.palaceofchance.com/webplay/?coupon=',
  'https://www.prismcasino.com/webplay/?coupon=',
  'https://www.ragingbullslots.com/webplay/?coupon=',
  'https://www.royalacecasino.com/webplay/?coupon=',
  'https://www.rubyslots.com/webplay/?coupon=',
  'https://www.slotsgarden.com',
  'https://www.thevirtualcasino.com/webplay/?coupon=',
  'https://www.wildvegascasino.com/webplay/?coupon=',
  'https://www.vegasstripcasino.com/webplay/?cashier&coupon='
];

export const logo = logos[1];
const casinoUrl = casinosUrls[1];

const bonuses = [
  {
    id: 0,
    name: '',
    bonus: '200%',
    description: 'No Rules Bonus',
    code: 'WHEEL200',
    url: `${casinoUrl}WHEEL200`,
    deposit: '$50',
    wheelPosition: 0,
    image: require('../images/coupons/200.png'),
    tableOrder: 4
  },
  {
    id: 1,
    name: 'Fire Dragon',
    bonus: '250%',
    description: '20 Spins',
    code: 'WHEELFD250',
    url: `${casinoUrl}WHEELFD250`,
    deposit: '$30',
    wheelPosition: 45,
    image: require('../images/coupons/fire-dragon.png'),
    tableOrder: 1
  },
  {
    id: 2,
    name: '',
    bonus: '350%',
    description: 'No Max Bonus',
    code: 'WHEEL350',
    url: `${casinoUrl}WHEEL350`,
    deposit: '$100',
    wheelPosition: 90,
    image: require('../images/coupons/350.png'),
    tableOrder: 7
  },
  {
    id: 3,
    name: 'Empress Wu',
    bonus: '275%',
    description: '30 Spins',
    code: 'WHEELEW275',
    url: `${casinoUrl}WHEELEW275`,
    deposit: '$50',
    wheelPosition: 135,
    image: require('../images/coupons/empress-wu.png'),
    tableOrder: 0
  },
  {
    id: 4,
    name: '',
    bonus: '300%',
    description: 'No Max Bonus',
    code: 'WHEEL300',
    url: `${casinoUrl}WHEEL300`,
    deposit: '$70',
    wheelPosition: 180,
    image: require('../images/coupons/300.png'),
    tableOrder: 6
  },
  {
    id: 5,
    name: 'Plentiful Treasure',
    bonus: '320%',
    description: '40 Spins',
    code: 'WHEELPT320',
    url: `${casinoUrl}WHEELPT320`,
    deposit: '$100',
    wheelPosition: 225,
    image: require('../images/coupons/plentiful-treasure.png'),
    tableOrder: 2
  },
  {
    id: 6,
    name: '',
    bonus: '250%',
    description: 'No Max Bonus',
    code: 'WHEEL250',
    url: `${casinoUrl}WHEEL250`,
    deposit: '$50',
    wheelPosition: 270,
    image: require('../images/coupons/250.png'),
    tableOrder: 5
  },
  {
    id: 7,
    name: 'Scuba Fishing',
    bonus: '300%',
    description: '70 Spins',
    code: 'WHEELSF300',
    url: `${casinoUrl}WHEELSF300`,
    deposit: '$70',
    wheelPosition: 315,
    image: require('../images/coupons/scuba-fishing.png'),
    tableOrder: 3
  }
];

export const getRandomBonus = () =>
  bonuses[Math.floor(Math.random() * bonuses.length)];

export default bonuses;
