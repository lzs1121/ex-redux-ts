import { actionsEnum } from '../common/actionEnmus';
import { Color } from '../model/color';

export const updateFavouriteColor = (newColor: Color) => {
	return {
		type: actionsEnum.UPDATE_USERPROFILE_FAVOURITE_COLOR,
		newColor: newColor
	};
};
