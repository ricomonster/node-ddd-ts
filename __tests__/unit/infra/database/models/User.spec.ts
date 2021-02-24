import {sequelize} from 'src/infra/database';
const { User } = sequelize.models;

describe('Unit :: Infra :: Database :: Models :: User', () => {
  beforeAll(async () => {
    await User.truncate();
  });

  afterAll(async (done) => {
    await sequelize.close();
    done();
  });

  it('should create a user', async () => {
    const user = await User.create({
      name: 'Name',
      email: 'email@email.com',
      password: 'password',
    });

    expect(user).toHaveProperty('dataValues');
    expect(user.getDataValue('name')).toBe('Name');
  });

  it('should get a user using an unique field', async () => {
    const user = await User.findOne({ where: { email: 'email@email.com' } });

    expect(user).toHaveProperty('dataValues');
    expect(user?.getDataValue('email')).toBe('email@email.com');
  });

  it('should update a user field', async () => {
    await User.update({
      name: 'New Name',
    }, {
      where: {
        email: 'email@email.com',
      },
    });

    const user = await User.findOne({ where: { email: 'email@email.com' } });

    expect(user).toHaveProperty('dataValues');
    expect(user?.getDataValue('email')).toBe('email@email.com');
    expect(user?.getDataValue('name')).toBe('New Name');
  });
});
