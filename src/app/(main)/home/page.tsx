'use client';

import { useSearchParams } from 'next/navigation';
import * as React from 'react';
import { useEffect } from 'react';

import CorrectRateGraph from '@/components/exam/CorrectRateGraph';
import StayTimeGraph from '@/components/exam/StayTimeGraph';
import CarouselCardView from '@/components/home/goal-attaining/Carousel';
import GoalRunningGraph from '@/components/home/goal-attaining/GoalRunningGraph';
import ScoredDonutChart from '@/components/home/goal-attaining/ScoredDonutChart';
import Header from '@/components/common/Header';
import NavBar from '@/components/common/NavBar';

export default function Home() {
  const parameter = useSearchParams();
  const accessToken = parameter.get('accessToken');
  const refreshToken = parameter.get('refreshToken');

  useEffect(() => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    console.log('액세스 토큰', localStorage.getItem('accessToken'));
    console.log('리프레시 토큰', localStorage.getItem('refreshToken'));
  }, [accessToken, refreshToken]);

  return (
    <div className="bg-gray0 items-center h-screen overflow-y-auto">
      <Header />
      <Header headerType={'second'}></Header>
      <div className="w-[90%] mx-auto">
        <DayBox />
        <GoalBox />
        <TodayGoalBox />
        <CorrectRateGraphBox />
        <StayTimeGraphBox />
        <BestTip />
        <StayTimeGraphBox />
      </div>
      <NavBar />
    </div>
  );
}

const DayBox = () => {
  return (
    <div className="my-5">
      <div className="flex">
        <div>
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBbRXhpZgAASUkqAAgAAAACAA4BAgAmAAAAJgAAAJiCAgAHAAAATAAAAAAAAABQb3J0cmFpdCBvZiBhIGJlYXV0aWZ1bCAgZG9nICBvdXRkb29yc2hlbGVuYnL/7QB8UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAGAcAlAAB2hlbGVuYnIcAngAJlBvcnRyYWl0IG9mIGEgYmVhdXRpZnVsICBkb2cgIG91dGRvb3JzHAJ0AAdoZWxlbmJyHAJuABhHZXR0eSBJbWFnZXMvaVN0b2NrcGhvdG//4QU6aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iaGVsZW5iciIgcGhvdG9zaG9wOkNyZWRpdD0iR2V0dHkgSW1hZ2Vz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"
              alt="대체 텍스트"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
        <div className="w-[100%]">
          <div className="w-full h-20 bg-primary rounded-full flex items-center justify-between">
            <div className="mx-[10%] space-y-1">
              <div className="text-white font-bold text-h5">안녕하세요, 코어님</div>
              <div className="text-white font-bold text-h7">목표 달성까지 D-29일 남았어요!</div>
            </div>
            <div className="text-white font-bold text-h7 mx-[5%]">：</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GoalBox = () => {
  return (
    <div>
      <div className="mx-auto mt-2 rounded-3xl bg-white py-[3%]">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between my-[1%]">
            <div className="font-bold text-h3">목표 달성</div>
            <div className="w-[29%] border border-gray2 flex items-center justify-center rounded-l-full rounded-r-full text-h6 ">
              목표수정 ⬈
            </div>
          </div>
          <div className="flex justify-center space-x-2">
            <div className="w-[33%]">
              <div className="flex justify-center items-center">
                <div className="bg-gray0 rounded-l-full rounded-r-full font-black px-4 my-2 text-h6 py-[3%]">
                  목표점수
                </div>
              </div>
              <div className="relative">
                <ScoredDonutChart mainscore={80} totalscore={100} unit="점" />
              </div>
            </div>
            <div className="w-[33%]">
              <div className="flex justify-center items-center">
                <div className="bg-gray0 rounded-l-full rounded-r-full font-black px-4 my-2 text-h6 py-[3%]">
                  공부시간
                </div>
              </div>
              <div className="relative">
                <ScoredDonutChart mainscore={80} totalscore={100} unit="분" />
              </div>
            </div>
            <div className="w-[33%]">
              <div className="flex justify-center items-center">
                <div className="bg-gray0 rounded-l-full rounded-r-full font-black px-4 my-2 text-h6 py-[3%]">
                  모의고사
                </div>
              </div>
              <div className="relative">
                <ScoredDonutChart mainscore={10} totalscore={30} unit="회" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TodayGoalBox = () => {
  return (
    <div>
      <div className="mx-auto mt-5 rounded-3xl bg-white py-[3%]">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between my-[1%]">
            <div className="flex w-[70%] space-x-[1%]">
              <div className="w-[40%] font-bold text-h3">오늘 목표</div>
              <div className="w-[40%] flex bg-gray0 items-center justify-center text-primary text-h6 font-bold rounded">
                목표 진행중
              </div>
            </div>
            <div className="w-[30%] border border-gray2 flex items-center justify-center rounded-l-full rounded-r-full text-h6">
              목표수정 ⬈
            </div>
          </div>
          <GoalRunningGraph
            maintitle=" 공부하기"
            subtitle="오늘 공부한 시간"
            goaltime={60}
            presenttime={50}
            unit="분"
          />
          <GoalRunningGraph
            maintitle="분 모의고사 풀기"
            subtitle="오늘 푼 모의고사"
            goaltime={3}
            presenttime={2}
            unit="회"
          />
        </div>
      </div>
    </div>
  );
};

const CorrectRateGraphBox = () => {
  const subjects = [
    { name: '컴퓨터 일반', correctAnswer: 75, totalProblems: 100 },
    { name: '스프레드시트', correctAnswer: 60, totalProblems: 80 },
    { name: '데이터베이스', correctAnswer: 30, totalProblems: 60 },

    // ... 다른 과목들
  ];
  return (
    <div className="mx-auto mt-5 rounded-3xl bg-white py-[5%]">
      <div className="w-[95%] mx-auto">
        <CorrectRateGraph subjects={subjects} />
      </div>
    </div>
  );
};

const StayTimeGraphBox = () => {
  return (
    <div>
      <div className="mx-auto mt-5 rounded-3xl bg-white py-[5%]">
        <div className="w-[90%] mx-auto">
          <StayTimeGraph
            title="머문시간"
            takenTime={180}
            maxTime={100}
            subjectTime={[50, 60, 70]}
            subjectName={['컴퓨터 일반', '스프레드시트', '데이터베이스']}
          />
        </div>
      </div>
    </div>
  );
};

const BestTip = () => {
  return (
    <div>
      <div className="mx-auto mt-2 rounded-3xl bg-white py-[3%]">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between my-[1%]">
            <div className="font-bold text-h3">베스트 꿀팁</div>
          </div>
          <div className="flex mx-auto">
            <div className="w-full">
              <CarouselCardView />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
