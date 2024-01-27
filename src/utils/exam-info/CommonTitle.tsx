import * as React from 'react';

import { CommonTitleType } from '@/types/global';

export const commonTitle: CommonTitleType = {
  description: { Icon: IntroIcon, title: '자격증 소개' },
  examFee: { Icon: FeeIcon, title: '응시료' },
  examSchedule: { Icon: ScheduleIcon, title: '시험 일정' },
  subjectsInfo: { Icon: SubjectIcon, title: '시험 과목' },
  examFormat: { Icon: MethodIcon, title: '시험 방식' },
  examEligibility: { Icon: QualificationsIcon, title: '응시 자격' },
  examTimeLimit: { Icon: QualificationsIcon, title: '시험 시간' },
  passingCriteria: { Icon: CriteriaIcon, title: '합격 기준' },
};

function IntroIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={25} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask
        id="prefix__a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={25}
        height={25}>
        <path fill="#D9D9D9" d="M.646.5h24v24h-24z" />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          d="M6.8 18.212h5.692v-.297c0-.255-.07-.491-.212-.709a1.405 1.405 0 00-.592-.506 4.996 4.996 0 00-2.042-.43 4.996 4.996 0 00-2.043.43c-.253.12-.45.289-.591.506a1.276 1.276 0 00-.212.71v.296zm8.442-1.52h2.808a.58.58 0 00.596-.595.58.58 0 00-.596-.597h-2.808a.58.58 0 00-.596.596.58.58 0 00.596.596zM9.643 15.5c.374 0 .692-.13.955-.392.262-.261.394-.579.394-.952s-.13-.691-.392-.954a1.292 1.292 0 00-.952-.394c-.373 0-.691.13-.954.392a1.292 1.292 0 00-.394.952c0 .373.13.69.392.954.26.263.578.394.951.394zm5.599-1.5h2.808a.58.58 0 00.596-.596.58.58 0 00-.596-.596h-2.808a.58.58 0 00-.596.595.58.58 0 00.596.597zM4.953 22c-.505 0-.932-.175-1.282-.525a1.745 1.745 0 01-.525-1.283V9.808c0-.505.175-.933.525-1.283.35-.35.777-.525 1.282-.525h5.193V4.5c0-.413.147-.766.44-1.06.294-.293.647-.44 1.06-.44h2c.412 0 .765.147 1.06.44.293.294.44.647.44 1.06V8h5.192c.505 0 .933.175 1.283.525.35.35.525.778.525 1.283v10.384c0 .505-.175.933-.525 1.283-.35.35-.778.525-1.283.525H4.953zm0-1.5h15.385a.3.3 0 00.221-.087.3.3 0 00.087-.22V9.807a.3.3 0 00-.087-.221.3.3 0 00-.221-.087h-5.192v.385c0 .409-.148.76-.444 1.056a1.443 1.443 0 01-1.056.444h-2c-.41 0-.762-.148-1.057-.444a1.443 1.443 0 01-.443-1.056V9.5H4.953a.3.3 0 00-.22.087.3.3 0 00-.087.22v10.385a.3.3 0 00.086.221.3.3 0 00.221.087zm6.693-10.615h2V4.5h-2v5.385z"
          fill="#6283FD"
        />
      </g>
    </svg>
  );
}

function ScheduleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={25} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask
        id="prefix__a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={25}
        height={25}>
        <path fill="#D9D9D9" d="M.646.5h24v24h-24z" />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          d="M5.953 22c-.505 0-.932-.175-1.282-.525a1.745 1.745 0 01-.525-1.283V6.808c0-.505.175-.933.525-1.283.35-.35.777-.525 1.282-.525h1.385V3.654c0-.22.073-.402.22-.55a.745.745 0 01.55-.22c.219 0 .402.074.548.22.147.148.22.33.22.55V5h7.577V3.635c0-.213.072-.391.216-.535a.726.726 0 01.534-.215c.213 0 .391.072.535.215a.726.726 0 01.215.535V5h1.385c.505 0 .933.175 1.283.525.35.35.525.778.525 1.283v13.384c0 .506-.175.933-.525 1.283-.35.35-.778.525-1.283.525H5.953zm0-1.5h13.385a.294.294 0 00.212-.096.294.294 0 00.096-.212v-9.384h-14v9.384c0 .077.032.148.096.212a.294.294 0 00.211.096zM5.646 9.308h14v-2.5a.294.294 0 00-.096-.212.294.294 0 00-.212-.096H5.953a.294.294 0 00-.211.096.294.294 0 00-.096.212v2.5zm7 5.269a.853.853 0 01-.626-.259.852.852 0 01-.259-.626c0-.244.086-.453.259-.626a.853.853 0 01.626-.258c.245 0 .453.086.626.258a.853.853 0 01.258.626.853.853 0 01-.258.626.853.853 0 01-.626.259zm-4 0a.853.853 0 01-.626-.259.853.853 0 01-.259-.626c0-.244.086-.453.259-.626a.853.853 0 01.626-.258c.245 0 .453.086.626.258a.853.853 0 01.258.626.853.853 0 01-.258.626.853.853 0 01-.626.259zm8 0a.853.853 0 01-.626-.259.852.852 0 01-.259-.626c0-.244.086-.453.259-.626a.853.853 0 01.626-.258c.245 0 .453.086.626.258a.853.853 0 01.258.626.853.853 0 01-.258.626.853.853 0 01-.626.259zm-4 3.923a.853.853 0 01-.626-.259.853.853 0 01-.259-.625c0-.245.086-.454.259-.626a.852.852 0 01.626-.26c.245 0 .453.087.626.26a.852.852 0 01.258.626.853.853 0 01-.258.625.853.853 0 01-.626.26zm-4 0a.853.853 0 01-.626-.259.853.853 0 01-.259-.625c0-.245.086-.454.259-.626a.852.852 0 01.626-.26c.245 0 .453.087.626.26a.852.852 0 01.258.626.853.853 0 01-.258.625.853.853 0 01-.626.26zm8 0a.853.853 0 01-.626-.259.853.853 0 01-.259-.625c0-.245.086-.454.259-.626a.852.852 0 01.626-.26c.245 0 .453.087.626.26a.852.852 0 01.258.626.853.853 0 01-.258.625.853.853 0 01-.626.26z"
          fill="#6283FD"
        />
      </g>
    </svg>
  );
}

function SubjectIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={25} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask
        id="prefix__a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={25}
        height={25}>
        <path fill="#D9D9D9" d="M.646.5h24v24h-24z" />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          d="M7.146 16.52c.828 0 1.634.093 2.417.28.783.189 1.56.483 2.333.884v-9.83a8.2 8.2 0 00-2.281-1.03 9.458 9.458 0 00-4.151-.202 8.706 8.706 0 00-1.607.463.303.303 0 00-.163.11.28.28 0 00-.048.159v9.457c0 .09.032.156.096.198a.216.216 0 00.211.014 9.43 9.43 0 011.502-.373c.527-.087 1.09-.13 1.69-.13zm6.25 1.165c.771-.402 1.549-.696 2.332-.884.784-.188 1.59-.282 2.418-.282.6 0 1.163.044 1.69.13a9.431 9.431 0 011.502.374.216.216 0 00.212-.014c.064-.042.096-.108.096-.198V7.354a.258.258 0 00-.048-.154.37.37 0 00-.164-.115 8.705 8.705 0 00-1.607-.463 9.457 9.457 0 00-4.15.202 8.2 8.2 0 00-2.281 1.03v9.83zm-.75 1.78c-.195 0-.378-.024-.547-.073a2.461 2.461 0 01-.482-.194 9.031 9.031 0 00-4.471-1.179 7.998 7.998 0 00-3.5.8.98.98 0 01-1.018-.078 1.042 1.042 0 01-.482-.918V6.965c0-.215.055-.417.166-.606.111-.19.27-.326.48-.41a9.3 9.3 0 012.116-.73 10.58 10.58 0 012.238-.238 10.3 10.3 0 012.852.399c.928.266 1.81.658 2.648 1.178.837-.52 1.72-.912 2.648-1.178a10.3 10.3 0 012.852-.4c.757 0 1.503.08 2.237.238a9.3 9.3 0 012.117.732c.209.083.368.22.48.409.11.189.166.39.166.606v10.858c0 .396-.168.699-.502.909-.335.21-.687.232-1.056.068-.54-.256-1.1-.45-1.678-.583a7.905 7.905 0 00-1.764-.198 9.031 9.031 0 00-4.472 1.179c-.15.08-.311.145-.481.194-.17.049-.352.073-.547.073zm1.942-10.104c0-.111.04-.225.12-.342a.643.643 0 01.27-.24 8.484 8.484 0 011.532-.452 8.514 8.514 0 012.585-.096c.306.038.614.09.924.157.118.027.22.091.306.193a.53.53 0 01.128.354c0 .225-.07.39-.212.495-.142.104-.325.13-.551.076a6.211 6.211 0 00-.747-.108 9.478 9.478 0 00-.797-.033c-.485 0-.96.047-1.424.14a8.479 8.479 0 00-1.33.378c-.236.09-.429.086-.579-.016-.15-.101-.225-.27-.225-.506zm0 5.462a.63.63 0 01.12-.347c.079-.12.17-.202.27-.245a7.687 7.687 0 011.532-.447 8.98 8.98 0 011.636-.15c.327 0 .643.02.949.058.306.039.614.091.924.158.118.027.22.091.306.192a.53.53 0 01.128.354c0 .226-.07.39-.212.495-.142.105-.325.13-.551.076a6.215 6.215 0 00-.747-.107 9.478 9.478 0 00-.797-.033c-.479 0-.948.045-1.41.136-.462.091-.903.22-1.325.385-.236.097-.432.095-.588-.008-.157-.102-.235-.275-.235-.517zm0-2.721c0-.112.04-.226.12-.343a.643.643 0 01.27-.24 8.482 8.482 0 011.532-.452 8.519 8.519 0 012.585-.096c.306.038.614.091.924.158.118.027.22.09.306.192a.53.53 0 01.128.354c0 .225-.07.39-.212.495-.142.105-.325.13-.551.076a6.215 6.215 0 00-.747-.108 9.478 9.478 0 00-.797-.032c-.485 0-.96.046-1.424.14a8.47 8.47 0 00-1.33.377c-.236.091-.429.086-.579-.015-.15-.102-.225-.27-.225-.506z"
          fill="#6283FD"
        />
      </g>
    </svg>
  );
}

function FeeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={25} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask
        id="prefix__a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={25}
        height={25}>
        <path fill="#D9D9D9" d="M.646.5h24v24h-24z" />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          d="M12.646 21c-2.427 0-4.45-.343-6.07-1.028s-2.43-1.541-2.43-2.568V7.5c0-.965.83-1.79 2.488-2.474C8.294 4.342 10.297 4 12.646 4c2.348 0 4.352.342 6.011 1.026 1.66.684 2.489 1.509 2.489 2.474v9.904c0 1.027-.81 1.883-2.43 2.568S15.073 21 12.646 21zm0-11.542c1.457 0 2.925-.206 4.403-.619 1.477-.412 2.333-.856 2.568-1.333-.228-.49-1.075-.947-2.541-1.37a15.881 15.881 0 00-8.845-.018c-1.458.412-2.317.862-2.576 1.35.253.5 1.105.956 2.557 1.37 1.452.413 2.93.62 4.434.62zm0 5.003c.693 0 1.368-.033 2.025-.1a17.346 17.346 0 001.881-.292 12.717 12.717 0 001.68-.477c.522-.19.993-.404 1.414-.644V9.4c-.42.24-.892.454-1.414.644-.521.19-1.081.349-1.68.477-.598.128-1.225.226-1.881.292-.657.067-1.332.1-2.025.1-.707 0-1.395-.034-2.065-.104-.67-.07-1.302-.17-1.897-.297a12.717 12.717 0 01-1.662-.473 8.134 8.134 0 01-1.376-.64v3.55c.404.239.862.452 1.376.639.513.186 1.067.343 1.662.472.595.128 1.227.227 1.897.297.67.07 1.358.104 2.065.104zm0 5.039c.811 0 1.608-.053 2.39-.16a15.07 15.07 0 002.135-.439c.64-.185 1.181-.4 1.622-.645.44-.245.724-.502.853-.771v-3.037c-.42.24-.892.454-1.414.644-.521.19-1.081.349-1.68.477-.598.128-1.225.226-1.881.292-.657.067-1.332.1-2.025.1-.707 0-1.395-.034-2.065-.104-.67-.07-1.302-.17-1.897-.297a12.701 12.701 0 01-1.662-.473 8.124 8.124 0 01-1.376-.639V17.5c.128.276.41.532.845.768.435.237.973.448 1.614.633a15.04 15.04 0 002.143.438c.787.108 1.586.161 2.398.161z"
          fill="#6283FD"
        />
      </g>
    </svg>
  );
}

function MethodIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={25} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask
        id="prefix__a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={25}
        height={25}>
        <path fill="#D9D9D9" d="M.646.5h24v24h-24z" />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          d="M12.647 22a9.255 9.255 0 01-3.705-.748 9.598 9.598 0 01-3.017-2.03 9.591 9.591 0 01-2.03-3.016 9.245 9.245 0 01-.75-3.704c0-1.314.25-2.55.749-3.705a9.596 9.596 0 012.03-3.018 9.593 9.593 0 013.017-2.03A9.248 9.248 0 0112.646 3c.69 0 1.36.07 2.007.208a9.16 9.16 0 011.858.607v1.683a8.233 8.233 0 00-1.83-.735 7.766 7.766 0 00-2.035-.263c-2.217 0-4.104.78-5.663 2.337-1.558 1.559-2.337 3.446-2.337 5.663s.779 4.104 2.337 5.663C8.542 19.72 10.43 20.5 12.646 20.5c2.216 0 4.104-.78 5.662-2.337 1.559-1.559 2.338-3.446 2.338-5.663 0-.508-.048-1-.143-1.478a8.654 8.654 0 00-.4-1.387h1.612a9.36 9.36 0 01.43 2.865c0 1.314-.249 2.55-.747 3.705a9.595 9.595 0 01-2.03 3.016 9.591 9.591 0 01-3.016 2.03 9.247 9.247 0 01-3.705.749zm8.249-16.75h-1.25a.725.725 0 01-.535-.216.726.726 0 01-.215-.534c0-.213.072-.391.215-.535a.726.726 0 01.535-.215h1.25V2.5c0-.213.072-.39.215-.534a.726.726 0 01.535-.216c.213 0 .39.072.534.216a.726.726 0 01.216.534v1.25h1.25c.212 0 .39.072.534.216a.726.726 0 01.216.534c0 .213-.072.391-.216.535a.726.726 0 01-.534.215h-1.25V6.5c0 .212-.072.39-.216.534a.726.726 0 01-.535.216.725.725 0 01-.534-.216.726.726 0 01-.215-.534V5.25zm-4.844 6.058c.364 0 .672-.128.925-.382.254-.255.38-.564.38-.928 0-.364-.127-.673-.382-.926a1.267 1.267 0 00-.928-.38c-.364 0-.672.128-.925.382-.254.255-.38.564-.38.928 0 .364.127.673.382.926s.564.38.928.38zm-6.808 0c.364 0 .673-.128.926-.382.253-.255.38-.564.38-.928 0-.364-.128-.673-.383-.926a1.267 1.267 0 00-.927-.38c-.364 0-.673.128-.926.382-.253.255-.38.564-.38.928 0 .364.128.673.382.926.255.253.564.38.928.38zm3.402 6.384c.897 0 1.725-.212 2.483-.637a5.21 5.21 0 001.848-1.73.551.551 0 00-.01-.55.502.502 0 00-.471-.275h-7.7a.502.502 0 00-.472.276.552.552 0 00-.01.549 5.18 5.18 0 001.86 1.73c.766.425 1.59.637 2.472.637z"
          fill="#6283FD"
        />
      </g>
    </svg>
  );
}

function QualificationsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={25} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask
        id="prefix__a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={25}
        height={25}>
        <path fill="#D9D9D9" d="M.646.5h24v24h-24z" />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          d="M18.196 10.03l3.707-3.722a.756.756 0 011.07 0 .699.699 0 01.228.534.747.747 0 01-.228.535l-4.145 4.135a.867.867 0 01-.632.27.867.867 0 01-.633-.27l-2.02-2.02a.736.736 0 01-.227-.525.718.718 0 01.228-.534.73.73 0 011.054 0l1.598 1.598zm-8.55 2.162c-.963 0-1.787-.342-2.472-1.028-.686-.685-1.028-1.51-1.028-2.472s.342-1.786 1.028-2.471c.685-.686 1.51-1.029 2.472-1.029s1.786.343 2.472 1.029c.685.685 1.028 1.509 1.028 2.471 0 .963-.343 1.787-1.028 2.472-.686.686-1.51 1.028-2.472 1.028zm-7.5 6.096v-.703c0-.49.133-.944.399-1.36a2.665 2.665 0 011.066-.963 14.507 14.507 0 012.991-1.09 12.95 12.95 0 016.087 0c1.006.242 2.003.605 2.991 1.09.445.224.8.545 1.067.962.266.417.399.87.399 1.36v.704c0 .422-.148.78-.444 1.076a1.465 1.465 0 01-1.076.444H3.665c-.422 0-.78-.148-1.076-.444a1.465 1.465 0 01-.443-1.076zm1.5.02h12v-.723a.98.98 0 00-.176-.563 1.333 1.333 0 00-.478-.422 12.857 12.857 0 00-2.636-.964 11.39 11.39 0 00-5.421 0c-.895.218-1.774.54-2.635.964-.202.109-.361.25-.478.422a.98.98 0 00-.176.563v.723zm6-7.616c.55 0 1.02-.196 1.412-.587.392-.392.588-.863.588-1.413s-.196-1.02-.588-1.412a1.926 1.926 0 00-1.412-.588c-.55 0-1.021.196-1.413.588a1.926 1.926 0 00-.587 1.412c0 .55.196 1.021.587 1.413.392.391.863.587 1.413.587z"
          fill="#6283FD"
        />
      </g>
    </svg>
  );
}
function CriteriaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={25} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask
        id="prefix__a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={25}
        height={25}>
        <path fill="#D9D9D9" d="M.646.5h24v24h-24z" />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          d="M12.646 21.202l-2.923.99a1.827 1.827 0 01-.577.09 1.79 1.79 0 01-1.266-.509c-.361-.34-.542-.772-.542-1.298V15.41l-2.754-4.456a1.825 1.825 0 010-1.908l3.208-5.192c.164-.275.382-.485.653-.633A1.82 1.82 0 019.328 3h6.635c.318 0 .613.074.884.221.27.148.488.358.653.633l3.207 5.192a1.824 1.824 0 010 1.908l-2.754 4.456v5.065c0 .526-.18.958-.542 1.298a1.79 1.79 0 01-1.265.51 1.827 1.827 0 01-.577-.09l-2.923-.991zm0-1.59l3.404 1.132c.102.032.195.02.278-.038a.285.285 0 00.125-.25V17H8.838v3.456c0 .109.042.192.125.25.083.058.176.07.279.038l3.404-1.133zM9.328 15.5h6.635c.051 0 .1-.013.144-.039a.361.361 0 00.116-.105l3.217-5.192a.304.304 0 000-.328l-3.217-5.192a.362.362 0 00-.116-.106.286.286 0 00-.144-.038H9.328c-.05 0-.099.013-.144.038a.361.361 0 00-.115.106L5.852 9.836a.303.303 0 000 .328l3.217 5.192a.36.36 0 00.115.105.285.285 0 00.144.039zm2.268-3.894l3.707-3.733a.65.65 0 01.515-.215.781.781 0 01.53.215.724.724 0 01.235.535.719.719 0 01-.22.534l-4.135 4.144a.867.867 0 01-.632.272.867.867 0 01-.633-.272l-2.02-2.01a.71.71 0 01-.232-.529.74.74 0 01.233-.54.735.735 0 01.534-.232c.202 0 .38.078.535.233l1.583 1.598z"
          fill="#6283FD"
        />
      </g>
    </svg>
  );
}
