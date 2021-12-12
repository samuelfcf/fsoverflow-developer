import faker from 'faker';
import UserRepository from '../../src/repositories/UserRepository';
import { UserDB } from '../../src/types/User';

const userRepository = new UserRepository();

const fakeToken = faker.datatype.string();
const mockFakeUser: UserDB = {
  id: 0,
  token: fakeToken,
  name: faker.name.firstName(),
  currentClass: 'T3'
};

const deleteUsers = async () => userRepository.delete();

export { fakeToken, mockFakeUser, deleteUsers };
