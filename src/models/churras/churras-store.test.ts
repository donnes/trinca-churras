import faker from 'faker';

import { RootStoreModel, RootStore } from '../root-store/root-store';
import { CareerSnapshot } from './career';
import { CareerStoreModel, CareerStore } from './career-store';

jest.mock('../../services');
jest.mock('axios');
jest.setTimeout(20000);

describe('CareerStoreModel', () => {
  test('should create a career store', () => {
    const store: CareerStore = CareerStoreModel.create({});
    expect(store).toBeTruthy();
  });

  test('should set error state if get list of careers fails', async () => {
    const store: CareerStore = CareerStoreModel.create({}, {
      api: {
        async getCareers() {
          return Promise.reject();
        },
      },
    });

    await store.getAll();
    expect(store.error).toBeTruthy();
  });

  test('should get a list of careers', async () => {
    const mockCareers: CareerSnapshot[] = [
      {
        id: faker.random.number(),
        username: faker.internet.userName(),
        created_datetime: faker.date.recent().toISOString(),
        title: faker.name.title(),
        content: faker.lorem.paragraph(),
      },
    ];

    const store: CareerStore = CareerStoreModel.create({}, {
      api: {
        async getCareers() {
          return Promise.resolve({ results: mockCareers });
        },
      },
    });

    await store.getAll();
    expect(store.careers).toStrictEqual(mockCareers);
  });

  test('should set error state if create a career fails', async () => {
    const store: CareerStore = CareerStoreModel.create({}, {
      api: {
        async getCareers() {
          return Promise.reject();
        },
        async createCareer() {
          return Promise.reject();
        },
      },
    });

    await store.create({ title: null, content: null, username: null });
    expect(store.error).toBeTruthy();
  });

  test('should create a new career and refresh careers list', async () => {
    const mockNewCareer = {
      title: faker.name.title(),
      content: faker.lorem.paragraph(),
    };

    const mockCareers: CareerSnapshot[] = [
      {
        id: faker.random.number(),
        username: 'Donald',
        created_datetime: faker.date.recent().toISOString(),
        ...mockNewCareer,
      },
    ];

    const rootStore: RootStore = RootStoreModel.create({}, {
      api: {
        async getCareers() {
          return Promise.resolve({ results: mockCareers });
        },
        async createCareer() {
          return Promise.resolve();
        },
      },
    });

    await rootStore.careerStore.create(mockNewCareer);
    expect(rootStore.careerStore.careers).toStrictEqual(mockCareers);
  });

  test('should set error state if update a career fails', async () => {
    const store: CareerStore = CareerStoreModel.create({}, {
      api: {
        async getCareers() {
          return Promise.reject();
        },
        async updateCareer() {
          return Promise.reject();
        },
      },
    });

    await store.update(0, { title: null, content: null, username: null });
    expect(store.error).toBeTruthy();
  });

  test('should update a entry career and refresh careers list', async () => {
    const mockCareer = {
      id: faker.random.number(),
      title: faker.name.title(),
      content: faker.lorem.paragraph(),
    };

    const mockCareers: CareerSnapshot[] = [
      {
        username: 'Donald',
        created_datetime: faker.date.recent().toISOString(),
        ...mockCareer,
      },
    ];

    const rootStore: RootStore = RootStoreModel.create({}, {
      api: {
        async getCareers() {
          return Promise.resolve({ results: mockCareers });
        },
        async updateCareer() {
          return Promise.resolve();
        },
      },
    });

    await rootStore.careerStore.update(mockCareer.id, mockCareer);
    expect(rootStore.careerStore.careers).toStrictEqual(mockCareers);
  });

  test('should set error state if remove a career fails', async () => {
    const mockCareers: CareerSnapshot[] = [
      {
        id: faker.random.number(),
        username: faker.internet.userName(),
        title: faker.name.title(),
        content: faker.lorem.paragraph(),
        created_datetime: faker.date.recent().toISOString(),
      },
    ];

    const store: CareerStore = CareerStoreModel.create({
      careers: mockCareers,
    }, {
      api: {
        async getCareers() {
          return Promise.reject();
        },
        async removeCareer() {
          return Promise.reject();
        },
      },
    });

    await store.careers[0].remove();
    expect(store.error).toBeTruthy();
  });

  test('should remove a entry career and refresh careers list', async () => {
    const mockCareers: CareerSnapshot[] = [
      {
        id: faker.random.number(),
        username: faker.internet.userName(),
        title: faker.name.title(),
        content: faker.lorem.paragraph(),
        created_datetime: faker.date.recent().toISOString(),
      },
    ];

    const rootStore: RootStore = RootStoreModel.create({
      careerStore: {
        careers: mockCareers,
      },
    }, {
      api: {
        async getCareers() {
          return Promise.resolve({ results: [] });
        },
        async deleteCareer() {
          return Promise.resolve();
        },
      },
    });

    await rootStore.careerStore.careers[0].remove();
    expect(rootStore.careerStore.careers).toStrictEqual([]);
  });
});
