import {
  toggleModal,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  loginSuccess,
  loginFailure,
  loginRequest,
} from './uiActionCreators';

describe('toggleModal', () => {
  it('should create an action to toggle the modal', () => {
    const expectedAction = {
      type: 'TOGGLE_MODAL',
    };
    expect(toggleModal()).toEqual(expectedAction);
  });
});

describe('loginSuccess', () => {
  it('should create an action to indicate a successful login', () => {
    const user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
    };
    const expectedAction = {
      type: LOGIN_SUCCESS,
      payload: {
        user,
      },
    };
    expect(loginSuccess(user)).toEqual(expectedAction);
  });
});

describe('loginFailure', () => {
  it('should create an action to indicate a failed login', () => {
    const error = {
      message: 'Invalid credentials',
    };
    const expectedAction = {
      type: LOGIN_FAILURE,
      payload: {
        error,
      },
    };
    expect(loginFailure(error)).toEqual(expectedAction);
  });
});

describe('loginRequest', () => {
  it('should dispatch LOGIN and LOGIN_SUCCESS actions if API returns the right response', async () => {
    const user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
    };
    const expectedActions = [
      { type: 'LOGIN' },
      { type: LOGIN_SUCCESS, payload: { user } },
    ];
    const dispatch = jest.fn();
    const api = {
      post: jest.fn(() => Promise.resolve({ data: { user } })),
    };
    await loginRequest(user)(dispatch, null, { api });
    expect(dispatch.mock.calls[0][0]).toEqual(expectedActions[0]);
    expect(dispatch.mock.calls[1][0]).toEqual(expectedActions[1]);
  });

  it('should dispatch LOGIN and LOGIN_FAILURE actions if API query fails', async () => {
    const error = {
      message: 'Invalid credentials',
    };
    const expectedActions = [
      { type: 'LOGIN' },
      { type: LOGIN_FAILURE, payload: { error } },
    ];
    const dispatch = jest.fn();
    const api = {
      post: jest.fn(() => Promise.reject(error)),
    };
    await loginRequest({})(dispatch, null, { api });
    expect(dispatch.mock.calls[0][0]).toEqual(expectedActions[0]);
    expect(dispatch.mock.calls[1][0]).toEqual(expectedActions[1]);
  });
});
