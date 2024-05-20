import { Api } from './axios-config';

interface IAccessToken {
  accessToken: string;
}

interface IEmployee {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

const create = async (
  first_name: string,
  last_name: string,
  email: string,
  password: string,
): Promise<Omit<IEmployee, 'password'> | Error> => {
  try {
    const { data } = await Api.post<Omit<IEmployee, 'password'>>('/employee', {
      first_name,
      last_name,
      email,
      password,
    });

    if (data) return data;

    return new Error('Error to create a new employee register');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        'Error to create a new employee register',
    );
  }
};

const signIn = async (
  id: string,
  password: string,
): Promise<IAccessToken | Error> => {
  try {
    const { data } = await Api.post<IAccessToken>('/employee', {
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

export const EmployeeService = {
  create,
  signIn,
};
