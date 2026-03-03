// Holiday data structure
// Key: 'YYYY-MM-DD'
// Value: Array of { country: 'CN'|'US'|..., name: 'Holiday Name', color: 'HexCode' }
// 2026 bank / public holidays for US, FR, PL, IN, PT, DE, FI, RO (and existing CN)

const holidays = {
  // January
  '2026-01-01': [
    { country: 'CN', name: '元旦', color: '#FFF176' },
    { country: 'US', name: "New Year's Day", color: '#000000' },
    { country: 'FR', name: 'Jour de l\'An', color: '#E040FB' },
    { country: 'PL', name: 'Nowy Rok', color: '#FF5252' },
    { country: 'PT', name: 'Ano Novo', color: '#00897B' },
    { country: 'DE', name: 'Neujahr', color: '#69F0AE' },
    { country: 'FI', name: 'Uudenvuodenpäivä', color: '#40C4FF' },
    { country: 'RO', name: 'Anul Nou', color: '#90A4AE' }
  ],
  '2026-01-02': [
    { country: 'CN', name: '元旦', color: '#FFF176' },
    { country: 'RO', name: 'Day after New Year', color: '#90A4AE' }
  ],
  '2026-01-03': [
    { country: 'CN', name: '元旦', color: '#FFF176' }
  ],
  '2026-01-06': [
    { country: 'PL', name: 'Trzech Króli', color: '#FF5252' },
    { country: 'FI', name: 'Loppiainen', color: '#40C4FF' },
    { country: 'RO', name: 'Boboteaza', color: '#90A4AE' }
  ],
  '2026-01-07': [
    { country: 'RO', name: 'Synaxis of St. John', color: '#90A4AE' }
  ],
  '2026-01-19': [
    { country: 'US', name: "Martin Luther King Jr. Day", color: '#000000' }
  ],
  '2026-01-23': [
    { country: 'IN', name: 'Basant Panchami', color: '#FFB74D' }
  ],
  '2026-01-24': [
    { country: 'RO', name: 'Union of Romanian Principalities', color: '#90A4AE' }
  ],
  '2026-01-26': [
    { country: 'IN', name: 'Republic Day', color: '#FFB74D' }
  ],

  // February - 春节 Feb 15-23 per 国务院2026放假安排
  '2026-02-15': [
    { country: 'CN', name: '春节', color: '#FFF176' }
  ],
  '2026-02-16': [
    { country: 'CN', name: '春节', color: '#FFF176' },
    { country: 'US', name: "Presidents' Day", color: '#000000' }
  ],
  '2026-02-17': [
    { country: 'CN', name: '春节', color: '#FFF176' }
  ],
  '2026-02-18': [
    { country: 'CN', name: '春节', color: '#FFF176' }
  ],
  '2026-02-19': [
    { country: 'CN', name: '春节', color: '#FFF176' }
  ],
  '2026-02-20': [
    { country: 'CN', name: '春节', color: '#FFF176' }
  ],
  '2026-02-21': [
    { country: 'CN', name: '春节', color: '#FFF176' }
  ],
  '2026-02-22': [
    { country: 'CN', name: '春节', color: '#FFF176' }
  ],
  '2026-02-23': [
    { country: 'CN', name: '春节', color: '#FFF176' }
  ],

  // March
  '2026-03-04': [
    { country: 'IN', name: 'Holi', color: '#FFB74D' }
  ],
  '2026-03-08': [
    { country: 'DE', name: 'International Women\'s Day', color: '#69F0AE' }
  ],
  '2026-03-21': [
    { country: 'IN', name: 'Eid ul-Fitr', color: '#FFB74D' }
  ],
  '2026-03-26': [
    { country: 'IN', name: 'Rama Navami', color: '#FFB74D' }
  ],
  '2026-03-31': [
    { country: 'IN', name: 'Mahavir Jayanti', color: '#FFB74D' }
  ],

  // April - 清明节 Apr 4-6 per 国务院2026放假安排
  '2026-04-04': [
    { country: 'CN', name: '清明节', color: '#FFF176' }
  ],
  '2026-04-03': [
    { country: 'PT', name: 'Sexta-feira Santa', color: '#00897B' },
    { country: 'DE', name: 'Karfreitag', color: '#69F0AE' },
    { country: 'FI', name: 'Pitkäperjantai', color: '#40C4FF' }
  ],
  '2026-04-05': [
    { country: 'CN', name: '清明节', color: '#FFF176' },
    { country: 'PL', name: 'Wielkanoc', color: '#FF5252' },
    { country: 'PT', name: 'Páscoa', color: '#00897B' },
    { country: 'FI', name: 'Pääsiäispäivä', color: '#40C4FF' }
  ],
  '2026-04-06': [
    { country: 'CN', name: '清明节', color: '#FFF176' },
    { country: 'FR', name: 'Lundi de Pâques', color: '#E040FB' },
    { country: 'PL', name: 'Poniedziałek Wielkanocny', color: '#FF5252' },
    { country: 'DE', name: 'Ostermontag', color: '#69F0AE' },
    { country: 'FI', name: '2. pääsiäispäivä', color: '#40C4FF' }
  ],
  '2026-04-10': [
    { country: 'RO', name: 'Orthodox Good Friday', color: '#90A4AE' }
  ],
  '2026-04-12': [
    { country: 'RO', name: 'Orthodox Easter Sunday', color: '#90A4AE' }
  ],
  '2026-04-13': [
    { country: 'RO', name: 'Orthodox Easter Monday', color: '#90A4AE' }
  ],
  '2026-04-25': [
    { country: 'PT', name: 'Dia da Liberdade', color: '#00897B' }
  ],

  // May
  '2026-05-01': [
    { country: 'CN', name: '劳动节', color: '#FFF176' },
    { country: 'FR', name: 'Fête du Travail', color: '#E040FB' },
    { country: 'PL', name: 'Święto Pracy', color: '#FF5252' },
    { country: 'PT', name: 'Dia do Trabalhador', color: '#00897B' },
    { country: 'DE', name: 'Tag der Arbeit', color: '#69F0AE' },
    { country: 'FI', name: 'Vappu', color: '#40C4FF' },
    { country: 'RO', name: 'Ziua Muncii', color: '#90A4AE' }
  ],
  '2026-05-02': [
    { country: 'CN', name: '劳动节', color: '#FFF176' }
  ],
  '2026-05-03': [
    { country: 'CN', name: '劳动节', color: '#FFF176' },
    { country: 'PL', name: 'Święto Konstytucji', color: '#FF5252' }
  ],
  '2026-05-04': [
    { country: 'CN', name: '劳动节', color: '#FFF176' }
  ],
  '2026-05-05': [
    { country: 'CN', name: '劳动节', color: '#FFF176' }
  ],
  '2026-05-08': [
    { country: 'FR', name: 'Victoire 1945', color: '#E040FB' }
  ],
  '2026-05-14': [
    { country: 'FR', name: 'Ascension', color: '#E040FB' },
    { country: 'DE', name: 'Christi Himmelfahrt', color: '#69F0AE' },
    { country: 'FI', name: 'Helatorstai', color: '#40C4FF' }
  ],
  '2026-05-24': [
    { country: 'PL', name: 'Zesłanie Ducha Świętego', color: '#FF5252' },
    { country: 'FI', name: 'Helluntaipäivä', color: '#40C4FF' }
  ],
  '2026-05-25': [
    { country: 'FR', name: 'Lundi de Pentecôte', color: '#E040FB' },
    { country: 'US', name: 'Memorial Day', color: '#000000' },
    { country: 'DE', name: 'Pfingstmontag', color: '#69F0AE' }
  ],
  '2026-05-31': [
    { country: 'RO', name: 'Orthodox Pentecost', color: '#90A4AE' }
  ],

  // June
  '2026-06-01': [
    { country: 'RO', name: 'Children\'s Day / Pentecost Monday', color: '#90A4AE' }
  ],
  '2026-06-04': [
    { country: 'PL', name: 'Boże Ciało', color: '#FF5252' },
    { country: 'PT', name: 'Corpus Christi', color: '#00897B' },
    { country: 'DE', name: 'Fronleichnam', color: '#69F0AE' }
  ],
  '2026-06-10': [
    { country: 'PT', name: 'Dia de Portugal', color: '#00897B' }
  ],
  '2026-06-19': [
    { country: 'CN', name: '端午节', color: '#FFF176' },
    { country: 'US', name: 'Juneteenth', color: '#000000' },
    { country: 'FI', name: 'Juhannusaatto', color: '#40C4FF' }
  ],
  '2026-06-20': [
    { country: 'CN', name: '端午节', color: '#FFF176' },
    { country: 'FI', name: 'Juhannuspäivä', color: '#40C4FF' }
  ],
  '2026-06-21': [
    { country: 'CN', name: '端午节', color: '#FFF176' }
  ],

  // July
  '2026-07-03': [
    { country: 'US', name: 'Independence Day (observed)', color: '#000000' }
  ],
  '2026-07-14': [
    { country: 'FR', name: 'Fête nationale', color: '#E040FB' }
  ],

  // August
  '2026-08-15': [
    { country: 'FR', name: 'Assomption', color: '#E040FB' },
    { country: 'PL', name: 'Wniebowzięcie NMP', color: '#FF5252' },
    { country: 'PT', name: 'Assunção de Nossa Senhora', color: '#00897B' },
    { country: 'IN', name: 'Independence Day', color: '#FFB74D' },
    { country: 'RO', name: 'Adormirea Maicii Domnului', color: '#90A4AE' }
  ],

  // September - 中秋节 Sep 25-27 per 国务院2026放假安排
  '2026-09-07': [
    { country: 'US', name: 'Labor Day', color: '#000000' }
  ],
  '2026-09-25': [
    { country: 'CN', name: '中秋节', color: '#FFF176' }
  ],
  '2026-09-26': [
    { country: 'CN', name: '中秋节', color: '#FFF176' }
  ],
  '2026-09-27': [
    { country: 'CN', name: '中秋节', color: '#FFF176' }
  ],

  // October - 国庆节 Oct 1-7 per 国务院2026放假安排
  '2026-10-01': [
    { country: 'CN', name: '国庆节', color: '#FFF176' }
  ],
  '2026-10-02': [
    { country: 'CN', name: '国庆节', color: '#FFF176' },
    { country: 'IN', name: 'Gandhi Jayanti', color: '#FFB74D' }
  ],
  '2026-10-03': [
    { country: 'CN', name: '国庆节', color: '#FFF176' },
    { country: 'DE', name: 'Tag der Deutschen Einheit', color: '#69F0AE' }
  ],
  '2026-10-04': [
    { country: 'CN', name: '国庆节', color: '#FFF176' }
  ],
  '2026-10-05': [
    { country: 'CN', name: '国庆节', color: '#FFF176' },
    { country: 'PT', name: 'Implantação da República', color: '#00897B' }
  ],
  '2026-10-06': [
    { country: 'CN', name: '国庆节', color: '#FFF176' }
  ],
  '2026-10-07': [
    { country: 'CN', name: '国庆节', color: '#FFF176' }
  ],
  '2026-10-12': [
    { country: 'US', name: 'Columbus Day', color: '#000000' }
  ],
  '2026-10-31': [
    { country: 'FI', name: 'Pyhäinpäivä', color: '#40C4FF' },
    { country: 'DE', name: 'Reformation Day', color: '#69F0AE' }
  ],

  // November
  '2026-11-01': [
    { country: 'FR', name: 'Toussaint', color: '#E040FB' },
    { country: 'PL', name: 'Wszystkich Świętych', color: '#FF5252' },
    { country: 'PT', name: 'Todos os Santos', color: '#00897B' },
    { country: 'DE', name: 'Allerheiligen', color: '#69F0AE' }
  ],
  '2026-11-11': [
    { country: 'FR', name: 'Armistice 1918', color: '#E040FB' },
    { country: 'US', name: 'Veterans Day', color: '#000000' },
    { country: 'PL', name: 'Narodowe Święto Niepodległości', color: '#FF5252' }
  ],
  '2026-11-18': [
    { country: 'DE', name: 'Buß- und Bettag', color: '#69F0AE' }
  ],
  '2026-11-26': [
    { country: 'US', name: 'Thanksgiving Day', color: '#000000' }
  ],
  '2026-11-30': [
    { country: 'RO', name: 'Feast of St. Andrew', color: '#90A4AE' }
  ],

  // December
  '2026-12-01': [
    { country: 'PT', name: 'Restauração da Independência', color: '#00897B' },
    { country: 'RO', name: 'Ziua Națională', color: '#90A4AE' }
  ],
  '2026-12-06': [
    { country: 'FI', name: 'Itsenäisyyspäivä', color: '#40C4FF' }
  ],
  '2026-12-08': [
    { country: 'PT', name: 'Imaculada Conceição', color: '#00897B' }
  ],
  '2026-12-24': [
    { country: 'PL', name: 'Wigilia', color: '#FF5252' },
    { country: 'FI', name: 'Jouluaatto', color: '#40C4FF' }
  ],
  '2026-12-25': [
    { country: 'US', name: 'Christmas Day', color: '#000000' },
    { country: 'FR', name: 'Noël', color: '#E040FB' },
    { country: 'PL', name: 'Boże Narodzenie', color: '#FF5252' },
    { country: 'PT', name: 'Natal', color: '#00897B' },
    { country: 'DE', name: 'Weihnachtstag', color: '#69F0AE' },
    { country: 'FI', name: 'Joulupäivä', color: '#40C4FF' },
    { country: 'RO', name: 'Crăciunul', color: '#90A4AE' }
  ],
  '2026-12-26': [
    { country: 'PL', name: 'Drugi dzień Bożego Narodzenia', color: '#FF5252' },
    { country: 'DE', name: 'Zweiter Weihnachtsfeiertag', color: '#69F0AE' },
    { country: 'FI', name: 'Tapaninpäivä', color: '#40C4FF' },
    { country: 'RO', name: 'Crăciunul', color: '#90A4AE' }
  ]
};

const countryColors = {
  'CN': '#FFF176',
  'US': '#000000',
  'FR': '#E040FB',
  'PL': '#FF5252',
  'IN': '#FFB74D',
  'PT': '#00897B',
  'DE': '#69F0AE',
  'FI': '#40C4FF',
  'RO': '#90A4AE'
};

const countryNames = {
  'CN': 'China',
  'US': 'USA',
  'FR': 'France',
  'PL': 'Poland',
  'IN': 'India',
  'PT': 'Portugal',
  'DE': 'Germany',
  'FI': 'Finland',
  'RO': 'Romania'
};

module.exports = {
  holidays,
  countryColors,
  countryNames
};
