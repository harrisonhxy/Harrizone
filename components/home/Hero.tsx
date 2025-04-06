import React from 'react'
import Image from 'next/image'
// import {ContainerScroll} from '@/components/ui/container-scroll-animation'
import { CardContainer } from '../ui/3d-card'
import DemoImageMobileLight from './img/demo_mobile_light.png'
import DemoImageMobileDark from './img/demo_mobile_dark.png'
// import RepoOfTheDay from '@/components/svg/RepoOfTheDay'
import { HomeSection, SectionTitle } from './components/HomeSection'
// import RossIndex from '@/components/svg/RossIndex'
// import DemoImageLight from './img/demo_light.png'
// import DemoImageDark from './img/demo_dark.png'
import { cn } from '@/lib/utils' // 添加cn工具函数
import Marquee from 'react-fast-marquee' // 添加图标动画
import {
  Azure,
  Claude,
  Cloudflare,
  DeepSeek,
  Gemini,
  GithubCopilot,
  Grok,
  OpenAI,
  OpenRouter,
  SiliconCloud,
  Vercel,
  Zhipu,
} from '@lobehub/icons'

// 创建通用图标包装器
const IconWrapper = ({ children }) => {
  return (
    <div
      className={cn(
        'mx-6',
        'text-neutral-800 dark:text-neutral-100',
        'transition-all duration-300 transform opacity-75',
        'hover:scale-125 hover:opacity-100',
        'flex items-center justify-center',
      )}
    >
      {children}
    </div>
  )
}

const HERO_TITLE = {
  firstPart: 'Unify',
  highlight: 'AI',
  lastPart: 'Power',
}
const HERO_DESCRIPTION =
  ' is the ultimate open-source app for all your AI conversations, fully customizable and compatible with any AI provider — all in one sleek interface'
// const DEMO_LINK = 'https://chat.librechat.ai/'
// const GITHUB_LINK = 'https://github.com/danny-avila/librechat'
// const GITHUB_STARS_IMG =
//   'https://img.shields.io/github/stars/danny-avila/librechat?label=librechat&style=social'
// const REPO_OF_THE_DAY_LINK = 'https://trendshift.io/repositories/4685'
// const ROSS_INDEX_LINK = 'https://runacap.com/ross-index/q1-24/'

const HeroTitle = React.memo(() => (
  <div className="w-full text-center">
    <h1 className="text-7xl lg:text-9xl font-bold font-mono inline-block">
      {HERO_TITLE.firstPart}{' '}
      <span className="relative inline-block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
        {HERO_TITLE.highlight}
        <div className="absolute -bottom-1 left-0 right-0">
          <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] blur-sm" />
          <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px" />
          <div className="bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] blur-sm" />
          <div className="bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
        </div>
      </span>{' '}
      {HERO_TITLE.lastPart}
    </h1>
  </div>
))

const HeroDescription = React.memo(() => (
  <span className="mt-4 text-primary/70 text-base md:text-lg lg:text-2xl tracking-wide text-center p-2 lg:p-0">
    <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
      LibreChat
    </span>
    {HERO_DESCRIPTION}
    <div className="flex justify-center mt-4">
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-20 relative">
        {/* Gradients */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      </div>
    </div>
  </span>
))

const HeroLinks = React.memo(() => (
  <div className="flex items-center justify-center gap-x-14 flex-wrap">
    <CardContainer className="inter-var">
      {/*  <Link href={REPO_OF_THE_DAY_LINK}>*/}
      {/*    <CardBody className="bg-transparent w-auto h-auto px-12">*/}
      {/*      <CardItem*/}
      {/*        translateZ="100"*/}
      {/*        className="cursor-pointer shadow-2xl dark:hover:shadow-emerald-500/[0.1]"*/}
      {/*      >*/}
      {/*        <RepoOfTheDay />*/}
      {/*      </CardItem>*/}
      {/*    </CardBody>*/}
      {/*  </Link>*/}
      {/*</CardContainer>*/}
      {/*<div className="flex gap-4 flex-wrap items-center justify-center">*/}
      {/*  <HoverBorderGradient*/}
      {/*    onClick={() => window.open(DEMO_LINK, '_blank')}*/}
      {/*    containerClassName="rounded-full"*/}
      {/*    as="button"*/}
      {/*    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"*/}
      {/*  >*/}
      {/*    <span>Try demo</span>*/}
      {/*  </HoverBorderGradient>*/}
      {/*</div>*/}
      {/*<CardContainer className="inter-var">*/}
      {/*  <Link href={ROSS_INDEX_LINK}>*/}
      {/*    <CardBody className="bg-transparent w-full h-full px-12">*/}
      {/*      <CardItem*/}
      {/*        translateZ="100"*/}
      {/*        className="cursor-pointer shadow-2xl dark:hover:shadow-emerald-500/[0.1]"*/}
      {/*      >*/}
      {/*        <RossIndex />*/}
      {/*      </CardItem>*/}
      {/*    </CardBody>*/}
      {/*  </Link>*/}
    </CardContainer>
    {/* 移除REPO_OF_THE_DAY */}
    {/* 移除Ross Index部分 */}
    {/* 移除Try demo按钮 */}
  </div>
))

export function Hero() {
  return (
    <HomeSection>
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-4 md:min-h-[calc(60vh-100px)] lg:py-20 px-4">
        <HeroTitle />
        <HeroDescription />
        <HeroLinks />
        {/* Desktop */}
        {/*<ContainerScroll className="hidden md:block">*/}
        {/*<Image*/}
        {/*  src={DemoImageDark}*/}
        {/*  alt="LibreChat UI Dark"*/}
        {/*  height={800}*/}
        {/*  width={1600}*/}
        {/*  className="dark:block hidden mx-auto rounded-2xl object-cover object-left-top w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"*/}
        {/*  draggable={false}*/}
        {/*/>*/}
        {/*<Image*/}
        {/*  src={DemoImageLight}*/}
        {/*  alt="LibreChat UI Light"*/}
        {/*  height={800}*/}
        {/*  width={1600}*/}
        {/*  className="block dark:hidden mx-auto rounded-2xl object-cover object-left-top w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"*/}
        {/*  draggable={false}*/}
        {/*/>*/}
        {/*</ContainerScroll>*/}
        {/* Mobile */}
        <div className="block md:hidden">
          <Image
            src={DemoImageMobileDark}
            alt="LibreChat UI Dark Mobile"
            height={400}
            width={800}
            className="dark:block hidden mx-auto rounded-2xl object-cover object-left-top w-full max-w-sm"
            draggable={false}
          />
          <Image
            src={DemoImageMobileLight}
            alt="LibreChat UI Light Mobile"
            height={400}
            width={800}
            className="block dark:hidden mx-auto rounded-2xl object-cover object-left-top w-full max-w-sm"
            draggable={false}
          />
        </div>
        {/* 直接放入Tech Stack内容 */}
        <div className="w-full pt-16">
          <SectionTitle>Tech Stack</SectionTitle>
          <div className="flex justify-center w-full max-w-7xl h-[80px] my-[30px] relative">
            {/* 左侧渐变遮罩 */}
            <div className="absolute left-0 top-0 w-[100px] h-full z-10 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
            {/* 右侧渐变遮罩 */}
            <div className="absolute right-0 top-0 w-[100px] h-full z-10 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
            <Marquee
              pauseOnHover
              autoFill
              gradient
              direction="right"
              gradientColor="var(--background)"
              speed={60}
            >
              <IconWrapper>
                <OpenAI size={50} />
              </IconWrapper>

              <IconWrapper>
                <Grok size={50} />
              </IconWrapper>

              <IconWrapper>
                <Claude.Color size={50} />
              </IconWrapper>

              <IconWrapper>
                <Zhipu size={50} />
              </IconWrapper>

              <IconWrapper>
                <OpenRouter size={50} />
              </IconWrapper>

              <IconWrapper>
                <Gemini.Color size={50} />
              </IconWrapper>

              <IconWrapper>
                <Azure size={50} />
              </IconWrapper>

              <IconWrapper>
                <GithubCopilot size={50} />
              </IconWrapper>

              <IconWrapper>
                <DeepSeek.Color size={50} />
              </IconWrapper>

              <IconWrapper>
                <SiliconCloud size={50} />
              </IconWrapper>

              <IconWrapper>
                <Vercel size={50} />
              </IconWrapper>

              <IconWrapper>
                <Cloudflare.Color size={50} />
              </IconWrapper>
            </Marquee>
          </div>
        </div>
      </div>
    </HomeSection>
  )
}
