import { Api } from './axios-config';

interface IAccessToken {
  accessToken: string;
}

const authenticate = async (
  id: string,
  password: string,
): Promise<IAccessToken | Error> => {
  try {
    const { data } = await Api.post<IAccessToken>('/employee/signin', {
      id,
      password,
    });
    if (data) return data;

    return new Error('Error to authenticate');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Error to authenticate',
    );
  }
};
export const AuthService = {
  authenticate,
};
