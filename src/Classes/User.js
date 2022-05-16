class User {
  constructor(username, age, id = null) {
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
    this.id = id || Math.random().toString();
  }
}

export default User;
