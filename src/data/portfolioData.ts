import { Project, JournalEntry, ExplorationItem, StatItem } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'lista-dao-writing-contest',
    title: 'Lista DAO Writing Contest',
    subtitle: '1st Place English Winner among 500+ global submissions',
    category: 'Web3 & Editorial',
    year: '2024',
    badge: 'Came out on top out of 500+ entries for the lista dao writing contest',
    image: '/assets/lista-dao-contest.png',
    colSpan: 7,
    description: 'Awarded 1st place English winner out of 500+ entries for the official Lista DAO writing competition. Explored decentralized liquid staking, collateralized debt positions (CDPs), and ecosystem narratives on BNB Chain.',
    client: 'Lista DAO',
    deliverables: ['Editorial Writing', 'Web3 & DeFi Research', 'Narrative Strategy', 'Community Outreach'],
    link: 'https://x.com/_Kaynet/status/2038615605293506838?s=20',
    externalLink: true
  },
  {
    id: 'pumpfun-partnership-deal',
    title: 'Pump.fun Partnership Deal',
    subtitle: 'From a single tweet to an executive partnership deal room',
    category: 'BizDev & Strategy',
    year: '2024',
    badge: 'I almost sealed a huge partnership deal with a project I was working with and pumpfun from just a single tweet.',
    image: '/assets/pumpfun-partnership-deal.jpg',
    colSpan: 5,
    description: 'I almost sealed a huge partnership deal with a project I was working with and pumpfun from just a single tweet. Inbound outreach from Pump.fun BizDev led to direct architecture discussions, meeting sessions, and an executive deal room with founder Alon.',
    client: 'Pump.fun & Opsin',
    deliverables: ['Inbound Growth', 'Deal Negotiation', 'Tokenomics Strategy', 'Ecosystem BizDev'],
    link: 'https://x.com/_Kaynet/status/1978845235951378861?s=20',
    externalLink: true
  },
  {
    id: 'tacbuild-top300',
    title: 'TAC Build — Top 300',
    subtitle: 'Top 300 contributor in the TAC ecosystem from two solid tweets',
    category: 'Web3 & Ecosystem Growth',
    year: '2024',
    badge: 'Made it to top 300 in the TAC ecosystem from just two solid tweets on the breakdown of the ecosystem. Got 100K TAC tokens as a contributor.',
    image: '/assets/tacbuild-composite.jpg',
    colSpan: 5,
    description: 'I made it to top 300 in the TAC ecosystem from just two solid tweets on the breakdown of the ecosystem — landing rank #367 on the official contributor leaderboard and earning 108,766 TAC tokens (~100K) as a recognized ecosystem contributor.',
    client: 'TAC Ecosystem',
    deliverables: ['Ecosystem Research', 'Contributor Growth', 'Community Writing', 'Narrative Strategy'],
    link: 'https://x.com/_Kaynet/status/1927286110020878520?s=20',
    externalLink: true
  },
  {
    id: 'scribble-dao',
    title: 'Scribble DAO',
    subtitle: 'Back-to-back bounty wins across 7 months in the creator network',
    category: 'Content & Creator Economy',
    year: '2025',
    badge: 'Joined the creator network and in 7 months dominated — winning back-to-back bounties and accumulating 4-figures+ in earnings from content.',
    image: '/assets/scribble-dao.png',
    colSpan: 7,
    description: 'Joined the Scribble DAO creator network and in a span of 7 months dominated, winning back-to-back bounties across multiple Web3 projects. Accumulated 4-figures+ in earnings purely from content — racking up 18 wins, 76 submissions, and 8,489 points on the leaderboard.',
    client: 'Scribble DAO',
    deliverables: ['Content Strategy', 'Bounty Writing', 'Web3 Copywriting', 'Creator Growth'],
    link: 'https://x.com/scribble_dao?s=20',
    externalLink: true
  }
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'article-arcium',
    title: 'Your data is public by default :- Arcium fixes that.',
    date: '2025',
    readTime: '5 min read',
    category: 'Confidential Computing',
    image: '/assets/article-arcium.png',
    excerpt: 'A comprehensive project breakdown on Arcium: how encrypted execution and decentralized confidential computing secure onchain data privacy.',
    link: 'https://x.com/_Kaynet/status/2047286907374014876?s=20',
    externalLink: true
  },
  {
    id: 'article-walrus',
    title: 'Don’t just trust the data, Verify it.',
    date: '2025',
    readTime: '4 min read',
    category: 'Decentralized Storage',
    image: '/assets/article-walrus.png',
    excerpt: 'A deep breakdown on Walrus Protocol: verifiable data availability, decentralized blob storage, and robust architecture on Sui.',
    link: 'https://x.com/_Kaynet/status/2044744712314052960?s=20',
    externalLink: true
  },
  {
    id: 'article-gomorefun',
    title: 'Stop giving all your money to the market, Save a portion with Gomorefun.',
    date: '2025',
    readTime: '4 min read',
    category: 'DeFi & Trading',
    image: '/assets/article-gomorefun.png',
    excerpt: 'A breakdown on Gomore.fun (Save as you trade): turning degenerate market friction into automated treasury preservation.',
    link: 'https://x.com/_Kaynet/status/2035665846194815001?s=20',
    externalLink: true
  },
  {
    id: 'article-crafts',
    title: 'Every Crypto Raise Said “Fair Launch” Right Before Retail Got Cooked.',
    date: '2025',
    readTime: '5 min read',
    category: 'Fair Launches',
    image: '/assets/article-crafts.png',
    excerpt: 'A breakdown on Crafts revolutionizing fair launches: dismantling predatory token allocations and aligning protocol incentives with retail users.',
    link: 'https://x.com/_Kaynet/status/2054898221026037822?s=20',
    externalLink: true
  },
  {
    id: 'article-mantle',
    title: 'Why xStocks, Mantle, and the Next Phase of Onchain Finance Aren’t about tokenization.',
    date: '2025',
    readTime: '6 min read',
    category: 'Onchain Finance',
    image: '/assets/article-mantle.png',
    excerpt: 'A breakdown on how Mantle might be opening a new layer of onchain finance, capital-efficient real-world assets, and institutional DeFi rails.',
    link: 'https://x.com/_Kaynet/status/2073030811436081444?s=20',
    externalLink: true
  }
];

export const EXPLORATIONS: ExplorationItem[] = [
  {
    id: 'exp-1',
    title: 'Taikai Garden Contest',
    category: 'Silver Winner',
    image: '/assets/taikai-garden.jpg',
    rotation: -4,
    description: 'Silver winner in Taikai garden contest.',
    externalLink: 'https://x.com/scribble_dao/status/1946163086718857244?s=20'
  },
  {
    id: 'exp-2',
    title: 'Zeus Exchange Contest',
    category: 'Overall Winner',
    image: '/assets/zeus-exchange.jpg',
    rotation: 5,
    description: 'Part of overall winners for zeus exchange contest.',
    externalLink: 'https://x.com/scribble_dao/status/1921883072741642407?s=20'
  },
  {
    id: 'exp-3',
    title: 'Fuel Network Bounty',
    category: 'Silver Prize',
    image: '/assets/fuel-network.jpg',
    rotation: -3,
    description: 'Won both silver prize for the Fuel network bounty.',
    externalLink: 'https://x.com/scribble_dao/status/1902721851551584523?s=20'
  },
  {
    id: 'exp-4',
    title: 'Invincible Read Write-a-thon',
    category: 'Silver Winner',
    image: '/assets/invincible-read.jpg',
    rotation: 4,
    description: 'Came out in the silver winners for Invicinble read Write a thon.',
    externalLink: 'https://x.com/scribble_dao/status/1976286571751235656?s=20'
  },
  {
    id: 'exp-5',
    title: 'Boba Network Bounty',
    category: 'Silver Winner',
    image: '/assets/boba-network.jpg',
    rotation: -6,
    description: 'Came out as a silver winner for boba network bounty.',
    externalLink: 'https://x.com/scribble_dao/status/1967898773595828559?s=20'
  },
  {
    id: 'exp-6',
    title: 'Flytrade $16,000 Bounty',
    category: 'Bronze Winner',
    image: '/assets/flytrade.png',
    rotation: 3,
    description: 'Came out in bronze for Flytrade $16000 bounty.',
    externalLink: 'https://x.com/scribble_dao/status/1913472644667883936?s=20'
  }
];

export const STATS: StatItem[] = [
  {
    value: '3years+',
    label: 'Years Experience',
    sublabel: 'Crafting premium content for brands/ecosystems'
  },
  {
    value: '30+',
    label: 'Projects and Brands',
    sublabel: 'Partnered with worldwide'
  },
  {
    value: '200%',
    label: 'Satisfied Clients',
    sublabel: 'Delivered on all occasions'
  }
];

export const HLS_VIDEO_URL = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';
export const HERO_ANIMATED_SPHERE_VIDEO = '/assets/hero-sphere.mp4';
export const HERO_ANIMATED_SPHERE_HLS = 'https://v1.pinimg.com/videos/iht/hls/56/c8/0f/56c80f075c7193f0694c607c093d7097.m3u8';
export const HERO_ANIMATED_SPHERE_POSTER = '/assets/hero-sphere-poster.jpg';
export const EMAIL_CONTACT = 'mailto:kaynet0x@gmail.com';
