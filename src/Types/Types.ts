import {ImageSourcePropType} from 'react-native';
import RouteKey from '../Navigation/Routes';
import {FC, ReactElement} from 'react';

export type FetchResponseGET<data, param> = {
  response: data | null;
  error: any;
  loading: boolean;
  fetcher: (arg: param, token?: string, isFormData?: boolean) => any;
};

export type FetchResponsePOST<data, param> = {
  response: data | null;
  error: any;
  loading: boolean;
  fetcher: (arg: any, token?: {token: any}, isForm?: boolean) => any;
};

export type RootStackParamList = {
  [RouteKey.WELCOME_SCREEN]: undefined;
  [RouteKey.HOME_SCREEN]: undefined;
  [RouteKey.QUESTION_SCREEN]: undefined;
};

export type ErrorType = {
  message: string;
  statusCode: number;
  isOperational: boolean;
};

export type AnswerType = {
  id: number;
  answer: string;
  isCorrect: boolean;
};

export type QuestionType = {
  id: number;
  question: string;
  subjectType: string;
  answers: AnswerType[];
};
