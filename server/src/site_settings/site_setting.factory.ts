import { fakerKO as faker } from '@faker-js/faker'

export class SiteSettingFactory {
  generate() {
    return {
      card: faker.datatype.boolean(),
      email: faker.datatype.boolean(),
      lms: faker.datatype.boolean(),
      firendtalk: faker.datatype.boolean(),
      alimtalk: faker.datatype.boolean(),
      banner: faker.datatype.boolean(),
      site: faker.datatype.boolean(),
      user: faker.datatype.boolean(),
    }
  }
}
