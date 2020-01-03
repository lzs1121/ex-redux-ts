import { actionsEnum } from '../common/actionEnmus';

export const updateUserProfileName = (newName: string) => ({
  type: actionsEnum.UPDATE_USERPROFILE_NAME,
  payload: newName
});
