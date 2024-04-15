import bcrypt from 'bcryptjs';

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
  } catch (error) {
      throw new Error('Error hashing password' + error);
  }
}