import campaignUtils from './campaigns';

const MOCKED_CAMPAIGNS = [
  {
    id: 1,
    name: 'Divavu',
    startDate: '9/19/2017',
    endDate: '3/9/2018',
    Budget: 88377,
    userId: 3,
  },
  {
    id: 2,
    name: 'Jaxspanboo',
    startDate: '11/21/2017',
    endDate: '2/21/2018',
    Budget: 608715,
    userId: 6,
  },
  {
    id: 3,
    name: 'Miboo',
    startDate: '11/1/2017',
    endDate: '6/20/2017',
    Budget: 239507,
    userId: 7,
  },
];

const MOCKED_USERS = [
  { id: 3, name: 'USER-1' },
  { id: 6, name: 'USER-6' },
  { id: 7, name: 'USER-7' },
];

const CAMPAIGNS_TABLE_CONFIG = [
  { label: 'Name', key: 'name' },
  { label: 'User Name', key: 'userName' },
  { label: 'Start Date', key: 'startDate' },
  { label: 'End Date', key: 'endDate' },
  { label: 'Active', key: 'isActive' },
  { label: 'Budget', key: 'budget' },
];

describe('campaignUtils', () => {
  describe('mapDataToStore', () => {
    it('should work with different letter casing', () => {
      const mappedData = campaignUtils.mapDataToStore(
        MOCKED_CAMPAIGNS,
        MOCKED_USERS
      );
      const expectedData = [
        {
          id: 1,
          name: 'Divavu',
          userId: 3,
          userName: 'USER-1',
          startDate: '9/19/2017',
          endDate: '3/9/2018',
          isActive: false,
          budget: 88377,
        },
        {
          id: 2,
          name: 'Jaxspanboo',
          userId: 6,
          userName: 'USER-6',
          startDate: '11/21/2017',
          endDate: '2/21/2018',
          isActive: false,
          budget: 608715,
        },
        {
          id: 3,
          name: 'Miboo',
          userId: 7,
          userName: 'USER-7',
          startDate: '11/1/2017',
          endDate: '6/20/2017',
          isActive: false,
          budget: 239507,
        },
      ];

      expect(mappedData).toStrictEqual(expectedData);
    });
  });

  describe('getTableData', () => {
    it('should map campaigns data to table data', () => {
      const tableData = campaignUtils.getTableData(
        campaignUtils.mapDataToStore(MOCKED_CAMPAIGNS, MOCKED_USERS),
        CAMPAIGNS_TABLE_CONFIG
      );
      const expectedTableData = {
        head: [
          { label: 'Name', key: 'name' },
          { label: 'User Name', key: 'userName' },
          { label: 'Start Date', key: 'startDate' },
          { label: 'End Date', key: 'endDate' },
          { label: 'Active', key: 'isActive' },
          { label: 'Budget', key: 'budget' },
        ],
        body: [
          {
            rowKey: 1,
            rowData: [
              { colKey: '1-Divavu', colData: 'Divavu' },
              { colKey: '1-USER-1', colData: 'USER-1' },
              { colKey: '1-9/19/2017', colData: '9/19/2017' },
              { colKey: '1-3/9/2018', colData: '3/9/2018' },
              { colKey: '1-false', colData: false },
              { colKey: '1-88377', colData: 88377 },
            ],
          },
          {
            rowKey: 2,
            rowData: [
              { colKey: '2-Jaxspanboo', colData: 'Jaxspanboo' },
              {
                colKey: '2-USER-6',
                colData: 'USER-6',
              },
              { colKey: '2-11/21/2017', colData: '11/21/2017' },
              { colKey: '2-2/21/2018', colData: '2/21/2018' },
              { colKey: '2-false', colData: false },
              { colKey: '2-608715', colData: 608715 },
            ],
          },
          {
            rowKey: 3,
            rowData: [
              { colKey: '3-Miboo', colData: 'Miboo' },
              { colKey: '3-USER-7', colData: 'USER-7' },
              { colKey: '3-11/1/2017', colData: '11/1/2017' },
              { colKey: '3-6/20/2017', colData: '6/20/2017' },
              { colKey: '3-false', colData: false },
              { colKey: '3-239507', colData: 239507 },
            ],
          },
        ],
      };

      expect(tableData).toStrictEqual(expectedTableData);
    });
  });

  describe('getByName', () => {
    it('should work with different letter casing', () => {
      const normal = campaignUtils.getByName('Mib')(MOCKED_CAMPAIGNS);
      const lowerCase = campaignUtils.getByName('mib')(MOCKED_CAMPAIGNS);
      const upperCase = campaignUtils.getByName('MIB')(MOCKED_CAMPAIGNS);

      expect(normal.length).toBe(1);
      expect(normal[0]).toHaveProperty('name', 'Miboo');

      expect(lowerCase.length).toBe(1);
      expect(lowerCase[0]).toHaveProperty('name', 'Miboo');

      expect(upperCase.length).toBe(1);
      expect(upperCase[0]).toHaveProperty('name', 'Miboo');
    });
    it('should return empty array if nothing is found', () => {
      const filteredList = campaignUtils.getByName('Zoo')(MOCKED_CAMPAIGNS);

      expect(filteredList.length).toBe(0);
    });
    it('should return multiple objects if they match the filter', () => {
      const filteredList = campaignUtils.getByName('boo')(MOCKED_CAMPAIGNS);

      expect(filteredList.length).toBe(2);
    });
    it('should return unfiltered list if no filter is passed', () => {
      const filteredList = campaignUtils.getByName()(MOCKED_CAMPAIGNS);

      expect(filteredList.length).toBe(3);
    });
  });
});
