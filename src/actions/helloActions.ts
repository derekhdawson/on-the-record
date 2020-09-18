export const SET_HELLO = 'hello/SET_HELLO';

interface SetHelloAction {
  type: typeof SET_HELLO;
  helloText: string;
}

export const setHello = (helloText: string): SetHelloAction => ({
  type: SET_HELLO,
  helloText,
});

export type HelloAction = SetHelloAction;
