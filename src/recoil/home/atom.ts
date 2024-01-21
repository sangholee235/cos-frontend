'use client';

import { atom } from 'recoil';

import { GoalSettingInfo } from '@/types/global';

//목표 설정 state
export let goalSettingState = atom<GoalSettingInfo>({
  key: 'goalSettingState',
  default: {
    goalScore: 100,
    prepareStartDateTime: '2024-01-21T06:45:07.833Z',
    prepareFinishDateTime: '2024-01-21T06:45:07.833Z',
    goalPrepareDays: 0,
    mockExamsPerDay: 0,
    goalMockExams: 0,
    mockExamRepeatDays: [],
    studyTimePerDay: 0,
    goalStudyTime: 0,
    studyRepeatDays: [],
  },
});
