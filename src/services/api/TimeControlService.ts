import { Api } from './axios-config';

interface IAccessToken {
  accessToken: string;
}

interface ITimeControl {
  id: string;
  employee_id: string;
  control_type: 'in' | 'out';
  control_time: Date;
  created_at: Date;
  updated_at: Date;
}

const create = async (
  employee_id: string,
  control_type: 'in' | 'out',
  control_time: Date,
  accessToken: IAccessToken,
): Promise<ITimeControl | Error> => {
  try {
    const { data } = await Api.post<ITimeControl>('/timecontrol', {
      employee_id,
      control_type,
      control_time,
      accessToken,
    });

    if (data) return data;
    return new Error('Error to create a new time control register');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        'Error to create a new time control register',
    );
  }
};

const getAllById = async (): Promise<ITimeControl[] | Error> => {
  try {
    const { data } = await Api.get<ITimeControl[]>('/timecontrol');
    if (data) return data;
    return new Error('Error to authenticate');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Error to authenticate',
    );
  }
};

export const TimeControlService = {
  create,
  getAllById,
};
