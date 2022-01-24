export * from './routes';

type KoreanDay = '일' | '월' | '화' | '수' | '목' | '금' | '토';

export const DAYS: KoreanDay[] = ['일', '월', '화', '수', '목', '금', '토'];

export const CONTENTS_MAX_LENGTH = 23;

export type DragType = 'todo' | 'review';

export const THIRTY_MINUTES_TIME = 1800000;

export const DiaryCardTypes = {
  TODO: 'todo',
  REVIEW: 'review',
} as const;
