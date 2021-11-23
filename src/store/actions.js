import {ActionType} from "../const";

const ActionCreator = {
	openPopupAdd: (isPopupAddVisible) => ({
		type: ActionType.OPEN_POPUP_ADD,
		payload: true
	}),

	closePopupAdd: (isPopupAddVisible) => ({
		type: ActionType.CLOSE_POPUP_ADD,
		payload: false
	}),

	openPopupDelete: (isPopupDeleteVisible) => ({
		type: ActionType.OPEN_POPUP_DELETE,
		payload: true
	}),

	closePopupDelete: (isPopupDeleteVisible) => ({
		type: ActionType.CLOSE_POPUP_DELETE,
		payload: false
	}),
	
	openPopupInfo: (isPopupInfoVisible) => ({
		type: ActionType.OPEN_POPUP_INFO,
		payload: true
	}),

	closePopupInfo: (isPopupInfoVisible) => ({
		type: ActionType.CLOSE_POPUP_INFO,
		payload: false
	}),
	
	setActiveGuitar: (activeGuitar) => ({
		type: ActionType.SET_ACTIVE_GUITAR,
		payload: activeGuitar
	}),

	addBag: (guitar) => ({
		type: ActionType.ADD_BAG,
		payload: guitar
	}),

	deleteBag: (guitar) => ({
		type: ActionType.DELETE_BAG,
		payload: guitar
	})
};

export default ActionCreator;
