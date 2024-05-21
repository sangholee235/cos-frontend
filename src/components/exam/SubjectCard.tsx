import { useState } from 'react';
import { useRecoilState } from 'recoil';

import useGetExamResultRecent from '@/lib/hooks/useGetExamResultRecent';
import { Session, SubjectInfo } from '@/types/global';
import { selectedSessionState, selectedSubjectState } from '@/utils/recoilState';

import SessionModal from './SessionModal';
import TimerModal from './TimerModal';

interface SubjectCard {
  round: number;
  MockExamId: number;
  total: number;
}

const SubjectCard: React.FC<SubjectCard> = ({ round, MockExamId, total }) => {
  const { examResultRecent } = useGetExamResultRecent(MockExamId);
  const [selectedSubject, setSelectedSubject] = useRecoilState<SubjectInfo | null>(selectedSubjectState);
  const [selectedSession, setSelectedSession] = useRecoilState<Session | null>(selectedSessionState);

  // 모달 관련 states
  const [sessionModalIsOpen, setSessionModalIsOpen] = useState(false);
  const [timerModalIsOpen, setTimerModalIsOpen] = useState(false);

  // 모달이 열릴때 세션 상태 설정
  const openSessionModal = () => {
    // setSelectedSession(session);
    // setSelectedRound(round);
    setSessionModalIsOpen(true);
  };

  const closeSessionModal = () => {
    setSessionModalIsOpen(false);
  };

  const openTimerModal = () => {
    setTimerModalIsOpen(true);
  };

  const closeTimerModal = () => {
    setSelectedSession(null);
    setTimerModalIsOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col gap-y-4 p-3 border-[1px] border-gray2 rounded-[32px]">
        <div className="font-semibold text-center pb-2 border-b border-gray1">{`${round}회차`}</div>
        <div>
          <div className="text-black text-center text-h7">최근 점수</div>
          {examResultRecent ? (
            <ul className="flex items-end justify-center">
              <li className="font-bold text-h2">{`${examResultRecent.totalScore}점`}</li>
              <div className="mb-[3px] text-gray3 text-h6">{`/${total}점`}</div>
            </ul>
          ) : (
            <p className="text-center text-h2 font-semibold">미응시</p>
          )}
        </div>
        <button onClick={() => openSessionModal()} className="w-full bg-gray0 rounded-3xl py-3 text-h6">
          시험 보기
        </button>
      </div>
      {sessionModalIsOpen && (
        <SessionModal
          closeModal={closeSessionModal}
          openTimerModal={openTimerModal}
          round={round}
          main={examResultRecent ? examResultRecent.totalScore : 0}
          total={total}
        />
      )}
      {/* 타이머 모달에 대한 코드 */}
      {timerModalIsOpen && <TimerModal closeTimerModal={closeTimerModal} closeSessionModal={closeSessionModal} />}
    </div>
  );
};

export default SubjectCard;
