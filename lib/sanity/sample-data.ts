/**
 * SAMPLE DATA
 * 
 * Realistic mock data that matches exact Sanity schema structure
 * Used for development without live Sanity connection
 * 
 * IMPORTANT: Data structure must match Sanity query results exactly
 */

import type { Cartel, Person, Incident, Route, Location, Citation } from '@/types'

// ==================== SAMPLE CITATIONS ====================

export const sampleCitations: Citation[] = [
  {
    _id: 'citation-001',
    _type: 'citation',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    title: 'DEA Intelligence Report: Mexican Cartel Operations 2024',
    sourceType: 'governmentReport',
    url: 'https://www.dea.gov/reports/mexican-cartels-2024',
    publicationDate: '2024-03-15',
    publisher: 'U.S. Drug Enforcement Administration',
    authors: ['DEA Intelligence Division'],
    reliability: 'verified',
    archived: true,
    archivedUrl: 'https://web.archive.org/web/20240315000000/https://www.dea.gov/reports/mexican-cartels-2024'
  },
  {
    _id: 'citation-002',
    _type: 'citation',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    title: 'United States v. Joaquín Guzmán Loera - Court Documents',
    sourceType: 'courtDocument',
    url: 'https://www.justice.gov/usao-edny/united-states-v-joaquin-guzman-loera',
    publicationDate: '2019-02-12',
    publisher: 'U.S. Department of Justice',
    reliability: 'verified',
    archived: true
  },
  {
    _id: 'citation-003',
    _type: 'citation',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    title: 'Mexican Navy Announces Major Fentanyl Seizure',
    sourceType: 'pressRelease',
    url: 'https://www.gob.mx/semar/prensa/major-seizure-2024',
    publicationDate: '2024-06-20',
    publisher: 'Mexican Navy (SEMAR)',
    reliability: 'verified'
  }
]

// ==================== SAMPLE CARTELS ====================

export const sampleCartels: Cartel[] = [
  {
    _id: 'cartel-sinaloa-001',
    _type: 'cartel',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    name: 'Sinaloa Cartel',
    slug: { current: 'sinaloa-cartel', _type: 'slug' },
    aliases: ['Pacific Cartel', 'Federation', 'Guzmán-Loera Organization'],
    foundedDate: '1989-01-01',
    status: 'active',
    territory: {
      description: 'Sinaloa, Sonora, Chihuahua, Durango, Baja California',
    },
    primaryActivities: ['Drug Trafficking', 'Money Laundering', 'Arms Trafficking'],
    estimatedRevenue: {
      amount: 3000000000,
      currency: 'USD',
      year: 2024,
      confidence: 'Estimate'
    },
    logoUrl: '/images/sample/sinaloa-logo.png',
    description: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'The Sinaloa Cartel is an international drug trafficking, money laundering, and organized crime syndicate established in Mexico during the late 1980s as one of a handful of "plazas" operating under a predecessor organization known as the Guadalajara Cartel.'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block2',
        style: 'h2',
        children: [
          {
            _type: 'span',
            _key: 'span2',
            text: 'History and Formation'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block3',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span3',
            text: 'The organization has been led by various members over time, most notably Joaquín "El Chapo" Guzmán and Ismael "El Mayo" Zambada. Following El Chapo\'s extradition and conviction in the United States, the cartel has continued operations under new leadership structures.'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block4',
        style: 'h2',
        children: [
          {
            _type: 'span',
            _key: 'span4',
            text: 'Operations and Activities'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block5',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span5',
            text: 'The Sinaloa Cartel is primarily involved in the manufacturing, importation, and distribution of cocaine, heroin, methamphetamine, marijuana, and increasingly, fentanyl. The organization operates extensive trafficking networks throughout Mexico, the United States, Central and South America, Europe, Asia, and Australia.'
          }
        ]
      }
    ],
    timeline: [
      {
        _key: 'event1',
        _type: 'event',
        date: '1989-01-01T00:00:00Z',
        title: 'Cartel Founded',
        description: 'Emerged from the Guadalajara Cartel after its dissolution',
        eventType: 'founded'
      },
      {
        _key: 'event2',
        _type: 'event',
        date: '2016-01-08T00:00:00Z',
        title: 'El Chapo Recaptured',
        description: 'Joaquín Guzmán recaptured after 2015 escape',
        eventType: 'arrest'
      },
      {
        _key: 'event3',
        _type: 'event',
        date: '2019-07-17T00:00:00Z',
        title: 'El Chapo Sentenced',
        description: 'Sentenced to life plus 30 years in U.S. federal prison',
        eventType: 'other'
      }
    ]
  },
  {
    _id: 'cartel-cjng-001',
    _type: 'cartel',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    name: 'Jalisco New Generation Cartel',
    slug: { current: 'cjng', _type: 'slug' },
    aliases: ['CJNG', 'Jalisco Cartel', 'Mata Zetas'],
    foundedDate: '2010-01-01',
    status: 'active',
    territory: {
      description: 'Jalisco, Colima, Michoacán, Guanajuato, Veracruz',
    },
    primaryActivities: ['Drug Trafficking', 'Extortion', 'Human Trafficking', 'Money Laundering'],
    estimatedRevenue: {
      amount: 5000000000,
      currency: 'USD',
      year: 2024,
      confidence: 'Estimate'
    },
    logoUrl: '/images/sample/cjng-logo.png',
    description: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'The Jalisco New Generation Cartel (Cártel de Jalisco Nueva Generación) is a Mexican criminal group based in Jalisco that is considered one of the most dangerous and fastest-growing drug trafficking organizations in the world.'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block2',
        style: 'h2',
        children: [
          {
            _type: 'span',
            _key: 'span2',
            text: 'Rise to Power'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block3',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span3',
            text: 'Founded in 2010 by Nemesio Oseguera Cervantes ("El Mencho"), the CJNG emerged from the remnants of the Milenio Cartel. The organization gained notoriety for its extreme violence and sophisticated operations, quickly expanding its territory through aggressive tactics.'
          }
        ]
      }
    ],
    timeline: [
      {
        _key: 'event1',
        _type: 'event',
        date: '2010-01-01T00:00:00Z',
        title: 'CJNG Founded',
        description: 'Emerged after the death of Ignacio Coronel Villarreal',
        eventType: 'founded'
      },
      {
        _key: 'event2',
        _type: 'event',
        date: '2015-05-01T00:00:00Z',
        title: 'Helicopter Attack',
        description: 'Shot down Mexican military helicopter in Jalisco',
        eventType: 'violence'
      }
    ]
  },
  {
    _id: 'cartel-gulf-001',
    _type: 'cartel',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    name: 'Gulf Cartel',
    slug: { current: 'gulf-cartel', _type: 'slug' },
    aliases: ['CDG', 'Cártel del Golfo'],
    foundedDate: '1984-01-01',
    status: 'fragmented',
    territory: {
      description: 'Tamaulipas, Nuevo León, parts of Veracruz',
    },
    primaryActivities: ['Drug Trafficking', 'Human Smuggling', 'Extortion'],
    logoUrl: '/images/sample/gulf-logo.png',
    description: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'The Gulf Cartel is a criminal syndicate and drug trafficking organization in Mexico, operating along the U.S.-Mexico border. Once one of the most powerful cartels, it has fragmented into smaller factions following leadership arrests and internal conflicts.'
          }
        ]
      }
    ],
    timeline: []
  }
]

// ==================== SAMPLE PEOPLE ====================

export const samplePeople: Person[] = [
  {
    _id: 'person-chapo-001',
    _type: 'person',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    fullName: 'Joaquín Archivaldo Guzmán Loera',
    slug: { current: 'joaquin-guzman', _type: 'slug' },
    aliases: ['El Chapo', 'El Rápido', 'El Señor de la Montaña'],
    photoUrl: '/images/sample/chapo.jpg',
    dateOfBirth: '1957-04-04',
    placeOfBirth: 'La Tuna, Badiraguato, Sinaloa, Mexico',
    nationality: ['Mexican'],
    status: 'captured',
    lastKnownLocation: {
      location: 'ADX Florence, Colorado, United States',
      date: '2019-07-17'
    },
    roles: ['Leader', 'Co-Leader'],
    biography: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'Joaquín "El Chapo" Guzmán is a Mexican former drug lord and a former leader within the Sinaloa Cartel, an international crime syndicate. He was considered the most powerful drug trafficker in the world before his extradition to the United States and subsequent conviction.'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block2',
        style: 'h2',
        children: [
          {
            _type: 'span',
            _key: 'span2',
            text: 'Early Life and Criminal Career'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block3',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span3',
            text: 'Born in rural Sinaloa, Guzmán entered the drug trade in the 1980s, working with Miguel Ángel Félix Gallardo of the Guadalajara Cartel. After the cartel\'s dissolution, he became a key figure in the newly formed Sinaloa Cartel.'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block4',
        style: 'h2',
        children: [
          {
            _type: 'span',
            _key: 'span4',
            text: 'Captures and Escapes'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block5',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span5',
            text: 'Guzmán was first captured in Guatemala in 1993 and sentenced to 20 years in Mexico. He escaped from Puente Grande prison in 2001, allegedly in a laundry cart. He was recaptured in 2014, escaped again in 2015 through a tunnel, and was finally recaptured in 2016.'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block6',
        style: 'h2',
        children: [
          {
            _type: 'span',
            _key: 'span6',
            text: 'U.S. Trial and Conviction'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block7',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span7',
            text: 'Extradited to the United States in 2017, Guzmán was convicted on February 12, 2019, on multiple charges including drug trafficking, money laundering, and weapons charges. He was sentenced to life imprisonment plus 30 years and is currently incarcerated at ADX Florence in Colorado.'
          }
        ]
      }
    ],
    criminalHistory: [
      {
        _key: 'event1',
        _type: 'event',
        date: '1993-06-09T00:00:00Z',
        title: 'First Arrest',
        description: 'Captured in Guatemala and extradited to Mexico',
        eventType: 'arrest'
      },
      {
        _key: 'event2',
        _type: 'event',
        date: '2001-01-19T00:00:00Z',
        title: 'Prison Escape',
        description: 'Escaped from Puente Grande maximum-security prison',
        eventType: 'escape'
      },
      {
        _key: 'event3',
        _type: 'event',
        date: '2014-02-22T00:00:00Z',
        title: 'Second Arrest',
        description: 'Captured in Mazatlán, Sinaloa by Mexican Marines',
        eventType: 'arrest'
      },
      {
        _key: 'event4',
        _type: 'event',
        date: '2015-07-11T00:00:00Z',
        title: 'Second Escape',
        description: 'Escaped through 1.5km tunnel from Altiplano prison',
        eventType: 'escape'
      },
      {
        _key: 'event5',
        _type: 'event',
        date: '2016-01-08T00:00:00Z',
        title: 'Third Arrest',
        description: 'Recaptured in Los Mochis, Sinaloa',
        eventType: 'arrest'
      },
      {
        _key: 'event6',
        _type: 'event',
        date: '2019-02-12T00:00:00Z',
        title: 'U.S. Conviction',
        description: 'Convicted on all counts in U.S. federal court',
        eventType: 'other'
      }
    ],
    rewards: [
      {
        _key: 'reward1',
        _type: 'reward',
        amount: 5000000,
        currency: 'USD',
        issuingAgency: 'U.S. Department of State',
        status: 'claimed',
        dateIssued: '2014-01-01'
      }
    ],
    timeline: []
  },
  {
    _id: 'person-mayo-001',
    _type: 'person',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    fullName: 'Ismael Mario Zambada García',
    slug: { current: 'ismael-zambada', _type: 'slug' },
    aliases: ['El Mayo', 'El Rey de Sinaloa'],
    photoUrl: '/images/sample/mayo.jpg',
    dateOfBirth: '1948-01-01',
    placeOfBirth: 'El Álamo, Culiacán, Sinaloa, Mexico',
    nationality: ['Mexican'],
    status: 'captured',
    lastKnownLocation: {
      location: 'U.S. Federal Custody',
      date: '2024-07-25'
    },
    roles: ['Leader', 'Co-Leader'],
    biography: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'Ismael "El Mayo" Zambada is a Mexican drug lord and longtime leader of the Sinaloa Cartel. He was one of the most elusive drug traffickers in history, evading capture for over five decades before his arrest in 2024.'
          }
        ]
      }
    ],
    criminalHistory: [
      {
        _key: 'event1',
        _type: 'event',
        date: '2024-07-25T00:00:00Z',
        title: 'Arrested in United States',
        description: 'Taken into U.S. custody near El Paso, Texas',
        eventType: 'arrest'
      }
    ],
    rewards: [
      {
        _key: 'reward1',
        _type: 'reward',
        amount: 15000000,
        currency: 'USD',
        issuingAgency: 'U.S. Department of State',
        status: 'claimed',
        dateIssued: '2012-09-01'
      }
    ],
    timeline: []
  },
  {
    _id: 'person-mencho-001',
    _type: 'person',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    fullName: 'Nemesio Rubén Oseguera Cervantes',
    slug: { current: 'nemesio-oseguera', _type: 'slug' },
    aliases: ['El Mencho', 'El Señor de los Gallos'],
    photoUrl: '/images/sample/mencho.jpg',
    dateOfBirth: '1966-07-17',
    placeOfBirth: 'Aguililla, Michoacán, Mexico',
    nationality: ['Mexican'],
    status: 'fugitive',
    lastKnownLocation: {
      location: 'Jalisco, Mexico (suspected)',
      date: '2024-01-01'
    },
    roles: ['Leader'],
    biography: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'Nemesio "El Mencho" Oseguera Cervantes is a Mexican drug lord and leader of the Jalisco New Generation Cartel (CJNG). He is one of the most wanted fugitives in both Mexico and the United States, with a $10 million USD reward for information leading to his capture.'
          }
        ]
      }
    ],
    criminalHistory: [],
    rewards: [
      {
        _key: 'reward1',
        _type: 'reward',
        amount: 10000000,
        currency: 'USD',
        issuingAgency: 'U.S. Department of State',
        status: 'active',
        dateIssued: '2018-12-01'
      }
    ],
    timeline: []
  }
]

// ==================== SAMPLE INCIDENTS ====================

export const sampleIncidents: Incident[] = [
  {
    _id: 'incident-001',
    _type: 'incident',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    title: 'Major Fentanyl Seizure in Culiacán',
    slug: { current: 'culiacan-fentanyl-2024', _type: 'slug' },
    date: '2024-06-15T10:00:00Z',
    location: {
      address: 'Culiacán, Sinaloa, Mexico',
      coordinates: {
        _type: 'geopoint',
        lat: 24.8091,
        lng: -107.3940
      }
    },
    incidentType: 'seizure',
    description: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'Mexican Navy forces seized approximately 500 kilograms of fentanyl powder and 2 million fentanyl pills in a raid on a clandestine laboratory in Culiacán. The operation also resulted in the arrest of 12 suspects and the confiscation of laboratory equipment, precursor chemicals, and weapons.'
          }
        ]
      }
    ],
    casualties: {
      arrested: 12
    },
    seized: [
      {
        _key: 'seizure1',
        _type: 'seizure',
        itemType: 'fentanyl',
        quantity: 500,
        unit: 'kg',
        estimatedValue: 50000000,
        currency: 'USD'
      },
      {
        _key: 'seizure2',
        _type: 'seizure',
        itemType: 'fentanyl',
        quantity: 2000000,
        unit: 'pills',
        estimatedValue: 20000000,
        currency: 'USD'
      },
      {
        _key: 'seizure3',
        _type: 'seizure',
        itemType: 'weapons',
        quantity: 15,
        unit: 'pieces'
      }
    ],
    lawEnforcementAgencies: ['Mexican Navy (SEMAR)', 'DEA'],
    outcome: 'Laboratory destroyed, suspects in custody pending charges'
  },
  {
    _id: 'incident-002',
    _type: 'incident',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    title: 'Tunnel Discovery at Tijuana-San Diego Border',
    slug: { current: 'tijuana-tunnel-2024', _type: 'slug' },
    date: '2024-03-10T14:30:00Z',
    location: {
      address: 'Tijuana-San Diego Border',
      coordinates: {
        _type: 'geopoint',
        lat: 32.5427,
        lng: -117.0382
      }
    },
    incidentType: 'seizure',
    description: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'U.S. and Mexican authorities discovered a sophisticated cross-border tunnel measuring approximately 1,700 feet in length, equipped with rail system, ventilation, and lighting. The tunnel connected a warehouse in Tijuana to a residence in San Diego.'
          }
        ]
      }
    ],
    casualties: {
      arrested: 6
    },
    seized: [
      {
        _key: 'seizure1',
        _type: 'seizure',
        itemType: 'cocaine',
        quantity: 1500,
        unit: 'kg',
        estimatedValue: 30000000,
        currency: 'USD'
      }
    ],
    lawEnforcementAgencies: ['U.S. Border Patrol', 'DEA', 'Mexican Federal Police'],
    outcome: 'Tunnel sealed on both sides, smuggling operation dismantled'
  },
  {
    _id: 'incident-003',
    _type: 'incident',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    title: 'Violent Clash in Jalisco Results in Multiple Casualties',
    slug: { current: 'jalisco-clash-2024', _type: 'slug' },
    date: '2024-05-20T16:00:00Z',
    location: {
      address: 'Guadalajara, Jalisco, Mexico',
      coordinates: {
        _type: 'geopoint',
        lat: 20.6597,
        lng: -103.3496
      }
    },
    incidentType: 'violence',
    description: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'A confrontation between rival cartel factions in Guadalajara resulted in a prolonged firefight. Mexican military forces were deployed to restore order.'
          }
        ]
      }
    ],
    casualties: {
      killed: 11,
      wounded: 7,
      arrested: 5
    },
    seized: [
      {
        _key: 'seizure1',
        _type: 'seizure',
        itemType: 'weapons',
        quantity: 32,
        unit: 'pieces'
      },
      {
        _key: 'seizure2',
        _type: 'seizure',
        itemType: 'vehicles',
        quantity: 8,
        unit: 'pieces'
      }
    ],
    lawEnforcementAgencies: ['Mexican Army', 'Jalisco State Police']
  }
]

// ==================== SAMPLE ROUTES ====================

export const sampleRoutes: Route[] = [
  {
    _id: 'route-001',
    _type: 'route',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    name: 'Pacific Coast Corridor',
    slug: { current: 'pacific-coast-corridor', _type: 'slug' },
    routeType: 'land',
    origin: {
      location: 'Colombia',
      coordinates: {
        _type: 'geopoint',
        lat: 4.5709,
        lng: -74.2973
      }
    },
    destination: {
      location: 'United States (California)',
      coordinates: {
        _type: 'geopoint',
        lat: 34.0522,
        lng: -118.2437
      }
    },
    waypoints: [
      {
        _key: 'waypoint1',
        location: 'Panama',
        coordinates: {
          _type: 'geopoint',
          lat: 8.9824,
          lng: -79.5199
        }
      },
      {
        _key: 'waypoint2',
        location: 'Culiacán, Sinaloa',
        coordinates: {
          _type: 'geopoint',
          lat: 24.8091,
          lng: -107.3940
        }
      },
      {
        _key: 'waypoint3',
        location: 'Tijuana',
        coordinates: {
          _type: 'geopoint',
          lat: 32.5149,
          lng: -117.0382
        }
      }
    ],
    commodities: ['cocaine', 'heroin', 'fentanyl', 'methamphetamine'],
    status: 'active',
    description: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'The Pacific Coast Corridor is one of the primary trafficking routes used to transport cocaine from South America through Central America and Mexico into the United States. The route follows the Pacific coastline and is heavily contested by multiple cartel organizations.'
          }
        ]
      }
    ],
    timeline: []
  },
  {
    _id: 'route-002',
    _type: 'route',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    name: 'Gulf of Mexico Maritime Route',
    slug: { current: 'gulf-maritime-route', _type: 'slug' },
    routeType: 'sea',
    origin: {
      location: 'Venezuela',
      coordinates: {
        _type: 'geopoint',
        lat: 10.4806,
        lng: -66.9036
      }
    },
    destination: {
      location: 'Texas Gulf Coast',
      coordinates: {
        _type: 'geopoint',
        lat: 29.7604,
        lng: -95.3698
      }
    },
    commodities: ['cocaine', 'marijuana'],
    status: 'active',
    description: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'Maritime trafficking route using fishing vessels and cargo ships to transport drugs from Venezuela through the Gulf of Mexico to the Texas coastline.'
          }
        ]
      }
    ],
    timeline: []
  },
  {
    _id: 'route-003',
    _type: 'route',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    name: 'Central American Land Bridge',
    slug: { current: 'central-american-land-bridge', _type: 'slug' },
    routeType: 'land',
    origin: {
      location: 'Colombia',
      coordinates: {
        _type: 'geopoint',
        lat: 4.5709,
        lng: -74.2973
      }
    },
    destination: {
      location: 'Mexico-Guatemala Border',
      coordinates: {
        _type: 'geopoint',
        lat: 15.8897,
        lng: -88.5973
      }
    },
    commodities: ['cocaine', 'heroin', 'precursors'],
    status: 'active',
    description: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'Overland route through Central America used primarily for transporting cocaine and heroin northward. The route passes through Panama, Costa Rica, Nicaragua, Honduras, El Salvador, and Guatemala before reaching Mexico.'
          }
        ]
      }
    ],
    timeline: []
  }
]

// ==================== SAMPLE LOCATIONS ====================

export const sampleLocations: Location[] = [
  {
    _id: 'location-001',
    _type: 'location',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    name: 'Culiacán',
    slug: { current: 'culiacan', _type: 'slug' },
    locationType: 'city',
    coordinates: {
      _type: 'geopoint',
      lat: 24.8091,
      lng: -107.3940
    },
    country: 'Mexico',
    significance: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'Culiacán, the capital of Sinaloa state, is considered the birthplace of the Sinaloa Cartel and remains a strategic stronghold for the organization. The city has been the site of numerous significant cartel-related incidents, including the infamous "Culiacanazo" of October 2019.'
          }
        ]
      }
    ]
  },
  {
    _id: 'location-002',
    _type: 'location',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    name: 'Tijuana',
    slug: { current: 'tijuana', _type: 'slug' },
    locationType: 'city',
    coordinates: {
      _type: 'geopoint',
      lat: 32.5149,
      lng: -117.0382
    },
    country: 'Mexico',
    significance: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'Tijuana is one of the most important cities for drug trafficking into the United States due to its location on the California border. The city is home to one of the busiest border crossings in the world and has been the site of intense cartel conflict.'
          }
        ]
      }
    ]
  },
  {
    _id: 'location-003',
    _type: 'location',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    name: 'Guadalajara',
    slug: { current: 'guadalajara', _type: 'slug' },
    locationType: 'city',
    coordinates: {
      _type: 'geopoint',
      lat: 20.6597,
      lng: -103.3496
    },
    country: 'Mexico',
    significance: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'Guadalajara is the birthplace and operational center of the Jalisco New Generation Cartel (CJNG). The metropolitan area has seen significant cartel violence and remains strategically important due to its central location and economic significance.'
          }
        ]
      }
    ]
  },
  {
    _id: 'location-004',
    _type: 'location',
    _createdAt: '2025-01-01T00:00:00Z',
    _updatedAt: '2025-01-01T00:00:00Z',
    _rev: 'v1',
    name: 'Sinaloa',
    slug: { current: 'sinaloa-state', _type: 'slug' },
    locationType: 'state',
    coordinates: {
      _type: 'geopoint',
      lat: 25.0,
      lng: -107.5
    },
    country: 'Mexico',
    significance: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'Sinaloa state is historically the heartland of Mexican drug trafficking, home to the Sinaloa Cartel and numerous drug cultivation and production operations. The state\'s mountainous terrain and Pacific coastline make it ideal for drug production and trafficking.'
          }
        ]
      }
    ]
  }
]

// ==================== DATA GETTER FUNCTIONS ====================

/**
 * Get all cartels
 */
export function getAllCartels(): Cartel[] {
  // Add cross-references
  return sampleCartels.map(cartel => {
    const updatedCartel = { ...cartel }
    
    // Add leaders
    if (cartel._id === 'cartel-sinaloa-001') {
      updatedCartel.leaders = [
        samplePeople.find(p => p._id === 'person-chapo-001')!,
        samplePeople.find(p => p._id === 'person-mayo-001')!
      ]
    } else if (cartel._id === 'cartel-cjng-001') {
      updatedCartel.leaders = [
        samplePeople.find(p => p._id === 'person-mencho-001')!
      ]
    }
    
    // Add rivals
    if (cartel._id === 'cartel-sinaloa-001') {
      updatedCartel.rivals = [
        sampleCartels.find(c => c._id === 'cartel-cjng-001')!
      ]
    } else if (cartel._id === 'cartel-cjng-001') {
      updatedCartel.rivals = [
        sampleCartels.find(c => c._id === 'cartel-sinaloa-001')!
      ]
    }
    
    // Add recent incidents
    updatedCartel.recentIncidents = sampleIncidents.slice(0, 3)
    
    // Add sources
    updatedCartel.sources = [sampleCitations[0]]
    
    return updatedCartel
  })
}

/**
 * Get cartel by slug
 */
export function getCartelBySlug(slug: string): Cartel | null {
  const cartels = getAllCartels()
  return cartels.find(c => c.slug.current === slug) || null
}

/**
 * Get all people
 */
export function getAllPeople(): Person[] {
  return samplePeople.map(person => {
    const updatedPerson = { ...person }
    
    // Add affiliations
    if (person._id === 'person-chapo-001' || person._id === 'person-mayo-001') {
      updatedPerson.affiliations = [
        sampleCartels.find(c => c._id === 'cartel-sinaloa-001')!
      ]
    } else if (person._id === 'person-mencho-001') {
      updatedPerson.affiliations = [
        sampleCartels.find(c => c._id === 'cartel-cjng-001')!
      ]
    }
    
    // Add sources
    updatedPerson.sources = [sampleCitations[1]]
    
    return updatedPerson
  })
}

/**
 * Get person by slug
 */
export function getPersonBySlug(slug: string): Person | null {
  const people = getAllPeople()
  return people.find(p => p.slug.current === slug) || null
}

/**
 * Get all incidents
 */
export function getAllIncidents(): Incident[] {
  return sampleIncidents.map(incident => {
    const updatedIncident = { ...incident }
    
    // Add sources
    updatedIncident.sources = [sampleCitations[2]]
    
    return updatedIncident
  })
}

/**
 * Get incident by slug
 */
export function getIncidentBySlug(slug: string): Incident | null {
  const incidents = getAllIncidents()
  return incidents.find(i => i.slug.current === slug) || null
}

/**
 * Get all routes
 */
export function getAllRoutes(): Route[] {
  return sampleRoutes.map(route => {
    const updatedRoute = { ...route }
    
    // Add controlling cartels
    if (route._id === 'route-001') {
      updatedRoute.controllingCartels = [
        sampleCartels.find(c => c._id === 'cartel-sinaloa-001')!
      ]
    }
    
    // Add sources
    updatedRoute.sources = [sampleCitations[0]]
    
    return updatedRoute
  })
}

/**
 * Get route by slug
 */
export function getRouteBySlug(slug: string): Route | null {
  const routes = getAllRoutes()
  return routes.find(r => r.slug.current === slug) || null
}

/**
 * Get all locations
 */
export function getAllLocations(): Location[] {
  return sampleLocations.map(location => {
    const updatedLocation = { ...location }
    
    // Add controlling cartels
    if (location._id === 'location-001' || location._id === 'location-004') {
      updatedLocation.controllingCartels = [
        sampleCartels.find(c => c._id === 'cartel-sinaloa-001')!
      ]
    } else if (location._id === 'location-003') {
      updatedLocation.controllingCartels = [
        sampleCartels.find(c => c._id === 'cartel-cjng-001')!
      ]
    }
    
    // Add incidents
    updatedLocation.incidents = sampleIncidents.slice(0, 2)
    
    // Add sources
    updatedLocation.sources = [sampleCitations[0]]
    
    return updatedLocation
  })
}

/**
 * Get location by slug
 */
export function getLocationBySlug(slug: string): Location | null {
  const locations = getAllLocations()
  return locations.find(l => l.slug.current === slug) || null
}

/**
 * Search across all entities
 */
export function search(query: string): any[] {
  const lowerQuery = query.toLowerCase()
  const results = []
  
  // Search cartels
  const cartels = getAllCartels()
  for (const cartel of cartels) {
    if (
      cartel.name.toLowerCase().includes(lowerQuery) ||
      cartel.aliases?.some(a => a.toLowerCase().includes(lowerQuery))
    ) {
      results.push({
        _id: cartel._id,
        _type: 'cartel',
        title: cartel.name,
        slug: cartel.slug,
        image: cartel.logoUrl,
        excerpt: cartel.territory?.description,
        url: `/cartels/${cartel.slug.current}`,
        type: 'Cartel'
      })
    }
  }
  
  // Search people
  const people = getAllPeople()
  for (const person of people) {
    if (
      person.fullName.toLowerCase().includes(lowerQuery) ||
      person.aliases?.some(a => a.toLowerCase().includes(lowerQuery))
    ) {
      results.push({
        _id: person._id,
        _type: 'person',
        title: person.fullName,
        slug: person.slug,
        image: person.photoUrl,
        excerpt: person.placeOfBirth,
        url: `/people/${person.slug.current}`,
        type: 'Person'
      })
    }
  }
  
  // Search incidents
  const incidents = getAllIncidents()
  for (const incident of incidents) {
    if (incident.title.toLowerCase().includes(lowerQuery)) {
      results.push({
        _id: incident._id,
        _type: 'incident',
        title: incident.title,
        slug: incident.slug,
        excerpt: incident.location?.address,
        url: `/incidents/${incident.slug.current}`,
        type: 'Incident'
      })
    }
  }
  
  // Search routes
  const routes = getAllRoutes()
  for (const route of routes) {
    if (route.name.toLowerCase().includes(lowerQuery)) {
      results.push({
        _id: route._id,
        _type: 'route',
        title: route.name,
        slug: route.slug,
        excerpt: `${route.origin?.location} to ${route.destination?.location}`,
        url: `/routes/${route.slug.current}`,
        type: 'Route'
      })
    }
  }
  
  // Search locations
  const locations = getAllLocations()
  for (const location of locations) {
    if (location.name.toLowerCase().includes(lowerQuery)) {
      results.push({
        _id: location._id,
        _type: 'location',
        title: location.name,
        slug: location.slug,
        excerpt: location.country,
        url: `/locations/${location.slug.current}`,
        type: 'Location'
      })
    }
  }
  
  return results.slice(0, 20)
}


