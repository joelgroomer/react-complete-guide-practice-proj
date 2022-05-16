class User {
  constructor(username, age) {
    if (
      typeof username != 'string' ||
      username.trim().length === 0 ||
      typeof age != 'number' ||
      age <= 0
    ) {
      throw new Error('Invalid initial values provided');
    }

    this.username = username;
    this.age = age;
  }
}

export default User;
