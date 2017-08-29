const assert = require(`assert`);
const { nn, knn } = require(`./index`);

// Sample object
const SampleSrc = {
  portalId: 3814536,
  companyId: 517516752,
  isDeleted: false,
  properties: {
    zip: {
      value: `72029`,
      timestamp: 1502837666491,
      source: `API`,
      sourceId: null,
      versions: [
        { name: `zip`, value: `72029`, timestamp: 1502837666491, source: `API`, sourceVid: [] },
      ],
    },
    country: {
      value: `Ukraine`,
      timestamp: 1502837666491,
      source: `API`,
      sourceId: null,
      versions: [
        {
          name: `country`,
          value: `Ukraine`,
          timestamp: 1502837666491,
          source: `API`,
          sourceVid: [],
        },
      ],
    },
    website: {
      value: `https://toni.biz`,
      timestamp: 1502837666491,
      source: `API`,
      sourceId: null,
      versions: [
        {
          name: `website`,
          value: `https://toni.biz`,
          timestamp: 1502837666491,
          source: `API`,
          sourceVid: [],
        },
      ],
    },
    address: {
      value: `6929 Avis Lodge`,
      timestamp: 1502837666491,
      source: `API`,
      sourceId: null,
      versions: [
        {
          name: `address`,
          value: `6929 Avis Lodge`,
          timestamp: 1502837666491,
          source: `API`,
          sourceVid: [],
        },
      ],
    },
    city: {
      value: `Dooleytown`,
      timestamp: 1502837666491,
      source: `API`,
      sourceId: null,
      versions: [
        {
          name: `city`,
          value: `Dooleytown`,
          timestamp: 1502837666491,
          source: `API`,
          sourceVid: [],
        },
      ],
    },
    num_associated_contacts: {
      value: `2`,
      timestamp: 1503007230244,
      source: `COMPANIES`,
      sourceId: null,
      versions: [
        {
          name: `num_associated_contacts`,
          value: `2`,
          timestamp: 1503007230244,
          source: `COMPANIES`,
          sourceVid: [],
        },
      ],
    },
    createdate: {
      value: `1502837666491`,
      timestamp: 1502837666491,
      source: `API`,
      sourceId: `API`,
      versions: [
        {
          name: `createdate`,
          value: `1502837666491`,
          timestamp: 1502837666491,
          sourceId: `API`,
          source: `API`,
          sourceVid: [],
        },
      ],
    },
    description: {
      value: `vertical harness networks`,
      timestamp: 1502837666491,
      source: `API`,
      sourceId: null,
      versions: [
        {
          name: `description`,
          value: `vertical harness networks`,
          timestamp: 1502837666491,
          source: `API`,
          sourceVid: [],
        },
      ],
    },
    numberofemployees: {
      value: `1535`,
      timestamp: 1502837666491,
      source: `API`,
      sourceId: null,
      versions: [
        {
          name: `numberofemployees`,
          value: `1535`,
          timestamp: 1502837666491,
          source: `API`,
          sourceVid: [],
        },
      ],
    },
    phone: {
      value: `449-042-8992`,
      timestamp: 1502837666491,
      source: `API`,
      sourceId: null,
      versions: [
        {
          name: `phone`,
          value: `449-042-8992`,
          timestamp: 1502837666491,
          source: `API`,
          sourceVid: [],
        },
      ],
    },
    annualrevenue: {
      value: `21289`,
      timestamp: 1502837666491,
      source: `API`,
      sourceId: null,
      versions: [
        {
          name: `annualrevenue`,
          value: `21289`,
          timestamp: 1502837666491,
          source: `API`,
          sourceVid: [],
        },
      ],
    },
    domain: {
      value: `stacy.com`,
      timestamp: 1502837666491,
      source: `API`,
      sourceId: null,
      versions: [
        {
          name: `domain`,
          value: `stacy.com`,
          timestamp: 1502837666491,
          source: `API`,
          sourceVid: [],
        },
      ],
    },
    is_public: {
      value: `true`,
      timestamp: 1502837666491,
      source: `API`,
      sourceId: null,
      versions: [
        {
          name: `is_public`,
          value: `true`,
          timestamp: 1502837666491,
          source: `API`,
          sourceVid: [],
        },
      ],
    },
    name: {
      value: `Ledner, Walsh and Stehr`,
      timestamp: 1502837666491,
      source: `API`,
      sourceId: null,
      versions: [
        {
          name: `name`,
          value: `Ledner, Walsh and Stehr`,
          timestamp: 1502837666491,
          source: `API`,
          sourceVid: [],
        },
      ],
    },
    state: {
      value: `West Virginia`,
      timestamp: 1502837666491,
      source: `API`,
      sourceId: null,
      versions: [
        {
          name: `state`,
          value: `West Virginia`,
          timestamp: 1502837666491,
          source: `API`,
          sourceVid: [],
        },
      ],
    },
  },
  additionalDomains: [],
  stateChanges: [],
  mergeAudits: [],
};
// Sample trained set
const SampleDst = [
  {
    portalId: 3865256,
    companyId: 530676380,
    isDeleted: false,
    properties: {
      zip: {
        value: `72029`,
        timestamp: 1504028544364,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `zip`,
            value: `72029`,
            timestamp: 1504028544364,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      country: {
        value: `Ukraine`,
        timestamp: 1504028544364,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `country`,
            value: `Ukraine`,
            timestamp: 1504028544364,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      website: {
        value: `https://toni.biz`,
        timestamp: 1504028544364,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `website`,
            value: `https://toni.biz`,
            timestamp: 1504028544364,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      address: {
        value: `6929 Avis Lodge`,
        timestamp: 1504028544364,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `address`,
            value: `6929 Avis Lodge`,
            timestamp: 1504028544364,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      city: {
        value: `Dooleytown`,
        timestamp: 1504028544364,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `city`,
            value: `Dooleytown`,
            timestamp: 1504028544364,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      createdate: {
        value: `1504028544364`,
        timestamp: 1504028544364,
        source: `API`,
        sourceId: `API`,
        versions: [
          {
            name: `createdate`,
            value: `1504028544364`,
            timestamp: 1504028544364,
            sourceId: `API`,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      description: {
        value: `vertical harness networks`,
        timestamp: 1504028544364,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `description`,
            value: `vertical harness networks`,
            timestamp: 1504028544364,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      numberofemployees: {
        value: `1535`,
        timestamp: 1504028544364,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `numberofemployees`,
            value: `1535`,
            timestamp: 1504028544364,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      phone: {
        value: `449-042-8992`,
        timestamp: 1504028544364,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `phone`,
            value: `449-042-8992`,
            timestamp: 1504028544364,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      annualrevenue: {
        value: `21289`,
        timestamp: 1504028544364,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `annualrevenue`,
            value: `21289`,
            timestamp: 1504028544364,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      domain: {
        value: `stacy.com`,
        timestamp: 1504028544364,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `domain`,
            value: `stacy.com`,
            timestamp: 1504028544364,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      is_public: {
        value: `true`,
        timestamp: 1504028544364,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `is_public`,
            value: `true`,
            timestamp: 1504028544364,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      name: {
        value: `Ledner, Walsh and Stehr`,
        timestamp: 1504028544364,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `name`,
            value: `Ledner, Walsh and Stehr`,
            timestamp: 1504028544364,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      state: {
        value: `West Virginia`,
        timestamp: 1504028544364,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `state`,
            value: `West Virginia`,
            timestamp: 1504028544364,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
    },
    additionalDomains: [],
    stateChanges: [],
    mergeAudits: [],
  },
  {
    portalId: 3865256,
    companyId: 530676381,
    isDeleted: false,
    properties: {
      zip: {
        value: `47171`,
        timestamp: 1504028544370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `zip`,
            value: `47171`,
            timestamp: 1504028544370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      country: {
        value: `Saint Barthelemy`,
        timestamp: 1504028544370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `country`,
            value: `Saint Barthelemy`,
            timestamp: 1504028544370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      website: {
        value: `https://angelina.org`,
        timestamp: 1504028544370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `website`,
            value: `https://angelina.org`,
            timestamp: 1504028544370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      address: {
        value: `64833 Amaya Points`,
        timestamp: 1504028544370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `address`,
            value: `64833 Amaya Points`,
            timestamp: 1504028544370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      city: {
        value: `Rueckermouth`,
        timestamp: 1504028544370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `city`,
            value: `Rueckermouth`,
            timestamp: 1504028544370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      timezone: {
        value: `America/Los_Angeles`,
        timestamp: 1504028544649,
        source: `BIDEN`,
        sourceId: `BidenPropertyMappings`,
        versions: [
          {
            name: `timezone`,
            value: `America/Los_Angeles`,
            timestamp: 1504028544649,
            sourceId: `BidenPropertyMappings`,
            source: `BIDEN`,
            sourceVid: [],
          },
        ],
      },
      createdate: {
        value: `1504028544370`,
        timestamp: 1504028544370,
        source: `API`,
        sourceId: `API`,
        versions: [
          {
            name: `createdate`,
            value: `1504028544370`,
            timestamp: 1504028544370,
            sourceId: `API`,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      description: {
        value: `rich monetize e-markets`,
        timestamp: 1504028544370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `description`,
            value: `rich monetize e-markets`,
            timestamp: 1504028544370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      industry: {
        value: `COMPUTER_SOFTWARE`,
        timestamp: 1504028544650,
        source: `BIDEN`,
        sourceId: `BidenPropertyMappings`,
        versions: [
          {
            name: `industry`,
            value: `COMPUTER_SOFTWARE`,
            timestamp: 1504028544650,
            sourceId: `BidenPropertyMappings`,
            source: `BIDEN`,
            sourceVid: [],
          },
        ],
      },
      numberofemployees: {
        value: `853`,
        timestamp: 1504028544370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `numberofemployees`,
            value: `853`,
            timestamp: 1504028544370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      phone: {
        value: `(135) 384-2567`,
        timestamp: 1504028544370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `phone`,
            value: `(135) 384-2567`,
            timestamp: 1504028544370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      annualrevenue: {
        value: `20305`,
        timestamp: 1504028544370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `annualrevenue`,
            value: `20305`,
            timestamp: 1504028544370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      domain: {
        value: `oliver.com`,
        timestamp: 1504028544370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `domain`,
            value: `oliver.com`,
            timestamp: 1504028544370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      is_public: {
        value: `true`,
        timestamp: 1504028544370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `is_public`,
            value: `true`,
            timestamp: 1504028544370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      name: {
        value: `Turcotte - Runolfsdottir`,
        timestamp: 1504028544370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `name`,
            value: `Turcotte - Runolfsdottir`,
            timestamp: 1504028544370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      state: {
        value: `Ohio`,
        timestamp: 1504028544370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `state`,
            value: `Ohio`,
            timestamp: 1504028544370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
    },
    additionalDomains: [],
    stateChanges: [],
    mergeAudits: [],
  },
  {
    portalId: 3865256,
    companyId: 530676382,
    isDeleted: false,
    properties: {
      zip: {
        value: `77586-8242`,
        timestamp: 1504028544371,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `zip`,
            value: `77586-8242`,
            timestamp: 1504028544371,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      country: {
        value: `Djibouti`,
        timestamp: 1504028544371,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `country`,
            value: `Djibouti`,
            timestamp: 1504028544371,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      website: {
        value: `http://christophe.org`,
        timestamp: 1504028544371,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `website`,
            value: `http://christophe.org`,
            timestamp: 1504028544371,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      address: {
        value: `65479 Dibbert Trail`,
        timestamp: 1504028544371,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `address`,
            value: `65479 Dibbert Trail`,
            timestamp: 1504028544371,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      city: {
        value: `Beattyshire`,
        timestamp: 1504028544371,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `city`,
            value: `Beattyshire`,
            timestamp: 1504028544371,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      createdate: {
        value: `1504028544371`,
        timestamp: 1504028544371,
        source: `API`,
        sourceId: `API`,
        versions: [
          {
            name: `createdate`,
            value: `1504028544371`,
            timestamp: 1504028544371,
            sourceId: `API`,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      description: {
        value: `B2B expedite interfaces`,
        timestamp: 1504028544371,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `description`,
            value: `B2B expedite interfaces`,
            timestamp: 1504028544371,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      numberofemployees: {
        value: `242`,
        timestamp: 1504028544371,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `numberofemployees`,
            value: `242`,
            timestamp: 1504028544371,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      phone: {
        value: `385.272.4825 x68411`,
        timestamp: 1504028544371,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `phone`,
            value: `385.272.4825 x68411`,
            timestamp: 1504028544371,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      annualrevenue: {
        value: `45960`,
        timestamp: 1504028544371,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `annualrevenue`,
            value: `45960`,
            timestamp: 1504028544371,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      domain: {
        value: `spencer.info`,
        timestamp: 1504028544371,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `domain`,
            value: `spencer.info`,
            timestamp: 1504028544371,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      is_public: {
        value: `false`,
        timestamp: 1504028544371,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `is_public`,
            value: `false`,
            timestamp: 1504028544371,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      name: {
        value: `Hackett - Padberg`,
        timestamp: 1504028544371,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `name`,
            value: `Hackett - Padberg`,
            timestamp: 1504028544371,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      state: {
        value: `Nevada`,
        timestamp: 1504028544371,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `state`,
            value: `Nevada`,
            timestamp: 1504028544371,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
    },
    additionalDomains: [],
    stateChanges: [],
    mergeAudits: [],
  },
  {
    portalId: 3865256,
    companyId: 530676387,
    isDeleted: false,
    properties: {
      zip: {
        value: `43526-6804`,
        timestamp: 1504028545612,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `zip`,
            value: `43526-6804`,
            timestamp: 1504028545612,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      country: {
        value: `Sao Tome and Principe`,
        timestamp: 1504028545612,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `country`,
            value: `Sao Tome and Principe`,
            timestamp: 1504028545612,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      website: {
        value: `http://nona.biz`,
        timestamp: 1504028545612,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `website`,
            value: `http://nona.biz`,
            timestamp: 1504028545612,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      address: {
        value: `619 Kuphal Lodge`,
        timestamp: 1504028545612,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `address`,
            value: `619 Kuphal Lodge`,
            timestamp: 1504028545612,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      city: {
        value: `Koelpinfort`,
        timestamp: 1504028545612,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `city`,
            value: `Koelpinfort`,
            timestamp: 1504028545612,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      createdate: {
        value: `1504028545612`,
        timestamp: 1504028545612,
        source: `API`,
        sourceId: `API`,
        versions: [
          {
            name: `createdate`,
            value: `1504028545612`,
            timestamp: 1504028545612,
            sourceId: `API`,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      description: {
        value: `transparent mesh ROI`,
        timestamp: 1504028545612,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `description`,
            value: `transparent mesh ROI`,
            timestamp: 1504028545612,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      numberofemployees: {
        value: `1684`,
        timestamp: 1504028545612,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `numberofemployees`,
            value: `1684`,
            timestamp: 1504028545612,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      phone: {
        value: `709-062-9700`,
        timestamp: 1504028545612,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `phone`,
            value: `709-062-9700`,
            timestamp: 1504028545612,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      annualrevenue: {
        value: `54400`,
        timestamp: 1504028545612,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `annualrevenue`,
            value: `54400`,
            timestamp: 1504028545612,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      domain: {
        value: `ethel.biz`,
        timestamp: 1504028545612,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `domain`,
            value: `ethel.biz`,
            timestamp: 1504028545612,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      is_public: {
        value: `false`,
        timestamp: 1504028545612,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `is_public`,
            value: `false`,
            timestamp: 1504028545612,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      name: {
        value: `Mitchell, Tromp and Blanda`,
        timestamp: 1504028545612,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `name`,
            value: `Mitchell, Tromp and Blanda`,
            timestamp: 1504028545612,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      state: {
        value: `Illinois`,
        timestamp: 1504028545612,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `state`,
            value: `Illinois`,
            timestamp: 1504028545612,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
    },
    additionalDomains: [],
    stateChanges: [],
    mergeAudits: [],
  },
  {
    portalId: 3865256,
    companyId: 530676392,
    isDeleted: false,
    properties: {
      zip: {
        value: `26120-1525`,
        timestamp: 1504028546963,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `zip`,
            value: `26120-1525`,
            timestamp: 1504028546963,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      country: {
        value: `Angola`,
        timestamp: 1504028546963,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `country`,
            value: `Angola`,
            timestamp: 1504028546963,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      website: {
        value: `https://hipolito.name`,
        timestamp: 1504028546963,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `website`,
            value: `https://hipolito.name`,
            timestamp: 1504028546963,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      address: {
        value: `4989 Mellie Harbors`,
        timestamp: 1504028546963,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `address`,
            value: `4989 Mellie Harbors`,
            timestamp: 1504028546963,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      city: {
        value: `Gusikowskiland`,
        timestamp: 1504028546963,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `city`,
            value: `Gusikowskiland`,
            timestamp: 1504028546963,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      createdate: {
        value: `1504028546963`,
        timestamp: 1504028546963,
        source: `API`,
        sourceId: `API`,
        versions: [
          {
            name: `createdate`,
            value: `1504028546963`,
            timestamp: 1504028546963,
            sourceId: `API`,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      description: {
        value: `end-to-end monetize e-services`,
        timestamp: 1504028546963,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `description`,
            value: `end-to-end monetize e-services`,
            timestamp: 1504028546963,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      numberofemployees: {
        value: `973`,
        timestamp: 1504028546963,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `numberofemployees`,
            value: `973`,
            timestamp: 1504028546963,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      phone: {
        value: `932.731.4749`,
        timestamp: 1504028546963,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `phone`,
            value: `932.731.4749`,
            timestamp: 1504028546963,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      annualrevenue: {
        value: `98312`,
        timestamp: 1504028546963,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `annualrevenue`,
            value: `98312`,
            timestamp: 1504028546963,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      domain: {
        value: `lela.info`,
        timestamp: 1504028546963,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `domain`,
            value: `lela.info`,
            timestamp: 1504028546963,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      is_public: {
        value: `false`,
        timestamp: 1504028546963,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `is_public`,
            value: `false`,
            timestamp: 1504028546963,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      name: {
        value: `Volkman, O'Kon and Medhurst`,
        timestamp: 1504028546963,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `name`,
            value: `Volkman, O'Kon and Medhurst`,
            timestamp: 1504028546963,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      state: {
        value: `Missouri`,
        timestamp: 1504028546963,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `state`,
            value: `Missouri`,
            timestamp: 1504028546963,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
    },
    additionalDomains: [],
    stateChanges: [],
    mergeAudits: [],
  },
  {
    portalId: 3865256,
    companyId: 530676393,
    isDeleted: false,
    properties: {
      zip: {
        value: `88662`,
        timestamp: 1504028546985,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `zip`,
            value: `88662`,
            timestamp: 1504028546985,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      country: {
        value: `United Kingdom`,
        timestamp: 1504028546985,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `country`,
            value: `United Kingdom`,
            timestamp: 1504028546985,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      website: {
        value: `https://grover.org`,
        timestamp: 1504028546985,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `website`,
            value: `https://grover.org`,
            timestamp: 1504028546985,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      address: {
        value: `619 Rippin Manors`,
        timestamp: 1504028546985,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `address`,
            value: `619 Rippin Manors`,
            timestamp: 1504028546985,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      city: {
        value: `Lake Leonardchester`,
        timestamp: 1504028546985,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `city`,
            value: `Lake Leonardchester`,
            timestamp: 1504028546985,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      createdate: {
        value: `1504028546985`,
        timestamp: 1504028546985,
        source: `API`,
        sourceId: `API`,
        versions: [
          {
            name: `createdate`,
            value: `1504028546985`,
            timestamp: 1504028546985,
            sourceId: `API`,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      description: {
        value: `interactive incentivize portals`,
        timestamp: 1504028546985,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `description`,
            value: `interactive incentivize portals`,
            timestamp: 1504028546985,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      numberofemployees: {
        value: `233`,
        timestamp: 1504028546985,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `numberofemployees`,
            value: `233`,
            timestamp: 1504028546985,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      phone: {
        value: `(350) 590-4040 x19314`,
        timestamp: 1504028546985,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `phone`,
            value: `(350) 590-4040 x19314`,
            timestamp: 1504028546985,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      annualrevenue: {
        value: `24907`,
        timestamp: 1504028546985,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `annualrevenue`,
            value: `24907`,
            timestamp: 1504028546985,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      domain: {
        value: `lupe.info`,
        timestamp: 1504028546985,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `domain`,
            value: `lupe.info`,
            timestamp: 1504028546985,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      is_public: {
        value: `true`,
        timestamp: 1504028546985,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `is_public`,
            value: `true`,
            timestamp: 1504028546985,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      name: {
        value: `Corwin - Becker`,
        timestamp: 1504028546985,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `name`,
            value: `Corwin - Becker`,
            timestamp: 1504028546985,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      state: {
        value: `Florida`,
        timestamp: 1504028546985,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `state`,
            value: `Florida`,
            timestamp: 1504028546985,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
    },
    additionalDomains: [],
    stateChanges: [],
    mergeAudits: [],
  },
  {
    portalId: 3865256,
    companyId: 530676398,
    isDeleted: false,
    properties: {
      zip: {
        value: `45420`,
        timestamp: 1504028548201,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `zip`,
            value: `45420`,
            timestamp: 1504028548201,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      country: {
        value: `Malta`,
        timestamp: 1504028548201,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `country`,
            value: `Malta`,
            timestamp: 1504028548201,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      website: {
        value: `https://lionel.org`,
        timestamp: 1504028548201,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `website`,
            value: `https://lionel.org`,
            timestamp: 1504028548201,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      address: {
        value: `46223 Mayert Turnpike`,
        timestamp: 1504028548201,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `address`,
            value: `46223 Mayert Turnpike`,
            timestamp: 1504028548201,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      city: {
        value: `Mrazfort`,
        timestamp: 1504028548201,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `city`,
            value: `Mrazfort`,
            timestamp: 1504028548201,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      createdate: {
        value: `1504028548201`,
        timestamp: 1504028548201,
        source: `API`,
        sourceId: `API`,
        versions: [
          {
            name: `createdate`,
            value: `1504028548201`,
            timestamp: 1504028548201,
            sourceId: `API`,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      description: {
        value: `visionary evolve interfaces`,
        timestamp: 1504028548201,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `description`,
            value: `visionary evolve interfaces`,
            timestamp: 1504028548201,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      numberofemployees: {
        value: `415`,
        timestamp: 1504028548201,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `numberofemployees`,
            value: `415`,
            timestamp: 1504028548201,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      phone: {
        value: `448-076-2997 x0867`,
        timestamp: 1504028548201,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `phone`,
            value: `448-076-2997 x0867`,
            timestamp: 1504028548201,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      annualrevenue: {
        value: `43801`,
        timestamp: 1504028548201,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `annualrevenue`,
            value: `43801`,
            timestamp: 1504028548201,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      domain: {
        value: `brannon.org`,
        timestamp: 1504028548201,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `domain`,
            value: `brannon.org`,
            timestamp: 1504028548201,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      is_public: {
        value: `false`,
        timestamp: 1504028548201,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `is_public`,
            value: `false`,
            timestamp: 1504028548201,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      name: {
        value: `Koepp - Senger`,
        timestamp: 1504028548201,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `name`,
            value: `Koepp - Senger`,
            timestamp: 1504028548201,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      state: {
        value: `Maryland`,
        timestamp: 1504028548201,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `state`,
            value: `Maryland`,
            timestamp: 1504028548201,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
    },
    additionalDomains: [],
    stateChanges: [],
    mergeAudits: [],
  },
  {
    portalId: 3865256,
    companyId: 530676399,
    isDeleted: false,
    properties: {
      zip: {
        value: `37402-4413`,
        timestamp: 1504028548208,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `zip`,
            value: `37402-4413`,
            timestamp: 1504028548208,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      country: {
        value: `Turkey`,
        timestamp: 1504028548208,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `country`,
            value: `Turkey`,
            timestamp: 1504028548208,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      website: {
        value: `http://aurelia.net`,
        timestamp: 1504028548208,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `website`,
            value: `http://aurelia.net`,
            timestamp: 1504028548208,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      address: {
        value: `13950 Schiller Mountain`,
        timestamp: 1504028548208,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `address`,
            value: `13950 Schiller Mountain`,
            timestamp: 1504028548208,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      city: {
        value: `Schinnertown`,
        timestamp: 1504028548208,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `city`,
            value: `Schinnertown`,
            timestamp: 1504028548208,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      createdate: {
        value: `1504028548208`,
        timestamp: 1504028548208,
        source: `API`,
        sourceId: `API`,
        versions: [
          {
            name: `createdate`,
            value: `1504028548208`,
            timestamp: 1504028548208,
            sourceId: `API`,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      description: {
        value: `web-enabled deliver architectures`,
        timestamp: 1504028548208,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `description`,
            value: `web-enabled deliver architectures`,
            timestamp: 1504028548208,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      numberofemployees: {
        value: `671`,
        timestamp: 1504028548208,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `numberofemployees`,
            value: `671`,
            timestamp: 1504028548208,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      phone: {
        value: `(121) 668-3560`,
        timestamp: 1504028548208,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `phone`,
            value: `(121) 668-3560`,
            timestamp: 1504028548208,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      annualrevenue: {
        value: `49940`,
        timestamp: 1504028548208,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `annualrevenue`,
            value: `49940`,
            timestamp: 1504028548208,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      domain: {
        value: `jedediah.info`,
        timestamp: 1504028548208,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `domain`,
            value: `jedediah.info`,
            timestamp: 1504028548208,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      is_public: {
        value: `false`,
        timestamp: 1504028548208,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `is_public`,
            value: `false`,
            timestamp: 1504028548208,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      name: {
        value: `Murray - Rogahn`,
        timestamp: 1504028548208,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `name`,
            value: `Murray - Rogahn`,
            timestamp: 1504028548208,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      state: {
        value: `New Mexico`,
        timestamp: 1504028548208,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `state`,
            value: `New Mexico`,
            timestamp: 1504028548208,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
    },
    additionalDomains: [],
    stateChanges: [],
    mergeAudits: [],
  },
  {
    portalId: 3865256,
    companyId: 530676403,
    isDeleted: false,
    properties: {
      zip: {
        value: `06995-6460`,
        timestamp: 1504028549359,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `zip`,
            value: `06995-6460`,
            timestamp: 1504028549359,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      country: {
        value: `Equatorial Guinea`,
        timestamp: 1504028549359,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `country`,
            value: `Equatorial Guinea`,
            timestamp: 1504028549359,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      website: {
        value: `https://edward.org`,
        timestamp: 1504028549359,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `website`,
            value: `https://edward.org`,
            timestamp: 1504028549359,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      address: {
        value: `289 Anika Springs`,
        timestamp: 1504028549359,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `address`,
            value: `289 Anika Springs`,
            timestamp: 1504028549359,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      city: {
        value: `Elfriedatown`,
        timestamp: 1504028549359,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `city`,
            value: `Elfriedatown`,
            timestamp: 1504028549359,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      timezone: {
        value: `America/Chicago`,
        timestamp: 1504028549550,
        source: `BIDEN`,
        sourceId: `BidenPropertyMappings`,
        versions: [
          {
            name: `timezone`,
            value: `America/Chicago`,
            timestamp: 1504028549550,
            sourceId: `BidenPropertyMappings`,
            source: `BIDEN`,
            sourceVid: [],
          },
        ],
      },
      createdate: {
        value: `1504028549359`,
        timestamp: 1504028549359,
        source: `API`,
        sourceId: `API`,
        versions: [
          {
            name: `createdate`,
            value: `1504028549359`,
            timestamp: 1504028549359,
            sourceId: `API`,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      description: {
        value: `customized extend networks`,
        timestamp: 1504028549359,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `description`,
            value: `customized extend networks`,
            timestamp: 1504028549359,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      numberofemployees: {
        value: `1253`,
        timestamp: 1504028549359,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `numberofemployees`,
            value: `1253`,
            timestamp: 1504028549359,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      phone: {
        value: `1-176-438-8340 x29293`,
        timestamp: 1504028549359,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `phone`,
            value: `1-176-438-8340 x29293`,
            timestamp: 1504028549359,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      annualrevenue: {
        value: `56922`,
        timestamp: 1504028549359,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `annualrevenue`,
            value: `56922`,
            timestamp: 1504028549359,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      domain: {
        value: `paul.org`,
        timestamp: 1504028549359,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `domain`,
            value: `paul.org`,
            timestamp: 1504028549359,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      is_public: {
        value: `false`,
        timestamp: 1504028549359,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `is_public`,
            value: `false`,
            timestamp: 1504028549359,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      name: {
        value: `Smith - Heidenreich`,
        timestamp: 1504028549359,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `name`,
            value: `Smith - Heidenreich`,
            timestamp: 1504028549359,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      state: {
        value: `Minnesota`,
        timestamp: 1504028549359,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `state`,
            value: `Minnesota`,
            timestamp: 1504028549359,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
    },
    additionalDomains: [],
    stateChanges: [],
    mergeAudits: [],
  },
  {
    portalId: 3865256,
    companyId: 530676404,
    isDeleted: false,
    properties: {
      zip: {
        value: `33548`,
        timestamp: 1504028549370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `zip`,
            value: `33548`,
            timestamp: 1504028549370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      country: {
        value: `Kuwait`,
        timestamp: 1504028549370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `country`,
            value: `Kuwait`,
            timestamp: 1504028549370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      website: {
        value: `https://aliya.info`,
        timestamp: 1504028549370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `website`,
            value: `https://aliya.info`,
            timestamp: 1504028549370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      address: {
        value: `617 Mraz Greens`,
        timestamp: 1504028549370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `address`,
            value: `617 Mraz Greens`,
            timestamp: 1504028549370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      city: {
        value: `South Carter`,
        timestamp: 1504028549370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `city`,
            value: `South Carter`,
            timestamp: 1504028549370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      createdate: {
        value: `1504028549370`,
        timestamp: 1504028549370,
        source: `API`,
        sourceId: `API`,
        versions: [
          {
            name: `createdate`,
            value: `1504028549370`,
            timestamp: 1504028549370,
            sourceId: `API`,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      description: {
        value: `end-to-end whiteboard communities`,
        timestamp: 1504028549370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `description`,
            value: `end-to-end whiteboard communities`,
            timestamp: 1504028549370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      numberofemployees: {
        value: `1131`,
        timestamp: 1504028549370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `numberofemployees`,
            value: `1131`,
            timestamp: 1504028549370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      phone: {
        value: `1-416-533-5439`,
        timestamp: 1504028549370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `phone`,
            value: `1-416-533-5439`,
            timestamp: 1504028549370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      annualrevenue: {
        value: `30504`,
        timestamp: 1504028549370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `annualrevenue`,
            value: `30504`,
            timestamp: 1504028549370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      domain: {
        value: `graciela.com`,
        timestamp: 1504028549370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `domain`,
            value: `graciela.com`,
            timestamp: 1504028549370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      is_public: {
        value: `false`,
        timestamp: 1504028549370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `is_public`,
            value: `false`,
            timestamp: 1504028549370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      name: {
        value: `Mohr, Waters and McDermott`,
        timestamp: 1504028549370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `name`,
            value: `Mohr, Waters and McDermott`,
            timestamp: 1504028549370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
      state: {
        value: `Wisconsin`,
        timestamp: 1504028549370,
        source: `API`,
        sourceId: null,
        versions: [
          {
            name: `state`,
            value: `Wisconsin`,
            timestamp: 1504028549370,
            source: `API`,
            sourceVid: [],
          },
        ],
      },
    },
    additionalDomains: [],
    stateChanges: [],
    mergeAudits: [],
  },
];

const EXCLUDED_PROPS = [`portalId`, `companyId`, `timestamp`, `sourceId`, `versions`, `createdate`];

const bestfit = nn(SampleSrc, SampleDst, { exclusiveProps: EXCLUDED_PROPS });

const bestkfits = knn(SampleSrc, SampleDst, {
  k: 5,
  inclusiveProps: [`properties`],
  exclusiveProps: EXCLUDED_PROPS,
});

Object.entries(bestfit.value.properties)
  .filter(([key]) => !EXCLUDED_PROPS.includes(key))
  .forEach(([key, { value }]) =>
    assert.strictEqual(
      value,
      SampleSrc.properties[key].value,
      `bestfit's properties should be exactly the same as SampleSrc`,
    ),
  );
console.log(`[Success] bestfit's properties is exactly the same as SampleSrc`);

assert.strictEqual(bestkfits.length, 5, `k = 5 should return 5 results.`);
bestkfits.reduce(
  (lastErr, { error }) => (
    assert(lastErr <= error, `bestkfits should be sorted ascendingly by error.`), error
  ),
  0,
);

console.log(`[Success] bestkfits is sorted ascendingly by error.`);
console.log(`[Success] test successful`);
