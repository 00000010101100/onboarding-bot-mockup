import { useState, useEffect } from 'react';
import svgPaths from "./svg-lgbrof7x5v";

function LogoDiv() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[32px] top-1/2 translate-y-[-50%]" data-name="logo-div">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="logo">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="vector">
            <path d="M10.2 0H13.8V4.8H10.2V0Z" fill="var(--fill-0, #111111)" />
            <path d="M24 10.2H19.2V13.8H24V10.2Z" fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p26f49000} fill="var(--fill-0, #111111)" />
            <path d="M4.8 10.2H0V13.8H4.8V10.2Z" fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p31397c40} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p2e0bf80} fill="var(--fill-0, #111111)" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#111111] text-[16px] w-[228px]">
        <p className="leading-[24px]">에코그린바이오</p>
      </div>
    </div>
  );
}

function Beta() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Beta">
      <div className="absolute bottom-[37.65%] left-0 right-0 top-0" data-name="status-beta">
        <div className="absolute inset-[19.33%_3.08%_19.35%_3.05%]" data-name="beta_typo">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 8">
            <path d={svgPaths.p3dd90a00} fill="var(--fill-0, #BFBFBF)" id="beta_typo" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[77px]">
        <p className="leading-[20px]">AI 게이트웨이</p>
      </div>
      <Beta />
    </div>
  );
}

function AiOn() {
  return (
    <div className="bg-[#111111] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="AI 게이트웨이-on">
      <Frame27 />
    </div>
  );
}

function Off() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center px-[24px] py-[6px] relative rounded-[6px] shrink-0 w-[88px]" data-name="프로젝트-off">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#111111] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">프로젝트</p>
      </div>
    </div>
  );
}

function Off1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 w-[88px]" data-name="앱-off">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#111111] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">앱</p>
      </div>
    </div>
  );
}

function TabWrap() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="tab-wrap">
      <AiOn />
      <Off />
      <Off1 />
    </div>
  );
}

function Gnb() {
  return (
    <div className="absolute bg-white h-[60px] left-0 top-0 w-full min-w-[1440px] border-b border-[#e1e1e1]" data-name="GNB">
      <LogoDiv />
      <div className="absolute bg-[lightgrey] overflow-clip right-[32px] rounded-[16px] size-[32px] top-1/2 translate-y-[-50%]" data-name="btn-user info">
        <div className="absolute left-[calc(50%-0.002px)] size-[20px] top-[calc(50%-0.002px)] translate-x-[-50%] translate-y-[-50%]" data-name="ic-account-panda-filled">
          <div className="absolute inset-[8.35%_16.65%_8.33%_16.68%]" data-name="icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
              <path d={svgPaths.p37cfc580} fill="var(--fill-0, white)" id="icon" />
            </svg>
          </div>
        </div>
      </div>
      <TabWrap />
    </div>
  );
}

function BetaBadgeSnb() {
  return (
    <div className="bg-[#eeeeee] box-border content-stretch flex gap-[8px] items-center justify-center pb-[3px] pl-[5px] pr-[4px] pt-[2px] relative rounded-[4px] shrink-0" data-name="beta-badge-snb">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#888888] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">BETA</p>
      </div>
    </div>
  );
}

function TitleWrap() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="title-wrap">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#9e9e9e] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">AI 게이트웨이</p>
      </div>
      <BetaBadgeSnb />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#00ab7f] text-[14px] text-nowrap whitespace-pre">API 키</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#333333] text-[14px] text-nowrap whitespace-pre">지원 모델</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#333333] text-[14px] text-nowrap whitespace-pre">멤버</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#333333] text-[14px] text-nowrap whitespace-pre">API 사용량</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#333333] text-[14px] text-nowrap whitespace-pre">API 가이드</p>
      <div className="relative shrink-0 size-[14px]" data-name="badge-new">
        <div className="absolute inset-[21.875%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path clipRule="evenodd" d={svgPaths.p3894fc80} fill="var(--fill-0, #6E6E6E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MenuWrap() {
  return (
    <div className="relative shrink-0 w-full" data-name="menu-wrap">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[20px] py-[30px] relative w-full">
          <TitleWrap />
          <div className="bg-[#e7faec] box-border content-stretch flex gap-[12px] items-center px-[12px] py-[9px] relative rounded-[6px] shrink-0 w-[180px]" data-name="nav item">
            <div className="relative shrink-0 size-[20px]" data-name="ic-key">
              <div className="absolute inset-[8.54%_8.13%_8.13%_8.12%]" data-name="icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                  <path d={svgPaths.p152e6980} fill="var(--fill-0, #00AB7F)" id="icon" />
                </svg>
              </div>
            </div>
            <Frame4 />
          </div>
          <div className="bg-white box-border content-stretch flex gap-[12px] items-center px-[12px] py-[9px] relative rounded-[6px] shrink-0 w-[180px]" data-name="nav item">
            <div className="relative shrink-0 size-[20px]" data-name="ic-login">
              <div className="absolute inset-[9.32%_8.33%]" data-name="icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                  <path d={svgPaths.p17974ab0} fill="var(--fill-0, #333333)" id="icon" />
                </svg>
              </div>
            </div>
            <Frame3 />
          </div>
          <div className="bg-white box-border content-stretch flex gap-[12px] items-center px-[12px] py-[9px] relative rounded-[6px] shrink-0 w-[180px]" data-name="nav item">
            <div className="relative shrink-0 size-[20px]" data-name="ic-team">
              <div className="absolute inset-[12.5%_8.31%_12.46%_8.33%]" data-name="icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 15">
                  <path d={svgPaths.p3242b180} fill="var(--fill-0, #333333)" id="icon" />
                </svg>
              </div>
            </div>
            <Frame5 />
          </div>
          <div className="bg-white box-border content-stretch flex gap-[12px] items-center px-[12px] py-[9px] relative rounded-[6px] shrink-0 w-[180px]" data-name="nav item">
            <div className="relative shrink-0 size-[20px]" data-name="ic-chart">
              <div className="absolute inset-[9.375%]" data-name="icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                  <path clipRule="evenodd" d={svgPaths.p3e941e80} fill="var(--fill-0, #111111)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <Frame6 />
          </div>
          <div className="bg-white box-border content-stretch flex gap-[12px] items-center px-[12px] py-[9px] relative rounded-[6px] shrink-0 w-[180px]" data-name="nav item">
            <div className="relative shrink-0 size-[20px]" data-name="ic-file-code">
              <div className="absolute inset-[5.21%_13.54%]" data-name="Icon (Stroke)">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18">
                  <path d={svgPaths.p39c6fb00} fill="var(--fill-0, black)" id="Icon (Stroke)" />
                </svg>
              </div>
            </div>
            <Frame7 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute h-[760px] left-[calc(50%+49.5px)] opacity-[0.15] top-[calc(50%+267px)] translate-x-[-50%] translate-y-[-50%] w-[909px]">
      <div className="absolute left-[0.42px] mix-blend-multiply size-[460.576px] top-[42.04px]">
        <div className="absolute inset-[-34.364%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 778 778">
            <g filter="url(#filter0_f_1_1427)" id="Ellipse 230" style={{ mixBlendMode: "multiply" }}>
              <circle cx="388.561" cy="388.561" fill="var(--fill-0, #0070FF)" r="230.288" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="777.122" id="filter0_f_1_1427" width="777.122" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_1427" stdDeviation="79.1367" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[264.19px] mix-blend-multiply size-[460.576px] top-[299.14px]">
        <div className="absolute inset-[-34.364%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 778 778">
            <g filter="url(#filter0_f_1_1427)" id="Ellipse 230" style={{ mixBlendMode: "multiply" }}>
              <circle cx="388.561" cy="388.561" fill="var(--fill-0, #0070FF)" r="230.288" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="777.122" id="filter0_f_1_1427" width="777.122" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_1427" stdDeviation="79.1367" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[311.5px] mix-blend-multiply size-[596.691px] top-0">
        <div className="absolute inset-[-26.525%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 914 914">
            <g filter="url(#filter0_f_1_1423)" id="Ellipse 232" opacity="0.8" style={{ mixBlendMode: "multiply" }}>
              <circle cx="456.619" cy="456.619" fill="var(--fill-0, #00C781)" r="298.345" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="913.237" id="filter0_f_1_1423" width="913.237" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_1423" stdDeviation="79.1367" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Folder() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="folder">
          <path d={svgPaths.p177840} id="Icon" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center pb-[2px] pt-0 px-0 relative shrink-0">
      <Folder />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[30px] items-center left-0 px-0 py-[3px] top-1/2 translate-y-[-50%]">
      <Frame26 />
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">기본 그룹</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[19px] left-[16px] top-px w-[23px]">
      <div className="absolute flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#333333] text-[13px] text-center text-nowrap top-[calc(50%+4.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[19px] whitespace-pre">수정</p>
      </div>
    </div>
  );
}

function Solid() {
  return (
    <div className="bg-white h-[30px] relative rounded-[6px] shrink-0 w-[55px]" data-name="solid">
      <div aria-hidden="true" className="absolute border border-[#6e6e6e] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Frame />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center justify-end right-0 top-0 w-[194px]">
      <Solid />
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[30px] relative shrink-0 w-full">
      <Frame25 />
      <Frame17 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="ic-chevron-right">
        <div className="absolute inset-[21.88%_30.21%_21.88%_38.54%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
            <path clipRule="evenodd" d={svgPaths.p5320200} fill="var(--fill-0, #111111)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#111111] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">API 사용량</p>
      </div>
      <Frame12 />
    </div>
  );
}

function ProgressBar() {
  return <div className="bg-[#e1e1e1] h-[8px] overflow-clip rounded-[2px] shrink-0 w-full" data-name="progress-bar" />;
}

function NumWrap() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[0] relative shrink-0 text-[14px] text-nowrap" data-name="num-wrap">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#6e6e6e]">
        <p className="leading-[20px] text-nowrap whitespace-pre">현재 사용량</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[#111111]">
        <p className="leading-[20px] text-nowrap whitespace-pre">$123456.78</p>
      </div>
    </div>
  );
}

function NumWrap1() {
  return (
    <div className="content-stretch flex font-['Pretendard_Variable:Regular',_sans-serif] font-normal gap-[4px] items-start leading-[0] relative shrink-0 text-[14px] text-nowrap text-right" data-name="num-wrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#6e6e6e]">
        <p className="leading-[20px] text-nowrap whitespace-pre">예산</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#111111]">
        <p className="leading-[20px] text-nowrap whitespace-pre">-</p>
      </div>
    </div>
  );
}

function NumDiv() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="num-div">
      <NumWrap />
      <NumWrap1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <ProgressBar />
      <NumDiv />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[6px] shadow-[0px_1px_3px_0px_rgba(17,17,17,0.15)] shrink-0">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <Frame18 />
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="ic-chevron-right">
        <div className="absolute inset-[21.88%_30.21%_21.88%_38.54%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
            <path clipRule="evenodd" d={svgPaths.p5320200} fill="var(--fill-0, #111111)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#111111] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">멤버</p>
      </div>
      <Frame14 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline justify-end leading-[0] relative shrink-0 text-nowrap w-full">
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[#333333] text-[28px]">
        <p className="leading-[35px] text-nowrap whitespace-pre">135</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#6e6e6e] text-[16px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">명</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[6px] shadow-[0px_1px_3px_0px_rgba(17,17,17,0.15)] shrink-0 w-[310px]">
      <Frame21 />
      <Frame8 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="ic-chevron-right">
        <div className="absolute inset-[21.88%_30.21%_21.88%_38.54%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
            <path clipRule="evenodd" d={svgPaths.p5320200} fill="var(--fill-0, #111111)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#111111] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">지원 모델</p>
      </div>
      <Frame15 />
    </div>
  );
}

function Openai() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="openai">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1359)" id="openai">
          <path clipRule="evenodd" d={svgPaths.p39f47880} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1359">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoBall() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center mr-[-6px] relative rounded-[48px] shrink-0 size-[40px] z-[3]" data-name="logo-ball">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[1px_1px_4px_0px_rgba(17,17,17,0.1)]" />
      <Openai />
    </div>
  );
}

function GoogleColor() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="google-color">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1380)" id="google-color">
          <path d={svgPaths.pc15cc00} fill="var(--fill-0, #4285F4)" id="Vector" />
          <path d={svgPaths.p14c94300} fill="var(--fill-0, #34A853)" id="Vector_2" />
          <path d={svgPaths.pf450a00} fill="var(--fill-0, #FBBC05)" id="Vector_3" />
          <path d={svgPaths.p2fe65900} fill="var(--fill-0, #EB4335)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_1380">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoBall1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center mr-[-6px] relative rounded-[48px] shrink-0 size-[40px] z-[2]" data-name="logo-ball">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[1px_1px_4px_0px_rgba(17,17,17,0.1)]" />
      <GoogleColor />
    </div>
  );
}

function Anthropic() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="anthropic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="anthropic">
          <path clipRule="evenodd" d={svgPaths.p2b58a680} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LogoBall2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center mr-[-6px] relative rounded-[48px] shrink-0 size-[40px] z-[1]" data-name="logo-ball">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[1px_1px_4px_0px_rgba(17,17,17,0.1)]" />
      <Anthropic />
    </div>
  );
}

function Logos() {
  return (
    <div className="box-border content-stretch flex h-[32px] isolate items-center pl-0 pr-[6px] py-0 relative shrink-0" data-name="logos">
      <LogoBall />
      <LogoBall1 />
      <LogoBall2 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline justify-end relative shrink-0 w-full" data-name="content">
      <Logos />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[6px] shadow-[0px_1px_3px_0px_rgba(17,17,17,0.15)] shrink-0 w-[310px]">
      <Frame19 />
      <Content />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame10 />
      <Frame9 />
      <Frame2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#f9f9f9] relative rounded-[6px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[20px] relative w-full">
          <Frame24 />
          <Frame23 />
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">API 키 목록</p>
      </div>
      <div className="bg-[#00c781] box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center min-w-[100px] px-[20px] py-[10px] relative rounded-[6px] shrink-0" data-name="btn">
        <div className="relative shrink-0 size-[16.667px]" data-name="ic-plus">
          <div className="absolute inset-[17.708%]" data-name="icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path clipRule="evenodd" d={svgPaths.p2504e540} fill="var(--fill-0, white)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
        <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-white">
          <p className="leading-[20px]">API 키 생성</p>
        </div>
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-neutral-100 relative shrink-0 w-full" data-name="table-header">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[20px] py-[9px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#6e6e6e] text-[14px]">
            <p className="leading-[20px]">이름</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#111111] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Project Nexus</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#111111] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Innovation Hub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#111111] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Research Gateway</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#111111] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Development Sphere</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#111111] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Collaboration Station</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#111111] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Discovery Lab</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#111111] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Impact Zone</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#111111] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Future Works</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnName() {
  return (
    <div className="content-stretch flex flex-col grow items-center min-h-px min-w-[150px] relative shrink-0" data-name="column-name" style={{ flex: '1.5 1 0%' }}>
      <TableHeader />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="bg-neutral-100 relative shrink-0 w-full" data-name="table-header">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[20px] py-[9px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6e6e6e] text-[14px] text-nowrap">
            <p className="leading-[20px] whitespace-pre">API 키</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px]">
            <p className="leading-[20px]">sk-....Z7A6</p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="ic-copy">
            <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
                <path d={svgPaths.p295d3fb0} fill="var(--fill-0, #333333)" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px]">
            <p className="leading-[20px]">sk-....O5P2</p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="ic-copy">
            <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
                <path d={svgPaths.p295d3fb0} fill="var(--fill-0, #333333)" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px]">
            <p className="leading-[20px]">sk-....S3T4</p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="ic-copy">
            <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
                <path d={svgPaths.p295d3fb0} fill="var(--fill-0, #333333)" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px]">
            <p className="leading-[20px]">sk-....W7X8</p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="ic-copy">
            <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
                <path d={svgPaths.p295d3fb0} fill="var(--fill-0, #333333)" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px]">
            <p className="leading-[20px]">sk-....C1D2</p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="ic-copy">
            <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
                <path d={svgPaths.p295d3fb0} fill="var(--fill-0, #333333)" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px]">
            <p className="leading-[20px]">sk-....G5H6</p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="ic-copy">
            <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
                <path d={svgPaths.p295d3fb0} fill="var(--fill-0, #333333)" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px]">
            <p className="leading-[20px]">sk-....W1X2</p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="ic-copy">
            <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
                <path d={svgPaths.p295d3fb0} fill="var(--fill-0, #333333)" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px]">
            <p className="leading-[20px]">sk-....A5B6</p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="ic-copy">
            <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
                <path d={svgPaths.p295d3fb0} fill="var(--fill-0, #333333)" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnName1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 min-w-[180px]" data-name="column-name" style={{ flex: '2 1 0%' }}>
      <TableHeader1 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function ChevronSelectorVertical() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-selector-vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="chevron-selector-vertical">
          <g id="Icon">
            <path d={svgPaths.p128d1480} fill="var(--fill-0, #6E6E6E)" />
            <path d={svgPaths.p8667000} fill="var(--fill-0, #6E6E6E)" />
            <path d={svgPaths.p128d1480} stroke="var(--stroke-0, #6E6E6E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p8667000} stroke="var(--stroke-0, #6E6E6E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="bg-neutral-100 relative shrink-0 w-full" data-name="table-header">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-end px-[20px] py-[9px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6e6e6e] text-[14px] text-nowrap">
            <p className="leading-[20px] whitespace-pre">한도($)</p>
          </div>
          <ChevronSelectorVertical />
        </div>
      </div>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px] text-right">
            <p className="leading-[20px]">000000.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px] text-right">
            <p className="leading-[20px]">00000.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px] text-right">
            <p className="leading-[20px]">-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px] text-right">
            <p className="leading-[20px]">0000.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px] text-right">
            <p className="leading-[20px]">0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnEmail() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 min-w-[120px]" data-name="column-email" style={{ flex: '1 1 0%' }}>
      <TableHeader2 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      {[...Array(2).keys()].map((_, i) => (
        <TableCell20 key={i} />
      ))}
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="bg-neutral-100 relative shrink-0 w-full" data-name="table-header">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center px-[20px] py-[9px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#6e6e6e] text-[14px]">
            <p className="leading-[20px]">생성자</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px]">
            <p className="leading-[20px]">홍길동</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[60px] items-center p-[20px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#9e9e9e] text-[14px] text-nowrap">
            <p className="leading-[20px] whitespace-pre">홍길동</p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="ic-error">
            <div className="absolute inset-[8.333%]" data-name="icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d={svgPaths.p54bef00} fill="var(--fill-0, #9E9E9E)" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnName2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 min-w-[110px]" data-name="column-name" style={{ flex: '1 1 0%' }}>
      <TableHeader3 />
      <TableCell21 />
      <TableCell21 />
      <TableCell21 />
      <TableCell21 />
      <TableCell21 />
      <TableCell22 />
      <TableCell21 />
      <TableCell21 />
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="bg-neutral-100 relative shrink-0 w-full" data-name="table-header">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center px-[20px] py-[9px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#6e6e6e] text-[14px]">
            <p className="leading-[20px]">사용자</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[60px] items-center p-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px]">
            <p className="leading-[20px]">홍길동</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[60px] items-center p-[20px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#9e9e9e] text-[14px] text-nowrap">
            <p className="leading-[20px] whitespace-pre">홍길동</p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="ic-error">
            <div className="absolute inset-[8.333%]" data-name="icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d={svgPaths.p54bef00} fill="var(--fill-0, #9E9E9E)" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnName3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 min-w-[110px]" data-name="column-name" style={{ flex: '1 1 0%' }}>
      <TableHeader4 />
      <TableCell23 />
      <TableCell24 />
      <TableCell23 />
      <TableCell23 />
      <TableCell23 />
      <TableCell23 />
      <TableCell23 />
      <TableCell23 />
    </div>
  );
}

function ChevronSelectorVertical1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-selector-vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="chevron-selector-vertical">
          <g id="Icon">
            <path d={svgPaths.p128d1480} fill="var(--fill-0, #6E6E6E)" />
            <path d={svgPaths.p8667000} fill="var(--fill-0, #6E6E6E)" />
            <path d={svgPaths.p128d1480} stroke="var(--stroke-0, #6E6E6E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p8667000} stroke="var(--stroke-0, #6E6E6E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="bg-neutral-100 h-[38px] relative shrink-0 w-full" data-name="table-header">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[38px] items-center px-[20px] py-[9px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6e6e6e] text-[14px] text-nowrap">
            <p className="leading-[20px] whitespace-pre">생성일</p>
          </div>
          <ChevronSelectorVertical1 />
        </div>
      </div>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex h-[60px] items-start p-[20px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#111111] text-[14px] w-[80px]">
            <p className="leading-[20px]">0000.00.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnRecentActivity() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 min-w-[130px]" data-name="column-recent_activity" style={{ flex: '1.2 1 0%' }}>
      <TableHeader5 />
      {[...Array(8).keys()].map((_, i) => (
        <TableCell25 key={i} />
      ))}
    </div>
  );
}

function ChevronSelectorVertical2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-selector-vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="chevron-selector-vertical">
          <g id="Icon">
            <path d={svgPaths.p128d1480} fill="var(--fill-0, #6E6E6E)" />
            <path d={svgPaths.p8667000} fill="var(--fill-0, #6E6E6E)" />
            <path d={svgPaths.p128d1480} stroke="var(--stroke-0, #6E6E6E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p8667000} stroke="var(--stroke-0, #6E6E6E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TableHeader6() {
  return (
    <div className="bg-neutral-100 h-[38px] relative shrink-0 w-full" data-name="table-header">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[38px] items-center px-[20px] py-[9px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6e6e6e] text-[14px] text-nowrap">
            <p className="leading-[20px] whitespace-pre">마지막 사용일</p>
          </div>
          <ChevronSelectorVertical2 />
        </div>
      </div>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex h-[60px] items-start p-[20px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#111111] text-[14px] w-[80px]">
            <p className="leading-[20px]">0000.00.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnRecentActivity1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 min-w-[140px]" data-name="column-recent_activity" style={{ flex: '1.2 1 0%' }}>
      <TableHeader6 />
      {[...Array(8).keys()].map((_, i) => (
        <TableCell26 key={i} />
      ))}
    </div>
  );
}

function ChevronSelectorVertical3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-selector-vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="chevron-selector-vertical">
          <g id="Icon">
            <path d={svgPaths.p128d1480} fill="var(--fill-0, #6E6E6E)" />
            <path d={svgPaths.p8667000} fill="var(--fill-0, #6E6E6E)" />
            <path d={svgPaths.p128d1480} stroke="var(--stroke-0, #6E6E6E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p8667000} stroke="var(--stroke-0, #6E6E6E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TableHeader7() {
  return (
    <div className="bg-neutral-100 h-[38px] relative shrink-0 w-full" data-name="table-header">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[38px] items-center px-[20px] py-[9px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6e6e6e] text-[14px] text-nowrap">
            <p className="leading-[20px] whitespace-pre">만료일</p>
          </div>
          <ChevronSelectorVertical3 />
        </div>
      </div>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex h-[60px] items-start p-[20px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#111111] text-[14px] w-[80px]">
            <p className="leading-[20px]">0000.00.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex h-[60px] items-start p-[20px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#111111] text-[14px] w-[80px]">
            <p className="leading-[20px]">-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnRecentActivity2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 min-w-[130px]" data-name="column-recent_activity" style={{ flex: '1.2 1 0%' }}>
      <TableHeader7 />
      <TableCell27 />
      <TableCell27 />
      <TableCell28 />
      <TableCell28 />
      <TableCell27 />
      <TableCell27 />
      <TableCell28 />
      <TableCell28 />
    </div>
  );
}

function ChevronSelectorVertical4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-selector-vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="chevron-selector-vertical">
          <g id="Icon">
            <path d={svgPaths.p128d1480} fill="var(--fill-0, #6E6E6E)" />
            <path d={svgPaths.p8667000} fill="var(--fill-0, #6E6E6E)" />
            <path d={svgPaths.p128d1480} stroke="var(--stroke-0, #6E6E6E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p8667000} stroke="var(--stroke-0, #6E6E6E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TableHeader8() {
  return (
    <div className="bg-neutral-100 h-[38px] relative shrink-0 w-full" data-name="table-header">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[38px] items-center px-[20px] py-[9px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6e6e6e] text-[14px] text-nowrap">
            <p className="leading-[20px] whitespace-pre">상태</p>
          </div>
          <ChevronSelectorVertical4 />
        </div>
      </div>
    </div>
  );
}

function ModelType() {
  return (
    <div className="bg-[#e7faec] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="model-type">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00ab7f] text-[12px] text-center text-nowrap">
        <p className="leading-[18px] whitespace-pre">활성</p>
      </div>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center p-[20px] relative w-full">
          <ModelType />
        </div>
      </div>
    </div>
  );
}

function ModelType1() {
  return (
    <div className="bg-[#eeeeee] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="model-type">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#9e9e9e] text-[12px] text-center text-nowrap">
        <p className="leading-[18px] whitespace-pre">비활성</p>
      </div>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center p-[20px] relative w-full">
          <ModelType1 />
        </div>
      </div>
    </div>
  );
}

function ColumnStatus() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 min-w-[100px]" data-name="column-status" style={{ flex: '1 1 0%' }}>
      <TableHeader8 />
      {[...Array(6).keys()].map((_, i) => (
        <TableCell29 key={i} />
      ))}
      {[...Array(2).keys()].map((_, i) => (
        <TableCell30 key={i} />
      ))}
    </div>
  );
}

function TableHeader9() {
  return (
    <div className="bg-neutral-100 h-[38px] relative shrink-0 w-full" data-name="table-header">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[38px] items-center justify-center pl-0 pr-[20px] py-[9px] w-full" />
      </div>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="bg-white box-border content-stretch flex h-[60px] items-center justify-center pl-0 pr-[20px] py-[20px] relative shrink-0" data-name="table-cell">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="btn-table-action">
        <div className="absolute left-[4px] size-[16.667px] top-[4px]" data-name="ic-dots-vertical">
          <div className="absolute inset-[13.54%_42.71%]" data-name="icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 15">
              <g id="icon">
                <path d={svgPaths.p22592700} fill="var(--fill-0, #9E9E9E)" />
                <path d={svgPaths.p1174d800} fill="var(--fill-0, #9E9E9E)" />
                <path d={svgPaths.p30cbb600} fill="var(--fill-0, #9E9E9E)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnStatus1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 min-w-[80px]" data-name="column-status" style={{ flex: '0.8 1 0%' }}>
      <TableHeader9 />
      {[...Array(8).keys()].map((_, i) => (
        <TableCell31 key={i} />
      ))}
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="table">
      <ColumnName />
      <ColumnName1 />
      <ColumnEmail />
      <ColumnName2 />
      <ColumnName3 />
      <ColumnRecentActivity />
      <ColumnRecentActivity1 />
      <ColumnRecentActivity2 />
      <ColumnStatus />
      <ColumnStatus1 />
    </div>
  );
}

function TableDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="table-div">
      <Frame20 />
      <Table />
    </div>
  );
}

function Div() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="div">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[80px] pt-[30px] px-[40px] relative w-full h-full">
          <p className="font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#111111] text-[24px] text-nowrap whitespace-pre">API 키</p>
          <Frame16 />
          <TableDiv />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-start justify-between min-h-px min-w-px relative shrink-0">
      <div className="bg-white content-stretch flex flex-col h-full min-h-[964px] items-start relative shrink-0 w-[220px] border-r border-[#e1e1e1]" data-name="sidebar-ai-gateway">
        <MenuWrap />
      </div>
      <Div />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-[60px] w-full min-w-[1440px] bottom-0 min-h-[964px]">
      <Frame11 />
    </div>
  );
}

// Floating 버튼 컴포넌트
function FloatingButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleClick = () => {
    // 모달 상태만 토글, 사이즈는 유지
    setIsModalOpen(!isModalOpen);
    console.log('🔄 Modal toggled, maintaining size state:', isMaximized ? 'maximized' : 'minimized');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log('🔄 Modal closed, maintaining size state:', isMaximized ? 'maximized' : 'minimized');
  };

  const closeModalAndReset = () => {
    setIsModalOpen(false);
    setIsMaximized(false); // 채팅 봇에서 닫을 때만 사이즈 초기화
    console.log('🔄 Modal closed by chat bot, resetting to minimized');
  };

  // 모달이 열릴 때 클래스 강제 적용
  useEffect(() => {
    if (isModalOpen) {
      const modalElement = document.querySelector('.iframe-modal') as HTMLElement;
      if (modalElement) {
        // 모든 클래스 제거 후 올바른 클래스 추가
        modalElement.classList.remove('maximized', 'minimized');
        modalElement.classList.add(isMaximized ? 'maximized' : 'minimized');
        console.log('🎯 Modal opened with class:', isMaximized ? 'maximized' : 'minimized');
        console.log('📏 Modal element classes:', modalElement.className);
      }
    }
  }, [isModalOpen, isMaximized]);

  // iframe에서 오는 메시지 처리 (minimize/maximize 모드 변경 감지)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log('📨 Received message:', event.data, 'from origin:', event.origin);
      
      // 보안을 위해 origin 확인
      if (event.origin !== 'https://staix-onboarding-bot.vercel.app') return;
      
      // 다양한 메시지 형식 처리
      if (event.data) {
        // 모달 닫기 처리
               if (event.data === 'chat-close' || 
                   (event.data.type === 'chat-close') ||
                   (typeof event.data === 'string' && event.data.includes('chat-close'))) {
                 console.log('❌ Chat close message received:', event.data);
                 console.log('🚪 Closing modal and resetting size...');
                 closeModalAndReset();
                 return;
               }
        
        // chat-height-change 메시지 처리
        if (event.data === 'chat-height-change' || 
            event.data.type === 'chat-height-change' ||
            (typeof event.data === 'string' && event.data.includes('chat-height-change'))) {
          console.log('📏 Chat height change received:', event.data);
          
          // 높이값이 함께 전달되는 경우 처리
          if (event.data.height && typeof event.data.height === 'number') {
            console.log('🎯 Setting modal height to:', event.data.height);
            const modalElement = document.querySelector('.iframe-modal') as HTMLElement;
            if (modalElement) {
              modalElement.style.setProperty('height', `${event.data.height}px`, 'important');
              console.log('✅ Modal height set to:', modalElement.style.height);
            }
            return;
          }
          
          // 높이값이 별도로 전달되는 경우 처리
          if (event.data.value && typeof event.data.value === 'number') {
            console.log('🎯 Setting modal height to:', event.data.value);
            const modalElement = document.querySelector('.iframe-modal') as HTMLElement;
            if (modalElement) {
              modalElement.style.setProperty('height', `${event.data.value}px`, 'important');
              console.log('✅ Modal height set to:', modalElement.style.height);
            }
            return;
          }
          
          // 단순 chat-height-change 메시지만 받은 경우 기본 높이 설정
          console.log('🎯 Setting default modal height');
          const modalElement = document.querySelector('.iframe-modal') as HTMLElement;
          if (modalElement) {
            modalElement.style.setProperty('height', '720px', 'important');
            console.log('✅ Modal height set to:', modalElement.style.height);
          }
          return;
        }
        
        // 형식 1: { type: 'resize', isMaximized: boolean }
        if (event.data.type === 'resize' && typeof event.data.isMaximized === 'boolean') {
          console.log('🔄 Resize message received:', event.data);
          console.log('📏 Current isMaximized:', isMaximized, '→ New:', event.data.isMaximized);
          setIsMaximized(event.data.isMaximized);
        }
        // 형식 2: { isMaximized: boolean }
        else if (typeof event.data.isMaximized === 'boolean') {
          console.log('🔄 Direct isMaximized message received:', event.data);
          console.log('📏 Current isMaximized:', isMaximized, '→ New:', event.data.isMaximized);
          setIsMaximized(event.data.isMaximized);
        }
        // 형식 3: { maximized: boolean }
        else if (typeof event.data.maximized === 'boolean') {
          console.log('🔄 Maximized message received:', event.data);
          console.log('📏 Current isMaximized:', isMaximized, '→ New:', event.data.maximized);
          setIsMaximized(event.data.maximized);
        }
        // 형식 4: 단순 문자열
        else if (typeof event.data === 'string') {
          console.log('🔄 String message received:', event.data);
          if (event.data.includes('maximize') || event.data.includes('maximized')) {
            console.log('📏 Setting to maximized based on string');
            setIsMaximized(true);
          } else if (event.data.includes('minimize') || event.data.includes('minimized')) {
            console.log('📏 Setting to minimized based on string');
            setIsMaximized(false);
          }
        }
        // 형식 5: 숫자 (0 = minimize, 1 = maximize)
        else if (typeof event.data === 'number') {
          console.log('🔄 Number message received:', event.data);
          setIsMaximized(event.data === 1);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [isMaximized]);

  return (
    <>
      <button className="floating-button" onClick={handleClick}>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.6258 7.02583C21.6258 6.43382 21.6252 6.03359 21.6001 5.72475C21.5757 5.42507 21.5314 5.27498 21.4792 5.17194C21.3501 4.91726 21.142 4.70617 20.8817 4.57286C20.7724 4.51694 20.616 4.47167 20.3132 4.4468C20.0028 4.42132 19.6015 4.4202 19.0129 4.4202H18.6C17.4342 4.4202 16.5999 4.42088 15.9457 4.47456C15.2991 4.52764 14.8879 4.62965 14.5581 4.79838C13.9097 5.13036 13.3855 5.65836 13.0586 6.30301C12.8939 6.62773 12.7933 7.03364 12.7408 7.67926C12.6876 8.33367 12.6871 9.16915 12.6871 10.3416V19.5798H19.0129C19.6015 19.5798 20.0028 19.5787 20.3132 19.5532C20.616 19.5283 20.7724 19.4831 20.8817 19.4271C21.142 19.2938 21.3501 19.0827 21.4792 18.8281C21.5314 18.725 21.5757 18.5749 21.6001 18.2752C21.6252 17.9664 21.6258 17.5662 21.6258 16.9742V7.02583ZM2.37416 16.9742C2.37416 17.5662 2.37482 17.9664 2.3999 18.2752C2.42427 18.5749 2.46858 18.725 2.52075 18.8281C2.6499 19.0827 2.85803 19.2938 3.11831 19.4271C3.22755 19.4831 3.38398 19.5283 3.68678 19.5532C3.99715 19.5787 4.39854 19.5798 4.98708 19.5798H11.3129V10.3416L11.3051 8.81611C11.2983 8.37894 11.2858 8.00645 11.2592 7.67926C11.2067 7.03364 11.1061 6.62773 10.9414 6.30301C10.6145 5.65836 10.0903 5.13036 9.44191 4.79838C9.11213 4.62965 8.70086 4.52764 8.05432 4.47456C7.4001 4.42088 6.56582 4.4202 5.4 4.4202H4.98708C4.39854 4.4202 3.99715 4.42132 3.68678 4.4468C3.38398 4.47167 3.22755 4.51694 3.11831 4.57286C2.85803 4.70617 2.6499 4.91727 2.52075 5.17194C2.46858 5.27498 2.42427 5.42507 2.3999 5.72475C2.37482 6.03359 2.37416 6.43382 2.37416 7.02583V16.9742ZM23 16.9742C23 17.5422 23.0008 18.0122 22.9698 18.3944C22.938 18.7855 22.8693 19.1482 22.6967 19.4884C22.4304 20.0135 22.0073 20.4364 21.4916 20.7005C21.1597 20.8703 20.8067 20.9383 20.4218 20.9699C20.0443 21.0009 19.5793 21 19.0129 21H4.98708C4.42067 21 3.95566 21.0009 3.57823 20.9699C3.19335 20.9383 2.84034 20.8703 2.50845 20.7005C1.99273 20.4364 1.56959 20.0135 1.30326 19.4884C1.13071 19.1482 1.06202 18.7855 1.03022 18.3944C0.99916 18.0122 1 17.5422 1 16.9742V7.02583C1 6.45777 0.99916 5.98778 1.03022 5.60563C1.06202 5.21448 1.13071 4.85184 1.30326 4.51157C1.56959 3.98654 1.99273 3.56357 2.50845 3.29954C2.84034 3.12966 3.19335 3.06167 3.57823 3.03007C3.95566 2.9991 4.42067 3 4.98708 3H5.4C6.544 3 7.44262 2.99861 8.16399 3.05783C8.89272 3.11768 9.50044 3.24222 10.0529 3.52506C10.8599 3.93824 11.5343 4.57328 12 5.35582C12.4657 4.57328 13.1401 3.93824 13.9471 3.52506C14.4996 3.24222 15.1073 3.11768 15.836 3.05783C16.5574 2.99861 17.456 3 18.6 3H19.0129C19.5793 3 20.0443 2.9991 20.4218 3.03007C20.8067 3.06167 21.1597 3.12966 21.4916 3.29954C22.0073 3.56357 22.4304 3.98654 22.6967 4.51157C22.8693 4.85184 22.938 5.21448 22.9698 5.60563C23.0008 5.98778 23 6.45777 23 7.02583V16.9742Z" fill="currentColor"/>
        </svg>
      </button>

      {/* iframe 모달 - 링크의 실제 화면만 표시 */}
      <div 
        className={`iframe-modal-overlay ${isModalOpen ? 'visible' : 'hidden'}`} 
        onClick={closeModal}
      >
        <div 
          className={`iframe-modal ${isMaximized ? 'maximized' : 'minimized'}`}
          onClick={(e) => e.stopPropagation()}
        >
            <iframe
              src="https://staix-onboarding-bot.vercel.app/"
              className="iframe-content"
              title="Staix Onboarding Bot"
              allowFullScreen
              scrolling="no"
            onLoad={() => {
              console.log('🚀 iframe loaded, sending initial message');
              // iframe 로드 후 부모 창에 초기 메시지 전송
              try {
                const iframe = document.querySelector('.iframe-content') as HTMLIFrameElement;
                if (iframe && iframe.contentWindow) {
                  iframe.contentWindow.postMessage({ type: 'parentReady' }, '*');
                }
              } catch (error) {
                console.log('⚠️ Could not send initial message to iframe:', error);
              }
            }}
          />
        </div>
      </div>
    </>
  );
}

export default function Api() {
  return (
    <div className="bg-white relative w-full h-full min-h-screen" data-name="API 키">
      <Gnb />
      <Frame1 />
      <FloatingButton />
    </div>
  );
}