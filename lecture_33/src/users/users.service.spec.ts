import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { User } from './schema/user.schema';

describe('UsersService', () => {
  let usersService: UsersService;

  let userModel: Model<User>;

  const mockUserModel = {
    findById: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
    create: jest.fn(),
  };

  const mockUser = {
    _id: '696916ab59a67ba0076e3567',
    name: 'elene',
    email: 'elene@gmail.com',
    age: 21,
  };

  const mockUpdateUser = { ...mockUser, name: 'test' };

  const mockDeletedUser = { ...mockUser };

  const mockCreatedUser = { ...mockUser };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken('user'),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    userModel = module.get<Model<User>>(getModelToken('user'));
  });

  describe('createUser', () => {
    it('should return created user', async () => {
      jest.spyOn(userModel, 'create').mockResolvedValue(mockCreatedUser as any);
      const createdUser = await usersService.create(mockCreatedUser);
      expect(createdUser).toEqual(mockCreatedUser);
    });
  });

  describe('findOne', () => {
    it('should return pass when correct id is returned', async () => {
      jest.spyOn(userModel, 'findById').mockResolvedValue(mockUser);
      const user = await usersService.findOne(mockUser._id);
      expect(user._id).toBe(mockUser._id);
    });
  });

  describe('updateUser', () => {
    it('Should return user with updated name', async () => {
      jest
        .spyOn(userModel, 'findByIdAndUpdate')
        .mockResolvedValue(mockUpdateUser);
      const updateUser = await usersService.update(mockUpdateUser._id, {
        name: mockUpdateUser.name,
      });
      expect(updateUser.name).toBe(mockUpdateUser.name);
    });
  });

  describe('deleteUser', () => {
    it('Should return deleted user', async () => {
      jest
        .spyOn(userModel, 'findByIdAndDelete')
        .mockResolvedValue(mockDeletedUser);
      const deletedUser = await usersService.remove(mockDeletedUser._id);
      expect(deletedUser).toEqual(mockDeletedUser);
    });
  });
});
